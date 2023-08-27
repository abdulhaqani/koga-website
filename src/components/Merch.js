import React from 'react';
import Header from './Header';
import Footer from './Footer';
import kogaMusic from '../public/koga_music_cropped.png';
import '../scss/default.scss';

const Merch = () => {
  return (
    <div className="merch-page">
      <Header />
      <img src={kogaMusic} alt="" className="full-width" />

      <div className="merch-container">
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
        <div className="merch-footer">
          <Footer bg={'#DFDFDF'} iconColor={'#222'} />
        </div>
      </div>
    </div>
  );
};

export default Merch;
