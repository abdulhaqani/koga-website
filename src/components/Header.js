import React from 'react';
import '../scss/header.scss';
import '../scss/home.scss';
import { Link } from 'react-router-dom';

// import ButtonTest from './ButtonTest';
// import { Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <ul className="ui grid nav-links">
      <ul className="five wide column ui grid icons">
        <li className="two wide column"></li>
        <li className="nav-link three wide column">
          <a
            className="nav-link"
            href="https://github.com/abdulhaqani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-home"></i>
          </a>
        </li>
        <li className="nav-link three wide column">
          <a
            className="nav-link"
            href="https://www.instagram.com/kogamusic00/?utm_medium=copy_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li className="nav-link three wide column">
          <a
            className="nav-link"
            href="https://www.facebook.com/KogaClanStudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li className="nav-link three wide column">
          <a
            className="nav-link"
            href="https://www.youtube.com/c/kogamusic00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li className="nav-link two wide column">
          <a
            className="nav-link"
            href="https://open.spotify.com/artist/0nsTvhODP9ZYbxC0KePYSQ?si=TEQHkFV6QQO3YQJERaw7kg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-spotify"></i>
          </a>
        </li>
      </ul>

      <li className="two wide column"></li>
      <ul className="nine wide column ui grid">
        <li className="three wide column center aligned nav-link">
          <Link to={'/artists'} className="nav-link">
            Artists
          </Link>
        </li>
        <li className="three wide column center aligned nav-link">
          <Link to={'/music'} className="nav-link">
            Music
          </Link>
        </li>
        <li className="three wide column center aligned nav-link">
          <Link to={'/contact'} className="nav-link">
            Contact
          </Link>
        </li>
        <li className="three wide column center aligned nav-link">
          <Link to={'/about'} className="nav-link">
            About
          </Link>
        </li>
        <li className="three wide column center aligned nav-link">
          <Link to={'/raceclub'} className="nav-link">
            Raceclub
          </Link>
        </li>
        <li className="one wide column center aligned nav-link"></li>
      </ul>
    </ul>
  );
};

export default Header;
