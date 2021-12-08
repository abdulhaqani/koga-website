import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import HomeMusic from './HomeMusic';
import MusicSlider from './MusicSlider';

const HomeBody = () => {
  return (
    <div className="home-image-container">
      <div className="ui raised fluid card">
        <MusicSlider />
      </div>
      <div className="grid-container">
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
        <div className="ui three row grid track-component-grid">
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
          <div className="ui five wide column">
            <HomeMusic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
