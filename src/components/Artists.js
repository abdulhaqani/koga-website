import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import antagonist from '../public/antagonist-blurred.png';
import '../scss/artists.scss';

const Artists = () => {
  return (
    <div className="artists-wrap">
      <div className="navbar">
        <Header />
      </div>
      <div className="artists">
        <div className="artist center">
          <Link to={'/artists/trainingseason'}>
            <img src={antagonist} className="artist-image" alt="antagonist" />
          </Link>
        </div>
        <div className="artist center">
          <Link to={'/artists/sonrob'}>
            <img src={antagonist} className="artist-image" alt="antagonist" />
          </Link>
        </div>
        <div className="artist center">
          <Link to={'/artists/greenbeard'}>
            <img src={antagonist} className="artist-image" alt="antagonist" />
          </Link>
        </div>
        <div className="artist center">
          <Link to={'/artists/goodwinter'}>
            <img src={antagonist} className="artist-image" alt="antagonist" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
