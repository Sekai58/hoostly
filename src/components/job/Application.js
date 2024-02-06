import React from "react";
import Header from "./Header";
import { BsCameraVideoFill } from "react-icons/bs";

const Application = ({ data }) => {
  return (
    <>
      <Header
        title="Your Application Journey"
        subTitle="Steps to apply internship"
      />
      <section className="px-container flex flex-col items-center pb-[4rem]">
        {/* <p className="mt-1 mb-10">Steps to apply internship</p> */}
        <table className="max-w-[31rem]">
          <tbody className="p-0 m-0">
            {data?.map((internData, idx) => {
              return (
                <tr key={idx} className="p-0 m-0">
                  <td className="font-medium uppercase pr-5 border-r whitespace-nowrap">
                    <span className="flex items-end gap-2">
                      <BsCameraVideoFill className=" text-primary text-lg animate-slow-bounce " />
                      {internData.step}
                    </span>
                  </td>
                  <td
                    className={`font-semibold text-lg pl-5 text-primary ${
                      idx !== data.length - 1 ? "pb-5" : ""
                    }`}
                  >
                    {internData.title}
                    <span className="font-normal block text-sm text-[#232323]">
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
