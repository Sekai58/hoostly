import React, { useEffect, useState } from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import profileImg from "../../assets/images/profile.png";

const ScrollParallaxExample = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(window.innerWidth);

  const topLeftCardPosition = {
    x:
      (window.innerWidth < 850 ? 50 : 130) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth < 850 ? 50 : 130) *
      (scrollPosition / window.innerHeight),
  };

  const bottomLeftCardPosition = {
    x:
      (window.innerWidth < 850 ? 50 : 130) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth < 850 ? -50 : -130) *
      (scrollPosition / window.innerHeight),
  };
  const topRightCardPosition = {
    x:
      (window.innerWidth < 850 ? -50 : -130) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth < 850 ? 50 : 130) *
      (scrollPosition / window.innerHeight),
  };
  const bottomRightCardPosition = {
    x:
      (window.innerWidth < 850 ? -50 : -130) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth < 850 ? -50 : -130) *
      (scrollPosition / window.innerHeight),
  };

  const translateX = [];

  return (
    <ParallaxProvider>
      <div className="px-2 sm:px-4 xl:px-container xxl:max-w[60vw] mb-[8rem]">
        <div className="h-[80vh] bg-bgSecondary">
          <ParallaxBanner
            layers={[
              {
                image:
                  "https://assets-global.website-files.com/5e26302469ca1d0fbae4a601/65006d8a89cf33bba52b261b_Gray_Circles.svg",
                amount: 0.1,
              },
            ]}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
            }}
          >
            <div
              className="absolute -top-32 -left-20 w-[100px] h-[100px]  flex justify-center items-center"
              style={{
                transform: `translate(${topLeftCardPosition.x}px, ${topLeftCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} />
            </div>
            <div
              className="absolute -bottom-32 -left-20 w-[100px] h-[100px]  flex justify-center items-center"
              style={{
                transform: `translate(${bottomLeftCardPosition.x}px, ${bottomLeftCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} />
            </div>
            <div
              className="absolute -top-32 -right-20 w-[100px] h-[100px] flex justify-center items-center"
              style={{
                transform: `translate(${topRightCardPosition.x}px, ${topRightCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} />
            </div>
            <div
              className="absolute -bottom-32 -right-20 w-[100px] h-[100px] flex justify-center items-center "
              style={{
                transform: `translate(${bottomRightCardPosition.x}px, ${bottomRightCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} />
            </div>
          </ParallaxBanner>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ScrollParallaxExample;
