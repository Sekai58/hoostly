import React from "react";
import Values from "../components/job/Values";
import ParallaxGallery from "../components/testpage/ScrollEffect";
import OurValues from "../components/job/newCards/OurValues";
import OurBenefits from "../components/job/newCards/OurBenefits";
import { careerBenefits } from "../assets/data/benefitsData";
import OpenRoles from "../components/job/newCards/OpenRoles";
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
