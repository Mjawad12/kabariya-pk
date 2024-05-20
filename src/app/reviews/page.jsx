"use client";
import { ReviewTypes, clientReviews, star } from "@/Components/Consonants";
import { Banner } from "@/Components/Footer";
import { CarasouelCard } from "@/Components/Testomonials";
import React, { useEffect, useState } from "react";
function page() {
  const [selectedReview, setselectedReview] = useState(4);
  const [Reviews, setReviews] = useState(null);
  const ReviewData = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_PORT + "/api/getReviews");
    const parsedData = await data.json();
    setReviews(parsedData.reviews);
  };
  useEffect(() => {
    ReviewData();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-start max-w-[1440px] min-h-[calc(100vh-84px)] m-auto px-4 py-10 small:py-5 small:gap-5">
        <div className=" flex-1 flex-grow-[0.5] w-full flex flex-col justify-start items-start gap-16 ">
          <div className="flex flex-col items-start gap-3 ">
            <div>
              <span className="text-[23px] font-[800] tracking-[3px] font-pm">
                CUSTOMER
              </span>
              <h1
                initial={{ opacity: 0, y: "30px" }}
                className="font-pm font-bol text-[55px] leading-[70px] small:text-[40px]"
              >
                Reviews
              </h1>
            </div>
            <p
              initial={{ opacity: 0, y: "30px" }}
              className="font-pm font-[600] text-[17px] small:text-[16px]"
            >
              with our Hassle-Free Doorstep Pickup Service In Just few Easy
              Steps.
            </p>
            <span className="w-[7rem] h-1 bg-primaryGreen mt-4"></span>
            <button className="px-9 py-2.5 text-[17px] font-[600] border border-black rounded-3xl mt-6 hover:bg-black hover:text-white">
              Scroll to see our review
            </button>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-wrap justify-start py-16 max-w-[1360px] w-full m-auto gap-y-[6rem] small:justify-center small:gap-y-[4rem]">
              {Reviews &&
                Reviews?.map((it, index) => {
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
        <div className="flex-1 flex-grow-[0.5] flex relative justify-center items-start ">
          <div className="flex flex-col max-w-[600px] w-full shadow-xl rounded-2xl py-8 sticky top-10 Lar:top-0 border ">
            <h2 className="font-pm text-[30px] font-[700] px-10">
              Write Review
            </h2>
            <form action="#" className="mt-5 ">
              <div className="flex gap-5 px-10 pb-[1.4rem] border-b border-[#0000001A]">
                <InputFull require={true} text={"Name"} type={"text"} />
                <InputFull require={true} text={"Designation"} type={"text"} />
              </div>
              <div className="flex flex-col gap-3.5 px-10 py-5 border-b border-[#0000001A]">
                <div>
                  <h3 className="text-[17px] font-[600] font-pm">
                    Contact Details{" "}
                    <span className="text-[#707070]">(Optional)</span>
                  </h3>
                  <p className="text-[#F2A1A1] text-[14px]">
                    It will be private and will not be visible on the website.
                  </p>
                </div>
                <div className="flex gap-5">
                  <InputFull type={"number"} placeholder="Phone" />
                  <InputFull type={"emial"} placeholder="Email" />
                </div>
              </div>
              <div className="flex flex-col gap-3.5 px-10 py-5">
                <div className="flex [&_svg]:mt-[2px] [&_svg]:scale-[1.02] gap-0.5">
                  {star}
                  <h3 className="font-pm text-[17px] font-[600] [&_svg]:w-[15px]">
                    Stars
                  </h3>
                </div>
                <div className="flex items-center justify-between gap-3">
                  {ReviewTypes.map((it, index) => (
                    <ReviewBtn
                      key={index}
                      index={index}
                      svg={it}
                      selected={selectedReview === index}
                      setSelected={setselectedReview}
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-pm text-[17px] font-[600] [&_svg]:w-[15px]">
                    Write your Experience
                  </h3>
                  <textarea
                    className="w-full px-5 py-2 mt-2 border outline-none resize-none rounded-xl"
                    placeholder="Amazing experience"
                    cols={5}
                    rows={3}
                  />
                </div>
                <button className="btn max-w-[10rem] px-4 rounded-[0.65rem]">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10 small:mt-5">
        <Banner />
      </div>
    </div>
  );
}

export default page;

const InputFull = ({ text, type, require, placeholder }) => {
  return (
    <div className="flex max-w-[610px] extLar:max-w-[550px] larger:max-w-[100%] w-full flex-col justify-start items-start gap-2">
      {text && <p className="formp text-[17px] font-[600]">{text}</p>}
      <input
        className="forminput userdet h-[3.2rem] small:!h-[3.15rem] rounded-lg px-5 "
        type={type}
        placeholder={text ? text : placeholder}
        maxLength={text === "CNIC" ? 15 : 25}
        minLength={text === "CNIC" ? 15 : "undefined"}
        required={require}
        id={text}
      />
    </div>
  );
};

const ReviewBtn = ({ svg, index, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(index)}
      className={`flex items-center justify-start px-3 gap-3 py-1.5 border border-[#F2F2F2] hover:border-black rounded-lg pr-[1.2rem] cursor-pointer transition-all duration-200 ${
        selected ? "bg-[#FFE4621A] [&>span]:text-black !border-black" : ""
      } `}
    >
      {svg}{" "}
      <span className="font-pm text-[17px] font-[600] text-gray-400 transition-all duration-200">
        {index + 1}
      </span>
    </div>
  );
};
