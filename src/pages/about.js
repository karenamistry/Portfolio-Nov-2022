import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";
import Profile from "../images/about/me-standing-cropped.jpg";

function About() {
  return (
    <div className="container flex flex-col py-24 gap-y-12 items-center">
      <div className="flex max-w-4xl">
        <div className="flex flex-col items-end">
          <div className="flex flex-col gap-y-2">
            <div className="h3">About Me</div>
            <div className="h4 max-w-xl">
              Hi, I'm Karena. I live in Ottawa, Canada. I've worked in graphic
              design for the past 5 years, but recently specialized myself in
              product design. Product design is what i've always had a passion
              for but I wasn't able to find my footing in it until recently.
              I've worked on applications that are being used in Canadian Tire
              Stores, signage for successful political campaigns and designed
              for startups in Ottawa, Toronto and Montreal.
            </div>
            <div className="h4 max-w-xl">
              Just some fun things about myself. I enjoy music in a variety of
              languages, like spanish and french. I also enjoy reading about
              design and programming in my free time! (I coded this site 🤓)
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-12 justify-center">
        <div className="flex max-w-4xl">
          <div className="flex flex-col items-end">
            <div className="flex flex-col gap-y-2">
              <div className="h4">Contact</div>
              <div className="max-w-xl flex gap-x-12">
                <div className="flex flex-col">
                  <div className="h5 text-gray-400">Email</div>
                  <div className="h5 text-gray-400">LinkedIn</div>
                  <div className="h5 text-gray-400">Instagram</div>
                </div>
                <div className="flex flex-col">
                  <div className="h5 text-gray-800">
                    <a
                      target="_blank"
                      href="mailto:k.mistry1898@gmail.com"
                      className="flex gap-x-1 items-center justify-center"
                    >
                      k.mistry1898@gmail.com
                    </a>
                  </div>
                  <div className="h5 text-gray-800">
                    <a
                      className=""
                      target="_blank"
                      href="https://www.linkedin.com/in/karenamistry/"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="h5 text-gray-800">
                    <a
                      className=""
                      target="_blank"
                      href="https://www.instagram.com/karena_mistry/"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="object-cover object-center w-40 md:w-64 md:h-80 rounded-[1.2rem] shadow-[0_35px_60px_-15px_rgba(59,130,246,0.25)] m-4 border-[0.5px] border-gray-50"
        src={Me}
        alt="me!"
      />
    </div>
  );
}

export default About;
