"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { LunarCrushPost, LunarCrushResponse } from "@/types/lunarCrush";
import SocialDominanceChart from "./SocialDominanceChart";

// Define props for the component
interface XFeedLiveSectionProps {
  speed?: number; // Speed in seconds for marquee animation
}

const XFeedLiveSection: React.FC<XFeedLiveSectionProps> = ({ speed = 350 }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0); // Track the drag offset for the current drag
  const [maxTranslateX, setMaxTranslateX] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  // Constants
  const DRAG_THRESHOLD = 2; // Pixels to move before considering it a drag

  // Handle mouse down or touch start
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setIsPaused(false);
    setStartX(clientX);
    setDragOffset(0); // Reset drag offset at the start of each drag
    setHasMoved(false); // Reset movement tracking
  };

  // Handle mouse move or touch move
  const handleDragMove = (clientX: number) => {
    if (!isDragging || !marqueeRef.current || !containerRef.current) return;

    const deltaX = clientX - startX;
    setDragOffset(deltaX); // Update drag offset

    // Only start moving if the user has moved beyond the threshold
    if (!hasMoved && Math.abs(deltaX) < DRAG_THRESHOLD) return;
    setHasMoved(true);

    // Calculate new translateX using the current drag offset
    let newTranslateX = translateX + deltaX;

    // Calculate boundaries
    const containerWidth = containerRef.current.offsetWidth;
    const marqueeWidth = marqueeRef.current.scrollWidth / 2; // Divided by 2 because content is duplicated
    const maxTranslate = 0; // Maximum position (leftmost)
    const minTranslate = -(marqueeWidth - containerWidth); // Minimum position (rightmost)

    // Apply boundaries
    if (newTranslateX > maxTranslate) newTranslateX = maxTranslate;
    if (newTranslateX < minTranslate) newTranslateX = minTranslate;

    setTranslateX(newTranslateX);
    setStartX(clientX); // Update startX to the current position to avoid cumulative jitter
  };

  // Handle mouse up or touch end
  const handleDragEnd = () => {
    setIsDragging(false);
    setHasMoved(false);
    setDragOffset(0); // Reset drag offset
  };

  // Handle click on tweet card to pause marquee
  const handleTweetCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || hasMoved) return;
    setIsPaused(true);
  };

  // Handle mouse down or touch start on marquee to resume
  const handleMarqueeInteraction = () => {
    if (isPaused) {
      setIsPaused(false);
    }
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent text selection
    handleDragStart(e.clientX);
    handleMarqueeInteraction();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd();
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragStart(e.touches[0].clientX);
    handleMarqueeInteraction();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent scrolling while dragging
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  const [intervals, setIntervals] = useState<"1h" | "7h" | "24h">("24h");
  const [tab, setTab] = useState<"tweets" | "announcement" | "btcSd">("tweets");
  const [btcData, setBtcData] = useState<LunarCrushPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [category] = useState<string>("bitcoin");

  useEffect(() => {
    const fetchBtcData = async () => {
      try {
        const response = await axios.get<LunarCrushResponse>(
          "http://localhost:5000/api/btc-data"
        );
        setBtcData(response.data.data || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to load BTC data");
        setLoading(false);
      }
    };

    fetchBtcData();
    const interval = setInterval(fetchBtcData, 60000);
    return () => clearInterval(interval);
  }, []);

  // Calculate maximum translateX when btcData changes
  useEffect(() => {
    if (marqueeRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const marqueeWidth = marqueeRef.current.scrollWidth / 2; // Divided by 2 because content is duplicated
      setMaxTranslateX(-(marqueeWidth - containerWidth));
    }
  }, [btcData]);

  return (
    <section className="flex justify-center px-2 py-12" id="xFeed">
      <div className="w-full max-w-7xl bg-white/80 rounded-3xl shadow-lg p-6 md:p-12 flex flex-col items-center relative mt-0 -mb-8">
        <Image
          src="/images/bg-gradient4.png"
          alt="Announcement"
          width={577}
          height={85}
          className="hidden md:block absolute top-0 left-0 -z-10"
        />
        <Image
          src="/images/bg-gradient5.png"
          alt="Announcement"
          width={577}
          height={100}
          className="hidden md:block absolute bottom-0 right-0 -z-10"
        />
        {/* Badge */}
        <div className="mb-3 w-full relative flex justify-center">
          <span className="bg-[#FFEFCE] text-orange-500 font-semibold px-5 py-2 rounded-[5px] text-sm">
            X FEED LIVE
          </span>
          <Image
            src="/images/ribbon.png"
            alt="Announcement"
            width={96}
            height={78}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 left-[100px] md:left-[200px]"
          />
        </div>
        {/* Headline */}
        <h2 className="text-2xl md:text-[55px] font-extrabold text-center mb-2">
          What's the World
          <br className="hidden md:block" /> Saying About{" "}
          <span className="text-orange-500">$BTC?</span>
        </h2>
        {/* Subtext */}
        <p className="font-poppins text-center mb-4 md:mb-10 relative w-full">
          What's trending around the first tradeable{" "}
          <span className="text-orange-500 font-semibold">$Cashtag</span> on
          Solana.
          <Image
            src="/images/ribbon.png"
            alt="Announcement"
            width={96}
            height={78}
            className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[100px] md:right-[200px]"
          />
        </p>
        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-gray-200 w-full max-w-lg justify-center">
          <button
            onClick={() => setTab("tweets")}
            className={`flex items-center gap-2 font-semibold pb-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border-b-2 cursor-pointer ${
              tab === "tweets"
                ? "text-orange-500 border-orange-400"
                : "text-gray-500 border-transparent hover:text-orange-400"
            }`}
          >
            <Image
              src="/images/all-tweets.png"
              alt="All Tweets"
              width={13}
              height={18}
            />
            All Tweets
          </button>
          <button
            onClick={() => setTab("announcement")}
            className={`flex items-center gap-2 font-semibold pb-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border-b-2 cursor-pointer ${
              tab === "announcement"
                ? "text-orange-500 border-orange-400"
                : "text-gray-500 border-transparent hover:text-orange-400"
            }`}
          >
            <Image
              src="/images/announcement.png"
              alt="Announcement"
              width={20}
              height={20}
            />
            Announcement
          </button>
          <button
            onClick={() => setTab("btcSd")}
            className={`flex items-center gap-2 font-semibold pb-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border-b-2 cursor-pointer ${
              tab === "btcSd"
                ? "text-orange-500 border-orange-400"
                : "text-gray-500 border-transparent hover:text-orange-400"
            }`}
          >
            <Image
              src="/images/btc.sd.png"
              alt="BTC.SD"
              width={14}
              height={20}
            />
            BTC.SD
            <div className="relative group">
              <span className="text-gray-400 hover:text-gray-600 cursor-help border border-gray-400 px-[3px] rounded-full text-[8px]">
                ?
              </span>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                Bitcoin Social Dominance (BTC.SD) tracks the frequency and
                surrounding conversation of Bitcoin mentions. A rising BTC.SD
                suggests a bullish trend, while a falling BTC.SD indicates a
                bearish one.
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </button>
        </div>
        {/* Tab Content */}
        {tab === "tweets" && (
          <div className="marquee-wrapper">
            {loading ? (
              <div className="text-center text-gray-500">Loading tweets...</div>
            ) : error ? (
              <div className="text-center text-red-500">{error}</div>
            ) : btcData.length === 0 ? (
              <div className="text-center text-gray-500">No tweets available.</div>
            ) : (
              <div className="marquee-container" ref={containerRef}>
                <div
                  className="marquee"
                  ref={marqueeRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{
                    transform: `translateX(${translateX}px)`,
                    cursor: isDragging ? "grabbing" : "grab",
                  }}
                >
                  {btcData.map((tweet, idx) => (
                    <div
                      key={idx}
                      className="tweet-card"
                      onClick={handleTweetCardClick}
                    >
                      <div className="tweet-header">
                        <Image
                          src={tweet.creator_avatar}
                          alt="$BTC Logo"
                          width={32}
                          height={32}
                          className="avatar rounded-full"
                        />
                        <div>
                          <div className="creator-name">{tweet.creator_display_name}</div>
                          <div className="creator-username">{tweet.creator_name}</div>
                        </div>
                      </div>
                      <div className="tweet-content text-wrap">
                        <span className="tweet-title">{tweet.post_title}</span>
                      </div>
                      <div className="tweet-footer">
                        <span>followers: {tweet.creator_followers}</span>
                        <a
                          href={tweet.post_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tweet-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          more detail...
                        </a>
                      </div>
                    </div>
                  ))}
                  {/* Duplicate the content for seamless looping */}
                  {btcData.map((tweet, idx) => (
                    <div
                      key={`duplicate-${idx}`}
                      className="tweet-card"
                      onClick={handleTweetCardClick}
                    >
                      <div className="tweet-header">
                        <Image
                          src={tweet.creator_avatar}
                          alt="$BTC Logo"
                          width={32}
                          height={32}
                          className="avatar rounded-full"
                        />
                        <div>
                          <div className="creator-name">{tweet.creator_display_name}</div>
                          <div className="creator-username">{tweet.creator_name}</div>
                        </div>
                      </div>
                      <div className="tweet-content text-wrap">
                        <span className="tweet-title">{tweet.post_title}</span>
                      </div>
                      <div className="tweet-footer">
                        <span>followers: {tweet.creator_followers}</span>
                        <a
                          href={tweet.post_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="tweet-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          more detail...
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Scoped CSS for the component */}
            <style jsx>{`
              .marquee-wrapper {
                width: 100%;
                overflow: hidden;
                margin-bottom: 2rem;
              }

              .marquee-container {
                width: 100%;
                overflow: hidden;
                white-space: nowrap;
                touch-action: none; /* Prevent browser scrolling on touch */
              }

              .marquee {
                display: inline-flex;
                gap: 2rem;
                animation: ${
                  !isDragging && !isPaused
                    ? `marquee ${speed}s linear infinite`
                    : "none"
                };
              }

              .marquee:hover {
                animation-play-state: ${
                  isDragging || isPaused ? "running" : "paused"
                };
              }

              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .tweet-card {
                background-color: #151618;
                color: white;
                border-radius: 0.75rem;
                padding: 1rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                min-width: 280px;
                max-width: 320px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                user-select: none; /* Prevent text selection while dragging */
              }

              .tweet-header {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0.5rem;
              }

              .avatar {
                border-radius: 50%;
              }

              .creator-name {
                font-weight: bold;
                font-size: 1rem;
              }

              .creator-username {
                font-size: 0.75rem;
                color: #9ca3af;
              }

              .tweet-content {
                font-size: 0.875rem;
                margin-top: 1rem;
                flex: 1;
                word-wrap: break-word; /* Ensure long text wraps */
              }

              .tweet-title {
                color: #60a5fa;
              }

              .tweet-footer {
                display: flex;
                justify-content: space-between;
                font-size: 0.75rem;
                color: #9ca3af; /* Fixed invalid color value */
              }

              .tweet-link {
                color: #f59e0b;
                text-decoration: none;
              }

              .tweet-link:hover {
                text-decoration: underline;
              }

              @media (max-width: 768px) {
                .tweet-card {
                  min-width: 260px;
                  max-width: 300px;
                }
              }
            `}</style>
          </div>
        )}
        {tab === "announcement" && (
          <div className="flex flex-col items-center w-full justify-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg pb-6 flex flex-col max-w-md w-full relative">
              <Image
                src="/images/btc-rocket-announcement1.png"
                alt="Coming Soon"
                width={180}
                height={100}
                className="mb-4 absolute top-0 right-0"
              />
              <Image
                src="/images/btc-rocket-announcement2.png"
                alt="Coming Soon"
                width={463}
                height={201}
                className="mb-4"
              />
              <div className="px-6 mt-[-100px]">
                <Image
                  src="/images/lock.png"
                  alt="Lock Icon"
                  width={26}
                  height={26}
                />
                <div className="font-bold text-[#E95F00] text-[26px] mb-2">
                  Coming Soon
                </div>
                <div className="text-[15px] mb-4">
                  $BTC cashtag mining + early adopter rewards! Stay tuned.
                </div>
                <hr className="border-[#E95F00]" />
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="bg-blue-500 hover:bg-blue-600 font-bold text-white px-5 py-4 rounded-[5px] shadow transition text-xs mt-3 flex gap-2"
                  >
                    <Image
                      src="/images/x-white.png"
                      alt="X Icon"
                      width={15}
                      height={15}
                    />
                    FOLLOW ON X
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {tab === "btcSd" && (
          <div className="flex flex-col items-center w-full justify-center mb-8">
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center max-w-2xl w-full">
              <div className="flex items-center gap-2 md:gap-4 mb-4">
                <span className="text-[#26A107] font-medium text-xs md:text-base flex items-center gap-1">
                  <Image
                    src="/images/bullish.png"
                    alt="Bullish"
                    width={20}
                    height={20}
                  />
                  Bullish
                </span>
                <span className="text-[#D00F0F] font-medium text-xs md:text-base flex items-center gap-1">
                  <Image
                    src="/images/bearish.png"
                    alt="Bearish"
                    width={20}
                    height={20}
                  />
                  Bearish
                </span>
                <div className="flex gap-2 ml-4">
                  {(["1h", "7h", "24h"] as const).map((int) => (
                    <button
                      key={int}
                      className={`px-2 py-1 text-xs font-bold rounded text-center transition-colors ${
                        intervals === int
                          ? "bg-orange-100 text-orange-500 hover:bg-orange-600"
                          : "bg-gray-100 hover:bg-orange-600"
                      }`}
                      onClick={() => setIntervals(int)}
                    >
                      {int}
                    </button>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-center mb-4">
                <SocialDominanceChart interval={intervals} />
              </div>
              <p className="text-center">
                Bitcoin Social Dominance (BTC.SD) tracks the frequency and
                surrounding conversation of Bitcoin mentions. A rising BTC.SD
                suggests a bullish trend, while a falling BTC.SD indicates a
                bearish one.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default XFeedLiveSection;