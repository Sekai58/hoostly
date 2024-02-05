import React from "react";
import HeroSection from "../components/job/HeroSection";
import Intro from "../components/job/InternIntro";
import Benefits from "../components/job/Benefits";
import Faq from "../components/job/Faq";
import Opening from "../components/job/InternOpening";
import Novice from "../components/job/Novice";
import Application from "../components/job/Application";
import { internApplicationData } from "../assets/data/applicationData";

const Internship = () => {
  return (
    <>
      <HeroSection />
      <Intro />
      <Application data={internApplicationData} />
      <Benefits />
      <Novice />
      <Opening />
      <Faq />
    </>
  );
};

export default Internship;
