import React from "react";
import Images from "./Images";

const Intro = () => {
  return (
    <section className="px-container bg-[#f7f8fb]  grid grid-cols-2 gap-10">
      <div className="w-full flex flex-col items-center">
        <Images />
      </div>
      <aside className="py-10">
        <p className="uppercase">learn with best</p>
        <h3 className="text-3xl font-semibold my-5">It all starts here</h3>
        <p className="font-medium my-7">
          have an unrelenting pride in craftsmanship and believe in creating
          impact in industries and ecosystems. Be a part of Leapfrog to
          experience an exciting, rewarding, and impactful career.
        </p>
        <p className="my-5">
          We see the passion and grit in you to build the best products of the
          worlds. Believe us, building great products is the lifeblood of who we
          are. Our sole purpose will be preparing you for the world that comes
          after graduation.
        </p>
        <p className="my-5">We have internship that fits all</p>
        <div className="flex flex-wrap gap-3 w-[70%]">
          <button className="py-1 px-2 border">Software engineer</button>
          <button className="py-1 px-2 border">Software engineer</button>
          <button className="py-1 px-2 border">Software engineer</button>
          <button className="py-1 px-2 border">Software engineer</button>
        </div>
      </aside>
    </section>
  );
};

export default Intro;
