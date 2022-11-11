import React from "react";
import { ReactComponent as Arrow } from "../images/downward-arrow.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  return (
    <Item>
      <Dropdown></Dropdown>
    </Item>
  );
}

function Bar() {
  return (
    <div className="">
      <Arrow className=""></Arrow>
    </div>
  );
}

function Item(props) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="button w-1/12 h-10 flex justify-center items-center"
    >
      <Arrow className="w-1/5 h-1/5 rotate-180"></Arrow>
      {open && props.children}
    </button>
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

export default Navigation;
