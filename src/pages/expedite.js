import React from "react";

import { Link } from "react-router-dom";
// Hero Image
import ExpediteHero from "../images/expedite/smartphone-expedite-c.jpg";
// Project Images

import Warehouse from "../images/expedite/store.jpg";

import Affinity from "../images/expedite/affinitymap-dark.png";
import Pact from "../images/expedite/pact-dark.png";
import Sitemap from "../images/expedite/sitemap-light.png";
import Journey from "../images/expedite/userjourney-dark.png";
import ScenarioA from "../images/expedite/userscenario-dark.png";
import ScenarioB from "../images/expedite/userscenario-b-dark.png";
import ScenarioC from "../images/expedite/userscenario-c-dark.png";
import LowFid from "../images/expedite/low-fid.png";
import System from "../images/expedite/system-dark.png";

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

import VideoExpedite from "../images/expedite/expedite.mp4";
import VideoSlider from "../images/expedite/slider-a.mp4";
import ImageA from "../images/expedite/image-add.png";
import ImageB from "../images/expedite/image-choice.png";
import Full from "../images/expedite/image-whole.png";

function Expedite() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="md:max-w-7xl mx-auto">
        {/* Project Info */}

        <div className="flex pt-[14vh] pb-24">
          <div className="container flex flex-col gap-y-12">
            <div className="h1">CX Expedite</div>
            <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-y-8 max-w-xl">
                <div className="h3">
                  Expedite is a customer pickup application that manages the
                  retail end. I'm working as the sole designer on the team
                  Expedite for Dynamic CXS. I've{" "}
                  <span className="font-medium">
                    streamlined user journeys, integrated new features &
                    established a design system
                  </span>{" "}
                  across their mobile applications. This product is in the
                  development stage.
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
                  <div className="h4">User Research, UI, UX</div>
                  <div className="h4">August 2022 to Current, 2023</div>
                  <div className="h4">IOS, Android</div>
                  <div className="h4">Myself</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="container">
          <div className="md:flex gap-3 pb-3">
            <div className="">
              <video
                className="rounded-image"
                src={VideoExpedite}
                autoPlay
                loop
                muted
              />
            </div>
            <div>
              <video
                className="rounded-image"
                src={VideoSlider}
                autoPlay
                loop
                muted
              />
            </div>
          </div>
          <div className="md:flex gap-3 pb-3">
            <div className="w-full h-full">
              <img
                className="object-contain mx-auto h-full w-full"
                src={ImageA}
                alt="Image"
              />
            </div>
            <div className="w-full h-full">
              <img
                className="object-contain mx-auto h-full w-full"
                src={ImageB}
                alt="Image"
              />
            </div>
          </div>
          <div className="w-full h-full mx-auto bg-zinc-500 rounded-sm">
            <img
              className="object-contain h-auto w-full"
              src={Full}
              alt="Image"
            />
          </div>
        </div>

        {/*  NEW Project Text */}

        <div className="container flex flex-col gap-y-24 py-24">
          {/*  Container */}
          <div className="h1">Introduction</div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Faster orders, Happier customers.</div>
            <div className="h3">
              Expedite was created was to streamline the complex systems behind
              the pickup-in-store process of warehouse products. The improvement
              in speed, combined with the ease of use for customers to complete
              a pickup order has made for higher customer satisfaction. It is
              currently being used in the Canadian Tire store in Kanata (Ottawa)
              and Halton Hills (GTA).
            </div>
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">A Tool for Communication</div>
            <div className="h3">
              Expedite connects floor employees with warehouse employees in
              large retail stores. The application manages the communication
              between multiple stages of customer facing employees and warehouse
              employees in retail stores.
            </div>
          </div>

          <div className="h1">Research</div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Affinity Mapping</div>
            <div className="h3">
              I started by asking "how might we?" questions, to create an
              affinity map. I wanted to better understand all the goals I needed
              to achieve in my design solutions. I grouped categories by the
              person using the application in the Expedite process. These being:
              a) The Customer b) Customer facing/experience employees c)
              Logistics/Warehouse employees d) Cash employees d) Statistics. The
              categories helped me better manage my questions.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Affinity}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">PACT Analysis</div>
            <div className="h3">
              I decided to conduct a PACT analysis because there are a lot of
              things to consider when designing this application. Many different
              users need to touch the mobile application in order to complete a
              customer pickup, so understanding the user is imperative to
              completing the product's intended tasks.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Pact}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Site Mapping</div>
            <div className="h3">
              I mapped out the original site map that was being used for the
              Expedite MVP. This allowed me to better understand the intricacies
              of each stage in the Expedite process.
            </div>
            <div className="h3">
              The application has a different dashboard page depending on which
              section of the store the employee belongs to, because employees
              are confined to their store section.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Sitemap}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Journey Map</div>
            <div className="h3">
              Expedite is an interesting product to work on because it takes
              into account the journey that both the employee and the customer
              take. This was very difficult for me to understand at first, so
              creating user journeys introduced a lot more clarity all around.
            </div>
            <div className="h3">
              There are two user journeys depicted in the diagram below. I
              mapped the steps that each employee takes to complete a pickup
              order (top). I mapped the journey that the customer takes,
              alongside those employees (bottom).
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Journey}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">User Scenarios</div>
            <div className="h3">
              After site mapping and creating user journeys, I understood that
              each stage in the application was complex and would benefit from
              being mapped via user scenarios. I completed scenarios for each of
              the employee types using the application.
            </div>
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="h3 text-zinc-200">Scroll →</div>

            <div className="w-full h-full flex gap-x-12 overflow-auto rounded-sm border-[0.5px] border-zinc-700 bg-zinc-900">
              <img
                className="object-contain mx-auto h-full w-full p-24"
                src={ScenarioA}
                alt="Image"
              />

              <img
                className="object-contain mx-auto h-full w-full p-24"
                src={ScenarioB}
                alt="Image"
              />

              <img
                className="object-contain mx-auto h-full w-full p-24"
                src={ScenarioC}
                alt="Image"
              />
            </div>
          </div>

          <div className="h1">Designing</div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Mid Fidelity Explorations</div>
          </div>

          <div className="w-full h-full mx-auto">
            <img
              className="object-contain h-auto w-2/3"
              src={LowFid}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">User Testing & Iterating</div>
            <div className="h3">
              We conducted user testing with Canadian Tire employees in
              different roles to get an idea of how well the prototype was
              working during each stage of the Expedite process. User testing
              was hard to schedule, so we conducted short 10 minute testing
              scenarios where we asked employees to try and complete a task and
              express any of their pain points to us. We also observed any
              trouble they were having.
            </div>
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Creating Accessible Designs</div>
            <div className="h3">
              We had a very heterogeneous user base that could vary in
              technological ability. My main concern when designing the
              typography was accommodating employees with poorer eyesight. The
              colours created had a high enough contrast ratio to be accessible
              for all employees. For this reason, there are 9 different type
              styles being used in the current application. Having a large
              variety of sizes allowed for more flexibility when designing
              highly condensed information based components.
            </div>
          </div>

          <div className="w-full h-full mx-auto bg-zinc-500 p-36 rounded-sm">
            <img
              className="object-contain h-auto w-full"
              src={System}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">High Fidelity Design</div>
            <div className="h3">
              The Expedite application has many flows to accommodate the complex
              management system. Here are a couple of screens that explain the
              most common use cases in the application.
            </div>
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Stage 1: Expedite</div>
            <div className="h3">
              A sales floor employee has to request for an item to be found in
              the warehouse.
            </div>
          </div>

          <div className="flex gap-x-6">
            <div>
              <img
                className="object-cover rounded-screen"
                src={ExpediteB}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={ExpediteC}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={ExpediteD}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={ExpediteE}
                alt="ExpediteImage"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Stage 2: Picking</div>
            <div className="h3">
              A warehouse employee has to find that item. Warehouse employees
              are able to select the items they would like to pick and those
              items are added to a picking list. Once the employee has found
              those items, they are able to mark them as found.
            </div>
          </div>

          <div className="flex gap-x-6">
            <div>
              <img
                className="object-cover rounded-screen"
                src={PickingA}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={PickingB}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={PickingC}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={PickingD}
                alt="ExpediteImage"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">Stage 3: Loading</div>
            <div className="h3">
              A loading employee has to load the large ticket item into the
              customer's vehicle. Employees are asked to provide photographic
              proof of loading during this stage.
            </div>
          </div>

          <div className="flex gap-x-6">
            <div>
              <img
                className="object-cover rounded-screen"
                src={LoadingA}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={LoadingB}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={LoadingC}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={LoadingD}
                alt="ExpediteImage"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xl gap-y-2">
            <div className="h2">More Coming Soon...</div>
            <div className="h3">
              This product is still in the process of being worked on! We are
              currently in the development stage. I'm excited to show updates on
              this project as it gets further in its development. To see more
              work i've done with Dyanmic CXS, check out{" "}
              <Link className="underline underline-offset-4" to="/beacons">
                Beacons
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expedite;
