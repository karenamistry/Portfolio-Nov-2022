import React from "react";
import Footerbar from "../components/footerbar";
// Hero Image
import StocateHero from "../images/stocate/smartphone-stocate-b.png";
// Project Images

import Goals from "../images/stocate/goals.png";
import Challenge from "../images/stocate/challenge.png";

import Jira from "../images/stocate/jira-logo.png";

import Interview from "../images/stocate/user-interviews.png";
import Testing from "../images/stocate/user-testing.png";

import Flow from "../images/stocate/prototype-flow.png";
import User from "../images/stocate/user-flow.png";

import Iterating from "../images/stocate/iterating-adding.png";

import SystemA from "../images/stocate/design-system.png";
import SystemB from "../images/stocate/design-system-2.png";

function Stocate() {
  return (
    <>
      {/* Hero Image */}
      <div className="w-full h-screen">
        <div className="px-2 py-2 text-lg">🥸</div>
        <img
          className="object-contain h-full w-full mx-auto ratio-square bg-cyan-700"
          src={StocateHero}
          alt="StocateImage"
        />
      </div>
      {/* Hero Project Info */}
      <div className="w-full py-24 bg-cyan-700">
        <div className="container mx-auto grid gap-y-3 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4">
          <div className="col-span-4  text-white flex flex-col justify-end">
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Role</div>
              <div className="p text-white">UX/UI</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Platform</div>
              <div className="p text-white">Mobile & Desktop</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Timeline</div>
              <div className="p text-white">2022, Apr to Aug</div>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="p opacity-80 text-white">Team</div>
              <div className="p text-white">
                Myself, Amritpal Singh, Joey Koay
              </div>
            </div>
          </div>
          {/* Hero Project Description */}
          <div className="col-span-4 flex flex-col gap-y-6">
            <div className="h1 text-white">
              <span className="opacity-80">
                I completed a 5-month internship as a product designer at
              </span>{" "}
              <span className="font-medium">Stocate</span>
              <span className="opacity-80">
                . At Stocate, my impact is most clearly seen from the systems
                that I designed to aid in the growth and scalability of the
                product, as well as the interfaces I designed to improve core
                features in the mobile application. I continue to work with the
                Stocate team.
              </span>
            </div>
            <div className="p text-white">
              <span className="opacity-80">
                Stocate connects local and sustainable businesses with
                customers. Stocate is interested in giving users information
                about their products to allow people to buy more sustainably.
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
            <div className="h1 col-span-2 text-center">Discovery</div>
            <div>
              <div className="h2">Managing Goals</div>
              <div className="p">
                During my internship, I was given the opportunity to create
                goals for the product and manage the actualization of these
                goals through the product and development teams. These were the
                goals I set, in order of importance:
              </div>
              <div className="p">
                <br />
                Goal 1: Having a 2 Week Turnaround on receiving and designing
                for feedback.
                <br />
                Goal 2: Receive 20 new user feedbacks per week.
                <br />
                Goal 3: Maintain 50 active users.
                <br />
                <br />
              </div>
              <div className="p">
                These goals were actualized through the completion of the
                following solutions and systems I built during my internship.
              </div>
            </div>

            <div>
              <img className="h-auto w-full" src={Goals} alt="StocateImage" />
              <div className="caption">
                My very initial (very messy) notes for best case and worst case
                scenario goals.
              </div>
            </div>

            <img
              className="h-auto w-full  p-12 box-border"
              src={Challenge}
              alt="StocateImage"
            />

            <div>
              <div className="h2">Design Challenge?</div>
              <div className="p">
                How do we create customer centered UI solutions to aid the
                buying experience of sustainable products?
              </div>
            </div>

            <div>
              <div className="h2">Parsing User Problems</div>
              <div className="p">
                Using a backlog of user data obtained from prior user testing
                and in-app feedback, I was able to organize and sort of over 180
                user comments from separate users concerning the initial
                versions of the Stocate mobile and web applications. We were
                looking to parse the most crucial problems users were having in
                our applications, so we could prioritize them when building
                solutions.
              </div>
              <div className="p">
                I organized all the data by type of problem, section of the app
                it concerned, completion status of of that feedback, & team that
                could work on the solution. This was initially done in an excel
                document to test the benefits of this organization. We intended
                to develop a dashboard system to organize incoming feedback in
                realtime. I designed a interface solution based on the
                organizational structure of the excel document. This dashboard
                is in the development stage.
              </div>
            </div>

            <div></div>
            <div></div>

            <div>
              <div className="h2">Improving Core Features</div>
              <div className="p">
                Generating design solutions for user problems within the mobile
                application was one of my main tasks at Stocate. We wanted to
                strengthen our core features. This was a way that we wanted
                improve our active user numbers.
              </div>
            </div>

            <div className="h1 col-span-2 text-center">Research</div>

            <div>
              <div className="h2">User Interviews</div>
              <div className="p">
                Learning about the user is integral to my design process. I
                conducted a variety of user interviews to get information about
                our primary and secondary user personas. These interviews
                provided us with a) user's thoughts concerning the core use
                cases for the application, because we were still in the process
                of solidifying our primary product goal. b) Their general
                thoughts on the interface likes and dislikes. Interviews did not
                reach the specificity of user testing. c) As well as features
                they would like to see in the application. Interviews provided
                information to narrow down our personas, core problems and get
                us in contact with potential users.
              </div>
            </div>

            <img className="h-auto w-full" src={Interview} alt="StocateImage" />

            <div></div>

            <div>
              <div className="h2">HMW & Managing Tasks</div>
              <div className="p">
                Once we understood user feedback, we were able to prioritize
                solving for crucial interface and experience flaws in the design
                of the desktop and mobile application. We brainstormed and
                discussed potential solution routes about how we might go about
                solving for these core problems. We were able to narrow our core
                problems to specific users flows in the application that needed
                improvement.The mobile application was where we started this
                development. The user flows we planned sprints for were:
                Onboarding, Adding, Messaging, & Transactions.
              </div>
            </div>

            <div>
              <div className="h2">Process</div>
              <div className="p">
                With the customer at the core of our design philosophy, the
                process of arriving at a final design solution was very
                iterative. The process we used for creating design solutions was
                the Agile sprint methodology, with our sprints lasting around 1
                to 2 weeks each. Our goal from the sprints was to improve the
                core features of our applications, in order to retain active
                users.
              </div>
            </div>

            <img
              className="h-auto w-full p-24 box-border"
              src={Jira}
              alt="StocateImage"
            />

            <img className="h-auto w-full" src={Flow} alt="StocateImage" />

            <div>
              <div className="h2">User Flow Diagrams</div>
              <div className="p">
                Our team worked to make user flow diagrams for the entire
                application, because that documentation was not yet in place. We
                diagrammed the user flows in figma, so we could visualize the
                prototype more clearly, in our mobile application. Before
                starting the design process, mapping user flows helped us figure
                out where improvements could be made.
              </div>
            </div>

            <div className="h1 col-span-2 text-center">
              Design & User Testing
            </div>

            <div>
              <div className="h2">Mockups & Prototyping</div>
              <div className="p">
                Our MVP already existed, my job was to bring the MVP to a more
                definite and concise model. During this stage in the process, I
                was able to iterate upon our design system. The design system
                was not yet built during the beginning of my internship, so I
                created components as they were needed. I later created a more
                concise and documented design system to improve the speed of
                creating mid and high fidelity mockups and prototypes.
              </div>
            </div>

            <img className="h-auto w-full" src={User} alt="StocateImage" />

            <img className="h-auto w-full" src={Testing} alt="StocateImage" />

            <div>
              <div className="h2">User Testing</div>
              <div className="p">
                User testing was conducted to improve clarity, speed and
                enjoyment for users within specific user flows. User testing was
                conducted for each sprint during the mid fidelity stage. Once
                users provided us with their feedback, we moved to the high
                fidelity stage, where all flaws and details were ironed out.
              </div>
              <div className="p">
                I conducted user testing bi-weekly with different users, during
                sprints for our mobile application. User testing sessions were a
                mix of in-person and via Zoom. They each lasted about 30 mins.
                The first section of the session would be an interview with the
                user, to help build our personas and understand user
                perspectives. In the second section, users would walk me through
                their experience with our Figma prototype. During this portion,
                I am able to focus in on roadblocks users have during specific
                areas of the application.
              </div>
            </div>

            <div>
              <div className="h2">Iterating</div>
              <div className="p">
                Improved user journeys within the application were created by
                conducting extensive user testing and iterating afterwards.
                After user testing a user flow or a feature, I would return to
                prototyping in Figma to resolve problems or challenges users had
                brought up. For most features, iterating once or twice was
                enough, but larger user flows required three or four iterations.
                This was the case when designing for the adding flows because it
                was a more complex problem to solve for.
              </div>
            </div>

            <div className="col-span-2">
              <img
                className="h-auto w-full"
                src={Iterating}
                alt="StocateImage"
              />
              <div className="caption">
                Iterations for our adding user flow. These are a few screens
                with changes that I made after each stage of user testing. I did
                over 4 iterations of this flow.
              </div>
            </div>

            <div className="h1 col-span-2 text-center">System Building</div>

            <div>
              <div className="h2">Building a scalable design system</div>
              <div className="p">
                To meet our mission of creating customer centered design
                solutions, we needed to receive and respond to customer needs
                within the applications as quickly as we can. One of the systems
                I built to aid in this process was the design system. It was
                built to aid in the speed of designing and implementing for
                pages within the mobile and desktop applications. The process of
                building the system was very iterative because the system was
                constantly growing.
              </div>
              <div className="p">
                Before I started my internship, a style guide was created to lay
                the groundwork for the design system that I built. The
                groundwork consisted of the primary teal, that was used in the
                logo, and a few typographic styles that were not yet documented.
              </div>
            </div>

            <img
              className="h-auto w-full col-span-2"
              src={SystemA}
              alt="StocateImage"
            />

            <img
              className="h-auto w-full col-span-2"
              src={SystemB}
              alt="StocateImage"
            />

            <div>
              <div className="h2">Streamlining Feedback Pipeline</div>
              <div className="p">
                Another one of the systems I helped build to aid in process of
                creating customer centered design solutions was the feedback
                dashboard. The feedback dashboard is an end-to-end process for
                receiving customer problems and creating user centered
                solutions. It was created to organize the excess of customer
                feedback received directly from the application and feedback
                received from user testing. It allowed us to prioritize feedback
                on a scale of 1-5, as well as group similar feedbacks.
              </div>
            </div>

            <div></div>
            <div></div>

            <div>
              <div className="h2">Reflection</div>
              <div className="p">
                Working at Stocate was like when they say to always work with
                people smarter than yourself. It paid off in the amount of
                growth i've had as a designer and as a member of a product team.
                Working closely with a development team made the importance of
                communication that much more crucial. I was able to hone my
                skills in planning and presenting ideas to stakeholders. Getting
                experience creating human centered design solutions helped me
                better understand how to juggle user wants versus needs.
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

export default Stocate;
