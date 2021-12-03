import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import baraku from '../public/baraku.jpeg';

import MusicSlider from './MusicSlider';

const HomeBody = () => {
  return (
    <div className="home-image-container">
      <div className="ui raised fluid card">
        <MusicSlider />
      </div>
      <div className="grid-container">
        <div className="upcoming-tracks">
          <div className="ui raised fluid card center upcoming-card">
            <div className="upcoming-text">Coming soon ...</div>
            <img src={baraku} alt="upcoming" className="upcoming-release" />
          </div>
        </div>
        <div className="playlist">
          <div className="ui raised fluid card playlist-card">
            <iframe
              src="https://open.spotify.com/embed/playlist/1H7VjWekFdAanBNTdRnsEl?utm_source=generator"
              width="100%"
              height="100%"
              frameBorder="1"
              allowfullscreen="1"
              allowtransparency="true"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="spotify-link"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
