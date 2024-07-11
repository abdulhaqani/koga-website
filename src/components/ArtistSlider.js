import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../scss/home.scss';
import '../scss/default.scss';
import SliderImage from './SliderImage';

const ArtistSlider = (props) => {
  const { image1, image2, image3 } = props;
  const [autoplay, setAutoplay] = useState(true);
  setAutoplay(true);
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
      {image1 ? <SliderImage image={image1} /> : null}
      {image2 ? <SliderImage image={image2} /> : null}
      {image3 ? <SliderImage image={image3} /> : null}
    </Slider>
  );
};

export default ArtistSlider;
