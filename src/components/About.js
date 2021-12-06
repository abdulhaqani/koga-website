import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArtistSlider from './ArtistSlider';
const About = () => {
  return (
    <div className="">
      <div className="navbar">
        <Header />
      </div>
      <div className="ui grid">
        <div className="ui eight wide column">
          <ArtistSlider />
        </div>
        <div className="ui eight wide column">Bullshit</div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
