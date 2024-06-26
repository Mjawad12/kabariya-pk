import Image from "next/image";
import React from "react";

function OurServices() {
  const array = [
    "Household",
    "Banks",
    "Offices",
    "Shops & store",
    "Companies",
    "Factory",
  ];

  return (
    <div className="w-full">
      <div className="max-w-[1440px] px-14 py-[9.5rem] pb-[10rem] small:pb-[5rem] m-auto flex small:px-5 small:flex-col small:pt-5 small:gap-9 justify-between items-center min-h-max relative ">
        <div className="flex-1 flex-grow-[0.4]  flex flex-col justify-start items-start gap-7">
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-pm font-bol text-[4.2rem]  leading-[77.05px] smaller:text-5xl mob:text-[2.7rem] relative left-12 ">
              Our Service
            </h3>
            <h3 className="font-se text-[4.2rem] smaller:text-5xl mob:text-[2.7rem] leading-[77.05px]">
              Avaliable <span className="text-secondaryGreen">for</span>
            </h3>
          </div>
          <p className="font-pm font-med text-[1.1rem] max-w-[45ch]">
            Our services are available for households, offices, shops stores,
            factories, and companies
          </p>
          <button className="btn max-w-[9.5rem] h-[3.2rem]  text-[1.15rem] font-reg rounded-[15.51px]">
            Watch video
          </button>
        </div>
        <div className="flex-1 flex-grow-[0.6] flex justify-center items-center flex-wrap gap-5 larger:gap-3 small:gap-5">
          {array.map((it, index) => (
            <Service index={index} key={index} text={it} />
          ))}
        </div>
        <div className="w-full absolute px-5 bottom-[-15px] small:bottom-[-40px] left-0">
          <Image
            src={"/service-line.webp"}
            height={5000}
            width={5000}
            alt="serviceline"
            className="w-full pointer-events-none "
          />
        </div>
      </div>
    </div>
  );
}

const Service = ({ index, text }) => {
  return (
    <div initial={{ opacity: 0, x: "-50px" }} className="relative ">
      <Image
        src={`/house${index + 1}.webp`}
        height={225}
        width={225}
        alt={`/house${index + 1}.webp`}
        className="large:w-[170px] med:w-[140px] small:w-[200px] smaller:w-[250px] h-auto"
      />
      <p className="absolute bottom-[15px] left-[20px] font-pm font-reg text-white text-[1.3rem] ">
        {text}
      </p>
    </div>
  );
};

export default OurServices;
