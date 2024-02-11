import React, { useEffect } from "react";
import Header from "../Header";
import AOS from "aos";
import "aos/dist/aos.css";

const BenefitCard = ({ icon, title, content, delay }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-delay={delay}
      className="flex flex-col gap-5 max-w-[16rem] "
    >
      <div className=""></div>
      {icon}
      <p className="font-bold text-2xl">{title}</p>
      <p className="text-base text-textLight">{content}</p>
    </div>
  );
};

const Benefits = ({ data }) => {
  return (
    <div className="bg-bgSecondary py-[4rem]">
      <Header
        title="Our Benefits"
        subTitle="We provide more than a learning experience at Leapfrog. Our
          internships are highly engaging, results-oriented and lets you
          experience the Leapfrog difference first-hand."
      />
      <section className="px-2 md:px-4 xl:px-container flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-12 ">
          {data?.map((item, idx) => {
            return (
              <BenefitCard
                key={idx}
                icon={item.icon}
                title={item.title}
                content={item.content}
                delay={(idx + 1) * 100}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
