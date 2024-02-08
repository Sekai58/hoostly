import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const GradientBtn = ({ label }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateGradient = async () => {
      await controls.start({
        background: [
          "radial-gradient(circle at 50% -500%, #3086e0, #f8f7f5,#f8f7f5)", //50 -50
          "radial-gradient(circle at 70% -95%, #3086e0, #f8f7f5,#f8f7f5)", //70 -95
          "radial-gradient(circle at 100% -185%, #3086e0, #f8f7f5,#f8f7f5)", //100 -185,160
          "radial-gradient(circle at 100% 280%, #3086e0, #f8f7f5,#f8f7f5)", //100 280
          "radial-gradient(circle at 50% 150%, #3086e0, #f8f7f5,#f8f7f5)", //50 150
          "radial-gradient(circle at 35% 170%, #3086e0, #f8f7f5,#f8f7f5)", //35 170, 10 250 0 250 20 -140
          "radial-gradient(circle at 10% 250%, #3086e0, #f8f7f5,#f8f7f5)", //35 170, 10 250 0 250 20 -140
          "radial-gradient(circle at 0% 250%, #3086e0, #f8f7f5,#f8f7f5)", //35 170, 10 250 0 250 20 -140
          "radial-gradient(circle at 20% -140%, #3086e0, #f8f7f5,#f8f7f5)", //35 170, 10 250 0 250 20 -140
        ],
        transition: { duration: 3, repeat: Infinity, repeatType: "loop" },
      });
    };

    animateGradient();
  }, [controls]);

  return (
    <motion.div
      className=" w-fit py-[1px] px-[1px] rounded-full border border-[#dbdada] bg-transparent"
      initial={{
        background:
          "radial-gradient(circle at 50% -50%, #3086e0, #f8f7f5,#f8f7f5)",
      }}
      animate={controls}
    >
      {/* Content goes here */}
      {/* <div></div> */}
      <button className=" text-white font-bold py-[1px] px-[4px] rounded-3xl bg-primary">
        {label}
      </button>
    </motion.div>
  );
};

export default GradientBtn;
