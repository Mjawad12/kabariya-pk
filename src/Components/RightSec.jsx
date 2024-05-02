"use client";
import React, { useState } from "react";
import Sheduler from "./Sheduler";
import { leftPic, rightPic } from "./Consonants";
import SubmittedDialog from "./SubmittedDialog";
import { motion } from "framer-motion";

function RightSec() {
  const [submitted, setsubmitted] = useState(false);
  const [loading, setloading] = useState(false);
  return (
    <motion.div
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeInOut", delay: 0.7 },
      }}
      initial={{ opacity: 0, scale: 1.15 }}
      className="w-[100%]  min-h-[calc(100vh-84px)] flex 
      justify-center items-center px-7 pr-0 small:pl-0"
    >
      <div
        className={`max-w-[660px] w-full  min-h-[510px]  relative flex flex-col
         justify-start ${
           submitted && "justify-center"
         } items-center bg-white  p-10 med:py-6 med:px-4 small:p-7 smaller:p-4  gap-6 small:gap-8
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
            <div className="flex flex-col items-start justify-start w-full">
              <h3
                className="font-pm font-bol text-[45px]
                leading-[52px] larger:text-[30px] mob:text-[27px] "
              >
                Schedule Pick-up
              </h3>
              <p className="font-pm font-med text-[15px] mob:text-[14px]">
                with our Hassle-Free Doorstep Pickup Service In Just few Easy
                Steps.
              </p>
            </div>
            <Sheduler setsubmitted={setsubmitted} setloading={setloading} />
          </>
        ) : (
          <SubmittedDialog setsubmitted={setsubmitted} loading={loading} />
        )}
      </div>
    </motion.div>
  );
}

export default RightSec;
