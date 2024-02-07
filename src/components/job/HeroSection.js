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
    <section className="absolute -top-[70%]  md:top-[12%] left-[10px] md:-left-[20%] flex justify-center pb-16">
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
          className="rounded-md h-[200px] sm:h-[250px] md:h-[280px] w-auto bg-cover rounded-br-[10rem]"
        />
      </motion.div>
    </section>
  );
}

const HeroSection = ({ data }) => {
  return (
    <div className=" pt-top mb-[8rem] flex flex-col">
      <section className="flex flex-col md:flex-row  gap-16 mt-10">
        <div className="flex-1 pl-2 md:pl-4 xl:pl-container mb-[7rem] md:mb-0">
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

        <div className="flex-1 flex justify-end">
          <div className="bg-blue-200 w-full h-[200px] md:h-auto md:w-[80%] xl:w-[70%] relative">
            <Image image={data?.image} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
