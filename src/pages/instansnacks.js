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
import Process from "../images/instasnacks/process-a.png";

import Video from "../components/vimeo.js";

function Instansnacks() {
  return (
    <div className="bg-zinc-900">
      {/* Project Info */}

      <div className="flex pt-[20vh] pb-24 bg-zinc-900">
        <div className="container flex flex-col gap-y-12 md:px-12">
          <div className="h1">Instasnacks</div>
          <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-y-8 max-w-xl">
              <div className="h3">
                Instasnacks delivers corner store products and specialty snacks
                using food delivery services. I managed their social media for
                Instagram, Facebook, and TikTok. I{" "}
                <span className="">
                  communicated with customers to conduct user research and
                  create marketing strategy's
                </span>{" "}
                to increase engagement.
              </div>
            </div>
            <div className="flex gap-x-6">
              <div className="flex flex-col gap-y-2">
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
            className="object-cover object-center mx-auto h-full w-full bg-sky-600 rounded-sm"
            src={InstaCover}
            alt="ExpediteImage"
          />
        </div>
      </div>

      {/*  NEW Project Text */}

      <div className="container flex flex-col gap-y-24 py-24">
        {/*  Container */}

        <div className="h1 md:px-12">Introduction</div>

        <div className="flex flex-col max-w-xl gap-y-2 md:px-12">
          <div className="h2">Entirely Online Retailer</div>
          <div className="h3">
            Instansnacks sells through delivery applications such as UberEats,
            Door Dash and Skip the Dishes. They have 4 locations across the
            Ottawa & Gatineau area. Social media is the primary source of online
            exposure to promote their business. I published daily illustrated
            and animated content, and conducted user research with the goal of
            increasing engagement to advertise their online store.
          </div>
        </div>

        <div className="h1 md:px-12">Process</div>

        <div className="flex flex-col max-w-xl gap-y-2 md:px-12">
          <div className="h2">Getting Input from Users</div>
          <div className="h3">
            An important part of my job was interacting with customers. To
            gather data on what users were responding to, I parsed past comments
            and past posts that garnered the highest impressions. I got in
            contact with top influencers (with 25K+ followers), to see what they
            though about our brand, and the potential of a collaboration.
          </div>
        </div>

        <div className="flex flex-col max-w-xl gap-y-2 md:px-12">
          <div className="h2">Illustrated Campaign</div>
          <div className="h3">
            Using this information, I was able to know what I wanted to
            accomplish with my posts. People enjoyed that our brand that was
            young, tech-savy and fun. I did some sketching for potential
            directions and we decided to move forward with the Illustrated
            Posts.
          </div>
        </div>

        <div className="flex flex-col max-w-xl gap-y-2 md:px-12">
          <div className="h2">Impact</div>
          <div className="h3">
            I was able to gain a steady increase in engagement from previous
            content posted, peaking at a 46% increase in engagement from
            previous content. This was an impression increase by the hundreds.
          </div>
          <div className="h3">
            The increase in impressions on illustrated posts was a clear enough
            distinction, so we decided to apply these illustrated styles to
            Instagram Reel content. This was successful, with illustrated motion
            content having at the very least 4 times as many impression than the
            illustrated posts. Regular posts received fewer impressions compared
            to Reels, but they did really well to entice profile visits and
            engagement, all illustrated posts were among the top posts to entice
            profile visits at the end of each month they were posted.
          </div>
        </div>

        <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
          <img
            className="object-cover mx-auto h-full w-5/6 rounded-sm"
            src={Process}
            alt="Image"
          />
        </div>

        <div className="h1 md:px-12">Select Posts</div>

        <div className="">
          <Video />
        </div>

        <div className="flex flex-col gap-y-24">
          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-5/6 rounded-sm"
              src={Door}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Ramen}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Lolly}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Pretzel}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Poppop}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Ghost}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Kitty}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Choco}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-sm"
              src={Can}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instansnacks;
