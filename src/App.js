import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import trainingSeasonImage1 from './public/trseason.webp';
import trainingSeasonImage2 from './public/trseason2.webp';
import trainingSeasonImage3 from './public/gp_and_caexar.webp';
import trainingSeasonImage4 from './public/gp_and_queenn.webp';
import trainingSeasonImage5 from './public/caexar_and_queenn.webp';
import caexarImage1 from './public/caexar.webp';
import caexarImage2 from './public/caexar2.webp';
import gpImage1 from './public/gp_1.webp';
import gpImage2 from './public/gp_2.webp';
import queenImage1 from './public/queenn.webp';
import greenImage1 from './public/Green_1.webp';
import greenImage2 from './public/green2.webp';
import greenImage3 from './public/green_3.webp';
import sonRobImage1 from './public/son_rob.webp';
import sonRobImage3 from './public/son_rob3.webp';
import sonRobImage5 from './public/son_rob5.webp';
import goodWinterImage1 from './public/goodWinter.webp';

import {
  trainingSeasonName,
  trainingSeasonDescription,
  trainingSeasonDescription2,
  trainingSeasonDescription3,
  trainingSeasonVideo,
  // trainingSeasonFb,
  // trainingSeasonIg,
  // trainingSeasonspotify,
  // trainingSeasonAppleMusic,
  kingCaexarName,
  kingCaexarDescription,
  kingCaexarDescription2,
  kingCaexarDescription3,
  kingCaexarQuote,
  kingCaexarVideo,
  // kingCaexarFb,
  // kingCaexarIg,
  // kingCaexarSpotify,
  // kingCaexarAppleMusic,
  gpName,
  gpDescription,
  gpDescription2,
  gpDescription3,
  gpQuote,
  gpVideo,
  // gpFb,
  // gpIg,
  // gpSpotify,
  // gpAppleMusic,
  queennName,
  queennDescription,
  queennDescription2,
  queennDescription3,
  queennQuote,
  queennVideo,
  // queennFb,
  // queennIg,
  // queennSpotify,
  // queennAppleMusic,
  sonRobName,
  sonRobDescription1,
  sonRobDescription2,
  sonRobDescription3,
  sonRobQuote,
  sonRobVideo,
  // sonRobFb,
  // sonRobIg,
  // sonRobSpotify,
  // sonRobAppleMusic,
  greenbearddName,
  greenbearddDescription,
  greenbearddDescription2,
  greenbearddDescription3,
  greenbearddVideo,
  greenBearddQuote,
  // greenbearddFb,
  // greenbearddIg,
  // greenbearddSpotify,
  // greenbearddAppleMusic,
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
                image1={trainingSeasonImage1}
                image2={trainingSeasonImage2}
                image3={trainingSeasonImage3}
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
                image1={caexarImage1}
                image2={caexarImage2}
                image3={trainingSeasonImage5}
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
                image1={gpImage1}
                image2={gpImage2}
                image3={trainingSeasonImage4}
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
                image1={queenImage1}
                image2={trainingSeasonImage4}
                image3={trainingSeasonImage5}
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
                image1={greenImage1}
                image2={greenImage2}
                image3={greenImage3}
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
                image1={sonRobImage1}
                image2={sonRobImage5}
                image3={sonRobImage3}
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
                image1={goodWinterImage1}
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
