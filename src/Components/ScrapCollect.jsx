"use client";
import React, { useState } from "react";
import { Scrapitems } from "./Consonants";
import Image from "next/image";

function ScrapCollect() {
  const [selected, setselected] = useState(1);
  return (
    <div className="w-full bg-[#FCFCFC]  min-h-max pb-24 small:pb-14">
      <div className="max-w-[89vw]  small:max-w-[100vw]  w-full m-auto  px-5  flex justify-start items-start gap-5 flex-col">
        <h3 className="font-pm font-med text-[1.8rem] small:text-[1.7rem] ">
          We collect this type scrap at your door step through our app.
        </h3>
        <div className="w-full flex mt-2 justify-start flex-wrap items-center gap-2 ">
          {Scrapitems.map((it, index) => {
            return (
              <ScrapBtn
                text={it.name}
                selected={selected}
                setselected={setselected}
                index={index}
                key={index}
              />
            );
          })}
        </div>

        <div
          className="w-full flex flex-col justify-start items-start border border-borderColorP
        px-8 py-14 gap-6 rounded-[20.54px] hover:shadow-xl small:py-10 smaller:px-3 transition-all duration-300 mt-[3rem] smaller:mt-[1rem] bg-white  "
        >
          <p className="font-se text-6xl  small:text-5xl">
            {Scrapitems[selected].name}
          </p>
          <p className="font-open font-[500] text-[1.27rem] max-w-[93ch] small:text-[1.2rem] smaller:text-[1rem] ">
            We purchase a wide range of electronics products as scrap, including
            the ones listed below. Additionally, we also accept other items
            through custom offers.
          </p>
          <div className="w-full flex justify-start items-center flex-wrap gap-2 gap-y-3  ">
            {Scrapitems[selected].items.map((it, index) => (
              <ScrapItem key={index} text={it} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ScrapBtn = ({ text, selected, setselected, index }) => {
  return (
    <button
      onClick={() => setselected(index)}
      className={`py-2 px-6 small:px-5 rounded-[10.32px] font-pm text-[1.16rem] font-med bg-[#F5F5F5] ${
        selected === index && "!bg-primaryGreen text-white font-reg"
      }`}
    >
      {text}
    </button>
  );
};

const ScrapItem = ({ text, index }) => {
  return (
    <div
      className="scrapBtn bg-white border border-borderColorP pl-4 py-[0.85rem] w-[12.5rem] small:w-[12rem] small:pl-2 smaller:w-[10.5rem] Smob:w-[8.5rem] 
         rounded-[22.54px] small:rounded-[20px]  flex justify-start items-center gap-2 Smob:gap-1 "
    >
      <Image
        src={`/ElectrinocsSvgs/${Scrapitems["1"].items[index]}.webp`}
        alt={text}
        width={5000}
        height={5000}
        className="w-8 h-8 small:w-6 small:h-6"
      />
      <p className="font-pm font-med small:text-[0.9rem] mob:text-[0.8rem] ">
        {text}
      </p>
    </div>
  );
};

export default ScrapCollect;
