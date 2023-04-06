import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../scss/video.scss';
import VideoModal from './VideoModal';
import antagonist from '../public/antagonist-blurred.png';

const Videos = () => {
  const trainingSeasonVideo = 'https://www.youtube.com/embed/nNE_vjP90_Y';
  return (
    <div className="">
      <Header />
      <div className="videos-container center ui grid">
        <div className="two wide column"></div>
        <div className="twelve wide column">
          <div className="video-container">
            <iframe className="video-embed" src={trainingSeasonVideo} />
          </div>
          <div className="video-container">
            <iframe className="video-embed" src={trainingSeasonVideo} />
          </div>
          <div className="video-container">
            <iframe className="video-embed" src={trainingSeasonVideo} />
          </div>
          <div className="video-container">
            <iframe className="video-embed" src={trainingSeasonVideo} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
