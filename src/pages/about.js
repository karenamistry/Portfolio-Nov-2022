import React from "react";

import Standing from "../images/about/me-standing-cropped.jpg";
import Spinning from "../images/about/me-spinning.jpg";

import { AiFillSmile } from "react-icons/ai";

function About() {
  return (
    <div className="bg-zinc-900 flex flex-col gap-y-12">
      <div className="w-full h-auto">
        <div className="container md:max-w-6xl mx-auto">
          {/* Project Info */}
          <div className="pt-[14vh] pb-2">
            <div className="flex flex-col gap-y-12">
              {/* Titles */}
              <div>
                <div className="md:flex gap-x-2  items-center ">
                  <div className="titleSerif">Hello</div>
                  <AiFillSmile className="titleSans" />
                  <div className="titleSerif">I'm Karena.</div>
                </div>
              </div>
              <div className="md:flex  md:flex-row">
                <div className="md:w-1/2 flex flex-col gap-y-2">
                  <div className="md:max-w-lg h3">
                    I'm a designer with a BA in design from York
                    University/Sheridan College, Joint program. I'm currently
                    living in Ottawa, Canada. I'm a very versatile designer with
                    experience in print and publishing, social media marketing,
                    motion, and UR/UI/UX design. I believe in creating
                    intentional & data-driven design.
                  </div>
                  <div className="md:max-w-lg h3">
                    I've worked on small but impactful teams, sometimes as the
                    only design voice. I've worked freelance for clients like:
                    Canadian Tire, Upside Realty and Trustee Alysha Aziz. I'm
                    currently working as a freelance product designer for
                    Dynamic CXS.
                  </div>
                </div>
                {/* Info */}
                <div className="md:w-1/2">
                  <div className="flex gap-x-6 pt-12 md:pt-0">
                    <div className="w-5/6">
                      <img
                        className="object-cover pr-24"
                        src={Standing}
                        alt="ExpediteImage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto">
        <div className="container md:max-w-6xl mx-auto">
          {/* Project Info */}
          <div className=" pb-24">
            <div className="flex flex-col gap-y-12">
              {/* Titles */}
              <div className="flex flex-col gap-y-6 md:flex-row">
                <div className="md:w-1/2 flex flex-col gap-y-2">
                  <div className="h2">Data Driven Designer</div>
                  <div className="md:max-w-xs h3 text-zinc-400">
                    I create intentional design decisions based on data and
                    research. This helps me design purposefully.
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col gap-y-2">
                  <div className="h2">Human Centred Approach</div>

                  <div className="md:max-w-xs h3 text-zinc-400">
                    To me, creating human centered design means creating
                    responsible technology that is socially and environmentally
                    aware.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 md:flex-row">
                <div className="md:w-1/2 flex flex-col gap-y-2">
                  <div className="h2">Constant Growth</div>
                  <div className="md:max-w-xs h3 text-zinc-400">
                    Improvement is something i'm always working towards. This
                    included my design, communication and professional skills.
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col gap-y-2">
                  <div className="h2">Team Player</div>

                  <div className="md:max-w-xs h3 text-zinc-400">
                    I'm devoted to creating an open and inclusive team
                    environment for my co-workers. Better environments lead to
                    creating better work.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default About;
