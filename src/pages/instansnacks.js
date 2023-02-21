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

import VideoChip from "../images/instasnacks/chip-anim.mp4";
import VideoGhost from "../images/instasnacks/ghost.mp4";
import ImageA from "../images/expedite/image-add.png";
import ImageB from "../images/expedite/image-choice.png";
import Full from "../images/expedite/image-whole.png";

function Instansnacks() {
  return (
    <div className="bg-zinc-900">
      <div className="md:max-w-6xl mx-auto">
        {/* Project Info */}

        <div className="flex pt-[14vh] pb-24 bg-zinc-900">
          <div className="container flex flex-col gap-y-12 md:px-6">
            <div className="h1">Instasnacks</div>
            <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-y-8 max-w-xs">
                <div className="h3">
                  Instasnacks delivers corner store products and specialty
                  snacks using food delivery services. I managed their social
                  media for Instagram, Facebook, and TikTok. I{" "}
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
                    Social Media Management, Graphic & Motion Design
                  </div>
                  <div className="h4">January 2021 to December, 2021</div>
                  <div className="h4">Instagram, Facebook, TikTok</div>
                  <div className="h4">Myself</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}

        <div className="">
          <Video />
        </div>

        {/*  NEW Project Text */}

        <div className="container flex flex-col gap-y-24 py-24">
          {/*  Container */}

          <div className="h1">Introduction</div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Entirely Online Retailer</div>
            <div className="h3">
              Instansnacks sells through delivery applications such as UberEats,
              Door Dash and Skip the Dishes. They have 4 locations across the
              Ottawa & Gatineau area. Social media is the primary source of
              online exposure to promote their business. I published daily
              illustrated and animated content, and conducted user research with
              the goal of increasing engagement to advertise their online store.
            </div>
          </div>

          <div className="h1">Process</div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Getting Input from Users</div>
            <div className="h3">
              An important part of my job was interacting with customers. To
              gather data on what users were responding to, I parsed past
              comments and past posts that garnered the highest impressions. I
              got in contact with top influencers (with 25K+ followers), to see
              what they though about our brand, and the potential of a
              collaboration.
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Illustrated Campaign</div>
            <div className="h3">
              Using this information, I was able to know what I wanted to
              accomplish with my posts. People enjoyed that our brand that was
              young, tech-savy and fun. I did some sketching for potential
              directions and we decided to move forward with the Illustrated
              Posts.
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Impact</div>
            <div className="h3">
              I was able to gain a steady increase in engagement from previous
              content posted, peaking at a 46% increase in engagement from
              previous content. This was an impression increase by the hundreds.
            </div>
            <div className="h3">
              The increase in impressions on illustrated posts was a clear
              enough distinction, so we decided to apply these illustrated
              styles to Instagram Reel content. This was successful, with
              illustrated motion content having at the very least 4 times as
              many impression than the illustrated posts. Regular posts received
              fewer impressions compared to Reels, but they did really well to
              entice profile visits and engagement, all illustrated posts were
              among the top posts to entice profile visits at the end of each
              month they were posted.
            </div>
          </div>

          <div className="h2">Proposed Concept Illustrations </div>

          <div className="w-full h-full flex flex-col md:flex-row ">
            <img
              className="object-cover mx-auto h-full w-5/6 "
              src={Process}
              alt="Image"
            />
          </div>

          <div className="h1">Select Posts</div>

          <div className="container">
            <div className="md:flex gap-3 pb-3">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Ramen}
                  alt="Image"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Lolly}
                  alt="Image"
                />
              </div>
            </div>

            <div className="md:flex gap-3 pb-3">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Pretzel}
                  alt="Image"
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Poppop}
                  alt="Image"
                />
              </div>
            </div>

            <div className="md:flex gap-3 pb-3">
              <div className="w-full h-full">
                <video
                  className="rounded-image"
                  src={VideoGhost}
                  autoPlay
                  loop
                  muted
                />
              </div>
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Kitty}
                  alt="Image"
                />
              </div>
            </div>

            <div className="md:flex gap-3 pb-3">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Choco}
                  alt="Image"
                />
              </div>
              <div className="w-full h-full">
                <video
                  className="rounded-image"
                  src={VideoChip}
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instansnacks;
