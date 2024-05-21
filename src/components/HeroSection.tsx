import { ArrowUpRight } from "lucide-react";
import React from "react";
import HeadAnim from "./HeadAnim";

function HeroSection() {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="min-h-screen w-full pt-40"
    >
      <div className="px-8 md:px-12">
        {["We create", "eye-opening", "presentation"].map((heading, index) => (
          <div key={index} className="flex w-fit items-baseline">
            {index === 1 && <HeadAnim />}
            <h1
              key={index}
              className="font-founder text-[13vw] uppercase leading-[.75] md:text-[10vw]"
            >
              {heading}
            </h1>
          </div>
        ))}
      </div>
      <div className="mt-20 border-t border-zinc-500">
        <div className="flex flex-col justify-between gap-y-8 px-8 py-4 md:flex-row md:gap-y-0 md:px-12">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((head, index) => (
            <h3 key={index} className="font-neue tracking-tight">
              {head}
            </h3>
          ))}
          <div className="about-start flex gap-2 transition-all">
            <a
              href=""
              className="about-btn rounded-full border border-zinc-800 px-4 py-1 font-neue text-sm transition-all delay-100"
            >
              Start The Project
            </a>
            <div className="about-btn hidden size-8 items-center justify-center rounded-full border border-zinc-800 transition-all delay-100 md:flex">
              <ArrowUpRight strokeWidth={1} size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
