import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OpenRoles = ({ openings }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section
      id="careerOpening"
      data-aos="zoom-in"
      className="px-2 md:px-4 xl:px-[12rem]  flex  justify-center mb-[8rem] pt-[8rem]"
    >
      <div className="w-full xxl:w-[60vw] border border-lightGray rounded-2xl p-16 bg-gradient-to-r from-[#ffefba] to-[#ffffff] ">
        <div className="header">
          <h3 className="pb-2 flex justify-start text-transparent font-bold text-5xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text overflow-visible">
            Open Roles
          </h3>
          <p className="w-full flex justify-start mb-10">
            <span className="max-w-[44rem] text-xl text-textLight">
              Help us empower the Product Led Growth Economy
            </span>
          </p>
        </div>
        {openings.map((opening, idx) => {
          return (
            <Link
              to={`/opening/${opening.path}`}
              key={idx}
              className={`w-full flex py-4 items-center justify-between ${
                idx !== openings.length - 1 ? "border-b" : ""
              } border-lightGray`}
            >
              <div className="flex flex-col">
                <p className="font-semibold text-xl">{opening.title}</p>
                <p className=" text-textLight">{opening.location}</p>
              </div>
              <div className="flex items-center bg-primary text-white rounded-md">
                <IoIosArrowRoundForward className="text-5xl p-2" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OpenRoles;
