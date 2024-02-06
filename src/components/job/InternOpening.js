import React from "react";
import Header from "./Header";
import { FaWindowRestore } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const Opening = () => {
  return (
    <>
      <Header
        title="Current Openings"
        subTitle="We offer paid internships with three intakes per year. We have a limited number of positions open each year, so apply early!"
      />
      <section className="px-2 md:px-4 xl:px-container pb-10">
        <div className="flex flex-col items-center gap-5 mb-10">
          <FaWindowRestore className="text-xl text-primary" />
          <p className="font-medium text-lg">
            We don't have any internships available at the moment
          </p>
          <p className="max-w-[44rem] text-center">
            Don't fret. You can still apply for the next internship by dropping
            your CV. We will get back to you when there is something suitable
            available.
          </p>
          <button className="flex items-center font-medium text-primary  gap-2">
            Drop your CV <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Opening;
