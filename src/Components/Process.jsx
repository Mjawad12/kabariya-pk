import React from "react";
import { download, play2, processDetails } from "./Consonants";
import Image from "next/image";

function Process() {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-black w-full h-5 edge"></div>
      <div className=" mP w-full px-10 min-h-screen flex flex-col justify-center items-center gap-20 ">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className="font-pm font-med text-3xl leading-[35px]">
            Our Process
          </p>
          <p className="font-pm font-bol text-6xl leading-[41.61px] large:text-5xl small:text-4xl ">
            How it's work
          </p>
          <p className="font-pm font-reg text-center ">
            Watch the Video Guide on Placing an Order with the Kabariya App
          </p>
          <a
            href="https://www.youtube.com/@Kabariya.official"
            target="_blank"
            className="max-w-[22rem] w-full flex justify-center 
            items-center  rounded-[24.54px] bg-white 
            font-pm font-med text-[1.2rem] px-2 py-3 gap-5 
            border border-borderColorP small:text-[0.9rem] small:max-w-[20rem]  "
          >
            <span
              className="bg-black w-11 h-11 flex
           justify-center items-center rounded-full"
            >
              {download}
            </span>
            First Download the app
          </a>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap gap-5">
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
        className="max-w-[21rem] w-full h-[21rem] border
       border-borderColorP hover:shadow-xl 
        flex flex-col justify-center items-center relative gap-5 px-7 rounded-[24.54px] "
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
          src={"/app.png"}
          width={5000}
          height={5000}
          className="w-[4.5rem] h-[4.5rem]"
          alt="app"
        />

        <div className="flex flex-col justify-center items-center gap-1">
          <p style={{ color: color }}>{tag}</p>
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="text-2xl font-bol font-pm">{title}</p>
            <p className="font-open text-center text-[0.95rem]">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
