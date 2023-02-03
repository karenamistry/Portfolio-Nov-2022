import React from "react";

import { Link } from "react-router-dom";
// Hero Image
import ExpediteHero from "../images/expedite/smartphone-expedite-c.jpg";
// Project Images

import Warehouse from "../images/expedite/store.jpg";

import Affinity from "../images/expedite/affinitymap-2.png";
import Pact from "../images/expedite/pact.png";
import Sitemap from "../images/expedite/sitemap.png";
import Journey from "../images/expedite/userjourney.png";
import ScenarioA from "../images/expedite/userscenario.png";
import ScenarioB from "../images/expedite/userscenario-b.png";
import ScenarioC from "../images/expedite/userscenario-c.png";
import LowFid from "../images/expedite/low-fid.png";
import System from "../images/expedite/system.jpg";
import Type from "../images/expedite/type-poppins.png";

import UserJourney from "../images/expedite/userjourney-general.png";
import SiteMap from "../images/expedite/sitemapA.png";
import IterateA from "../images/expedite/pages/expedite/dashed.jpg";
import IterateB from "../images/expedite/pages/expedite/line.jpg";

import ExpediteA from "../images/expedite/pages/expedite/CXP 168.jpg";
import ExpediteB from "../images/expedite/pages/expedite/CXP 165.jpg";
import ExpediteC from "../images/expedite/pages/expedite/CXP 166.jpg";
import ExpediteD from "../images/expedite/pages/expedite/CXP 170.jpg";
import ExpediteE from "../images/expedite/pages/expedite/CXP 65.jpg";

import PickingA from "../images/expedite/pages/picking/CXP 190.jpg";
import PickingB from "../images/expedite/pages/picking/CXP 191.jpg";
import PickingC from "../images/expedite/pages/picking/CXP 202.jpg";
import PickingD from "../images/expedite/pages/picking/CXP 218.jpg";

import LoadingA from "../images/expedite/pages/loading/CXP 220.jpg";
import LoadingB from "../images/expedite/pages/loading/CXP 221.jpg";
import LoadingC from "../images/expedite/pages/loading/CXP 224.jpg";
import LoadingD from "../images/expedite/pages/loading/CXP 226.jpg";

import Cust1 from "../images/expedite/pages/profile/CXP 187.jpg";
import Cust2 from "../images/expedite/pages/profile/CXP 150.jpg";
import Cust3 from "../images/expedite/pages/profile/CXP 176.jpg";
import Cust4 from "../images/expedite/pages/profile/CXP 159.jpg";

function Tablature() {
  return (
    <>
      {/* Project Info */}
      <div className="flex pt-[20vh] pb-24">
        <div className="container flex flex-col gap-y-12 md:px-12">
          <div className="h1">Tablature</div>
          <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3">
                Tablature is a 7-day case study in creating a gamified musical
                learning experience. This project explores advanced memorization
                techniques and applies them to the song learning journey of
                guitar playing.
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
                <div className="h4">UR, UI, UX, Motion</div>
                <div className="h4">February 2022, 7 days</div>
                <div className="h4">IOS, Android</div>
                <div className="h4">Myself, Case Study</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Image */}
      <div className="container">
        <div className="w-full h-[80vh] z-10">
          <img
            className="object-cover mx-auto h-full w-full bg-sky-600 rounded-3xl"
            src={ExpediteHero}
            alt="ExpediteImage"
          />
        </div>
      </div>
      {/*  NEW Project Text */}
      <div className="container flex flex-col gap-y-24 py-24">
        {/*  Container */}
        <div className="h1 md:px-12">Introduction</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Problem</div>
          <div className="h3">
            When you look up how to learn a song, the first things that comes up
            are music tablatures. Tablature is a simplified version of
            traditional music notation that doesn't require any prior music
            knowledge to read. Tabs are made for the casual musician.
          </div>
          <div className="h3">
            The problem that I was finding was that learning longer songs using
            tablature was time-consuming and arduous. I wanted to know if there
            was a way that I could improve this process.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Comments from Forums</div>
          <div className="h3">
            Due to the fact that this was a 7-day exercise, I didn't have a lot
            of time to research and validate my hypothesis. I used comments from
            guitar learning forums to learn if other people were also having
            this problem.
          </div>
        </div>

        <div className="h1 md:px-12">Research</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Competition Analysis</div>
          <div className="h3">
            I researched a variety of music learning applications for both
            mobile and desktop. Rhythm games were some of my primary sources of
            inspiration, because they are able to incorporate music and skill
            together. Games like Amplitude, Thumper, Osu and of course
            GuitarHero were just some of the games I referenced to find better
            solutions
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">User Journey Mapping</div>
          <div className="h3">I</div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-full"
            src={Affinity}
            alt="Image"
          />
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Memorization Techniques</div>
          <div className="h3">
            To solve for the lack of ability to retain information when learning
            songs, I began researching memorization methods. These correlated
            well with learning large sections of information and different types
            of information. The techniques that I felt applied most to music
            learning were: Chunking & Corsi Block-Tapping.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Chuncking</div>
          <div className="h3">
            Chunking is a study method that says memorization becomes easier
            when you chunk together information into sections and memorize each
            section separately, then put it all together.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Corsi Block-Tapping</div>
          <div className="h3">
            This is a test used to test visuo-spatial memory and non-verbal
            memory, like music. The test consists of having 9 blocks (or
            numbers) appear on a screen, and each block in a tapped/selected in
            a specific order. The participant must relay the order in which the
            blocks were tapped/selected.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Design Implications</div>
          <div className="h3">
            To improve the speed of the song learning experience, I needed to
            create an interface that a) Used the Corsi block-tapping method to
            display notes. b) Used Chuncking to separate song sections.
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-full"
            src={Pact}
            alt="Image"
          />
        </div>

        <div className="h1 md:px-12">Design</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Sketching and Low Fidelity</div>
          <div className="h3">
            I mapped out the original site map that was being used for the
            Expedite MVP. This allowed me to better understand the intricacies
            of each stage in the Expedite process.
          </div>
          <div className="h3">
            The application has a different dashboard page depending on which
            section of the store the employee belongs to, because employees are
            confined to their store section.
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-full"
            src={Sitemap}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
}

export default Tablature;
