"use client";
import React, { useEffect } from "react";
import { RightArrow, apple, playStore } from "./Consonants";

import RightSec from "./RightSec";
import Link from "next/link";
import { motion, stagger, useAnimate } from "framer-motion";

function HeroSec() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setTimeout(() => {
      animationFunc();
    }, 500);
  }, []);

  const animationFunc = async () => {
    animate(
      "h2",
      {
        opacity: 1,
        scale: 1,
      },
      { duration: 1, ease: "easeInOut", delay: stagger(0.2) }
    );
    animate(
      "p",
      {
        opacity: 1,
        scale: 1,
      },
      { duration: 0.8, ease: "easeInOut", delay: 0.6 }
    );
  };

  return (
    <div
      className="max-w-[1440px] w-full m-auto 
      min-h-[calc(100vh-84px)] flex small:flex-col
     small:py-6 mob:pt-3 justify-center items-center px-4 small:px-0  
     gap-1 small:gap-20 smaller:gap-12 "
    >
      <motion.div ref={scope} className="w-full ">
        <div className="flex flex-col  justify-start items-start gap-5 extLar:gap-3">
          <div>
            <motion.h2
              initial={{ opacity: 0, scale: 1.1 }}
              className="font-pm font-bol text-[62px] extLar:text-[50px] larger:text-[45px] leading-[4rem] small:leading-[3rem] "
            >
              <span className="text-primaryGreen">Pakistan's</span> First
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, scale: 1.1 }}
              className="font-se font-reg text-[62px] extLar:text-[50px] larger:text-[45px] small:leading-[3.5rem] "
            >
              Scrap Platform <span className="text-primaryGreen">Ever!</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, scale: 1.05 }}
            className="font-pm font-reg leading-[27px] max-w-[55ch] text-[18px]  extLar:text-[16px]  small:font-med small:text-[17px] "
          >
            Kabariya is a secure online platform dedicated to the selling of
            scrap materials. Our mission is to minimize the accumulation of
            unwanted and non-essential metals through recycling.
          </motion.p>
          <Link href={"/Dealerform"} className="w-full py-5">
            <Dealerbtn bgcolor="white" textColor="black" />
          </Link>
          <MobileApp />
        </div>
      </motion.div>
      <RightSec />
    </div>
  );
}

export default HeroSec;

const Dealerbtn = ({ bgcolor, textColor, text, width }) => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.7, ease: "backInOut" },
      }}
      initial={{ opacity: 0, y: "30px" }}
      className={`w-full max-w-[225px] h-[62px] ${
        width && "h-[57.5px]"
      } rounded-[50px] flex items-center justify-center`}
      style={{
        background:
          "linear-gradient(90deg, #FF0000 0%, rgba(255, 138, 0, 0.845) 14.64%, rgba(241, 231, 0, 0.725) 27.77%, #10CB00 39.38%, #00CDE9 51.5%, #0009E9 64.12%, #AD00E9 77.24%, #E90062 87.84%, #E90000 99.46%)",
        maxWidth: width && width,
      }}
    >
      <button
        style={{
          maxWidth: width && `calc(${width} - 3px)`,
        }}
        className={`flex justify-center items-center gap-3 
  relative z-10 bg-${bgcolor} text-${textColor} w-full  h-[59px] max-w-[222px] font-med
   rounded-[50px] py-[8px] pl-[13px] pr-[5px] ${
     width && "pl-[17px] pr-[8px] h-[54.5px] bg-[#f3fcf9] !gap-2 "
   } ml-[0.1px] mb-[0.3px] `}
      >
        {text ? text : "BECOME A DEALER"}{" "}
        <div className={`${width ? "scale-[0.9]" : "scale-[1]"}`}>
          {RightArrow}
        </div>
      </button>
    </motion.div>
  );
};

