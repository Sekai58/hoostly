import React from "react";

const Header = ({ title, subTitle }) => {
  return (
    <>
      <h3 className="pc-container flex justify-center text-transparent font-bold text-4xl bg-gradient-to-r from-startfrom to-endto bg-clip-text pt-[4rem]">
        {title}
      </h3>
      <p className="w-full flex justify-center mb-10">
        <span className="max-w-[44rem] text-center">{subTitle}</span>
      </p>
    </>
  );
};

export default Header;
