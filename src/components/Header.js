import React from 'react';
import '../scss/header.scss';
import '../scss/home.scss';
// import ButtonTest from './ButtonTest';
// import { Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <div className="ui grid nav-links">
      <div className="six wide column center aligned nav-link">Brand</div>
      <div className="two wide column center aligned nav-link">Artists</div>
      <div className="two wide column center aligned nav-link">Music</div>
      <div className="two wide column center aligned nav-link">Contact</div>
      <div className="two wide column center aligned nav-link">About</div>
      <div className="two wide column center aligned nav-link">Race Club</div>
    </div>
  );
};

export default Header;
