import React from "react";
import { NavLink } from "react-router-dom";

import Dyanmics from "../images/expedite/dynamics-square.png";
import Stocate from "../images/stocate/stocate-square.png";
import Beacons from "../images/beacons/beacons-square.png";
import Insta from "../images/about/instasnacks-square.png";
import Casper from "../images/about/casper-square.png";

import { FiArrowUpRight } from "react-icons/fi";

import { motion } from "framer-motion";

function ProjectContainer() {
  return (
    <>
      <div className="container flex flex-col gap-y-10 py-[20vh] xl:justify-between xl:flex-row xl:items-start">
        {/* text section */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-y-12 xl:fixed xl:px-8">
            <div className="h1">Karena Mistry</div>
            <div className="h3 max-w-lg text-stone-600">
              I'm a designer passionate about creating{" "}
              <span className="text-black font-medium">data-driven</span>{" "}
              experiences and{" "}
              <span className="text-black font-medium">carefully crafted</span>{" "}
              interfaces. Currently product designer at Dynamics CXS, previously
              designed for startups across Canada.
            </div>
          </div>
        </div>
        {/* section */}
        <div className="flex flex-col gap-y-2 justify-end w-full md:gap-y-10 md:max-w-3xl">
          <NavLink to="/expedite">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-between items-center gap-x-12 md:gap-x-9"
            >
              <div className="hidden md:flex flex-col gap-y justify-center items-center w-12">
                <div className="h4 text-[12px] text-stone-500">August</div>
                <div className="h3">2022</div>
              </div>
              <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
                <div className="flex items-center gap-x-4">
                  <div className="w-[90px] bg-[#CAF805] md:flex items-center justify-center rounded-lg hidden">
                    <img
                      className="object-cover p-4 rounded-lg"
                      src={Dyanmics}
                      alt="StocateImage"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="h3 text-[16px] font-medium text-black">
                        CX Expedite
                      </div>
                      <div className="flex gap-x-2">
                        <div className="h4 text-[12px] text-stone-400">
                          See Project
                        </div>
                        <FiArrowUpRight className="text-stone-800" />
                      </div>
                    </div>
                    <div className="h4 leading-[1.2]">
                      Improving customer experience by streaming the pickup
                      in-store process for retail merchants.{" "}
                      <span className="block md:inline h4 text-[12px] text-stone-500 ">
                        • User Research • UX • UI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </NavLink>
          <NavLink to="/stocate">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-between items-center gap-x-12 md:gap-x-9"
            >
              <div className="hidden md:flex flex-col gap-y justify-center items-center w-12">
                <div className="h4 text-[12px] text-stone-500">April</div>
                <div className="h3">2022</div>
              </div>
              <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
                <div className="flex items-center gap-x-4">
                  <div className="w-[104px] bg-[#0295AD] md:flex items-center justify-center rounded-lg hidden">
                    <img
                      className="object-cover p-4 rounded-lg"
                      src={Stocate}
                      alt="StocateImage"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="h3 text-[16px] font-medium text-black">
                        Stocate
                      </div>
                      <div className="flex gap-x-2">
                        <div className="h4 text-[12px]  text-stone-400">
                          See Project
                        </div>
                        <FiArrowUpRight className="text-stone-800" />
                      </div>
                    </div>
                    <div className="h4 leading-[1.2]">
                      Creating user centered solutions to connecting sustainable
                      and local businesses with a community of interested
                      buyers.{" "}
                      <span className="block md:inline h4 text-[12px] text-stone-500 ">
                        • Internship • UX • UI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </NavLink>
          <NavLink to="/beacons">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-between items-center gap-x-12 md:gap-x-9"
            >
              <div className="hidden md:flex flex-col gap-y justify-center items-center w-12">
                <div className="h4 text-[12px] text-stone-500">January</div>
                <div className="h3">2022</div>
              </div>
              <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
                <div className="flex items-center gap-x-4">
                  <div className="w-[96px] bg-[#CAF805] md:flex items-center justify-center rounded-lg hidden">
                    <img
                      className="object-cover p-4 rounded-lg"
                      src={Dyanmics}
                      alt="StocateImage"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="h3 text-[16px] font-medium text-black">
                        CX Beacons
                      </div>
                      <div className="flex gap-x-2">
                        <div className="h4 text-[12px]  text-stone-400">
                          See Project
                        </div>
                        <FiArrowUpRight className="text-stone-800" />
                      </div>
                    </div>
                    <div className="h4 leading-[1.2]">
                      Empowering employee success in the retail workplace and
                      improving the service experience for customers.{" "}
                      <span className="block md:inline h4 text-[12px] text-stone-500 ">
                        • User Research • UX • UI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/instasnacks">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-between items-center gap-x-12 md:gap-x-9"
            >
              <div className="hidden md:flex flex-col gap-y justify-center items-center w-12">
                <div className="h4 text-[12px] text-stone-500">April</div>
                <div className="h3">2021</div>
              </div>
              <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
                <div className="flex items-center gap-x-4">
                  <div className="w-[104px] bg-[#FFC314] md:flex items-center justify-center rounded-lg hidden">
                    <img
                      className="object-cover p-4 rounded-lg"
                      src={Insta}
                      alt="StocateImage"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="h3 text-[16px] font-medium text-black">
                        Instasnacks
                      </div>
                      <div className="flex gap-x-2">
                        <div className="h4 text-[12px] text-stone-400">
                          See Project
                        </div>
                        <FiArrowUpRight className="text-stone-800" />
                      </div>
                    </div>
                    <div className="h4 leading-[1.2]">
                      Creating a brand strategy and social media presence for a
                      retailer that sells entirely through delivery platforms.{" "}
                      <span className="block md:inline h4 text-[12px] text-stone-500 ">
                        • Branding • Social Media Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </NavLink>

          <NavLink to="/casperkitchen">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-between items-center gap-x-12 md:gap-x-9"
            >
              <div className="hidden md:flex flex-col gap-y justify-center items-center w-12">
                <div className="h4 text-[12px] text-stone-500">April</div>
                <div className="h3">2021</div>
              </div>
              <div className="flex flex-col items-start w-full p-3 rounded-2xl hover-effects">
                <div className="flex items-center gap-x-4">
                  <div className="w-[108px] bg-[#d4d4d4] md:flex items-center justify-center rounded-lg hidden">
                    <img
                      className="object-cover p-4 rounded-lg"
                      src={Casper}
                      alt="StocateImage"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="h3 text-[16px] font-medium text-black">
                        Casper Kitchen
                      </div>
                      <div className="flex gap-x-2">
                        <div className="h4 text-[12px] text-stone-400">
                          See Project
                        </div>
                        <FiArrowUpRight className="text-stone-800" />
                      </div>
                    </div>
                    <div className="h4 leading-[1.2]">
                      Using social media to boost sales for a restaurant chain
                      that sells entirely through delivery platforms during a
                      pandemic.{" "}
                      <span className="block md:inline h4 text-[12px] text-stone-500 ">
                        • Branding • Social Media Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </NavLink>

          <a target="_blank" href="http://behance.net/karenamistry">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex justify-between items-center gap-x-12 md:gap-x-9"
            >
              <div className="hidden md:flex flex-col gap-y justify-center items-center w-12"></div>
              <div className="flex flex-col items-end w-full p-3 rounded-2xl hover-effects">
                <div className="flex items-center gap-x-4">
                  <div>
                    <div className="flex justify-between">
                      <div className="flex gap-x-2">
                        <div className="h4 text-[12px]">
                          See More Work on Behance
                        </div>
                        <FiArrowUpRight className="text-stone-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        </div>
        {/* section */}
      </div>
    </>
  );
}

export default ProjectContainer;
