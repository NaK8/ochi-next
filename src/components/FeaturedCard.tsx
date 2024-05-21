"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface FeaturedCardTypes {
  Name: string;
  Place: "left" | "right";
  Img: string;
  Alt: string;
  Labels: string[];
}

function FeaturedCard({ Name, Place, Img, Alt, Labels }: FeaturedCardTypes) {
  const [isHover, setIsHover] = useState(false);
  let angle;
  if (Place === "left") {
    angle = "md:left-full left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2";
  } else if (Place === "right") {
    angle = "md:right-full right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2";
  }
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isHover ? "z-[888]" : ""} w-full`}
    >
      <div className="mb-4 flex items-baseline gap-4">
        <span className="inline-block size-[9px] rounded-full bg-zinc-800"></span>
        <h2 className="text-sm font-thin">{Name}</h2>
      </div>
      <div className="relative h-[70vw] md:h-[33vw]">
        <h1
          className={`absolute flex overflow-hidden text-6xl md:text-8xl ${angle} z-50 font-founder font-medium text-ochiGreen`}
        >
          {Name.split("").map((letter, index) => (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: isHover ? "0" : "100%" }}
              transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
              className="inline-block"
              key={index}
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </motion.span>
          ))}
        </h1>
        <div className="relative size-full overflow-hidden rounded-xl transition-transform duration-500 hover:scale-95 hover:duration-700">
          <Image
            loading="lazy"
            src={Img}
            alt={Alt}
            className="rounded-lg"
            fill
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 py-4">
        {Labels.map((label, index) => (
          <div key={index} className="label-animate">
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCard;
