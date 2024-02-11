import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceCard3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="px-2 md:px-4 xl:px-container xxl:flex xxl:justify-center mb-[8rem]">
      <div className="xxl:max-w-[60vw]">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8">
            <div className="flex-1 bg-[#ffb907] rounded-xl p-5 relative">
              <img
                data-aos="zoom-in"
                src="https://static.vecteezy.com/system/resources/previews/027/725/830/non_2x/camera-focus-camera-viewfinder-can-use-for-simple-framework-text-quote-or-graphic-design-element-format-png.png"
                alt=""
              />
              <p className=" absolute inset-0 flex justify-center items-center text-white text-2xl">
                AI-powered paper card transcription
              </p>
            </div>
            <div className="flex-[0.7] flex items-center bg-[#ffeab4] rounded-xl pl-6">
              <img
                alt=""
                src="https://assets-global.website-files.com/5e26302469ca1d0fbae4a601/6501735bf255dded9f367fc9_HiHello%20paper%20business%20card%200-p-500.png"
              />
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-1 bg-[#fff8e6] rounded-xl p-7">
              <p className="text-xl font-medium">
                Use HiHello’s built-in, AI-powered business card scanner to
                transcribe your paper contact into a digital connection
              </p>
            </div>
            <div className="flex-[0.6]  bg-[#fff8e6] rounded-xl p-7">
              <p></p>
              <p className="text-lg font-medium">
                Ineligible card scans will undergo human verification.
              </p>
              <button className=" flex items-center font-semibold  gap-2">
                Learn more about digital business cards
                <IoIosArrowRoundForward className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard3;