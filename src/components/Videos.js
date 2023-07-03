import React from 'react';
import Header from './Header';
import VideoGrid from './VideoGrid';
import Footer from './Footer';
import '../scss/video.scss';
import VideoModal from './VideoModal';
import antagonist from '../public/antagonist-blurred.png';

const Videos = () => {
  const trainingSeasonVideo = 'https://www.youtube.com/embed/nNE_vjP90_Y';

  const videos = [
    {
      id: 'nNE_vjP90_Y',
      label: 'Gone - Queenn (Training Season)',
    },
    {
      id: 'nNE_vjP90_Y',
      label: 'Gone',
    },
    {
      id: 'nNE_vjP90_Y',
      label: 'Gone',
    },
    {
      id: 'nNE_vjP90_Y',
      label: 'Gone',
    },
  ];
  return (
    <div className="video-bg">
      <Header />
      {/* <div className="videos-container center ui grid">
        <div className="two wide column"></div>
        <div className="twelve wide column">
          <div className="ui grid">
            <div className="one wide column"></div>
            <div className="four wide column videos-video-container">
              <iframe className="video-embed" src={trainingSeasonVideo} />
            </div>
            <div className="one wide column"></div>
            <div className="four wide column videos-video-container">
              <iframe className="video-embed" src={trainingSeasonVideo} />
            </div>
            <div className="one wide column"></div>
            <div className="four wide column videos-video-container">
              <iframe className="video-embed" src={trainingSeasonVideo} />
            </div>
            <div className="one wide column"></div>
            <div className="one wide column"></div>
            <div className="four wide column videos-video-container">
              <iframe className="video-embed" src={trainingSeasonVideo} />
            </div>
          </div>
        </div>
      </div> */}
      <VideoGrid videos={videos} />
    </div>
  );
};

export default Videos;
