"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  arrowDown,
  gallery,
  item,
  shedule,
  tick,
  trash,
  user,
} from "./Consonants";
import BasicDateCalendar from "./Calender";

function Sheduler({ setsubmitted, setloading }) {
  const [selected, setselected] = useState(0);

  return (
    <div
      initial={{ opacity: 0, scale: 0.5 }}
      className="flex flex-col items-start justify-start w-full gap-5 small:gap-12 "
    >
      <div className="flex items-center justify-center w-full gap-2 med:px-9 small:px-4 ">
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
        setloading={setloading}
      />
    </div>
  );
}

const Form = ({ selected, setselected, setsubmitted, setloading }) => {
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
  const [files, setfiles] = useState([]);
  const [err, seterr] = useState(null);

  const submitForm = (e) => {
    const valid = form.current.checkValidity();
    if (valid) {
      e.preventDefault();
      if (selected === 2) {
        const imagArr = getImages();
        if (imagArr.length <= 0) {
          seterr("Input atleast one image.");
          return;
        }
      }
      selected < 3 && setselected(selected + 1);

      if (selected === 3) {
        setsubmitted(true);
        SUBMIT();
      }
    }
  };

  const SUBMIT = async () => {
    setloading(true);
    const details = {
      username: name.current.value,
      phone: phone.current.value,
      address: address.current.value,
      email: email.current.value,
      city: selectedOption,
      time: time,
      remarks: remarks.current.value,
      scrap: await type.toString(),
      prefrence: prefrence,
      pupolar: await pupolar.toString(),
      date:
        typeof selectedDate === "string"
          ? selectedDate
          : selectedDate.getMonth() +
            "-" +
            selectedDate.getDate() +
            "-" +
            selectedDate.getFullYear(),
    };
    const urls = await Upload(files);
    details.imgUrls = urls;
    await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/email`, {
      body: JSON.stringify(details),
      method: "POST",
    });
    setloading(false);
  };

  const Upload = async (files) => {
    var url = [];
    for (let i = 0; i < files.length; i++) {
      const form = new FormData();
      form.append("file", files[i]);
      form.append("upload_preset", "Kabariya");
      form.append("cloud_name", "djvrf1sme");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/djvrf1sme/image/upload",
        {
          method: "POST",
          body: form,
        }
      );
      const parsedData = await data.json();
      url.push(parsedData.url);
    }
    return url;
  };
  const getImages = () => {
    let imgArr = [];
    document.querySelectorAll(`.img-inp-giv`).forEach((it) => {
      if (it.files[0]) {
        imgArr = [...imgArr, it.files[0]];
      }
    });
    setfiles(imgArr);
    return imgArr;
  };

  return (
    <>
      <form action="null" ref={form} className="w-full">
        <div className={`w-full ${selected !== 0 && "hidden"}`}>
          <Options1
            setselectedOption={setselectedOption}
            selectedOption={selectedOption}
            name={name}
            email={email}
            address={address}
            phone={phone}
          />
        </div>
        <div className={`w-full ${selected !== 1 && "hidden"}`}>
          <Options2
            setprefrence={setprefrence}
            settype={settype}
            type={type}
            remarks={remarks}
            setpupolar={setpupolar}
            pupolar={pupolar}
            files={files}
            required={selected === 1}
          />
        </div>
        <div className={`w-full ${selected !== 2 && "hidden"}`}>
          <ImagesInput seterr={seterr} />
        </div>
        <div className={`w-full ${selected !== 3 && "hidden"}`}>
          <Options3
            selectedDate={selectedDate}
            setselectedDate={setselectedDate}
            settime={settime}
          />
        </div>
        <div
          className={`max-w-[100%] small:max-w-full w-full flex justify-between items-center  ${
            selected > 0 ? "mt-3" : "mt-5"
          }  ${
            selected === 3 && "mt-6"
          } px-2 small:flex-col small:items-start small:gap-5`}
        >
          <div className="flex items-center justify-center w-full small:flex-col small:gap-2 ">
            {err && (
              <p className="font-pm text-[14px] text-red-500 font-[600] w-full text-start ">
                {err}
              </p>
            )}
            <div className="flex items-center justify-end w-full gap-2 ">
              {selected > 0 && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    err && seterr(null);
                    setselected(selected - 1);
                  }}
                  className="btn max-w-[6.85rem] small:!max-w-full border z-[999999999999] border-black text-black font-med bg-transparent"
                >
                  Back
                </button>
              )}
              <button
                onClick={submitForm}
                className="btn small:!max-w-full max-w-[6.85rem] w-full "
              >
                {selected === 3 ? "Submit" : "Next"}
              </button>
            </div>
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
          className={`w-max font-pm font-bol smaller:font-bol text-1xl larger:text-[0.9rem] smaller:text-[0.8rem]  ${
            index === selected ? "text-secondaryGreen font-med" : "text-black"
          } ${text === "Basic Details" && "larger:pl-2"} text-black `}
        >
          {text}
        </p>
      </div>
      {text !== "Schedule" && (
        <span
          className={`w-full max-w-[170px] border border-black mb-5 ${
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
    <div className="flex flex-wrap items-center justify-center w-full gap-5 px-2 mt-1 ">
      <input
        type="text"
        required
        ref={name}
        className="w-[48%] outline-none focus:border-black   extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
        placeholder="Name"
      />
      <input
        type="number"
        required
        ref={phone}
        minLength={11}
        maxLength={11}
        onKeyDown={(e) => {
          if (e.target.value.length >= 14 && e.key !== "Backspace") {
            e.preventDefault();
          }
        }}
        placeholder="Mobile Number"
        className="w-[48%] outline-none focus:border-black  extLar:w-[47%] small:w-full h-[3rem] small:h-[3.5rem]  rounded-xl px-5 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms]  "
      />
      <div
        id="City"
        name="City"
        onClick={() => setshow(!show)}
        className="w-[48%] outline-none focus:border-black  extLar:w-[47%] small:w-full  h-[3rem] small:h-[3.5rem]
         rounded-xl px-5 pr-4 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms] flex justify-between items-center relative "
      >
        <p className="text-black gont-pm ">{selectedOption}</p> {arrowDown}
        <div
          className={`absolute ${
            show ? "flex" : "hidden"
          } w-full left-0 top-[36px] py-3 flex justify-start flex-col items-start bg-white border-borderColorP border`}
        >
          <span
            onClick={changeSelected}
            className="flex items-center justify-start w-full px-5 py-2 text-gray-400 cursor-pointer h-7 hover:bg-gray-200 "
            value="pakistan"
            selected
          >
            Karachi
          </span>
          <span
            className="flex items-center justify-start w-full px-5 py-2 text-gray-400 cursor-pointer h-7 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Islamabad
          </span>
          <span
            className="flex items-center justify-start w-full px-5 py-2 text-gray-400 cursor-pointer h-7 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Lahore
          </span>
          <span
            className="flex items-center justify-start w-full px-5 py-2 text-gray-400 cursor-pointer h-7 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Multan
          </span>
          <span
            className="flex items-center justify-start w-full px-5 py-2 text-gray-400 cursor-pointer h-7 hover:bg-gray-200 "
            onClick={changeSelected}
          >
            Hyderabad
          </span>
        </div>
      </div>
      <input
        type="email"
        ref={email}
        placeholder="Email (optional)"
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
  required,
}) => {
  const [st, setst] = useState(true);
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
    <div className="flex items-start justify-between w-full gap-1 px-2 small:gap-3 small:flex-col ">
      <div className="flex flex-col  flex-1 flex-grow-[0.3] justify-start items-start ">
        <div className="flex flex-col items-start justify-start gap-2 small:gap-3">
          <div className="flex flex-col gap-2 ">
            <p className="text-[0.95rem] font-pm font-bol">Sell or Donate</p>
            <div className="flex items-start justify-start gap-2">
              <div
                onClick={(e) => {
                  setprefrence("Sell");
                  setst1(false);
                  setst(true);
                }}
              >
                <CustomCheckbox
                  setst={setst}
                  st={st}
                  text={"Sell"}
                  sod={true}
                />
              </div>
              <div
                onClick={(e) => {
                  setprefrence("Donate");
                  setst1(true);
                  setst(false);
                }}
              >
                <CustomCheckbox
                  setst={setst}
                  st={st1}
                  text={"Donate"}
                  sod={true}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[0.95rem] font-pm font-bol">Types of Scrap</p>
            <div className="flex flex-col items-start gap-0 small:flex-row small:flex-wrap small:gap-x-2">
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
                    } else {
                      const ty = [...type, it];
                      settype(ty);
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
        <div className="flex flex-col items-start gap-0 small:flex-row small:flex-wrap small:gap-x-2 ">
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
      <div className="flex flex-col flex-1 flex-grow-[0.42] larger:w-[14rem] large:w-[10rem] items-start justify-start gap-3 small:w-full">
        <p className="text-[0.95rem] font-pm font-bol">Remarks & Demand</p>
        <textarea
          name="sell"
          placeholder="Describe what you want to sell."
          id="sdasd"
          cols="28"
          rows="5"
          maxLength={200}
          ref={remarks}
          required={required}
          className="w-full small:w-full border resize-none h-[10.5rem] small:h-[5rem] outline-none hover:shadow-xl focus:border-black border-borderColorP p-1 px-3 text-[0.9rem] rounded-md"
        ></textarea>
      </div>
    </div>
  );
};

