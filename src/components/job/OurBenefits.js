import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BenefitCard = ({ delay, content, icon }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex  items-center border-b border-lightGray py-5"
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p>
          <span className="text-lg">{content}</span>
        </p>
      </div>
    </div>
  );
};

const OurBenefits = ({ data }) => {
  return (
    <section className="px-2 md:px-4 xl:px-container flex justify-center mb-[8rem] mt-[5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xxl:w-[60vw]">
        <div className="flex flex-col gap-4">
          <div className="header">
            <h3 className="pb-2 flex justify-start text-transparent font-bold text-5xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text overflow-visible">
              Our Benefits
            </h3>
            <p className="w-full flex justify-start mb-10">
              <span className="max-w-[44rem] text-xl text-textLight">
                People first, always.
              </span>
            </p>
          </div>
        </div>

        <div>
          {data.map((value, idx) => {
            return (
              <BenefitCard
                key={idx}
                icon={value.icon}
                content={value.content}
                delay={idx * 150}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurBenefits;
