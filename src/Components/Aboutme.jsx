import Image from "next/image";
import React from "react";
import { play2White } from "./Consonants";

function Aboutme({ page }) {
  return (
    <div className="w-full bg-black flex justify-center items-center min-h-[33rem] pt-10 px-2  small:px-6 small:pb-10 ">
      <div
        className={`${
          page ? "max-w-[1350px]" : "max-w-[1320px]"
        } w-full flex small:flex-col justify-center items-center gap-[5rem] extLar:gap-[4rem] large:gap-[3rem] med:gap-[2.5rem] small:py-9`}
      >
        <div className="max-w-[500px] large:max-w-[450px] w-full flex justify-center items-center">
          <div className="relative flex items-center justify-center ">
            <span
              className="absolute w-[473px] h-[370px] large:w-[420px] large:h-[320px] med:w-[390px] med:h-[300px] bg-[#2DB4734D] 
              top-[-30px] left-[-30px] small:w-[350px] small:h-[280px]
               small:top-[-23px] small:left-[-20px] small:rounded-[32px] rounded-[46px] 
              smaller:w-[300px] smaller:h-[225px] smaller:rounded-[25px]  smaller:top-[-15px] smaller:left-[-15px] "
            />
            <Image
              src={"/pic.webp"}
              width={480}
              height={480}
              alt="About me"
              className="z-20 relative large:w-[410px]  med:w-[380px]  small:w-[350px]  smaller:w-[310px]"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-7 smaller:gap-7">
          <h2
            className={`font-pm font-bol ${
              page ? "text-[3.9rem] leading-[1]" : "text-6xl"
            } smaller:text-5xl  text-white`}
          >
            About us
          </h2>
          <p
            className="font-open text-white text-[21.5px] smaller:text-[17px]  max-w-[60ch]
            extLar:text-[19px] extLar:max-w-[55ch]   larger:text-[17px] larger:max-w-[58ch] 
            large:text-[15px] large:max-w-[58ch]  med:text-[14px]  w-full small:max-w-[60ch] small:text-[18px] mt-3  "
          >
            Welcome to Kabariya, your trusted scrap management and recycling
            partner. We're here to revolutionize the way you interact with scrap
            materials, offering you a seamless, rewarding experience whether
            you're an individual or a business.
          </p>
          <div className="w-full">
            <button
              style={{ border: "0.59px solid #FFFFFF80" }}
              className={`btn bg-[#FFFFFF1A]
          font-pm font-reg ${
            page
              ? "max-w-[16rem] h-[4.3rem] flex justify-center items-center gap-5 text-[1.5rem] rounded-[22.51px] border-[#FFFFFF80]"
              : "max-w-[9.2rem] h-[3.2rem] text-[1.1rem] rounded-[17.51px]"
          } `}
            >
              {page && play2White}
              {page ? "watch video" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
