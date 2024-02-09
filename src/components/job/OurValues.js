import { ourValuesData } from "../../assets/data/ourValuesData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const leftcolData = ourValuesData.slice(0, ourValuesData.length / 2);
const rightcolData = ourValuesData.slice(
  ourValuesData.length / 2,
  ourValuesData.length
);

const ValueCard = ({ valueTitle, icon, valueDescription }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="flip-right"
      className="flex flex-col gap-5 border rounded-xl p-3 bg-gradient-to-br from-[#d3cce3] to-[#ffffff]"
    >
      {icon}
      <h4 className="text-2xl font-semibold">{valueTitle}</h4>

      {valueDescription.map((description, idx) => {
        return (
          <p
            key={idx}
            className={`flex pb-4 items-center ${
              idx !== valueDescription.length - 1 ? "border-b" : ""
            } border-lightGray`}
          >
            {description}
          </p>
        );
      })}
    </div>
  );
};

const OurValues = () => {
  return (
    <section className="px-2 md:px-4 xl:px-container flex justify-center pb-[4rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xxl:w-[60vw]">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="pb-2 flex justify-start text-transparent font-bold text-5xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text overflow-visible">
              Our values
            </h3>
            <p className="w-full flex justify-start mb-10">
              <span className="max-w-[44rem] text-xl text-textLight">
                What we love and stand for every day
              </span>
            </p>
          </div>

          {leftcolData.map((value, idx) => {
            return (
              <ValueCard
                key={idx}
                valueTitle={value.valueTitle}
                icon={value.icon}
                valueDescription={value.valueDescription}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          {rightcolData.map((value, idx) => {
            return (
              <ValueCard
                key={idx}
                valueTitle={value.valueTitle}
                icon={value.icon}
                valueDescription={value.valueDescription}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
