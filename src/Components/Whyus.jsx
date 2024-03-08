import React from "react";
import { usData } from "./Consonants";
import Image from "next/image";
function Whyus() {
  return (
    <div className="w-full  ">
      <div
        className="w-full max-w-[1320px] min-h-screen flex flex-col justify-start
       items-start gap-14 m-auto pt-24 pb-6 px-5 larger:px-10 small:px-6"
      >
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-se text-6xl leading-[116.61px]">Why us?</h3>
          <p className="font-pm text-[1.8rem] font-med leading-[35px] ">
            Why Choose Kabariya For Scrap Services
          </p>
          <p className="font-pm font-med mt-2 ">
            Choose Kabariya for a seamless and rewarding scrap selling
            experience.
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-7  gap-y-4">
          {usData.map((it, index) => (
            <Container
              key={index}
              text={it.text}
              title={it.title}
              index={index}
            />
          ))}
        </div>
        <button className="btn bg-white text-black border border-borderColorP rounded-[18.51px] max-w-[9.5rem] font-med text-[1.2rem] ">
          Learn More
        </button>
      </div>
    </div>
  );
}

const Container = ({ text, index, title }) => {
  return (
    <div
      className="max-w-[25.5rem] w-full h-[17rem] small:h-[19rem]
    flex flex-col justify-start items-start gap-6 
    px-8 py-6 border border-borderColorP  rounded-[24.54px] hover:shadow-xl "
    >
      <div
        className="bg-[#0CBC8B14] rounded-full p-4
        flex justify-center items-center "
      >
        <Image
          src={`/us${index + 1}.png`}
          width={5000}
          height={5000}
          className="w-[4rem] h-[3.9rem]"
          alt="logos"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-pm font-bol text-[1.2rem]">{title}</p>
        <p className="font-open text-[0.9rem]">{text}</p>
      </div>
    </div>
  );
};

export default Whyus;
