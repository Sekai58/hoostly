import React from "react";
import HeroSection from "../components/job/HeroSection";
import Intro from "../components/job/newCards/InternIntro";
import Benefits from "../components/job/newCards/Benefits";
import Faq from "../components/job/newCards/Faq";
// import Opening from "../components/job/InternOpening";
import Application from "../components/job/newCards/Application";
import OurValues from "../components/job/newCards/OurValues";
import OpenRoles from "../components/job/newCards/OpenRoles";
import { openingData } from "../assets/data/openingData";
import { ourValuesData } from "../assets/data/ourValuesData";
import { internApplicationData } from "../assets/data/applicationData";
import { faqData } from "../assets/data/faqData";
import { internBenefits } from "../assets/data/benefitsData";
import { internHeroData } from "../assets/data/heroData";

const Internship = () => {
  return (
    <>
      <HeroSection data={internHeroData} />
      <Intro />
      <OurValues ourValuesData={ourValuesData} />
      <Benefits data={internBenefits} />
      <OpenRoles openings={openingData} />
      <Application data={internApplicationData} />
      {/* <Opening /> */}
      <Faq data={faqData} />
    </>
  );
};

export default Internship;
