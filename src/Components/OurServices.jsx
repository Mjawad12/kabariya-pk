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
      <div className="max-w-[1320px] px-14 py-[9.5rem] pb-[10rem] small:pb-[5rem] m-auto flex small:flex-col small:pt-5 small:gap-9 small:px-5 justify-between items-center min-h-max relative ">
        <div className="flex-1 flex-grow-[0.4]  flex flex-col justify-start items-start gap-7">
          <div className="flex flex-col justify-start items-start">
            <h3 className="font-pm font-bol text-6xl leading-[77.05px] smaller:text-5xl relative left-12 ">
              Our Service
            </h3>
            <h3 className="font-se text-6xl smaller:text-5xl leading-[77.05px]">
              Avaliable <span className="text-secondaryGreen">for</span>
            </h3>
          </div>
          <p className="font-pm font-med text-[1rem] max-w-[45ch]">
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
        <div className="w-full absolute px-5 bottom-0 small:bottom-[-40px] left-0">
          <Image
            src={"/service-line.png"}
            height={5000}
            width={5000}
            alt="serviceline"
            className="pointer-events-none w-full "
          />
        </div>
      </div>
    </div>
  );
}

const Service = ({ index, text }) => {
  return (
    <div className="relative ">
      <Image
        src={`/house${index + 1}.png`}
        height={210}
        width={210}
        className="large:w-[170px] med:w-[140px] small:w-[200px] smaller:w-[250px]"
      />
      <p className="absolute bottom-[15px] left-[20px] font-pm font-reg text-white text-[1.2rem] ">
        {text}
      </p>
    </div>
  );
};

export default OurServices;
