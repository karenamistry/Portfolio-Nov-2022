import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import BeaconsHero from "../images/beacons/smartphone-beacons-a.png";
// Project Images

import { NavLink } from "react-router-dom";

import Access from "../images/beacons/accessibility.png";
import Screens from "../images/beacons/screens-dark.png";
import Onboarding from "../images/beacons/onboarding.png";
import Achievement from "../images/beacons/achievements.png";
import Request from "../images/beacons/requests.png";
import Editing from "../images/beacons/editing.png";
import System from "../images/beacons/system-dark.png";

import Pull from "../images/beacons/interview-pullquote-dark-2.png";
import Affinity from "../images/beacons/affinity-mapping-dark-2.png";
import Sitemap from "../images/beacons/site-map-dark.png";
import Journey from "../images/beacons/user-journey-dark.png";
import Differences from "../images/beacons/differences.jpeg";
import Testing from "../images/beacons/user-testing-dark-2.png";
import Comparison from "../images/beacons/comparison.svg";

import Competition from "../images/beacons/competition-gray.png";
import PersonaBoth from "../images/beacons/persona-both.png";
import Goals from "../images/beacons/goals.png";
import GoalsB from "../images/beacons/goals-2.png";
import Sketch from "../images/beacons/sketching.png";
import Prototype from "../images/beacons/prototype.png";

import IteratingA from "../images/beacons/iteration-a.png";
import IteratingB from "../images/beacons/iteration-b.png";

import Overview from "../images/beacons/overview-beacons.png";

