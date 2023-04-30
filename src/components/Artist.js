import React from 'react';
import Header from './Header';
import ArtistSlider from './ArtistSlider';
import Footer from './Footer';
import '../scss/artists.scss';

const Artist = (props) => {
  const {
    artistName,
    description,
    description2,
    description3,
    video,
    quote,
    fbLink,
    igLink,
    spotifyLink,
  } = props;
  return (
    <div>
      <Header />
      <div className="ui grid about-grid">
        <div className="artist-container">
          <ArtistSlider />
        </div>
        <div className="artist-container">
          <h1 className="artist-title center">{artistName}</h1>
          <p className="artist-desc center">{description}</p>
          <p className="artist-desc center">{description2}</p>
          <p className="artist-desc center">{description3}</p>
          <div className="artist-video-container center">
            <iframe className="artist-video-embed" src={video} />
          </div>

          {quote ? (
            <div className="quote">
              <p
                className="artist-desc-quote "
                style={{ whiteSpace: 'pre-line' }}
              >
                “{quote}” - {artistName}
              </p>
            </div>
          ) : (
            <br />
          )}
          <div className="center footer-content">
            <div className="center ui grid ">
              {igLink ? (
                <div className="four wide column center">
                  <a
                    className="nav-link"
                    href={igLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </div>
              ) : (
                <br />
              )}
              {fbLink ? (
                <div className="four wide column center">
                  <a
                    className="nav-link"
                    href={fbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </div>
              ) : (
                <br />
              )}

              {spotifyLink ? (
                <div className="four wide column center">
                  <a
                    className="nav-link"
                    href={spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </div>
              ) : (
                <br />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artist;
