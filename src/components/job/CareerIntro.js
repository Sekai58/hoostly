import React from "react";
import Header from "./Header";
import { IoIosArrowRoundForward } from "react-icons/io";

const Intro = () => {
  return (
    <div className="bg-[#f7f8fb] py-10 px-2 md:px-4 xl:px-container">
      <Header
        title="Let's get you started!"
        subTitle="We are looking for people who are ambitious, enjoy collaborating, respect our transparent culture and are ready to give it all. Come, be a part of the team and help us build the future of work."
      />
      <div className="flex gap-5 items-center justify-center">
        <button className="flex items-center font-medium text-primary  gap-2">
          Come Join Us
          <IoIosArrowRoundForward className="text-3xl" />
        </button>
        <button className="flex items-center font-medium text-primary  gap-2">
          View Internship
          <IoIosArrowRoundForward className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Intro;
