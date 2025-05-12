import Image from "next/image";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import AboutSection from "@/components/pages/main/AboutSection";
import HeroSection from "@/components/pages/main/HeroSection";
import HowToBuySection from "@/components/pages/main/HowToBuySection";
import RoadmapSection from "@/components/pages/main/RoadmapSection";
import SocialFollowSection from "@/components/pages/main/SocialFollowSection";
import TokenomicsSection from "@/components/pages/main/TokenomicsSection";
import XFeedLiveSection from "@/components/pages/main/XFeedLiveSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6fafd] flex flex-col rounded-3xl overflow-hidden relative">
      <Image src="/images/bg-star.png" alt="Announcement" width={40} height={40} className="absolute top-[200px] left-0" />
      <Image src="/images/bg-gradient3.png" alt="Announcement" width={577} height={117} className="absolute top-0 left-0" />

      {/* Header/Navbar */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* X Feed Live Section */}
      <XFeedLiveSection />

      {/* About Section */}
      <AboutSection />

      {/* Roadmap Section */}
      <RoadmapSection />

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* How to Buy Section */}
      <HowToBuySection />

      {/* Social Follow Section */}
      <SocialFollowSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
