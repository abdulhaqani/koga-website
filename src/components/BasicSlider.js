import React from 'react';
import Slider from 'react-slick';
import gpsaga from '../public/gpsaga.jpg';
import femur from '../public/Femur.jpg';

const BasicSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={gpsaga}></img>
      </div>
      <div>
        <img src={femur}></img>
      </div>
    </Slider>
  );
};

export default BasicSlider;
