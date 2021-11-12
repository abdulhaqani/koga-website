import React from 'react';
import Slider from 'react-slick';
import gpsaga from '../public/gpsaga.jpg';
import femur from '../public/Femur.jpg';
import '../scss/home.scss';

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
      <div className="gpsaga">
        <img src={gpsaga} className="new-releases-image"></img>
      </div>
      <div className="new-releases">
        <img src={femur} className="new-releases-image"></img>
      </div>
    </Slider>
  );
};

export default BasicSlider;
