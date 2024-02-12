import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
import SliderCard from "./SliderCard";

const galleryImages = [
  "https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
  "https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
  "https://faradayshielding.com.au/wp-content/uploads/2021/05/Image_039.jpg",
];

var settings = {
  dots: false,
  centerMode: true,
  infinite: true,
  slidesToShow: 2,
  autoplay: true,
  speed: 2000,
  cssEase: "linear",
  arrows: false,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ImageSlider = () => {
  return (
    <section className="px-2 md:px-4 xl:px-container mb-[8rem] flex justify-center ">
      <div className=" max-w-[80vw] md:max-w-[50vw]  bg-gradient-to-tr  from-[#44ff9b31] via-[#8c44ff2e] to-[#ecff7047] ">
        <div className="w-full  bg-white/30 backdrop-blur-xl backdrop-brightness-110 py-10 ">
          <Slider {...settings}>
            {galleryImages.map((data, idx) => {
              return (
                <div key={idx} className={`w-full h-[14rem] xl:h-[16rem]`}>
                  <SliderCard />
                  {/* <Link to="#">
                    <div className="px-[3rem] py-[5rem] flex items-center max-h-[20rem] ">
                      <img
                        src={data}
                        className="md:h-[20rem] w-full object-cover rounded-xl"
                        alt="banner"
                      />
                    </div>
                  </Link> */}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
