import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const GradientBtn = ({ label }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateGradient = async () => {
      await controls.start({
        background: [
          "radial-gradient(circle at 50% -50%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 60% -80%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 70% -95%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 80% -145%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 100% -185%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 150% 150%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 100% 280%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 70% 180%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 50% 150%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 35% 170%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 10% 250%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 0% 250%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at -40% 180%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at -20% -180%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 8% -170%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 20% -145%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 30% -120%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 40% -90%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 45% -90%, #008E44, #ffffff00,#ffffff00)",
          "radial-gradient(circle at 50% -80%, #008E44, #ffffff00,#ffffff00)",
        ],
        transition: { duration: 4, repeat: Infinity, repeatType: "loop" },
      });
    };

    animateGradient();
  }, [controls]);

  return (
    <motion.div
      className=" w-fit py-[2px] px-[2px] border border-[#f9f9f9] rounded-full bg-[#ffffff00] "
      initial={{
        background:
          "radial-gradient(circle at 50% -50%, #0000ff, #ffffff00,#ffffff00)",
      }}
      animate={controls}
    >
      <button className=" text-gradientStart font-bold py-[1px] px-[8px] rounded-3xl bg-[#c7f0db]">
        {label}
      </button>
    </motion.div>
  );
};

export default GradientBtn;
