import Link from "next/link";
import React from "react";
import Loading from "./Loading";

function SubmittedDialog({ setsubmitted, contact, dealerform, loading }) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-6">
      <img
        src="./animatedIcon.gif"
        alt="animated icon"
        height={70}
        width={70}
      />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-4xl leading-7 text-center font-pm font-bol smaller:text-2xl">
              Request Submitted
            </p>
            <p className="text-1xl font-pm font-reg text-gray-500 leading-[20px] text-center smaller:text-[0.9rem]">
              Your Request submitted successfully
              <br />
              There are many variations earth.
            </p>
          </div>
          {dealerform ? (
            <Link href={"/"}>
              <p
                className={`text-gray-700 ${
                  contact && "text-white"
                } font-pm font-bol cursor-pointer
        text-[1.1rem] mt-4 [text-decoration:underline]`}
              >
                Got it.
              </p>
            </Link>
          ) : (
            <p
              onClick={() => setsubmitted(false)}
              className={`text-gray-700 ${
                contact && "text-white"
              } font-pm font-bol cursor-pointer
     text-[1.1rem] mt-4 [text-decoration:underline]`}
            >
              Got it.
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default SubmittedDialog;
