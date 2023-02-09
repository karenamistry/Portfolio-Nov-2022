import React from "react";
import Navbar from "../components/navbar";
// Hero Image
import StocateHero from "../images/stocate/smartphone-stocate-d.png";
// Project Images

import Goals from "../images/stocate/goals.png";
import Challenge from "../images/stocate/challenge.png";

import Jira from "../images/stocate/jira-logo.png";

import Interview from "../images/stocate/user-interviews.png";
import LowFid from "../images/stocate/low-fid.png";
import Iterating from "../images/stocate/Iterating-b.png";
import IteratingB from "../images/stocate/iterating-adding-light-a.png";
import IteratingC from "../images/stocate/iterating-adding-light-b.png";

import Testing from "../images/stocate/user-testing.png";
import Pipeline from "../images/stocate/pipeline.jpg";
import Flow from "../images/stocate/prototype-flow.png";
import User from "../images/stocate/user-flow.png";
import SystemA from "../images/stocate/design-system-dark.png";
import SystemB from "../images/stocate/design-system-2-dark.png";

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
    <div className="bg-zinc-900">
      {/* Project Info */}

      <div className="flex pt-[14vh] pb-24">
        <div className="container flex flex-col gap-y-12 md:px-12">
          <div className="h1">Stocate</div>
          <div className="flex flex-col gap-y-6 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-y-8 max-w-4xl">
              <div className="h3">
                Stocate connects local and sustainable businesses with
                customers. My impact is most clearly seen from the systems that
                I{" "}
                <span className="">
                  designed to aid in the growth and scalability
                </span>{" "}
                of the product, as well as the interfaces I designed to{" "}
                <span className="">improve core features</span> in the mobile
                application.
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
                <div className="h4">UI, UX</div>
                <div className="h4">April 2022 to August, 2022</div>
                <div className="h4">IOS, Android</div>
                <div className="h4">Myself, Amritpal Singh, Joey Koay</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container">
        <div className="w-full h-[80vh] z-10">
          <img
            className="object-cover mx-auto h-full w-full bg-cyan-600 rounded-sm"
            src={StocateHero}
            alt="ExpediteImage"
          />
        </div>
      </div>

      {/*  NEW Project Text */}

      <div className="container flex flex-col gap-y-24 py-24">
        {/*  Container */}
        <div className="h1 md:px-12">Introduction</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Be Local Everywhere.</div>
          <div className="h3">
            Stocate connects users to the community of sustainably minded
            individuals and businesses. This community provides recommendations
            for locally and sustainably sourced products and stores in their
            area.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Find Hidden Gems</div>
          <div className="h3">
            Stocate provides users with a tool to aid in finding sustainable
            alternative in their area. Crowd sourced information allows the
            users to share their own finds with the community of Stocateers.
          </div>
        </div>

        <div className="h1 md:px-12">Exploration</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Goals</div>
          <div className="h3">
            During my internship, I was given the opportunity to create goals
            for the product and manage the actualization of these goals through
            the product and development teams.
          </div>
          <div className="h3">
            My primary goal was to increase the amount of active users we
            retained in the application. My secondary goal was to speed up our
            process of implementing new design solutions into our MVP.
          </div>
          <div className="h3">
            These goals were actualized through the completion of the following
            design solutions, and design systems I built during my internship.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Improving Core Features</div>
          <div className="h3">
            In order to improve our active user numbers, we wanted to strengthen
            our core features so that users have a reason to come back. This is
            why generating design solutions for user problems within the mobile
            application was one of my main tasks at Stocate. To improve a core
            feature, I went through the steps of conducting user research,
            designing, user testing & iterating.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Parsing User Problems</div>
          <div className="h3">
            Using a backlog of user data obtained from prior user testing and
            in-app feedback, I was able to organize and sort of over 180 user
            comments from separate users concerning the initial versions of the
            Stocate mobile and web applications. We were looking to parse the
            most crucial problems users were having in our applications, so we
            could prioritize them when building solutions. We decided to
            prioritize problems by the amount of suggestions or comments
            received for a certain problem type.
          </div>
        </div>

        <div className="h1 md:px-12">Research</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">HMW & Managing Tasks</div>
          <div className="h3">
            Once we understood user feedback, we were able to prioritize solving
            for crucial interface and experience flaws in the design of the
            desktop and mobile application. We brainstormed by asking "How might
            we?" questions and discussed potential solution routes to take. We
            were able to narrow our core problems to specific users journeys in
            the application that needed improvement. The user flows we planned
            to improve were: Onboarding, Adding stores, Adding items, Creating
            lists, Messaging system, & Transactions system.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">User Interviews</div>
          <div className="h3">
            I conducted user interviews to get information for our personas.
            These interviews provided us with A) user's thoughts and level of
            sustainability incorporated in their everyday life. B) Their general
            thoughts on the interface and experience, likes and dislikes. C)
            Features they would like to see in a sustainability application.
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-full rounded-xl"
            src={Interview}
            alt="Image"
          />
        </div>

        <div className="h1 md:px-12">Designing</div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Approach</div>
          <div className="h3">
            With the customer at the core of our design philosophy, the process
            we used for creating design solutions was the Agile sprint
            methodology. Our sprints were fast and lasted around 1 week each,
            from research to design to user testing to shipping. We organized
            our sprints using Jira.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Building a Scalable Design System</div>
          <div className="h3">
            To meet our mission of creating customer centered design solutions,
            we needed to receive and respond to customer needs within the
            applications as quickly as we can. One of the systems I built to aid
            in this process was the design system. It was built to aid in the
            speed of designing and implementing for pages within the mobile and
            desktop applications. The process of building the system was very
            iterative because the system was constantly growing.
          </div>
          <div className="h3">
            Before I started my internship, a style guide was created to lay the
            groundwork for the design system that I built. The groundwork
            consisted of the primary teal, that was used in the logo, and a few
            typographic styles that were not yet documented.
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

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Low Fidelity Explorations</div>
          <div className="h3">
            I created low fidelity mockups using Figma, so I could explore
            different interface and experience styles before committing to
            prototyping. using whatever components were built at the time.
          </div>
          <div className="h3">
            These are a few explorations for the adding stores user journey.
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-2/3"
            src={LowFid}
            alt="Image"
          />
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">User Testing</div>
          <div className="h3">
            User testing was conducted to improve clarity, speed and enjoyment
            for users within specific user flows. User testing was conducted for
            each sprint during the mid fidelity stage. Once users provided us
            with their feedback, we moved to the high fidelity stage, where all
            flaws and details were ironed out.
          </div>
          <div className="h3">
            I conducted user testing bi-weekly with different users, during
            sprints for our mobile application. User testing sessions were a mix
            of in-person and via Zoom. They each lasted about 30 mins. The first
            section of the session would be an interview with the user, to help
            build our personas and understand user perspectives. In the second
            section, I would ask users to complete a scenario in the application
            and walk me through their experience with our Figma prototype.
            Scenarios were things like:{" "}
            <span className="italic">
              {" "}
              You're doing your regular grocery shop. Try finding and adding
              items to your shopping list.{" "}
            </span>
            During this portion, I am able to focus in on roadblocks users have
            during specific areas of the application. Conducting interviews and
            completing scenarios in the application provided us with both
            quantitative and qualitative information.
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-1/3 rounded-xl"
            src={Testing}
            alt="Image"
          />
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Iterating</div>
          <div className="h3">
            Improved user journeys within the application were created by
            conducting extensive user testing and iterating afterwards. After
            user testing, I would return to prototyping in Figma to resolve
            problems or challenges users had brought up. For most features,
            iterating once or twice was enough time spent, but larger user
            journeys required three or four iterations.
          </div>
          <div className="h3">
            These are a iterations done for the fixed search bar component. The
            fixed search bar solved the problem users were having of finding
            specific items.
          </div>
        </div>

        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full  w-2/3"
            src={Iterating}
            alt="Image"
          />
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h3">
            These are a some of the iterations done for the Adding Stores to
            Stocate user journey. These were some of the problems we faced when
            trying to streamline the adding process.
          </div>
        </div>
        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-2/3"
            src={IteratingB}
            alt="Image"
          />
        </div>
        <div className="w-full h-full">
          <img
            className="object-contain mx-auto h-full w-2/3"
            src={IteratingC}
            alt="Image"
          />
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">High Fidelity Design</div>
          <div className="h3">
            The Expedite application has many flows to accommodate the complex
            management system. Here are a couple of screens that explain the
            most common use cases in the application.
          </div>
        </div>

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Onboarding</div>
          <div className="h3">
            We built an onboarding flow to solve for users having trouble
            navigating the application on first download. This gave users a more
            inviting and informative introduction to the application.
          </div>
        </div>

        <div className="flex gap-x-6 w-5/6 mx-auto">
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

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Browsing</div>
          <div className="h3">
            Browsing is made easier with the store and item descriptions. These
            descriptions tell users the story behind these small and local
            businesses. Also, the addition of the fixed search bar provided
            users with the ability to find exactly what they were looking for.
          </div>
        </div>

        <div className="flex gap-x-6 w-2/3 mx-auto">
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

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Creating Shopping Lists</div>
          <div className="h3">
            There is now an easily accessible button for creating lists. The
            button is large to entice users to use the create list feature as
            much as they can. Interface improvements were made to make the
            experience more enjoyable.
          </div>
        </div>

        <div className="flex gap-x-6 w-2/3 mx-auto">
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

        <div className="flex flex-col max-w-4xl gap-y-2 md:px-12">
          <div className="h2">Reflection</div>
          <div className="h3">
            Working at Stocate was like when they say to always work with people
            smarter than yourself. It paid off in the amount of growth i've had
            as a designer and as a member of a product team. Working closely
            with a development team made the importance of communication that
            much more crucial. I was able to hone my skills in planning and
            presenting ideas to stakeholders. Getting experience creating human
            centered design solutions helped me better understand how to juggle
            user wants versus needs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stocate;
