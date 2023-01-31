import React from "react";
import { NavLink } from "react-router-dom";
import StocateHome from "../images/stocate/smartphone-stocate-d.png";
import ExpediteHome from "../images/expedite/smartphone-expedite-c.jpg";
import BeaconsHome from "../images/beacons/smartphone-beacons-a.png";
import TablatureHome from "../images/other/cover-tablature.jpg";
import FeatureHome from "../images/other/cover-feature.jpg";
import InstaHome from "../images/other/insta-cover.jpg";
import CasperHome from "../images/other/casper-cover.jpg";

import { motion } from "framer-motion";

function ProjectContainer() {
  return (
    <div className="bg-white w-screen py-24">
      <div className="container flex flex-col gap-y-24">
        <NavLink to="/expedite">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 125 }}
            className="flex flex-col gap-y-6"
            href="#"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h1">Expedite</div>
                <div className="h3 max-w-md pb-2">April - Current, 2023</div>
              </div>
              <div className="h1 max-w-4xl">
                Improving the retail customer's experience of the complex
                pickup-in-store process.
              </div>
            </div>
            <div className="w-full bg-stone-200 rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl"
                src={ExpediteHome}
                alt="StocateImage"
              />
            </div>
          </motion.div>
        </NavLink>
        <NavLink to="/stocate">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 125 }}
            className="flex flex-col gap-y-6"
            href="#"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h1">Stocate</div>
                <div className="h3 max-w-md pb-2">April - August, 2022</div>
              </div>
              <div className="h1 max-w-4xl">
                Creating customer centered solutions to aid the buying
                experience of sustainable products.
              </div>
            </div>
            <div className="w-full bg-stone-200 rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl bg-cyan-600"
                src={StocateHome}
                alt="StocateImage"
              />
            </div>
          </motion.div>
        </NavLink>

        <NavLink to="/beacons">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 125 }}
            className="flex flex-col gap-y-6"
            href="#"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h1">Beacons</div>
                <div className="h3 max-w-md pb-2">January - February, 2022</div>
              </div>
              <div className="h1 max-w-4xl">
                Empowering employee success in the retail workplace and
                improving the service experience for customers.
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50">
              <img
                className="object-contain lg:h-[620px] md:h-[420px] sm:h-[320px] w-full  rounded-3xl"
                src={BeaconsHome}
                alt="StocateImage"
              />
            </div>
          </motion.div>
        </NavLink>

        {/* Half s */}

        <div className="flex flex-col gap-y-24 md:flex-row md:gap-y-0 md:gap-x-6">
          <a
            target="_blank"
            href="https://www.behance.net/gallery/154462559/Feature-UR-UX-UI-Case-Study"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 125 }}
              className="flex flex-col gap-y-6"
              href="#"
            >
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col">
                  <div className="h1">Feature</div>
                  <div className="h3 max-w-md pb-2">2020 Case Study</div>
                </div>
                <div className="h1 max-w-xl">
                  Encouraging young people to stay interested in politics.
                </div>
              </div>
              <div className="w-full bg-stone-200 rounded-3xl">
                <img
                  className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50"
                  src={FeatureHome}
                  alt="InstasnacksImage"
                />
              </div>
            </motion.div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/154472601/Guitar-Tablature-UX-UI-Case-Study"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 125 }}
              className="flex flex-col gap-y-6"
              href="#"
            >
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col">
                  <div className="h1">Tablature</div>
                  <div className="h3 max-w-md pb-2">2021 Case Study</div>
                </div>
                <div className="h1 max-w-xl">
                  Improving song learning for guitar playing by using AR.
                </div>
              </div>
              <div className="w-full bg-stone-200 rounded-3xl">
                <img
                  className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50"
                  src={TablatureHome}
                  alt="InstasnacksImage"
                />
              </div>
            </motion.div>
          </a>
        </div>
        {/* End Half s */}

        <a
          target="_blank"
          href="https://www.behance.net/gallery/138923685/Instasnacks-Motion-Illustrative-Content"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 125 }}
            className="flex flex-col gap-y-6"
            href="#"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h1">Instasnacks</div>
                <div className="h3 max-w-md pb-2">2021</div>
              </div>
              <div className="h1 max-w-4xl">
                Creating a brand strategy and social media presence for a
                company that sells entirely through delivery platforms.
              </div>
            </div>
            <div className="w-full bg-stone-200 rounded-3xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50"
                src={InstaHome}
                alt="InstasnacksImage"
              />
            </div>
          </motion.div>
        </a>

        <a
          target="_blank"
          href="https://www.behance.net/gallery/138924473/Casper-Kitchen-Social-Media-Strategy-Photography"
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 125 }}
            className="flex flex-col gap-y-6"
            href="#"
          >
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h1">Casper Kitchen</div>
                <div className="h3 max-w-md pb-2">2021</div>
              </div>
              <div className="h1 max-w-4xl">
                Using social media to boost sales for a restaurant company that
                sells entirely through delivery platforms during a pandemic.
              </div>
            </div>
            <div className="w-full bg-stone-200 rounded-3xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl shadow-[0_35px_60px_-15px_rgba(168,162,158,0.25)] border-[0.5px] border-stone-50"
                src={CasperHome}
                alt="CasperImage"
              />
            </div>
          </motion.div>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
