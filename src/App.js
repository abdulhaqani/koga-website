import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// react components
import Home from "./components/Home";
import About from "./components/About.js";
import Artists from "./components/Artists";
import Videos from "./components/Videos";
import TrainingSeason from "./components/TrainingSeason";
import Contact from "./components/Contact";
import Merch from "./components/Merch.js";
import SonRob from "./components/SonRob";
import Greenbeardd from "./components/Greenbeardd";
import GoodxWinter from "./components/GoodxWinter";
// scss

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/artists" element={<Artists />} />
          <Route
            exact
            path="/artists/TrainingSeason"
            element={<TrainingSeason />}
          />
          <Route exact path="/artists/SonRob" element={<SonRob />} />
          <Route exact path="/artists/Greenbeardd" element={<Greenbeardd />} />
          <Route exact path="/artists/GoodxWinter" element={<GoodxWinter />} />
          <Route exact path="/merch" element={<Merch />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
