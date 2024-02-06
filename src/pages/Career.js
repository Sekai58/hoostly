import Application from "../components/job/Application";
import Opening from "../components/job/CareerOpening";
import Values from "../components/job/Values";
import Benefits from "../components/job/Benefits";
import HeroSection from "../components/job/HeroSection";
import { careerBenefits } from "../assets/data/benefitsData";
import { careerApplicationData } from "../assets/data/applicationData";
import { careerHeroData } from "../assets/data/heroData";
import Intro from "../components/job/CareerIntro";
import ImageSlider from "../components/job/Slider";

const Career = () => {
  return (
    <div>
      <HeroSection data={careerHeroData} />
      <Intro />
      <Application data={careerApplicationData} />
      <Benefits data={careerBenefits} />
      <Opening />
      <Values />
      <ImageSlider />
    </div>
  );
};

export default Career;
