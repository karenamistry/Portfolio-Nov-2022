import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { ReactComponent as Arrow } from "../images/downward-arrow.svg";

function Header() {
  return (
    <div>
      <Navbar>
        <NavItem>
          <Dropdown></Dropdown>
        </NavItem>
      </Navbar>

      <Name />
    </div>
  );
}

function Navbar(props) {
  return (
    <div className="flex justify-center align-center">
      <div className="container fixed top-6 z-50">{props.children}</div>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        class="greyShadow w-1/12 h-10 flex justify-center items-center"
      >
        <Arrow className="w-1/5 h-1/5" />
      </button>
      {open && props.children}
    </>
  );
}

function Dropdown(props) {
  return <DropdownItem>{props.children}</DropdownItem>;

  function DropdownItem() {
    return (
      <div className="flex flex-col caption">
        <NavLink
          to="/"
          className="bg-100 w-1/12 h-14 shadow-lg rounded-t-md backdrop-blur-sm flex justify-center items-center"
        >
          Work
        </NavLink>
        <NavLink
          to="/about"
          className="bg-100 w-1/12 h-14 shadow-lg rounded-b-md backdrop-blur-sm flex justify-center items-center"
        >
          About
        </NavLink>
      </div>
    );
  }
}

function Name() {
  return (
    <div className="justify-center hidden">
      <div className="h2 fixed top-6 z-50">Karena Mistry</div>
    </div>
  );
}

export default Header;
