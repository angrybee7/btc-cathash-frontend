import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'p16-common-sg.tiktokcdn-us.com', // For TikTok avatars
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com', // For TikTok avatars
      },
      {
        protocol: 'https',
        hostname: 'p19-common-sg.tiktokcdn-us.com', // For TikTok avatars
      },
      {
        protocol: 'https',
        hostname: 'p16-common-va.tiktokcdn-us.com', // For TikTok avatars
      },



      
    ],
  },
};

export default nextConfig;
