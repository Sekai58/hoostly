import { IoIosArrowRoundForward } from "react-icons/io";
import GradientBtn from "../button/Gradient";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

function Image({ image }) {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isInView, setIsInView] = useState(false);
  const [ref, inView] = useInView();

  return (
    <section className="w-full flex justify-center pb-16">
      <motion.div
        ref={ref}
        className="w-full"
        initial={false}
        animate={
          isLoaded && inView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        // onViewportEnter={() => setIsInView(true)}
      >
        <img
          src={image}
          alt=""
          onLoad={() => setIsLoaded(true)}
          className="rounded-xl h-[350px] w-[100%] bg-cover"
        />
      </motion.div>
    </section>
  );
}

const HeroSection = ({ data }) => {
  return (
    <div className=" pt-top min-h-[85vh] flex flex-col">
      <section className="px-2 md:px-4 xl:px-container grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
        <div>
          {" "}
          <header className="">
            <GradientBtn label={data?.subTitle} />
            <h3 className="text-transparent font-bold text-6xl bg-gradient-to-r from-[#001510] to-[#00bf8f] bg-clip-text my-4">
              {data?.title}
            </h3>
          </header>
          <p className="py-5 text-lg">
            {data.description}
            <button className="mt-[2rem] flex items-center font-medium text-primary  gap-2">
              {data.btn}
              <IoIosArrowRoundForward className="text-3xl" />
            </button>
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          {/* <img
            src={data?.image}
            alt="internship"
            className="rounded-br-[7rem] h-[350px] w-[100%] bg-cover"
          /> */}
          <Image image={data?.image} />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
