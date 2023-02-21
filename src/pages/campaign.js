import React from "react";

import { Link } from "react-router-dom";
// Hero Image
import CampaignHero from "../images/alysha/alysha-cover.jpg";
// Project Images

import Affinity from "../images/expedite/affinitymap-dark.png";
import MailerA from "../images/alysha/front.png";
import MailerB from "../images/alysha/back.png";
import Mockup from "../images/alysha/alysha-front.jpg";

import Lawn from "../images/alysha/lawn.png";

import SocialA from "../images/alysha/post-1.png";
import SocialB from "../images/alysha/post-2.png";

function Campaign() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container md:max-w-6xl mx-auto">
        {/* Project Info */}

        <div className="py-[14vh] pb-24">
          <div className="flex flex-col gap-y-12">
            <div className="h1">Alysha Aziz Trustee Campaign</div>
            <div className="flex flex-col gap-y-6 md:flex-row">
              <div className="md:w-1/2 ">
                <div className="h3 max-w-xs">
                  I designed crucial print deliverables for now elected
                  candidate Alysha Aziz's 2022 campaign for Ottawa/Carleton
                  District School Board Trustee. We worked together on several
                  print assets and social media posts to advertise her campaign.
                </div>
              </div>
              <div className="flex gap-x-6">
                <div className="flex flex-col opacity-80 gap-y-2">
                  <div className="h4">Role</div>
                  <div className="h4">Timeline</div>
                  <div className="h4">Platform</div>
                  <div className="h4">Team</div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="h4">Graphic Design</div>
                  <div className="h4">August 2022 to September, 2022</div>
                  <div className="h4">Print, Social Media</div>
                  <div className="h4">Myself, Rochelle Moore</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}

        {/*  NEW Project Text */}

        <div className="container flex flex-col gap-y-24 py-24">
          {/*  Container */}
          <div className="h1">Deliverables</div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Mailers</div>
            <div className="h3">
              Postcards that were mailed to every house in the election
              district. These mailers were used to promote the candidate, and
              inform voters on the candidate's platform. These were an important
              piece of marketing for the candidate, because they had the most
              reach.
            </div>
          </div>

          <div className="md:flex gap-3 pb-3">
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={MailerA}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={MailerB}
                alt="Image"
              />
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Mockup}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Lawn Signs </div>
            <div className="h3">
              Large lawn signs that were put up in big traffic areas in the
              election district. It was important for us to keep only crucial
              information on the sign when introducing voters to the candidate.
              Leading was increased for better readability at large distances,
              and colours were adjusted to increase contrast.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Lawn}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Social Media Posts</div>
            <div className="h3">
              Festive and fun social media posts to introduce voters to the
              candidates personality. These were inspired by Barack Obama's
              yearly music list, as a way to relate to voters and showcase our
              candidate.
            </div>
          </div>

          <div className="md:flex gap-3 pb-3">
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={SocialA}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={SocialB}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaign;
