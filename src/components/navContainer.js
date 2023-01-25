import React from "react";
import Navbar from "./navbar";
import ExternalLinks from "./externalLinks";

function NavContainer() {
  return (
    <div className="hidden">
      <div className="w-full fixed backdrop-blur-xl bg-gray-50 px-3 py-3 rounded-block rounded-none">
        <div className="flex gap-x-2">
          <Navbar />
          <ExternalLinks />
        </div>
      </div>
    </div>
  );
}

export default NavContainer;
