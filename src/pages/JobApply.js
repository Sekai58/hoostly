import React, { useState } from "react";
// import Header from "../components/job/Header";
import JobForm from "../components/form/JobForm";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import JobDescription from "../components/job/newCards/JobDescription";

const tabs = ["Job Description", "Apply"];

const capitalizeEachFirstLetter = (sentence) => {
  return sentence.replace(/\b\w/g, (match) => match.toUpperCase());
};

const JobApply = () => {
  const params = useParams();
  const jobTitle = params.id.split("-").join(" ");
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className=" px-2 md:px-4 xl:px-container flex mt-[4.5rem] mb-[8rem]">
      <div className="xxl:w-[70vw] flex flex-col items-start">
        <div className="header">
          <h3 className="pb-2  mt-[4rem] mb-[2rem] flex justify-start text-transparent font-bold text-5xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text overflow-visible">
            Apply For {capitalizeEachFirstLetter(jobTitle)}
          </h3>
        </div>
        <section className="">
          <nav className="mb-[2rem]">
            <ul className="flex gap-5">
              {tabs.map((item) => (
                <li
                  key={item}
                  className={
                    item === selectedTab
                      ? "selected cursor-pointer"
                      : "cursor-pointer"
                  }
                  onClick={() => setSelectedTab(item)}
                >
                  {item}
                  {item === selectedTab ? (
                    <motion.div
                      className="underline h-1 bg-primary"
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </section>
        {selectedTab === tabs[1] ? <JobForm /> : <JobDescription />}
      </div>
    </div>
  );
};

export default JobApply;
