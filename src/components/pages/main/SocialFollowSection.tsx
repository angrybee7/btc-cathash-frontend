import Image from "next/image";
import React from "react";

const SocialFollowSection = () => (
  <section className="w-full py-12 px-2 flex justify-center relative">
    <Image src="/images/bg-gradient1.png" alt="Announcement" width={577} height={86} className="hidden md:block absolute right-0 top-0 -translate-y-1/2" />
    <div className="w-full max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-5 2xl:gap-10">
      {/* Left: Text */}
      <div className="flex-1 items-center md:items-start">
        <div className="mb-3 flex justify-center md:justify-start">
          <span className="bg-[#FFEFCE] text-orange-500 font-semibold px-6 py-2 rounded-[5px] text-sm">
            $BTC SOCIALS
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl 2xl:text-[55px] font-bold mb-2 text-center md:text-left">
          Follow us on Social<br />for Daily <span className="text-orange-500">$BTC</span> <span className="text-orange-400">UPDATES</span>
        </h2>
      </div>
      {/* Right: Social Cards */}
      <div className="flex-1 flex flex-col md:flex-row gap-3 2xl:gap-6 justify-end">
        {/* Telegram Card */}
        <div className="flex flex-col items-center md:items-start rounded-xl p-4 min-w-[200px]">
          {/* Telegram Icon */}
          <Image src="/images/social-telegram.png" alt="Telegram Icon" width={64} height={64} className="mb-3" />
          <p className="text-[#605B5B] text-sm 2xl:text-[17px] mb-2 text-center md:text-left font-poppins">
            Get the latest updates, alpha leaks, and community drops — all in one place.
          </p>
          <a href="#" className="text-orange-500 font-semibold flex items-center gap-1 underline">
            JOIN TELEGRAM <span className="text-lg">→</span>
          </a>
        </div>
        {/* X Card */}
        <div className="flex flex-col items-center md:items-start rounded-xl p-4 min-w-[200px]">
          {/* X Icon */}
          <Image src="/images/social-x.png" alt="X Icon" width={64} height={64} className="mb-3" />
          <p className="text-[#605B5B] text-sm 2xl:text-[17px] mb-2 text-center md:text-left font-poppins">
            Don’t miss the hype. Follow the $cashtag conversation as it happens.
          </p>
          <a href="#" className="text-orange-500 font-semibold flex items-center gap-1 underline">
            FOLLOW $BTC ON X <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default SocialFollowSection; 