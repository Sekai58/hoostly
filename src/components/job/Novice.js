import React from "react";
import Header from "./Header";
import { noviceData } from "../../assets/data/noviceData";

const NoviceCard = ({ image, comment, designation, name }) => {
  return (
    <div className="flex flex-col gap-4 w-[18rem]">
      <img
        src={image}
        alt="profile"
        className="w-[70%] bg-cover rounded-br-[4rem]"
      />
      <p>{comment}</p>
      <p>{name}</p>
      <p>{designation}</p>
    </div>
  );
};

const Novice = () => {
  return (
    <div className="bg-[#fefaf2] pb-[4rem]">
      <Header
        title="From novice to ninja"
        subTitle="Listen to what our interns have to say about their experience at Leapfrog."
      />
      <section className="px-2 md:px-4 xl:px-container flex flex-col items-center ">
        {/* <p className="mb-7">hfdsgv</p> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {noviceData?.map((novice, idx) => {
            return (
              <NoviceCard
                key={idx}
                image={novice.image}
                comment={novice.comment}
                designation={novice.designation}
                name={novice.name}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Novice;
