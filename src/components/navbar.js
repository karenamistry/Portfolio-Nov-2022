import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed bg-white z-50">
      <div className="container py-2 flex justify-end md:justify-between">
        <div className="hidden md:flex gap-2 justify-center">
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
            className="gray-button"
          >
            <div>CV</div>
          </a>
          <a
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
            className="gray-button"
          >
            <div>k.mistry1898@gmail.com</div>
          </a>
        </div>

        <div className="flex gap-2 justify-center">
          <NavLink
            to="/"
            className="flex gap-x-1 items-center justify-center gray-button"
          >
            <div>Home</div>
          </NavLink>
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
