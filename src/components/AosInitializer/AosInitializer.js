import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1100,
    });
  }, []); // Run only once on component mount

  return null; // This component doesn't render anything in the DOM
};

export default AosInitializer;
