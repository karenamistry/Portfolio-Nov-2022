import React from "react";

import Me from "../images/about/me-spinning.jpg";
import Standing from "../images/about/me-standing.jpg";

function About() {
  return (
    <div>
      <div className="mt-10 w-full h-screen bg-slate-100 sm:h-full">
        <div className="container mx-auto pt-12">
          <div className="mb-8 w-1/3 h-full  mx-auto  sm:w-full">
            <div className="h2 pb-2">
              👋 I'm Karena. I studied design at York University. I've worked in
              graphic design for the past 5 years, but recently specialized
              myself in product design. Product design is what i've always had a
              passion for but I wasn't able to find my footing in it until
              recently. I've worked on applications that are being used in
              Canadian Tire Stores, signage for successful political campaigns
              and designed for startups in Ottawa, Toronto and Montreal.
            </div>
            <div className="p">
              Just some fun things about myself. I enjoy music in a variety of
              languages, like spanish and french. I also enjoy reading about
              design and coding in my free time! (I coded this site 🤓)
            </div>
          </div>

          <div className="w-1/3 h-3/4 flex mx-auto sm:w-full">
            <img
              className="object-cover w-1/2 rounded-2xl p-2 "
              src={Me}
              alt="Selfie"
            />
            <img
              className="object-cover w-1/2 rounded-2xl p-2"
              src={Standing}
              alt="Selfie"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
