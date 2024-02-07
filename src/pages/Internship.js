import React from "react";
import HeroSection from "../components/job/HeroSection";
import Intro from "../components/job/InternIntro";
import Benefits from "../components/job/Benefits";
import Faq from "../components/job/Faq";
import Opening from "../components/job/InternOpening";
import Application from "../components/job/Application";
import { internApplicationData } from "../assets/data/applicationData";
import { faqData } from "../assets/data/faqData";
import { internBenefits } from "../assets/data/benefitsData";
import { internHeroData } from "../assets/data/heroData";

const Internship = () => {
  return (
    <>
      <HeroSection data={internHeroData} />
      <Intro />
      <Application data={internApplicationData} />
      <Benefits data={internBenefits} />
      <Opening />
      <Faq data={faqData} />
    </>
  );
};

export default Internship;
