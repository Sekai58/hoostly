import { IoIosArrowRoundForward } from "react-icons/io";
import GradientBtn from "../button/Gradient";

function Image({ image }) {
  return (
    <section className="absolute inset-0 flex justify-center md:justify-normal items-center md:-translate-x-[20%]">
      <div>
        <img
          src={image}
          alt=""
          className="rounded-md h-[190px] sm:h-[250px] md:translate-y-0 sm:-translate-y-20 -translate-y-16 md:h-[280px] w-auto bg-cover rounded-br-[10rem]"
        />
      </div>
    </section>
  );
}

const HeroSection = ({ data }) => {
  return (
    <div className=" pt-top mb-[8rem] flex flex-col">
      <section className="flex flex-col md:flex-row  gap-16 mt-10">
        <div className="flex-1 pl-2 md:pl-4 xl:pl-container mb-[7rem] md:mb-0 md:pb-[3rem]">
          {" "}
          <header className="">
            <GradientBtn label={data?.subTitle} />
            <h3 className="text-transparent font-bold text-6xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text my-4">
              {data?.title}
            </h3>
          </header>
          <p className="py-5 text-lg">
            {data.description}
            <button className="mt-[2rem] flex items-center font-bold text-primary  gap-2">
              {data.btn}
              <IoIosArrowRoundForward className="text-3xl" />
            </button>
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="bg bg-backgroundTransSecondary w-full h-[100px] sm:h-[150px] md:h-auto md:w-[80%] xl:w-[70%] relative">
            <Image image={data?.image} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
