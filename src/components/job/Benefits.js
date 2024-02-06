import React from "react";
import Header from "./Header";

const BenefitCard = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className=""></div>
      {icon}
      <p className="font-medium text-xl">{title}</p>
      <p>{content}</p>
    </div>
  );
};

const Benefits = ({ data }) => {
  return (
    <div className="bg-[#f7f8fb]">
      <Header
        title="All work and all play"
        subTitle="We provide more than a learning experience at Leapfrog. Our
          internships are highly engaging, results-oriented and lets you
          experience the Leapfrog difference first-hand."
      />
      <section className="px-2 md:px-4 xl:px-container flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-16">
          {data?.map((item, idx) => {
            return (
              <BenefitCard
                key={idx}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Benefits;
