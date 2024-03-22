import Aboutme from "@/Components/Aboutme";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import { AppstoreBtn, GooglePlayBtn } from "@/Components/HeroSec";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="w-full min-h-screen bg-black pt-12">
      <div className="max-w-[1400px] w-full flex flex-col gap-10 small:gap-0 m-auto">
        <Aboutme page={"About"} />
        <div className="flex flex-col gap-20 small:gap-10 small:px-9 smaller:px-5">
          <Textcomponent
            heading={"Our Vision"}
            ptags={[
              "Kabariya was born from a vision – a vision of simplifying scrap management and connecting buyers and sellers. We understand the challenges associated with handling scrap, and we're on a mission to provide a solution that not only streamlines the process but also promotes eco-friendly practices.",
            ]}
          />
          <Textcomponent
            heading={"Our Mission"}
            ptags={[
              "Our mission is crystal clear: to empower you to effortlessly sell your scrap products with transparency and ease. We aim to bridge the gap between sellers and buyers, making scrap management convenient and environmentally responsible. With Kabariya, you're not just selling scrap; you're contributing to a cleaner, greener future.",
            ]}
          />
          <Textcomponent
            heading={"What Sets Us Apart"}
            ul={[
              "Cutting-Edge Technology: We've developed an intuitive mobile app that simplifies scrap selling, allowing you to transform scrap into cash with the tap of a button.",
              "Certified Accuracy: We utilize certified calibrated weighing scales to ensure precise measurements and transparent transactions.",
              "Diverse Client Base: We cater to a wide spectrum of clients, including households, offices, shops, factories, and companies, making our services accessible to all.",
              "Green Commitment: We share your dedication to sustainability and environmental responsibility. By choosing Kabariya, you're playing a vital role in creating a more sustainable future.",
              "Professional Team: Our experienced, verified team guarantees secure, reliable, and trustworthy scrap-selling experiences",
            ]}
          />
          <Textcomponent
            heading={"Join Us in Making a Positive Impact"}
            ptags={[
              "By selecting Kabariya, you're not just participating in scrap selling; you're choosing to simplify scrap management, earn from your scrap, and engage in eco-conscious practices. Every action, no matter how small, contributes to a brighter future for our planet and generations to come.",
            ]}
            mt={5}
          />
          <Textcomponent
            heading={"Contact us"}
            ptags={[
              "Ready to start your scrap-selling journey or have questions? The Kabariya team is ready to assist you. We're your dedicated partner in sustainable living and smart recycling.",
              "Thank you for choosing Kabariya, where convenience, reliability, and environmental consciousness redefine the scrap management experience.",
            ]}
            mt={5}
          />
        </div>
      </div>
      <Contact about={true} />
      <DownloadBanner />
      <Footer dealearship={true} about={true} />
    </div>
  );
}

const Textcomponent = ({ heading, ptags, ul, mt }) => {
  return (
    <div
      className={`w-full ${ul ? "mt-6 small:mt-0" : "mt-0"} ${
        mt && "mt-9 small:mt-0"
      }`}
    >
      <h5 className="text-white font-pm font-bol text-[67.43px] small:text-[50px] smaller:text-[40px] mob:text-[30px] small:leading-9">
        {heading}
      </h5>
      <div className="flex flex-col gap-5 px-1 mt-5 small:mt-2">
        {ptags ? (
          ptags.map((it, index) => (
            <p
              key={index}
              className="text-[#FFFFFF] font-pm font-reg text-[21px] leading-[33px] small:text-[18px] small:leading-6 smaller:text-[17px] smaller:leading-6"
            >
              {it}
            </p>
          ))
        ) : (
          <ul className="w-full [list-style:disc;] pl-8 small:pl-4">
            {ul.map((it, index) => (
              <li
                key={index}
                className={`text-[#FFFFFF] font-pm font-reg text-[21px] leading-[33px] pl-2 small:pl-0 max-w-[102ch] small:text-[18px] small:leading-6 smaller:text-[17px] smaller:leading-6 ${
                  index !== 0 ? "mt-6 small:mt-4" : "mt-0 small:mt-2"
                } `}
              >
                {it}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const DownloadBanner = () => {
  return (
    <div className="w-full pt-12 pb-3 border-t border-[#a9a9a978] px-3">
      <div className="max-w-[71rem] m-auto w-full  small:flex-col flex justify-between items-center small:gap-8">
        <div className="flex justify-center items-center gap-16 small:gap-10 smaller:gap-4">
          <Image
            src="/mobileDownload.png"
            width={110}
            height={110}
            alt="mobile app"
          />
          <p className="text-[29px] small:text-[25px] small:leading-[30.8px] smaller:text-[22px] smaller:leading-[25px] text-white font-med max-w-[16ch] w-full leading-[33.8px]">
            Make Easy your Life with Download the Kabariya app
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <AppstoreBtn borderColor={true} />
          <GooglePlayBtn borderColor={true} />
        </div>
      </div>
    </div>
  );
};

export { DownloadBanner };
export default page;
