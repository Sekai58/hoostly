import { IoIosArrowRoundForward } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className=" pt-top min-h-[85vh] flex flex-col">
      <section className="px-container grid grid-cols-2 gap-16 mt-10">
        <div>
          {" "}
          <header className="">
            <p className="uppercase">Internship at Hoostly</p>
            <h3 className="text-transparent font-bold text-6xl bg-gradient-to-r from-[#001510] to-[#00bf8f] bg-clip-text my-4">
              Jumpstart your career with us!
            </h3>
          </header>
          <p className="py-5 text-lg">
            Hoostly offers exciting internship opportunities that ignite your
            passion and prepare you for a successful career. Join us to gain
            hands-on experience, learn from industry experts, and unleash your
            potential. Get ready to embark on a transformative journey towards a
            bright future with Leapfrog's internships.
            <button className="mt-[2rem] flex items-center font-medium text-primary  gap-2">
              View internship <IoIosArrowRoundForward className="text-3xl" />
            </button>
          </p>
        </div>

        <div className="w-full flex justify-center items-center">
          <img
            src="https://thewatchdogonline.com/wp-content/uploads/2021/01/image.jpeg"
            alt="internship"
            className="rounded-br-[7rem] h-[350px] w-[100%] bg-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
