import React from "react";

const PrimaryBtn = ({ label, className }) => {
  return (
    <button
      className={`${className} px-4 py-2 border border-primary rounded-md text-base text-gradientStart font-medium`}
    >
      {label}
    </button>
  );
};

export default PrimaryBtn;
