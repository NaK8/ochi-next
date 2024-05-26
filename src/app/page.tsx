"use client";

import About from "@/components/About";
import Cards from "@/components/Cards";
import Eyes from "@/components/Eyes";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Reviews from "@/components/Reviews";
import StartProject from "@/components/StartProject";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
      });
      return locomotiveScroll;
    })();
  }, []);
  return (
    <div
      data-scroll-container
      className="min-h-screen w-full bg-ochiWhite text-zinc-800"
    >
      <Header />
      <HeroSection />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <Cards />
      <StartProject />
      <Footer />
    </div>
  );
}
