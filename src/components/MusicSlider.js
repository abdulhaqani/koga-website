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

import SliderLink from './SliderLink';

const MusicSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <SliderLink
        image={baraku}
        name="baraku"
        link="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
      />
      <SliderLink
        image={comemyway}
        name="comemyway"
        link="https://open.spotify.com/track/2zPEqch058WqgylDBwfj5p?si=31e488c2e1b347f7"
      />
      <SliderLink
        image={benchmark}
        name="benchmark"
        link="https://open.spotify.com/track/0Lc4R9b0AZFSYafNwm0As7?si=22d6c997779d4578"
      />
      <SliderLink
        image={antagonist}
        name="antagonist"
        link="https://open.spotify.com/track/0VDpB5eaIRcwehxljFR882?si=3d922911a22841fc"
      />
      <SliderLink
        image={tesla}
        name="tesla"
        link="https://open.spotify.com/track/0rOaZsCdEmPzdXDmyNfENI?si=d71291c31de44522"
      />
      <SliderLink
        image={elevatorMsc}
        name="elevatorMsc"
        link="https://open.spotify.com/track/6TXDvYkGSvMLRKtAm8qFgD?si=0e07347d70744d56"
      />
      <SliderLink
        image={nightingale}
        name="nightingale"
        link="https://open.spotify.com/track/0qCKgI1nQFAeFne0CtXdoN?si=de3a8f6d150f4a97"
      />
    </Slider>
  );
};

export default MusicSlider;
