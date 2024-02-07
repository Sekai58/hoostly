import React from "react";
// import Images from "./Images";
import IntroImages from "./IntroImages";

const Intro = () => {
  return (
    <section className="px-2 md:px-4 xl:px-container bg-bgSecondary  grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="w-full flex flex-col items-center py-10">
        <IntroImages />
      </div>
      <aside className="py-10">
        <p className="uppercase font-bold">learn with best</p>
        <h3 className="text-5xl font-bold my-3">It all starts here</h3>
        <p className="font-semibold text-[1.5rem] my-7">
          have an unrelenting pride in craftsmanship and believe in creating
          impact in industries and ecosystems. Be a part of Leapfrog to
          experience an exciting, rewarding, and impactful career.
        </p>
        <p className="my-5 text-lg text-textLight">
          We see the passion and grit in you to build the best products of the
          worlds. Believe us, building great products is the lifeblood of who we
          are. Our sole purpose will be preparing you for the world that comes
          after graduation.
        </p>
        <p className="my-5 font-semibold text-[1.2rem]">
          We have internship that fits all
        </p>
        <div className="flex flex-wrap gap-3 w-[70%]">
          <button className="py-1 px-2 border text-textLight rounded-md">
            Software engineer
          </button>
          <button className="py-1 px-2 border text-textLight rounded-md">
            Software engineer
          </button>
          <button className="py-1 px-2 border text-textLight rounded-md">
            Software engineer
          </button>
          <button className="py-1 px-2 border text-textLight rounded-md">
            Software engineer
          </button>
        </div>
      </aside>
    </section>
  );
};

export default Intro;
