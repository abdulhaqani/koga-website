import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  trainingSeasonName,
  trainingSeasonDescription,
  trainingSeasonDescription2,
  trainingSeasonDescription3,
  trainingSeasonVideo,
  kingCaexarName,
  kingCaexarDescription,
  kingCaexarDescription2,
  kingCaexarDescription3,
  kingCaexarQuote,
  kingCaexarVideo,
  gpName,
  gpDescription,
  gpDescription2,
  gpDescription3,
  gpQuote,
  gpVideo,
  queennName,
  queennDescription,
  queennDescription2,
  queennDescription3,
  queennQuote,
  queennVideo,
  sonRobName,
  sonRobDescription1,
  sonRobDescription2,
  sonRobDescription3,
  sonRobQuote,
  sonRobVideo,
  greenbearddName,
  greenbearddDescription,
  greenbearddDescription2,
  greenbearddDescription3,
  greenbearddVideo,
  greenBearddQuote,
  goodWinterName,
  goodWinterDescription,
  goodWinterDescription2,
  goodWinterVideo,
} from './public/constants';
// react components
import Home from './components/Home';
import About from './components/About.js';
import Artists from './components/Artists';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Merch from './components/Merch.js';
import Artist from './components/Artist';
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
            element={
              <Artist
                artistName={trainingSeasonName}
                description={trainingSeasonDescription}
                description2={trainingSeasonDescription2}
                description3={trainingSeasonDescription3}
                video={trainingSeasonVideo}
              />
            }
          />

          <Route
            exact
            path="/artists/TrainingSeason/KingCaexar"
            element={
              <Artist
                artistName={kingCaexarName}
                description={kingCaexarDescription}
                description2={kingCaexarDescription2}
                description3={kingCaexarDescription3}
                quote={kingCaexarQuote}
                video={kingCaexarVideo}
              />
            }
          />

          <Route
            exact
            path="/artists/TrainingSeason/gp"
            element={
              <Artist
                artistName={gpName}
                description={gpDescription}
                description2={gpDescription2}
                description3={gpDescription3}
                quote={gpQuote}
                video={gpVideo}
              />
            }
          />

          <Route
            exact
            path="/artists/TrainingSeason/Queenn"
            element={
              <Artist
                artistName={queennName}
                description={queennDescription}
                description2={queennDescription2}
                description3={queennDescription3}
                quote={queennQuote}
                video={queennVideo}
              />
            }
          />
          <Route
            exact
            path="/artists/Greenbeardd"
            element={
              <Artist
                artistName={greenbearddName}
                description={greenbearddDescription}
                description2={greenbearddDescription2}
                description3={greenbearddDescription3}
                quote={greenBearddQuote}
                video={greenbearddVideo}
              />
            }
          />
          <Route
            exact
            path="/artists/SonRob"
            element={
              <Artist
                artistName={sonRobName}
                description={sonRobDescription1}
                description2={sonRobDescription2}
                description3={sonRobDescription3}
                quote={sonRobQuote}
                video={sonRobVideo}
              />
            }
          />
          <Route
            exact
            path="/artists/GoodxWinter"
            element={
              <Artist
                artistName={goodWinterName}
                description={goodWinterDescription}
                description2={goodWinterDescription2}
                video={goodWinterVideo}
              />
            }
          />
          <Route exact path="/merch" element={<Merch />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
