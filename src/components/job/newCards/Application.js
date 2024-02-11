// import React from "react";
import Header from "../Header";
import { BsCameraVideoFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Application = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="px-2 md:px-4 xl:px-container mb-[8rem]">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xxl:w-[60vw] "> */}
      <Header
        title="Application Journey"
        subTitle="What we love and stand for every day"
      />
      <section className="flex justify-center">
        <table className="max-w-[31rem]">
          <tbody className="p-0 m-0">
            {data?.map((internData, idx) => {
              return (
                <tr key={idx} className="p-0 m-0">
                  <td
                    data-aos="zoom-in-right"
                    data-aos-delay={(idx + 1) * 50}
                    className="uppercase pr-5 border-r whitespace-nowrap text-gradientStart font-bold text-xl align-top"
                  >
                    <span className="flex items-center gap-2">
                      <BsCameraVideoFill className=" text-primary text-lg" />
                      {internData.step}
                    </span>
                  </td>
                  <td
                    data-aos="zoom-in-left"
                    data-aos-delay={(idx + 1) * 50}
                    className={`font-bold text-xl sm:text-2xl pl-5 text-gradientStart ${
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
      {/* </div> */}
    </section>
  );
};

export default Application;
