import React from "react";

function ExternalLinks() {
  return (
    <div className="z-50 hidden md:fixed md:flex">
      <div className="flex gap-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/karenamistry/"
          className="gray-button"
        >
          <div>LinkedIn</div>
        </a>
        <a
          target="_blank"
          href="https://www.dropbox.com/s/woehfl91vpojb6m/KarenaMistry-Jan2023-Updated.pdf?dl=0"
          className="gray-button"
        >
          <div>CV</div>
        </a>
        <a
          target="_blank"
          href="mailto:k.mistry1898@gmail.com"
          className="gray-button"
        >
          <div>k.mistry1898@gmail.com</div>
        </a>
      </div>
    </div>
  );
}

export default ExternalLinks;
