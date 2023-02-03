import React from "react";

import ExpediteHero from "../images/expedite/smartphone-expedite-c.jpg";
import Affinity from "../images/expedite/affinitymap-2.png";
import Ghost from "../images/instasnacks/Halloween-1.png";

function Casper() {
  return (
    <>
      {/* Project Info */}

      <div className="flex pt-[20vh] pb-24">
        <div className="container flex flex-col gap-y-12 md:px-12">
          <div className="h1">Casper Kitchen</div>
          <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3">
                Casper Kitchen is a restaurant delivery and pickup only
                restaurant chain located in the heart of downtown Ottawa. I used
                social media to boost sales during the pandemic. We were able to
                drive sales by creating a good standing in the community.
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
                <div className="h4">
                  Social Media Management, Graphic & Motion Design, Copywriting
                </div>
                <div className="h4">April 2021 to December, 2021</div>
                <div className="h4">Instagram, Facebook, TikTok</div>
                <div className="h4">Myself</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container">
        <div className="w-full h-[80vh] z-10">
          <img
            className="object-cover object-center mx-auto h-full w-full bg-sky-600 rounded-3xl"
            src={Ghost}
            alt="ExpediteImage"
          />
        </div>
      </div>

      {/*  NEW Project Text */}

      <div className="container flex flex-col gap-y-24 py-24">
        {/*  Container */}

        <div className="h1 md:px-12">Introduction</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Role & Impact</div>
          <div className="h3">
            I was in charge of creating a strategy to increase the reach of
            content & content creation for Facebook & lnstagram. I worked for
            the majority of my time on two of their restaurant brands: VietFresh
            & Banh Mi Bros. These were the Vietnamese restaurants.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Role & Impact</div>
          <div className="h3">
            I was able to gain a steady increase in views from previous content
            posted, peaking at a 67% increase in views from previous reel
            content. The more significant difference was the increase in
            interactions on reel content compared to static posts. Reel content
            had at the very least 4 times as many interactions than the static
            posts. Even though static posts didn't do well for impressions, they
            did do really well to entice profile visits, all illustrated posts
            were among the top posts to entice profile visits at the end of each
            month they were posted.
          </div>
        </div>

        <div className="h1 md:px-12">Select Work</div>

        <div className="flex flex-col gap-y-6">
          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-5/6 rounded-xl"
              src={Ghost}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ghost}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Casper;
