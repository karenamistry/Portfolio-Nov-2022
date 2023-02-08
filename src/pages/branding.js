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
import Image11 from "../images/casper/casper-new-1.jpg";
import Image12 from "../images/casper/casper-new-2.jpg";
import Image13 from "../images/casper/casper-new-3.jpg";

function Branding() {
  return (
    <div className="bg-zinc-900">
      {/* Project Info */}

      <div className="flex pt-[14vh] pb-24  bg-zinc-900">
        <div className="container flex flex-col gap-y-12 md:px-12">
          <div className="h1">Logos & Branding</div>
          <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-y-8 max-w-3xl">
              <div className="h3">
                Casper Kitchen is a delivery and pickup only restaurant chain
                located in the heart of downtown Ottawa. I managed the content
                creation for the social media accounts of 4 of their restaurant
                brands. I created over 100 design and photo assets for digital
                and print purposes.
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
                  Graphic Design, Social Media Management, Photography, Photo
                  Editing
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
          <div className="h2">Ghost Kitchen</div>
          <div className="h3">
            Casper Kitchen is what is commonly referred to as a ghost kitchen,
            which means they do all their sales through delivery and pickup
            orders. Their kitchen is in the heart of downtown Ottawa, where you
            can either order from their takeout window or pickup through
            delivery apps. They drive sales by having a strong social media
            presence and good standing in the community.
          </div>
          <div className="h3">
            I created and managed daily content for 4 of their restaurant
            brands: VietFresh & Banh Mi Bros, Casper Kitchen & Old's BBQ. I
            worked on their Instagram, & Facebook accounts.
          </div>
        </div>

        <div className="h1 md:px-12">Process</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Consistent & Reliable Content</div>
          <div className="h3">
            Casper Kitchen brands had an established customer base and social
            presence. The most important part of designing for Casper Kitchen
            was maintaining that brand identity and designing content that would
            maintain that audience.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Photo Posts</div>
          <div className="h3">
            Previous content consisted of mostly photography posts. This made
            sense, because customers often browsed the Instagram when choosing
            what to order. That is what I decided to create to maintain our
            audience.
          </div>
          <div className="h3">
            The first set of photos I created were edited to use the brand
            specific colours to represent each restaurant. The second set of
            photos I created used a homogenous blue background to show that
            these brands were all under the same roof.
          </div>
          <div className="h3"></div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Impact</div>
          <div className="h3">
            I was able to gain an increase in engagement, peaking at a 69%
            increase in engagement from previous photo content. The content I
            created helped build brand recognition for the each specific
            restaurant. I often responded to customer questions and comments to
            help build our customer service experience. This was important to
            maintaining our community standing.
          </div>
        </div>

        <div className="h1 md:px-12">Select Posts</div>

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
              src={Image11}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image12}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image13}
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
              src={Image4}
              alt="Image"
            />
          </div>

          <div className="w-full h-full flex flex-col md:flex-row gap-x-6 gap-y-4">
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image7}
              alt="Image"
            />
            <img
              className="object-cover mx-auto h-full w-full md:w-1/2 rounded-xl"
              src={Image5}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
