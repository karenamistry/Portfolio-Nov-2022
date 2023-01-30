import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";
import Profile from "../images/about/me-standing-cropped.jpg";

function About() {
  return (
    <div className="container">
      <div className="">
        <div className="h-[15vh] w-full"></div>
        <div className="flex flex-col lg:flex-row gap-x-12 justify-between">
          <div className="flex flex-col w-full">
            <img
              className="object-cover object-top w-[16rem] h-[16rem] lg:w-[28rem] lg:h-[28rem] rounded-[1.2rem] shadow-[0_35px_60px_-15px_rgba(59,130,246,0.25)] m-4 border-[0.5px] border-gray-50"
              src={Me}
              alt="me!"
            />
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="h3 min-w-4xl">
              <span className="text-blue-600">👩‍💻 Hello!</span> I'm Karena. I'm
              currently a product designer for Dyanmic CXS, I've previously
              designed for startups across Canada.
            </div>
            <div className="flex flex-col gap-y-2 max-w-xl">
              <div className="h5">Some Things About Me</div>
              <div className="h4">
                I studied design in the York University/Sheridan College Joint
                program. Recently I've specialized myself in product design but
                i've been interested in interface and experience since I was
                twelve, recreating websites pixel for pixel in Adobe Photoshop
                (version 4.0).
              </div>
              <div className="h4">
                I have a experience working in a variety of design fields like
                print, digital content & ui/ux design. I've worked on
                applications that are being used in Canadian Tire Stores,
                signage for successful political campaigns and designed for
                startups in Ottawa, Toronto and Montreal.
              </div>
              <div className="h4">
                I'm kind of a nerd. I love Marvel movies, playing video games
                and reading fantasy. I love learning about front end development
                in my free time (I coded this site 🤓). I love learning, so I
                also have been reading a lot of about designing experiences and
                product strategy.
              </div>
            </div>
            <div className="max-w-xl">
              <div className="h5">Get in touch</div>
              <div className="h4">
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
                . I sometimes post my art, and design discoveries on{" "}
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
          </div>
        </div>
      </div>
      <div className="h-[25vh] w-full"></div>
    </div>
  );
}

export default About;
