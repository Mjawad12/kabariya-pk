"use client";
import React from "react";
import { FeedBack, clientReviews, left, star } from "./Consonants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function Testomonials() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1176 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1176, min: 863 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 863, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-20 pt-24 min-h-max smaller:py-10 smaller:pt-14 ">
      <div className="flex flex-col items-center justify-center gap-5 small:gap-3 ">
        <span>{FeedBack}</span>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-pm font-med text-[1.7rem] smaller:text-[1.3rem]">
            Testimonials
          </h2>
          <h3 className="font-se text-6xl small:text-5xl smaller:text-4xl text-center leading-[60px]">
            Customer Reviews
          </h3>
        </div>
        <p className="font-open text-1xl max-w-[46ch] text-center mt-2 small:mt-1 small:text-[0.9rem] small:max-w-[35ch]">
          See the impact of our services through client stories. Experience
          satisfaction in a snapshot.
        </p>
      </div>
      <div className="w-full mt-16 small:mt-14 px-[9rem] extLar:px-[6rem] larger:px-[5rem] small:px-2 relative  ">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 5%, rgba(243,252,249,1) 53%, rgba(255,255,255,1) 95%)",
          }}
          className="w-full absolute top-[50%] translate-y-[-50%] left-0 h-[480px] small:h-[435px]"
        ></div>
        <Carousel
          sliderclassName="Slider"
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="transform 0.7s ease-in-out"
          transitionDuration={500}
          containerclassName="carousel-container"
          dotListclassName="custom-dot-list-style"
          renderButtonGroupOutside={true}
          itemclassName="carousel-item-padding-40-px"
          customButtonGroup={<ButtonGroup />}
          arrows={false}
        >
          {clientReviews.map((it, index) => {
            return (
              <CarasouelCard
                key={index}
                name={it.name}
                tagline={it.workplace}
                testmonial={it.review}
                index={index}
              />
            );
          })}
        </Carousel>
      </div>
      <button className="btn bg-white text-black border border-borderColorP rounded-[16.51px] max-w-[9.5rem] h-[3.1rem] font-med text-[1.2rem] mt-3 smaller:mt-0 ">
        Show More
      </button>
    </div>
  );
}

const CarasouelCard = ({
  name,
  tagline,
  testmonial,
  index,
  reviewPage,
  image,
}) => {
  return (
    <div
      className={`card max-w-[307px] small:max-w-[290px] w-full m-auto gap-4 border mx-[15px] small:mx-0 shadow-sm
       border-[#DADADA] h-[480px] small:h-[435px] border-dashed rounded-[24.54px] hover:border-[#0000006f]
    flex flex-col justify-start items-start px-8 pr-7 py-[6rem] pb-[1rem] relative bg-white`}
    >
      <div className="cardPic rounded-full p-[0.7rem] absolute top-[-50px] flex justify-center items-center border bg-white border-[#DADADA] border-dashed ">
        <Image
          src={reviewPage ? image : `/Testomonials/${index + 1}.webp`}
          width={5000}
          height={5000}
          alt={name}
          className="w-[6.2rem]"
        />
      </div>
      <span className="absolute top-3 right-3">{star}</span>
      <div className="flex flex-col items-start justify-start">
        <p className="text-2xl font-se">{name}</p>
        <p className="font-pm font-med ">{tagline}</p>
      </div>
      <p className="font-pm text-[1.1rem] leading-[26.61px] [font-style:italic] min-h-[14rem] small:min-h-[10rem] ">
        "{testmonial}"
      </p>

      <p className="[text-decoration:underline] font-pm font-bol cursor-pointer underline-offset-2  ">
        See more
      </p>
    </div>
  );
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      style={{ translate: "-50% -50%" }}
      className="carousel-button-group  gap-4 flex justify-between 
      items-center w-[90vw] m-auto absolute top-[50%] left-[50%] z-20 smaller:w-[98%]"
    >
      <button
        className="block"
        onClick={() => previous()}
        aria-label="previous slide"
      >
        {left}
      </button>
      <button onClick={() => next()} aria-label="next slide">
        <span className="block scale-[-1] ">{left}</span>
      </button>
    </div>
  );
};

export default Testomonials;

export { CarasouelCard };
