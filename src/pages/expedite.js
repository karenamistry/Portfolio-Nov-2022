import React from "react";
// Hero Image
import ExpediteHero from "../images/expedite/smartphone-expedite-c.jpg";
// Project Images

import Type from "../images/expedite/type-poppins.png";
import System from "../images/expedite/system.jpg";
import Warehouse from "../images/expedite/store.jpg";

import Affinity from "../images/expedite/affinitymap.png";
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

function Expedite() {
  return (
    <>
      {/* NEW Hero Image */}
      <div className="w-full h-screen z-10">
        <div className="paragraph x-2 text-xs">🥸</div>
        <img
          className="object-cover h-full w-full mx-auto ratio-square bg-sky-600 rounded-3xl"
          src={ExpediteHero}
          alt="ExpediteImage"
        />
      </div>

      {/* NEW Project Info */}

      <div className="flex bg-sky-600 py-24 rounded-b-xl">
        <div className="container flex flex-col gap-y-12">
          <div className="h2 text-white">CX Expedite</div>
          <div className="flex flex-col gap-y-6 md:flex-row md:justify-between">
            <div className="flex gap-x-6">
              <div className="flex flex-col opacity-80 gap-y-2">
                <div className="h5 text-white">Role</div>
                <div className="h5 text-white">Timeline</div>
                <div className="h5 text-white">Platform</div>
                <div className="h5 text-white">Team</div>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="h5 text-white">
                  User Interface, User Experience
                </div>
                <div className="h5 text-white">
                  August 2022 to Current, 2023
                </div>
                <div className="h5 text-white">IOS, Android</div>
                <div className="h5 text-white">Myself</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3 text-white">
                Expedite is a customer pickup application that manages the
                retail end. I'm working as the sole designer on Expedite for
                Dynamic CXS. I've streamlined user journeys, integrated new
                features & established a design system across their mobile
                applications. This product is in the development stage.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  NEW Project Text */}

      <div className="flex flex-col gap-y-24 pt-24 pb-24">
        <div className="container flex justify-center max-w-4xl">
          <div>
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Faster orders, Happier customers.</div>
                <div className="h4 max-w-xl">
                  Expedite was created was to streamline the complex systems
                  behind the pickup-in-store process of warehouse products. The
                  improvement in speed, combined with the ease of use for
                  customers to complete a pickup order has made for higher
                  customer satisfaction. It is currently being used in the
                  Canadian Tire store in Kanata (Ottawa) and Halton Hills (GTA).
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="mx-auto">
            <img
              className="w-full h-[25rem] object-cover rounded-screen"
              src={Warehouse}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">A Tool for Communication</div>
                <div className="h4 max-w-xl">
                  Expedite connects floor employees with warehouse employees in
                  large retail stores. The application manages the communication
                  between multiple stages of customer facing employees and
                  warehouse employees in retail stores.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Affinity Mapping</div>
                <div className="h4 max-w-xl">
                  Initially I started by asking "how might we?" questions and
                  creating an affinity map in order to better understand the
                  product. I grouped my categories by the stage in the expedite
                  process. These being: Customer experience employees (CXP),
                  Logistics employees (Warehouse), Cash (Checkout) & Statistics.
                  This helped me better manage my questions.
                </div>
                <div className="h4 max-w-xl">
                  A few takeaways being: Where do we implement with the new
                  customer profile feature? How can we make the customer
                  information filling as quick as possible? How can logistics
                  employees be able to see upcoming order for that day?
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-full h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen mx-auto"
                src={Affinity}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Site Mapping</div>
                <div className="h4 max-w-xl">
                  I mapped out the original site map for the Expedite MVP. This
                  allowed me to understand the intricacies of the system.
                </div>
                <div className="h4 max-w-xl">
                  The application has a different landing page depending on
                  which section of the store the employee belongs to because
                  employees are confined to their store section. Except for
                  management (which is why I made a circle and a note during a
                  meeting to let myself know).
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-full h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={SiteMap}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">User Journeys</div>
                <div className="h4 max-w-xl">
                  Expedite is an interesting product to work on because it takes
                  into account the journey that both the employee and the
                  customer take. This was very difficult for me to understand,
                  so introducing user journeys to the business team for provided
                  a lot of clarity all around.
                </div>
                <div className="h4 max-w-xl">
                  There are two user journeys depicted in the diagram below. I
                  mapped the steps that each employee takes to complete a pickup
                  order (blue, green, red). Below that I mapped the journey that
                  the customer takes, alongside those employees (orange).
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-full h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={UserJourney}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Building a Visual System</div>
                <div className="h4 max-w-xl">
                  The main purpose of the design system in the case of expedite
                  was to create consistency across multiple applications.
                  Working with already existing brand colors, I was able to
                  build a solidified and documented design system of colours,
                  components and typography.
                </div>
                <div className="h4 max-w-xl">
                  The system made it easier for the development team to publish
                  designs, allowing for user testing to be done more often with
                  Canadian Tire employees, giving us more consistent feedback.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-full h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={System}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Accessible Typography</div>
                <div className="h4 max-w-xl">
                  There are 9 different type styles being used in the current
                  application. My main concern when designing the typography was
                  accommodating employees with poorer eyesight. The type system
                  is complex because it needed to be very versatile. Having a
                  large variety of sizes allowed for more flexibility when
                  designing highly condensed information based components.
                  Hierarchy also needed to be tight, so that information is
                  easily accessible at a glance.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-1/2 h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={Type}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Integrating New Features</div>
                <div className="h4 max-w-xl">
                  In order to speed up the process of obtaining customer contact
                  information, the customer profile was made so basic customers
                  contact information is already in the system. The customer
                  profile needed to be integrated with the already existing
                  expedite user journey, for picking, used by customer facing
                  employees. This was a challenge to integrate in a clean way,
                  because I needed to avoid interfering with any of the already
                  existing processes.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex gap-x-6">
            <div className="">
              <img
                className="w-5/6 object-cover rounded-screen"
                src={Cust1}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="w-5/6 object-cover rounded-screen"
                src={Cust2}
                alt="ExpediteImage"
              />
            </div>

            <div className="">
              <img
                className="w-5/6 object-cover rounded-screen"
                src={Cust3}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="w-5/6 object-cover rounded-screen"
                src={Cust4}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Iterating</div>
                <div className="h4 max-w-xl">
                  We learned that employees were often picking items in similar
                  departments all at once. This meant that there needed to be an
                  option to select a single or multiple items during the picking
                  and loading stages. To solve for this we adjusted the
                  interface to allow for multiple items to be picked.
                </div>
                <div className="h4 max-w-xl">
                  When developing our customer profile, we were running into the
                  problem of having multiple accounts in the system under the
                  same phone number. To solve this problem, the customer profile
                  is created when a phone number is not found in the Expedite
                  system. Employees are prompted to create a new profile using
                  that number.
                </div>
                <div className="h4 max-w-xl">
                  Originally, I had designed a multiple dash interface element
                  to help employees keep track of where they were in the
                  process. We later learned that this was confusing users,
                  because users each counted the steps differently. This was
                  replaced with a timeline element that just reached closer to
                  completion at the end of each step.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-1/3 h-auto mx-auto flex gap-x-6">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={IterateA}
                alt="ExpediteImage"
              />
            </div>
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={IterateB}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">High Fidelity Design</div>
                <div className="h4 max-w-xl">
                  The Expedite application has many flows to accommodate the
                  complex management system. Here are a couple of screens that
                  explain the most common use cases of the application.
                </div>
                <div className="h4 max-w-xl">
                  These screens are a culmination of 2 stages of iterating and
                  user testing with Canadian Tire employees.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex gap-x-6">
            <div className="container hidden md:flex">
              <div className="">
                <div className="flex flex-col items-end">
                  <div className="flex flex-col gap-y-2">
                    <div className="h5 text-gray-800">Stage 1: Expedite</div>
                    <div className="h4">
                      A sales floor employee has to request for an item to be
                      found in the warehouse.
                    </div>
                    <div className="h4">
                      The Customer Profile feature was implemented in this
                      stage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={ExpediteB}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={ExpediteC}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={ExpediteD}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={ExpediteE}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex gap-x-6">
            <div className="container hidden md:flex">
              <div className="">
                <div className="flex flex-col items-end">
                  <div className="flex flex-col gap-y-2">
                    <div className="h5 text-gray-800">Stage 2: Picking</div>
                    <div className="h4">
                      A warehouse employee has to find that item.
                    </div>
                    <div className="h4">
                      Warehouse employees are able to select the items they
                      would like to pick and those items are added to a picking
                      list. Once the employee has found those items, they are
                      able to mark them as found.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={PickingA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={PickingB}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={PickingC}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={PickingD}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex gap-x-6">
            <div className="container hidden md:flex">
              <div className="">
                <div className="flex flex-col items-end">
                  <div className="flex flex-col gap-y-2">
                    <div className="h5 text-gray-800">Stage 3: Loading</div>
                    <div className="h4">
                      A loading employee has to load the large ticket item into
                      the customer's vehicle.
                    </div>
                    <div className="h4">
                      Employees are asked to provide photographic proof of
                      loading during this stage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={LoadingA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={LoadingB}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={LoadingC}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={LoadingD}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">More Coming Soon...</div>
                <div className="h4 max-w-xl">
                  This product is still in the process of being worked on! We
                  are currently in the development stage. I'm excited to show
                  updates on this project as it gets further in its development.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Container Padding */}
      </div>
    </>
  );
}

export default Expedite;
