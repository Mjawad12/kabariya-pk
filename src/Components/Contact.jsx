"use client";
import React, { useRef } from "react";
import { loc, AtR, WA, phone } from "./Consonants";

function Contact() {
  const formRef = useRef(null);

  const SubmitForm = (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-[70rem] m-auto w-full flex flex-col justify-center items-center gap-14 py-20 px-5 small:px-7 smaller:px-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-pm font-bol text-6xl larger:text-5xl text-center ">
            Get in touch with us
          </h3>
          <p className="font-pm text-[1.3rem] larger:text-[1.2rem] font-med text-center ">
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div
          className="w-full bg-black p-7 small:px-5 rounded-[50px] smo:rounded-[30px]
            flex justify-between items-center small:flex-col small:gap-5"
        >
          <div
            className="flex-1 flex-grow-[0.35]  small:w-full flex flex-col justify-start items-start
           px-7 py-7 rounded-[32px] bg-[#ECFFEC] min-h-[30rem] small:min-h-[25rem] smaller:px-5 "
          >
            <h4 className="font-se text-6xl smaller:text-5xl mob:text-4xl ">
              Contact us
            </h4>
            <p className="font-pm mt-4 text-[1.2rem] smaller:text-[1.1rem] font-med ">
              Fill up the form and our Team will get back to you within 24 hours
            </p>
            <div className="flex flex-col justify-start items-start gap-5 mt-5">
              <div className="flex justify-start items-start gap-3">
                {phone}
                <p className="font-pm text-[1.1rem] ">021 45637845</p>
              </div>
              <div className="flex justify-start items-start gap-3">
                {WA}
                <p className="font-pm text-[1.1rem] ">0331 7777722</p>
              </div>
              <div className="flex justify-start items-start gap-3">
                {AtR}
                <p className="font-pm text-[1.1rem] ">Contact@kabariya.pk</p>
              </div>
              <div className="flex justify-start items-start gap-3">
                {loc}
                <p className="font-pm text-[1.1rem] max-w-[22ch] ">
                  Guslistan e johar block 19 street 13 shop #34, karachi
                  Pakistan
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-grow-[0.65] small:w-full   ">
            <form
              ref={formRef}
              action="null"
              className="flex flex-col justify-center items-start w-full pl-[5rem] pr-[3.25rem] small:px-0 small:w-full  h-[25rem] gap-4 "
            >
              <div className="flex justify-between items-center small:flex-col small:gap-4 gap-5 w-full ">
                <input
                  required
                  type="text"
                  placeholder="Name"
                  className="bg-[#FFFFFF1A] w-full h-[3.2rem] px-5 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A]  "
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#FFFFFF1A] w-full h-[3.2rem] px-5 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A] "
                />
              </div>

              <input
                required
                type="email"
                placeholder="Email Address"
                className="bg-[#FFFFFF1A] w-full h-[3.2rem] px-5 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A] "
              />

              <textarea
                required
                placeholder="Massage here"
                rows={6}
                className="bg-[#FFFFFF1A] w-full [resize:none] px-5 py-2 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A] "
              />
              <button
                onClick={SubmitForm}
                className="btn bg-primaryGreen text-white max-w-[8rem] h-[3rem] font-pm font-med text-[1.05rem] "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
