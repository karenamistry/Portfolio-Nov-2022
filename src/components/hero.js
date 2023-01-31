import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/about/me-standing-cropped.jpg";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container w-screen h-[65vh] flex flex-col justify-center items-start gap-6 md:flex-row md:justify-center md:items-center">
      <motion.div
        animate={{ scale: [0.5, 1] }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <img
          className="w-40 md:w-40 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(59,130,246,0.25)] m-4 border-[0.5px] border-stone-50"
          src={Profile}
          alt="me!"
        />
      </motion.div>
      <motion.div
        animate={{ x: [-50, 1] }}
        transition={{ type: "spring", stiffness: 150 }}
        className="flex flex-col gap-y-4"
      >
        <div>
          <div className="h1 max-w-3xl">
            <span className="text-blue-600">👩‍💻 I'm Karena.</span> I'm a product
            designer passionate about creating thoughtful experiences and
            carefully crafted interfaces.
          </div>
        </div>
        <div>
          <motion.div
            transition={{ type: "spring", stiffness: 100 }}
            className="flex gap-x-2 items-center h3 text-stone-600"
          >
            ↓ scroll to see my work
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
