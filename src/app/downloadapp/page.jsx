import { Banner } from "@/Components/Footer";
import { AppstoreBtn, GooglePlayBtn } from "@/Components/HeroSec";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="w-full flex flex-col gap-[6rem]">
      <div className="max-w-[1600px] w-full mt-16 relative">
        <p className="text-[690.2px] font-bol text-[#00000005] absolute top-[56%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]">
          User
        </p>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-full flex justify-center items-center relative">
            <button className="btn bg-primaryGreen rounded-[50px] max-w-[9.5rem] w-full font-pm font-bol py-0 h-[2.5rem] text-[1.3rem]">
              Download
            </button>
            <p className="font-pm font-reg text-[20px] absolute translate-x-[-50%] left-[60%]">
              Coming Soon
            </p>
          </div>
          <p className="text-[3.5rem] font-pm font-bol">Kabariya User App</p>
        </div>
        <div className="flex justify-center items-center gap-8 mt-8 ">
          <DownloadCard src={"/iphone.png"} app={true} />
          <DownloadCard src={"/samsung.png"} app={false} />
        </div>
      </div>
      <div className="max-w-[1600px] w-full mt-14 border-t border-[#00000033] py-[6.5rem] relative">
        <p className="text-[530.7px] font-bol text-[#00000005] absolute top-[64%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[-1]">
          Dealer
        </p>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="w-full flex justify-center items-center relative">
            <button className="btn bg-black rounded-[50px] max-w-[9.5rem] w-full font-pm font-bol py-0 h-[2.5rem] text-[1.3rem]">
              Download
            </button>
            <p className="font-pm font-reg text-[20px] absolute translate-x-[-50%] left-[60%]">
              Coming Soon
            </p>
          </div>
          <p className="text-[3.5rem] font-pm font-bol text-primaryGreen ">
            Kabariya <span className="text-[#C80B0B]">Dealer</span> App
          </p>
        </div>
        <div className="flex justify-center items-center gap-8 mt-8 ">
          <DownloadCard src={"/iphone.png"} app={true} border={true} />
          <DownloadCard src={"/samsung.png"} app={false} border={true} />
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
      className="max-w-[445px] w-full py-6 px-9 bg-white rounded-[20px] min-h-[21rem] flex justify-between items-center "
    >
      <div>
        <Image
          src={src}
          width={140}
          height={140}
          alt="image"
          className={app && "w-[150px]"}
        />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Image src={"/qrcode.png"} width={180} height={180} alt="QRcode" />
        <p className="font-pm text-[1.05rem]">Scan to download</p>
        {app ? (
          <div className="mt-2 scale-[0.95] relative bottom-1">
            <AppstoreBtn />
          </div>
        ) : (
          <div className="mt-2 scale-[0.95] relative bottom-1">
            <GooglePlayBtn />
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
