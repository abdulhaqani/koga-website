import React from 'react';
import Header from './Header';
import ArtistSlider from './ArtistSlider';
import Footer from './Footer';
import '../scss/artists.scss';

const Artist = (props) => {
  const { artistName, description, description2, description3, video, quote } =
    props;
  return (
    <div>
      <Header />
      <div className="ui grid about-grid">
        <div className="artist-container">
          <ArtistSlider />
        </div>
        <div className="artist-container">
          <h1 className="about-title center">{artistName}</h1>
          <p className="about-desc center">{description}</p>
          <p className="about-desc center">{description2}</p>
          <p className="about-desc center">{description3}</p>
          <div className="artist-video-container center">
            <iframe className="artist-video-embed" src={video} />
          </div>

          {quote ? (
            <div className="quote">
              <p className="about-desc-quote center">
                “{quote}” - {artistName}
              </p>
            </div>
          ) : (
            <br />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artist;
