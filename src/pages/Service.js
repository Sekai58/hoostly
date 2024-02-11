import React from "react";
import HeroSection from "../components/service/HeroSection";
import ImageSlider from "../components/service/Slider";
import HeroBottom from "../components/service/HeroBottom";
import ScrollParallaxExample from "../components/service/ParallaxCards";
import ServiceContact from "../components/service/Contact";
import ServiceCard1 from "../components/service/ServiceCard1";
import ServiceCard2 from "../components/service/ServiceCard2";
import ServiceCard3 from "../components/service/ServiceCard3";

const Service = () => {
  return (
    <div>
      <HeroSection />
      <HeroBottom />
      <ImageSlider />
      <HeroBottom reverse={true} />
      <ServiceCard2 />
      <ServiceCard1 />
      <ServiceCard3 />
      <ScrollParallaxExample />
      <ServiceContact />
    </div>
  );
};

export default Service;
