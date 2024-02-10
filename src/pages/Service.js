import React from "react";
import HeroSection from "../components/service/HeroSection";
import ImageSlider from "../components/service/Slider";
import HeroBottom from "../components/service/HeroBottom";
import ScrollParallaxExample from "../components/service/ParallaxCards";
import ServiceContact from "../components/service/Contact";

const Service = () => {
  return (
    <div>
      <HeroSection />
      <HeroBottom />
      <ImageSlider />
      <HeroBottom reverse={true} />
      <ScrollParallaxExample />
      <ServiceContact />
    </div>
  );
};

export default Service;
