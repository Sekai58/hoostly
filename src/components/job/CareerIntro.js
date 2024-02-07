import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Intro = () => {
  return (
    <div className="bg-bgSecondary py-10 px-2 md:px-4 xl:px-container">
      <h3 className="px-2 md:px-4 xl:px-container flex justify-center text-transparent font-bold text-3xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text pt-[4rem] pb-2 overflow-visible text-center">
        Let's get you started
      </h3>
      <p className="w-full flex justify-center mb-10">
        <span className="max-w-[44rem] text-center text- text-textLight">
          We are looking for people who are ambitious, enjoy collaborating,
          respect our transparent culture and are ready to give it all. Come, be
          a part of the team and help us build the future of work.
        </span>
      </p>
      <div className="flex gap-5 items-center justify-center">
        <button className="flex items-center font-semibold text-gradientStart  gap-2">
          Come Join Us
          <IoIosArrowRoundForward className="text-3xl" />
        </button>
        <button className="flex items-center font-semibold text-gradientStart  gap-2">
          View Job Openings
          <IoIosArrowRoundForward className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Intro;
