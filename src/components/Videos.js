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
      <div className="navbar">
        <Header />
      </div>{' '}
      <div className="videosContainer center ui grid">
        <div className="two wide column">left</div>
        <div className="four wide column">
          <div className="video-container">
            <VideoModal
              SongImage={antagonist}
              SongVideo={trainingSeasonVideo}
            />
          </div>
          <div className="video-container">
            <VideoModal
              SongImage={antagonist}
              SongVideo={trainingSeasonVideo}
            />
          </div>
        </div>
        <div className="four wide column">
          <div className="video-container">
            <VideoModal
              SongImage={antagonist}
              SongVideo={trainingSeasonVideo}
            />
          </div>
          <div className="video-container">
            <VideoModal
              SongImage={antagonist}
              SongVideo={trainingSeasonVideo}
            />
          </div>
        </div>
        <div className="four wide column">
          <div className="video-container">
            <VideoModal
              SongImage={antagonist}
              SongVideo={trainingSeasonVideo}
            />
          </div>
          <div className="video-container">
            <VideoModal
              SongImage={antagonist}
              SongVideo={trainingSeasonVideo}
            />
          </div>
        </div>
        <div className="two wide column">right</div>
      </div>
      <Footer />
    </div>
  );
};

export default Videos;
