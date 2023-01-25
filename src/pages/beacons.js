import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import BeaconsHero from "../images/beacons/smartphone-beacons-a.png";
// Project Images

import Access from "../images/beacons/accessibility.png";
import Onboarding from "../images/beacons/onboarding.png";
import Achievement from "../images/beacons/achievements.png";
import Request from "../images/beacons/requests.png";
import Editing from "../images/beacons/editing.png";
import Competition from "../images/beacons/competition.png";
import Goals from "../images/beacons/goals.png";
import GoalsB from "../images/beacons/goals-2.png";
import Sketch from "../images/beacons/sketching.png";
import Prototype from "../images/beacons/prototype.png";
import PersonaA from "../images/beacons/persona-a.png";
import PersonaB from "../images/beacons/persona-b.png";
import IteratingA from "../images/beacons/iteration-a.png";
import IteratingB from "../images/beacons/iteration-b.png";

function Beacons() {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-screen z-10">
        <div className="h4 x-2 text-xs">🥸</div>
        <img
          className="object-contain h-full w-full mx-auto ratio-square bg-gray-800"
          src={BeaconsHero}
          alt="BeaconsImage"
        />
      </div>
      {/* Hero Project Info */}
      <div className="flex bg-gray-800 py-24 rounded-b-xl">
        <div className="container flex flex-col gap-y-12">
          <div className="h2 text-white">CX Beacons</div>
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
                  January 2022 to February, 2022
                </div>
                <div className="h5 text-white">IOS, Android</div>
                <div className="h5 text-white">Myself</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3 text-white">
                Beacons improving the service experience for customers and
                empowers employee success in the retail workplace. This project
                started as a case study, but I worked with Dynamics CXS to bring
                these solutions to development for their Beacons product. I
                redesigned their previous interface to improve user journeys,
                adjust for accessibility and build a design system.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Text */}

      <div className="w-full px-2 py-12 bg-slate-50">
        {/* Container for Gray BKG */}
        <div className="container mx-auto max-w-5xl">
          {/* Responsive Container */}
          <div className="grid grid-col-2 gap-24 justify-center items-center auto-cols-fr">
            {/* Grid Whole Container */}
            <div className="h2 col-span-2 text-center sm:col-span-2">
              Features
            </div>
            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Accessability Adjustments</div>
              <div className="h4 ">
                Providing large font sizes and more contrast makes the new
                interface better equipped to function for all employees.
              </div>
            </div>

            <div className="col-span-2">
              <img
                className="h-auto w-full object-contain"
                src={Access}
                alt="BeaconsImage"
              />
              <div className="h4"></div>
            </div>

            <img
              className="h-auto w-full sm:col-span-2"
              src={Onboarding}
              alt="BeaconsImage"
            />

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">Addition of Onboarding</div>
              <div className="h4 ">
                When an employee is first greeted by the application, they are
                asked about their goals so that we can better suit the
                application to its target audience.
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">Emphasis on Personal Achievements</div>
              <div className="h4 ">
                The previous system of having a customer experience score for
                the entire store was impersonal and did not do anything to
                encourage employee success. By implementing a personal badge and
                level system for retail employees, they are able to see their
                progression separate from their store success and their
                coworkers.
              </div>
            </div>

            <img
              className="h-auto w-full sm:col-span-2"
              src={Achievement}
              alt="BeaconsImage"
            />

            <div className="sm:hidden"></div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">
                Improving the Customer Request Journey
              </div>
              <div className="h4 ">
                Telling employees where and when the button was pressed, as well
                as if their coworkers are already occupied with customers.
                Improving how an employee receives requests when customers press
                the beacons button.
              </div>
            </div>

            <div className="col-span-2">
              <img
                className="h-auto w-full object-contain"
                src={Request}
                alt="BeaconsImage"
              />
              <div className="h4"></div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">Simplified Editing</div>
              <div className="h4 ">
                Organizing beacon buttons by department and SKU, which can be
                searched, makes it easier to find and edit beacons on-the-go.
                Previously, all the beacons were all listed together. The icons
                also work to provide more clarity.
              </div>
            </div>

            <img
              className="h-auto w-full sm:col-span-2"
              src={Editing}
              alt="BeaconsImage"
            />

            <div className="h2 col-span-2 text-center">Process</div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">Design Goals</div>
              <div className="h4 ">
                Beacons was created with the goal of enhancing the customer to
                employee service experience, not eliminating it. My goal was to
                expand the reach of the beacons app to more retail stores by
                creating a design that was more clearly emphasizes employee
                success, over retailer success alone.
              </div>
            </div>

            <img
              className="h-auto w-full sm:col-span-2"
              src={Goals}
              alt="BeaconsImage"
            />

            <img
              className="h-auto w-full sm:col-span-2"
              src={GoalsB}
              alt="BeaconsImage"
            />

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Conducting Interviews</div>
              <div className="h4 ">
                I started researching by interviewing employees at the Canadian
                Tire Kanata store to learn the application from their
                perspective. I did this to learn about pain points within the
                user journeys. For example, I learned that there was a divide
                between older and younger employees due to ease of use of the
                app. Some questions I asked were as such: What do you consider
                pros and cons? What was the previous system used to answer
                customer requests? Can you walk me through your regular use
                cases of the app?
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">Asking HMW Questions</div>
              <div className="h4 ">
                I started the designing process by asking "How Might We"
                questions while listening back to my interviews. I jotted down
                notes and questions related to changes, features and ideas that
                could potentially be implemented.
              </div>
            </div>

            <div className="sm:hidden"></div>

            <div className="sm:col-span-2">
              <img
                className="h-auto w-full"
                src={Competition}
                alt="BeaconsImage"
              />
              <div className="h4"></div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">Analyzing Competition</div>
              <div className="h4 ">
                Analyzing applications competitive with Beacons was a roadblock
                I faced, because most similar products require consultation to
                get access. I was able to research features of the two
                competitor products. The first Synq Order Up, is used
                specifically for expensive lockup items that require employee
                intervention to purchase. Acuity Playbook is more similar to
                Beacons, except it suggests paths for employees to take in order
                to successfully sell product.
              </div>
            </div>

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Mapping User Journeys</div>
              <div className="h4 ">
                One of my goals during this redesign was to improve the user
                journeys within the application. I started by mapping the users
                stories in the application to better understand them. The
                biggest change I made to the mapping of the application was
                changing the landing page to better suit the needs of employees.
              </div>
            </div>

            <div className=" sm:hidden"></div>
            <div className="sm:hidden"></div>

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Building Personas</div>
              <div className="h4 ">
                I was able to build realistic personas that were based off the
                employees that I had interviewed. I created two personas that
                represented the two types of users that I had to accommodate.
              </div>
            </div>

            <div className=" sm:col-span-2">
              <img
                className="h-auto w-full"
                src={PersonaA}
                alt="BeaconsImage"
              />
              <div className="h4"></div>
            </div>

            <div className=" sm:col-span-2">
              <img
                className="h-auto w-full"
                src={PersonaB}
                alt="BeaconsImage"
              />
              <div className="h4"></div>
            </div>

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Sketching</div>
              <div className="h4 ">
                Sketching basic UI ideas was an easy way for me to test how they
                would work in the complete user journey before committing to
                prototyping. After sketching, I moved to low and mid fidelity
                mockups.
              </div>
            </div>

            <img
              className="h-auto w-full sm:col-span-2"
              src={Sketch}
              alt="BeaconsImage"
            />

            <img
              className="h-auto w-full sm:col-span-2"
              src={Prototype}
              alt="BeaconsImage"
            />

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Prototyping</div>
              <div className="h4 ">
                I began prototyping the main customer request user flow first,
                meaning how does an employee respond to a customer presses a
                button. I created two different iterations for completing this
                flow. The reason I did this was because I wasn't sure what would
                be valued more by the user. Prioritizing in progress requests or
                prioritizing the escalated requests? I knew I could verify this
                with A/B testing. There were also other UI differences between
                the iterations that I could also get user's thoughts and
                preferences. After A/B testing the customer request user flow, I
                was able to build the rest of the pages in the app around.
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="h3 mb-2 ">User Testing</div>
              <div className="h4 ">
                I scheduled in-person user testing meeting with the same
                employees at Canadian Tire that I had previously interviewed to
                user test the user journey for creating a customer request. My
                user testing lasted about 20 mins, and consisted of me letting
                users find their way around the designed prototype and provide
                me with their thoughts.
              </div>
            </div>

            <div className="sm:hidden"></div>
            <div className="sm:hidden"></div>

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Iterating</div>
              <div className="h4 ">
                After user testing and iterating, I was able to use the feedback
                to iterate and narrow in on a final prototype. One of the major
                changes I made after user testing was the addition of an
                inprogress state for requests. This made it possible for
                employees to know, at a glance, who is already busy with a
                request. If they would like more information, like what specific
                SKU employees are busy with, users can visit the inprogress
                page.
              </div>
            </div>

            <img
              className="h-auto w-full col-span-2"
              src={IteratingA}
              alt="BeaconsImage"
            />

            <img
              className="h-auto w-full  col-span-2"
              src={IteratingB}
              alt="BeaconsImage"
            />

            <div className=" sm:col-span-2">
              <div className="h3 mb-2 ">Reflection</div>
              <div className="h4 ">
                I started this project as a case study, to further my UI and UX
                skills, but I was able to work with Dynamics and learn far more
                than I had anticipated. I found this product so interesting
                because it concerns the user journey of both the user and the
                customer. My skills in prototyping, user testing and iterating
                have vastly improved since working on this project.
              </div>
            </div>
            {/* End - Project Text */}
          </div>
        </div>
      </div>

      <Navbar />
    </>
  );
}

export default Beacons;
