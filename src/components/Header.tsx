import React from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const NavLinks = ["Services", "Our Work", "About Us", "Insight", "Contact Us"];

function Header() {
  return (
    <header className="fixed z-[999] flex w-full items-center justify-between bg-transparent px-8 py-5 backdrop-blur md:px-12">
      <Logo />
      <ul className="hidden gap-x-8 md:flex">
        {NavLinks.map((navLink, index) => (
          <li className={`${index === 4 ? "ml-32" : ""} font-neue`} key={index}>
            <a href="#" className="link link--custom">
              <span className="link__inner">
                <span className="link__default-text">{navLink}</span>
                <span className="link__hover-text">{navLink}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <MobileMenu />
    </header>
  );
}

export default Header;
