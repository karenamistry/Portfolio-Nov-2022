import React from "react";
import Profile from "../images/about/me-standing-cropped.jpg";

function Card() {
  return (
    <div className="w-screen h-screen bg-slate-100 flex justify-center items-center z-40">
      <div className="w-[525px] flex p-12 gap-x-4 rounded-2xl shadow-lg border-b-2 border-t border-sky-50 bg-gradient-to-t from-slate-100 to-white">
        <div className="w-48">
          <img
            className="rounded-full shadow-[0_35px_60px_-15px_rgba(59,130,246,0.25)]"
            src={Profile}
            alt="me!"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between">
            <div className="h2 text-500">Karena Mistry</div>
            <div className="caption text-slate-500 sm:hidden">
              Based in Canada
            </div>
          </div>
          <div className="p leading-5">
            I create thoughtful digital interfaces, that aim to understand the
            people using them.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
// shadow-[0_-15px_50px_-15px_rgba(59,130,246,0.08)]
