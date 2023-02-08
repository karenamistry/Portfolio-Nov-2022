import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed bg-zinc-900 z-50 backdrop-blur-xl bg-[#18181B]/90">
      <div className="container py-4 flex justify-end md:justify-between">
        <div className="hidden md:flex gap-4 justify-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/karenamistry/"
            className="gray-button rounded-full"
          >
            <div>LinkedIn</div>
          </a>
          <a
            target="_blank"
            href="https://www.dropbox.com/s/bu2fi6ket1uh670/KarenaMistry-2023-CV.pdf?dl=0"
            className=" hidden gray-button rounded-full"
          >
            <div>CV</div>
          </a>
          <a
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
            className="gray-button rounded-full"
          >
            <div>k.mistry1898@gmail.com</div>
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <NavLink
            to="/"
            className="flex gap-x-1 items-center justify-center gray-button rounded-full"
          >
            <div>Home</div>
          </NavLink>
          <NavLink
            to="/about"
            className="flex gap-x-1 items-center justify-center gray-button rounded-full"
          >
            <div>Info</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
