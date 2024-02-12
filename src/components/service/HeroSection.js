import "aos/dist/aos.css";
import GradientButton from "../button/GradientBtn";
import PrimaryBtn from "../button/PrimaryBtn";

function Image() {
  return (
    <section className="flex justify-center items-center ">
      <div>
        <img
          src="https://www.imagelighteditor.com/img/bg-after.jpg"
          alt=""
          className="rounded-md h-[190px] sm:h-[250px]"
        />
      </div>
    </section>
  );
}

const HeroSection = ({ data }) => {
  return (
    <div className="px-2 md:px-4 xl:px-container sm:pt-top mb-[8rem] flex flex-col bg-bgSecondary">
      <section className="flex flex-col md:flex-row  gap-16 mt-10">
        <div className="flex-1  md:mb-0 md:pb-[3rem]">
          {" "}
          <header className="">
            <h3 className="text-transparent font-bold text-6xl bg-gradient-to-r from-gradientStart to-gradientEnd bg-clip-text my-4">
              The Leading Digital Business Card Platform
            </h3>
          </header>
          <p className="py-5 text-lg">
            Loved by millions worldwide, HiHello helps everyone—from individuals
            to enterprises—turn each customer touchpoint into a branded,
            interactive, and measurable opportunity.
            <div className=" flex gap-3 items-center mt-4">
              <GradientButton label="Sign up for free" />
              <PrimaryBtn label="Contact Sales" />
            </div>
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <Image />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
