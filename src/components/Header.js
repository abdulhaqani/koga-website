import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import '../scss/header.scss';
import '../scss/home.scss';
import '../scss/default.scss';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleScreenSizeChange = () => {
    setIsMobile(window.innerWidth < 800);
  };

  // listen for screen size changes
  window.addEventListener('resize', handleScreenSizeChange);

  // remove the event listener when the component unmounts
  React.useEffect(() => {
    handleScreenSizeChange();
    return () => window.removeEventListener('resize', handleScreenSizeChange);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-container">
        <ul className="ui grid nav-links">
          <ul className="seven wide column ui grid icons">
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

          <li className="one wide column"></li>
          {isMobile ? (
            <div className="eight wide column">
              <Dropdown
                item
                icon="bars"
                floating
                pointing
                className="top right mobile-menu-dropdown"
              >
                <Dropdown.Menu>
                  <Dropdown.Item className="three wide column center aligned nav-link">
                    <Link to={'/artists'} className="nav-link">
                      Artists
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="three wide column center aligned nav-link">
                    <Link to={'/Videos'} className="nav-link">
                      Videos
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="three wide column center aligned nav-link">
                    <Link to={'/contact'} className="nav-link">
                      Contact
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="three wide column center aligned nav-link">
                    <Link to={'/about'} className="nav-link">
                      About
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="three wide column center aligned nav-link">
                    <a
                      href="https://kogaklanshop.myshopify.com/"
                      className="nav-link"
                    >
                      Merch
                    </a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <ul className="eight wide column ui grid nav-container">
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
                <Link to={'/about'} className="nav-link">
                  About
                </Link>
              </li>
              <li className="three wide column center aligned nav-link">
                <a
                  href="https://kogaklanshop.myshopify.com/"
                  className="nav-link"
                >
                  Merch
                </a>
              </li>
              <li className="three wide column center aligned nav-link">
                <Link to={'/contact'} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
