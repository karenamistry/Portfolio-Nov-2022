import React from "react";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div className="w-screen h-[400px] bg-blue-50">
      <div className="container mx-auto grid gap-y-3 row-span-2 sm:grid-cols-4 text-500 grid-flow-row-dense">
        <div className="col-span-4"></div>
        <div>
          <div className="h2">Stocate</div>
          <div className="p">Product Designer, Internship</div>
        </div>
        <div className="p">2022</div>

        <div>
          <div className="h2">Dynamic CXS</div>
          <div className="p">Product Designer, Freelance</div>
        </div>
        <div className="p">2022</div>

        <div>
          <div className="h2">Casper Kitchen</div>
          <div className="p">Content Strategist, Full-Time</div>
        </div>
        <div className="p">2021</div>

        <div>
          <div className="h2">Instasnacks</div>
          <div className="p">Content Strategist, Full-Time</div>
        </div>
        <div className="p">2021</div>

        <div>
          <div className="h2">Lil Helper</div>
          <div className="p">Graphic Designer, Freelance</div>
        </div>
        <div className="p">2019</div>

        <div>
          <div className="h2">York University</div>
          <div className="p">Graphic Designer, Full-Time</div>
        </div>
        <div className="p">2017</div>

        <div>
          <div className="h2">Canadian Tire</div>
          <div className="p">Cash, Full-Time</div>
        </div>
        <div className="p">2016</div>
      </div>
    </div>
  );
}

export default Experience;

{
  /* <a href="#">Behance</a>
        <a href="#">Dribble</a>
        <a href="#">Instagram</a>
        <Link to="/">Stocate</Link>
        <Link to="/">Expedite</Link>
        <Link to="/">Beacons</Link> */
}
