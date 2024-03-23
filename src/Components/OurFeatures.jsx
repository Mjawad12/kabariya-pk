"use client";
import React, { useEffect, useState } from "react";
import { opnerDetails, play2, plus, minus } from "./Consonants";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

function OurFeatures() {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="w-full max-w-[1152px] m-auto min-h-screen flex justify-center items-center gap-16 small:gap-12 smaller:gap-10 flex-col mt-[7rem] small:mt-[5rem] smaller:mt-[2.5rem] px-5 pb-10">
        <div className="mP3 absolute right-[-17%] top-[0] w-[569px] h-[569px] " />
        <div className="flex flex-col justify-center items-center gap-9 small:gap-7 smaller:gap-3">
          <p className="font-pm font-med text-3xl leading-[35px] smaller:text-2xl">
            Why Work with us ?
          </p>
          <p className="font-pm font-bol text-[67px] leading-[41.61px] large:text-5xl small:text-4xl ">
            Our Features
          </p>
          <a
            href="https://www.youtube.com/@Kabariya.official"
            target="_blank"
            className="max-w-[23.5rem] w-full flex justify-center mt-1
            items-center  rounded-[24.54px] bg-white 
            font-pm font-med text-2xl p-[0.9rem] gap-5 
            border border-borderColorP  small:text-[1.2rem] small:max-w-[20rem] smaller:max-w-[15.5rem] smaller:rounded-[18px] smaller:gap-3 smaller:py-[0.6rem] smaller:text-[1rem] "
          >
            {play2}
            View youtube channel
          </a>
        </div>
        <div className="flex w-full flex-col justify-center items-center gap-7">
          {opnerDetails.map((it, index) => (
            <FeatureOpener
              index={index}
              title={it.title}
              desc={it.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurFeatures;

const FeatureOpener = ({ index, title, desc }) => {
  const [opened, setopened] = useState(index === 0);
  const [scope, animate] = useAnimate();
  const animateFeature = async () => {
    const initialHeight = window.innerWidth < 600 ? "58px" : "71px";
    const height = scope.current.scrollHeight + "px";

    if (opened) {
      setopened(false);
      await animate(scope.current, {
        height: initialHeight,
        borderColor: "#0000001A",
      });
    } else {
      setopened(true);
      await animate(scope.current, {
        height: height,
        borderColor: "#2DB473",
      });
    }
  };
  useEffect(() => {
    const height = scope.current.scrollHeight + "px";
    if (opened) {
      setopened(true);
      animate(scope.current, { height: height, borderColor: "#2DB473" });
    }
  }, []);
  return (
    <motion.div
      ref={scope}
      onClick={animateFeature}
      className={`w-full h-[71px] flex flex-col justify-start items-start px-7 gap-5 p-7 pt-[14px] smo:pt-[10px] smo:p-5 smo:h-[58px] rounded-[23.54px] smo:rounded-[17px]
       shadow-xl border border-[#0000001A] overflow-hidden cursor-pointer z-20`}
    >
      <div className="flex justify-start items-center w-full gap-5">
        <Image
          src={`/features/${index}.webp`}
          width={41}
          height={41}
          alt={title}
          unoptimized
          className={`${
            index === 0 &&
            "w-[60px] h-[40px]  smo:!w-[55px] smo:!h-[35px] relative right-2"
          } ${index === 4 && "relative bottom-2"} smo:w-[37px] smo:h-[37px]`}
        />
        <div
          className={`w-full flex flex-col justify-start items-start gap-10 `}
        >
          <div className="flex w-full justify-between items-center">
            <p
              className={`font-pm font-med text-[21px] smo:text-[18px] smaller:text-[14px] mob:text-[13px] ${
                index === 0 && "relative right-4"
              }`}
            >
              {title}
            </p>

            {opened ? (
              <div className="cursor-pointer">{minus}</div>
            ) : (
              <div className="cursor-pointer">{plus}</div>
            )}
          </div>
        </div>
      </div>
      <div className="px-16">
        <p className="text-[1rem] font-pm font-reg max-w-[31ch]">{desc}</p>
      </div>
    </motion.div>
  );
};
