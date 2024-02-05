import React from "react";
import { motion } from "framer-motion";

const Example = () => {
  return (
    // <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
    <DrawOutlineButton>Hover me</DrawOutlineButton>
    // </div>
  );
};

const DrawOutlineButton = ({ children }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, staggerChildren: 10 }}
      //   {...rest}
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="absolute left-0 top-0 h-[2px] bg-indigo-300"
      />

      {/* RIGHT */}
      <motion.span
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="absolute right-0 top-0  w-[2px] bg-indigo-300"
      />

      {/* BOTTOM */}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="absolute bottom-0 right-0 h-[2px]  bg-indigo-300 "
      />

      {/* LEFT */}
      <motion.span
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[2px] bg-indigo-300"
      />
    </motion.button>
  );
};

export default Example;
