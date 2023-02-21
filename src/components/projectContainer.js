import React from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineArrowRight } from "react-icons/ai";

import VideoExpedite from "../images/expedite/expedite-2.mp4";
import VideoStocate from "../images/stocate/screens-3.mp4";
import Stocate from "../images/stocate/stocate-3.png";
import VideoInstasnacks from "../images/instasnacks/instasnacks.mp4";
import VideoCasper from "../images/casper/casper-2.mp4";
import ImageCanadian from "../images/canadian/canadiantire-10.png";
import ImageAlysha from "../images/alysha/alysha-front.jpg";
import ImageFreelance from "../images/logos/freelance-4.png";
import ImageBeacons from "../images/beacons/beacons-2.png";

function ProjectContainer() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container flex flex-col pt-[14vh] pb-24 gap-y-24 md:max-w-6xl mx-auto">
        {/* text section */}

        <div className="flex items-start flex-col md:flex-row gap-y-12 py-24 hidden">
          <div className="md:w-1/2">
            <div className="max-w-xl">
              <div className="h2">Karena Mistry is a designer of</div>
              <div className="titleSerif ">All Kinds of Things.</div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="h3 max-w-xs">
              She creates <span className="text-zinc-300">data-driven</span>{" "}
              experiences and{" "}
              <span className="text-zinc-300">carefully crafted</span> visuals.
              Currently freelance product designer at Dynamics CXS, previously
              graphic designer for multiple startups in Canada.
            </div>
          </div>
        </div>

        {/* text section */}
        <div className=" pb-24 flex flex-col gap-y-4">
          <div className="flex flex-col md:items-center gap-y-2">
            <div className="titleSerif text-zinc-200">Karena Mistry</div>
            <div className="h3 max-w-xl text-center text-zinc-400 mx-auto">
              I create <span className="text-zinc-200">data-driven</span>{" "}
              experiences and{" "}
              <span className="text-zinc-200">carefully crafted</span> visuals.
              Currently freelance product designer at Dynamics CXS, previously
              graphic designer for multiple startups in Canada.
            </div>
          </div>
        </div>

        {/* component section */}

        <div className="w-full md:flex md:flex-col gap-y-6">
          <div className="flex flex-col md:flex-row gap-x-3">
            <NavLink to="/expedite" className="md:w-1/2">
              <div className="flex flex-col gray-button w-full h-full ">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-y-0.5">
                    <div>
                      <div>
                        <div className="h2">
                          Improving Your Pickup Experience with Expedite.
                        </div>
                      </div>
                      <div className=" hidden">
                        Improving customer experience by streamlining the pickup
                        in-store process for retail merchants.
                      </div>
                    </div>
                    <div className="h4">
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
                  <div className="flex flex-col gap-y-0.5">
                    <div>
                      <div className="h2">
                        Creating a Yummy Social Media Campaign: Instasnacks.
                      </div>
                      <div className=" hidden">
                        Creating a brand strategy and social media presence for
                        a retailer that sells entirely through delivery
                        platforms.
                      </div>
                    </div>
                    <div className="h4">
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
                <div className="flex flex-col gap-y-0.5">
                  <div>
                    <div className="h2">
                      Making Sustainability More Approachable with Stocate.
                    </div>
                    <div className=" hidden">
                      Creating user centered solutions to connecting sustainable
                      and local businesses with a community of interested
                      buyers.
                    </div>
                  </div>
                  <div className="h4">User Interface, User Experience</div>
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
            <NavLink to="/canadiantire">
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-y-0.5">
                    <div>
                      <div className="h2">
                        Print Work for the Most Popular Canadian Tire Store in
                        Ottawa.
                      </div>
                      <div className=" hidden">
                        Various print and digital assets for the most popular
                        Canadian Tire store in Ottawa.
                      </div>
                    </div>
                    <div className="h4">Graphic Design, Illustration </div>
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
            </NavLink>

            <NavLink to="/casperkitchen">
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-y-0.5">
                    <div>
                      <div className="h2">
                        Increasing the Presence of a Restaurant Chain: Casper
                        Kitchen
                      </div>
                      <div className=" hidden">
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

          <NavLink to="/beacons">
            <div className="flex flex-col gap-x-6 gray-button w-full mt-6 md:mt-0">
              <div className="flex flex-col w-full">
                <div className="flex flex-col gap-y-0.5">
                  <div>
                    <div className="h2">
                      Empowering Employee Success in the Retail Workplace with
                      Beacons.
                    </div>
                    <div className=" hidden">
                      Empowering employee success in the retail workplace and
                      improving the service experience for customers.
                    </div>
                  </div>
                  <div className="h4">
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

          <div className="flex flex-col md:flex-row mt-6 md:mt-0  gap-x-3">
            <NavLink to="/campaign">
              <div className="flex flex-col gap-x-6 gray-button w-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-y-0.5">
                    <div>
                      <div className="h2">
                        Branding a Successful Trustee Campaign
                      </div>
                      <div className=" hidden">
                        Creating branding and print deliverables to contribute
                        to a successful political campaign.
                      </div>
                    </div>
                    <div className="h4">Graphic Design, Branding</div>
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
            </NavLink>

            <NavLink to="/branding">
              <div className="flex flex-col gap-x-6 gray-button w-full h-full">
                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-y-0.5">
                    <div>
                      <div className="h2">Branding Small Businesses</div>
                      <div className=" hidden">
                        Process & concept proposals for logos and other branding
                        assets for small businesses.
                      </div>
                    </div>
                    <div className="h4">Graphic Design, Branding </div>
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
            </NavLink>
          </div>
        </div>

        {/* section */}
      </div>
    </div>
  );
}

export default ProjectContainer;
