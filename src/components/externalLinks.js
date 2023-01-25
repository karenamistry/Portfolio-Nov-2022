import React from "react";

function ExternalLinks() {
  return (
    <div className="fixed hidden lg:flex z-50">
      <div className="container py-2">
        <div className="flex gap-2 justify-end items-center ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/karenamistry/"
            className="flex gap-x-1 items-center justify-center gray-button"
          >
            <div>LinkedIn</div>
          </a>
          <a
            target="_blank"
            href="https://www.dropbox.com/s/woehfl91vpojb6m/KarenaMistry-Jan2023-Updated.pdf?dl=0"
            className="flex gap-x-1 items-center justify-center gray-button"
          >
            <div>CV</div>
          </a>
          <a
            target="_blank"
            href="mailto:k.mistry1898@gmail.com"
            className="flex gap-x-1 items-center justify-center gray-button"
          >
            <div>k.mistry1898@gmail.com</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExternalLinks;
