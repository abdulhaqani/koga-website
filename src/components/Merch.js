import React from 'react';
import Header from './Header';
import Footer from './Footer';
import kogaMusic from '../public/koga_music_cropped.png';

const Merch = () => {
  return (
    <div className="merch-page">
      <Header />
      <img src={kogaMusic} alt="" className="full-width" />

      <h1
        className="center"
        style={{
          fontFamily: 'tresbuchet MS',
          fontSize: 'xx-large',
          fontWeight: '100',
        }}
      >
        Coming soon ...
      </h1>
    </div>
  );
};

export default Merch;
