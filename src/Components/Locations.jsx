import Image from "next/image";
import React from "react";
import { locationIcon, locations } from "./Consonants";

function Locations() {
  return (
    <div className="flex flex-col w-full pt-[6rem]">
      <div className="w-full relative min-h-[60rem] small:min-h-[70rem] flex justify-center items-center ">
        <div className="absolute top-0 left-0 w-full">
          <Image
            src={"/locationOnline.png"}
            width={5000}
            height={5000}
            alt="line"
            className="pointer-events-none"
          />
        </div>
        <div
          className="max-w-[1320px] w-full px-14 larger:px-6 small:gap-5 m-auto flex small:flex-col small:pt-5
            small:px-5 justify-between items-center"
        >
          <div className="flex-1 flex-grow-[0.55]  flex flex-col justify-start items-start gap-10 small:gap-5">
            <div>
              <h3 className="font-pm font-bol text-6xl flex gap-2 small:text-5xl smaller:text-4xl justify-center items-center">
                {locationIcon} Our Presence
              </h3>
              <h3 className="font-se text-6xl small:text-5xl smaller:text-4xl ">
                Across{" "}
                <span className="text-primaryGreen relative">
                  Nation
                  <span
                    className="w-[100px] absolute top-[53%] right-[-67%] small:hidden
                h-[0.2rem] flex bg-primaryGreen rounded-full"
                  ></span>
                </span>
              </h3>
            </div>
            <p className="font-open text-[1.2rem] small:text-[1rem] ">
              The Kabariya has established its services in karachi cities of
              Pakistan and is now expanding its reach in other parts of the
              country.
            </p>
            <div className="w-full flex justify-start small:justify-center items-center flex-wrap gap-y-3 gap-[0.7rem]">
              {locations.map((it, index) => (
                <LocationContainer
                  key={index}
                  city={it.city}
                  service={it.service}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex-1 flex-grow-[0.45] z-20">
            <Image
              src={"/pak.png"}
              width={5000}
              height={5000}
              className="w-full small:max-w-[30rem] small:m-auto"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src={"/locationOnline2.png"}
            width={5000}
            height={5000}
            alt="line"
            className="pointer-events-none"
          />
        </div>
      </div>
      <div className="w-full overflow-hidden ">
        <h4
          style={{ textShadow: "0px 0px 2px #00000052" }}
          className="w-full font-pm text-[13.2vw] relative
          right-12 med:right-10 med:text-[13.4vw] small:text-[13.2vw] small:right-5
          smaller:right-4 whitespace-nowrap text-center font-bol text-white leading-[200px] extLar:leading-[190px] 
           larger:leading-[180px] large:leading-[170px] small:leading-[140px] smaller:leading-[90px]  "
        >
          Scrap Collection
        </h4>
      </div>
    </div>
  );
}

const LocationContainer = ({ city, service }) => {
  return (
    <div
      style={{
        borderBottomLeftRadius: "19px",
        borderBottomRightRadius: "19px",
      }}
      className="flex border-[1px] border-black flex-col justify-between
     items-center max-w-max  h-[3.9rem] smaller:h-[3.2rem] w-full rounded-[18px] border-b-0 "
    >
      <h4
        className={`font-pm text-[1.25rem] smaller:text-[1rem] font-med  relative top-1 smaller:top-0 `}
      >
        {city}
      </h4>
      <p
        className={`${
          service ? "bg-[#00CC14]" : "bg-[#FFC700]"
        } w-full text-center text-[0.85rem]  font-med px-4 ${
          city === "Islamabad" && "px-7"
        } ${city === "Multan" && "px-7"} 
        leading-[20.46px] rounded-[22px]  border-[1px] border-black smaller:px-5 `}
      >
        {service ? service : "Coming Soon"}
      </p>
    </div>
  );
};

export default Locations;