function Beacons() {
  return (
    <div className="w-full h-auto bg-zinc-900">
      <div className="container md:max-w-6xl mx-auto">
        <div className="py-[14vh] pb-24">
          <div className="flex flex-col gap-y-12">
            <div className="h1">CX Beacons</div>
            <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-y-8 max-w-xs">
                <div className="h3">
                  Beacons is an "ask for help" button for retail stores that is
                  managed through a mobile application. This project started as
                  a case study, but I worked with Dynamics CXS to bring these
                  solutions to development. I redesigned their previous
                  interface to{" "}
                  <span className="">
                    improve user journeys, adjust for accessibility and build a
                    design system.
                  </span>
                </div>
              </div>
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
                    <div className="h4">January 2022 to February, 2022</div>
                    <div className="h4">IOS, Android</div>
                    <div className="h4">Myself</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[80vh] z-10 pb-6">
          <img
            className="object-contain mx-auto h-full w-full bg-gray-800 rounded-sm "
            src={BeaconsHero}
            alt="ExpediteImage"
          />
        </div>

        <div className="flex gap-x-6">
          <div className="w-1/2 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Goals}
              alt="Image"
            />
          </div>
          <div className="w-1/2 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={GoalsB}
              alt="Image"
            />
          </div>
        </div>
        {/*  NEW Project Text */}

        <div className="flex flex-col gap-y-28 py-24">
          {/* Container */}
          <div className="h1 ">Introduction</div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">From Case Study to Shipped</div>
                <div className="h3">
                  I was introduced to this project while working on a freelance
                  branding project for Dynamic CXS, separate from this
                  application. I decided to create this case study as a way to
                  show them better user centered design solutions for their
                  Beacons product. I did this hoping that they would want to
                  work with me to implement my solution. I was able to pitch my
                  design solution to Dynamic CXS and ship most of my final
                  design solution.
                </div>
              </div>
            </div>
            <div className="md:w-1/2"></div>
          </div>

          <div className="w-full h-[1px] bg-zinc-700"> </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full rounded-sm"
              src={Overview}
              alt="Image"
            />
          </div>

          <div className="h1 ">Research</div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Employee Success</div>
            <div className="h3">
              Beacons was created with the goal of enhancing the customer
              service experience, not eliminating it. By creating a design that
              more clearly emphasizes employee success, over retailer success
              alone, we could improve the experience of our users, the retail
              employee.
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">User Interviews</div>
                <div className="h3">
                  I started my research by interviewing employees at the
                  Canadian Tire Kanata store to learn the application from their
                  perspective. Some questions I asked were as such: What do you
                  consider pros and cons? What was the previous system used to
                  answer customer requests? Can you walk me through your regular
                  use cases of the app?
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className=" h-full mx-auto">
                <img
                  className="object-contain h-auto w-full"
                  src={Pull}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Affinity Mapping & How might we ?s</div>
                <div className="h3">
                  By asking "How Might We" questions, while listening back to my
                  interviews, I was able to get an ideas of what needed to be
                  addressed in the redesign. I jotted down notes and questions
                  related to changes, features and ideas that could potentially
                  be implemented. A few takeaways being:
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full mx-auto">
                <img
                  className="object-contain h-auto w-full"
                  src={Affinity}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Building Personas</div>
            <div className="h3">
              I was able to build realistic personas that were based off the
              employees that I had interviewed. I created two personas that
              represented the heterogeneous group of users that I had to
              accommodate. For this reason, accessibility was important to
              consider when designing.
            </div>
            <div className="h3">
              If I were able to spend more time on this projects, I would have
              also liked to have created personas for the customer, on the
              opposite end of the Beacons application.
            </div>
          </div>

          <div className="w-2/3 h-full mx-auto">
            <img
              className="object-contain h-auto w-full p-6 bg-white"
              src={PersonaBoth}
              alt="Image"
            />
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Competition Analysis</div>
                <div className="h3">
                  I researched the features of the two competitor products. The
                  first Synq Order Up, is used specifically for expensive lockup
                  items that require employee intervention to purchase. Acuity
                  Playbook is more similar to Beacons, except it suggests paths
                  for employees to take in order to successfully sell product.
                </div>
                <div className="h3">
                  Analyzing applications competitive with Beacons was a
                  roadblock I faced because most similar products require
                  consultation to get access. To overcome this, I looked at
                  analogous applications like Square, that are have to take into
                  account the experience of both the employee and the customer.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className=" h-full mx-auto">
                <img
                  className="object-contain h-auto w-full"
                  src={Competition}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Requests User Journey</div>

            <div className="h3">
              The core user journey of the application is when an employee
              answers a button being pressed. Requests usually involve the
              employee opening a locked up item, or just helping a customer make
              a buying decision. The app asks the employee what type of request
              they received after the completion of the request.
            </div>
          </div>

          <div className=" h-full mx-auto">
            <img
              className="object-contain h-auto w-full"
              src={Journey}
              alt="Image"
            />
          </div>

          <div className="h1 ">Designing</div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Sketching & Low Fidelity</div>
            <div className="h3">
              Sketching basic UI ideas was an easy way for me to test how user
              flows would work before committing to prototyping. After
              sketching, I moved to mid fidelity mockups in Figma.
            </div>
          </div>

          <div className="w-full h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Sketch}
              alt="Image"
            />
          </div>

          <div className="w-2/3 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Prototype}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Prototyping</div>
            <div className="h3">
              I began prototyping the core user flows first, which mapped how an
              employee responded when a customer presses a button.
            </div>
            <div className="h3">
              I created two different iterations for completing this flow. The
              reason I did this was because I wasn't sure what would be valued
              more by the user: Prioritizing in progress requests or
              prioritizing the escalated requests? I knew I could verify this
              with A/B testing.
            </div>
          </div>

          <div className="w-2/3 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Differences}
              alt="Image"
            />
          </div>

          <div className="flex flex-col gap-y-6">
            <div className="h3 text-zinc-200">Scroll →</div>

            <div className="w-full h-full flex gap-x-12 overflow-auto rounded-sm border-[0.5px] border-zinc-700 bg-zinc-900">
              <img
                className="object-contain mx-auto h-full w-full p-24"
                src={IteratingA}
                alt="Image"
              />

              <img
                className="object-contain mx-auto h-full w-full p-24"
                src={IteratingB}
                alt="Image"
              />
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">User Testing</div>
                <div className="h3">
                  I scheduled in-person user testing meeting with the same
                  employees at Canadian Tire that I had previously interviewed
                  during my research phase. My user testing lasted about 20 mins
                  each, and consisted of me asking users to complete a task and
                  scenario in the prototype. I let users find their way around
                  the designed prototype and observed actions and mood. I also
                  asked them to provide me with their thoughts as they went
                  along.
                </div>
                <div className="h3">
                  After user testing, I was able to use the feedback to iterate
                  and narrow in on final mockups. Here were a few of the
                  takeways:
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full mx-auto rounded-sm">
                <img
                  className="object-contain h-auto w-full rounded-sm"
                  src={Testing}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Iterating</div>
            <div className="h3">
              To solve for one of the major feedbacks I received, which was
              wanting to see who was in progress of completing a request, I
              iterated upon the request component.
            </div>
            <div className="h3">
              Users can see in progress requests at a glance and if they would
              like more information, like what specific SKU employees are busy
              with, users can visit the inprogress page.
            </div>
          </div>

          <div className="w-2/3 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Comparison}
              alt="Image"
            />
          </div>

          <div className="w-full h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={System}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">High Fidelity Design</div>
            <div className="h3">
              These screens are a culmination of 1 stage of user testing and
              iterating with Canadian Tire employees. If it weren't for time and
              cost constraints, I would have liked to have done more iterating.
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Onboarding</div>
            <div className="h3">
              When an employee is first greeted by the application, they are
              asked about their goals so that we can better suit the application
              to its target audience.
            </div>
          </div>

          <div className="w-2/3 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Onboarding}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Customer Requests</div>
            <div className="h3">
              Telling employees where and when the button was pressed, as well
              as if their coworkers are already occupied with customers.
              Improving how an employee receives requests when customers press
              the beacons button.
            </div>
          </div>

          <div className="w-3/4 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Request}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Achievement</div>
            <div className="h3">
              The previous system of having a customer experience score for the
              entire store was impersonal and did not do anything to encourage
              employee success. By implementing a personal badge and level
              system for retail employees, they are able to see their
              progression separate from their store success and their coworkers.
            </div>
          </div>

          <div className="w-1/3 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Achievement}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Editing</div>
            <div className="h3">
              Organizing beacon buttons by department and SKU, which can be
              searched, makes it easier to find and edit beacons on-the-go.
              Previously, all the beacons were all listed together. The icons
              also work to provide more clarity.
            </div>
          </div>

          <div className="w-1/2 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Editing}
              alt="Image"
            />
          </div>

          <div className="w-2/3 h-full mx-auto rounded-sm">
            <img
              className="object-contain h-auto w-full rounded-sm"
              src={Screens}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-lg gap-y-2 ">
            <div className="h2">Reflection</div>
            <div className="h3">
              Working on Beacons was a case study that I had initially done to
              try and improve my product design skills. I was able to learn far
              more than I had anticipated which I was very happy about.
            </div>
            <div className="h3">
              I was able to better understand the difference between interface
              and experience design and how they both work together. Prior to
              this I was thinking about them more as being a singular thing.
            </div>
            <div className="h3">
              I was able to conduct user testing with people that were actually
              going to use the product, so it felt really validating to create
              human centered solutions.
            </div>
            <div className="h3">
              I was able to work on product that takes into account both the
              user and the customer which helped me think about the overall
              product, outside of just design
            </div>
          </div>

          {/* Container End */}

          {/* Footer Links other projects */}

          <div className="w-full h-auto rounded-sm">
            <div className="pb-12">
              <div className="h1">Like what you see?</div>
              <div className="h1">Check out some more.</div>
            </div>
            <div className="flex items-start flex-col md:flex-row gap-y-12">
              <div className="md:w-1/2">
                <NavLink to="/campaign">
                  <div className="flex flex-col gap-2 py-4">
                    <div className="h2 max-w-sm">
                      Branding a Successful Trustee Campaign
                    </div>
                    <div className="h4">Graphic Design & Branding</div>
                  </div>
                </NavLink>
              </div>
              <div className="md:w-1/2">
                <NavLink to="/branding">
                  <div className="flex flex-col gap-2 py-4">
                    <div className="h2 max-w-sm">Branding Small Businesses</div>
                    <div className="h4">Graphic Design, Branding</div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="flex items-start flex-col md:flex-row gap-y-12">
              <div className="md:w-1/2">
                <NavLink to="/expedite">
                  <div className="flex flex-col gap-2 py-4">
                    <div className="h2 max-w-sm">
                      Improving Your Pickup Experience with Expedite
                    </div>
                    <div className="h4">
                      User Research, User Interface, User Experience
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="md:w-1/2">
                <NavLink to="/stocate">
                  <div className="flex flex-col gap-2 py-4">
                    <div className="h2 max-w-sm">
                      Making Sustainability More Approachable with Stocate
                    </div>
                    <div className="h4">User Interface, User Experience</div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beacons;
