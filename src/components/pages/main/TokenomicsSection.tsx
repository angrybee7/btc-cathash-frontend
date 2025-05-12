import Image from "next/image";
import React from "react";

const TokenomicsSection = () => (
  <section className="w-full py-16 px-2 flex justify-center relative" id="tokenomics">
    <Image src="/images/bg-gradient1.png" alt="Announcement" width={577} height={86} className="hidden md:block absolute right-0 top-0 -translate-y-1/2 -z-10" />
    <Image src="/images/bg-gradient2.png" alt="Announcement" width={577} height={86} className="hidden md:block absolute left-0 top-0 -translate-y-1/2 -z-10" />
    <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-center md:items-start">
      {/* Left: Text */}
      <div className="flex-1 items-center md:items-start">
        <div className="mb-3 w-full flex justify-center">
          <span className="bg-[#FFEFCE] text-orange-500 font-semibold px-6 py-2 rounded-[5px] text-sm">TOKENOMICS</span>
        </div>
        <h2 className="text-2xl md:text-3xl 2xl:text-[55px] font-bold mb-2 relative">
          Supply & Distribution of <span className="text-orange-500">$BTC</span>
          <Image src="/images/ribbon.png" alt="Announcement" width={96} height={78} className="hidden md:block absolute bottom-0 right-0 translate-y-1/2" />
        </h2>
        <div className="font-poppins text-[17px] mb-4">Transparent. Fair. Community-first.</div>
        <div className="flex flex-col md:flex-row justify-between gap-2 mb-4 md:text-lg 2xl:text-[22px] mb-2">
          <div className="text-[#34D0DC] font-bold border-l-[5px] border-[#34D0DC] px-3 py-2">100M Total Supply</div>
          <div className="text-[#EC4654] font-bold border-l-[5px] border-[#EC4654] px-3 py-2">20M Reserved for Rewards</div>
        </div>
        <div className="md:text-lg 2xl:text-[22px] text-[#2793FF] font-bold border-l-[5px] border-[#2793FF] px-3 py-2">Contract Address:<br /><span className="font-mono">XXXXXXXXXXXXXXXXXXXXXX</span></div>
      </div>
      {/* Right: Pie Chart */}
      <div className="flex-1 flex justify-center items-center">
        {/* Pie chart SVG */}
        <Image src="/images/tokenomics.png" alt="Tokenomics" width={540} height={351} className="rounded-xl" />
      </div>
    </div>
  </section>
);

export default TokenomicsSection; 