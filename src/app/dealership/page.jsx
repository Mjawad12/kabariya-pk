import BecomeDealer from "@/Components/BecomeDealer";
import { arrowLeft2, play } from "@/Components/Consonants";
import Contact from "@/Components/Contact";
import DownloadDealerhip from "@/Components/DownloadDealerhip";
import Footer from "@/Components/Footer";
import { Dealerbtn } from "@/Components/HeroSec";
import OurFeatures from "@/Components/OurFeatures";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-start justify-start w-full m-auto  min-h-max">
      <div
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        className="w-full bg-black min-h-[calc(87vh-104px)] Lar:min-h-[calc(100vh-104px)] rounded-[40px] flex justify-center items-center px-10 smaller:px-5 "
      >
        <div
          className="max-w-[1385px] w-full m-auto flex small:flex-col
     justify-between items-center small:items-start px-4 small:gap-20 small:py-10 smaller:pb-16 smaller:pt-5 "
        >
          <div className="max-w-max larger:max-w-[100%] larger:w-full small:max-w-[100%]  flex flex-col justify-start items-start gap-11">
            <div>
              <h1 className="text-white text-[62px]  smaller:text-[55px] mob:text-[50px] Smob:text-[45px] mob:whitespace-nowrap leading-[75px] smaller:leading-[70px] mob:leading-[58px] font-pm font-bol">
                Learn About
              </h1>
              <h1 className="text-white text-[62px]  smaller:text-[55px] mob:text-[50px] Smob:text-[45px] leading-[75px] smaller:leading-[70px] mob:leading-[58px] font-pm font-bol">
                Kabariya Dealers
              </h1>
            </div>
            <div className="flex items-center justify-start gap-4 btD mob:gap-3 ">
              <p className="font-pm font-[300] text-white text-[54px] smaller:text-[47px] mob:text-[40px] Smob:text-[37px]">
                Watch Now
              </p>
              <div className="small:rotate-[90deg]  ">{arrowLeft2}</div>
            </div>
            <Link href={"/Dealerform"} className="w-full">
              <Dealerbtn bgcolor="black" textColor="white" />
            </Link>
          </div>
          <div className="max-w-max larger:max-w-[85%] larger:w-full small:max-w-[100%] relative ">
            <div
              className="bgGradientDark h-[51rem] w-[40rem] rounded-full large:h-[47rem] large:w-[38rem]
             bg-white absolute top-[-65%] left-[-35%] z-[0] small:top-[-397px] small:left-[-351px]   "
            ></div>
            <div
              initial={{ opacity: 0, y: "30px" }}
              className="dashedBorder flex items-center  z-20 relative max-w-[721px] small:max-w-[100%] small:max-h-[100%]  w-full max-h-[422px] h-full p-4 smaller:p-3 Smob:p-2"
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src={"/DealerMobile.webp"}
                  height={1000}
                  width={1000}
                  alt="dealermobile"
                />
                <div className="absolute ">{play}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BecomeDealer />
      <OurFeatures />
      <DownloadDealerhip />
      <Contact />
      <Footer dealearship={true} />
    </div>
  );
}

export default page;
