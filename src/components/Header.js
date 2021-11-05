import React from 'react';
import '../scss/header.scss';
import ButtonTest from './ButtonTest';
import { Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="ui three column grid headerLinks">
        <h1 className="column">Main Header</h1>
        <h1 className="column">Main Header</h1>
        <h1 className="column">Main Header</h1>
      </div>
    </div>
  );
};

export default Header;
