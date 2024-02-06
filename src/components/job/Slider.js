import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const galleryImages = [1, 2, 3];
var settings = {
  dots: true,
  // centerMode: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 200,
  cssEase: "linear",
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        // centerMode: true,
      },
    },
  ],
};

const ImageSlider = () => {
  return (
    <section className="pt-top pb-10">
      <Slider {...settings}>
        {galleryImages.map((data, idx) => {
          return (
            <div
              key={idx}
              className={`w-full max-h-[500px] relative text-white`}
            >
              <Link to="#">
                <img
                  src="https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg"
                  className="h-full w-full object-cover"
                  alt="gallery"
                />
                <div
                  className={`absolute top-0 left-0  w-full h-full rounded-xl p-5`}
                ></div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default ImageSlider;
