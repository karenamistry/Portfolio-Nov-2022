import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/about/me-standing-cropped.jpg";

import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container w-screen h-[60vh] flex flex-col justify-center items-start gap-6 md:flex-row md:justify-center md:items-center">
      <motion.div
        animate={{ scale: [0.5, 1] }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <img
          className="w-40 md:w-40 rounded-[2rem] shadow-[0_35px_60px_-15px_rgba(59,130,246,0.25)] m-4 border-[0.5px] border-gray-50"
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
          <div className="h3 max-w-xl">
            <span className="text-blue-600">👩‍💻 I'm Karena.</span> I'm a product
            designer based in Canada. I'm passionate about creating thoughtful
            experiences and carefully crafted interfaces.
          </div>
        </div>
        <div>
          <motion.div
            transition={{ type: "spring", stiffness: 100 }}
            className="flex gap-x-2 items-center gray-button"
          >
            <Link to="/about">Read more about me</Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
