import React from "react";
import { NavLink } from "react-router-dom";
import StocateHome from "../images/stocate/smartphone-stocate-b.png";
import ExpediteHome from "../images/expedite/smartphone-expedite-a.png";
import BeaconsHome from "../images/beacons/smartphone-beacons-a.png";
import TablatureHome from "../images/other/cover-tablature.jpg";
import FeatureHome from "../images/other/cover-feature.jpg";
import InstaHome from "../images/other/insta-cover.jpg";
import CasperHome from "../images/other/casper-cover.jpg";

function ProjectContainer() {
  return (
    <div className="w-screen bg-slate-50 pb-24">
      <div className="flex flex-col gap-y-12">
        <NavLink to="/stocate">
          <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
            <div className="row-span-2 col-span-4 text-500 title">Stocate</div>
            <div className="flex gap-x-6 col-span-4 caption ">
              <div className="gray-text">UX/UI</div>
              <div className="gray-text">Apr - Aug</div>
              <div className="gray-text">Mobile & Desktop</div>
            </div>
            <div className="row-span-2 col-span-4 pb-6 h1">
              Creating customer centered solutions to aid the buying experience
              of sustainable products.
            </div>
          </div>
          <div className="container bg-slate-200 mx-auto rounded-2xl">
            <img
              className="object-contain lg:h-[620px] md:h-[420px] sm:h-[320px] w-full "
              src={StocateHome}
              alt="StocateImage"
            />
          </div>
        </NavLink>

        <NavLink to="/beacons">
          <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
            <div className="row-span-2 col-span-4 text-500 title">Beacons</div>
            <div className="flex gap-x-6 col-span-4 caption ">
              <div className="gray-text">UR/UX/UI</div>
              <div className="gray-text">Jan - Feb</div>
              <div className="gray-text">Mobile</div>
            </div>
            <div className="row-span-2 col-span-4 pb-6 h1">
              Improving the service experience for customers and empowering
              employee success in the retail workplace.
            </div>
          </div>
          <div className="container bg-slate-200 mx-auto rounded-2xl">
            <img
              className="object-contain lg:h-[620px] md:h-[420px] sm:h-[320px] w-full"
              src={BeaconsHome}
              alt="StocateImage"
            />
          </div>
        </NavLink>

        <NavLink to="/expedite">
          <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
            <div className="row-span-2 col-span-4 text-500 title">Expedite</div>
            <div className="flex gap-x-6 col-span-4 caption ">
              <div className="gray-text">UX/UI</div>
              <div className="gray-text">April - Current</div>
              <div className="gray-text">Mobile</div>
              <div className="gray-text">In Progress</div>
            </div>
            <div className="row-span-2 col-span-4 pb-6 h1">
              Developing a product that seamlessly integrates complex systems
              into a friendly interface.
            </div>
          </div>
          <div className="container bg-slate-200 mx-auto rounded-2xl">
            <img
              className="rounded-2xl object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full"
              src={ExpediteHome}
              alt="StocateImage"
            />
          </div>
        </NavLink>

        {/* Half Containers */}

        <div className="container mx-auto flex gap-x-6">
          <a
            target="_blank"
            href="https://www.behance.net/gallery/154462559/Feature-UR-UX-UI-Case-Study"
          >
            <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
              <div className="row-span-2 col-span-4 text-500 title">
                Feature
              </div>
              <div className="flex gap-x-6 col-span-4 caption ">
                <div className="gray-text">UR/UX/UI</div>
                <div className="gray-text">Case Study</div>
                <div className="gray-text">Mobile</div>
              </div>
              <div className="row-span-2 col-span-4 pb-6 h1">
                Encouraging young people to stay interested in politics.
              </div>
            </div>
            <div className="container bg-slate-200 mx-auto rounded-2xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-2xl"
                src={FeatureHome}
                alt="StocateImage"
              />
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.behance.net/gallery/154472601/Guitar-Tablature-UX-UI-Case-Study"
          >
            <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
              <div className="row-span-2 col-span-4 text-500 title">
                Tablature
              </div>
              <div className="flex gap-x-6 col-span-4 caption ">
                <div className="gray-text">UR/UX/UI</div>
                <div className="gray-text">Case Study</div>
                <div className="gray-text">Desktop</div>
              </div>
              <div className="row-span-2 col-span-4 pb-6 h1">
                Improving song learning experience for guitar playing using AR.
              </div>
            </div>
            <div className="container bg-slate-200 mx-auto rounded-2xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-2xl"
                src={TablatureHome}
                alt="StocateImage"
              />
            </div>
          </a>
        </div>

        {/* End Half Containers */}

        <a
          target="_blank"
          href="https://www.behance.net/gallery/138923685/Instasnacks-Motion-Illustrative-Content"
        >
          <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
            <div className="row-span-2 col-span-4 text-500 title">
              Instasnacks
            </div>
            <div className="flex gap-x-6 col-span-4 caption ">
              <div className="gray-text">UX/UI</div>
              <div className="gray-text">Apr - Dec</div>
              <div className="gray-text">Mobile</div>
            </div>
            <div className="row-span-2 col-span-4 pb-6 h1">
              Creating a brand strategy and social media presence for a company
              that sells entirely through delivery platforms.
            </div>
          </div>
          <div className="container bg-slate-200 mx-auto rounded-2xl">
            <img
              className="rounded-2xl object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full"
              src={InstaHome}
              alt="StocateImage"
            />
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.behance.net/gallery/138924473/Casper-Kitchen-Social-Media-Strategy-Photography"
        >
          <div className="container mx-auto grid gap-y-3 row-span-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
            <div className="row-span-2 col-span-4 text-500 title">
              Casper Kitchen
            </div>
            <div className="flex gap-x-6 col-span-4 caption ">
              <div className="gray-text">UR/UX/UI</div>
              <div className="gray-text">Apr - Dec</div>
              <div className="gray-text">Mobile</div>
            </div>
            <div className="row-span-2 col-span-4 pb-6 h1">
              Using social media to boost sales for a restaurant company that
              sells entirely through delivery platforms during a pandemic.
            </div>
          </div>
          <div className="container bg-slate-200 mx-auto rounded-2xl">
            <img
              className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full"
              src={CasperHome}
              alt="StocateImage"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
