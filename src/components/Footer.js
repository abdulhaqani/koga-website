import React from 'react';
import '../scss/footer.scss';
import '../scss/default.scss';

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="center">Koga Studios ©</h3>
      <div className="center">
        <a
          className="nav-link"
          href="https://www.instagram.com/kogamusic00/?utm_medium=copy_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
          className="nav-link"
          href="https://www.facebook.com/KogaClanStudios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook-square"></i>
        </a>
        <a
          className="nav-link"
          href="https://www.youtube.com/c/kogamusic00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          className="nav-link"
          href="https://open.spotify.com/artist/0nsTvhODP9ZYbxC0KePYSQ?si=TEQHkFV6QQO3YQJERaw7kg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-spotify"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
