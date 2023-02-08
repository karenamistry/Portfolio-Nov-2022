import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";
import Collage from "../images/about/me-collage.png";

function About() {
  return (
    <div className="py-[20vh] bg-zinc-900">
      <div className="container flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col w-4xl gap-y-6 px-0 lg:px-12">
          <div className="h2">
            Hello! I'm Karena. I'm currently a product designer for Dyanmic CXS,
            I've previously designed for multiple startups in Canada.
          </div>
          <div className="h3">
            I studied design at York University/Sheridan College, Joint program.
            I'm a very versatile designer with experience in print and
            publishing, social media strategy, and UI/UX design. I believe in
            the importance of data-driven design, and i’ve learned to present
            those ideas well after having worked with small teams, sometimes as
            the only design voice.
          </div>

          <div className="h3">
            I'm kind of a nerd. I love Marvel movies, playing video games and
            reading fantasy. I love learning about front end development in my
            free time (I coded this site). Lately, i've been learning how to
            build mechanical keyboards.
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="h4 italic">I'm always down to chat!</div>
            <div className="h3">
              I check my email most often, at{" "}
              <a
                target="_blank"
                href="mailto:k.mistry1898@gmail.com"
                className=" transition duration-150 ease-out hover:ease-in text-zinc-400"
              >
                k.mistry1898@gmail.com
              </a>
              . You can visit my{" "}
              <a
                className=" transition duration-150 ease-out hover:ease-in text-zinc-400"
                target="_blank"
                href="https://www.linkedin.com/in/karenamistry/"
              >
                LinkedIn{" "}
              </a>
              to see my experience.
            </div>
          </div>
        </div>
        <div className="w-full h-full rounded-xl">
          <img
            className="object-cover object-top w-[20rem] lg:w-[20rem]  mx-auto pt-12 lg:pt-0 rounded-xl"
            src={Standing}
            alt="me!"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
