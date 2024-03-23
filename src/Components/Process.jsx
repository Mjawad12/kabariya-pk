import React from "react";
import { download, processDetails } from "./Consonants";
import Image from "next/image";

function Process() {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-black w-full h-5 edge"></div>
      <div className="mP w-full px-10 pb-12 min-h-max flex flex-col justify-center smaller:px-5  items-center gap-20 z-20 ">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="font-pm font-med text-3xl leading-[35px] smaller:text-2xl">
            Our Process
          </p>
          <p className="font-pm font-bol text-6xl leading-[41.61px] large:text-5xl small:text-4xl ">
            How it's work
          </p>
          <p className="font-pm font-reg text-center text-[1rem] small:max-w-[30ch] ">
            Watch the Video Guide on Placing an Order with the Kabariya App
          </p>
          <a
            href="https://www.youtube.com/@Kabariya.official"
            target="_blank"
            className="max-w-[23.5rem] w-full flex justify-center 
            items-center  rounded-[24.54px] bg-white 
            font-pm font-med text-[1.45rem] py-3  gap-5 
            border border-borderColorP small:text-[1.1rem]
             Smob:text-[1.05rem] small:max-w-max small:px-5  
             small:py-2 small:rounded-[15.54px]  "
          >
            <span
              className="bg-black w-[2.65rem] h-[2.65rem] small:w-8 small:h-8 flex
           justify-center items-center rounded-full"
            >
              {download}
            </span>
            First Download the app
          </a>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-5 small:gap-7 ">
          {processDetails.map((it, index) => (
            <ProcessContainer
              key={index}
              index={index}
              color={it.color}
              desc={it.desc}
              tag={it.tag}
              title={it.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProcessContainer = ({ index, color, desc, tag, title }) => {
  return (
    <>
      <div
        className={`max-w-[23rem] small:max-w-[21.5rem] small:min-h-[21.5rem] mob:min-h-[20rem]  w-full min-h-[22rem] border
       border-borderColorP ${
         (index === 0 || index === 2) && "shadow-xl"
       } hover:shadow-xl 
        flex flex-col justify-center items-center relative gap-5 px-7 rounded-[20.54px] z-30 bg-white`}
      >
        <span
          style={{ backgroundColor: color }}
          className={`absolute top-3 flex
           justify-center items-center left-4 w-5 h-5 
            rounded-full text-white font-pm font-med p-5 text-2xl  `}
        >
          {index + 1}
        </span>
        <Image
          src={"/app.webp"}
          width={5000}
          height={5000}
          className="w-[4.9rem] h-[4.9rem]"
          alt="app"
        />

        <div className="flex flex-col justify-center items-center gap-1">
          <p
            style={{ color: color }}
            className="text-[16.28px] font-pm font-med"
          >
            {tag}
          </p>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-[1.4rem] font-bol font-pm">{title}</p>
            <p className="font-open text-center text-[16.28px] small:text-[15px]">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
