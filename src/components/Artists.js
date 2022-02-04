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
        <img src={antagonist} className="artist" alt="antagonist" />
        <img src={antagonist} className="artist" alt="antagonist" />
        <img src={antagonist} className="artist" alt="antagonist" />
        <img src={antagonist} className="artist" alt="antagonist" />
        <img src={antagonist} className="artist" alt="antagonist" />
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
