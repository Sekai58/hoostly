import React, { useEffect } from "react";
import Header from "./Header";
import { CiUnlock } from "react-icons/ci";
import { valuesData } from "../../assets/data/valuesData";
import AOS from "aos";
import "aos/dist/aos.css";

const ValueCard = ({ delay }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="flip-right"
      data-aos-delay={delay}
      className="max-w-[16rem] flex flex-col items-center gap-2"
    >
      <CiUnlock className="text-6xl text-primary font-bold mb-6 bg-blue-100 rounded-full p-1" />
      <p className="text-center font-bold text-2xl">Customer Focus</p>
      <p className="text-center text-textLight">
        Go the extra mile to make customers smile
      </p>
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
            return <ValueCard key={idx} delay={idx * 100} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Values;
