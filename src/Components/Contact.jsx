"use client";
import React, { useRef, useState } from "react";
import { loc, AtR, WA, phone } from "./Consonants";
import SubmittedDialog from "./SubmittedDialog";

function Contact({ about }) {
  const [submitted, setsubmitted] = useState(false);
  const formRef = useRef(null);
  const username = useRef(null);
  const phoneValue = useRef(null);
  const message = useRef(null);
  const email = useRef(null);
  const [loading, setloading] = useState(false);

  const SubmitForm = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      const data = await fetch("https://kabariya.pk/api/contactEmail", {
        method: "POST",
        body: JSON.stringify({
          username: username.current.value,
          phone: phoneValue.current.value,
          email: email.current.value,
          message: message.current.value,
        }),
      });
      const parsedData = await data.json();
      if (parsedData.status.error === null) {
        setsubmitted(true);
      }
      setloading(false);
    }
  };

  return (
    <div className="w-full min-h-max">
      <div className="max-w-[71rem] m-auto w-full flex flex-col justify-center items-center gap-14 smaller:gap-10 py-20  small:pt-[5rem] px-5 small:px-7 smaller:px-5">
        <div
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2, type: "ease" },
          }}
          initial={{ opacity: 0, y: "30px" }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <h3
            className={`font-pm font-bol text-6xl larger:text-5xl text-center smaller:text-[2.5rem] smaller:max-w-[12ch] ${
              about ? "text-white" : "text-black"
            }`}
          >
            Get in touch with us
          </h3>
          <p
            className={`font-pm text-[1.3rem] larger:text-[1.2rem] smaller:text-[1rem] font-med text-center ${
              about ? "text-white" : "text-black"
            }`}
          >
            Any question or remarks? Just write us a message!
          </p>
        </div>
        <div
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5, type: "ease" },
          }}
          initial={{ opacity: 0, y: "30px" }}
          className={`w-full bg-black p-7 small:p-6  rounded-[55px] small:rounded-[35px]
            flex justify-between items-center small:flex-col small:gap-5 ${
              about && "border border-[#FFFFFF4D]"
            } `}
        >
          <div
            className="flex-1 flex-grow-[0.34]  small:w-full flex flex-col justify-start items-start
           p-[1.9rem]  rounded-[32px] bg-[#ECFFEC] min-h-[31rem] small:min-h-[25rem] smaller:px-5 small:rounded-[20px] "
          >
            <h4 className={`font-se text-6xl smaller:text-5xl`}>Contact us</h4>
            <p
              className={`font-pm mt-4 text-[1.15rem] smaller:text-[1rem] font-med`}
            >
              Fill up the form and our Team will get back to you within 24 hours
            </p>
            <div className="flex flex-col items-start justify-start gap-5 mt-5">
              <div className="flex items-start justify-start gap-3">
                {phone}
                <p className="font-pm text-[1.15rem] smaller:text-[0.95rem] ">
                  021 45637845
                </p>
              </div>
              <div className="flex items-start justify-start gap-3">
                {WA}
                <p className="font-pm text-[1.15rem] smaller:text-[0.95rem] ">
                  0331 7777722
                </p>
              </div>
              <div className="flex items-start justify-start gap-3">
                {AtR}
                <p className="font-pm text-[1.15rem] smaller:text-[0.95rem] ">
                  Contact@kabariya.pk
                </p>
              </div>
              <div className="flex items-start justify-start gap-3">
                {loc}
                <p className="font-pm text-[1.2rem] smaller:text-[0.95rem] max-w-[22ch] ">
                  Guslistan e johar block 19 street 13 shop #34, karachi
                  Pakistan
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-grow-[0.65] small:w-full">
            {!submitted ? (
              <form
                ref={formRef}
                action="null"
                className="flex flex-col justify-center items-start w-full pl-[4.8rem] pr-[3.5rem] small:px-0 small:w-full  h-[25rem] gap-5 "
              >
                <div className="flex items-center justify-between w-full gap-5 small:flex-col small:gap-4 ">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    ref={username}
                    className="bg-[#FFFFFF1A] w-full h-[3.2rem] px-5 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A]   text-[0.9rem] "
                  />
                  <input
                    required
                    type="tel"
                    ref={phoneValue}
                    placeholder="Phone Number"
                    className="bg-[#FFFFFF1A] w-full h-[3.2rem] px-5 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A]  text-[0.9rem] "
                  />
                </div>

                <input
                  required
                  type="email"
                  ref={email}
                  placeholder="Email Address"
                  className="bg-[#FFFFFF1A] w-full h-[3.2rem] px-5 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A]  text-[0.9rem] "
                />

                <textarea
                  required
                  placeholder="Massage here"
                  rows={6}
                  ref={message}
                  maxLength={309}
                  className="bg-[#FFFFFF1A] w-full [resize:none] px-5 py-3 font-pm rounded-[12.65px] text-white outline-none border border-[#FFFFFF1A]  text-[0.9rem] "
                />
                <button
                  disabled={loading}
                  onClick={SubmitForm}
                  className="btn  bg-primaryGreen text-white max-w-[8rem] h-[3.2rem] small:h-[3.8rem] font-pm font-med text-[1.05rem] disabled:cursor-not-allowed disabled:bg-gray-600 "
                >
                  Submit
                </button>
              </form>
            ) : (
              <SubmittedDialog setsubmitted={setsubmitted} contact={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
