import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import VideoExpedite from "../images/expedite/expedite.mp4";
import VideoStocate from "../images/stocate/screens-3.mp4";
import Stocate from "../images/stocate/stocate-2.png";
import VideoInstasnacks from "../images/instasnacks/instasnacks.mp4";
import VideoCasper from "../images/casper/casper-2.mp4";
import ImageCanadian from "../images/canadian/canadiantire-10.png";
import ImageAlysha from "../images/alysha/alysha-cover-7.jpg";
import ImageFreelance from "../images/logos/freelance-4.png";
import ImageBeacons from "../images/beacons/beacons-2.png";

function ProjectContainer() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container flex flex-col pt-[14vh] pb-24 gap-y-24 md:max-w-7xl mx-auto">
        {/* text section */}
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-y-12">
            <div className="title">Karena Mistry</div>
            <div className="flex flex-col gap-y-2">
              <div className="h1">— A designer of all kinds of things.</div>
              <div className="h3 max-w-xl">
                I create <span className="text-zinc-200">data-driven</span>{" "}
                experiences and{" "}
                <span className="text-zinc-200">carefully crafted</span>{" "}
                visuals. Currently freelance product designer at Dynamics CXS,
                previously graphic designer for multiple startups in Canada.
              </div>
            </div>
          </div>
        </div>
        {/* component section */}

        <div className="w-full md:flex md:flex-col gap-y-6">
          <div className="flex flex-col md:flex-row gap-x-3">
            <NavLink to="/expedite" className="md:w-1/2">
              <div className="flex flex-col gray-button w-full h-full ">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col ">
                    <div>
                      <div>
                        <div className="h1">CX Expedite</div>
                      </div>
                      <div className=" hidden">
                        Improving customer experience by streamlining the pickup
                        in-store process for retail merchants.
                      </div>
                    </div>
                    <div className="h3">
                      User Research, User Interface, User Experience
                    </div>
                  </div>
                </div>
                <div className=" md:flex mt-6">
                  <video
                    className="rounded-image"
                    src={VideoExpedite}
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </div>
            </NavLink>

            <NavLink to="/instasnacks" className="md:w-1/2">
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col ">
                    <div>
                      <div className="h1">Instasnacks</div>
                      <div className=" hidden">
                        Creating a brand strategy and social media presence for
                        a retailer that sells entirely through delivery
                        platforms.
                      </div>
                    </div>
                    <div className="h3">
                      Graphic Design, Social Media Marketing
                    </div>
                  </div>
                </div>
                <div className=" md:flex  mt-6">
                  <video
                    className="rounded-image"
                    src={VideoInstasnacks}
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </div>
            </NavLink>
          </div>

          <NavLink to="/stocate">
            <div className="flex flex-col gap-x-6 gray-button w-full mt-6 md:mt-0">
              <div className="flex flex-col w-full">
                <div className="flex flex-col ">
                  <div>
                    <div className="h1">Stocate</div>
                    <div className=" hidden">
                      Creating user centered solutions to connecting sustainable
                      and local businesses with a community of interested
                      buyers.
                    </div>
                  </div>
                  <div className="h3">User Interface, User Experience</div>
                </div>
              </div>
              <div className="md:flex mt-6">
                <img
                  src={Stocate}
                  alt="Image"
                  className="object-cover h-auto rounded-image"
                />
              </div>
            </div>
          </NavLink>

          <div className="flex flex-col md:flex-row mt-6 md:mt-0 gap-x-3">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/163017819/Freelance-Designer-for-Canadian-Tire-2020-2021"
            >
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col ">
                    <div>
                      <div className="h1">Canadian Tire</div>
                      <div className=" hidden">
                        Various print and digital assets for the most popular
                        Canadian Tire store in Ottawa.
                      </div>
                    </div>
                    <div className="h3">Graphic Design, Illustration </div>
                  </div>
                </div>
                <div className=" md:flex  mt-6">
                  <img
                    src={ImageCanadian}
                    alt="Image"
                    className="object-cover h-auto rounded-image"
                  />
                </div>
              </div>
            </a>

            <NavLink to="/casperkitchen">
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col ">
                    <div>
                      <div className="h1">Casper Kitchen</div>
                      <div className=" hidden">
                        Using social media to increase the presence of a
                        restaurant chain that sells entirely through delivery
                        platforms during the pandemic.
                      </div>
                    </div>
                    <div className="h3">
                      Graphic Design, Social Media Marketing, Photography{" "}
                    </div>
                  </div>
                </div>
                <div className=" md:flex mt-6">
                  <video
                    className="rounded-image"
                    src={VideoCasper}
                    autoPlay
                    loop
                    muted
                  />
                </div>
              </div>
            </NavLink>
          </div>

          <div className="flex flex-col md:flex-row mt-6 md:mt-0  gap-x-3">
            <a
              target="_blank"
              href="https://www.behance.net/gallery/162371367/Alysha-Alyshas-%28now-elected%29-Trustee-Campaign-2022"
            >
              <div className="flex flex-col gap-x-6 gray-button w-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col ">
                    <div>
                      <div className="h1">Alysha Aziz Trustee Campaign</div>
                      <div className=" hidden">
                        Creating branding and print deliverables to contribute
                        to a successful political campaign.
                      </div>
                    </div>
                    <div className="h3">Graphic Design, Branding</div>
                  </div>
                </div>
                <div className=" md:flex  mt-6">
                  <img
                    src={ImageAlysha}
                    alt="Image"
                    className="object-cover h-auto w-full rounded-image"
                  />
                </div>
              </div>
            </a>

            <a
              target="_blank"
              href="https://www.behance.net/gallery/162880627/Freelance-Brand-Work-2020-2021"
            >
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col ">
                    <div>
                      <div className="h1">Freelance Branding</div>
                      <div className=" hidden">
                        Process & concept proposals for logos and other branding
                        assets for small businesses.
                      </div>
                    </div>
                    <div className="h3">Graphic Design, Branding </div>
                  </div>
                </div>
                <div className=" md:flex  mt-6">
                  <img
                    src={ImageFreelance}
                    alt="Image"
                    className="object-cover h-auto rounded-image"
                  />
                </div>
              </div>
            </a>
          </div>
          <NavLink to="/beacons">
            <div className="flex flex-col gap-x-6 gray-button w-full mt-6 md:mt-0">
              <div className="flex flex-col w-full">
                <div className="flex flex-col ">
                  <div>
                    <div className="h1">Beacons</div>
                    <div className=" hidden">
                      Empowering employee success in the retail workplace and
                      improving the service experience for customers.
                    </div>
                  </div>
                  <div className="h3">
                    User Research, User Interface, User Experience
                  </div>
                </div>
              </div>
              <div className=" md:flex  mt-6">
                <img
                  src={ImageBeacons}
                  alt="Image"
                  className="object-cover h-auto rounded-image"
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
