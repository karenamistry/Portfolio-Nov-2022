import React from "react";
import { NavLink } from "react-router-dom";

import Dyanmics from "../images/expedite/dynamics-square.png";
import Stocate from "../images/stocate/stocate-square.png";
import Beacons from "../images/beacons/beacons-square.png";
import Insta from "../images/about/instasnacks-square.png";
import Casper from "../images/about/casper-square.png";

import { FiArrowUpRight } from "react-icons/fi";

import SmartphoneExpedite from "../images/expedite/smartphone-expedite-c.jpg";
import ExpediteA from "../images/expedite/pages/expedite/CXP 164.jpg";
import ExpediteB from "../images/expedite/pages/expedite/CXP 173.jpg";

import SmartphoneStocate from "../images/expedite/smartphone-expedite-c.jpg";
import StocateA from "../images/stocate/features/list-2.png";
import StocateB from "../images/stocate/features/browsing/page2.jpg";

import BeaconsA from "../images/beacons/pages/page1.jpg";
import BeaconsB from "../images/beacons/pages/page2.jpg";
import BeaconsC from "../images/beacons/pages/page3.jpg";
import BeaconsD from "../images/beacons/pages/page4.jpg";

import AlyshaA from "../images/alysha/alysha-cover.jpg";
import LogoA from "../images/logos/logos-cover.jpg";

import InstaA from "../images/instasnacks/instasnacks-cover.jpg";
import CasperA from "../images/casper/casper-cover.jpg";

import CanadianA from "../images/canadian/canadian-cover-3.jpg";

import { motion } from "framer-motion";
import Instansnacks from "../pages/instansnacks";

