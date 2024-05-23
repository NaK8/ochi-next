import React from "react";
import MarqueSlide from "./MarqueSlide";

function Marquee() {
  return (
    <section
      data-scroll
      data-scroll-sections
      data-scroll-speed="-0.001"
      className="w-full rounded-t-3xl bg-[#004d43] py-12"
    >
      <div className="flex overflow-hidden whitespace-nowrap border-y border-zinc-100 py-4 text-white">
        <MarqueSlide>We are ochi &nbsp;</MarqueSlide>
        <MarqueSlide>We are ochi &nbsp;</MarqueSlide>
        <MarqueSlide>We are ochi &nbsp;</MarqueSlide>
      </div>
    </section>
  );
}

export default Marquee;
