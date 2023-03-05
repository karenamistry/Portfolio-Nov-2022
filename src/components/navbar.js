import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed bg-zinc-900 z-50 backdrop-blur-xl bg-[#18181B]/90 font-['Syne']">
      <div className="container py-5 flex justify-end md:justify-between">
        <div className="hidden md:flex gap-12 justify-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/karenamistry/"
            className="gray-button"
          >
            <div>LinkedIn</div>
          </a>
          <a
            target="_blank"
            href="https://www.dropbox.com/s/bu2fi6ket1uh670/KarenaMistry-2023-CV.pdf?dl=0"
            className="hidden gray-button"
          >
            <div>CV</div>
          </a>
          <a
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
            className="gray-button"
          >
            <div>
              k.mistry<span className="font-['Albert_Sans']">1898</span>
              @gmail.com
            </div>
          </a>
        </div>

        <div className="flex gap-12 justify-center">
          <NavLink
            to="/"
            className="flex gap-x-1 items-center justify-center gray-button"
          >
            <div>Work</div>
          </NavLink>
          <a
            target="_blank"
            href="https://dribbble.com/karenamistry"
            className="gray-button"
          >
            <div>Fun</div>
          </a>
          <NavLink
            to="/about"
            className="flex gap-x-1 items-center justify-center gray-button"
          >
            <div>Info</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
