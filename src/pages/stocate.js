import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import StocateHero from "../images/stocate/smartphone-stocate-d.png";
// Project Images

import Goals from "../images/stocate/goals.png";
import Challenge from "../images/stocate/challenge.png";

import Jira from "../images/stocate/jira-logo.png";

import Interview from "../images/stocate/user-interviews.png";
import Testing from "../images/stocate/user-testing.png";

import Pipeline from "../images/stocate/pipeline.jpg";

import Flow from "../images/stocate/prototype-flow.png";
import User from "../images/stocate/user-flow.png";

import Iterating from "../images/stocate/iterating-adding.png";

import SystemA from "../images/stocate/design-system.png";
import SystemB from "../images/stocate/design-system-2.png";

// features images
import onboardingA from "../images/stocate/features/onboarding/sketcha.jpg";

import onboardingD from "../images/stocate/features/onboarding/first.jpg";
import onboardingE from "../images/stocate/features/onboarding/second.jpg";
import onboardingF from "../images/stocate/features/onboarding/third.jpg";

import browsingA from "../images/stocate/features/browsing/page1.jpg";
import browsingB from "../images/stocate/features/browsing/page2.jpg";
import browsingC from "../images/stocate/features/browsing/page3.jpg";

import addingA from "../images/stocate/features/adding/addingmenu.jpg";
import addingB from "../images/stocate/features/adding/AddStore-0.jpg";
import addingC from "../images/stocate/features/adding/AddStore-1.jpg";
import addingD from "../images/stocate/features/adding/AddStore-2.jpg";
import addingE from "../images/stocate/features/adding/AddStore-3.jpg";

import listA from "../images/stocate/features/lists/lista.jpg";
import listB from "../images/stocate/features/lists/listb.jpg";
import listC from "../images/stocate/features/lists/listc.jpg";

import feedbA from "../images/stocate/features/chat/Chat Page-0.jpg";
import feedbB from "../images/stocate/features/chat/Chat Page-1.jpg";
import feedbC from "../images/stocate/features/chat/Chat Page-2.jpg";

