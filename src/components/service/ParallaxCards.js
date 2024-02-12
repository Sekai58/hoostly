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
  // console.log(window.innerWidth);

  const topLeftCardPosition = {
    x:
      (window.innerWidth > 1580 ? 100 : 50) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth > 1580 ? 90 : 50) *
      (scrollPosition / window.innerHeight),
  };

  const bottomLeftCardPosition = {
    x:
      (window.innerWidth > 1580 ? 100 : 50) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth > 1580 ? -90 : -50) *
      (scrollPosition / window.innerHeight),
  };
  const topRightCardPosition = {
    x:
      (window.innerWidth > 1580 ? -100 : -50) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth > 1580 ? 90 : 50) *
      (scrollPosition / window.innerHeight),
  };
  const bottomRightCardPosition = {
    x:
      (window.innerWidth > 1580 ? -100 : -50) *
      (scrollPosition / window.innerHeight),
    y:
      (window.innerWidth > 1580 ? -90 : -50) *
      (scrollPosition / window.innerHeight),
  };

  return (
    <ParallaxProvider>
      <div className="px-2 sm:px-4 xl:px-[18rem] xxl:max-w[60vw] mb-[8rem]">
        <div className="h-[80vh] bg-backgroundTransSecondary rounded-xl">
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
              position: "relative",
            }}
          >
            <div
              className="absolute z-10 -top-[25rem] -left-[10rem] xxl:-top-[32rem] xxl:-left-[15rem] w-[100px] h-[100px]  flex justify-center items-center"
              style={{
                transform: `translate(${topLeftCardPosition.x}px, ${topLeftCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} alt="" />
            </div>
            <div
              className="absolute z-10 -bottom-[25rem] -left-[10rem] xxl:-bottom-[32rem] xxl:-left-[15rem] w-[100px] h-[100px]  flex justify-center items-center"
              style={{
                transform: `translate(${bottomLeftCardPosition.x}px, ${bottomLeftCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} alt="" />
            </div>
            <div
              className="absolute z-10 -top-[25rem] -right-[10rem] xxl:-top-[32rem] xxl:-right-[15rem] w-[100px] h-[100px] flex justify-center items-center"
              style={{
                transform: `translate(${topRightCardPosition.x}px, ${topRightCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} alt="" />
            </div>
            <div
              className="absolute z-10 -bottom-[25rem] -right-[10rem] xxl:-bottom-[32rem] xxl:-right-[15rem] w-[100px] h-[100px] flex justify-center items-center "
              style={{
                transform: `translate(${bottomRightCardPosition.x}px, ${bottomRightCardPosition.y}px)`,
              }}
            >
              <img src={profileImg} alt="" />
            </div>
          </ParallaxBanner>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ScrollParallaxExample;
