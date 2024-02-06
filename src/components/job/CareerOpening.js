import React from "react";
import { FaStore } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "./Header";
import { Link } from "react-router-dom";

const OpeningCard = () => {
  return (
    <Link
      to="/page"
      className="flex justify-between p-2 items-center border-b hover:bg-[#f7f8fb]"
    >
      <div className="flex gap-2 items-center">
        <FaStore className="text-xl text-primary" />
        <p>
          <h4>Magneto Developer</h4>
          <span className="block">Pune,India</span>
        </p>
      </div>
      <button className="flex items-center font-medium text-primary  gap-2">
        Apply NOW <IoIosArrowRoundForward className="text-3xl" />
      </button>
    </Link>
  );
};

const Opening = () => {
  return (
    <div className="px-2 md:px-4 xl:px-container pt-top pb-10">
      <Header
        title="Curront openings"
        subTitle="Do you think you are a good fit? Apply now. We would love to meet you."
      />
      <OpeningCard />
      <OpeningCard />
      <OpeningCard />
      <OpeningCard />
    </div>
  );
};

export default Opening;
