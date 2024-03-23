import { privacyPolicy } from "@/Components/Consonants";
import Contact from "@/Components/Contact";
import React from "react";
import { DownloadBanner } from "../about/page";
import Footer, { Banner } from "@/Components/Footer";

function page() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1440px] min-h-screen w-full m-auto px-5 py-20 small:py-10 smaller:py-7 flex flex-col gap-14 small:gap-10 ">
        <div className="w-full flex flex-col gap-7 small:gap-5 smaller:gap-0">
          <h1 className="font-pm font-bol text-white text-[65.43px] leading-[70.61px] small:text-[60px] smaller:text-[50px] mob:text-[45px]">
            Privacy Policy
          </h1>
          <p
            className="font-pm font-reg text-white text-[20px] leading-[30.61px] 
          small:text-[18px] smaller:text-[16px] mob:text-[15px] small:leading-[25.61px] smaller:leading-[23px]"
          >
            Kabariya was born from a vision – a vision of simplifying scrap
            management and connecting buyers and sellers. We understand the
            challenges associated with handling scrap, and we're on a mission to
            provide a solution that not only streamlines the process but also
            promotes eco-friendly practices.
          </p>
        </div>
        <div className="w-full flex flex-col gap-12">
          {privacyPolicy.map((it, index) => (
            <PrivacyCard
              heading={it.heading}
              key={index}
              text={it.text}
              text2={it.text2}
              ul={it.ul}
            />
          ))}
        </div>
      </div>
      <Contact about={true} />
      <DownloadBanner />
      <Footer about={true} dealearship={true} />
    </div>
  );
}

const PrivacyCard = ({ text, heading, text2, ul }) => {
  return (
    <div className="w-full bg-[#2DB4734D]  px-12 py-14  rounded-[50px] small:px-10 small:py-12 small:rounded-[45px] smaller:px-8 smaller:py-9 ">
      <h2 className="font-pm font-bol text-[40.43px] leading-[57.4px] text-white small:text-[38px] smaller:text-[32px] small:leading-[50px] smaller:leading-[35px]  ">
        {heading}
      </h2>
      <p className="font-pm font-reg text-[18px] leading-[29px] text-white mt-5 small:mt-3 smaller:mt-2 small:text-[17px] smaller:text-[16px] small:leading-[25px] smaller:leading-[23px]">
        {text}
      </p>
      {ul && (
        <ul className="flex flex-col gap-0 [list-style:disc;] pl-8 py-6 smaller:pl-3 smaller:py-3 ">
          {ul.split("_").map((it) => (
            <li className="font-pm font-reg text-[18px] leading-[19px] text-white mt-5 small:mt-3 smaller:mt-2 small:text-[17px] smaller:text-[16px] ">
              {it}
            </li>
          ))}
        </ul>
      )}
      {text2 && (
        <p className="font-pm font-reg text-[18px] leading-[29px] text-white mt-5 small:mt-3 smaller:mt-2 small:text-[17px] smaller:text-[16px] small:leading-[25px] smaller:leading-[23px]">
          {text2}
        </p>
      )}
    </div>
  );
};

export { PrivacyCard };

export default page;
