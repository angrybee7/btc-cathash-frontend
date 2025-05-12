import Image from "next/image";
import React from "react";

const HowToBuySection = () => (
  <section className="w-full py-16 px-2 flex justify-center relative" id="howToBuy">
    <Image src="/images/bg-gradient1.png" alt="Announcement" width={577} height={86} className="hidden md:block absolute right-0 top-0 -translate-y-1/2 -z-10"/>
    <Image src="/images/bg-gradient2.png" alt="Announcement" width={577} height={86} className="hidden md:block absolute left-0 top-0 -translate-y-1/2 -z-10" />
    <div className="w-full max-w-7xl flex flex-col items-center">
      <div className="mb-2">
        <span className="bg-[#FFEFCE] text-orange-500 font-bold px-3 py-[10px] rounded-[5px] text-[15px]">
          BUY PROCESS
        </span>
      </div>
      <h2 className="text-2xl md:text-[55px] font-bold text-center mb-10 md:mb-20">
        How to Buy <span className="text-orange-500">$BTC</span><br />
        In 3 Easy Steps
      </h2>
      {/* <p className="font-poppins text-[17px] text-center mb-20">
        What's trending around the first tradeable <span className="text-[#E95F00] font-semibold underline">$Cashtag</span> on Solana.
      </p> */}
      {/* Steps */}
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-start md:items-stretch mb-12">
        {/* Step 1 */}
        <div className="flex-1 flex flex-col items-center text-center text-[22px] relative">
          {/* Wallet Icon */}
          <Image src="/images/bg-link.png" alt="Announcement" width={340} height={16} className="hidden md:block absolute left-[250px] top-[30px]" />
          <div className="relative">
            <Image src="/images/connect-wallet.png" alt="Connect Wallet" width={72} height={72} className="mb-3" />
          </div>
          <div className="font-semibold text-[#2793FF] mb-1">Connect Your Wallet</div>
          <div className="">
            Use a Solana-compatible wallet like Phantom or Solflare. Make sure it's ready to go.
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex-1 flex flex-col items-center text-center text-[22px] relative">
        <Image src="/images/bg-link.png" alt="Announcement" width={340} height={16} className="hidden md:block absolute left-[250px] top-[30px]" />
          {/* Raydium Icon */}
          <Image src="/images/load-raydium.png" alt="Load Raydium" width={72} height={72} className="mb-3" />
          <div className="font-semibold text-[#2793FF] mb-1">Load Up on Raydium</div>
          <div className="">
            $BTC is traded on Raydium, so you'll need some SOL to cover your purchase and fees.
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex-1 flex flex-col items-center text-center text-[22px]">
          {/* Buy Icon */}
          <Image src="/images/buy-raydium.png" alt="Buy Raydium" width={72} height={72} className="mb-3" />
          <div className="font-semibold text-[#2793FF] mb-1">Buy on Raydium</div>
          <div className="">
            Visit Raydium's LaunchLab, find $BTC, and make your trade.
          </div>
        </div>
      </div>
      <a href="#" className="bg-[#2793FF] hover:bg-blue-600 text-white font-bold px-8 py-5 rounded-xl shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-lg mt-4">Buy $BTC Now!</a>
    </div>
  </section>
);

export default HowToBuySection; 