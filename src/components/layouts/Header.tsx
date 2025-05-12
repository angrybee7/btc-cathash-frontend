"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure scroll is restored when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="w-full">
      <header className="flex items-center justify-between px-6 py-4 md:px-10 2xl:px-16 md:py-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-sm max-w-7xl mx-auto my-7">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Logo" width={53} height={53} className="" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 2xl:gap-8 text-gray-700 font-medium">
          <a href="#home" className="text-orange-500">Home</a>
          <a href="#xFeed" className="hover:text-orange-400 transition">X Feed</a>
          <a href="#about" className="hover:text-orange-400 transition">About</a>
          <a href="#roadmap" className="hover:text-orange-400 transition">Roadmap</a>
          <a href="#tokenomics" className="hover:text-orange-400 transition">Tokenomics</a>
          <a href="#howToBuy" className="hover:text-orange-400 transition">How To Buy</a>
          <a href="#" className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition">
            Join Telegram
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 z-[100]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-[18] flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}>
          <nav className={`fixed right-0 top-0 min-h-screen w-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6">
              <div className="flex flex-col items-center gap-6 mt-8">
                <a href="#home" className="text-orange-500 text-lg font-medium">Home</a>
                <a href="#xFeed" className="text-gray-700 text-lg font-medium hover:text-orange-400 transition">X Feed</a>
                <a href="#about" className="text-gray-700 text-lg font-medium hover:text-orange-400 transition">About</a>
                <a href="#roadmap" className="text-gray-700 text-lg font-medium hover:text-orange-400 transition">Roadmap</a>
                <a href="#tokenomics" className="text-gray-700 text-lg font-medium hover:text-orange-400 transition">Tokenomics</a>
                <a href="#howToBuy" className="text-gray-700 text-lg font-medium hover:text-orange-400 transition">How To Buy</a>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition text-center">
                  Join Telegram
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header; 