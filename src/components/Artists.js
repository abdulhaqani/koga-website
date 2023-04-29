import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../scss/artists.scss';
import '../scss/default.scss';

const Artists = () => {
  return (
    <div className="artists-wrap">
      <Header />
      <div className="artist-bg"></div>
      <div className="ui grid artist-label-wrap">
        <div className="eight wide column artist-name-container">
          <div className="artist-label-container">
            <Link
              to={'/artists/TrainingSeason'}
              className="artist-link"
              id="ts"
            >
              <h1 className="artist-label">Training Season</h1>
            </Link>
            <br />
            <Link
              to={'/artists/TrainingSeason/kingCaexar'}
              className="artist-link"
            >
              <h2 className="artist-label">King Caexar</h2>
            </Link>
            <Link to={'/artists/TrainingSeason/GP'} className="artist-link">
              <h2 className="artist-label">GP</h2>
            </Link>
            <Link to={'/artists/TrainingSeason/Queenn'} className="artist-link">
              <h2 className="artist-label">Queenn</h2>
            </Link>
          </div>
        </div>
        <div className="eight wide column artist-name-container">
          <div className="artist-label-container">
            <Link to={'/artists/SonRob'} className="">
              <h1 className="artist-label">Son Rob</h1>
            </Link>
          </div>
        </div>
        <div className="eight wide column artist-name-container">
          <div className="artist-label-container">
            <Link to={'/artists/Greenbeardd'} className="">
              <h1 className="artist-label">Greenbeardd</h1>
            </Link>
          </div>
        </div>
        <div className="eight wide column artist-name-container">
          <div className="artist-label-container">
            <Link to={'/artists/GoodxWinter'} className="">
              <h1 className="artist-label">GoodxWinter</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
