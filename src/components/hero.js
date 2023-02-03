import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/about/me-standing-cropped.jpg";

import { CgScrollV } from "react-icons/cg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <NavLink to="/expedite">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="flex justify-between items-center gap-x-12 md:gap-x-9"
        >
          <div className="hidden md:flex flex-col gap-y justify-center items-center w-11">
            <div className="h4 text-[12px] text-stone-500">Februrary</div>
            <div className="h3">2021</div>
          </div>
          <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
            <div className="flex items-center gap-x-4">
              <div className="w-[100px] bg-[#CAF805] md:flex items-center justify-center rounded-lg">
                <img
                  className="object-cover p-4 rounded-lg"
                  src={Dyanmics}
                  alt="StocateImage"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="h3 text-[16px] font-medium text-black">
                    Tablature
                  </div>
                  <div className="flex gap-x-2">
                    <div className="h4 text-[12px]">See Project</div>
                    <FiArrowUpRight className="text-stone-800" />
                  </div>
                </div>
                <div className="h4 leading-[1.2]">
                  Improving song learning for guitar playing by using advanced
                  studying methods, and augmented reality.{" "}
                  <span className="block md:inline h4 text-[12px] text-stone-500 ">
                    • Case Study, User Research UX & UI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </NavLink>
      <NavLink to="/expedite">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="flex justify-between items-center gap-x-12 md:gap-x-9"
        >
          <div className="hidden md:flex flex-col gap-y justify-center items-center w-12">
            <div className="h4 text-[12px] text-stone-500">January</div>
            <div className="h3">2020</div>
          </div>
          <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
            <div className="flex items-center gap-x-4">
              <div className="w-[90px] bg-[#CAF805] md:flex items-center justify-center rounded-lg">
                <img
                  className="object-cover p-4 rounded-lg"
                  src={Dyanmics}
                  alt="StocateImage"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <div className="h3 text-[16px] font-medium text-black">
                    Feature
                  </div>
                  <div className="flex gap-x-2">
                    <div className="h4 text-[12px]">See Project</div>
                    <FiArrowUpRight className="text-stone-800" />
                  </div>
                </div>
                <div className="h4 leading-[1.2]">
                  Encouraging young people to stay interested in politics by
                  following topics that interest them.{" "}
                  <span className="block md:inline h4 text-[12px] text-stone-500 ">
                    • Case Study, User Research UX & UI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </NavLink>
    </>
  );
}

export default Hero;
