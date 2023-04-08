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
import SliderImage from './SliderImage';

const ArtistSlider = () => {
  const [autoplay, setAutoplay] = useState(true);
  let settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1000,
    slidesToScroll: 1000,
    fade: true,
    autoplaySpeed: 6500,
    cssEase: 'linear',
    pauseOnHover: true,
    autoplay: true,
  };

  useEffect(() => {
    setTimeout(() => {}, 100);
    return;
  }, [autoplay]);

  return (
    <Slider {...settings} autoplay={autoplay}>
      <SliderImage name="baraku" image={baraku} />
      <SliderImage name="comemyway" image={comemyway} />
      <SliderImage name="benchmark" image={benchmark} />
      <SliderImage name="tesla" image={tesla} />
    </Slider>
  );
};

export default ArtistSlider;
