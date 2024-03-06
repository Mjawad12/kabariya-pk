"use client";
import React, { useState } from "react";
import { hamburger, logoEng, logoUrdu } from "./Consonants";

function Navbar() {
  const [mobNav, setMobNav] = useState(false);

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
    <nav className="w-full flex justify-between items-center px-1 py-5 gap-5  ">
      <div className="max-w-[232px] ">{logoEng}</div>
      <div className="flex-1 flex-grow-[0.7] larger:hidden ">
        <ul className="list-none flex  font-pm font-med justify-between items-center gap-5 ">
          {list.map((it, index) => (
            <Li name={it} key={index} index={index} />
          ))}
        </ul>
      </div>
      <div
        className="max-w-[150px] w-full 
       flex justify-end items-center larger:gap-9 mob:gap-5 "
      >
        {logoUrdu}
        <div className="hidden larger:block">{hamburger}</div>
      </div>
    </nav>
  );
}

const Li = ({ name, index }) => {
  const [liSelected, setliSelected] = useState(index === 0);
  return (
    <li
      onClick={() => setliSelected(!liSelected)}
      className={`${
        liSelected && "li_Nav text-secondaryGreen"
      } relative  hover:text-secondaryGreen cursor-pointer whitespace-nowrap`}
    >
      {name}
    </li>
  );
};

export default Navbar;
