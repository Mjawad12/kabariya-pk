"use client";
import {
  Scrapitems,
  arrowDown,
  towns,
  plusGreen,
  tick,
  trash,
  uploadImg,
  search,
} from "@/Components/Consonants";
import { Banner } from "@/Components/Footer";
import SubmittedDialog from "@/Components/SubmittedDialog";
import { motion, useAnimationControls } from "framer-motion";
import { useRouter } from "next/navigation";
import { Input } from "postcss";
import React, { Fragment, useEffect, useRef, useState } from "react";

function page() {
  const [page, setpage] = useState(0);
  const [totalpickups, settotalpickups] = useState([1]);
  const [totalBank, settotalBank] = useState([1]);
  const [st1, setst1] = useState(false);
  const [st, setst] = useState(true);
  const [othernum, setothernum] = useState(false);
  const [qualification, setqualification] = useState([]);
  const [pickupVehicles, setpickupVehicles] = useState([]);
  const [purchasingStart, setpurchasingStart] = useState("50,000");
  const [purchasingEnd, setpurchasingEnd] = useState("100,000");
  const [city, setcity] = useState("Karachi");
  const [town, settown] = useState("Baldia town");
  const [scrap, setscrap] = useState([]);
  const shopAddress = useRef(null);
  const other = useRef(null);
  const form = useRef(null);
  const router = useRouter();
  const [profileImg, setprofileImg] = useState(null);
  const [cnicImg, setcnicImg] = useState([]);
  const [shopimages, setshopimages] = useState([]);
  const [submitted, setsubmitted] = useState(false);
  const [loading, setloading] = useState(false);
  const [errors, seterrors] = useState(null);
  const [errorsObj, seterrorsObj] = useState({
    quali: false,
    vehic: false,
  });

  useEffect(() => console.log(scrap), [scrap]);

  const handleSubmit = async (e) => {
    if (form.current.checkValidity()) {
      seterrorsObj({});
      e.preventDefault();
      if (page === 0) {
        window.scrollTo(0, 0);
        if (qualification.length < 1) {
          const obj = errorsObj;
          obj.quali = true;
          setTimeout(() => seterrorsObj(obj), [100]);
          document
            .querySelector("#quali")
            .scrollIntoView({ behavior: "smooth" });
        } else if (pickupVehicles.length < 1) {
          seterrorsObj({});
          const obj = errorsObj;
          obj.vehic = true;
          setTimeout(() => seterrorsObj(obj), [100]);
          document
            .querySelector("#vechi")
            .scrollIntoView({ behavior: "smooth" });
        } else {
          setpage(1);
        }
      } else if (page === 1) {
        if (!document.querySelector("#profileInput").files[0]) {
          seterrors("Please upload profile image.");
        } else if (
          !document.querySelector("#frontPic").files[0] ||
          !document.querySelector("#backPic").files[0]
        ) {
          seterrors("Upload Front and Back side image of your CNIC.");
        } else if (
          !Array.from(document.querySelectorAll(".shopImg")).every((it) => {
            return it.files[0];
          })
        ) {
          seterrors("Please Upload Shop Images");
        } else {
          seterrors(null);
          window.scrollTo(0, 0);
          setpage(2);
        }
      } else if (page >= 2) {
        setloading(true);
        await submitDealerForm().then(() => setsubmitted(true));
      }
    }
  };

  const submitDealerForm = async () => {
    const details = {};
    details.profileimg = await Upload([profileImg]);
    details.Cnicimg = await Upload(cnicImg);
    details.shopimages = await Upload(shopimages);
    document.querySelectorAll(".userdet").forEach((it) => {
      details[it.id] = it.value;
    });
    document.querySelectorAll(".num").forEach((it) => {
      details[it.id] = it.value;
    });
    details.sM = st;
    details.Qualifications = qualification.toString();
    details.pickupVehicles = pickupVehicles.toString();
    details.purchasingStart = purchasingStart;
    details.purchasingEnd = purchasingEnd;
    details.city = city;
    details.town = town;
    details.ShopAddress = shopAddress.current.value;
    let pickupAreas = [];
    document.querySelectorAll("#pickupAreas").forEach((it) => {
      pickupAreas = [...pickupAreas, it.getAttribute("data-value")];
    });
    details.pickupAreas = pickupAreas.toString();
    details.bankDetails = await bankDetails();
    details.scrap = scrap.toString();
    details.others = other.current.value;

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_PORT}/api/DealerEmail`,
      {
        method: "POST",
        body: JSON.stringify(details),
      }
    );
    const parsedData = await data.json();
  };

  const bankDetails = () => {
    let banks = [];
    let bankname = [];
    let Ibanno = [];
    document.querySelectorAll("#banks").forEach((it) => {
      banks = [...banks, it.innerText];
    });
    document.querySelectorAll("#bankname").forEach((it) => {
      bankname = [...bankname, it.value];
    });

    document.querySelectorAll("#bankno").forEach((it) => {
      Ibanno = [...Ibanno, it.value];
    });
    let banksdetails = [];
    banks.forEach((it, index) => {
      banksdetails[index] = {
        bank: banks[index],
        accountname: bankname[index],
        Ibanno: Ibanno[index],
      };
    });
    return banksdetails;
  };

  const Upload = async (files) => {
    var url = [];
    for (let i = 0; i < files.length; i++) {
      if (typeof files[i] !== "undefined") {
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
    }
    return url;
  };

  return (
    <div className="w-full relative">
      <div className="max-w-[1440px] flex flex-col justify-start items-start gap-5 m-auto px-5 py-16 small:py-10 smaller:py-4">
        <div className="px-3 smaller:px-2">
          <h2 className="font-pm font-bol text-[3.1rem] leading-[54px] small:text-[3rem] smaller:text-[2rem]">
            Dealer Form
          </h2>
          <p className="font-pm font-med text-[18px] small:text-[16px] smaller:text-[12px]">
            with our Hassle-Free Doorstep Pickup Service In Just few Easy Steps.
          </p>
        </div>
        <div
          className="w-full shadow-xl pt-10 small:pt-7
        border border-borderColorP rounded-[24px] "
        >
          <form ref={form} action="null" className="w-full">
            <div
              className={`w-full flex flex-col justify-start items-start gap-11 small:gap-5 px-20 small:px-10 smaller:px-5 ${
                page === 0 ? "flex" : "hidden"
              } `}
            >
              <div className="flex justify-start items-start flex-wrap gap-4 gap-y-11 larger:gap-y-9 small:gap-y-5 w-full">
                <InputFull
                  type="text"
                  require={true}
                  text="Shop/Business Name"
                />
                <InputFull type="text" require={true} text="Full Name" />
                <InputFull type="text" require={true} text="Father Name" />
                <InputFull type="text" require={true} text="CNIC" />
                <div className="flex max-w-[610px] extLar:max-w-[550px] larger:max-w-[100%] w-full flex-col justify-start items-start gap-3">
                  <p className="formp small:hidden">{"Date of Birth"}</p>
                  <InputDate />
                </div>
                <InputFull type="email" text="Email (Optional)" />
              </div>
              <div className="flex justify-start items-end flex-wrap w-full gap-4 small:gap-5  ">
                <div className="flex flex-col justify-start items-start gap-3 max-w-[308px] w-full">
                  <p className="formp small:hidden ">Whatsapp Number</p>
                  <input
                    type="tel"
                    placeholder="Whatsapp Number"
                    className="forminput num"
                    required
                    maxLength={13}
                    minLength={11}
                    id="whatsapp"
                  />
                </div>
                <div className="flex flex-col justify-start items-start gap-3 max-w-[308px] w-full">
                  <p className="formp small:hidden ">Phone Number</p>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="forminput num"
                    required
                    maxLength={13}
                    minLength={11}
                    id="phone"
                  />
                </div>
                {othernum ? (
                  <div className="flex flex-col justify-start items-start gap-3 max-w-[308px] w-full relative">
                    <span
                      onClick={() => setothernum(false)}
                      className="absolute top-0 right-0  small:top-5 small:right-3 cursor-pointer  [&_svg]:w-[20px]"
                    >
                      {trash}
                    </span>
                    <p className="formp small:hidden ">Others</p>
                    <input
                      type="tel"
                      placeholder="Number"
                      className="forminput num"
                      id="other number"
                      maxLength={13}
                      minLength={11}
                    />
                  </div>
                ) : (
                  <div onClick={() => setothernum(true)}>
                    <Addbtn />
                  </div>
                )}
              </div>
              <div className="flex justify-start items-start gap-20 small:gap-5 small:mt-3 flex-wrap">
                <div className="flex flex-col gap-5 ">
                  <p className="formp">Use Smart mobile</p>
                  <div className="flex justify-start items-start gap-6 small:gap-3">
                    <div
                      onClick={(e) => {
                        setst1(false);
                        setst(true);
                      }}
                    >
                      <CustomCheckbox st={st} text={"Yes"} sod={true} gap={3} />
                    </div>
                    <div
                      onClick={(e) => {
                        setst1(true);
                        setst(false);
                      }}
                    >
                      <CustomCheckbox st={st1} text={"No"} sod={true} gap={3} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div
                    id="quali"
                    className="flex justify-start items-center gap-3"
                  >
                    <p className="formp">Qualifications</p>
                    {errorsObj.quali && (
                      <p className="text-red-600 font-pm font-[700] text-[13px]">
                        * Please Select your Qualification
                      </p>
                    )}
                  </div>
                  <div className="flex justify-start items-start flex-wrap gap-6 small:gap-3">
                    {[
                      "Mactric",
                      "Intermedate",
                      "Graduate",
                      "Masters",
                      "Others",
                    ].map((it, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          seterrorsObj("");
                          const obj = errorsObj;
                          obj.quali = false;
                          setTimeout(() => seterrorsObj(obj), [100]);
                          if (qualification.includes(it)) {
                            let pop = [];
                            qualification.forEach((ele) => {
                              if (ele !== it) {
                                pop.push(ele);
                              }
                            });
                            setqualification(pop);
                          } else {
                            const pop = [...qualification, it];
                            setqualification(pop);
                          }
                        }}
                      >
                        <CustomCheckbox gap={3} text={it} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div
                  id="vechi"
                  className="flex justify-start items-center gap-3"
                >
                  <p className="formp">Pickup Vehicles</p>
                  {errorsObj.vehic && (
                    <p className="text-red-600 font-pm font-[700] text-[13px]">
                      * Please Select your Vehicle
                    </p>
                  )}
                </div>
                <div className="flex justify-start items-start flex-wrap gap-6 small:gap-3">
                  {[
                    "Bike",
                    "Loader Rickshaw",
                    "Suzuki",
                    "Shehzore",
                    "Truck",
                    "Others",
                    "No Vehicle",
                  ].map((it, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        seterrorsObj({});
                        const obj = errorsObj;
                        obj.vehic = false;
                        setTimeout(() => seterrorsObj(obj), [100]);
                        if (pickupVehicles.includes(it)) {
                          let pop = [];
                          pickupVehicles.forEach((ele) => {
                            if (ele !== it) {
                              pop.push(ele);
                            }
                          });
                          setpickupVehicles(pop);
                        } else {
                          const pop = [...pickupVehicles, it];
                          setpickupVehicles(pop);
                        }
                      }}
                    >
                      <CustomCheckbox text={it} gap={3} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <p className="formp">Daily Purchasing strength</p>
                <div className="flex  gap-5 small:gap-3 w-full">
                  <DropDown
                    data={["50,000", "60,000", "70,000", "80,000", "90,000"]}
                    selectedOption={purchasingStart}
                    setselectedOption={setpurchasingStart}
                  />
                  <DropDown
                    data={[
                      "100,000",
                      "200,000",
                      "300,000",
                      "400,000",
                      "500,000",
                    ]}
                    selectedOption={purchasingEnd}
                    setselectedOption={setpurchasingEnd}
                  />
                </div>
              </div>
              <div className="w-full flex gap-5 small:gap-3  small:flex-col">
                <div className="flex flex-col gap-3 w-full">
                  <p className="formp small:hidden">Select city</p>
                  <DropDown
                    data={["Karachi", "Islamabad", "Multan", "Lahore"]}
                    selectedOption={city}
                    setselectedOption={setcity}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <p className="formp small:hidden">Select Town</p>
                  <DropDown
                    data={towns[city ?? "Karachi"]}
                    city={city}
                    selectedOption={town}
                    setselectedOption={settown}
                    overflow={true}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <p className="formp small:hidden">Shop Address</p>
                <textarea
                  ref={shopAddress}
                  className="w-full outline-none focus:border-black fonr-pm rounded-xl px-6 py-4 border border-borderColorP focus:text-black  hover:shadow-xl transition duration-[100ms] resize-none"
                  placeholder="Shop Address"
                  required
                  maxLength={100}
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <p className="formp">Select Pick up Areas</p>
                <div className="flex gap-4 small:gap-3 w-full flex-wrap">
                  {totalpickups.map((it, index) => (
                    <DropDown3
                      key={index}
                      ini={"Korangi"}
                      id={"pickupAreas"}
                      data={towns[city]}
                      city={city}
                      onDelete={() => {
                        if (totalpickups.length > 1) {
                          const Tp = totalpickups.splice(
                            0,
                            totalpickups.length - 1
                          );
                          settotalpickups(Tp);
                        }
                      }}
                    />
                  ))}
                  {totalpickups.length < 5 && (
                    <Addbtn
                      onClick={() => {
                        const Tp = [...totalpickups, totalpickups.length];
                        settotalpickups(Tp);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <p className="formp">Bank Accounts</p>
                <div className="flex flex-col gap-9 small:gap-5">
                  {totalBank.map((it, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex small:flex-col gap-4 small:gap-2 "
                      >
                        <DropDown2
                          data={[
                            "Askari Bank",
                            "Al Baraka Bank (Pakistan) Limited",
                            "Allied Bank Limited (ABL)",
                            "Bank Alfalah (BAFL)",
                            "Bank Al Habib (BAHL)",
                            "BankIslami Pakistan Limited",
                            "Dubai Islamic Bank Pakistan Limited (DIB Pakistan)",
                            "Faysal Bank (FBL)",
                            "Habib Bank Limited (HBL)",
                            "Habib Metropolitan Bank",
                            "Habib Bank AG Zurich",
                            "JS Bank",
                            "Meezan Bank Limited",
                            "MCB Bank Limited",
                            "Samba Bank (Pakistan) Limited",
                            "Silkbank Limited",
                            "Standard Chartered Pakistan (SC Pakistan)",
                            "Soneri Bank",
                            "Bank Makramah Limited",
                            "United Bank Limited (UBL)",
                            "NayaPay",
                            "Sadapay",
                            "JazzCash",
                            "Easypaisa",
                            "Ubank",
                          ]}
                          ini={"HBL"}
                          id={"banks"}
                        />
                        <div className=" max-w-[21.7rem] w-full">
                          <input
                            type="text"
                            className="forminput"
                            placeholder="Name"
                            required
                            id="bankname"
                          />
                        </div>
                        <div className=" max-w-[21.7rem] w-full">
                          <input
                            type="text"
                            className="forminput"
                            placeholder="IBAN NO."
                            required
                            id="bankno"
                          />
                        </div>
                        {totalBank.length < 4 &&
                          totalBank.length - 1 === index && (
                            <div>
                              <Addbtn
                                onClick={() => {
                                  const Tb = [...totalBank, totalBank.length];
                                  settotalBank(Tb);
                                }}
                              />
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {Scrapitems.map((it, index) => {
                return (
                  <Fragment key={index}>
                    <div key={index} className="flex flex-col gap-3 w-full">
                      <p className="formp text-[1.1rem] font-bol ">
                        {it.name === "Custom offer" ? "Others" : it.name}
                      </p>
                      <div className="flex justify-start items-center gap-[1rem] flex-wrap gap-y-3">
                        {it.name === "Custom offer" ? (
                          <input
                            className="forminput font-pm font-reg"
                            placeholder="Write here"
                            maxLength={100}
                            ref={other}
                          />
                        ) : (
                          it.items.map((currentItem, i) => (
                            <div
                              key={i + "s"}
                              className="max-w-[12.5rem] w-full flex"
                              onClick={() => {
                                if (scrap.includes(currentItem)) {
                                  let pop = [];
                                  scrap.forEach((ele) => {
                                    if (ele !== currentItem) {
                                      pop.push(ele);
                                    }
                                  });
                                  setscrap(pop);
                                } else {
                                  const pop = [...scrap, currentItem];
                                  setscrap(pop);
                                }
                              }}
                            >
                              <CustomCheckbox gap={3} text={currentItem} />
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
            <div
              className={`w-full flex flex-col justify-start items-start gap-11 small:gap-6 smaller:gap-1  px-20 small:px-10 smaller:px-5  ${
                page === 1 ? "flex" : "hidden"
              } `}
            >
              <Option2
                page={page}
                profileImg={profileImg}
                setprofileImg={setprofileImg}
                cnicImg={cnicImg}
                setcnicImg={setcnicImg}
                shopimages={shopimages}
                setshopimages={setshopimages}
                errors={errors}
              />
            </div>
            <div
              className={`w-full flex flex-col justify-start items-start gap-11 px-[6rem] py-20 small:py-10 smaller:py-0 small:px-10 smaller:px-3  ${
                page === 2 ? "flex" : "hidden"
              } `}
            >
              <TermsConditions />
            </div>
            <div
              className={`flex w-full justify-end items-center py-6 border-t border-borderColorP small:flex-col  px-20 small:px-5 gap-5 ${
                page === 1 ? "mt-10 small:mt-2" : "mt-20"
              }  `}
            >
              {page === 2 && (
                <p className="w-full text-[22px] small:text-[18px] smaller:text-[14px] font-pm font-reg ">
                  I Have Read Terms & Conditions{" "}
                  <a
                    href="https://www.youtube.com/@Kabariya.official"
                    className="text-primaryGreen underline underline-offset-2"
                  >
                    Watch video
                  </a>
                </p>
              )}
              <div className="flex w-full gap-3 justify-end items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    page === 0 ? router.push("/") : setpage(page - 1);
                  }}
                  className="btn bg-white border-borderColorP small:border-black border text-black font-med max-w-[7.3rem] h-[3.4rem] small:h-[3rem]"
                >
                  {page === 0 ? "Cancel" : "Back"}
                </button>
                <button
                  disabled={loading}
                  className={`btn font-med max-w-[7.3rem] h-[3.4rem] small:h-[3rem] transition-all duration-700 disabled:cursor-not-allowed disabled:bg-gray-700 ${
                    page < 2 ? "bg-black" : "bg-primaryGreen"
                  }`}
                  // onClick={(e) => {
                  //   e.preventDefault();
                  // }}
                  onClick={handleSubmit}
                >
                  {page < 2 ? "Next" : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10 small:mt-5">
        <Banner />
      </div>
      {submitted && <SubmittedShower />}
    </div>
  );
}

export default page;

const InputFull = ({ text, type, require }) => {
  return (
    <div className="flex max-w-[610px] extLar:max-w-[550px] larger:max-w-[100%] w-full flex-col justify-start items-start gap-3">
      <p className="formp small:hidden">{text}</p>
      <input
        className="forminput userdet"
        type={type}
        placeholder={text}
        maxLength={text === "CNIC" ? 14 : 25}
        minLength={text === "CNIC" ? 14 : "undefined"}
        required={require}
        id={text}
      />
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
      } justify-center cursor-pointer items-center text-[1rem] small:text-[0.9rem] 
      font-pm font-med whitespace-nowrap  `}
    >
      <span
        className={`w-[1.2rem] h-[1.2rem] flex justify-center 
      items-center ${
        checked && "bg-black"
      } border border-gray-300 rounded-[5px] `}
      >
        {checked && <span className="flex w-[1.1rem] ">{tick}</span>}
      </span>
      {text}
    </label>
  );
};

