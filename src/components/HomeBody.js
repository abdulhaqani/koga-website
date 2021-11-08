import React from 'react';
import '../scss/home.scss';
import gpsaga from '../public/gpsaga.jpg';
import femur from '../public/Femur.jpg';
import BasicSlider from './BasicSlider';

const HomeBody = () => {
  return (
    <div className="home-body-container">
      <div className="ui eight column two row grid container grid-container">
        <div className="column"></div>
        <div className="ui twelve wide column">
          <div className="ui raised fluid card home-cards">
            <BasicSlider />
          </div>
        </div>

        <div className="column"></div>

        <div className="column"></div>
        <div className="ui eight wide column">
          <div className="ui raised fluid card center">
            <h1 className="center">Upcoming Tracks</h1>
          </div>
        </div>
        <div className="ui four wide column">
          <div className="ui raised fluid card">
            <h1 className="center">Playlist links</h1>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
};

export default HomeBody;
