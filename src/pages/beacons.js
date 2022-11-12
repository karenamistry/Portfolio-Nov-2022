import React from "react";
import Footerbar from "../components/footerbar";
// Hero Image
import StocateHero from "../images/stocate/smartphone-stocate-b.png";
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
      <div className="w-full h-screen">
        <div className="px-2 py-2 text-lg">🥸</div>
        <img
          className="object-contain h-full w-full mx-auto ratio-square bg-gray-800"
          src={StocateHero}
          alt="BeaconsImage"
        />
      </div>
      {/* Hero Project Info */}
      <div className="w-full py-24 bg-gray-800">
        <div className="container mx-auto grid gap-y-3 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
          <div className="col-span-4  text-white flex flex-col justify-end">
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Role</div>
              <div className="p text-white">UR/UX/UI</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Platform</div>
              <div className="p text-white">Mobile</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Timeline</div>
              <div className="p text-white">2022, Jan to Feb</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Team</div>
              <div className="p text-white">Myself</div>
            </div>
          </div>
          {/* Hero Project Description */}
          <div className="col-span-4 flex flex-col gap-y-6">
            <div className="h1 text-white">
              <span className="opacity-80">
                This project started as a case study, but I later worked with
                Dynamics CXS to bring these solutions to development for their
              </span>{" "}
              <span className="font-medium">Beacons</span>{" "}
              <span className="opacity-80">
                product. I redesigned their previous interface to improve user
                journeys, adjust for accessibility and build a design system.
              </span>
            </div>
            <div className="p text-white">
              <span className="opacity-80">
                Beacons increases the efficiency of sales floors in large retail
                stores. Press a button and an employee gets a notification! This
                product is being used in the Canadian Tire Kanata, Ottawa and
                Halton Hills, GTA stores.
              </span>
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
            <div className="h1 col-span-2 text-center">Features</div>
            <div>
              <div className="h2">Accessability Adjustments</div>
              <div className="p">
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
              <div className="caption"></div>
            </div>

            <img
              className="h-auto w-full"
              src={Onboarding}
              alt="BeaconsImage"
            />

            <div>
              <div className="h2">Addition of Onboarding</div>
              <div className="p">
                When an employee is first greeted by the application, they are
                asked about their goals so that we can better suit the
                application to its target audience.
              </div>
            </div>

            <div>
              <div className="h2">Emphasis on Personal Achievements</div>
              <div className="p">
                The previous system of having a customer experience score for
                the entire store was impersonal and did not do anything to
                encourage employee success. By implementing a personal badge and
                level system for retail employees, they are able to see their
                progression separate from their store success and their
                coworkers.
              </div>
            </div>

            <img
              className="h-auto w-full"
              src={Achievement}
              alt="BeaconsImage"
            />

            <div></div>

            <div>
              <div className="h2">Improving the Customer Request Journey</div>
              <div className="p">
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
              <div className="caption"></div>
            </div>

            <div>
              <div className="h2">Simplified Editing</div>
              <div className="p">
                Organizing beacon buttons by department and SKU, which can be
                searched, makes it easier to find and edit beacons on-the-go.
                Previously, all the beacons were all listed together. The icons
                also work to provide more clarity.
              </div>
            </div>

            <img className="h-auto w-full" src={Editing} alt="BeaconsImage" />

            <div className="h1 col-span-2 text-center">Process</div>

            <div>
              <div className="h2">Design Goals</div>
              <div className="p">
                Beacons was created with the goal of enhancing the customer to
                employee service experience, not eliminating it. My goal was to
                expand the reach of the beacons app to more retail stores by
                creating a design that was more clearly emphasizes employee
                success, over retailer success alone.
              </div>
            </div>

            <img className="h-auto w-full" src={Goals} alt="BeaconsImage" />

            <img className="h-auto w-full" src={GoalsB} alt="BeaconsImage" />

            <div>
              <div className="h2">Conducting Interviews</div>
              <div className="p">
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

            <div>
              <div className="h2">Asking HMW Questions</div>
              <div className="p">
                I started the designing process by asking "How Might We"
                questions while listening back to my interviews. I jotted down
                notes and questions related to changes, features and ideas that
                could potentially be implemented.
              </div>
            </div>

            <div></div>
            <div className="">
              <img
                className="h-auto w-full"
                src={Competition}
                alt="BeaconsImage"
              />
              <div className="caption"></div>
            </div>

            <div>
              <div className="h2">Analyzing Competition</div>
              <div className="p">
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

            <div>
              <div className="h2">Mapping User Journeys</div>
              <div className="p">
                One of my goals during this redesign was to improve the user
                journeys within the application. I started by mapping the users
                stories in the application to better understand them. The
                biggest change I made to the mapping of the application was
                changing the landing page to better suit the needs of employees.
              </div>
            </div>

            <div></div>
            <div></div>

            <div>
              <div className="h2">Building Personas</div>
              <div className="p">
                I was able to build realistic personas that were based off the
                employees that I had interviewed. I created two personas that
                represented the two types of users that I had to accommodate.
              </div>
            </div>

            <div className="">
              <img
                className="h-auto w-full"
                src={PersonaA}
                alt="BeaconsImage"
              />
              <div className="caption"></div>
            </div>

            <div className="">
              <img
                className="h-auto w-full"
                src={PersonaB}
                alt="BeaconsImage"
              />
              <div className="caption"></div>
            </div>

            <div>
              <div className="h2">Sketching</div>
              <div className="p">
                Sketching basic UI ideas was an easy way for me to test how they
                would work in the complete user journey before committing to
                prototyping. After sketching, I moved to low and mid fidelity
                mockups.
              </div>
            </div>

            <img className="h-auto w-full" src={Sketch} alt="BeaconsImage" />

            <img className="h-auto w-full" src={Prototype} alt="BeaconsImage" />

            <div>
              <div className="h2">Prototyping</div>
              <div className="p">
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

            <div>
              <div className="h2">User Testing</div>
              <div className="p">
                I scheduled in-person user testing meeting with the same
                employees at Canadian Tire that I had previously interviewed to
                user test the user journey for creating a customer request. My
                user testing lasted about 20 mins, and consisted of me letting
                users find their way around the designed prototype and provide
                me with their thoughts.
              </div>
            </div>

            <div></div>
            <div></div>

            <div>
              <div className="h2">Iterating</div>
              <div className="p">
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

            <div>
              <div className="h2">Reflection</div>
              <div className="p">
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

      <Footerbar />
    </>
  );
}

export default Beacons;
