import React from "react";

import { Link } from "react-router-dom";
// Hero Image
// Project Images

import PosterA from "../images/canadian/outdoor-signs/01.png";
import PosterB from "../images/canadian/outdoor-signs/02.png";
import PosterC from "../images/canadian/outdoor-signs/03.png";
import PosterD from "../images/canadian/outdoor-signs/04.png";
import PosterE from "../images/canadian/outdoor-signs/05.png";
import PosterF from "../images/canadian/outdoor-signs/06.png";

import StandeeA from "../images/canadian/standees/ct-female.png";
import StandeeB from "../images/canadian/standees/ct-male.png";
import StandeeC from "../images/canadian/standees/01.png";
import StandeeD from "../images/canadian/standees/02.png";
import StandeeE from "../images/canadian/standees/03.png";
import StandeeF from "../images/canadian/standees/04.png";
import StandeeG from "../images/canadian/standees/05.png";

import MapA from "../images/canadian/map-01.png";
import MapB from "../images/canadian/map-02.jpg";

function Canadian() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="md:max-w-6xl mx-auto">
        {/* Project Info */}

        <div className="flex pt-[14vh] pb-24">
          <div className="container flex flex-col gap-y-12">
            <div className="h1">Canadian Tire</div>
            <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-y-8 max-w-xs">
                <div className="h3">
                  I worked as a freelance designer for Canadian Tire, creating
                  work as needed. The deliverables I designed for Canadian Tire
                  included: wayfinding floor stickers, parking lot signs,
                  in-store signs, trainee tools, and presentation slides. These
                  are just a few of the deliverables I designed for the Canadian
                  Tire Kanata (Ottawa).
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
                  <div className="h4">Graphic Design, Illustration</div>
                  <div className="h4">April 2020 to April, 2021</div>
                  <div className="h4">Print, Digital</div>
                  <div className="h4">Myself</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}

        {/*  NEW Project Text */}

        <div className="container flex flex-col gap-y-24 py-24">
          {/*  Container */}
          <div className="h1">Select Works</div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Outdoor COVID Signs </div>
            <div className="h3">
              A series of large signs 36in X 60in to help customers navigate
              picking-up items during the pandemic. This was a rush project,
              revisions completed and sent for printing in under an hour.
            </div>
          </div>

          <div className="md:flex gap-3 bg-zinc-700 p-3">
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={PosterA}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={PosterB}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={PosterC}
                alt="Image"
              />
            </div>
          </div>
          <div className="md:flex gap-3  bg-zinc-700 p-3">
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={PosterD}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={PosterE}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={PosterF}
                alt="Image"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Re-Vamped Standees</div>
            <div className="h3">
              Fun and exciting outfits for life-sized PVC standees that were put
              up in different departments of the Canadian Tire store. I had
              initially only designed two but, these were a hit with customers,
              so we continued to add to them! I did not design the plain standee
              (dressed in just Canadian Tire attire), I designed the added
              attire to specify departments.
            </div>
          </div>

          <div className="md:flex gap-3 bg-zinc-700 p-3">
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={StandeeA}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={StandeeB}
                alt="Image"
              />
            </div>
          </div>
          <div className="md:flex gap-3  bg-zinc-700 p-3">
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={StandeeC}
                alt="Image"
              />
            </div>
            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={StandeeD}
                alt="Image"
              />
            </div>

            <div>
              <img
                className="object-contain mx-auto h-full w-full"
                src={StandeeF}
                alt="Image"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Employee Training Map</div>
            <div className="h3">
              A map of the Canadian Tire Kanata location as a part of an
              improved training program for incoming employees. The map is
              intended to be a general layout of departments, teaching new
              employees about locations of items, location of help desks and
              seasonal variations of the store layout.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={MapA}
              alt="Image"
            />
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={MapB}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canadian;
