import Image from "next/image";
import React from "react";

const AboutSection = () => (
  <section className="w-full py-16 px-2 flex justify-center" id="about">
    <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 items-center md:items-start">
      {/* Left: Text and Features */}
      <div className="flex-1 items-center md:items-start">
        <div className="mb-3 flex justify-center md:justify-start">
          <span className="bg-orange-100 text-orange-500 font-semibold px-8 py-2 rounded-[5px] text-sm">
            ABOUT
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl 2xl:text-[55px] font-bold mb-6 text-center md:text-left">
          What You Should<br />Know About <span className="text-orange-500">$BTC?</span>
        </h2>
        <div className="flex flex-col gap-6">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="min-w-12 2xl:min-w-16 min-h-12 2xl:min-h-16 rounded-lg bg-white mt-1 shadow-md">
              <Image src="/images/logo.png" alt="Logo" width={63} height={63} className="min-w-12 2xl:min-w-16 min-h-12 2xl:min-h-16" />
            </div>
            <div>
              <div className="font-bold text-lg 2xl:text-[25px]">Tokenizing the $BTC cashtag</div>
              <div className="text-sm 2xl:text-[17px]">
                $BTC captures the viral energy of tweets, trends, and discussions – letting you literally trade the market's collective excitement.
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="min-w-12 2xl:min-w-16 min-h-12 2xl:min-h-16 rounded-lg bg-white mt-1 shadow-md">
              <Image src="/images/logo.png" alt="Logo" width={63} height={63} className="min-w-12 2xl:min-w-16 min-h-12 2xl:min-h-16" />
            </div>
            <div>
              <div className="font-bold text-lg 2xl:text-[25px]">Why $BTC?</div>
              <div className="text-sm 2xl:text-[17px]">
                $BTC's value mirrors the actual online conversation, volume, and sentiment around Bitcoin.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right: Card Stack */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-end relative">
        <Image src="/images/bg-ellipse.png" alt="Announcement" width={150} height={150} className="hidden md:block absolute left-[50px] top-1/2 -translate-y-1/2" />
        <div className="w-full flex flex-col items-end gap-4 z-10">
          <div className="w-[275px] h-[402px] bg-[#2793FF] rounded-4xl relative">

            <Image src="/images/ribbon.png" alt="Announcement" width={96} height={78} className="absolute bottom-0 left-0 translate-y-full -translate-x-1/2" />

            {/* Card 1 */}
            <div className="w-[300px] 2xl:w-[400px] bg-white rounded-xl shadow p-4 flex items-center gap-3 absolute left-1/2 -translate-x-1/2 top-[14]">
              <Image src="/images/btc-cashtag.png" alt="BTC Cashtag" width={63} height={63} className="" />
              <div>
                <div className="font-semibold text-base 2xl:text-[19px]">$BTC Cashtag</div>
                <div className="text-sm 2xl:text-[17px]">The first tradeable $cashtag that lets you own the narrative.</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-[300px] bg-white rounded-xl shadow p-4 absolute left-1/2 2xl:left-0 -translate-x-1/2 2xl:-translate-x-2/3 top-1/2 -translate-y-1/2  ">
              <div className="font-semibold text-lg 2xl:text-[21px] mb-1">Why This Matters</div>
              <div className="text-sm 2xl:text-base">Low fees, instant trades.<br />20M $BTC reserved for rewards.<br />Early adopter opportunity in $BTC.</div>
            </div>
            {/* Card 3: CTA */}
            <div className="w-[240px] bg-white rounded-xl shadow p-5 flex items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-[14]">
              <div className="font-semibold text-lg 2xl:text-[19px]">Ready to Dive In?</div>
              <a href="#" className="w-[100px] bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-[10px] text-center rounded-lg shadow transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-xs">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection; 