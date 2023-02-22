import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import StocateHero from "../images/stocate/smartphone-stocate-d.png";
// Project Images

import Goals from "../images/stocate/goals-blue.png";
import Matrix from "../images/stocate/priority-matrix.png";

import Interview from "../images/stocate/user-interviews.png";
import LowFid from "../images/stocate/low-fid-4.png";
import Iterating from "../images/stocate/Iterating-b.png";
import IteratingB from "../images/stocate/iterating-adding-light-a.png";
import IteratingC from "../images/stocate/iterating-adding-light-b.png";
import Testing from "../images/stocate/user-testing-2.png";
import Pipeline from "../images/stocate/pipeline.jpg";
import Flow from "../images/stocate/prototype-flow.png";
import User from "../images/stocate/user-flow.png";
import SystemA from "../images/stocate/system-dark.png";
import SystemB from "../images/stocate/design-system-2-dark.png";
import Overview from "../images/stocate/overview-stocate.png";

// Hero Images
import StocateSlider from "../images/stocate/stocate.mp4";
import StocateScreens from "../images/stocate/screens.mp4";
import StocateImage from "../images/stocate/stocate-2.png";
import ImageB from "../images/expedite/image-choice.png";
import Full from "../images/expedite/image-whole.png";

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
    <div className="w-full h-auto bg-zinc-900">
      <div className="container md:max-w-6xl mx-auto">
        {/* Project Info */}

        <div className="py-[14vh] pb-24">
          <div className="flex flex-col gap-y-12">
            <div className="h1">Stocate</div>
            <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
              <div className="flex flex-col gap-y-8 max-w-xs">
                <div className="h3">
                  Stocate connects local and sustainable businesses with
                  customers. My impact is most clearly seen from the systems
                  that I{" "}
                  <span className="">
                    designed to aid in the growth and scalability
                  </span>{" "}
                  of the product, as well as the interfaces I designed to{" "}
                  <span className="">improve core features</span> in the mobile
                  application.
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
                    <div className="h4">UI, UX</div>
                    <div className="h4">April 2022 to August, 2022</div>
                    <div className="h4">IOS, Android</div>
                    <div className="h4">Myself, Amritpal Singh, Joey Koay</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[80vh] z-10 pb-3">
          <img
            className="object-cover mx-auto h-full w-full bg-[#004047] rounded-sm"
            src={StocateHero}
            alt="ExpediteImage"
          />
        </div>

        <div>
          <div className="w-full h-full mx-auto rounded-sm pb-3">
            <video
              className="rounded-image"
              src={StocateScreens}
              autoPlay
              loop
              muted
            />
          </div>
        </div>

        <div className="w-full h-[80vh] z-10">
          <img
            className="object-contain mx-auto h-full w-full bg-[#004047] rounded-sm"
            src={StocateImage}
            alt="ExpediteImage"
          />
        </div>

        {/*  NEW Project Text */}

        <div className="flex flex-col gap-y-28 py-24">
          {/*  Container */}

          <div className="h1 ">Introduction</div>

          <div className="md:flex gap-12">
            <div className="w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Be Local. Everywhere.</div>
                <div className="h3">
                  Stocate connects users to the community of sustainably and
                  eco-friendly individuals with businesses that share the same
                  principals. Providing recommendations for locally and
                  sustainably sourced products and stores in their area.
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Find Hidden Gems</div>
                <div className="h3">
                  Stocate provides users with a community to aid in finding
                  sustainable alternative in their area. Crowd sourced
                  information allows the users to share their own special finds
                  with the community of Stocateers.
                </div>
              </div>
            </div>
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

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Goals</div>
                <div className="h3">
                  During my internship, I was given the opportunity to create
                  goals for the product, and manage the actualization of these
                  goals through the product and development teams. These goals
                  were actualized through the completion of the design
                  solutions, and design systems I built during my internship.
                </div>
                <div className="h3">
                  My primary goal was to increase the amount of active users we
                  retained in the application. My secondary goal was to speed up
                  our process of implementing new design solutions into our MVP.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                className="object-contain mx-auto h-full w-2/3 p-6 bg-zinc-800"
                src={Goals}
                alt="Image"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Improving Core Features</div>
            <div className="h3">
              Generating design solutions for user problems within the mobile
              application was one of my main tasks at Stocate. To improve a core
              feature, I went through the steps of conducting user research,
              designing, user testing & iterating.
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">User Interviews</div>
                <div className="h3">
                  I conducted user interviews to get information for our
                  personas. These interviews provided us with A) user's thoughts
                  and level of sustainability incorporated in their everyday
                  life. B) Their general thoughts on the interface and
                  experience, likes and dislikes. C) Features they would like to
                  see in a sustainability application.
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full rounded-sm"
                  src={Interview}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Parsing User Problems</div>
            <div className="h3">
              Using a backlog of user data obtained from prior user testing and
              in-app feedback, I was able to organize and sort of over 180 user
              comments from separate users concerning the initial versions of
              the Stocate mobile and web applications.
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Managing Tasks & Priority Matrix</div>
                <div className="h3">
                  We were looking to parse the most crucial problems users were
                  having so we could prioritize them when building solutions. We
                  were able to narrow our user problems to specific issues in
                  the application that could be improved. Using a priority
                  matrix, we figured out how we should prioritize each problem.
                  We then planned our roadmap for design sprints.
                </div>
              </div>
            </div>

            <div className="w-1/2">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full w-full rounded-sm"
                  src={Matrix}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="h1 ">Designing</div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Agile Sprint Approach</div>
            <div className="h3">
              The process we used for creating design solutions was the Agile
              sprint methodology. Our sprints were fast and lasted around 1 week
              each, from research to design to user testing to development.
              Longer user journeys required 2 weeks. We organized our sprints
              using the Jira application.
            </div>
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">Building a Scalable Design System</div>
                <div className="h3">
                  Before I started my internship, a style guide was created to
                  lay the groundwork for the visual design. One of the systems I
                  built was the design system. It was made to aid in the speed
                  of designing and implementing for pages for our sprints, as
                  well as the visual design of the application.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2">
                <div className="h2"> </div>
                <div className="h3">
                  The process of building the system was initially very
                  iterative because the system was constantly growing. The
                  design system was going to be used by designers and developers
                  that had less experience visually designing, so it was
                  important to keep it as simple as possible. It also needed to
                  build upon the initial design of th application to save time.
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full bg-zinc-800 rounded-sm">
            <img
              className="object-contain mx-auto h-full w-full"
              src={SystemA}
              alt="Image"
            />
          </div>

          <div className="w-full h-full bg-zinc-800 rounded-sm">
            <img
              className="object-contain mx-auto h-full w-full"
              src={SystemB}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Low Fidelity Explorations</div>
            <div className="h3">
              For sprints, I started the design process by creating low fidelity
              mockups in Figma. This way I could quickly share them with the
              team.
            </div>
            <div className="h3">
              These are explorations for the adding stores user journey in the
              mobile application.
            </div>
          </div>

          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-full"
              src={LowFid}
              alt="Image"
            />
          </div>

          <div className="flex items-start flex-col md:flex-row gap-y-12">
            <div className="md:w-1/2">
              <div className="flex flex-col max-w-xs gap-y-2 ">
                <div className="h2">User Testing</div>
                <div className="h3">
                  User testing was conducted to improve clarity, speed and
                  enjoyment for users within specific user flows. User testing
                  was conducted for each sprint during the mid fidelity stage.
                  Once users provided us with their feedback, we moved to the
                  high fidelity stage, where all flaws and details were ironed
                  out.
                </div>
                <div className="h3">
                  I conducted user testing bi-weekly with different users during
                  sprints for our mobile application. User testing lasted about
                  30 mins. The first section of the session would be an
                  interview with the user, to help build our personas and
                  understand user perspectives. In the second section, I would
                  ask users to complete a scenario in the application and walk
                  me through their experience with our Figma prototype.
                  Scenarios were things like:{" "}
                  <span className="italic">
                    {" "}
                    You're doing your regular grocery shop. Try finding and
                    adding items to your shopping list.{" "}
                  </span>
                  During this portion, I am able to focus on roadblocks users
                  have during specific areas of the application. This provided
                  us with both quantitative and qualitative information.
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full">
                <img
                  className="object-contain mx-auto h-full  rounded-sm"
                  src={Testing}
                  alt="Image"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Iterating</div>
            <div className="h3">
              After user testing, I would return to the mockup in Figma to
              resolve problems or challenges users had brought up. For most
              features, iterating once or twice was enough time spent, but
              larger user journeys required three or four iterations.
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h3">
              These are a some of the iterations done for the Adding Stores to
              Stocate user journey. These were some of the problems we faced
              when trying to streamline the adding process.
            </div>
          </div>
          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-5/6"
              src={IteratingB}
              alt="Image"
            />
          </div>
          <div className="w-full h-full">
            <img
              className="object-contain mx-auto h-full w-5/6"
              src={IteratingC}
              alt="Image"
            />
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">High Fidelity Design</div>
            <div className="h3">
              Stocate is an application that we are quickly building and
              iterating upon until we build the product that we set out to
              build. Here are a couple of screens that explain some of the
              impactful changes I made in the mobile application.
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Onboarding</div>
            <div className="h3">
              We built an onboarding flow to solve for users having trouble
              navigating the application on first download. This gave users a
              more inviting and informative introduction to the application.
            </div>
          </div>

          <div className="flex gap-x-6 w-full mx-auto">
            <div>
              <img
                className="object-cover rounded-screen"
                src={onboardingA}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={onboardingD}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={onboardingE}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={onboardingF}
                alt="ExpediteImage"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Browsing</div>
            <div className="h3">
              Browsing is made easier with the store and item descriptions.
              These descriptions tell users the story behind these small and
              local businesses. Also, the addition of the fixed search bar
              provided users with the ability to find exactly what they were
              looking for.
            </div>
          </div>

          <div className="flex gap-x-6 w-full mx-auto">
            <div>
              <img
                className="object-cover rounded-screen"
                src={browsingA}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={browsingB}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={browsingC}
                alt="ExpediteImage"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Creating Shopping Lists</div>
            <div className="h3">
              There is now an easily accessible button for creating lists. The
              button is large to entice users to use the create list feature as
              much as they can. Interface improvements were made to make the
              experience more enjoyable.
            </div>
          </div>

          <div className="flex gap-x-6 w-full mx-auto">
            <div>
              <img
                className="object-cover rounded-screen"
                src={listA}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={listB}
                alt="ExpediteImage"
              />
            </div>
            <div>
              <img
                className="object-cover rounded-screen"
                src={listC}
                alt="ExpediteImage"
              />
            </div>
          </div>

          <div className="flex flex-col max-w-xs gap-y-2 ">
            <div className="h2">Reflection</div>
            <div className="h3">
              Working at Stocate was like when they say to always work with
              people smarter than yourself. It paid off in the amount of growth
              i've had as a designer and as a member of a product team. Working
              closely with a development team made the importance of
              communication that much more crucial. I was able to hone my skills
              in planning and presenting ideas to stakeholders. Getting
              experience creating human centered design solutions helped me
              better understand how to juggle user wants versus needs.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stocate;
