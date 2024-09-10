"use client";

import React, { useEffect } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({
        smooth: true,
      });
      return locomotiveScroll;
    })();
  }, []);
  return <div data-scroll-container>{children}</div>;
};

export default Template;
