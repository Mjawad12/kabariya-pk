"use client";
import {
  ReviewTypes,
  clientReviews,
  star,
  userReview,
} from "@/Components/Consonants";
import { Banner } from "@/Components/Footer";
import SubmittedDialog from "@/Components/SubmittedDialog";
import { CarasouelCard } from "@/Components/Testomonials";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
function page() {
  const [selectedReview, setselectedReview] = useState(4);
  const [Reviews, setReviews] = useState(null);
  const [reviewNumber, setreviewNumber] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const inputfile = useRef(null);
  const formRef = useRef(null);
  const [loading, setloading] = useState(false);
  const [submiited, setsubmiited] = useState(false);

  const ReviewData = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_PORT + "/api/getReviews");
    const parsedData = await data.json();
    setReviews(parsedData.reviews);
    for (let i = 0; i < parsedData.reviews.length; i++) {
      const num = parsedData.reviews[i].rating;
      const tempReview = reviewNumber;
      tempReview[num] += 1;
      setreviewNumber({ ...tempReview });
    }
  };

  useEffect(() => {
    ReviewData();
  }, []);

  const handleReviewSubmit = async (e) => {
    if (formRef.current.checkValidity()) {
      e.preventDefault();
      setloading(true);
      setsubmiited(true);
      var parsedimageData;
      if (inputfile.current.files[0]) {
        const form = new FormData();
        form.append("file", inputfile.current.files[0]);
        form.append("upload_preset", "Kabariya");
        form.append("cloud_name", "djvrf1sme");

        const imageData = await fetch(
          "https://api.cloudinary.com/v1_1/djvrf1sme/image/upload",
          {
            method: "POST",
            body: form,
          }
        );
        parsedimageData = await imageData.json();
      }

      const data = {
        name: document.querySelector("input#name").value,
        designation: document.querySelector("input#designation").value,
        phone: document.querySelector("input#phone")?.value ?? "unkonwn",
        email: document.querySelector("input#email")?.value ?? "unkonwn",
        rating: +selectedReview + 1,
        image: parsedimageData?.url ?? "https://kabariya.pk/reviewUserImp.png",
        review: document.querySelector("#rev-cl").value,
      };
      const dt = fetch(`${process.env.NEXT_PUBLIC_PORT}/api/postReview`, {
        body: JSON.stringify(data),
        method: "POST",
      });
      setloading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-start max-w-[1440px] min-h-[calc(100vh-84px)] m-auto px-4 py-10 small:py-5 small:gap-5 med:flex-col-reverse ">
        <div className=" flex-1 flex-grow-[0.5] w-full flex flex-col justify-start items-start gap-16 med:mt-16">
          <div className="flex flex-col items-start gap-3 ">
            <div>
              <span className="text-[23px] font-[800] tracking-[3px] font-pm">
                CUSTOMER
              </span>
              <h1
                initial={{ opacity: 0, y: "30px" }}
                className="font-pm font-bol text-[55px] leading-[70px]"
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
            <div className="flex flex-col gap-5 mt-5">
              <div className="flex gap-1">
                <span className="flex gap-0.5">
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </span>
                <p className="text-[18px] font-pm font-[600]">
                  <span>
                    {(
                      (1 * +reviewNumber[1] +
                        2 * +reviewNumber[2] +
                        3 * +reviewNumber[3] +
                        4 * +reviewNumber[4] +
                        5 * +reviewNumber[5]) /
                      +Reviews?.length
                    ).toFixed(1)}
                  </span>{" "}
                  (Based on {Reviews?.length} Reviews)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {[5, 4, 3, 2, 1].map((it) => (
                  <Reviewer
                    number={it}
                    tm={reviewNumber[it]}
                    total={Reviews?.length}
                  />
                ))}
              </div>
            </div>
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
                        tagline={it.designation}
                        testmonial={it.review}
                        index={index}
                        image={it.image}
                        reviewPage={true}
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
          <div className="flex flex-col max-w-[600px] w-full shadow-xl rounded-2xl py-8 pb-5 sticky top-10 Lar:top-0 border ">
            {submiited && (
              <SubmittedDialog
                loading={loading}
                setsubmitted={setsubmiited}
                review={true}
                dealerform={true}
              />
            )}
            <div className={`${submiited ? "hidden" : "flex flex-col"}`}>
              <h2 className="font-pm text-[30px] font-[700] px-10">
                Write Review
              </h2>
              <div className="flex px-10 mt-5 pb-[1.4rem] gap-4 smo:px-6">
                <span className="flex items-center justify-center w-[90px] h-[90px] border rounded-full bg-[#FCFCFC] ">
                  <Image
                    className="w-[95px] h-[110px] user-img"
                    src="/reviewUserImp.png"
                    width={600}
                    height={500}
                    alt="user default "
                  />
                </span>
                <input
                  type="file"
                  className="hidden"
                  ref={inputfile}
                  onInput={(e) => {
                    if (e.target.files[0]) {
                      const url = URL.createObjectURL(e.target.files[0]);
                      const image = document.querySelector(".user-img");
                      image.src = url;
                      image.srcset = url;
                      image.classList.add("!w-[70px]");
                      image.classList.add("!h-[70px]");
                      image.classList.add("translate-y-[2px]");

                      document
                        .querySelector(".user-img")
                        .parentElement.classList.add("!p-2");
                    }
                  }}
                  accept="image/png, image/jpg, image/jpeg, image/webp"
                />
                <div className="flex flex-col items-start justify-center gap-2">
                  <h3 className="text-[16px] font-[600] font-pm">
                    Picture <span className="text-[#707070]">(Optional)</span>
                  </h3>
                  <button
                    onClick={() => inputfile.current.click()}
                    className="border border-[#00000080] text-[13px] px-4 py-0.5 rounded-md font-pm "
                  >
                    Upload
                  </button>
                </div>
              </div>
              <form action="#" className="" ref={formRef}>
                <div className="flex gap-5 px-10 pb-[1.4rem] border-b border-[#0000001A] smo:flex-col smo:px-6">
                  <InputFull require={true} text={"Name"} type={"text"} />
                  <InputFull
                    require={true}
                    text={"Designation"}
                    type={"text"}
                  />
                </div>
                <div className="flex flex-col gap-3.5 px-10 smo:px-6 py-5 border-b border-[#0000001A]">
                  <div>
                    <h3 className="text-[17px] font-[600] font-pm">
                      Contact Details{" "}
                      <span className="text-[#707070]">(Optional)</span>
                    </h3>
                    <p className="text-[#F2A1A1] text-[14px]">
                      It will be private and will not be visible on the website.
                    </p>
                  </div>
                  <div className="flex gap-5 smo:flex-col smo:gap-3 ">
                    <InputFull type={"number"} placeholder="Phone" id="phone" />
                    <InputFull type={"email"} placeholder="Email" id="email" />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 px-10 py-5 smo:px-6">
                  <div className="flex [&_svg]:mt-[2px] [&_svg]:scale-[1.02] gap-0.5">
                    {star}
                    <h3 className="font-pm text-[17px] font-[600] [&_svg]:w-[15px]">
                      Stars
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-3 smo:gap-2 smaller:flex-wrap smaller:justify-center">
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
                      required
                      id="rev-cl"
                    />
                  </div>
                  <button
                    onClick={handleReviewSubmit}
                    className="btn max-w-[10rem] px-4 rounded-[0.65rem]"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
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

const InputFull = ({ text, type, require, placeholder, id }) => {
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
        id={text?.toLowerCase() ?? id}
      />
    </div>
  );
};

const ReviewBtn = ({ svg, index, selected, setSelected }) => {
  return (
    <div
      onClick={() => setSelected(index)}
      className={`flex items-center justify-start px-3 gap-3 py-1.5  border border-[#F2F2F2] hover:border-black rounded-lg pr-[1.2rem] smo:!px-4 smo:!gap-0.5 smo:!py-1 smo:!pb-[0px] smo:[&_svg]:w-[40px] smo:[&_svg]:h-[40px] smo:rounded-[0.8rem] cursor-pointer transition-all duration-200 smo:flex-col  ${
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

const Reviewer = ({ number, tm, total }) => {
  const precent = (+tm / +total) * 100;

  return (
    <div className="flex items-center w-[25rem] smaller:w-full gap-3">
      <p className="font-pm font-[700] text-[17px] whitespace-nowrap">
        {number} Star
      </p>
      <div
        style={{
          backgroundImage: `linear-gradient(to right , black ${precent}% , #D9D9D9 ${precent}%)`,
        }}
        className="w-full h-[0.45rem] border rounded-lg "
      ></div>
      <span className="font-pm text-[16px] font-[700]">({tm})</span>
    </div>
  );
};
