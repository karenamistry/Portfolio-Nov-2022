import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed backdrop-blur-md bg-gray-50/80 border-b border-stone-100 z-40">
      <div className="container py-2">
        <div className="flex gap-2 justify-center lg:justify-end items-center">
          <NavLink
            to="/"
            className="flex gap-x-1 items-center justify-center blue-button text-[14px] px-6"
          >
            <div>Home</div>
          </NavLink>
          <NavLink
            to="/about"
            className="flex gap-x-1 items-center justify-center blue-button text-[14px] px-8"
          >
            <div>Info</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
