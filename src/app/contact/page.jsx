import {
  RightArrow,
  arrowRight,
  contactPageData,
  left,
} from "@/Components/Consonants";
import Contact from "@/Components/Contact";
import { Banner } from "@/Components/Footer";
import Link from "next/link";
import React from "react";
import { DownloadBanner } from "../about/page";

function page() {
  return (
    <div className="w-full bg-black min-h-screen ">
      <div className="w-full flex flex-col justify-center items-center max-w-[1220px] m-auto px-5 gap-14 py-20 pt-[5.5rem] small:pt-[3rem] small:gap-10 smaller:gap-5 smaller:pt-[1rem]  ">
        <div>
          <h4 className="font-pm font-bol text-white text-[67.43px] leading-[60.61px] smaller:text-[60px] ">
            Connect
          </h4>
          <p className="gont-pm font-reg text-[26.88px] text-white w-full text-center smaller:text-[24px]">
            Social Network
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 small:gap-8 smaller:gap-3 w-full">
          {contactPageData.map((it, index) => (
            <ContactCard svg={it.svg} link={it.link} key={index} />
          ))}
        </div>
      </div>
      <Contact about={true} />
      <div className="pb-5 border-b border-primaryGreen">
        <DownloadBanner />
      </div>
      <Banner />
    </div>
  );
}

const ContactCard = ({ svg, link }) => {
  return (
    <Link href={link} target="_blank" className="w-full">
      <div className="w-full flex justify-between items-center px-8 py-7 small:py-4 small:px-6  smo:py-1 smo:px-3  border border-[#FFFFFF4D] rounded-[38px] smo:rounded-[28px] small:rounded-[33px] hover:bg-white [&_p]:hover:text-black [&_svg:nth-child(2)]:hover:stroke-black transition-all duration-100 ">
        <div className="flex gap-7  small:gap-5 smo:gap-3 justify-center items-center">
          {svg}
          <p className="text-white font-pm font-med text-[22px] small:text-[16px] smo:text-[13px] mob:text-[10px] ">
            {link}
          </p>
        </div>
        <div className="smallest:hidden">{arrowRight}</div>
      </div>
    </Link>
  );
};

export default page;
