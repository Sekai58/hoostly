import React from "react";
import Header from "./Header";
import { CiUnlock } from "react-icons/ci";

const ValueCard = () => {
  return (
    <div className="place-self-center flex flex-col items-center gap-5">
      <CiUnlock className="text-3xl" />
      <p className="text-center">Customer Focus</p>
      <p className="text-center">Go the extra mile to make customers smile</p>
    </div>
  );
};

const Values = () => {
  return (
    <>
      <Header
        title="Values that shape us"
        subTitle="Our values are not just words on paper – they're the beating heart of who we are. They define our vibrant culture and guide us in everything we do."
      />
      <div className="px-container grid grid-cols-4 gap-10 ">
        <ValueCard />
        <ValueCard />
        <ValueCard />
        <ValueCard />
        <ValueCard />
      </div>
    </>
  );
};

export default Values;
