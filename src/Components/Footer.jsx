import React from "react";
import { socialIcons, socialIconsColorfull } from "./Consonants";

function Footer({ dealearship }) {
  return (
    <div
      className={`w-full border-t ${
        dealearship ? "border-primaryGreen mt-6 " : "border-none"
      } `}
    >
      <div
        className={`w-full  ${
          dealearship ? "max-w-[1340px]" : "max-w-[1320px]"
        } min-h-max flex justify-between items-start gap-10 m-auto ${
          dealearship ? "pt-10 pb-9" : "pt-[7.5rem] pb-12"
        }  px-7 pr-4 larger:px-10 small:px-6 med:flex-col med:items-center larger:py-20 `}
      >
        <div className="flex flex-col justify-start med:items-center items-start gap-4  z-20 ">
          <h4
            className={`font-pm font-bol text-[1.25rem] whitespace-nowrap ${
              dealearship ? "text-[#2DB473]" : "text-black"
            } `}
          >
            Contact Details
          </h4>
          <ul
            className={`flex list-none flex-col med:items-center justify-center items-start gap-3 ${
              dealearship ? "[&>li]:font-med" : "[&>li]:font-[400]"
            }`}
          >
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
              36-F PECHS Block 6 Karachi, Pakistan.
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start med:items-center items-start gap-4 z-20 ">
          <h4
            className={`font-pm font-bol text-[1.25rem] whitespace-nowrap ${
              dealearship ? "text-[#2DB473]" : "text-black"
            } `}
          >
            Quick Links
          </h4>
          <ul
            className={`flex list-none flex-col med:items-center justify-center items-start gap-3 [&>li]:hover:cursor-pointer ${
              dealearship ? "[&>li]:font-med" : "[&>li]:font-[400]"
            } `}
          >
            <li className="font-pm font-reg text-[1.05rem]">Home</li>
            <li className="font-pm font-reg text-[1.05rem]">About us</li>
            <li className="font-pm font-reg text-[1.05rem]">Download app</li>
            <li className="font-pm font-reg text-[1.05rem]">Reviews</li>
            <li className="font-pm font-reg text-[1.05rem]">Contact us</li>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 z-20  med:items-center ">
          <h4
            className={`font-pm font-bol text-[1.25rem] ${
              dealearship ? "text-[#2DB473]" : "text-black"
            }`}
          >
            Other Links
          </h4>
          <ul
            className={`flex list-none flex-col med:items-center justify-center items-start gap-3 [&>li]:hover:cursor-pointer ${
              dealearship ? "[&>li]:font-med" : "[&>li]:font-[400]"
            } `}
          >
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
          <h4
            className={`font-pm font-bol text-[1.25rem] text-center ${
              dealearship ? "text-[#2DB473]" : "text-black"
            }`}
          >
            Notify me when kabariya is live
          </h4>
          <div
            className={`flex justify-start items-center w-full border ${
              dealearship ? "border-primaryGreen" : "border-black"
            } rounded-[0.7rem]`}
          >
            <input
              className="border-none pl-3 w-full outline-none bg-transparent"
              type="email"
              placeholder="Email address"
            />
            <button
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              className={`btn h-[2.7rem] font-pm rounded-[0.7rem] max-w-[6rem] ${
                dealearship ? "bg-primaryGreen" : "bg-black"
              } `}
            >
              Submit
            </button>
          </div>
          <p
            className={`font-pm  leading-[24px] text-[#7E7E7E] text-[0.9rem] text-center ${
              dealearship ? "font-med" : "font-reg"
            }`}
          >
            Upgrade to Spotify Premium and take your music.
          </p>
          <div className="flex flex-col justify-start med:items-center items-start gap-3">
            <h4 className="font-pm font-bol text-[1.4rem]">Follow us</h4>
            <div className="flex justify-start items-start gap-2 med:justify-center w-full [&>svg]:cursor-pointer">
              {dealearship
                ? socialIconsColorfull.map((it) => {
                    return it;
                  })
                : socialIcons.map((it) => {
                    return it;
                  })}
            </div>
          </div>
        </div>
      </div>
      <Banner />
    </div>
  );
}

const Banner = () => {
  return (
    <div className="w-full bg-[#1A1A1A] ">
      <div className="max-w-[1320px]  flex justify-between items-center py-5 px-5 m-auto small:flex-col small:justify-center  small:items-center small:gap-3">
        <p className="font-pm text-[#FFFFFF] text-center smaller:text-[0.9rem]">
          Design & Developed by Kabariya technologies (Pvt ltd.)
        </p>
        <p className="text-[#FFFFFF] text-center smaller:text-[0.9rem]">
          All copyrights reserved © Kabariya technologies (Pvt ltd.)
        </p>
      </div>
    </div>
  );
};

export { Banner };
export default Footer;
