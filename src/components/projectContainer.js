import React from "react";
import { NavLink } from "react-router-dom";
import StocateHome from "../images/stocate/smartphone-stocate-d.png";
import ExpediteHome from "../images/expedite/smartphone-expedite-c.jpg";
import BeaconsHome from "../images/beacons/smartphone-beacons-a.png";
import TablatureHome from "../images/other/cover-tablature.jpg";
import FeatureHome from "../images/other/cover-feature.jpg";
import InstaHome from "../images/other/insta-cover.jpg";
import CasperHome from "../images/other/casper-cover.jpg";

function ProjectContainer() {
  return (
    <div className="bg-white w-screen py-24">
      <div className="container flex flex-col gap-y-24">
        <NavLink to="/expedite">
          <div className="flex flex-col gap-y-6" href="#">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h2">Expedite</div>
                <div className="h5 max-w-md pb-2">April - Current, 2023</div>
              </div>
              <div className="h3 max-w-2xl">
                Developing a product that seamlessly integrates complex systems
                into a friendly interface.
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl"
                src={ExpediteHome}
                alt="StocateImage"
              />
            </div>
          </div>
        </NavLink>
        <NavLink to="/stocate">
          <div className="flex flex-col gap-y-6" href="#">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h2">Stocate</div>
                <div className="h5 max-w-md pb-2">April - August, 2022</div>
              </div>
              <div className="h3 max-w-2xl">
                Creating customer centered solutions to aid the buying
                experience of sustainable products.
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl">
              <img
                className="object-contain lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl bg-cyan-600"
                src={StocateHome}
                alt="StocateImage"
              />
            </div>
          </div>
        </NavLink>

        <NavLink to="/beacons">
          <div className="flex flex-col gap-y-6" href="#">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h2">Beacons</div>
                <div className="h5 max-w-md pb-2">January - February, 2022</div>
              </div>
              <div className="h3 max-w-2xl">
                Improving the service experience for customers and empowering
                employee success in the retail workplace.
              </div>
            </div>
            <div className="w-full bg-gray-800 rounded-3xl">
              <img
                className="object-contain lg:h-[620px] md:h-[420px] sm:h-[320px] w-full  rounded-3xl"
                src={BeaconsHome}
                alt="StocateImage"
              />
            </div>
          </div>
        </NavLink>

        {/* Half s */}

        <div className="flex flex-col gap-y-24 md:flex-row md:gap-y-0 md:gap-x-6">
          <a
            target="_blank"
            href="https://www.behance.net/gallery/154462559/Feature-UR-UX-UI-Case-Study"
          >
            <div className="flex flex-col gap-y-6" href="#">
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col">
                  <div className="h2">Feature</div>
                  <div className="h5 max-w-md pb-2">2020 Case Study</div>
                </div>
                <div className="h3 max-w-xl">
                  Encouraging young people to stay interested in politics.
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-3xl">
                <img
                  className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl"
                  src={FeatureHome}
                  alt="InstasnacksImage"
                />
              </div>
            </div>
          </a>
          <a
            target="_blank"
            href="https://www.behance.net/gallery/154472601/Guitar-Tablature-UX-UI-Case-Study"
          >
            <div className="flex flex-col gap-y-6" href="#">
              <div className="flex flex-col gap-y-2">
                <div className="flex flex-col">
                  <div className="h2">Tablature</div>
                  <div className="h5 max-w-md pb-2">2021 Case Study</div>
                </div>
                <div className="h3 max-w-xl">
                  Improving song learning for guitar playing by using AR.
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-3xl">
                <img
                  className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl"
                  src={TablatureHome}
                  alt="InstasnacksImage"
                />
              </div>
            </div>
          </a>
        </div>
        {/* End Half s */}

        <a
          target="_blank"
          href="https://www.behance.net/gallery/138923685/Instasnacks-Motion-Illustrative-Content"
        >
          <div className="flex flex-col gap-y-6" href="#">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h2">Instasnacks</div>
                <div className="h5 max-w-md pb-2">2021</div>
              </div>
              <div className="h3 max-w-2xl">
                Creating a brand strategy and social media presence for a
                company that sells entirely through delivery platforms.
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl"
                src={InstaHome}
                alt="InstasnacksImage"
              />
            </div>
          </div>
        </a>

        <a
          target="_blank"
          href="https://www.behance.net/gallery/138924473/Casper-Kitchen-Social-Media-Strategy-Photography"
        >
          <div className="flex flex-col gap-y-6" href="#">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <div className="h2">Casper Kitchen</div>
                <div className="h5 max-w-md pb-2">2021</div>
              </div>
              <div className="h3 max-w-2xl">
                Using social media to boost sales for a restaurant company that
                sells entirely through delivery platforms during a pandemic.
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-3xl">
              <img
                className="object-cover lg:h-[620px] md:h-[420px] sm:h-[320px] w-full rounded-3xl"
                src={CasperHome}
                alt="CasperImage"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProjectContainer;
