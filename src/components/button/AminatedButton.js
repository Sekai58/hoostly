// import { useRef } from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ value }) => {
  // const intervalRef = useRef(null);

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      className="group relative overflow-hidden rounded-lg border-[1px] border-slate-500 bg-slate-700 px-2 py-1 font-mono font-medium uppercase text-slate-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">{value}</div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-100 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default AnimatedButton;
