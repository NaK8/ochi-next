"use client";

import { motion } from "framer-motion";
import React from "react";

function MarqueSlide({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial={{ x: "0" }}
      animate={{ x: "-100%" }}
      transition={{
        repeatType: "loop",
        repeat: Infinity,
        ease: "linear",
        duration: 5,
      }}
      className="font-founder text-[22vw] font-semibold uppercase leading-[.75]"
    >
      {children}
    </motion.h1>
  );
}

export default MarqueSlide;
