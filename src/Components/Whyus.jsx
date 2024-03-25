"use client";
import React, { useEffect } from "react";
import { usData } from "./Consonants";
import Image from "next/image";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
function Whyus() {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    isInView && aimateFunc();
  }, [isInView]);

  const aimateFunc = async () => {
    await animate(
      "h3",
      {
        opacity: 1,
        y: 0,
      },
      { duration: 0.5, type: "spring", delay: 0.2 }
    );
    animate2(
      ".animator",
      {
        opacity: 1,
        x: 0,
      },
      { duration: 0.5, type: "spring", delay: stagger(0.5) }
    );
    await animate(
      "p",
      {
        opacity: 1,
        y: 0,
      },
      { duration: 0.5, delay: stagger(0.2), type: "spring" }
    );
  };
  return (
    <div className="w-full  ">
      <div
        className="w-full max-w-[1440px] min-h-max flex flex-col justify-start
       items-start gap-10 m-auto pt-28 pb-6 px-7 pr-4 larger:px-10 small:px-6"
      >
        <motion.div
          ref={scope}
          className="flex flex-col justify-start items-start"
        >
          <motion.h3
            initial={{ opacity: 0, y: "30px" }}
            className="font-se text-6xl leading-[126.61px] smaller:text-5xl smaller:leading-[116px]"
          >
            Why us?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: "30px" }}
            className="font-pm text-[1.8rem] font-med leading-[35px] "
          >
            Why Choose Kabariya For Scrap Services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: "30px" }}
            className="font-pm font-med mt-1 mob:text-[0.9rem] "
          >
            Choose Kabariya for a seamless and rewarding scrap selling
            experience.
          </motion.p>
        </motion.div>
        <motion.div
          ref={scope2}
          className="flex justify-center w-full items-center flex-wrap gap-3  gap-y-4"
        >
          {usData.map((it, index) => (
            <Container
              key={index}
              text={it.text}
              title={it.title}
              index={index}
            />
          ))}
        </motion.div>
        <button
          className="btn bg-white text-black border border-borderColorP 
          rounded-[15.51px] max-w-[9.5rem] h-[3.2rem] font-med text-[1.2rem] "
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

const Container = ({ text, index, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-50px" }}
      className="animator max-w-[28.5rem] w-full min-h-[18rem] smaller:min-h-[16rem]
    flex flex-col justify-start items-start gap-6 
    px-[3.1rem] py-8 small:px-6  border border-borderColorP  rounded-[24.54px] hover:shadow-xl "
    >
      <div
        className="bg-[#0CBC8B14] rounded-full p-[0.8rem] small:p-3
        flex justify-center items-center relative right-2 small:right-0 "
      >
        <Image
          src={`/us${index + 1}.webp`}
          width={5000}
          height={5000}
          className="w-[4.1rem] h-[4rem] small:w-[3.3rem] small:h-[3.3rem]"
          alt="logos"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-pm font-bol text-[1.1rem]">{title}</p>
        <p className="font-open text-[1rem] smaller:text-[0.9rem] ">{text}</p>
      </div>
    </motion.div>
  );
};

export default Whyus;
