import React, { useState, useEffect } from "react";
// import data
import { header } from "../data";
// import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
// import components
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  // header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${isActive ? "bg-red-500" : "bg-green-500"} 
      py-6 lg:py-4 fixed w-full transition-all z-10`}
    >
      Header
    </header>
  );
};

export default Header;
