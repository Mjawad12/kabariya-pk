import Image from "next/image";
import React from "react";
import { MobileApp } from "./HeroSec";

function DownloadDealerhip() {
  return (
    <div className="w-full flex  justify-center items-center pt-[17rem] pb-[7rem] small:pb-[2rem] small:pt-[3rem] mob:pb-0 px-5  gap-5 large:flex-col-reverse large:pt-[4rem] larger:gap-10  ">
      <div className="w-full  flex justify-center items-end large:mt-9 smaller:mt-20 mob:mt-14   ">
        <div className="flex justify-center items-end  ">
          <div
            className="rounded-full absolute 
          max-w-[638px] max-h-[638px] 
          small:max-w-[455px] small:max-h-[455px] 
          smaller:max-w-[425px] smaller:max-h-[425px] 
          mob:max-w-[330px] mob:max-h-[330px] 
          w-full h-full  bg-[#0CBC8B1A]"
          ></div>
          <div
            className="rounded-full absolute 
          max-w-[530px] w-full max-h-[490px] 
          small:max-w-[390px] small:max-h-[340px] 
          smaller:max-w-[350px] smaller:max-h-[340px]  
          mob:max-w-[280px] mob:max-h-[250px]  
          h-full bg-[#0CBC8B26]"
          />
          <div
            className="max-w-[530px] w-full  h-[10rem] 
          small:max-w-[400px] small:h-[7.5rem] 
          smaller:max-w-[350px] smaller:h-[6rem] 
          mob:max-w-[300px] mob:h-[5rem] 
          rounded-[26px] smaller:rounded-[20px] bg-[#0CBC8B] z-10 absolute"
          ></div>
          <Image
            src={"/DealerMobileDownload.png"}
            width={425}
            height={425}
            alt="iphone"
            className="z-20 relative bottom-6  small:w-[275px] mob:w-[210px] "
          />
        </div>
      </div>

      <div className="w-[90%] smaller:w-[100%] min-h-[460px] flex flex-col justify-start items-start gap-6 smaller:gap-8 ">
        <div className="text-black">
          <h4 className="font-pm font-bol text-6xl small:text-5xl smaller:text-[2.5rem] small:leading-[50px]">
            Download the
          </h4>
          <h4 className="font-pm font-bol text-6xl small:text-5xl smaller:text-[2.5rem] small:leading-[50px]">
            Kabariya{" "}
            <span className="font-se font-[500] underline underline-offset-8 [textDecorationThickness:4px]  text-secondaryGreen ">
              Dealer
            </span>{" "}
            <span className="font-se font-[500] ">App!</span>
          </h4>
        </div>
        <p className="font-pm text-[21px] font-med max-w-[47ch] text-[#7E7E7E] smaller:text-[17px] mob:text-[16px]  ">
          Transform the way you manage your scrap with the Kabariya mobile app.
          Download now and discover a world of effortless scrap selling,
          accurate weighing, competitive pricing, and secure payments.
        </p>
        <MobileApp />
      </div>
    </div>
  );
}

export default DownloadDealerhip;