const DropDown = ({
  data,
  selectedOption,
  setselectedOption,
  overflow,
  city,
}) => {
  const [show, setshow] = useState(false);

  const changeSelected = (e) => {
    setselectedOption(e.target.innerText);
  };
  return (
    <div
      onClick={() => setshow(!show)}
      className="w-full focus:border-black h-[3.5rem]  rounded-xl px-5 pr-4 border border-borderColorP cursor-pointer focus:text-black  hover:shadow-xl transition duration-[100ms] flex justify-between items-center relative "
    >
      <p className="formp font-med">{selectedOption}</p> {arrowDown}
      <div
        className={`absolute ${
          show ? "flex" : "hidden"
        } w-full left-0 top-[45px] py-3 flex justify-start flex-col items-start bg-white border-borderColorP border z-20 max-h-[12rem] ${
          overflow ? "overflow-y-scroll" : ""
        }`}
      >
        {data.map((it, index) => (
          <span
            key={index}
            onClick={changeSelected}
            className="flex justify-start items-center h-7 cursor-pointer w-full px-5 py-2 text-gray-400 hover:bg-gray-200 "
            value={it}
          >
            {city === "Karachi" ? it.name : it}
          </span>
        ))}
      </div>
    </div>
  );
};

const DropDown2 = ({ data, ini, id }) => {
  const [show, setshow] = useState(false);
  const [selectedOption, setselectedOption] = useState(ini);
  const changeSelected = (e) => {
    setselectedOption(e.target.innerText);
  };

  return (
    <div
      onClick={() => setshow(!show)}
      className="w-full max-w-[21.7rem] focus:border-black h-[3.5rem]  rounded-xl px-5 pr-4 border border-borderColorP cursor-pointer focus:text-black  hover:shadow-xl transition duration-[100ms] flex justify-between items-center relative "
    >
      <p className="formp font-med" id={id}>
        {selectedOption}
      </p>
      {arrowDown}
      <div
        className={`absolute ${
          show ? "flex" : "hidden"
        } w-full left-0 top-[45px] py-3 flex justify-start flex-col items-start bg-white border-borderColorP border z-20 max-h-[15rem] overflow-y-scroll`}
      >
        {data.map((it, index) => (
          <span
            key={index}
            onClick={changeSelected}
            className="flex justify-start items-center min-h-7 cursor-pointer w-full px-5 py-2 text-gray-400 hover:bg-gray-200 "
            value={it}
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
};

const Addbtn = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center cursor-pointer items-center gap-2 w-[140px]  h-[3.5rem] small:h-[3.5rem]  rounded-xl px-5 pl-4 border border-[#E0E0E0]"
    >
      {plusGreen} <p className="font-pm font-med">Add New</p>
    </div>
  );
};

const Option2 = ({
  page,
  profileImg,
  setprofileImg,
  cnicImg,
  setcnicImg,
  shopimages,
  setshopimages,
  errors,
}) => {
  const shopimg = [1, 2, 3, 4, 5, 6];
  const [currentUploaded, setcurrentUploaded] = useState(0);
  const fileRef = useRef(null);

  useEffect(() => {
    if (page === 2) {
      getimages();
    }
  }, [page]);

  const urlCreator = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      return url;
    }
  };

  const imageGiverFunc = (id, e) => {
    const Selectedimg = document.querySelector(id);
    Selectedimg.parentElement.childNodes.forEach((it) =>
      it.classList.add("hidden")
    );
    Selectedimg.src = urlCreator(e.target.files[0]);
    Selectedimg.classList.remove("hidden");
  };

  const getimages = () => {
    setprofileImg(document.querySelector("#profileInput").files[0]);
    const cnicimg = [
      document.querySelector("#frontPic").files[0],
      document.querySelector("#backPic").files[0],
    ];
    setcnicImg(cnicimg);
    let shopimg = [];
    document.querySelectorAll(".shopImg").forEach((it, index) => {
      shopimg[index] = it?.files[0];
    });
    setshopimages(shopimg);
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-8 py-9 small:py-5 small:pt-0  border-b border-borderColorP  small:border-0 ">
        <p className="formp text-[1.3rem]">Profile</p>
        <input
          ref={fileRef}
          onInput={(e) => imageGiverFunc("#profileImg", e)}
          type="file"
          accept="image/*"
          className="hidden"
          id="profileInput"
        />
        <div
          onClick={() => fileRef.current.click()}
          className="flex flex-col justify-center items-center max-w-[11rem] w-full gap-5 cursor-pointer "
        >
          <div className="dashedSmDiv max-w-[11rem] w-full min-h-[13rem] flex justify-center items-center flex-col relative">
            <img
              src=""
              className="max-w-[11rem] w-full hidden"
              id="profileImg"
            />
            {uploadImg}
            <p className="formp font-med  underline underline-offset-4">
              Drag & Upload
            </p>
          </div>
          <p className="formp text-[1.1rem] text-[#828282] leading-[21.78px] small:hidden">
            Profile Picture
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-8 py-9  border-b border-borderColorP small:border-0  ">
        <p className="formp text-[1.3rem]">CNIC</p>
        <div className="flex justify-start items-start flex-wrap gap-5 w-full">
          <div className="flex flex-col justify-center items-start gap-5 max-w-[25rem] w-full ">
            <span className="bg-[#f6f6f6] text-[#828282] font-pm text-[0.85rem] font-med px-3 rounded-[5px]">
              Front
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="frontPic"
              onInput={(e) => imageGiverFunc("#cnicFront", e)}
            />
            <div
              onClick={() => document.querySelector("#frontPic").click()}
              className="flex flex-col justify-center items-center  gap-3 cursor-pointer max-w-[25rem] w-full "
            >
              <input type="file" accept="image/*" className="hidden" />
              <img
                src=""
                className="max-w-[25rem] w-full h-full hidden"
                id="cnicFront"
              />
              <div className="dashedSmDiv  w-full min-h-[15rem] flex justify-center items-center flex-col">
                {uploadImg}
                <p className="formp font-med  underline underline-offset-4">
                  Drag & Upload
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-3  max-w-[25rem] w-full">
            <span className="bg-[#f6f6f6] text-[#828282] font-pm text-[0.85rem] font-med px-3 rounded-[5px]">
              Back
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="backPic"
              onInput={(e) => imageGiverFunc("#cnicBack", e)}
            />
            <div
              onClick={() => document.querySelector("#backPic").click()}
              className="flex flex-col justify-center items-center  gap-5 cursor-pointer max-w-[25rem] w-full "
            >
              <input type="file" accept="image/*" className="hidden" />
              <img
                src=""
                className="max-w-[25rem] w-full h-full hidden"
                id="cnicBack"
              />
              <div className="dashedSmDiv  w-full min-h-[15rem] flex justify-center items-center flex-col">
                {uploadImg}
                <p className="formp font-med  underline underline-offset-4">
                  Drag & Upload
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-8 py-9 ">
        <p className="formp text-[1.3rem] flex justify-between items-center w-full">
          Shop images{" "}
          <span className="text-[0.9rem] text-[#828282] font-reg">
            {currentUploaded}/6
          </span>
        </p>
        <div className="flex gap-3 w-full flex-wrap">
          {shopimg.map((it, index) => (
            <Fragment key={index}>
              <input
                type="file"
                accept="image/*"
                className="hidden shopImg"
                id={`shopImg-${index}`}
                onInput={(e) => {
                  imageGiverFunc(`#shopimages-${index}`, e, true);
                  document.querySelectorAll(".shopImg").forEach((it) => {
                    if (it.files[0]) {
                      setcurrentUploaded(currentUploaded + 1);
                    }
                  });
                }}
              />
              <div
                onClick={() =>
                  document.querySelector(`#shopImg-${index}`).click()
                }
                key={it}
                className="dashedSmDiv relative w-full min-h-[10rem] max-w-[12rem] smaller:max-w-[8.5rem] smaller:min-h-[8rem] flex justify-center items-center flex-col cursor-pointer"
              >
                <img
                  src=""
                  className="min-h-[10rem]  max-w-[12rem] w-full h-full hidden smaller:max-w-[8.5rem] smaller:min-h-[8rem]"
                  id={`shopimages-${index}`}
                />
                {uploadImg}
                <p className="formp font-med  underline underline-offset-4">
                  Add image
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      {errors && (
        <p className="font-pm text-[1.2rem] text-red-500 font-bol">{errors}</p>
      )}
    </>
  );
};

const TermsConditions = () => {
  return (
    <div className="w-full flex flex-col justify-end items-end gap-6 small:gap-4 ">
      <p className="font-nast font-med text-[3rem] small:text-[2rem] ">
        شرائط و ضوابط
      </p>
      <ul
        style={{
          listStyleImage: "url('/pointer.jpg')",
          direction: "rtl",
        }}
        className="urduul text-start pr-5 font-nast [&>li]:text-[1.65rem] [&>li]:font-[100] [&>li]:pr-3 flex flex-col gap-5 smaller:[&>li]:pr-1 small:[&>li]:text-[1.35rem]  smaller:[&>li]:text-[1.25rem] Smob:[&>li]:text-[1.15rem] "
      >
        <li>
          کسٹمر کو اپنا کاروباری وزيٹنگ کارڈ يا اپنے کاروبار کے متعلق آگاہی دينا
          يا کسٹمر سے ڈاٸريکٹ ہونے کی صورت ميں پليٹ فارم سے خارج کر ديا جاۓ گا۔
          <br />
          پليٹ فارم کے پاس اس عمل کو جانچنے کےليے چيک اينڈ بيلنس کا موثر نظام
          موجود ہے
        </li>
        <li>
          درخواستیں قبول کرنے والے ڈیلر وقت پر اشیاء لینے کے پابند ہیں۔ تاخیر کے
          نتیجے میں جرمانہ ہو سکتا ہے۔
        </li>
        <li>
          اگر کوئی ڈیلر کسی بھی وجہ سے پک اپ کرنے سے قاصر ہے تو اسے کم از کم 6
          گھنٹے پہلے ایڈمن کو مطلع کرنا ہوگا۔
        </li>
        <li>
          ڈیلر کی سروس کے بارے میں کسٹمر کی طرف سے کوئی بھی شکایت حل کرنا ڈیلر
          کی ذمہ داری ہے۔ کمپنی ذمہ دار نہیں ہوگی
        </li>
        <li>
          ڈیلرز کمپنی کو روزانہ کا کمیشن 24 گھنٹے میں فراہم کرنے کا پابند ہوگا.
          ایسا نہ ہونے کی صورت میں اکاؤنٹ بلاک کردیا جایگا۔
        </li>
        <li>
          ڈیلر پر لازم ہے کہ وہ کسٹمر سے مال اٹھاتے ہوۓ پليٹ فارم کا
          نماٸندہ/وينڈر ظاہر کرے۔
        </li>
        <li>
          ڈیلرز کو کسی تیسرے فریق کو پلیٹ فارم تک رسائی دینے سے سختی سے منع کیا
          گیا ہے۔
        </li>
        <li>
          یہ معاہدہ اس وقت تک نافذ العمل رہتا ہے جب تک کہ ڈیلر کی جانب سے کمپنی
          کے برطرفی کے خط پر دستخط کرنے کے بعد اسے ختم نہ کر دیا جائے۔
        </li>
        <li>
          ڈیلرز پر لازم ہے کہ پک اپ/انکوائری کے دوران کمپنی کی طرف سے فراہم کردہ
          آئی ڈی کارڈ اور اپر/شرٹ پہننا ہوگا۔
        </li>
        <li>
          جو ڈیلر بغیر اطلاع سات دنوں تک متحرک نہیں رہتے ہیں ان کے اکاؤنٹس کمپنی
          کی طرف سے بلاک کردیے جائیں گے۔
        </li>
        <li>
          ڈیلر مال پک اپ کرتے وقت تسلی کر کے مال اٹھائے مال اٹھانے کے بعد کسی
          قسم کی کمی بیشی کی صورت میں کوئی بھی ذمہ دار نہیں ہوگا۔
        </li>
        <li>
          اس فارم پر دستخط کرکے، ڈیلر تمام شرائط و ضوابط کو تسلیم کر کے کمپنی کے
          ساتھ کام شروع کرنے کا عہد کرتا ہے۔
          <br />
          ان شرائط و ضوابط کا مقصد ڈیلر اور کمپنی کے درمیان ایک منصفانہ اور شفاف
          ورکنگ ریلیشن بنانا ہے۔ کسی بھی خلاف ورزی کے نتیجے میں ڈیلرشپ ختم کی
          جاسکتی ہے۔
        </li>
      </ul>
    </div>
  );
};

const SubmittedShower = () => {
  return (
    <div className="fixed top-0 left-0 bg-[#00000066] min-h-screen w-full flex justify-center items-center">
      <div
        className="max-w-[660px] w-full  min-h-[510px]  relative flex flex-col
         justify-center  items-center bg-white  p-10 med:py-6 med:px-4 small:p-7 smaller:p-4  gap-6 small:gap-8
         shadow-xl rounded-3xl border border-borderColorP"
      >
        <SubmittedDialog dealerform={true} />
      </div>
    </div>
  );
};

const DropDown3 = ({ ini, id, onDelete, city, data }) => {
  const [show, setshow] = useState(false);
  const [selectedOption, setselectedOption] = useState(ini);

  const chengeVal = (value) => {
    setselectedOption(value);
    setshow(false);
  };

  return (
    <div
      onClick={(e) => {
        setshow(!show);
      }}
      className="w-full max-w-[21.7rem] focus:border-black h-[3.5rem]  rounded-xl px-5 pr-4 border border-borderColorP cursor-pointer focus:text-black  hover:shadow-xl transition duration-[100ms] flex justify-between items-center relative "
    >
      <p className="formp font-med" id={id} data-value={selectedOption}>
        {selectedOption.length > 20
          ? selectedOption.slice(0, 35) + "..."
          : selectedOption}
      </p>
      <div className="flex gap-5 items-center">
        <span
          onClick={onDelete}
          className="p-1.5 bg-[#F9F9F9] cursor-pointer rounded-md"
        >
          {trash}
        </span>
        <span>{arrowDown}</span>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute ${
          show ? "flex" : "hidden"
        } w-full left-0 top-[45px] pt-3  flex justify-start flex-col gap-5 items-start bg-white border-borderColorP border z-20 max-h-[25rem] overflow-y-scroll`}
      >
        <div className="w-full px-3">
          <div className="forminput justify-center items-center h-[48px] flex px-2 gap-3 hover:shadow-none">
            {search}
            <input
              type="text"
              placeholder="Search area"
              className="outline-none border-none w-full font-[500] font-pm"
            />
          </div>
        </div>
        <div className="flex flex-col  w-full px-3  ">
          {data?.map((it, index) => (
            <DropDownChild
              key={index}
              it={it}
              city={city}
              index={index}
              setselectedOption={setselectedOption}
              chengeVal={chengeVal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const DropDownChild = ({ it, city, index, chengeVal }) => {
  const [play, setplay] = useState(false);
  const ref = useRef(null);
  const controls = useAnimationControls();
  return (
    <motion.div
      ref={ref}
      key={index}
      onClick={() => {
        !play && controls.start({ height: ref.current?.scrollHeight });

        play &&
          controls.start({
            height: 40,
          });
        setplay(!play);
      }}
      initial={{ height: 40 }}
      animate={controls}
      className="flex flex-col justify-start items-center  cursor-pointer w-full  py-2 border-b border-[#0000001A] px-2 overflow-hidden h-[44px] "
      value={it}
    >
      <div className="w-full flex justify-between items-center">
        <p className="text-[18px] text-[#00000080]">
          {city === "Karachi" ? it.name : it}
        </p>
        <motion.span animate={{ rotate: play ? 0 : -90 }}>
          {arrowDown}
        </motion.span>
      </div>
      <ul
        style={{ listStyle: "inside" }}
        className="flex flex-col gap-1 w-full text-pm font-[500] text-[16px] py-3"
      >
        {it.subdivide?.map((val, key) => (
          <li
            onClick={() =>
              chengeVal(city === "Karachi" ? it.name + " - " + val : it)
            }
            key={key}
          >
            {val}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const InputDate = () => {
  return (
    <div className="flex justify-start items-center forminput small:gap-0 gap-2 focus:border-black border ">
      <p
        className="min-w-[6.4rem] text-gray-400 "
        onClick={(e) => e.target.nextElementSibling.click()}
      >
        Date of Birth :{" "}
      </p>
      <input
        type="date"
        className="outline-none border-none w-full userdet bg-transparent"
        required={true}
        id={"Date of Birth"}
      />
    </div>
  );
};
