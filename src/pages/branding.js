import React from "react";

import { Link } from "react-router-dom";
// Hero Image
import LogoHero from "../images/logos/logos-cover.jpg";
// Project Images

import Affinity from "../images/expedite/affinitymap-dark.png";

import VanishaLogo from "../images/logos/branding/vanisha-a.png";
import VanishaLogoB from "../images/logos/branding/vanisha-b.png";
import VanishaLogoC from "../images/logos/branding/vanisha-c.png";

import VanishaIterate from "../images/logos/vanisha-iterations.jpg";

import UpsideLogo from "../images/logos/branding/upside-a.png";
import UpsideLogoB from "../images/logos/branding/upside-b.png";

import UpsideIterate from "../images/logos/upside-iterations.jpg";

import DCLogo from "../images/logos/branding/dynamic-a.png";
import DCLogoB from "../images/logos/branding/dynamic-b.png";

import DCIterate from "../images/logos/dcxs-iterations.jpg";

function Branding() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container md:max-w-6xl mx-auto">
        {/* Project Info */}

        <div className="py-[14vh] pb-24">
          <div className="flex flex-col gap-y-12">
            <div className="h1">Branding & Logos</div>
            <div className="flex flex-col gap-y-6 md:flex-row">
              <div className="md:w-1/2">
                <div className="h3 max-w-xs">
                  I worked logos and other branding assets for a variety of
                  small businesses in Ottawa. This exemplifies my process of
                  proposing concepts and iterating upon them, until reaching a
                  final design.
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
            <div className="h2">Vanisha Mistry Photography</div>
            <div className="h3">
              I worked with Vanisha to create a brand that was warm, empowering
              and minimal. Vanisha photographs family moments and beautiful
              landscapes. We enjoyed the visual of the camera lens being
              represented in an abstract way.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={VanishaLogo}
              alt="Image"
            />
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={VanishaLogoB}
              alt="Image"
            />
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={VanishaLogoC}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Proposed Concepts</div>
            <div className="h3">
              This logo was being used mostly digitally for social media, so we
              explored some gradient concepts. These were iterated upon until we
              reached our final word-mark and logo. We spent time fine-tuning
              the word mark until it was perfect.
            </div>
            <div className="h4 text-[13px] text-zinc-700">
              (also, we're not related 😂)
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={VanishaIterate}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Upside Realty</div>
            <div className="h3">
              I worked with The Upside Realty Team to create a logo and word
              mark for their Real Estate Group. We worked together to create an
              identity that was smart, flexible and professional.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={UpsideLogo}
              alt="Image"
            />
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={UpsideLogoB}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Proposed Concepts</div>
            <div className="h3">
              The icon was thoughtfully iterated upon until we reached a design
              that we both were satisfied with. The logo, and typographic styles
              were used on lawn signs, social media content as well as printed
              on a truck.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={UpsideIterate}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Dynamic CXS</div>
            <div className="h3">
              I worked with a retail assistant app company to create a pieces of
              the brand identity for their startup. We created a logo that was
              both creative, insightful, and modern.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={DCLogo}
              alt="Image"
            />
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={DCLogoB}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2">
            <div className="h2">Proposed Concepts</div>
            <div className="h3">
              The team was unsure exactly what they were looking for so I
              provided a variety of styles with from more fun concepts to
              analytical concepts. I created a variety of styles and identities
              during the iteration phase.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={DCIterate}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
