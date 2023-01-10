import React from "react";
import { Link } from "react-router-dom";
import Profile from "../images/about/me-standing-cropped.jpg";

function Hero() {
  return (
    <div className="container w-screen h-[85vh] flex flex-col justify-center items-start gap-6 md:flex-row md:justify-center md:items-center">
      <img
        className="w-24 md:w-32 rounded-full shadow-[0_35px_60px_-15px_rgba(59,130,246,0.25)] m-4"
        src={Profile}
        alt="me!"
      />
      <div className="flex flex-col gap-3">
        <div className="h1">Karena Mistry</div>
        <div className="paragraph max-w-md">
          I'm a product designer based in Canada. I create thoughtful digital
          interfaces, that aim to understand the people using them.
        </div>
        <div className="flex gap-x-2 items-center gray-button">
          <Link to="/about" className="text-xs font-medium">
            Read more about me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