function ProjectContainer() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container flex flex-col gap-y-24 pt-[18vh] pb-24 gap-24">
        {/* text section */}
        <div className="flex flex-col w-full rounded-sm py-3">
          <div className="flex flex-col gap-y-6 xl:px-8">
            <div className="h1 text-zinc-200">
              I'm Karena Mistry, a designer of all kinds of things.{" "}
            </div>
            <div className="h2 text-zinc-400 max-w-4xl">
              — I'm passionate about creating{" "}
              <span className="text-zinc-200">data-driven</span> experiences and{" "}
              <span className="text-zinc-200">carefully crafted</span> visuals.
              Currently freelance product designer at Dynamics CXS, previously
              graphic designer for multiple startups in Canada.
            </div>
          </div>
        </div>
        {/* component section */}

        <div className="w-full md:flex md:flex-col gap-y-3">
          <div className="flex flex-col md:flex-row gap-y-3 gap-x-3">
            <NavLink to="/expedite" className="md:w-1/2">
              <div className="flex flex-col p-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex gap-x-3 justify-end">
                      <div className="h4"></div>
                      <FiArrowUpRight className="h2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <div className="h1">CX Expedite</div>
                      <div className="h2 hidden">
                        Improving customer experience by streamlining the pickup
                        in-store process for retail merchants.
                      </div>
                    </div>
                    <div className="h">
                      User Research, User Interface, User Experience
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex gap-x-3 mt-3">
                  <img
                    src={ExpediteA}
                    alt="Image"
                    className="object-cover h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem] rounded-screen"
                  />
                  <img
                    src={ExpediteB}
                    alt="Image"
                    className="object-cover h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem] rounded-screen"
                  />
                </div>
              </div>
            </NavLink>

            <NavLink to="/stocate" className="md:w-1/2">
              <div className="flex flex-col p-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex gap-x-3 justify-end">
                      <div className="h4"></div>
                      <FiArrowUpRight className="h2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <div className="h1">Stocate</div>
                      <div className="h2 hidden">
                        Creating user centered solutions to connecting
                        sustainable and local businesses with a community of
                        interested buyers.
                      </div>
                    </div>
                    <div className="h4">User Interface, User Experience</div>
                  </div>
                </div>
                <div className="hidden md:flex gap-x-3 mt-3">
                  <img
                    src={StocateB}
                    alt="Image"
                    className="object-cover h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem] rounded-screen"
                  />
                  <img
                    src={StocateA}
                    alt="Image"
                    className="object-cover h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem] rounded-screen"
                  />
                </div>
              </div>
            </NavLink>
          </div>

          <NavLink to="/instasnacks">
            <div className="flex flex-col p-6 gray-button w-full mt-3 md:mt-0">
              <div className="flex flex-col w-full">
                <div className="w-full">
                  <div className="flex gap-x-3 justify-end">
                    <div className="h4"></div>
                    <FiArrowUpRight className="h2" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <div className="h1">Instasnacks</div>
                    <div className="h2 hidden">
                      Creating a brand strategy and social media presence for a
                      retailer that sells entirely through delivery platforms.
                    </div>
                  </div>
                  <div className="h4">
                    Graphic Design, Social Media Marketing, Illustration &
                    Motion
                  </div>
                </div>
              </div>
              <div className="hidden md:flex gap-x-3 mt-3">
                <img
                  src={InstaA}
                  alt="Image"
                  className="object-cover h-auto w-full rounded-sm"
                />
              </div>
            </div>
          </NavLink>

          <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 mt-3 md:mt-0">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/163017819/Freelance-Designer-for-Canadian-Tire-2020-2021"
            >
              <div className="flex flex-col p-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex gap-x-3 justify-end">
                      <div className="h4"></div>
                      <FiArrowUpRight className="h2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <div className="h1">Canadian Tire</div>
                      <div className="h2 hidden">
                        Various print and digital assets for the most popular
                        Canadian Tire store in Ottawa.
                      </div>
                    </div>
                    <div className="h4">Graphic Design, Illustration </div>
                  </div>
                </div>
                <div className="hidden md:flex gap-x-3 mt-3">
                  <img
                    src={CanadianA}
                    alt="Image"
                    className="object-cover h-auto rounded-sm"
                  />
                </div>
              </div>
            </a>

            <NavLink to="/casperkitchen">
              <div className="flex flex-col p-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex gap-x-3 justify-end">
                      <div className="h4"></div>
                      <FiArrowUpRight className="h2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <div className="h1">Casper Kitchen</div>
                      <div className="h2 hidden">
                        Using social media to increase the presence of a
                        restaurant chain that sells entirely through delivery
                        platforms during the pandemic.
                      </div>
                    </div>
                    <div className="h4">
                      Graphic Design, Social Media Marketing, Photography{" "}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex gap-x-3 mt-3">
                  <img
                    src={CasperA}
                    alt="Image"
                    className="object-cover h-auto rounded-sm"
                  />
                </div>
              </div>
            </NavLink>
          </div>

          <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 mt-3 md:mt-0">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/162371367/Alysha-Alyshas-%28now-elected%29-Trustee-Campaign-2022"
            >
              <div className="flex flex-col p-6 gray-button w-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex gap-x-3 justify-end">
                      <div className="h4"></div>
                      <FiArrowUpRight className="h2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <div className="h1">Alysha Aziz Trustee Campaign</div>
                      <div className="h2 hidden">
                        Creating branding and print deliverables to contribute
                        to a successful political campaign.
                      </div>
                    </div>
                    <div className="h4">Graphic Design, Branding</div>
                  </div>
                </div>
                <div className="hidden md:flex gap-x-3 mt-3">
                  <img
                    src={AlyshaA}
                    alt="Image"
                    className="object-cover h-auto w-full rounded-sm"
                  />
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://www.behance.net/gallery/162880627/Freelance-Brand-Work-2020-2021"
            >
              <div className="flex flex-col p-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex gap-x-3 justify-end">
                      <div className="h4"></div>
                      <FiArrowUpRight className="h2" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div>
                      <div className="h1">Freelance Branding</div>
                      <div className="h2 hidden">
                        Process & concept proposals for logos and other branding
                        assets for small businesses.
                      </div>
                    </div>
                    <div className="h4">Graphic Design, Branding </div>
                  </div>
                </div>
                <div className="hidden md:flex gap-x-3 mt-3">
                  <img
                    src={LogoA}
                    alt="Image"
                    className="object-cover h-auto rounded-sm"
                  />
                </div>
              </div>
            </a>
          </div>
          <NavLink to="/beacons">
            <div className="flex flex-col p-6 gray-button w-full mt-3 md:mt-0">
              <div className="flex flex-col w-full">
                <div className="w-full">
                  <div className="flex gap-x-3 justify-end">
                    <div className="h4"></div>
                    <FiArrowUpRight className="h2" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div>
                    <div className="h1">Beacons</div>
                    <div className="h2 hidden">
                      Empowering employee success in the retail workplace and
                      improving the service experience for customers.
                    </div>
                  </div>
                  <div className="h4">
                    User Research, User Interface, User Experience
                  </div>
                </div>
              </div>
              <div className="hidden md:flex gap-x-3 mt-3">
                <img
                  src={BeaconsA}
                  alt="Image"
                  className="object-cover  h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem]  rounded-screen"
                />
                <img
                  src={BeaconsD}
                  alt="Image"
                  className="object-cover  h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem]  rounded-screen"
                />
                <img
                  src={BeaconsC}
                  alt="Image"
                  className="object-cover  h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem]  rounded-screen"
                />
                <img
                  src={BeaconsB}
                  alt="Image"
                  className="object-cover  h-auto md:max-w-[9rem] lg:max-w-[12rem] xl:max-w-[16rem]  rounded-screen"
                />
              </div>
            </div>
          </NavLink>
        </div>

        {/* section */}
      </div>
    </div>
  );
}

export default ProjectContainer;
