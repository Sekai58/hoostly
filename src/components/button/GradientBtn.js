import React from "react";

const GradientButton = ({ label, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-gradient-to-r from-gradientStart to-gradientEnd text-white rounded-md ${className} text-base font-medium`}
    >
      {label}
    </button>
  );
};

export default GradientButton;
