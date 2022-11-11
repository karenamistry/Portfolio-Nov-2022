import React from "react";
import Navigation from "./navigation";
import { NavLink } from "react-router-dom";

function Footerbar() {
  return (
    <div className="w-full fixed px-2 py-2 bg-slate-50 top-0 border-b-[0.25px] border-blue-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-x-2 caption">
          <a
            className="py-1 px-2 rounded-md bg-blue-100 text-blue-500"
            target="_blank"
            href="https://www.dropbox.com/s/jypnti18w0e9adx/Resume-Nov2022.pdf?dl=0"
          >
            CV
          </a>
          <a
            className="py-1 px-2 rounded-md bg-blue-100 text-blue-500"
            target="_blank"
            href="https://www.linkedin.com/in/karenamistry/"
          >
            LinkedIn
          </a>
          <a
            className="py-1 px-2 rounded-md bg-blue-100 text-blue-500"
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
          >
            k.mistry1898@gmail.com
          </a>
        </div>

        <div className="p flex gap-6">
          <NavLink to="/">Work</NavLink>
          {/* <NavLink to="/about">About</NavLink> */}
        </div>

        <div className="caption sm:hidden md:flex gap-x-2">
          <h1 className="">Product Designer</h1>
          <h1 className="">·</h1>
          <h1 className="">Based in Canada</h1>
        </div>
      </div>
    </div>
  );
}

export default Footerbar;
