import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";
import Collage from "../images/about/me-collage.png";

function About() {
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <div className="md:max-w-6xl mx-auto">
        <div className="py-[20vh] bg-zinc-900">
          <div className="container flex flex-col lg:flex-row justify-center">
            <div className="flex flex-col  gap-y-6 max-w-sm">
              <div className="h1">Hello! I'm Karena.</div>
              <div className="h3">
                I'm a designer with a BA in design from York University/Sheridan
                College, Joint program. I'm currently living in Ottawa, Canada.
                I call myself a designer of all kinds of things, because i'm a
                very versatile designer with experience in print and publishing,
                social media marketing, motion, and UR/UI/UX design. I believe
                in creating intentional & data-driven design.
              </div>
              <div className="h3">
                I've worked on small but impactful teams, sometimes as the only
                design voice. I've worked freelance for clients like: Canadian
                Tire, Upside Realty and Trustee Alysha Aziz. I'm currently
                working as a freelance product designer for Dynamic CXS.
              </div>

              <div className="h3"></div>
              <div className="flex flex-col gap-y-2">
                <div className="h2">I'm always down to chat!</div>
                <div className="h3">
                  I check my email most often, at{" "}
                  <a
                    target="_blank"
                    href="mailto:k.mistry1898@gmail.com"
                    className=" transition duration-150 ease-out hover:ease-in text-zinc-200"
                  >
                    k.mistry1898@gmail.com
                  </a>
                  . You can visit my{" "}
                  <a
                    className=" transition duration-150 ease-out hover:ease-in text-zinc-200"
                    target="_blank"
                    href="https://www.linkedin.com/in/karenamistry/"
                  >
                    LinkedIn{" "}
                  </a>
                  to see my experience.
                </div>
              </div>
              <div className="h4">
                <div></div>
              </div>
            </div>
            <div className="w-full h-full rounded-sm">
              <img
                className="object-cover object-top w-[20rem] lg:w-[17rem]  mx-auto pt-12 lg:pt-0 rounded-image"
                src={Standing}
                alt="me!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