const Options3 = ({ selectedDate, setselectedDate, settime }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [selected, setselected] = useState(null);
  const timing = ["Morning", "Afternoon", "Evening"];
  useEffect(() => {
    settime(timing[selected]);
  }, [selected]);

  return (
    <div className="flex items-start justify-between gap-2 small:flex-col small:gap-0">
      <BasicDateCalendar
        selectedDate={selectedDate}
        setselectedDate={setselectedDate}
      />

      <div className="flex w-[16.5rem] flex-col pt-3 justify-start items-start small:w-full gap-3 ">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <p className="text-1xl font-pm font-bol small:hidden">
            Selected Date
          </p>
          <span className="flex items-center justify-between w-full px-4 py-2 border rounded-lg font-pm hover:shadow-lg font-med border-borderColorP ">
            <div className="flex gap-2">
              <p className="hidden font-bol small:flex">Selected:</p>
              {typeof selectedDate === "string"
                ? selectedDate
                : months[selectedDate.getMonth()] +
                  " " +
                  selectedDate.getDate() +
                  "," +
                  " " +
                  selectedDate.getFullYear()}
            </div>
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-secondaryGreen ">
              {tick}
            </span>
          </span>
        </div>

        <div className="flex flex-col items-start justify-start w-full gap-3 ">
          <p className="text-1xl font-pm font-bol">Time</p>
          <div className="flex flex-col items-start gap-2 small:gap-3 small:flex-row small:flex-wrap ">
            <div onClick={() => setselected(0)}>
              <CustomCheckbox text={"Morning"} gap={"2"} st={selected === 0} />
            </div>
            <div onClick={() => setselected(1)}>
              <CustomCheckbox
                text={"Afternoon"}
                gap={"2"}
                st={selected === 1}
              />
            </div>
            <div onClick={() => setselected(2)}>
              <CustomCheckbox text={"Evening"} gap={"2"} st={selected === 2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ImagesInput = ({ seterr }) => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="flex flex-col gap-2 px-1 py-1">
      <p className="font-[700] font-pm text-[#0CBC8B]">Upload Images</p>
      <div className="flex flex-wrap items-center justify-between gap-2 small:justify-center ">
        {arr.map((it, index) => {
          const Inputref = useRef(null);
          const [inp, setinp] = useState(false);
          return (
            <div
              style={{ borderStyle: "dashed" }}
              className="flex flex-col items-center relative justify-center w-[107px] h-[84px] [&_svg]:stroke-[#7E7E7E] border rounded-[12px] cursor-pointer overflow-hidden hover:border-black [&_span]:hover:text-black [&_span]:hover:font-[600] [&_svg]:hover:stroke-black"
              onClick={() => {
                !inp && Inputref.current.click();
              }}
              key={index}
            >
              {!inp && (
                <>
                  {gallery}
                  <span className="text-[#7E7E7E] text-[14px]">upload</span>
                </>
              )}
              <img
                src={""}
                width={100}
                height={100}
                className={`w-full ${inp ? "" : "hidden"} `}
                alt="uploaded"
                id={`img-inp-giv-${index}`}
              />
              {inp && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setinp(false);
                    document.querySelector(`#img-inp-giv-${index}`).src = "";
                    document.querySelector(`#inp-img-${index}`).value = "";
                  }}
                  className="rounded-[7px] bg-white cursor-pointer p-1.5 absolute top-1.5 right-1.5"
                >
                  {trash}
                </span>
              )}
              <input
                className="hidden img-inp-giv"
                id={`inp-img-${index}`}
                ref={Inputref}
                type="file"
                multiple
                accept=".png, .jpg, .jpeg, .webp"
                onInput={(e) => {
                  if ([0]) {
                    seterr(null);
                    setinp(true);
                    if (e.target.files.length > 1) {
                      const files = e.target.files;
                      for (let i = 0; i < files.length; i++) {
                        createInputEvent(`inp-img-${index + i}`, files[i]);
                      }
                    } else {
                      const url = URL.createObjectURL(e.target.files[0]);
                      document.querySelector(`#img-inp-giv-${index}`).src = url;
                    }
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const CustomCheckbox = ({ text, gap, st, sod }) => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    setchecked(st);
  }, [st]);
  return (
    <label
      onClick={() => !sod && setchecked(!checked)}
      className={`flex ${
        gap ? "gap-" + gap : "gap-1"
      } justify-center cursor-pointer items-center text-[0.9rem] larger:text-[0.8rem] small:text-[0.9rem] 
      font-pm font-med whitespace-nowrap ${
        checked || text === "Sell" || text === "Donate"
          ? "text-black"
          : "text-gray-500"
      } `}
    >
      <span
        className={`w-[1.15rem] h-[1.15rem] flex justify-center 
      items-center ${checked && "bg-secondaryGreen"} border ${
          checked ? "border-black" : "border-gray-500"
        }  rounded-[5px] `}
      >
        {checked && <span className="flex w-[1.1rem] ">{tick}</span>}
      </span>
      {text}
    </label>
  );
};

const createInputEvent = async (id, file) => {
  const fileInput = document.querySelector(`#${id}`);
  if (fileInput) {
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    fileInput.files = dataTransfer.files;
    await fileInput.dispatchEvent(
      new Event("input", {
        bubbles: true,
        cancelable: true,
      })
    );
  }
};

export default Sheduler;
