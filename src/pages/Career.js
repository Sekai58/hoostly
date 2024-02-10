import Application from "../components/job/newCards/Application";
import HeroSection from "../components/job/HeroSection";
import { careerBenefits } from "../assets/data/benefitsData";
import { careerApplicationData } from "../assets/data/applicationData";
import { careerHeroData } from "../assets/data/heroData";
import Intro from "../components/job/newCards/CareerIntro";
import ImageSlider from "../components/job/Slider";
import Faq from "../components/job/newCards/Faq";
import { faqData } from "../assets/data/faqData";
import OurValues from "../components/job/newCards/OurValues";
import { ourValuesData } from "../assets/data/ourValuesData";
// import OurBenefits from "../components/job/newCards/OurBenefits";
import OpenRoles from "../components/job/newCards/OpenRoles";
import { openingData } from "../assets/data/openingData";
import Benefits from "../components/job/newCards/Benefits";

const Career = () => {
  return (
    <div>
      <HeroSection data={careerHeroData} />
      <Intro />
      <OurValues ourValuesData={ourValuesData} />
      <Benefits data={careerBenefits} />
      {/* <OurBenefits data={careerBenefits} /> */}
      <OpenRoles openings={openingData} />
      <Application data={careerApplicationData} />
      <ImageSlider />
      <Faq data={faqData} />
    </div>
  );
};

export default Career;
