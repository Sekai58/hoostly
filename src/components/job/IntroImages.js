import jobImg1 from "../../assets/images/jobImg1.png";
const ImageCard = ({ image, title, className }) => {
  return (
    <div
      className={`border rounded-md rounded-br-[3rem] bg-white shadow-lg border-grayLine overflow-hidden ${className}`}
    >
      <div className="overflow-hidden w-[5rem] h-[4rem] sm:w-[12rem] sm:h-[10rem] bg-red-400">
        <img
          src={image}
          className="w-[5rem] h-[4rem] sm:w-[12rem] sm:h-[10rem] bg-cover object-cover hover:rotate-12 hover:scale-125"
          alt="job opening"
        />
      </div>

      <p className="text-xl font-medium pt-4 px-2">{title}</p>
      <p className="text-base text-textLight px-2">{title}</p>
    </div>
  );
};

const IntroImages = () => {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex gap-16 sm:gap-40">
        <ImageCard image={jobImg1} title="React" className="rotate-[25deg]" />
        <ImageCard image={jobImg1} title="React" className="-rotate-[25deg]" />
      </div>

      <div className="flex justify-center">
        <ImageCard image={jobImg1} title="React" />
      </div>
    </section>
  );
};

export default IntroImages;
