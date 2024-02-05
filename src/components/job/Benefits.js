import React from "react";
import Header from "./Header";
import { MdOutlinePaid } from "react-icons/md";

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

const Benefits = () => {
  return (
    <div className="bg-[#f7f8fb]">
      <Header
        title="All work and all play"
        subTitle="We provide more than a learning experience at Leapfrog. Our
          internships are highly engaging, results-oriented and lets you
          experience the Leapfrog difference first-hand."
      />
      <section className="px-container flex flex-col items-center">
        {/* <p className="flex flex-col items-center">
          We provide more than a learning experience at Leapfrog. Our
          internships are highly engaging, results-oriented and lets you
          experience the Leapfrog difference first-hand.
        </p> */}

        <div className="grid grid-cols-4 py-10 gap-16">
          <BenefitCard
            icon={<MdOutlinePaid className="text-3xl text-primary" />}
            title="Paid Internship"
            content="Our internships are fully paid throughout the internship tenure"
          />
          <BenefitCard
            icon={<MdOutlinePaid className="text-3xl text-primary" />}
            title="Paid Internship"
            content="Our internships are fully paid throughout the internship tenure"
          />
          <BenefitCard
            icon={<MdOutlinePaid className="text-3xl text-primary" />}
            title="Paid Internship"
            content="Our internships are fully paid throughout the internship tenure"
          />
          <BenefitCard
            icon={<MdOutlinePaid className="text-3xl text-primary" />}
            title="Paid Internship"
            content="Our internships are fully paid throughout the internship tenure"
          />
        </div>
      </section>
    </div>
  );
};

export default Benefits;
