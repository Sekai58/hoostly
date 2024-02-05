import React from "react";
import Header from "./Header";

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
          <tbody>
            {data?.map((internData, idx) => {
              return (
                <tr key={idx}>
                  <td className="font-medium uppercase pr-5 border-r whitespace-nowrap">
                    {internData.step}
                  </td>
                  <td className="font-medium text-lg pl-5 pb-5">
                    {internData.title}
                    <span className="font-normal block text-sm">
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
