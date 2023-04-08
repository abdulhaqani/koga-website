import React from 'react';
import '../scss/home.scss';

const SliderLink = (props) => {
  const { link, name, image } = props;

  return (
    <div className="music-release-container">
      <div
        className="music-slider-bg"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} className="new-releases-image" alt={name} />
      </a>
    </div>
  );
};

export default SliderLink;
