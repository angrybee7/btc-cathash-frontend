import Image from "next/image";
import React from "react";

const HeroSection = () => (
  <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-2 2xl:px-0 py-10 md:py-20 max-w-7xl mx-auto gap-5" id="home">
    {/* Left: Text Content */}
    <div className="flex-1 flex flex-col items-center md:items-start gap-6">
      <div>
        <h1 className="text-4xl md:text-6xl 2xl:text-[89px] font-bold text-orange-500 leading-tight text-center md:text-left">
          MISSED EARLY
        </h1>
        <h1 className="text-4xl md:text-6xl 2xl:text-[89px] font-bold text-orange-500 leading-tight text-center md:text-left flex items-center gap-2">
          BITCOIN?
          <Image src="/images/star.png" alt="Star Icon" width={38} height={38} className="" />
        </h1>
      </div>
      <p className="font-poppins text-base md:text-[17px]">
        Here's your second chance with $BTC – the first, tradeable <span className="text-[#E95F00] font-semibold">$Cashtag</span> on Solana! We've tokenized the social buzz around $BTC. Trade the conversation and grab your piece of crypto history!
      </p>
      <div className="flex flex-col sm:flex-row gap-[20px] 2xl:gap-[54px] items-center mt-2">
        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 2xl:px-10 py-3 md:py-6 rounded-lg shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-lg">Buy $BTC Now!</a>
        <a href="#xFeed" className="flex items-center gap-2 text-black font-semibold text-lg md:text-xl 2xl:text-2xl hover:underline">
          <Image src="/images/x.png" alt="X Icon" width={38} height={38} className="" />
          Live X Feed
        </a>
      </div>
      <div className="flex items-center mt-4">
        {/* Avatars */}
        <span className="inline-block"><Image src="/images/avatar1.png" alt="avatar1" width={74} height={74} className="" /></span>
        <span className="inline-block -ml-4"><Image src="/images/avatar2.png" alt="avatar2" width={74} height={74} className="" /></span>
        <span className="inline-block -ml-4"><Image src="/images/avatar3.png" alt="avatar3" width={74} height={74} className="" /></span>
        <span className="ml-3 text-[#57CC26] font-semibold flex items-center gap-1">
          <svg width="8" height="8" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#57CC26" /></svg>
          7.7M People Following Bitcoin on X
        </span>
      </div>
    </div>
    {/* Right: Bitcoin Rocket Image */}
    <div className="flex-1 flex justify-center items-center">
      {/* Placeholder for Bitcoin rocket image */}
      <div className="relative">
        <Image src="/images/bg-circle.png" alt="Star Icon" width={101} height={101} className="hidden md:block absolute top-[-50px] right-[-50px] z-0" />
        <Image src="/images/bg-star2.png" alt="Star Icon" width={54} height={54} className="hidden md:block absolute top-[-50px] left-[-50px] z-0" />
        <Image src="/images/bg-star3.png" alt="Star Icon" width={54} height={54} className="hidden md:block absolute top-1/2 left-[-100px] z-0" />
        <Image src="/images/bitcoin-rocket.png" alt="Bitcoin Rocket" width={397} height={480} className="rounded-xl relative z-10"></Image>
      </div>
    </div>
  </section>
);

export default HeroSection; 