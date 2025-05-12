import Image from "next/image";
import React from "react";

const Footer = () => (
  <footer className="bg-white w-full py-8 px-2 flex justify-center rounded-b-3xl border-t border-gray-100 mt-2">
    <div className="max-w-4xl flex flex-col items-center">
      <div className="flex flex-col items-center">
        <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="mb-3" />
        <div className="font-semibold text-lg md:text-[23px] mb-1">$BTC is Just the Beginning.</div>
      </div>
      <p className="text-[#E95F00] font-medium text-[19px] mb-5">
        Read <a href="#" className="underline">LightPaper</a>
      </p>
      <p className="text-center mb-5">
        <span className="text-[#D22922] font-medium">Disclaimer:</span> $BTC is a community-driven project and does not represent or claim affiliation with Bitcoin (BTC). Trading cryptocurrencies involves risk, and you should do your own research before making financial decisions. This is not financial advice.
      </p>
      {/* <div className="flex flex-wrap gap-6 justify-center mb-6">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Cookies Policy</a>
      </div> */}
      <div className="font-light">Copyrighted © 2025 $BTC · All right reserved</div>
    </div>
  </footer>
);

export default Footer; 