import React from 'react';
import Header from './Header';
import Footer from './Footer';
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
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
        <div className="artist center">
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
        <div className="artist center">
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
        <div className="artist center">
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
