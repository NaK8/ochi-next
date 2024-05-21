"use client";
import { useState, useEffect } from "react";

type EyeTypes = {
  size?: "normal" | "small";
};

function Eye({ size }: EyeTypes) {
  let sizes = "";
  if (size === "small") {
    sizes = "w-32 h-32 md:w-[10vw] md:h-[10vw]";
  } else {
    sizes = "w-32 h-32 md:w-[15vw] md:h-[15vw]";
  }
  const [rotate, setRotate] = useState(0);
  useEffect(function () {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-10">
      <div
        className={`${sizes} flex items-center justify-center rounded-full bg-zinc-100`}
      >
        <div className="relative size-2/3 rounded-full bg-black">
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="absolute left-1/2 top-1/2 h-10 w-full -translate-x-1/2 -translate-y-1/2 "
          >
            <div className="size-10 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
      {/* Second circle */}
      <div
        className={`${sizes} flex items-center justify-center rounded-full bg-zinc-100`}
      >
        <div className="relative size-2/3 rounded-full bg-black">
          <div
            style={{
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            }}
            className="absolute left-1/2 top-1/2 h-10 w-full -translate-x-1/2 -translate-y-1/2 "
          >
            <div className="size-10 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
