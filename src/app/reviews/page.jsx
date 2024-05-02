"use client";
import { clientReviews } from "@/Components/Consonants";
import { Banner } from "@/Components/Footer";
import { CarasouelCard } from "@/Components/Testomonials";
import React, { useEffect } from "react";
function page() {
  return (
    <div className="w-full">
      <div
        className="max-w-[1440px] w-full m-auto 
      min-h-[calc(100vh-84px)] flex flex-col
       justify-start items-start px-4 gap-16 py-10 small:py-5 small:gap-5 "
      >
        <div>
          <h1
            initial={{ opacity: 0, y: "30px" }}
            className="font-pm font-bol text-[45px] leading-[50px] small:text-[40px]"
          >
            Reviews
          </h1>
          <p
            initial={{ opacity: 0, y: "30px" }}
            className="font-pm font-reg text-[17px] small:text-[16px]"
          >
            with our Hassle-Free Doorstep Pickup Service In Just few Easy Steps.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-wrap justify-start py-16 max-w-[1360px] w-full m-auto gap-y-[6rem] small:justify-center small:gap-y-[4rem]">
            {clientReviews.map((it, index) => {
              return (
                <div key={index} className="tp">
                  <CarasouelCard
                    name={it.name}
                    tagline={it.workplace}
                    testmonial={it.review}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
          <button className="m-auto btn bg-white text-black border border-borderColorP rounded-[16.51px] max-w-[9.5rem] h-[3.1rem] font-med text-[1.2rem]">
            Show More
          </button>
        </div>
      </div>

      <div className="mt-10 small:mt-5">
        <Banner />
      </div>
    </div>
  );
}

export default page;
