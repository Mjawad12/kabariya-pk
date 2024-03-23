import React from "react";
import { PrivacyCard } from "../privacy/page";
import { terms_conditions } from "@/Components/Consonants";
import Contact from "@/Components/Contact";
import { DownloadBanner } from "../about/page";
import Footer from "@/Components/Footer";

function page() {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1440px] min-h-screen w-full m-auto px-5 py-20 small:py-10 smaller:py-7 flex flex-col gap-14 small:gap-10 ">
        <div className="w-full flex flex-col gap-7 small:gap-5 smaller:gap-0">
          <h1 className="font-pm font-bol text-white text-[65.43px] leading-[70.61px] small:text-[60px] smaller:text-[50px] mob:text-[45px]">
            Terms & Conditions
          </h1>
          <p
            className="font-pm font-reg text-white text-[20px] leading-[30.61px] 
      small:text-[18px] smaller:text-[16px] mob:text-[15px] small:leading-[25.61px] smaller:leading-[23px]"
          >
            Please read these terms and conditions carefully. These terms and
            conditions are legally binding upon users and members of the
            Kabariya website and Kabariya's services.
          </p>
        </div>
        <div className="w-full flex flex-col gap-12">
          {terms_conditions.map((it, index) => (
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

export default page;
