import React from "react";
import MarqueSlide from "./MarqueSlide";

function Marquee() {
  return (
    <section className="w-full overflow-hidden rounded-t-3xl bg-[#004d43] py-12">
      <div className="flex whitespace-nowrap border-y border-zinc-100 py-4 text-white">
        <MarqueSlide>We are ochi &nbsp;</MarqueSlide>
        <MarqueSlide>We are ochi &nbsp;</MarqueSlide>
        <MarqueSlide>We are ochi &nbsp;</MarqueSlide>
      </div>
    </section>
  );
}

export default Marquee;
