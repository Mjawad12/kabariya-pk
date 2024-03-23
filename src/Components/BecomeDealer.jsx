import React, { Fragment } from "react";
import { becomeDealerData, mouse } from "./Consonants";
import { Dealerbtn } from "./HeroSec";
import Image from "next/image";

function BecomeDealer() {
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full flex justify-end end-start h-[200px] small:h-[151px] smaller:h-[70px]  relative">
        <div className="h-full w-full bg-lightGreen "></div>
        <div className="edge2"></div>
        <div className="absolute left-[50%] translate-x-[-50%] top-11 p-[1px] small:hidden ">
          {mouse}
        </div>
      </div>
      <div className="mP2 w-full min-h-max pb-10 px-5">
        <div className="flex flex-col justify-start items-center max-w-[1230px] min-h-max m-auto gap-16  small:gap-14 ">
          <div className="flex flex-col justify-center items-center gap-8 small:gap-7 smaller:gap-3 z-20">
            <p className="font-pm font-med text-3xl leading-[35px] smaller:text-2xl">
              How To Become
            </p>
            <p className="font-pm font-bol text-6xl leading-[41.61px] large:text-5xl small:text-4xl text-center ">
              A Kabariya Dealer
            </p>
            <p className="font-pm font-reg text-center text-[1rem] small:max-w-[35ch] smaller:mb-5 ">
              Watch the Video Guide on Placing an Order with the Kabariya App
            </p>

            <Dealerbtn
              textColor={"black"}
              bgcolor={"#f3fcf9"}
              text="GET STARTED"
              width="175px"
            />
          </div>
          <div className="w-full flex justify-start larger:justify-center items-center flex-wrap gap-7">
            {becomeDealerData.map((it, index) => (
              <>
                {index === 2 && (
                  <Fragment key={index}>
                    <Image
                      src="/dealer1.webp"
                      width={99}
                      height={99}
                      alt="delaer1"
                      unoptimized
                      className="relative left-[120px] extLar:left-0 larger:hidden"
                    />

                    <Image
                      src="/dealer2.webp"
                      width={67}
                      height={67}
                      alt="delaer1"
                      unoptimized
                      className="relative right-[110px] extLar:right-0  larger:hidden"
                    />
                  </Fragment>
                )}

                <ProcessCard
                  svg={it.svg}
                  desc={it.desc}
                  tag={it.tag}
                  title={it.title}
                  color={it.color}
                  bgColor={it.bgColor}
                  key={index}
                  index={index}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeDealer;

const ProcessCard = ({ svg, tag, desc, title, index, color, bgColor }) => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 15px 26px 0px" }}
      className="max-w-[525px] w-full min-h-max bg-white rounded-[25px] 
    border border-borderColorP flex justify-start gap-8 
    items-start relative p-10 pb-9 smaller:p-6 smaller:flex-col smaller:gap-2 smaller:pb-9"
    >
      <div
        style={{ background: bgColor }}
        className="flex-1 flex-grow-[0.1] rounded-[17.27px] p-4 smaller:p-3"
      >
        {svg}
      </div>
      <div className="flex-1 flex-grow-[0.85] flex flex-col justify-start items-start pt-2">
        <p style={{ color: color }} className="font-pm font-med  text-[1rem]">
          {tag}
        </p>
        <p className="font-pm font-bol text-2xl leading-[40.56px] smaller:text-[1.4rem] Smob:text-[1.3rem] ">
          {title}
        </p>
        <p className="font-open mt-3 smaller:mt-2 max-w-[33ch] text-[1rem] ">
          {desc}
        </p>
      </div>
      <span
        style={{ backgroundColor: color }}
        className={`absolute top-3 right-4 flex
           justify-center items-center  w-5 h-5 
            rounded-full text-white font-pm font-med p-5 text-2xl  smaller:top-6 smaller:right-6 `}
      >
        {index + 1}
      </span>
    </div>
  );
};
