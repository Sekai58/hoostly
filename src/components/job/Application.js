// import React from "react";
import Header from "./Header";
import { BsCameraVideoFill } from "react-icons/bs";
import AosInitializer from "../AosInitializer/AosInitializer";

const Application = ({ data }) => {
  return (
    <>
      <AosInitializer />
      <Header
        title="Your Application Journey"
        subTitle="Steps to apply internship"
      />
      <section className="px-2 md:px-4 xl:px-container flex flex-col items-center pb-[4rem]">
        <table className="max-w-[31rem]">
          <tbody className="p-0 m-0">
            {data?.map((internData, idx) => {
              return (
                <tr key={idx} className="p-0 m-0">
                  <td className="uppercase pr-5 border-r whitespace-nowrap text-gradientStart font-bold text-xl align-top">
                    <span className="flex items-center gap-2">
                      <BsCameraVideoFill className=" text-primary text-lg" />
                      {internData.step}
                    </span>
                  </td>
                  <td
                    className={`font-bold text-2xl pl-5 text-gradientStart ${
                      idx !== data.length - 1 ? "pb-5" : ""
                    }`}
                  >
                    {internData.title}
                    <span className="font-normal block text-base text-textLight">
                      {internData.details}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Application;