function Stocate() {
  return (
    <>
      {/* NEW Hero Image */}
      <div className="w-full h-screen z-10">
        <div className="paragraph x-2 text-xs">🥸</div>
        <img
          className="object-cover h-full w-full mx-auto ratio-square bg-cyan-600 rounded-b-xl"
          src={StocateHero}
          alt="ExpediteImage"
        />
      </div>

      {/* NEW Project Info */}

      <div className="flex bg-cyan-600 py-24 rounded-b-xl">
        <div className="container flex flex-col gap-y-12">
          <div className="h2 text-white">Stocate</div>
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
                <div className="h5 text-white">April 2022 to August, 2022</div>
                <div className="h5 text-white">IOS, Android, Desktop</div>
                <div className="h5 text-white">
                  Myself, Amritpal Singh, Joey Koay
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3 text-white">
                Stocate connects local and sustainable businesses with
                customers. My impact is most clearly seen from the systems that
                I designed to aid in the growth and scalability of the product,
                as well as the interfaces I designed to improve core features in
                the mobile application.
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
                <div className="h3">Be Local Everywhere</div>
                <div className="h4 max-w-xl">
                  Stocate connects users to a community of sustainably minded
                  individuals and businesses. This community provides
                  recommendations for locally and sustainably sourced products
                  and stores in their area.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div>
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Setting Goals</div>
                <div className="h4 max-w-xl">
                  During my internship, I was given the opportunity to create
                  goals for the product and manage the actualization of these
                  goals through the product and development teams. My primary
                  goal was to increase the amount of active users we retained in
                  the application. My secondary goal was to speed up our process
                  of implementing new design solutions into our MVP. These goals
                  were actualized through the completion of the following
                  solutions and systems I built during my internship.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-1/2 object-contain rounded-screen"
              src={Goals}
              alt="ExpediteImage"
            />
            <div className="h5">
              My very initial (very messy) notes for best case and worst case
              scenario goals.
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Improving Core Features</div>
                <div className="h4 max-w-xl">
                  Generating design solutions for user problems within the
                  mobile application was one of my main tasks at Stocate. We
                  wanted to strengthen our core features, in order to improve
                  our active user numbers and solidify our core user journey. To
                  improve a core feature, I went through steps of conducting
                  user research, designing, user testing & iterating.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">User Interviews</div>
                <div className="h4 max-w-xl">
                  Learning about the user is integral to my design process. I
                  conducted a variety of user interviews to get information
                  about our primary and secondary user personas. These
                  interviews provided us with a) user's thoughts concerning the
                  core use cases for the application, because we were still in
                  the process of solidifying our primary product goal. b) Their
                  general thoughts on the interface likes and dislikes.
                  Interviews did not reach the specificity of user testing. c)
                  Features they would like to see in the application. Interviews
                  provided information to narrow down our personas, core
                  problems and get us in contact with potential users.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-5/6 object-contain rounded-screen"
              src={Interview}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Parsing User Problems</div>
                <div className="h4 max-w-xl">
                  Using a backlog of user data obtained from prior user testing
                  and in-app feedback, I was able to organize and sort of over
                  180 user comments from separate users concerning the initial
                  versions of the Stocate mobile and web applications. We were
                  looking to parse the most crucial problems users were having
                  in our applications, so we could prioritize them when building
                  solutions.
                </div>
                <div className="h4 max-w-xl">
                  I organized all the data by type of problem, section of the
                  app it concerned, completion status of of that feedback, &
                  team that could work on the solution. This was initially done
                  in an excel document to test the benefits of this
                  organization. We intended to develop a dashboard system to
                  organize incoming feedback in realtime. I designed a interface
                  solution based on the organizational structure of the excel
                  document. This dashboard is in the development stage.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">HMW & Managing Tasks</div>
                <div className="h4 max-w-xl">
                  Once we understood user feedback, we were able to prioritize
                  solving for crucial interface and experience flaws in the
                  design of the desktop and mobile application. We brainstormed
                  and discussed potential solution routes about how we might go
                  about solving for these core problems. We were able to narrow
                  our core problems to specific users flows in the application
                  that needed improvement.The mobile application was where we
                  started this development. The user flows we planned sprints
                  for were: Onboarding, Adding, Messaging, & Transactions.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Approach</div>
                <div className="h4 max-w-xl">
                  With the customer at the core of our design philosophy, the
                  process of arriving at a final design solution was very
                  iterative. The process we used for creating design solutions
                  was the Agile sprint methodology, with our sprints lasting
                  around 1 to 2 weeks each. Our goal from the sprints was to
                  improve the core features of our applications, in order to
                  retain active users.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-1/3 object-contain rounded-screen"
              src={Jira}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Site Mapping and User Flow Diagrams</div>
                <div className="h4 max-w-xl">
                  Our team worked to make user flow diagrams for the entire
                  application, because that documentation was not yet in place.
                  We diagrammed the user flows in figma, so we could visualize
                  the prototype more clearly, in our mobile application. Before
                  starting the design process, mapping user flows helped us
                  figure out where improvements could be made.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-2/3 object-contain rounded-screen"
              src={Flow}
              alt="ExpediteImage"
            />
            <div className="h5">
              We created a site map using our existing application pages to
              understand from the larger scale flows to the smaller scale
              interactions. This helped us understand how our systems were
              working together.
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Building a Scalable Design System</div>
                <div className="h4 max-w-xl">
                  To meet our mission of creating customer centered design
                  solutions, we needed to receive and respond to customer needs
                  within the applications as quickly as we can. One of the
                  systems I built to aid in this process was the design system.
                  It was built to aid in the speed of designing and implementing
                  for pages within the mobile and desktop applications. The
                  process of building the system was very iterative because the
                  system was constantly growing.
                </div>
                <div className="h4 max-w-xl">
                  Before I started my internship, a style guide was created to
                  lay the groundwork for the design system that I built. The
                  groundwork consisted of the primary teal, that was used in the
                  logo, and a few typographic styles that were not yet
                  documented.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-5/6 object-contain rounded-screen"
              src={SystemA}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-5/6 object-contain rounded-screen"
              src={SystemB}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Streamlining Feedback Pipeline</div>
                <div className="h4 max-w-xl">
                  Another one of the systems I helped build to aid in process of
                  creating customer centered design solutions was the feedback
                  dashboard. The feedback dashboard is an end-to-end process for
                  receiving customer problems and creating user centered
                  solutions. It was created to organize the excess of customer
                  feedback received directly from the application and feedback
                  received from user testing. It allowed us to prioritize
                  feedback on a scale of 1-5, as well as group similar
                  feedbacks. The steps in the end-to-end process are as follows:
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-5/6 object-contain rounded-screen"
              src={Pipeline}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Mockups & Prototyping</div>
                <div className="h4 max-w-xl">
                  Our MVP already existed, my job was to bring the MVP to a more
                  definite and concise model. During this stage in the process,
                  I was able to iterate upon our design system. I created
                  components as they were needed. This kept our design system
                  smaller and more intentional. The mockups I created worked off
                  the design of our prior application.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-2/3 object-contain rounded-screen"
              src={User}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">User Testing</div>
                <div className="h4 max-w-xl">
                  User testing was conducted to improve clarity, speed and
                  enjoyment for users within specific user flows. User testing
                  was conducted for each sprint during the mid fidelity stage.
                  Once users provided us with their feedback, we moved to the
                  high fidelity stage, where all flaws and details were ironed
                  out.
                </div>
                <div className="h4 max-w-xl">
                  I conducted user testing bi-weekly with different users,
                  during sprints for our mobile application. User testing
                  sessions were a mix of in-person and via Zoom. They each
                  lasted about 30 mins. The first section of the session would
                  be an interview with the user, to help build our personas and
                  understand user perspectives. In the second section, users
                  would walk me through their experience with our Figma
                  prototype. During this portion, I am able to focus in on
                  roadblocks users have during specific areas of the
                  application. Conducting interviews and completing scenarios in
                  the application provided us with both quantitative and
                  qualitative information.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-1/3 object-contain rounded-screen"
              src={Testing}
              alt="ExpediteImage"
            />
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">Iterating</div>
                <div className="h4 max-w-xl">
                  Improved user journeys within the application were created by
                  conducting extensive user testing and iterating afterwards.
                  After user testing, I would return to prototyping in Figma to
                  resolve problems or challenges users had brought up. For most
                  features, iterating once or twice was enough time spent, but
                  larger user flows required three or four iterations. This was
                  the case when designing for the adding flows because it was a
                  more complex problem to solve for.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center">
            <img
              className="w-5/6 object-contain rounded-screen"
              src={Iterating}
              alt="ExpediteImage"
            />
            <div className="h5">
              Iterations for our adding user flow. I did 4 iterations of this
              flow before arriving at our solution.
            </div>
          </div>
        </div>

        <div className="container flex justify-center max-w-4xl">
          <div className="">
            <div className="flex flex-col items-end">
              <div className="flex flex-col gap-y-2">
                <div className="h3">High Fidelity Design</div>
                <div className="h4 max-w-xl">
                  After iterating, we arrived at a final version of the
                  interface. These are a few of the final design solutions I
                  designed for the mobile application.
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
                    <div className="h4">
                      We built an onboarding flow to solve for users having
                      trouble navigating the application on first download.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={onboardingA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={onboardingE}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={onboardingF}
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
                    <div className="h5 text-gray-800">Browsing</div>
                    <div className="h4">
                      Improved interface for the browsing section of the
                      application provides users with a more inviting and
                      informative introduction to the application.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={browsingA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={browsingB}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={browsingC}
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
                    <div className="h5 text-gray-800">
                      Create your shopping list
                    </div>
                    <div className="h4">
                      The creating list feature of the mobile application was
                      moved to be more readily available for users. As well as
                      interface improvements to make the experience more
                      enjoyable.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={listA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={listB}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={listC}
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
                    <div className="h5 text-gray-800">Adding Stores</div>
                    <div className="h4">
                      Improvements for the user journey of adding stores in the
                      application were made in order to make for a faster and
                      more enjoyable user experience.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={addingA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={addingE}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={addingC}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={addingD}
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
                    <div className="h5 text-gray-800">
                      Receive Feedback from the Community
                    </div>
                    <div className="h4">
                      Stocate is a community based application. Asking the
                      community for feedback on the mobile and desktop
                      applications give the product team more feedback to work
                      from.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={feedbA}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={feedbB}
                alt="ExpediteImage"
              />
            </div>
            <div className="">
              <img
                className="object-cover rounded-screen"
                src={feedbC}
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
                  Working at Stocate was like when they say to always work with
                  people smarter than yourself. It paid off in the amount of
                  growth i've had as a designer and as a member of a product
                  team. Working closely with a development team made the
                  importance of communication that much more crucial. I was able
                  to hone my skills in planning and presenting ideas to
                  stakeholders. Getting experience creating human centered
                  design solutions helped me better understand how to juggle
                  user wants versus needs.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Container Padding   */}
      </div>
    </>
  );
}

export default Stocate;
