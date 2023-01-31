import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";
import Collage from "../images/about/me-collage.png";

function About() {
  return (
    <div className="py-[20vh]">
      <div className="container flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col max-w-4xl gap-y-2 px-0 lg:px-12">
          <div className="h2">
            👩‍💻 <span className="text-blue-600">Hello! I'm Karena.</span> I'm
            currently a product designer for Dyanmic CXS, I've previously
            designed for multiple startups across Canada.
          </div>
          <div className="h3">
            I studied design in the York University/Sheridan College Joint
            program. Recently I've specialized myself in product design but i've
            been interested in interface and experience since I was twelve,
            recreating websites pixel for pixel in Adobe Photoshop (version
            4.0).
          </div>
          <div className="h3">
            I have a experience working in a variety of design fields like
            print, digital content & ui/ux design. I've worked on applications
            that are being used in Canadian Tire Stores, signage for successful
            political campaigns and designed for startups in Ottawa, Toronto and
            Montreal.
          </div>
          <div className="h3">
            I'm kind of a nerd. I love Marvel movies, playing video games and
            reading fantasy. I love learning about front end development in my
            free time (I coded this site 🤓). Lately, I've been reading a lot of
            about designing experience and product strategy.
          </div>
          <div className="h4">Get in Touch</div>
          <div className="h3">
            I check my email most often at{" "}
            <a
              target="_blank"
              href="mailto:k.mistry1898@gmail.com"
              className="text-blue-600"
            >
              k.mistry1898@gmail.com
            </a>
            . You can visit my{" "}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://www.linkedin.com/in/karenamistry/"
            >
              LinkedIn
            </a>
            . I sometimes post my photography on{" "}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://www.instagram.com/karena_mistry/"
            >
              Instagram
            </a>
            .
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
