import Image from "next/image";
import React from "react";

const RoadmapSection = () => (
  <section className="w-full py-16 px-2 flex justify-center relative" id="roadmap">
    <Image src="/images/bg-gradient1.png" alt="Announcement" width={577} height={135} className="hidden md:block absolute right-0 top-0 -translate-y-1/2" />
    <div className="w-full max-w-7xl flex flex-col items-center">
      <div className="mb-1 flex items-center gap-3">
        <span className="bg-[#FFEFCE] text-orange-500 font-semibold px-6 py-2 rounded-[5px] text-sm">
          ROADMAP
        </span>
      </div>
      <h2 className="text-2xl md:text-[55px] font-bold text-center mb-2">
        The Journey of <span className="text-orange-500">$BTC</span>
      </h2>
      <p className="font-poppins text-center mb-8 md:mb-16 text-[17px] relative w-full">
        Each phase brings us closer to making $BTC legendary
        <Image src="/images/ribbon.png" alt="Announcement" width={96} height={78} className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0" />
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Phase 1 */}
        <div className="bg-[#2793FF] rounded-2xl shadow p-6 flex flex-col relative overflow-hidden text-white min-h-[170px] drop-shadow-[0px_7px_11px_#00000040] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="absolute left-5 top-12">
            <p className="font-bold text-lg">PHASE</p>
            <p className="text-[60px] 2xl:text-[130px] leading-none select-none">01</p>
          </div>
          <ul className="list-disc list-inside mt-8 ml-[100px] 2xl:ml-[200px] text-sm font-medium space-y-1">
            <li>Launch the $BTC token on Solana blockchain</li>
            <li>Smart contracts for social volume tracking</li>
            <li>List on Raydium and major Solana DEXs</li>
            <li>Build initial community of early adopters</li>
          </ul>
        </div>
        {/* Phase 2 */}
        <div className="bg-[#2793FF] rounded-2xl shadow p-6 flex flex-col relative overflow-hidden text-white min-h-[170px] drop-shadow-[0px_7px_11px_#00000040] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="absolute left-5 top-12">
            <p className="font-bold text-lg">PHASE</p>
            <p className="text-[60px] 2xl:text-[130px] leading-none select-none">02</p>
          </div>
          <ul className="list-disc list-inside mt-8 ml-[100px] 2xl:ml-[200px] text-sm font-medium space-y-1">
            <li>Implement social mining rewards system</li>
            <li>User engagement with Bitcoin content initiative</li>
            <li>X API for real-time sentiment analysis</li>
            <li>Launch influencer partnership program</li>
          </ul>
        </div>
        {/* Phase 3 */}
        <div className="bg-[#2793FF] rounded-2xl shadow p-6 flex flex-col relative overflow-hidden text-white min-h-[170px] drop-shadow-[0px_7px_11px_#00000040] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="absolute right-5 top-12">
            <p className="font-bold text-lg">PHASE</p>
            <p className="text-[60px] 2xl:text-[130px] leading-none select-none">03</p>
          </div>
          <ul className="list-disc list-inside mt-8 mr-[100px] 2xl:mr-[200px] text-white text-sm font-medium space-y-1">
            <li>Introduce prediction markets for $BTC trends</li>
            <li>Develop trading competitions with prizes</li>
            <li>Implement badges for top contributors</li>
          </ul>
        </div>
        {/* Phase 4 */}
        <div className="bg-[#2793FF] rounded-2xl shadow p-6 flex flex-col relative overflow-hidden text-white min-h-[170px] drop-shadow-[0px_7px_11px_#00000040] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="absolute right-5 top-12">
            <p className="font-bold text-lg">PHASE</p>
            <p className="text-[60px] 2xl:text-[130px] leading-none select-none">04</p>
          </div>
          <ul className="list-disc list-inside mt-8 mr-[100px] 2xl:mr-[200px] text-white text-sm font-medium space-y-1">
            <li>$BTC token recognition across social platforms</li>
            <li>Establish DAO for community governance</li>
            <li>Partner with major crypto media outlets</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection; 