import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-between py-8 px-4 p bg-slate-50">
      <div>
        <div>Made by Karena</div>
        <div className="caption text-slate-500">With React using Tailwind</div>
      </div>
      <div className="flex gap-x-2 items-center">
        <div className="">Product Design Works</div>
        <Link className="caption blue-text" to="/stocate">
          Stocate
        </Link>
        <Link className="caption blue-text" to="/beacons">
          Beacons
        </Link>
        <Link className="caption blue-text" to="/expedite">
          Expedite
        </Link>
      </div>

      <div className="flex gap-x-2 items-center">
        <div className="">Socials</div>
        <a
          target="_blank"
          className="caption blue-text"
          href="http://behance.net/karenamistry"
        >
          Behance
        </a>
        <a
          target="_blank"
          className="caption blue-text"
          href="https://www.instagram.com/karena_mistry/"
        >
          Instagram
        </a>
      </div>
      <div>Last updated Nov '22</div>
    </div>
  );
}

export default Footer;
