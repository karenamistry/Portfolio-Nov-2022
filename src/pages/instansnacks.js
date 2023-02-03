import React from "react";

import ExpediteHero from "../images/expedite/smartphone-expedite-c.jpg";
import InstaCover from "../images/instasnacks/instasnacks-cover.jpg";
import Contest from "../images/instasnacks/contest-2.jpg";
import Door from "../images/instasnacks/door-illustration.png";
import Ghost from "../images/instasnacks/Halloween-1.png";
import Can from "../images/instasnacks/Instagram-2.jpg";
import Movie from "../images/instasnacks/Instasnacks_01-01.png";
import Kitty from "../images/instasnacks/Instasnacks_03-cat.jpg";
import Ramen from "../images/instasnacks/Instasnacks_cute_2.jpg";
import Pretzel from "../images/instasnacks/Instasnacks_cute_3.jpg";
import Poppop from "../images/instasnacks/Instasnacks_cyclone.jpg";
import Lolly from "../images/instasnacks/Instasnacks_cute_1.jpg";
import Choco from "../images/instasnacks/choco.png";

import Video from "../components/vimeo.js";

function Instansnacks() {
  return (
    <>
      {/* Project Info */}

      <div className="flex pt-[20vh] pb-24">
        <div className="container flex flex-col gap-y-12 md:px-12">
          <div className="h1">Instasnacks</div>
          <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3">
                Instasnacks delivers corner store products and specialty snacks
                using food delivery services. I managed the social media
                strategy and creation of daily content for Instagram, Facebook,
                and TikTok. I was required to work quickly and efficiently in to
                optimize interactions, while adhering to social media
                algorithms.
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
            src={InstaCover}
            alt="ExpediteImage"
          />
        </div>
      </div>

      {/*  NEW Project Text */}

      <div className="container flex flex-col gap-y-24 py-24">
        {/*  Container */}

        <div className="h1 md:px-12">Introduction</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Entirely Online Retailer</div>
          <div className="h3">
            Instansnacks sells through delivery applications such as UberEats,
            Door Dash and Skip the Dishes. They have 4 locations across the
            Ottawa & Gatineau area. Social media is the primary source of online
            exposure to promote their business.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Impact</div>
          <div className="h3">
            I was able to gain a steady increase in views from previous content
            posted, peaking at a 67% increase in views from previous reel
            content. The more significant difference was the increase in
            interactions on reel content compared to regular posts. Reel content
            had at the very least 4 times as many interactions than the regular
            posts. Regular posts received fewer interactions compared to Reels,
            but they did really well to entice profile visits, all illustrated
            posts were among the top posts to entice profile visits at the end
            of each month they were posted.
          </div>
        </div>

        <div className="h1 md:px-12">Select Work</div>

        <div className="">
          <Video />
        </div>

        <div className="flex flex-col gap-y-24">
          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-5/6 rounded-xl"
              src={Door}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Ramen}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Lolly}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Pretzel}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Poppop}
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
              src={Kitty}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Choco}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Can}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Contest}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Movie}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Instansnacks;
