import Link from "next/link";
import React from "react";

function SubmittedDialog({ setsubmitted, contact, dealerform }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6">
      <img
        src="./animatedIcon.gif"
        alt="animated icon"
        height={70}
        width={70}
      />
      <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-4xl font-pm font-bol leading-7 text-center smaller:text-2xl">
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
    </div>
  );
}

export default SubmittedDialog;
