import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartData,
  ChartOptions,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { enUS } from 'date-fns/locale';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface DataPoint {
  time: number; // Unix timestamp (seconds)
  mentions: number; // Count of X mentions
  delta: number; // Change from previous point (unused for coloring)
}

interface ApiResponse {
  data: DataPoint[];
  trend: 'bullish' | 'bearish';
}

interface SocialDominanceChartProps {
  interval: '1h' | '7h' | '24h';
}

const SocialDominanceChart: React.FC<SocialDominanceChartProps> = ({ interval }) => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [trend, setTrend] = useState<'bullish' | 'bearish'>('bullish');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (retries = 3) => {
    setLoading(true);
    setError(null);
    for (let i = 0; i < retries; i++) {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:5000/api/social-data', {
          params: { interval },
        });

        console.log('Raw API Response:', response.data);

        const filteredData = response.data.data
          .filter((point) => {
            const isValid =
              point.mentions !== undefined &&
              point.mentions !== null &&
              !isNaN(point.mentions) &&
              point.mentions >= 0 &&
              point.time && typeof point.time === 'number';
            if (!isValid) console.warn('Invalid data point:', point);
            return isValid;
          })
          .sort((a, b) => a.time - b.time);

        if (filteredData.length === 0) {
          throw new Error('No valid mention data available after filtering.');
        }

        // Fill gaps in hourly data
        const filledData: DataPoint[] = [];
        const hourInSeconds = 3600;
        const startTime = filteredData[0].time;
        const endTime = filteredData[filteredData.length - 1].time;
        for (let t = startTime; t <= endTime; t += hourInSeconds) {
          const existingPoint = filteredData.find((p) => p.time === t);
          if (existingPoint) {
            filledData.push(existingPoint);
          } else {
            filledData.push({
              time: t,
              mentions: 0, // Fill missing hours with 0 mentions
              delta: 0,
            });
          }
        }

        console.log('Filled Data:', filledData);
        console.log('Trend:', response.data.trend);
        setData(filledData);
        setTrend(response.data.trend);
        return;
      } catch (err: any) {
        if (err.response?.status === 429 && i < retries - 1) {
          console.warn(`Retry ${i + 1}/${retries} for rate limit error`);
          await new Promise((resolve) => setTimeout(resolve, 2000));
          continue;
        }
        const errorMessage =
          err.response?.status === 404
            ? 'API endpoint not found. Check if the backend server is running on http://localhost:5000.'
            : err.response?.data?.error || err.message || 'Failed to load data. Please try again later.';
        setError(errorMessage);
        console.error('Fetch Error:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
    const refreshInterval = window.setInterval(() => {
      console.log(`Auto-refreshing data for interval: ${interval}`);
      fetchData();
    }, 60 * 1000);
    return () => {
      console.log('Clearing refresh interval');
      window.clearInterval(refreshInterval);
    };
  }, [interval]);

  const chartData: ChartData<'line'> = {
    datasets: [
      {
        label: 'Bitcoin X Mentions',
        data: data.map((point) => ({
          x: point.time * 1000,
          y: point.mentions,
        })),
        borderWidth: 2,
        fill: false,
        borderColor: trend === 'bullish' ? 'green' : 'red', // Entire line color based on trend
        pointRadius: 0,
        pointHoverRadius: 5,
        tension: 0.2,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: { size: 14 },
          generateLabels: () => [
            {
              text: `Trend: ${trend} (Bullish > 0%, Bearish ≤ 0%)`,
              fillStyle: trend === 'bullish' ? 'green' : 'red',
              strokeStyle: trend === 'bullish' ? 'green' : 'red',
              lineWidth: 2,
            },
          ],
        },
      },
      title: {
        display: true,
        text: `Bitcoin ($BTC, #BTC) X Mentions (${interval.toUpperCase()})`,
        font: { size: 18, weight: 'bold' },
        color: '#333',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        callbacks: {
          label: (context) => `Mentions: ${context.parsed.y}`,
          title: (tooltipItems) => {
            const date = new Date(tooltipItems[0].parsed.x);
            return date.toLocaleString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              ...(interval === '24h' && { month: 'short', day: 'numeric' }),
            });
          },
        },
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: interval === '1h' ? 'minute' : 'hour', // Use minutes for 1h, hours for 7h/24h
          displayFormats: {
            minute: 'HH:mm',
            hour: interval === '24h' ? 'MMM d HH:mm' : 'HH:mm',
          },
          tooltipFormat: 'MMM d, HH:mm:ss',
          // stepSize: interval === '1h' ? 15 : interval === '7h' ? 1 : 2, // Tighter ticks: 15min for 1h, 1h for 7h, 2h for 24h
        },
        adapters: {
          date: { locale: enUS },
        },
        title: {
          display: true,
          text: 'Time',
          color: '#333',
          font: { size: 14 },
        },
        grid: { display: false },
        ticks: {
          color: '#333',
          font: { size: 12 },
          maxRotation: 45,
          minRotation: 45,
          maxTicksLimit: interval === '1h' ? 8 : interval === '7h' ? 8 : 12, // More ticks for denser appearance
        },
      },
      y: {
        type: 'linear',
        display: true,
        title: {
          display: true,
          text: 'X Mentions (Count)',
          color: '#333',
          font: { size: 14 },
        },
        beginAtZero: true,
        min: 0,
        suggestedMax:
          data.length > 0
            ? Math.max(...data.map((d) => d.mentions)) * 1.1
            : 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1,
        },
        ticks: {
          stepSize: 10,
          color: '#333',
          font: { size: 12 },
          callback: (tickValue: string | number) =>
            Number.isFinite(Number(tickValue)) ? `${tickValue}` : '',
        },
      },
    },
    layout: { padding: 30 },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <div style={{ width: '100%', height: '500px', position: 'relative' }}>
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !error && data.length > 0 ? (
        <div style={{ width: '100%', height: '100%' }}>
          <Line data={chartData} options={options} />
        </div>
      ) : (
        !loading &&
        !error && (
          <p className="text-center text-gray-500">
            No valid data available. Please check the API response.
          </p>
        )
      )}
    </div>
  );
};

export default SocialDominanceChart;