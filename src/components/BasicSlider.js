import React from 'react';
import Slider from 'react-slick';
import baraku from '../public/baraku.jpeg';
import antagonist from '../public/antagonist-blurred.png';
import elevatorMsc from '../public/elevator.msc.png';
import nightingale from '../public/nightingale.jpg';
import tesla from '../public/tesla.png';
import comemyway from '../public/comemyway.jpg';
import benchmark from '../public/benchmark.jpg';
import '../scss/home.scss';
import '../scss/default.scss';

const BasicSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="baraku-container">
        <div className="baraku"></div>
        <img src={baraku} className="new-releases-image" alt="baraku" />
      </div>
      <div className="comemyway-container">
        <div className="comemyway"></div>
        <img src={comemyway} className="new-releases-image" alt="comemyway" />
      </div>
      <div className="benchmark-container">
        <div className="benchmark"></div>
        <img src={benchmark} className="new-releases-image" alt="benchmark" />
      </div>
      <div className="antagonist-container">
        <div className="antagonist"></div>
        <img src={antagonist} className="new-releases-image" alt="antagonist" />
      </div>

      <div className="tesla-container">
        <div className="tesla"></div>
        <img src={tesla} className="new-releases-image" alt="tesla" />
      </div>
      <div className="elevator-msc-container">
        <div className="elevator-msc"></div>
        <img
          src={elevatorMsc}
          className="new-releases-image"
          alt="elevator.msc"
        />
      </div>
      <div className="nightingale-container">
        <div className="nightingale"></div>
        <img
          src={nightingale}
          className="new-releases-image"
          alt="nightingale"
        />
      </div>
    </Slider>
  );
};

export default BasicSlider;
