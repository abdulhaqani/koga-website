import React from 'react';
import '../scss/header.scss';
// import ButtonTest from './ButtonTest';
// import { Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="ui three column grid headerLinks">
        <div className="column center">
          <h3>Navigation Links</h3>
        </div>
        <div className="column center">
          <h1>Koga Collective</h1>
        </div>
        <div className="column center">
          <h3>merch, about, artists etc</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
