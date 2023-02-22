import React from "react";

import { Link } from "react-router-dom";

// Hero Images
import VideoExpedite from "../images/expedite/expedite-2.mp4";
import VideoSlider from "../images/expedite/slider-a.mp4";
import ImageA from "../images/expedite/image-add.png";
import ImageB from "../images/expedite/image-choice.png";
import Full from "../images/expedite/image-whole.png";
// Project Images
import Overview from "../images/expedite/overview-expedite-2.png";
import Affinity from "../images/expedite/affinitymap-dark-2.png";
import Pact from "../images/expedite/pact-dark-2.png";
import Sitemap from "../images/expedite/sitemapB.png";
import Journey from "../images/expedite/userjourney-dark-2.png";
import ScenarioA from "../images/expedite/userscenario-dark.png";
import ScenarioB from "../images/expedite/userscenario-b-dark.png";
import ScenarioC from "../images/expedite/userscenario-c-dark.png";
import LowFid from "../images/expedite/low-fid-3.png";
import System from "../images/expedite/system-dark-b.png";
// Solution Images
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

{
  /* CHANGES: Added container to second div, added overview & lines, xs sized containers */
}

function Expedite() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container md:max-w-6xl mx-auto">
        {/* Project Info */}
        <div className="py-[14vh] pb-24">
          <div className="flex flex-col gap-y-12">
            {/* Titles */}
            <div className="h1">CX Expedite</div>
            <div className="flex flex-col gap-y-6 md:flex-row">
              <div className="md:w-1/2 ">
                <div className="md:max-w-xs h3">
                  Expedite is a customer pickup application that manages the
                  retail end. I'm working as the sole designer on the team
                  Expedite for Dynamic CXS. I've{" "}
                  <span className="font-medium">
                    streamlined user journeys, integrated new features &
                    established a design system
                  </span>{" "}
                  across their mobile applications. This product is in
                  development.
                </div>
              </div>
              {/* Info */}
              <div className="md:w-1/2">
                <div className="flex gap-x-6">
                  <div className="flex flex-col gap-y-0.5 w-16">
                    <div className="h4">Role</div>
                    <div className="h4">Timeline</div>
                    <div className="h4">Platform</div>
                    <div className="h4">Team</div>
                  </div>
                  <div className="flex flex-col gap-y-0.5">
                    <div className="h4">User Research, UI, UX</div>
                    <div className="h4">August 2022 to Current, 2023</div>
                    <div className="h4">IOS, Android</div>
                    <div className="h4">Myself</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Images */}
        <div>
          <div className="md:flex gap-3 pb-3">
            <div>
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
          <div className="w-full h-full mx-auto rounded-sm pb-3">
            <img
              className="object-contain h-auto w-full"
              src={Full}
              alt="Image"
            />
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
        </div>

        {/*  NEW Project Text */}

        <div className="flex flex-col gap-y-28 py-24">
          {/*  Container */}
          <div className="h1">Introduction</div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
                <div className="h2">Faster orders, Happier customers.</div>
                <div className="h3">
                  Expedite was created was to streamline the complex systems
                  behind the pickup-in-store process of warehouse products. The
                  improvement in speed, combined with the ease of use for
                  customers to complete a pickup order has made for higher
                  customer satisfaction. It is currently being used in the
                  Canadian Tire store in Kanata (Ottawa) and Halton Hills (GTA).
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
                <div className="h2">A Tool for Communication</div>
                <div className="h3">
                  Expedite connects floor employees with warehouse employees in
                  large retail stores. The application manages the communication
                  between multiple stages of customer facing employees and
                  warehouse employees in retail stores.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-zinc-800"> </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full rounded-sm"
              src={Overview}
              alt="Image"
            />
          </div>

          <div className="h1">Research</div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
                <div className="h2">Affinity Mapping</div>
                <div className="h3">
                  I wanted to better understand all the goals I needed to
                  achieve in my final design solutions. I grouped categories by
                  employee type using the application in the Expedite process.
                  These being: a) The customer b) The customer facing employee
                  c) The warehouse employee d) The cash employee. These
                  categories helped me better manage my questions.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Affinity}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
                <div className="h2">PACT Analysis</div>
                <div className="h3">
                  There are a lot of things to consider when designing this
                  application. Many different users touch the mobile application
                  in order to complete a customer pickup, so understanding our
                  user personas and specific contexts are imperative to
                  completing the product's intended tasks.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full"
                  src={Pact}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
            <div className="h2">Site Mapping</div>
            <div className="h3">
              Creating a site map allowed me to better understand the
              intricacies of each stage in the Expedite process. It was
              important that the application have a different dashboard page
              depending on which section of the store the employee belongs to,
              because they needed to be confined to their store section in the
              application.
            </div>
          </div>
          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Sitemap}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
            <div className="h2">Journey Map</div>
            <div className="h3">
              Expedite takes into account the journey of both the employee and
              the customer. This was difficult for me to understand at first, so
              creating simplified user journeys introduced a lot more clarity.
            </div>
            <div className="h3">
              There are two user journeys depicted below. I mapped the steps
              that each employee takes to complete a pickup order (top). I
              mapped the journey that the customer takes, alongside those
              employees (bottom).
            </div>
          </div>
          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={Journey}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
            <div className="h2">User Scenarios</div>
            <div className="h3">
              Each stage in the application was complex and would benefit from
              being mapped, so I did so via user scenarios. I completed
              scenarios for each of the employee types using the application,
              and wrote down HMW questions, and concerns alongside each step in
              the process.
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="h3 text-zinc-200">Scroll →</div>
            <div className="w-full h-full flex gap-x-12 overflow-auto rounded-sm border-[0.5px] border-zinc-700 bg-zinc-900">
              <img
                className="object-contain mx-auto h-full w-full p-16"
                src={ScenarioA}
                alt="Image"
              />

              <img
                className="object-contain mx-auto h-full w-full p-16"
                src={ScenarioB}
                alt="Image"
              />

              <img
                className="object-contain mx-auto h-full w-full p-16"
                src={ScenarioC}
                alt="Image"
              />
            </div>
            <div className="h1">Designing</div>
            <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
              <div className="h2">Mid Fidelity Explorations</div>
            </div>
            <div className="w-full h-full mx-auto">
              <img
                className="object-contain h-auto w-full"
                src={LowFid}
                alt="Image"
              />
            </div>{" "}
          </div>

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
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

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
            <div className="h2">Creating Accessible Designs</div>
            <div className="h3">
              We had a very heterogeneous user base that could vary in
              technological ability. My main concern when designing the
              typography was accommodating employees with poorer eyesight. The
              colours created had a high enough contrast ratio to be accessible
              for all employees. Having a large variety of sizes allowed for
              more flexibility when designing highly condensed information based
              components.
            </div>
          </div>

          <div className="w-full h-full mx-auto bg-zinc-800 pt-12 rounded-sm">
            <img
              className="object-contain h-auto w-full"
              src={System}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
            <div className="h2">High Fidelity Design</div>
            <div className="h3">
              The Expedite application has many flows to accommodate the complex
              management system. Here are a couple of screens that explain the
              most common use cases in the application.
            </div>
          </div>

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
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

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
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

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
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

          <div className="flex flex-col max-w-full md:max-w-xs gap-y-2">
            <div className="h2">More Coming Soon...</div>
            <div className="h3">
              This product is still in the process of being worked on! We are
              currently working on the managerial and cash sections of the
              applications. I'm excited to show updates on this project as it
              gets further in its development. To see more work i've done with
              Dyanmic CXS, check out{" "}
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
