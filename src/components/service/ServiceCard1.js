import { Link } from "react-router-dom";
import { serviceData1 } from "../../assets/data/serviceData";
import { MdKeyboardArrowRight } from "react-icons/md";

const ServiceCard = ({ reverse, image, title, description, link }) => {
  return (
    <div
      className={`flex sm:justify-between flex-col  ${
        reverse ? "sm:flex-row-reverse" : "flex-col sm:flex-row"
      } gap-10 sm:mb-[4rem]`}
    >
      <div className={`flex-1 flex ${reverse ? "sm:justify-end" : ""}`}>
        <img
          src={image}
          className="w-full h-full object-cover  rounded-xl"
          alt="service"
        />
      </div>

      <div
        className={`flex-1 flex items-center ${
          reverse ? "" : "sm:justify-end"
        }`}
      >
        <div className="flex flex-col gap-6">
          {" "}
          <h4 className="text-2xl font-bold">{title}</h4>
          <p>{description}</p>
          <Link
            to="#"
            className="text-primary font-semibold flex items-center gap-1"
          >
            {link} <MdKeyboardArrowRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceCard1 = () => {
  return (
    <div className="w-full xxl:max-w-[60vw]">
      {serviceData1.map((service, idx) => {
        return (
          <ServiceCard
            key={idx}
            reverse={(idx + 1) % 2 === 0 ? true : false}
            image={service.image}
            title={service.serviceTitle}
            description={service.serviceDescription}
            link={service.link}
          />
        );
      })}
    </div>
  );
};

export default ServiceCard1;
