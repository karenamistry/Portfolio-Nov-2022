import React from "react";

import CasperCover from "../images/casper/casper-cover.jpg";
import Image1 from "../images/casper/image-4.jpeg";
import Image2 from "../images/casper/image-2.jpeg";
import Image3 from "../images/casper/image-3.jpeg";
import Image4 from "../images/casper/image-1.jpeg";
import Image5 from "../images/casper/image-5.jpeg";
import Image6 from "../images/casper/image-6.jpeg";
import Image7 from "../images/casper/image-7.jpeg";
import Image8 from "../images/casper/image-8.jpeg";
import Image9 from "../images/casper/image-9.jpeg";
import Image10 from "../images/casper/image-10.jpeg";

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
                drive sales by creating strong brand values and good standing in
                the community.
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
                  Social Media Management, Graphic & Photography, Copywriting
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
            src={CasperCover}
            alt="ExpediteImage"
          />
        </div>
      </div>

      {/*  NEW Project Text */}

      <div className="container flex flex-col gap-y-24 py-24">
        {/*  Container */}

        <div className="h1 md:px-12">Introduction</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Casper Kitchen</div>
          <div className="h3">
            Casper Kitchen is what is commonly referred to as a ghost kitchen,
            which means they do all their sales through delivery and pickup
            orders. Their kitchen is in the heart of downtown Ottawa, where you
            can either order from their takeout window or pickup through
            delivery apps.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Role & Impact</div>
          <div className="h3">
            I was in charge of creating a strategy to increase the reach of
            content for Facebook & lnstagram. I worked on 4 of their restaurant
            brands: VietFresh & Banh Mi Bros, Casper Kitchen & Old's BBQ.
          </div>

          <div className="h3">
            I created photography and visual content to post daily on each of
            these accounts. The content I created helped build brand recognition
            for the each specific restaurant. I was able to gain an increase in
            engagement from previous content posted, peaking at a 72% increase
            in engagement from previous content. I often responded to customer
            questions and comments to help build our customer service
            experience.
          </div>
        </div>

        <div className="h1 md:px-12">Select Work</div>

        <div className="flex flex-col gap-y-6">
          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-5/6 rounded-xl"
              src={Image1}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image2}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image3}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image4}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image5}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image6}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image7}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image8}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image9}
              alt="Image"
            />
          </div>

          <div className="w-full h-1/2 flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-1/2 w-full rounded-xl"
              src={Image10}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Casper;
