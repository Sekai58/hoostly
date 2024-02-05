import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

const GradientAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateGradient = async () => {
      await controls.start({
        background: [
          "radial-gradient(circle at 50% 0%, #3086e0, #f8f7f5,#f8f7f5)",
          "radial-gradient(circle at 100% -50%, #3086e0, #f8f7f5,#f8f7f5)",
          "radial-gradient(circle at 100% 120%, #3086e0, #f8f7f5,#f8f7f5)",
          "radial-gradient(circle at 50% 120%, #3086e0, #f8f7f5,#f8f7f5)",
          "radial-gradient(circle at 0% 150%, #3086e0, #f8f7f5,#f8f7f5)",
          "radial-gradient(circle at 30% 0%, #3086e0, #f8f7f5,#f8f7f5)",
        ],
        transition: { duration: 3, repeat: Infinity, repeatType: "loop" },
      });
    };

    animateGradient();
  }, [controls]);

  return (
    <motion.div
      className="py-[3px] px-[3px] rounded-full border border-[#dbdada] bg-transparent"
      initial={{
        background:
          "radial-gradient(circle at 50% 0%, #ff6600, #f8f7f5,#f8f7f5)",
      }}
      animate={controls}
    >
      {/* Content goes here */}
      <button class=" text-white font-bold py-1 px-10 rounded-3xl bg-primary">
        Click me
      </button>
    </motion.div>
  );
};

export default GradientAnimation;
