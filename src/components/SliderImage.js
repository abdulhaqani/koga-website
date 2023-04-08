import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';

const SliderImage = (props) => {
  const { name, image } = props;

  return (
    <div>
      <div className="music-release-container">
        <div
          className="artist-slider-bg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <img src={image} className="new-releases-image" alt={name} />
      </div>
    </div>
  );
};

export default SliderImage;
