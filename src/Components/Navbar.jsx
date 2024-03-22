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
    { name: "Home", slug: "/" },
    { name: "About us", slug: "about" },
    { name: "Our presence", slug: "presence" },
    { name: "Reviews", slug: "reviews" },
    { name: "Download app", slug: "downloadapp" },
    { name: "Contact us", slug: "contact" },
    { name: "Dealership", slug: "dealership" },
  ];

  return (
    <nav
      className={`w-full flex justify-between items-center py-5 gap-5 pt-9 px-10 smaller:px-6 smaller:pt-5 ${
        (pathname === "/dealership" ||
          pathname === "/about" ||
          pathname === "/contact" ||
          pathname === "/privacy" ||
          pathname === "conditions") &&
        "bg-black"
      } `}
    >
      <div className="max-w-[232px] ">
        {pathname === "/dealership" ||
        pathname === "/about" ||
        pathname === "/contact" ||
        pathname === "/privacy" ||
        pathname === "conditions"
          ? logoEngDealer
          : logoEng}
      </div>
      <div className="flex-1 flex-grow-[0.7] larger:hidden ">
        <ul className="list-none flex text-[1.05rem]  font-pm  justify-between items-center gap-6 font-med z-20 relative">
          {list.map((it, index) => (
            <Li
              name={it.name}
              key={index}
              index={index}
              pathname={pathname}
              slug={it.slug}
            />
          ))}
        </ul>
      </div>
      <div
        className="max-w-[150px] w-full 
       flex justify-end items-center larger:gap-9 mob:gap-5 "
      >
        {pathname === "/dealership" ||
        pathname === "/about" ||
        pathname === "/contact" ||
        pathname === "/privacy" ||
        pathname === "conditions"
          ? logoUrduDealer
          : logoUrdu}
        <div className="hidden larger:block">
          {" "}
          {pathname === "/dealership" ||
          pathname === "/about" ||
          pathname === "/contact" ||
          pathname === "/privacy" ||
          pathname === "conditions"
            ? hamburgerWhite
            : hamburger}
        </div>
      </div>
    </nav>
  );
}

const Li = ({ name, index, pathname, slug }) => {
  return (
    <li
      className={`${pathname === `/${slug}` && "li_Nav !text-secondaryGreen"} ${
        pathname === "/" && slug === "/" && "li_Nav !text-secondaryGreen"
      } ${
        (pathname === "/dealership" ||
          pathname === "/about" ||
          pathname === "/contact" ||
          pathname === "/privacy" ||
          pathname === "conditions") &&
        "text-white"
      }  relative  hover:text-secondaryGreen cursor-pointer whitespace-nowrap`}
    >
      <Link href={slug}>{name}</Link>
    </li>
  );
};

export default Navbar;
