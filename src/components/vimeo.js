import React from "react";

const src = "https://player.vimeo.com/api/player.js";

const Video = () => {
  return (
    <div className="w-full h-full ">
      <iframe
        width="100%"
        height="600px"
        src="https://player.vimeo.com/video/700592704?h=d683bc1c07&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Karena Mistry Mograph Reel 2021"
      ></iframe>
    </div>
  );
};

export default Video;
