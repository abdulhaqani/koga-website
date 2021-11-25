import React from 'react';
import '../scss/home.scss';
import Femur from '../public/Femur.jpg';

import BasicSlider from './BasicSlider';

const HomeBody = () => {
  return (
    <div className="home-image-container">
      <div className="ui raised fluid card">
        <BasicSlider />
      </div>
      <div className="ui two row grid container grid-container">
        <div className="ui twelve wide column">
          <div className="ui raised fluid card center">
            <h1 className="center">Upcoming Tracks</h1>
            <img src={Femur}></img>
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
