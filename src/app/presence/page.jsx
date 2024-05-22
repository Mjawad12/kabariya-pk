import { locations } from "@/Components/Consonants";
import { Banner } from "@/Components/Footer";
import { LocationContainer } from "@/Components/Locations";
import React from "react";

function page() {
  return (
    <section className="flex flex-col items-center justify-between w-full min-h-[calc(100vh-100px)]">
      <div className="flex justify-center items-center flex-col flex-1 flex-grow-[1] px-5">
        <h1 className="font-pm text-[9rem] font-[700] text-center leading-[158px] extLar:text-[7rem] extLar:leading-[112px] large:text-[6rem] large:leading-[96px] small:text-[4rem] small:leading-[64px]">
          Only <br /> Avaliable in karachi
        </h1>
        <h2 className="font-pm text-[4.3rem] font-[700] extLar:text-[4rem] large:text-[3rem] small:text-[2rem] text-center mt-4">
          Coming Soon
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {locations.slice(1).map((it, index) => (
            <LocationContainer
              key={index}
              city={it.city}
              service={it.service}
            />
          ))}
        </div>
      </div>

      <Banner />
    </section>
  );
}

export default page;
