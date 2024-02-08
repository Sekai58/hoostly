import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Header from "./Header";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { openingData } from "../../assets/data/openingData";

const OpeningCard = ({ job, delay }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Link
      to={`/opening/${job.path}`}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex justify-between p-2 items-center border-b border-grayLine hover:bg-backgroundTransSecondary"
    >
      <div className="flex gap-2 items-center">
        {job.icon}
        <p>
          <span className="font-medium">{job.title}</span>
          <span className="block">{job.location}</span>
        </p>
      </div>
      <button className="flex items-center font-medium text-gradientStart  gap-2">
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
      {openingData.map((job, idx) => {
        return <OpeningCard key={idx} job={job} delay={idx * 150} />;
      })}
    </div>
  );
};

export default Opening;
