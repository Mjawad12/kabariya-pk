"use client";
import React, { useRef, useState } from "react";
import { gallery, item, shedule, tick, user } from "./Consonants";
import BasicDateCalendar from "./Calender";

function Sheduler({ setsubmitted }) {
  const [selected, setselected] = useState(0);
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 small:gap-12 ">
      <div
        className="w-full flex justify-center 
      items-center gap-2 med:px-9 small:px-4 "
      >
        <SetComp
          svg={user}
          text={"Basic Details"}
          index={0}
          selected={selected}
        />
        <SetComp
          svg={item}
          text={"Item details"}
          index={1}
          selected={selected}
        />
        <SetComp
          svg={shedule}
          text={"Schedule"}
          index={2}
          selected={selected}
        />
      </div>
      <Form
        selected={selected}
        setselected={setselected}
        setsubmitted={setsubmitted}
      />
    </div>
  );
}

const Form = ({ selected, setselected, setsubmitted }) => {
  const form = useRef(null);
  const submitForm = (e) => {
    const valid = form.current.checkValidity();
    if (valid) {
      e.preventDefault();
      selected < 2 && setselected(selected + 1);
      selected === 2 && setsubmitted(true);
    }
  };

  return (
    <>
      <form action="null" ref={form} className="w-full">
        <div className={`w-full ${selected != 0 && "hidden"}`}>
          <Options1 />
        </div>
        {selected === 1 && <Options2 />}
        {selected === 2 && <Options3 />}
        {selected === 3 && <Submitted />}
        <div className="max-w-[98%] small:max-w-full w-full flex justify-between items-center mt-7 small:flex-col small:gap-5">
          {selected === 1 && (
            <div
              onClick={() => document.querySelector("#fileInput").click()}
              className="flex justify-center items-center gap-2"
            >
              <input type="file" id="fileInput" className="hidden" />
              {gallery}
              <p className="[text-decoration:underline] max-w-max whitespace-nowrap font-pm font-med text-secondaryGreen">
                Upload Images
              </p>
            </div>
          )}
          <div className="flex justify-end items-center gap-2 w-full small:">
            {selected > 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setselected(selected - 1);
                }}
                className="btn small:!max-w-full border z-[999999999999] border-black text-black font-med bg-transparent"
              >
                Back
              </button>
            )}
            <button onClick={submitForm} className="btn small:!max-w-full">
              {selected === 2 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

const SetComp = ({ svg, text, index, selected }) => {
  return (
    <>
      <div className="max-w-[2.2rem] w-full relative flex flex-col justify-center items-center ">
        <div
          className={`max-w-[2.2rem]  w-full h-9 border ${
            index <= selected ? "border-secondaryGreen" : "border-black"
          } rounded-full flex justify-center items-center ${
            index < selected && "bg-secondaryGreen"
          } `}
        >
          {index < selected ? tick : svg}
        </div>
        <p
          className={`w-max font-pm font-med smaller:font-bol text-1xl larger:text-[0.9rem] smaller:text-[0.8rem] ${
            index <= selected ? "text-secondaryGreen" : "text-black"
          } ${text === "Basic Details" && "larger:pl-2"} `}
        >
          {text}
        </p>
      </div>
      {text !== "Schedule" && (
        <span
          className={`w-full max-w-[150px] border border-black mb-5 ${
            index <= selected ? "border-secondaryGreen" : "border-black"
          }   `}
        />
      )}
    </>
  );
};

const Options1 = () => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-5 ">
      <input
        type="text"
        required
        className="  w-[48%]  extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
        placeholder="Name"
      />
      <input
        type="tel"
        required
        placeholder="Mobile Number"
        className=" w-[48%]  extLar:w-[47%] small:w-full h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
      <select
        id="City"
        name="City"
        className="  w-[48%]  extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      >
        <option value="pakistan">Pakistan</option>
      </select>
      <input
        type="email"
        required
        placeholder="Email"
        className="  w-[48%]  extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
      <textarea
        type="text"
        required
        placeholder="Address"
        rows={1}
        className="w-[99%] small:h-[6rem] small:w-full  py-3 rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
    </div>
  );
};

const Options2 = () => {
  const opts = [
    "Metals",
    "E-waste",
    "Bulk Scrap",
    "Home Applainces",
    "Antique item",
    "Others",
  ];

  const pickupItems = [
    "AC",
    "Fridge",
    "Battery",
    "Washing Mach",
    "Copper",
    "Fan",
    "Computer",
    "Stabilizer",
  ];

  return (
    <div className="flex w-full justify-between items-start gap-1 small:flex-col ">
      <div className="flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start gap-1">
          <div className="flex flex-col gap-1">
            <p className="text-1xl font-pm font-bol">Sell or Donate</p>
            <div className="flex justify-start items-start gap-2">
              <CustomCheckbox text={"Sell"} />
              <CustomCheckbox text={"Donate"} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-1xl font-pm font-bol">Types of Scrap</p>
            <div className="flex flex-col items-start gap-1">
              {opts.map((it, index) => (
                <CustomCheckbox text={it} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-1xl font-pm font-bol">Pupolar</p>
        <div className="flex flex-col items-start gap-1 ">
          {pickupItems.map((it, index) => (
            <CustomCheckbox text={it} key={index} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-3 small:w-full">
        <p className="text-1xl font-pm font-bol">Remarks</p>
        <textarea
          name="sell"
          placeholder="Describe what you want to sell."
          id=""
          cols="28"
          rows="5"
          maxLength={200}
          className=" small:w-full border border-borderColorP p-1 px-3 text-[0.9rem] rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

const Options3 = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  return (
    <div className="flex justify-between items-center gap-2 small:flex-col small:gap-5">
      <BasicDateCalendar
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      />
      <div className="flex w-[20rem] flex-col justify-start items-start small:w-full  ">
        <div className="flex w-full flex-col justify-start items-start gap-3">
          <p className="text-1xl font-pm font-bol">Selected Date</p>
          <span
            className="flex border w-full rounded-lg font-pm hover:shadow-lg
         font-med border-borderColorP px-4 py-2 justify-between items-center "
          >
            {selectedDate.getMonth()} - {selectedDate.getDate()} -{" "}
            {selectedDate.getFullYear()}
            <span className="flex w-6 h-6 bg-secondaryGreen rounded-full ">
              {tick}
            </span>
          </span>
        </div>

        <div className="flex w-full flex-col justify-start items-start gap-3  ">
          <p className="text-1xl font-pm font-bol">Time</p>
          <div className="flex flex-col items-start gap-2">
            <CustomCheckbox text={"Morning"} />
            <CustomCheckbox text={"Evening"} />
            <CustomCheckbox text={"Night"} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Submitted = () => {
  return <div></div>;
};

const CustomCheckbox = ({ text }) => {
  const [checked, setchecked] = useState(false);
  return (
    <label className="flex gap-1 justify-center cursor-pointer items-center text-[0.95rem] font-pm font-med">
      <input type="checkbox" className="hidden" checked={checked} />
      <span
        onClick={() => setchecked(!checked)}
        className={`w-[1.15rem] h-[1.15rem] flex justify-center 
      items-center ${
        checked && "bg-secondaryGreen"
      } border border-black rounded-[5px] `}
      >
        {checked && <span className="flex w-[1.1rem] ">{tick}</span>}
      </span>
      {text}
    </label>
  );
};

export default Sheduler;
