import React from "react";
import Navigation from "./navigation";
import { NavLink } from "react-router-dom";

function Footerbar() {
  return (
    <div className="w-full fixed px-2 py-2 bg-slate-50 top-0 border-b-[0.25px] border-blue-200 shadow-sm">
      <div className="container mx-auto flex justify-between items-center sm:flex-col sm:gap-8">
        <div className="flex gap-x-2 caption">
          <a
            className="py-2 px-3 rounded-md bg-slate-100 text-xs font-medium text-slate-600 active:bg-slate-300 active:text-slate-900 hover:bg-slate-200 hover:text-slate-700"
            target="_blank"
            href="https://www.dropbox.com/s/q695q022e75l8kd/Resume-Jan2023.pdf?dl=0"
          >
            CV
          </a>
          <a
            className="py-2 px-3 rounded-md bg-slate-100 text-xs font-medium text-slate-600 active:bg-slate-300 active:text-slate-900 hover:bg-slate-200 hover:text-slate-700"
            target="_blank"
            href="https://www.linkedin.com/in/karenamistry/"
          >
            LinkedIn
          </a>
          <a
            className="py-2 px-3 rounded-md bg-slate-100 text-xs font-medium text-slate-600 active:bg-slate-300 active:text-slate-900 hover:bg-slate-200 hover:text-slate-700"
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
          >
            k.mistry1898@gmail.com
          </a>
        </div>

        <div className="flex gap-x-2 caption">
          <div className="py-2 px-3 rounded-md bg-blue-100 text-xs font-medium text-blue-600 active:bg-blue-300 active:text-blue-900 hover:bg-blue-200 hover:text-blue-700">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="py-2 px-3 rounded-md bg-blue-100 text-xs font-medium text-blue-600 active:bg-blue-300 active:text-blue-900 hover:bg-blue-200 hover:text-blue-700">
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
