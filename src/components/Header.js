import React from 'react';
import '../scss/header.scss';
import '../scss/home.scss';
import '../scss/default.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <ul className="ui grid nav-links">
          <ul className="five wide column ui grid icons">
            <li className="two wide column"></li>
            <li className="nav-link three wide column">
              <Link to={'/'} className="nav-link">
                <i class="fas fa-home"></i>
              </Link>
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
          <ul className="nine wide column ui grid nav-container">
            <li className="three wide column center aligned nav-link">
              <Link to={'/artists'} className="nav-link">
                Artists
              </Link>
            </li>
            <li className="three wide column center aligned nav-link">
              <Link to={'/Videos'} className="nav-link">
                Videos
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
              <Link to={'/merch'} className="nav-link">
                Merch
              </Link>
            </li>
            <li className="one wide column center aligned nav-link"></li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Header;
