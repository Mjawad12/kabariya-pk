"use client";
import React, { useState } from "react";
import {
  hamburger,
  hamburgerWhite,
  logoEng,
  logoEngDealer,
  logoUrdu,
  logoUrduDealer,
} from "./Consonants";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const pathname = usePathname();

  const list = [
    "Home",
    "About us",
    "Our presence",
    "Reviews",
    "Download app",
    "Contact us",
    "Dealership",
  ];

  return (
    <nav
      className={`w-full flex justify-between items-center py-5 gap-5 pt-9 px-10 smaller:px-6 smaller:pt-5 ${
        pathname === "/Dealership" && "bg-black"
      } `}
    >
      <div className="max-w-[232px] ">
        {pathname === "/Dealership" ? logoEngDealer : logoEng}
      </div>
      <div className="flex-1 flex-grow-[0.7] larger:hidden ">
        <ul className="list-none flex text-[1.05rem]  font-pm  justify-between items-center gap-6 font-med z-20 relative">
          {list.map((it, index) => (
            <Li name={it} key={index} index={index} pathname={pathname} />
          ))}
        </ul>
      </div>
      <div
        className="max-w-[150px] w-full 
       flex justify-end items-center larger:gap-9 mob:gap-5 "
      >
        {pathname === "/Dealership" ? logoUrduDealer : logoUrdu}
        <div className="hidden larger:block">
          {" "}
          {pathname === "/Dealership" ? hamburgerWhite : hamburger}
        </div>
      </div>
    </nav>
  );
}

const Li = ({ name, index, pathname }) => {
  return (
    <li
      className={`${
        pathname.slice(1) === name && "li_Nav !text-secondaryGreen"
      } ${
        name === "Home" && pathname === "/" && "li_Nav text-secondaryGreen"
      } ${
        pathname === "/Dealership" && "text-white"
      }  relative  hover:text-secondaryGreen cursor-pointer whitespace-nowrap`}
    >
      <Link href={name === "Home" ? "/" : name}>{name}</Link>
    </li>
  );
};

export default Navbar;
