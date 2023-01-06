import React from "react";
import Navigation from "./navigation";
import { NavLink } from "react-router-dom";

function Footerbar() {
  return (
    <div className="w-full fixed px-2 py-2 bg-slate-50 top-0 border-b-[0.25px] border-blue-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-x-2 caption">
          <a
            className="py-1 px-2 rounded-md bg-blue-100 text-blue-500 font-medium sm:hidden"
            target="_blank"
            href="https://www.dropbox.com/s/q695q022e75l8kd/Resume-Jan2023.pdf?dl=0"
          >
            CV
          </a>
          <a
            className="py-1 px-2 rounded-md bg-blue-100 text-blue-500 font-medium sm:hidden"
            target="_blank"
            href="https://www.linkedin.com/in/karenamistry/"
          >
            LinkedIn
          </a>
          <a
            className="py-1 px-2 rounded-md bg-blue-100 text-blue-500 font-medium"
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
          >
            k.mistry1898@gmail.com
          </a>
        </div>

        <div className="p flex gap-12">
          <div className="hover:text-blue-500">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="hover:text-blue-500">
            <NavLink to="/about">About</NavLink>
          </div>
        </div>

        <div className="caption flex gap-x-2 sm:hidden">
          <h1 className="">Karena Mistry</h1>
          <h1 className="">·</h1>
          <h1 className="">Product Designer</h1>
        </div>
      </div>
    </div>
  );
}

export default Footerbar;
