import { IoIosArrowRoundForward } from "react-icons/io";
import GradientBtn from "../button/Gradient";

const HeroSection = ({ data }) => {
  return (
    <div className=" pt-top min-h-[85vh] flex flex-col">
      <section className="px-container grid grid-cols-2 gap-16 mt-10">
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
          <img
            src={data?.image}
            alt="internship"
            className="rounded-br-[7rem] h-[350px] w-[100%] bg-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
