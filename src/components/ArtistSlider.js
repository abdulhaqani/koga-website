import React, { useState, useEffect } from 'react';
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

const ArtistSlider = () => {
  const [autoplay, setAutoplay] = useState(false);
  let settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplaySpeed: 1500,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  useEffect(() => {
    setTimeout(() => {
      autoplay ? setAutoplay(false) : setAutoplay(true);
    }, 3000);
    return;
  }, [autoplay]);

  return (
    <Slider {...settings} autoplay={autoplay}>
      <div className="baraku-container">
        <div className="baraku"></div>
        <a
          href="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={baraku} className="new-releases-image" alt="baraku" />
        </a>
      </div>
      <div className="comemyway-container">
        <div className="comemyway"></div>
        <a
          href="https://open.spotify.com/track/2zPEqch058WqgylDBwfj5p?si=31e488c2e1b347f7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={comemyway} className="new-releases-image" alt="comemyway" />
        </a>
      </div>
      <div className="benchmark-container">
        <div className="benchmark"></div>
        <a
          href="https://open.spotify.com/track/0Lc4R9b0AZFSYafNwm0As7?si=22d6c997779d4578"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={benchmark} className="new-releases-image" alt="benchmark" />
        </a>
      </div>
      <div className="antagonist-container">
        <div className="antagonist"></div>
        <a
          href="https://open.spotify.com/track/0VDpB5eaIRcwehxljFR882?si=3d922911a22841fc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={antagonist}
            className="new-releases-image"
            alt="antagonist"
          />
        </a>
      </div>

      <div className="tesla-container">
        <div className="tesla"></div>
        <a
          href="https://open.spotify.com/track/0rOaZsCdEmPzdXDmyNfENI?si=d71291c31de44522"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tesla} className="new-releases-image" alt="tesla" />
        </a>
      </div>
      <div className="elevator-msc-container">
        <div className="elevator-msc"></div>
        <a
          href="https://open.spotify.com/track/6TXDvYkGSvMLRKtAm8qFgD?si=0e07347d70744d56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={elevatorMsc}
            className="new-releases-image"
            alt="elevator.msc"
          />
        </a>
      </div>
      <div className="nightingale-container">
        <div className="nightingale"></div>
        <a
          href="https://open.spotify.com/track/0qCKgI1nQFAeFne0CtXdoN?si=de3a8f6d150f4a97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={nightingale}
            className="new-releases-image"
            alt="nightingale"
          />
        </a>
      </div>
    </Slider>
  );
};

export default ArtistSlider;
