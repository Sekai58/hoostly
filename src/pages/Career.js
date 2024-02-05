import Application from "../components/job/Application";
import Opening from "../components/job/CareerOpening";
import Values from "../components/job/Values";
import Benefits from "../components/job/Benefits";
import HeroSection from "../components/job/HeroSection";

const Career = () => {
  return (
    <div>
      <HeroSection />
      <Values />
      <Application />
      <Benefits />
      <Opening />
    </div>
  );
};

export default Career;
