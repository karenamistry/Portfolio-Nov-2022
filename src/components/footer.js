import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="container pt-12 pb-24">
        <div className="flex flex-col gap-y-6 md:flex-row md:justify-between">
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col">
              <div className="h3 font-semibold text-zinc-500">
                Karena Mistry
              </div>
              <div className="hidden h4 md:flex md:flex-col text-zinc-500">
                Made with the help coffee and late nights.
              </div>
            </div>

            <div className="hidden h3 text-[13px] md:flex md:flex-col  text-zinc-700">
              © Karena Mistry 2023
            </div>
          </div>

          <div className="flex gap-x-6">
            <div className="flex flex-col gap-y-4">
              <a
                className="gray-button w-32 text-center rounded-full"
                target="_blank"
                href="https://www.instagram.com/karena_mistry/"
              >
                Instagram
              </a>
              <a
                className="gray-button w-32 text-center rounded-full"
                target="_blank"
                href="https://www.linkedin.com/in/karenamistry/"
              >
                LinkedIn
              </a>
              <a
                className="gray-button w-32 text-center rounded-full"
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
