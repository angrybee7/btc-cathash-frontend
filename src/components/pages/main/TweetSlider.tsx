// src/components/pages/main/TweetSlider.tsx

"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";

interface LunarCrushPost {
  creator_avatar: string;
  creator_display_name: string;
  creator_name: string;
  creator_followers: number;
  post_title: string;
  post_link: string;
}

interface TweetSliderProps {
  btcData: LunarCrushPost[];
}

const TweetSlider: React.FC<TweetSliderProps> = ({ btcData }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const flktyRef = useRef<Flickity | null>(null);
  const requestIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (sliderRef.current && btcData.length > 0) {
      // Initialize Flickity
      flktyRef.current = new Flickity(sliderRef.current, {
        accessibility: true,
        resize: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        percentPosition: true,
        setGallerySize: true,
      });

      // Set initial position
      flktyRef.current.x = 0;

      // Start marquee animation
      const play = () => {
        if (flktyRef.current) {
          flktyRef.current.x -= 1.5; // Adjust speed as needed
          flktyRef.current.settle(flktyRef.current.x);
          requestIdRef.current = window.requestAnimationFrame(play);
        }
      };

      // Pause animation
      const pause = () => {
        if (requestIdRef.current) {
          window.cancelAnimationFrame(requestIdRef.current);
          requestIdRef.current = null;
        }
      };

      // Start playing
      play();

      // Add event listeners for pause/resume
      const slider = sliderRef.current;
      slider.addEventListener("mouseenter", pause);
      slider.addEventListener("mouseleave", play);

      // Cleanup on unmount
      return () => {
        pause();
        slider.removeEventListener("mouseenter", pause);
        slider.removeEventListener("mouseleave", play);
        if (flktyRef.current) {
          flktyRef.current.destroy();
        }
      };
    }
  }, [btcData]);

  return (
    <div className="w-full mb-8 overflow-x-hidden">
      <div ref={sliderRef} className="marquee-slider flex">
        {btcData.map((tweet, idx) => (
          <div
            key={idx}
            className="b-slider__slide min-w-[300px] max-w-xs h-48 flex items-center justify-center mx-2"
          >
            <div className="bg-[#181C23] text-white rounded-xl shadow-md p-4 w-full h-full flex flex-col justify-between hover:filter-none transition-all duration-300">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={tweet.creator_avatar}
                  alt={`${tweet.creator_display_name} avatar`}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <div className="text-xs font-bold">
                    {tweet.creator_display_name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {tweet.creator_name}
                  </div>
                </div>
              </div>
              <div className="text-sm mb-4 line-clamp-3">
                {tweet.post_title}
              </div>
              <div className="flex justify-between gap-4 text-xs ">
                <span className="text-gray-400">
                  followers: {tweet.creator_followers}
                </span>

                <span>
                  <a
                    href={tweet.post_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="b-slider__ref w-full h-full flex items-center text-yellow-600"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        tweet.post_link,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    {" "}
                    more detail...
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetSlider;
