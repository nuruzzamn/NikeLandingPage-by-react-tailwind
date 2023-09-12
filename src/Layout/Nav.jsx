import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  console.log(navLinks);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="mt-[-5px]">
          {" "}
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-6 xl:gap-16 max-lg:hidden">
          {navLinks.map((navTitle) => (
            <li key={navTitle.label}>
              <a
                href={navTitle.href}
                className="font-montserrat leading-normal text-lg text-gray-500"
              >
                {navTitle.label}
              </a>
            </li>
          ))}
        </ul>

       

        <div>
          <a href="/" className="lg:block max-lg:hidden font-montserrat leading-normal text-lg hover:text-slate-gray pr-14 flex justify-center items-center">Sign in / Explore now </a>
        </div>

        <div className="hidden max-lg:block pr-3">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
