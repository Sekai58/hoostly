import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const galleryImages = [
  "https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
  "https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
  "https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
];

var settings = {
  dots: true,
  // centerMode: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 200,
  cssEase: "linear",
  arrows: false,
};

const ImageSlider = () => {
  return (
    <section className="px-2 md:px-4 xl:px-container mb-[8rem]">
      <Slider {...settings}>
        {galleryImages.map((data, idx) => {
          return (
            <div
              key={idx}
              className={`w-full h-[14rem] xl:h-[18rem] relative text-white`}
            >
              <Link to="#">
                <img
                  src={data}
                  className="h-full w-full object-cover rounded-xl"
                  alt="banner"
                />
                <div
                  className={`absolute top-0 left-0 bg-gradient-to-r from-[rgba(0,142,68,0.8)] via-[rgba(0,142,68,0.6)] to-[rgba(0,142,68,0)] w-full h-full rounded-xl p-5`}
                >
                  <h4 className="text-xl md:text-2xl font-semibold py-5">
                    Title
                  </h4>
                  <span className="text-md md:text-xl">
                    {" "}
                    Begin your journey by submitting your application online{" "}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default ImageSlider;
