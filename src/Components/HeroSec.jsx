import React from "react";
import { RightArrow, apple, playStore } from "./Consonants";

import RightSec from "./RightSec";

function HeroSec() {
  return (
    <div
      className="max-w-[1440px] w-full m-auto 
      min-h-[calc(100vh-84px)] flex small:flex-col
     small:py-6 mob:pt-3 justify-center items-center px-4 small:px-0  
     gap-1 small:gap-20 smaller:gap-12 "
    >
      <div className="w-full ">
        <div className="flex flex-col  justify-start items-start gap-5 extLar:gap-3">
          <div>
            <h2 className="font-pm font-bol text-[62px] extLar:text-[50px] larger:text-[45px] leading-[4rem] small:leading-[3rem] ">
              <span className="text-primaryGreen">Pakistan's</span> First
            </h2>
            <h2 className="font-se font-reg text-[62px] extLar:text-[50px] larger:text-[45px] small:leading-[3.5rem] ">
              Scrap Platform <span className="text-primaryGreen">Ever!</span>
            </h2>
          </div>
          <p className="font-pm font-reg leading-[27px] max-w-[55ch] text-[18px]  extLar:text-[16px]  small:font-med small:text-[17px] ">
            Kabariya is a secure online platform dedicated to the selling of
            scrap materials. Our mission is to minimize the accumulation of
            unwanted and non-essential metals through recycling.
          </p>
          <div className="w-full py-5">
            <Dealerbtn bgcolor="white" textColor="black" />
          </div>
          <MobileApp />
        </div>
      </div>
      <RightSec />
    </div>
  );
}

export default HeroSec;

const Dealerbtn = ({ bgcolor, textColor, text, width }) => {
  return (
    <div
      className={`w-full max-w-[233px] h-[62px] ${
        width && "h-[57px]"
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
  relative z-10 bg-${bgcolor} text-${textColor} w-full  h-[59px] max-w-[230px] font-med
   rounded-[50px] py-[8px] px-[14px] ${
     width && "pl-[14px] pr-[8px] h-[54px]"
   } ml-[0.1px] mb-[0.3px] `}
      >
        {text ? text : "BECOME A DEALER"} {RightArrow}
      </button>
    </div>
  );
};

const MobileApp = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 smallest:w-full smallest:items-center ">
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
    </div>
  );
};

export { Dealerbtn, MobileApp };
