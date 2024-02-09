import React from "react";
import Values from "../components/job/Values";
import ParallaxGallery from "../components/testpage/ScrollEffect";
import OurValues from "../components/job/OurValues";
import OurBenefits from "../components/job/OurBenefits";
import { careerBenefits } from "../assets/data/benefitsData";
import OpenRoles from "../components/job/OpenRoles";
import { openingData } from "../assets/data/openingData";

const Home = () => {
  return (
    <div className="">
      <Values />
      {/* <ScrollEffect /> */}
      <ParallaxGallery />
      <OurValues />
      <OurBenefits data={careerBenefits} />
      <OpenRoles openings={openingData} />
    </div>
  );
};

export default Home;
