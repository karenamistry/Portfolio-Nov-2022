import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="container pt-12 pb-24">
        <div className="flex flex-col gap-y-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col">
              <div className="h2 font-['Syne']">Karena Mistry</div>
              <div className="hidden h4 md:flex md:flex-col text-zinc-500">
                Made with the help coffee & Rosalía tunes.
              </div>
            </div>

            <div className="hidden h3 md:flex md:flex-col  text-zinc-700">
              © Karena Mistry 2023
            </div>
          </div>

          <div className="flex gap-x-6 font-['Syne']">
            <div className="flex flex-col gap-y-6">
              <a
                className="gray-button w-32 text-center"
                target="_blank"
                href="http://behance.net/karenamistry"
              >
                Behance
              </a>
              <a
                className="gray-button w-32 text-center"
                target="_blank"
                href="https://www.linkedin.com/in/karenamistry/"
              >
                LinkedIn
              </a>
              <a
                className="gray-button w-32 text-center"
                target="_blank"
                href="https://www.instagram.com/karena_mistry/"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
