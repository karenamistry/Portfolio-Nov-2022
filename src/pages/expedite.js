import React from "react";
// Hero Image
import ExpediteHero from "../images/expedite/smartphone-expedite-c.jpg";
// Project Images

import Type from "../images/expedite/type-poppins.png";
import System from "../images/expedite/system.jpg";
import Warehouse from "../images/expedite/store.jpg";

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
                features & established a design system across their mobile and
                tablet applications. This project is in the development stage.
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

        <div className="container">
          <div className="flex gap-x-6">
            <div className="container hidden md:flex">
              <div className="">
                <div className="flex flex-col items-end">
                  <div className="flex flex-col gap-y-2">
                    <div className="h4 text-gray-800">Stage 1: Expedite</div>
                    <div className="h5">
                      A sales floor employee has to request for an item to be
                      found in the warehouse.
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
                    <div className="h4 text-gray-800">Stage 2: Picking</div>
                    <div className="h5">
                      A warehouse employee has to find that item.
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
                    <div className="h4 text-gray-800">Stage 3: Loading</div>
                    <div className="h5">
                      A loading employee has to load the large ticket item into
                      the customer's vehicle.
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
                <div className="h3">Versatile Typography</div>
                <div className="h4 max-w-xl">
                  The type system I created for Dynamics CXS is complex because
                  it needed to be very versatile. There are 9 different type
                  styles being used in the current application. Having a large
                  variety of sizes allowed for more flexibility when designing
                  information condensed components. Hierarchy needed to be
                  tight, so that information is easily accessible at a glance.
                  The typography also needed to be accessible to accomadate
                  employees with poorer eyesight.
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
                <div className="h3">More Coming Soon...</div>
                <div className="h4 max-w-xl">
                  This product is still in the process of being worked on! We
                  are currently in the development stage. I'm excited to show
                  updates on this project, including the findings of our user
                  testing, as it gets further in its development.
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
