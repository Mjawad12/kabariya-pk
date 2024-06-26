"use client";
import { Banner } from "@/Components/Footer";
import { AppstoreBtn, GooglePlayBtn } from "@/Components/HeroSec";
import Image from "next/image";
import React, { useEffect } from "react";

function page() {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-[6rem] small:gap-[2rem] overflow-hidden">
      <div className="max-w-[1600px] w-full mt-16 small:mt-9 smaller:mt-6 relative  px-5 smallest:px-3">
        <p className="text-[690.2px] small:text-[500px] smaller:text-[400px] font-bol text-[#00000005] absolute top-[56%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]">
          User
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative flex items-center justify-center w-full down mob:flex-col">
            <button
              className="btn bg-primaryGreen rounded-[50px] max-w-[9.5rem] w-full
             font-pm font-bol py-0 h-[2.5rem] text-[1.3rem] relative flex justify-center items-center smo:text-[1.1rem]  smo:max-w-[7.9rem] smo:h-[2.3rem]"
            >
              Download
              <p className="font-pm font-med text-[20px] absolute text-black left-[110%] whitespace-nowrap smo:text-[16px] mob:text-[14px] mob:hidden">
                Coming Soon
              </p>
            </button>
            <p className="font-pm font-med text-[20px]  text-black  whitespace-nowrap smo:text-[16px] mob:text-[14px] mt-3 hidden mob:flex">
              Coming Soon
            </p>
          </div>
          <p className="downp text-[3.5rem] font-pm font-bol small:text-[3.3rem] smo:text-[3rem] smaller:text-[2.5rem] mob:text-[2.1rem] smallest:text-[1.6rem] ">
            Kabariya User App
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 px-3 mt-8 cont smaller:mt-5 smaller:gap-5 mob:mt-3 ">
          <DownloadCard src={"/iphone.webp"} app={true} />
          <DownloadCard src={"/samsung.webp"} app={false} />
        </div>
      </div>
      <div className="max-w-[1600px] w-full mt-14 small:mt-9 smaller:mt-6 border-t border-[#00000033] py-[6.5rem] small:py-20 smaller:py-10 relative  px-5 ">
        <p className="text-[480.7px] font-bol text-[#00000005] absolute top-[64%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]">
          Dealer
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative flex items-center justify-center w-full down2 mob:flex-col">
            <button className="btn bg-black rounded-[50px] max-w-[9.5rem] w-full font-pm font-bol py-0 h-[2.5rem] text-[1.3rem] relative flex justify-center items-center smo:text-[1.1rem]  smo:max-w-[7.9rem] smo:h-[2.3rem] ">
              Download
              <p className="font-pm font-med text-[20px] absolute text-black left-[110%] whitespace-nowrap smo:text-[16px] mob:text-[14px] mob:hidden">
                Coming Soon
              </p>
            </button>
            <p className="font-pm font-med text-[20px]  text-black  whitespace-nowrap smo:text-[16px] mob:text-[14px] mt-3 hidden mob:flex">
              Coming Soon
            </p>
          </div>
          <p className="downp2 text-[3.5rem] font-pm font-bol text-primaryGreen small:text-[3.3rem] smo:text-[2.9rem] smaller:text-[2.5rem] mob:text-[1.8rem] smallest:text-[1.6rem]">
            Kabariya <span className="text-[#C80B0B]">Dealer</span> App
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 px-3 mt-8 cont2 smaller:mt-5 mob:mt-3 smaller:gap-5 ">
          <DownloadCard src={"/iphone.webp"} app={true} border={true} />
          <DownloadCard src={"/samsung.webp"} app={false} border={true} />
        </div>
      </div>

      <Banner />
    </div>
  );
}

const DownloadCard = ({ src, app, border }) => {
  return (
    <div
      style={{
        boxShadow:
          "1.7619047164916992px 3.5238094329833984px 15.504762649536133px 0px #00000014",
        border: border && `1px solid #00000033`,
      }}
      className="downCard max-w-[445px] w-full smaller:max-w-[350px] mob:max-w-[320px] py-6 px-9 smallest:px-2 smaller:py-3 mob:px-5 bg-white rounded-[20px] min-h-[21rem] small:min-h-[18rem] mob:min-h-[15rem] smallest:min-h-[13rem] flex justify-between items-center "
    >
      <div>
        <Image
          src={src}
          width={140}
          height={140}
          alt="image"
          className={`${
            app && "w-[150px]"
          } smaller:w-[110px] mob:w-[100px] Smob:w-[90px] `}
        />
      </div>
      <div className="flex flex-col items-center gap-2 smaller:gap-1">
        <Image
          src={"/qrcode.webp"}
          width={180}
          height={180}
          alt="QRcode"
          className="smaller:w-[130px] mob:w-[110px] smallest:w-[70px]"
        />
        <p className="font-pm text-[1.05rem] smaller:text-[0.9rem] smallest:text-[0.8rem]">
          Scan to download
        </p>
        {app ? (
          <div className="mt-2 scale-[0.95] smaller:scale-[0.9]  smallest:scale-[0.8]  relative bottom-1 small:bottom-2">
            <AppstoreBtn />
          </div>
        ) : (
          <div className="mt-2 scale-[0.95] smaller:scale-[1] mob:scale-[0.9] Smob:scale-[0.9] smallest:scale-[0.8] relative bottom-1">
            <GooglePlayBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