const MobileApp = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, delay: 0.8, ease: "easeInOut" },
      }}
      initial={{ opacity: 0, x: "-20px" }}
      className="flex flex-col justify-start items-start gap-4 smallest:w-full smallest:items-center "
    >
      <p className="font-pm font-bol text-[20px] mob:text-[15px] ">
        Mobile App Coming Soon
      </p>
      <div className="flex justify-start items-start gap-5 small:gap-3 smallest:flex-col smallest:justify-center smallest:items-center smallest:w-full">
        <button
          className="bg-black flex justify-center 
  items-center w-[200px] med:w-[180px] smaller:w-[160px] gap-3 
  pb-1 px-2 med:px-1 rounded-lg"
        >
          {apple}
          <div
            className="flex flex-col justify-center 
    items-center h-[60px] med:h-[52px] mob:h-[50px] "
          >
            <p
              className="text-white text-[12px] 
        tracking-[1.5px] smaller:text-[9px] med:text-[10px] leading-0"
            >
              Download on the
            </p>
            <p
              className="text-white text-[1.65rem]  
        med:text-[1.6rem] smaller:text-[1.3rem] font-reg leading-[23px] "
            >
              App Store
            </p>
          </div>
        </button>
        <button
          className="bg-black flex justify-center 
  items-center w-[215px] med:w-[190px] smaller:w-[150px]
gap-2 px-4 med:px-2 py-[0.58rem] med:py-[0.25rem] rounded-lg"
        >
          {playStore}
          <div
            className="flex flex-col justify-center 
    items-start  w-full relative bottom-1 med:bottom-[3px] "
          >
            <p
              className="text-white text-[15px] 
        smaller:text-[10px]"
            >
              GET IT ON
            </p>
            <p
              className="text-white text-[1.575rem] smaller:text-[1.1rem] whitespace-nowrap smaller:scale-[1.05]
        med:text-[1.4rem] font-reg leading-[25px] smaller:leading-[20px]  "
            >
              Google Play
            </p>
          </div>
        </button>
      </div>
    </motion.div>
  );
};

const AppstoreBtn = ({ borderColor }) => {
  return (
    <button
      className={`bg-black flex justify-center 
items-center w-[200px] med:w-[180px] smaller:w-[160px] gap-3 
pb-1 px-2 med:px-1 rounded-lg ${
        borderColor ? "border border-white hover:border-[#A6A6A6]" : ""
      }`}
    >
      {apple}
      <div
        className="flex flex-col justify-center 
items-center h-[60px] med:h-[52px] mob:h-[50px] "
      >
        <p
          className="text-white text-[12px] 
tracking-[1.5px] smaller:text-[9px] med:text-[10px] leading-0"
        >
          Download on the
        </p>
        <p
          className="text-white text-[1.65rem]  
med:text-[1.6rem] smaller:text-[1.3rem] font-reg leading-[23px] "
        >
          App Store
        </p>
      </div>
    </button>
  );
};

const GooglePlayBtn = ({ borderColor }) => {
  return (
    <button
      className={`bg-black flex justify-center 
items-center w-[215px] med:w-[190px] smaller:w-[150px]
gap-2 px-4 med:px-2 py-[0.58rem] med:py-[0.25rem] rounded-lg ${
        borderColor ? "border border-white hover:border-[#A6A6A6]" : ""
      }`}
    >
      {playStore}
      <div
        className="flex flex-col justify-center 
items-start  w-full relative bottom-1 med:bottom-[3px] "
      >
        <p
          className="text-white text-[15px] 
smaller:text-[10px]"
        >
          GET IT ON
        </p>
        <p
          className="text-white text-[1.575rem] smaller:text-[1.1rem] whitespace-nowrap smaller:scale-[1.05]
med:text-[1.4rem] font-reg leading-[25px] smaller:leading-[20px]  "
        >
          Google Play
        </p>
      </div>
    </button>
  );
};

export { Dealerbtn, MobileApp, AppstoreBtn, GooglePlayBtn };
