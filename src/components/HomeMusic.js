import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import baraku from '../public/baraku.jpeg';

const HomeMusic = () => {
  return (
    <div>
      <div className="upcoming-tracks">
        <div className="ui raised fluid card center upcoming-card">
          <div className="upcoming-text">Coming soon ...</div>
          <img src={baraku} alt="upcoming" className="upcoming-release" />
        </div>
      </div>
    </div>
  );
};

export default HomeMusic;
