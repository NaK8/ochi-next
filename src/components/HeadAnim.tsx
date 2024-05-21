"use client";

import { motion } from "framer-motion";
import React from "react";

function HeadAnim() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "10vw" }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="mr-[1vw] h-[8.3vw] w-[10vw] rounded-md bg-red-500 bg-[url('/bg-heading.jpg')] bg-cover md:h-[6.33vw]"
    ></motion.div>
  );
}

export default HeadAnim;
