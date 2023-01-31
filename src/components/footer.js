import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-stone-50 border-t border-blue-100">
      <div className="container pt-12 pb-24">
        <div className="flex flex-col gap-y-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col">
              <div className="h2">Karena Mistry</div>
              <div className="h2 text-blue-500">
                Made with React using Tailwind
              </div>
              <div className="hidden h4 md:flex md:flex-col">
                Made by Karena, with the help coffee and late nights.
              </div>
            </div>

            <div className="hidden h4 md:flex md:flex-col">
              © Karena Mistry 2023
            </div>
          </div>

          <div className="flex gap-x-12">
            <div className="flex flex-col gap-y-4">
              <div className="hidden h3 md:flex md:flex-col">
                Featured Works
              </div>
              <Link className="blue-button" to="/expedite">
                Expedite
              </Link>
              <Link className="blue-button" to="/stocate">
                Stocate
              </Link>
              <Link className="blue-button" to="/beacons">
                Beacons
              </Link>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="hidden h3 md:flex md:flex-col">Socials</div>
              <a
                className="gray-button"
                target="_blank"
                href="https://www.instagram.com/karena_mistry/"
              >
                Instagram
              </a>
              <a
                className="gray-button"
                target="_blank"
                href="https://www.linkedin.com/in/karenamistry/"
              >
                LinkedIn
              </a>
              <a
                className="gray-button"
                target="_blank"
                href="http://behance.net/karenamistry"
              >
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
