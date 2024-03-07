"use client";
import React, { useEffect } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

export default function BasicDateCalendar({ setselectedDate, selectedDate }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  useEffect(() => {
    document.querySelectorAll(".dow").forEach((it, index) => {
      it.innerHTML = days[index];
      it.style.fontSize = "0.9rem";
    });
    console.log(document.querySelector(".form-control").value);
  }, []);

  return (
    <>
      <div className="w-full h-[16rem] small:h-[20rem] relative ">
        <Datetime
          value={selectedDate}
          onChange={(e) => {
            setselectedDate(new Date(e));
          }}
          input={true}
          open={true}
          className=""
        />
      </div>
    </>
  );
}
