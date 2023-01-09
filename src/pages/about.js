import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";

function About() {
  return (
    <div>
      <div className=" w-full h-screen sm:h-full">
        <div className="container pt-24">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-8 max-w-2xl">
              <div className="h4 pb-2 text-gray-900">
                Hi! I'm Karena. I studied design at York University. I've worked
                in graphic design for the past 5 years, but recently specialized
                myself in product design. Product design is what i've always had
                a passion for but I wasn't able to find my footing in it until
                recently. I've worked on applications that are being used in
                Canadian Tire Stores, signage for successful political campaigns
                and designed for startups in Ottawa, Toronto and Montreal.
              </div>
              <div className="paragraph">
                Just some fun things about myself. I enjoy music in a variety of
                languages, like spanish and french. I also enjoy reading about
                design and coding in my free time! (I coded this site 🤓)
              </div>
            </div>
            <div className="w-1/3 h-3/4 flex sm:w-full">
              <img className="object-cover w-1/2 p-2 " src={Me} alt="Selfie" />
              <img
                className="object-cover w-1/2 p-2"
                src={Standing}
                alt="Selfie"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
