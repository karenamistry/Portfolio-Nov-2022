import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Stocate from "./pages/stocate";
import Expedite from "./pages/expedite";
import Beacons from "./pages/beacons";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocate" element={<Stocate />} />
        <Route path="/expedite" element={<Expedite />} />
        <Route path="/beacons" element={<Beacons />} />
      </Routes>
    </div>
  );
}

export default App;
