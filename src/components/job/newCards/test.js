import { IoIosArrowRoundForward } from "react-icons/io";
import GradientBtn from "../button/Gradient";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

// function Image({ image }) {
//   return (
//     <section className="absolute inset-0 flex justify-center md:justify-normal items-center md:-translate-x-[20%]">
//       <div>
//         <img
//           src={image}
//           alt=""
//           className="rounded-md h-[190px] sm:h-[250px] md:translate-y-0 sm:-translate-y-20 -translate-y-16 md:h-[280px] w-auto bg-cover rounded-br-[10rem]"
//         />
//       </div>
//     </section>
//   );
// }

const images = [
  "https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d64cae62095c01ed6a_offsite05.webp",
  "https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d64cae62095c01ed6a_offsite05.webp",
  "https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d64cae62095c01ed6a_offsite05.webp",
];
const SmallImageGallery = ({ images }) => {
  return (
    <div className="md:hidden flex gap-8">
      {images.map((image, idx) => {
        return (
          <div key={idx} className="h-[12rem w-12rem rounded-md">
            <img src={image} className="object-cover rounded-md" />
          </div>
        );
      })}
    </div>
  );
};

const ImageGallery = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex gap-8 items-end justify-end">
          <div>
            <img
              className="md:max-w-[7rem] xl:max-w-[10rem] xxl:max-w-[12rem] rounded-xl"
              src="https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d64cae62095c01ed6a_offsite05.webp"
            />
          </div>
          <div>
            <img
              className="md:max-w-[9rem] xl:max-w-[12rem] xxl:max-w-[14rem] rounded-xl"
              src="https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d54750456d61456a83_offsite02.webp"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <img
            className="rounded-md"
            src="https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d6651dbeaadfd8d729_offsite04-p-500.webp"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex-[0.6]">
          <img
            className="md:max-w-[9rem] xl:max-w-[10rem] xxl:max-w-[12rem] h-full bg-cover rounded-xl"
            src="https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d6cf25ca83c7aa46f6_offsite03-p-500.webp"
          />
        </div>
        <div className="flex-1">
          <img
            className=" md:max-h-[20rem] xl:max-h-none md:max-w-[9rem] xl:max-w-[10rem] xxl:max-w-[12rem] h-full object-cover rounded-xl"
            src="https://assets-global.website-files.com/61d72a2cda50bc679e28766b/649ea6d631d45fe4e0d2aa2c_offsite01.webp"
          />
        </div>
      </div>
    </div>
  );
};

const HeroSection = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className=" sm:pt-top mb-[8rem] flex flex-col">
      <section className="flex flex-col md:flex-row  gap-16 mt-10 px-2 md:px-4 xl:px-container">
        <div className="flex-1 flex flex-col justify-center  mb-[7rem] md:mb-0 md:pb-[3rem]">
          {" "}
          <header className="">
            <GradientBtn label={data?.subTitle} />
            <h3 className="text-transparent font-bold text-6xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text my-4">
              {data?.title}
            </h3>
          </header>
          <p className="py-5 text-lg">
            {data.description}
            <Link smooth to="/career#careerOpening">
              <button className="mt-[2rem] flex items-center font-bold text-primary  gap-2">
                {data.btn}
                <IoIosArrowRoundForward className="text-3xl" />
              </button>
            </Link>
          </p>
        </div>

        {/* <div data-aos="flip-right" className="flex-1 flex justify-end">
          <div className="bg bg-backgroundTransSecondary w-full h-[100px] sm:h-[150px] md:h-auto md:w-[80%] xl:w-[70%] relative">
            <Image image={data?.image} />
          </div>
        </div> */}
        <div className="flex-1 hidden md:flex justify-end">
          <ImageGallery />
        </div>
        <SmallImageGallery images={images} />
      </section>
    </div>
  );
};

export default HeroSection;
