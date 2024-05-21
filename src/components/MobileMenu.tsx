"use client";
import React, { useState } from "react";

const NavLinks = ["Services", "Our Work", "About Us", "Insight", "Contact Us"];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${open ? "menu--opened" : ""} md:hidden`}>
      <div className="relative">
        <div
          onClick={() => setOpen(!open)}
          className="z-30 flex size-8 cursor-pointer items-center justify-center"
        >
          <svg
            className="nav-toggle"
            width="24"
            height="9"
            viewBox="0 0 24 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="24"
              y1="8"
              x2="-4.37114e-08"
              y2="8"
              stroke="currentColor"
            ></line>
            <line
              x1="24"
              y1="1"
              x2="4.37114e-08"
              y2="1"
              stroke="currentColor"
            ></line>
          </svg>
        </div>
      </div>
      <div className="mobile-menu absolute left-0 top-0 -z-10 h-screen w-full bg-zinc-800">
        <div className="mobile-menu__content h-full py-32">
          <div className="h-full border-t border-zinc-300 px-8">
            <ul className="pt-2">
              {NavLinks.map((link, index) => (
                <li
                  key={index}
                  className="py-2 font-founder text-5xl font-semibold uppercase"
                >
                  <a href="" className="link-underline link-underline-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
