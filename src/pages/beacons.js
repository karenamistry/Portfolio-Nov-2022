import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import BeaconsHero from "../images/beacons/smartphone-beacons-a.png";
// Project Images

import Access from "../images/beacons/accessibility.png";
import Screens from "../images/beacons/screens.png";
import Onboarding from "../images/beacons/onboarding.png";
import Achievement from "../images/beacons/achievements.png";
import Request from "../images/beacons/requests.png";
import Editing from "../images/beacons/editing.png";

import Competition from "../images/beacons/competition.png";
import PersonaBoth from "../images/beacons/persona-both.png";
import Goals from "../images/beacons/goals.png";
import GoalsB from "../images/beacons/goals-2.png";
import Sketch from "../images/beacons/sketching.png";
import Prototype from "../images/beacons/prototype.png";

import IteratingA from "../images/beacons/iteration-a.png";
import IteratingB from "../images/beacons/iteration-b.png";

function Beacons() {
  return (
    <>
      {/* NEW Hero Image */}
      <div className="w-full h-screen z-10">
        <div className="paragraph x-2 text-xs">🥸</div>
        <img
          className="object-contain h-full w-full mx-auto ratio-square bg-gray-800"
          src={BeaconsHero}
          alt="ExpediteImage"
        />
      </div>

      {/* NEW Project Info */}

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
                  User Research, User Interface, User Experience
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
                Beacons is an "ask for help" button for retail stores that is
                managed through a mobile application. This project started as a
                case study, but I worked with Dynamics CXS to bring these
                solutions to development. I redesigned their previous interface
                to improve user journeys, adjust for accessibility and build a
                design system.
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
                <div className="h3">Personal Goals</div>
                <div className="h4 max-w-xl">
                  This project started as a freelance branding project for
                  Dynamic CXS. I created this case study as a way to show them
                  better design solutions in their Beacons product, hoping that
                  they would want to work with me to implement my solution. I
                  was able to pitch my design solution to Dynamic CXS and ship
                  my final design solution.
                </div>
                <div className="h3">Design Goals</div>
                <div className="h4 max-w-xl">
                  Beacons was created with the goal of enhancing the customer to
                  employee service experience, not eliminating it. My goal was
                  to expand the reach of the beacons app to more retail stores
                  by creating a design that was more clearly emphasizes employee
                  success, over retailer success alone.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex mx-auto">
            <img
              className="w-1/2  object-cover rounded-screen"
              src={Goals}
              alt="ExpediteImage"
            />
            <img
              className="w-1/2 object-cover rounded-screen"
              src={GoalsB}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Interviews & Pain Points</div>
                <div className="h4 max-w-xl">
                  I started researching by interviewing employees at the
                  Canadian Tire Kanata store to learn the application from their
                  perspective. I did this to learn about pain points within the
                  user journeys. Some questions I asked were as such: What do
                  you consider pros and cons? What was the previous system used
                  to answer customer requests? Can you walk me through your
                  regular use cases of the app?
                </div>
                <div className="h4 max-w-xl">
                  The biggest thing I learned during this stage was that there
                  was a divide between older and younger employees due to ease
                  of use of the app.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Affinity Mapping & HMW</div>
                <div className="h4 max-w-xl">
                  By asking "How Might We" questions while listening back to my
                  interviews, I was able to get an ideas of what needed to be
                  addressed in the redesign. I jotted down notes and questions
                  related to changes, features and ideas that could potentially
                  be implemented.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Competitive Analysis</div>
                <div className="h4 max-w-xl">
                  I was able to research features of the two competitor
                  products. The first Synq Order Up, is used specifically for
                  expensive lockup items that require employee intervention to
                  purchase. Acuity Playbook is more similar to Beacons, except
                  it suggests paths for employees to take in order to
                  successfully sell product.
                </div>
                <div className="h4 max-w-xl">
                  Analyzing applications competitive with Beacons was a
                  roadblock I faced, because most similar products require
                  consultation to get access. To overcome this, I researched
                  applications, like Square, that are have to take into account
                  the experience of both the employee and the customer.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-1/3 h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-contain rounded-screen mx-auto"
                src={Competition}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Site Mapping & User Journeys</div>
                <div className="h4 max-w-xl">
                  In order to improve the user journeys within the application,
                  I created a site map within the application to provide a birds
                  eye view of the entire system. This allowed me to recognize
                  that the landing page was not in an optimal location. The
                  biggest change I made to the mapping of the application was
                  changing the landing page to better suit the needs of
                  employees.
                </div>
                <div className="h4 max-w-xl">
                  I started by mapping the users stories in the application to
                  better understand the process employees take once a button is
                  pressed in the store. This meant mapping:{" "}
                  <span className="italic">
                    What happens when a button is pressed?
                  </span>{" "}
                  and also{" "}
                  <span className="italic">
                    What happens when a request is not met?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Building Personas</div>
                <div className="h4 max-w-xl">
                  I was able to build realistic personas that were based off the
                  employees that I had interviewed. I created two personas that
                  represented the two types of users that I had to accommodate.
                  This persona consisted of the employees that were using the
                  application to complete a task.
                </div>
                <div className="h4 max-w-xl">
                  If I were able to spend more time on this projects, I would
                  have also liked to have created personas for the customer, on
                  the opposite end of the Beacons application.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-1/2 h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen p-4"
                src={PersonaBoth}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Ideas to Paper</div>
                <div className="h4 max-w-xl">
                  Sketching basic UI ideas was an easy way for me to test how
                  they would work in the complete user journey before committing
                  to prototyping. After sketching, I moved to mid fidelity
                  mockups in Figma.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-2/3 h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={Sketch}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-2/3 h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={Prototype}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Prototyping</div>
                <div className="h4 max-w-xl">
                  I began prototyping the core user journey first, which mapped
                  how an employee responded when a customer presses a button.
                </div>
                <div className="h4 max-w-xl">
                  I created two different iterations for completing this flow.
                  The reason I did this was because I wasn't sure what would be
                  valued more by the user: Prioritizing in progress requests or
                  prioritizing the escalated requests? I knew I could verify
                  this with A/B testing. After A/B testing the customer request
                  user flow, I was able to build the rest of the pages in the
                  app around the core user journey.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">User Testing</div>
                <div className="h4 max-w-xl">
                  I scheduled in-person user testing meeting with the same
                  employees at Canadian Tire that I had previously interviewed
                  during my research phase. My user testing lasted about 20 mins
                  each, and consisted of me asking users to complete a task and
                  scenario and letting users find their way around the designed
                  prototype and provide me with their thoughts.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-2/3 h-auto mx-auto flex flex-col gap-y-4">
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={IteratingA}
                alt="ExpediteImage"
              />
            </div>
            <div className="object-contain">
              <img
                className="object-cover rounded-screen"
                src={IteratingB}
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
                  After user testing, I was able to use the feedback to iterate
                  and narrow in on final mockups.
                </div>
                <div className="h4 max-w-xl">
                  One of the major changes I made after user testing was the
                  addition of an inprogress state for requests. This made it
                  possible for employees to know, at a glance, who is already
                  busy with a request. If they would like more information, like
                  what specific SKU employees are busy with, users can visit the
                  inprogress page.
                </div>
                <div className="h4 max-w-xl">
                  Another example of a change made during this stage, was an
                  emphasized escalated interface, when a request is not met.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">High Fidelity Design</div>
                <div className="h4 max-w-xl">
                  These screens are a culmination of 1 stage of iterating and
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
                    <div className="h5 text-gray-800">Onboarding</div>
                    <div className="h4 max-w-lg">
                      When an employee is first greeted by the application, they
                      are asked about their goals so that we can better suit the
                      application to its target audience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={Onboarding}
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
                    <div className="h5 text-gray-800">Customer Requests</div>
                    <div className="h4 max-w-lg">
                      Telling employees where and when the button was pressed,
                      as well as if their coworkers are already occupied with
                      customers. Improving how an employee receives requests
                      when customers press the beacons button.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={Request}
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
                    <div className="h5 text-gray-800">Achievements</div>
                    <div className="h4 max-w-lg">
                      The previous system of having a customer experience score
                      for the entire store was impersonal and did not do
                      anything to encourage employee success. By implementing a
                      personal badge and level system for retail employees, they
                      are able to see their progression separate from their
                      store success and their coworkers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={Achievement}
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
                    <div className="h5 text-gray-800">Editing</div>
                    <div className="h4 max-w-lg">
                      Organizing beacon buttons by department and SKU, which can
                      be searched, makes it easier to find and edit beacons
                      on-the-go. Previously, all the beacons were all listed
                      together. The icons also work to provide more clarity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={Editing}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="w-full md:w-2/3 h-auto mx-auto">
            <div className="object-contain">
              <img
                className="object-contain"
                src={Screens}
                alt="ExpediteImage"
              />
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Reflection</div>
                <div className="h4 max-w-xl">
                  I started this project as a case study, to further my UI and
                  UX skills, but I was able to work with Dynamics and learn far
                  more than I had anticipated. I found this product so
                  interesting because it concerns the user journey of both the
                  user and the customer. My skills in prototyping, user testing
                  and iterating have vastly improved since working on this
                  project.
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

export default Beacons;
