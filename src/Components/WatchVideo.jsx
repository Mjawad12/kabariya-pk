import Image from "next/image";
import React from "react";
import { play, play2 } from "./Consonants";

function WatchVideo() {
  return (
    <div className="w-full min-h-screen p-20 small:p-4 pt-[4rem] pb-0">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(12, 188, 139, 0) 0%, rgba(12, 188, 139, 0.05) 100%)",
        }}
        className="w-full min-h-screen px-2 py-[4rem] rounded-3xl flex flex-col justify-center gap-9 items-center"
      >
        <div
          style={{ background: "#0000002E", background: "#000000C4" }}
          className=" video max-w-[1124px] w-full  h-[680.56px] larger:h-[600px] large:h-[550px] med:h-[500px]
          small:h-[450px] smaller:h-[300px] mob:h-[220px] smo:h-[250px]
           bg-black rounded-[31.69px] p-4 relative overflow-hidden "
        >
          <div
            style={{ border: "2px dashed white" }}
            className=" w-full h-full rounded-[18.82px] z-20 relative flex justify-center items-center "
          >
            {play}
          </div>
          <Image
            src="/mobileimage.png"
            alt="mobileimage"
            height={500}
            width={500}
            className="w-full h-full absolute inset-0"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center">
          <h3 className="font-pm font-bol text-6xl small:text-4xl ">
            Watch the video
          </h3>
          <p className="font-pm font-reg text-1xl small:text-center small:text-[1.2rem]">
            Watch the Video Guide on Placing an Order with the Kabariya App
          </p>
          <a
            href="https://www.youtube.com/@Kabariya.official"
            target="_blank"
            className="max-w-[23rem] w-full flex justify-center 
            items-center  rounded-[24.54px] bg-white 
            font-pm font-med text-2xl px-5 py-4 gap-5 
            border border-borderColorP small:text-[0.9rem] "
          >
            {play2}
            View youtube channel
          </a>
        </div>
      </div>
    </div>
  );
}

export default WatchVideo;
