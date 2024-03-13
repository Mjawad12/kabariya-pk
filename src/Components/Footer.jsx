import React from "react";
import { socialIcons } from "./Consonants";

function Footer() {
  return (
    <>
      <div
        className="w-full max-w-[1320px] min-h-max flex justify-between
       items-start gap-10 m-auto pt-28 pb-6 px-7 pr-4 larger:px-10 small:px-6 med:flex-col med:items-center larger:py-20 "
      >
        <div className="flex flex-col justify-start med:items-center items-start gap-4  z-20 ">
          <h4 className="font-pm font-bol text-[1.25rem] whitespace-nowrap">
            Contact Details
          </h4>
          <ul className="flex list-none flex-col med:items-center justify-center items-start gap-3 [&>li]:font-[400]">
            <li className="font-pm text-[1.05rem] smaller:text-[0.95rem] ">
              021 45637845
            </li>

            <li className="font-pm text-[1.05rem] smaller:text-[0.95rem] ">
              0331 7777722
            </li>

            <li className="font-pm text-[1.05rem] smaller:text-[0.95rem] ">
              Contact@kabariya.pk
            </li>

            <li className="font-pm text-[1.05rem] smaller:text-[0.95rem] max-w-[25ch] med:text-center ">
              Guslistan e johar block 19 street 13 shop #34, karachi Pakistan
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start med:items-center items-start gap-4 z-20 ">
          <h4 className="font-pm font-bol text-[1.25rem] whitespace-nowrap">
            Quick Links
          </h4>
          <ul className="flex list-none flex-col med:items-center justify-center items-start gap-3 [&>li]:font-[400] [&>li]:hover:cursor-pointer">
            <li className="font-pm font-reg text-[1.05rem]">Home</li>
            <li className="font-pm font-reg text-[1.05rem]">About us</li>
            <li className="font-pm font-reg text-[1.05rem]">Download app</li>
            <li className="font-pm font-reg text-[1.05rem]">Reviews</li>
            <li className="font-pm font-reg text-[1.05rem]">Contact us</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 z-20  med:items-center ">
          <h4 className="font-pm font-bol text-[1.25rem]">Other Links</h4>
          <ul className="flex list-none flex-col med:items-center justify-center items-start gap-3 [&>li]:font-[400] [&>li]:hover:cursor-pointer">
            <li className="font-pm font-reg text-[1.05rem]">Privacy Policy</li>
            <li className="font-pm font-reg text-[1.05rem]">
              Terms and Conditions
            </li>
            <li className="font-pm font-reg text-[1.05rem]">
              Become a partner
            </li>
            <li className="font-pm font-reg text-[1.05rem]">Career</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start med:items-center items-start gap-2 max-w-[350px] w-full z-20 ">
          <h4 className="font-pm font-bol text-[1.25rem] text-center">
            Notify me when kabariya is live
          </h4>
          <div className="flex justify-start items-center w-full border border-black  rounded-[0.7rem]">
            <input
              className="border-none pl-3 w-full outline-none bg-transparent"
              type="email"
              placeholder="Email address"
            />
            <button
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              className="btn h-[2.7rem] font-pm rounded-[0.7rem] max-w-[6rem]"
            >
              Submit
            </button>
          </div>
          <p className="font-pm font-reg leading-[24px] text-[#7E7E7E] text-[0.9rem] text-center ">
            Upgrade to Spotify Premium and take your music.
          </p>
          <div className="flex flex-col justify-start med:items-center items-start gap-3">
            <h4 className="font-pm font-bol text-[1.4rem]">Follow us</h4>
            <div className="flex justify-start items-start gap-2 med:justify-center w-full [&>svg]:cursor-pointer">
              {socialIcons.map((it) => {
                return it;
              })}
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
}

const Banner = () => {
  return (
    <div className="w-full bg-[#1A1A1A] ">
      <div className="max-w-[1320px]  flex justify-between items-center py-5 px-5 m-auto small:flex-col small:justify-center  small:items-center small:gap-3">
        <p className="font-pm text-[#FFFFFF] text-center ">
          Design & Developed by Hokrex
        </p>
        <p className="text-[#FFFFFF] text-center">
          All copyrights reserved © Kabariya technologies (Pvt ltd.)
        </p>
      </div>
    </div>
  );
};

export default Footer;
