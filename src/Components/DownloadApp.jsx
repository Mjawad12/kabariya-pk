import React from "react";
import { apple, playStore } from "./Consonants";
import Image from "next/image";

function DownloadApp() {
  return (
    <div className="w-full min-h-max">
      <div className="max-w-[1400px] w-full px-14 flex justify-between items-center m-auto gap-5 mb-20 small:mb-0 small:gap-14 small:px-5 small:flex-col py-10 smaller:pt-5">
        <div className="flex-1 flex-grow-[0.55]  flex flex-col justify-start items-start w-full gap-5 small:gap-4 smaller:gap-3 ">
          <h4
            className="font-pm font-med text-[3.6rem] larger:text-[3.2rem] large:text-[3rem]
           max-w-[14.7ch] leading-[70.6px] small:leading-[58px] smaller:text-[2.5rem] mob:text-[2rem] smaller:leading-[40px]  "
          >
            Make Easy your Life with Download the Kabariya app
          </h4>
          <p className="font-pm font-med  text-[1.3rem] larger:text-[1.1rem]  max-w-[45.5ch] text-[#7E7E7E] leading-[33px] small:leading-[25px] ">
            Transform the way you manage your scrap with the Kabariya mobile
            app. Download now and discover a world of effortless scrap selling,
            accurate weighing, competitive pricing, and secure payments.
          </p>
          <div className="flex justify-start items-start gap-5 small:gap-3 mt-5 smallest:flex-col smallest:justify-center smallest:items-center smallest:w-full ">
            <button
              className="bg-black flex justify-center 
            items-center w-[200px] med:w-[180px] smaller:w-[155px]  gap-3 
            pb-1 px-2 med:px-1 rounded-lg"
            >
              {apple}
              <div
                className="flex flex-col justify-center 
              items-center h-[60px] med:h-[52px] mob:h-[50px]  "
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
        <div className="flex-1 flex-grow-[0.45] small:max-w-[30rem]  w-full ">
          <Image
            src="/mobileDownload.png"
            width={5000}
            height={5000}
            alt="mobile Download"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
