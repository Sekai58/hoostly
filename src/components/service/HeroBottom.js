import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/images/service.png";
import img2 from "../../assets/images/service1.png";
import { useEffect } from "react";
const ImageGallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="flex-1 w-full flex items-center justify-center ">
      <div
        data-aos="fade-left"
        className={` rounded-xl  bg-white shadow-gray-500 shadow-lg  overflow-hidden translate-x-2`}
      >
        <img
          className="h-[25rem] w-[12rem] object-cover rounded-xl "
          src={img1}
          alt="service 1"
        />
      </div>
      <div
        className={` rounded-xl  bg-white shadow-gray-500 shadow-lg  overflow-hidden relative z-[10]`}
      >
        <img
          className="h-[30rem] w-[11rem] object-cover rounded-xl "
          src="https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg"
          alt="service2"
        />
      </div>
      <div
        data-aos="fade-right"
        className={` rounded-xl  bg-white shadow-gray-500 shadow-lg  overflow-hidden -translate-x-2`}
      >
        <img
          className="h-[20rem] w-[13rem] object-cover rounded-xl "
          src={img2}
          alt="service3"
        />
      </div>
    </div>
  );
};
const HeroBottom = ({ reverse, data }) => {
  return (
    <div
      className={`flex flex-col gap-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } px-2 md:px-4 xl:px-container pb-[8rem]`}
    >
      <ImageGallery />
      <div className="flex-1 flex items-center justify-center  ">
        <div className="flex flex-col gap-5 border rounded-xl p-8 bg-gradient-to-br from-[#d3cce3] to-[#ffffff] max-w-[30rem] ">
          <h4 className="text-2xl font-semibold">
            The best digital business card
          </h4>

          <p className={`flex items-center `}>
            Create a digital business card that includes your brand’s most
            important information. With advanced options for design, sharing,
            analytics, integrations and more, HiHello can generate more
            opportunities and insights from your business interactions.
          </p>
          <button className=" flex items-center font-semibold  gap-2">
            Learn more about digital business cards
            <IoIosArrowRoundForward className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
