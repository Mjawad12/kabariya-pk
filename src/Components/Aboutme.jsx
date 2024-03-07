import Image from "next/image";
import React from "react";

function Aboutme() {
  return (
    <div className="w-full bg-black flex justify-center items-center min-h-[33rem] pt-10 px-2  small:px-6 ">
      <div className="max-w-[1320px] w-full flex small:flex-col justify-center items-center gap-[5rem] extLar:gap-[4rem] large:gap-[3rem] med:gap-[2.5rem] small:py-9 ">
        <div className="max-w-[500px] large:max-w-[450px] w-full flex justify-center items-center">
          <div className="relative flex justify-center items-center ">
            <span
              className="absolute w-[473px] h-[370px] large:w-[420px] large:h-[320px] med:w-[390px] med:h-[300px] bg-[#2DB4734D] 
              top-[-35px] left-[-40px] med:top-[-30px] med:left-[-35px] small:w-[350px] small:h-[280px] rounded-[46px] 
              smaller:w-[300px] smaller:h-[225px] smaller:rounded-[28px]  smaller:top-[-15px] smaller:left-[-15px] "
            />
            <Image
              src={"/pic.png"}
              width={480}
              height={350}
              alt="pic"
              className="z-20 relative large:w-[410px] med:w-[380px] small:w-[350px] smaller:w-[310px] "
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-10 smaller:gap-7">
          <h2 className="font-pm font-bol text-7xl smaller:text-5xl  text-white">
            About us
          </h2>
          <p
            className="font-open text-white text-[20.5px] smaller:text-[17px]  max-w-[60ch]
            extLar:text-[19px] extLar:max-w-[55ch]   larger:text-[17px] larger:max-w-[58ch] 
            large:text-[15px] large:max-w-[58ch]  med:text-[14px]  w-full small:max-w-[60ch] small:text-[18px] "
          >
            Welcome to Kabariya, your trusted scrap management and recycling
            partner. We're here to revolutionize the way you interact with scrap
            materials, offering you a seamless, rewarding experience whether
            you're an individual or a business.
          </p>
          <button
            className="btn bg-[#FFFFFF1A] border boder-[#FFFFFF80] 
          font-pm font-reg max-w-[166px] "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
