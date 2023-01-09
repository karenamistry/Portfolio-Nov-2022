import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full fixed bg-slate-50 border-b border-blue-100">
      <div className="container py-2">
        <div className="flex gap-2 justify-center items-center">
          <NavLink
            to="/"
            className="flex gap-x-1 items-center justify-center blue-button"
          >
            <div>Work</div>
          </NavLink>
          <NavLink
            to="/about"
            className="flex gap-x-1 items-center justify-center blue-button"
          >
            <div>About</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
