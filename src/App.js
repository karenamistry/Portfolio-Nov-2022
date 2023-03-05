import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Stocate from "./pages/stocate";
import Expedite from "./pages/expedite";
import Beacons from "./pages/beacons";
import Tablature from "./pages/tablature";
import Instansnacks from "./pages/instansnacks";
import Casper from "./pages/casper";
import Canadiantire from "./pages/canadiantire";
import Campaign from "./pages/campaign";
import Branding from "./pages/branding";
import Fun from "./pages/fun";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocate" element={<Stocate />} />
        <Route path="/expedite" element={<Expedite />} />
        <Route path="/beacons" element={<Beacons />} />
        <Route path="/tablature" element={<Tablature />} />
        <Route path="/instasnacks" element={<Instansnacks />} />
        <Route path="/casperkitchen" element={<Casper />} />
        <Route path="/canadiantire" element={<Canadiantire />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </div>
  );
}

export default App;
