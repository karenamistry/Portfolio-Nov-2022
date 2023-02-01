import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/about/me-standing-cropped.jpg";

import { CgScrollV } from "react-icons/cg";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container w-screen h-[70vh] flex flex-col justify-center items-start gap-6 md:flex-row md:justify-center md:items-center">
      <motion.div
        animate={{ scale: [0.5, 1] }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <img
          className="w-40 md:w-40 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(168,162,158,0.5)] m-4 border-[0.3px] border-stone-50"
          src={Profile}
          alt="me!"
        />
      </motion.div>
      <motion.div
        animate={{ x: [-50, 1] }}
        transition={{ type: "spring", stiffness: 150 }}
        className="flex flex-col gap-y-4"
      >
        <div className="h1 max-w-3xl text-stone-400">
          👩‍💻 I'm Karena. I'm a product designer passionate about creating{" "}
          <span className="text-stone-800">thoughtful</span> experiences and{" "}
          <span className="text-stone-800">carefully crafted</span> interfaces.
        </div>
        <div>
          <motion.div
            transition={{ type: "spring", stiffness: 100 }}
            className="flex gap-x-2 items-center h4 text-stone-600"
          >
            <CgScrollV className="text-lg" /> see my work below
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
