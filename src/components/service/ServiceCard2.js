import React, { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="px-2 md:px-4 xl:px-container xxl:flex xxl:justify-center mb-[8rem]">
      <div className=" xxl:max-w-[60vw] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-md relative">
            <img
              data-aos="scale"
              className="rounded-xl"
              src="https://th.bing.com/th/id/R.a8192cf132a9089096def41228ad9273?rik=du2ssBCYE6rnhQ&riu=http%3a%2f%2fradiusblocks.com%2fwp-content%2fuploads%2f2022%2f09%2fimage-grid_2.jpg&ehk=RRAlBzs%2bnQb42FU1oz82jqvc0Aeni0dVkTMRkJPqW1k%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            />
            <p className="absolute top-8 left-5 text-white text-3xl">
              Share your brand across all channels
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex-1 flex flex-col justify-center bg-gray-400 rounded-xl p-5">
              <p className="font-medium uppercase text-primary">
                Market leader
              </p>
              <p className="text-3xl my-[1rem]">500 million</p>
              <p className="text-textLight">
                The reach of HiHello digital business cards, email signatures,
                and virtual backgrounds in the past year.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-5 justify-center bg-backgroundTransSecondary rounded-xl p-5">
              <p className="text-lg">
                Share your card with anyone using its QR, text message, email,
                link, WhatsApp, social media, Apple Watch, Apple Wallet,
                widgets, NFC, Siri, AirDrop, and more.
              </p>
              <button className=" flex items-center font-semibold  gap-2">
                Learn more about digital business cards
                <IoIosArrowRoundForward className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard2;
