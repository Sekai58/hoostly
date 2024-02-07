import React from "react";
import Header from "./Header";
import { CiUnlock } from "react-icons/ci";
import { valuesData } from "../../assets/data/valuesData";

const ValueCard = () => {
  return (
    <div className="min-w-[18rem] flex flex-col items-center gap-5">
      <CiUnlock className="text-3xl text-primary font-bold" />
      <p className="text-center">Customer Focus</p>
      <p className="text-center">Go the extra mile to make customers smile</p>
    </div>
  );
};

const Values = () => {
  return (
    <div className="pb-[5rem]">
      <Header
        title="Values that shape us"
        subTitle="Our values are not just words on paper – they're the beating heart of who we are. They define our vibrant culture and guide us in everything we do."
      />
      <section className="w-full flex justify-center">
        <div className="px-2 md:px-4 xl:px-container flex flex-wrap  gap-10 items-center justify-center ">
          {valuesData.map((value, idx) => {
            return <ValueCard key={idx} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Values;
