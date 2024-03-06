"use client";
import React, { useState } from "react";
import Sheduler from "./Sheduler";
import { leftPic, rightPic } from "./Consonants";

function RightSec() {
  const [submitted, setsubmitted] = useState(false);
  return (
    <div
      className="w-[100%]  min-h-[calc(100vh-84px)] flex 
      justify-center items-center px-7 pr-0 small:pl-0"
    >
      <div
        className={`max-w-[698px] w-full  min-h-[507px]  relative flex flex-col
         justify-start ${
           submitted && "justify-center"
         } items-center bg-white p-8 med:py-6 med:px-4 small:p-7 mob:p-5  gap-5 small:gap-8
         shadow-xl rounded-3xl border border-borderColorP`}
      >
        <div className="absolute left-[-80px] bottom-[-38px] -z-10 smaller:top-[-245px] smaller:left-[-135px] ">
          {rightPic}
          <div
            style={{
              boxShadow: "0px 0px 100px 25px #2DB473",
            }}
            className="absolute bottom-[30px] left-[57%] w-20 h-0"
          ></div>
          <div
            style={{
              boxShadow: "0px 0px 100px 25px #2DB473",
            }}
            className="absolute top-[50%] left-[57%] w-20 h-0 hidden smaller:flex "
          ></div>
        </div>
        <div className="absolute top-[-130px] right-[-120px] w-[350px] smaller:top-[40%] smaller:right-[20px]   -z-10">
          {leftPic}
        </div>
        {!submitted ? (
          <>
            <div className="w-full flex flex-col justify-start items-start">
              <h3
                className="font-pm font-bol text-[37px]
                leading-[52px] larger:text-[30px] mob:text-[27px] "
              >
                Schedule Pick-up
              </h3>
              <p className="font-pm font-med text-[15px] mob:text-[14px]">
                with our Hassle-Free Doorstep Pickup Service In Just few Easy
                Steps.
              </p>
            </div>
            <Sheduler setsubmitted={setsubmitted} />
          </>
        ) : (
          <div className="w-full flex flex-col justify-center items-center gap-3">
            <img src="./animatedIcon.gif" alt="animated icon" />
            <p className="text-4xl font-pm font-bol leading-7">
              Request Submitted
            </p>
            <p className="text-1xl font-pm font-reg">
              Your Request submitted successfully
            </p>
            <p
              onClick={() => setsubmitted(false)}
              className="text-black font-pm font-bol cursor-pointer [text-decoration:underline]"
            >
              Got it
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RightSec;