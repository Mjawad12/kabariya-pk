"use client";
import React, { useState } from "react";
import {
  cross,
  hamburger,
  hamburgerWhite,
  left,
  logoEng,
  logoEngDealer,
  logoUrdu,
  logoUrduDealer,
} from "./Consonants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [mobnav, setmobnav] = useState(false);
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
          pathname === "/TermsAndConditions") &&
        "bg-black"
      } `}
    >
      <Link href={"/"} aria-label="link to home">
        <div className="max-w-[232px] ">
          {pathname === "/dealership" ||
          pathname === "/about" ||
          pathname === "/contact" ||
          pathname === "/privacy" ||
          pathname === "/TermsAndConditions"
            ? logoEngDealer
            : logoEng}
        </div>
      </Link>
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
      <AnimatePresence>
        {mobnav && (
          <Mobnav list={list} setmobnav={setmobnav} pathname={pathname} />
        )}
      </AnimatePresence>
      <div
        className="max-w-[150px] w-full 
       flex justify-end items-center larger:gap-9 mob:gap-5 "
      >
        <Link href={"/"} aria-label="link to home">
          {pathname === "/dealership" ||
          pathname === "/about" ||
          pathname === "/contact" ||
          pathname === "/privacy" ||
          pathname === "/TermsAndConditions"
            ? logoUrduDealer
            : logoUrdu}
        </Link>
        <div onClick={() => setmobnav(!mobnav)} className="hidden larger:block">
          {pathname === "/dealership" ||
          pathname === "/about" ||
          pathname === "/contact" ||
          pathname === "/privacy" ||
          pathname === "/TermsAndConditions"
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
          pathname === "/TermsAndConditions") &&
        "text-white"
      }  relative  hover:text-secondaryGreen cursor-pointer whitespace-nowrap`}
    >
      <Link href={slug}>{name}</Link>
    </li>
  );
};

const Mobnav = ({ list, setmobnav, pathname }) => {
  return (
    <motion.div
      transition={{ duration: 1, type: "spring" }}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{
        x: "-100%",
        transition: { delay: 0.5, duration: 1, type: "spring" },
      }}
      className="w-full min-h-screen hidden larger:flex absolute bg-white top-0 left-0 z-30 justify-start items-start overflow-hidden "
    >
      <div
        onClick={() => {
          setmobnav(false);
        }}
        className="absolute top-0 right-0 p-2"
      >
        {cross}
      </div>
      <ul className="flex flex-col justify-start items-start py-20 px-10 gap-3">
        {list.map((it) => (
          <li
            onClick={() => {
              setmobnav(false);
            }}
            className={`font-pm text-3xl flex items-center ${
              pathname === "/" + it.slug || pathname === it.slug
                ? "text-primaryGreen"
                : "text-black"
            }`}
          >
            {(pathname === "/" + it.slug || pathname === it.slug) && (
              <span className="cursor-pointer [&>svg]:stroke-primaryGreen scale-[-1.1]">
                {left}
              </span>
            )}
            <Link href={it.slug}>{it.name}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Navbar;
