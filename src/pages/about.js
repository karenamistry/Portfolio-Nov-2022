import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";
import Collage from "../images/about/me-collage.png";

function About() {
  return (
    <div className="py-[20vh]">
      <div className="container flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col w-4xl gap-y-6 px-0 lg:px-12">
          <div className="h1">
            👩‍💻 Hello! I'm Karena. I'm currently a product designer for Dyanmic
            CXS, I've previously designed for multiple startups across Canada.
          </div>
          <div className="h3">
            I studied design at York University/Sheridan College, Joint program.
            I have 5 years experience outside of product design, working in a
            variety of fields like print, social media content & visual design.
            I've worked on applications that are being used in Canadian Tire
            Stores, signage for successful political campaigns and designed for
            startups in Ottawa, Toronto and Montreal.
          </div>
          <div className="h3">
            Recently I've specialized myself in product design but i've been
            interested in interface and experience since I was twelve,
            recreating websites pixel for pixel in Adobe Photoshop, version 4.0.
          </div>
          <div className="h3">
            I'm kind of a nerd. I love Marvel movies, playing video games and
            reading fantasy. I love learning about front end development in my
            free time (I coded this site 🤓). Lately, i've been learning how to
            build mechanical keyboards.
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="h2">I'm always down to chat!</div>
            <div className="h3">
              I check my email most often, at{" "}
              <a
                target="_blank"
                href="mailto:k.mistry1898@gmail.com"
                className="text-stone-400  hover:text-stone-500"
              >
                k.mistry1898@gmail.com
              </a>
              . You can visit my{" "}
              <a
                className="text-stone-400 hover:text-stone-500"
                target="_blank"
                href="https://www.linkedin.com/in/karenamistry/"
              >
                LinkedIn{" "}
              </a>
              to see my experience. I post my photography and art on{" "}
              <a
                className="text-stone-400  hover:text-stone-500"
                target="_blank"
                href="https://www.instagram.com/karena_mistry/"
              >
                Instagram
              </a>
              .
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="object-contain object-top w-[20rem] lg:w-full lg:h-[24rem]  mx-auto pt-12 lg:pt-0"
            src={Collage}
            alt="me!"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
