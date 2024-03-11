"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { arrowDown, gallery, item, shedule, tick, user } from "./Consonants";
import BasicDateCalendar from "./Calender";

function Sheduler({ setsubmitted }) {
  const [selected, setselected] = useState(0);
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 small:gap-12 ">
      <div className="w-full flex justify-center items-center gap-2 med:px-9 small:px-4 ">
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
  const [selectedOption, setselectedOption] = useState("Karachi");
  const [prefrence, setprefrence] = useState("donate");
  const [pupolar, setpupolar] = useState([]);
  const [type, settype] = useState([]);
  const [time, settime] = useState(null);
  const [selectedDate, setselectedDate] = useState(new Date());
  const form = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const address = useRef(null);
  const phone = useRef(null);
  const remarks = useRef(null);

  const submitForm = (e) => {
    const valid = form.current.checkValidity();
    if (valid) {
      e.preventDefault();
      selected < 2 && setselected(selected + 1);
      if (selected === 2) {
        setsubmitted(true);
        SUBMIT();
      }
    }
  };

  const SUBMIT = async () => {
    const details = {
      name: name.current.value,
      phone: phone.current.value,
      address: address.current.value,
      email: email.current.value,
      city: selectedOption,
      time: time,
      remarks: remarks.current.value,
      type: await type.toString(),
      prefrence: prefrence,
      pupolar: await pupolar.toString(),
      date:
        selectedDate.getMonth() +
        "-" +
        selectedDate.getDate() +
        "-" +
        selectedDate.getFullYear(),
    };
    const data = await fetch("https://kabariya-pk.vercel.app/api/emailSend", {
      body: JSON.stringify(details),
      method: "POST",
    });
    console.log(await data.json());
  };

  return (
    <>
      <form action="null" ref={form} className="w-full">
        <div className={`w-full ${selected != 0 && "hidden"}`}>
          <Options1
            setselectedOption={setselectedOption}
            selectedOption={selectedOption}
            name={name}
            email={email}
            address={address}
            phone={phone}
          />
        </div>
        <div className={`w-full ${selected != 1 && "hidden"}`}>
          <Options2
            setprefrence={setprefrence}
            settype={settype}
            type={type}
            remarks={remarks}
            setpupolar={setpupolar}
            pupolar={pupolar}
          />
        </div>
        <div className={`w-full ${selected != 2 && "hidden"}`}>
          <Options3
            selectedDate={selectedDate}
            setselectedDate={setselectedDate}
            settime={settime}
          />
        </div>
        <div className="max-w-[100%] small:max-w-full w-full flex justify-between items-center mt-7 px-2 small:flex-col small:items-start small:gap-5">
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
          <div className="flex justify-end items-center gap-2 w-full">
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
      <div className="max-w-[2.9rem] w-full relative flex flex-col justify-center items-center ">
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

const Options1 = ({
  setselectedOption,
  selectedOption,
  name,
  address,
  phone,
  email,
}) => {
  const [show, setshow] = useState(false);

  const changeSelected = (e) => {
    setselectedOption(e.target.innerText);
  };

  return (
    <div className="w-full px-2 flex justify-center items-center flex-wrap gap-5 ">
      <input
        type="text"
        required
        ref={name}
        className="w-[48%] outline-none focus:border-black   extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
        placeholder="Name"
      />
      <input
        type="tel"
        required
        ref={phone}
        placeholder="Mobile Number"
        className=" w-[48%]  outline-none focus:border-black  extLar:w-[47%] small:w-full h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
      <div
        id="City"
        name="City"
        onClick={() => setshow(!show)}
        className="w-[48%] outline-none focus:border-black  extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]
         rounded-xl px-5 pr-4 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms] flex justify-between items-center relative "
      >
        <p className="gont-pm text-gray-400">{selectedOption}</p> {arrowDown}
        <div
          className={`absolute ${
            show ? "flex" : "hidden"
          } w-full left-0 top-[36px] flex justify-start flex-col items-start bg-white border-borderColorP border`}
        >
          <span
            onClick={changeSelected}
            className="flex justify-start items-center h-6 w-full px-5 py-2 hover:bg-gray-200 "
            value="pakistan"
            selected
          >
            Karachi
          </span>
          <span
            className="flex justify-start items-center h-6 w-full px-5 py-2 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Islamabad
          </span>
          <span
            className="flex justify-start items-center h-6 w-full px-5 py-2 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Lahore
          </span>
          <span
            className="flex justify-start items-center h-6 w-full px-5 py-2 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Multan
          </span>
        </div>
      </div>
      <input
        type="email"
        required
        ref={email}
        placeholder="Email"
        className="  w-[48%] outline-none focus:border-black   extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
      <textarea
        type="text"
        required
        ref={address}
        placeholder="Address"
        rows={1}
        maxLength={70}
        style={{ resize: "none" }}
        className="w-[99%] outline-none focus:border-black small:h-[6rem] small:w-full  py-3 rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
    </div>
  );
};

const Options2 = ({
  setprefrence,
  settype,
  type,
  setpupolar,
  remarks,
  pupolar,
}) => {
  const [st, setst] = useState(false);
  const [st1, setst1] = useState(false);

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
    <div className="flex px-2 w-full justify-between items-start gap-1 small:gap-3 small:flex-col ">
      <div className="flex flex-col  flex-1 flex-grow-[0.3] justify-start items-start ">
        <div className="flex flex-col justify-start items-start gap-2 small:gap-3">
          <div className="flex flex-col gap-2 ">
            <p className="text-[0.95rem] font-pm font-bol">Sell or Donate</p>
            <div className="flex justify-start items-start gap-2">
              <div
                onClick={() => {
                  setprefrence("Sell");
                  setst1(false);
                  setst(true);
                }}
              >
                <CustomCheckbox setst={setst} st={st} text={"Sell"} />
              </div>
              <div
                onClick={() => {
                  setprefrence("Donate");
                  setst1(true);
                  setst(false);
                }}
              >
                <CustomCheckbox setst={setst} st={st1} text={"Donate"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[0.95rem] font-pm font-bol">Types of Scrap</p>
            <div className="flex flex-col small:flex-row small:flex-wrap items-start gap-0 small:gap-x-2">
              {opts.map((it, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (type.includes(it)) {
                      let ty = [];
                      type.forEach((ele) => {
                        if (ele === it) {
                        } else {
                          ty.push(ele);
                        }
                      });
                      settype(ty);
                      console.log(ty);
                    } else {
                      const ty = [...type, it];
                      settype(ty);
                      console.log(ty);
                    }
                  }}
                >
                  <CustomCheckbox text={it} key={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 flex-grow-[0.2]  justify-start items-start gap-2">
        <p className="text-[0.95rem] font-pm font-bol">Pupolar</p>
        <div className="flex flex-col small:flex-row small:flex-wrap items-start gap-0 small:gap-x-2 ">
          {pickupItems.map((it, index) => (
            <div
              key={index}
              onClick={() => {
                if (pupolar.includes(it)) {
                  let pop = [];
                  pupolar.forEach((ele) => {
                    if (ele !== it) {
                      pop.push(ele);
                    }
                  });
                  setpupolar(pop);
                } else {
                  const pop = [...pupolar, it];
                  setpupolar(pop);
                }
              }}
            >
              <CustomCheckbox text={it} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 flex-grow-[0.45] larger:w-[14rem] large:w-[10rem] items-start justify-start gap-3 small:w-full">
        <p className="text-[0.95rem] font-pm font-bol">Remarks</p>
        <textarea
          name="sell"
          placeholder="Describe what you want to sell."
          id="sdasd"
          cols="28"
          rows="5"
          maxLength={200}
          ref={remarks}
          className="w-full small:w-full border small:h-[5rem] outline-none focus:border-black border-borderColorP p-1 px-3 text-[0.9rem] rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

const Options3 = ({ selectedDate, setselectedDate, settime }) => {
  return (
    <div className="flex  justify-between items-start gap-2 small:flex-col small:gap-0">
      <BasicDateCalendar
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      />
      <div className="flex w-[25rem] flex-col pt-3 justify-start items-start small:w-full small:gap-3  ">
        <div className="flex w-full flex-col justify-start items-start gap-3">
          <p className="text-1xl font-pm font-bol small:hidden">
            Selected Date
          </p>
          <span
            className="flex border w-full rounded-lg font-pm hover:shadow-lg
         font-med border-borderColorP px-4 py-2 justify-between items-center "
          >
            <div className="flex gap-2">
              <p className="font-bol hidden small:flex">Selected:</p>
              {selectedDate.getMonth()} - {selectedDate.getDate()} -{" "}
              {selectedDate.getFullYear()}
            </div>
            <span className="flex w-6 h-6 bg-secondaryGreen rounded-full ">
              {tick}
            </span>
          </span>
        </div>

        <div className="flex w-full flex-col justify-start items-start gap-3  ">
          <p className="text-1xl font-pm font-bol">Time</p>
          <div className="flex flex-col  items-start gap-2 small:gap-3 small:flex-row small:flex-wrap ">
            <div onClick={() => settime("Morning")}>
              <CustomCheckbox text={"Morning"} gap={"2"} />
            </div>
            <div onClick={() => settime("Afternoon")}>
              <CustomCheckbox text={"Afternoon"} gap={"2"} />
            </div>
            <div onClick={() => settime("Evening")}>
              <CustomCheckbox text={"Evening"} gap={"2"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CustomCheckbox = ({ text, gap, st }) => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setchecked(st);
  }, [st]);
  return (
    <label
      onClick={() => setchecked(!checked)}
      className={`flex ${
        gap ? "gap-" + gap : "gap-1"
      } justify-center cursor-pointer items-center text-[0.9rem] larger:text-[0.8rem] small:text-[0.9rem] font-pm font-med whitespace-nowrap `}
    >
      <span
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
