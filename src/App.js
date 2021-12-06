import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// react components
import Home from './components/Home';
import About from './components/About.js';
import Artists from './components/Artists';
import Videos from './components/Videos';
import Contact from './components/Contact';
import RaceClub from './components/RaceClub.js';
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
          <Route exact path="/hikikomori-race-club" element={<RaceClub />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
