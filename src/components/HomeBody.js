import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import baraku from '../public/baraku.jpeg';
import antagonist from '../public/antagonist-blurred.png';
import elevatorMsc from '../public/elevator.msc.png';
import nightingale from '../public/nightingale.jpg';
import tesla from '../public/tesla.png';
import Lman from '../public/Lman.jpg';
import misadv from '../public/misadv.jpg';
import comemyway from '../public/comemyway.jpg';
import benchmark from '../public/benchmark.jpg';
import HomeMusic from './HomeMusic';
import MusicSlider from './MusicSlider';
import SongModal from './SongModal';

const HomeBody = () => {
  return (
    <div className="home-image-container">
      <div className="ui raised fluid card">
        <MusicSlider />
      </div>
      <SongModal />
      <div className="grid-container">
        <div className="playlist">
          <div className="ui raised fluid card playlist-card">
            <iframe
              src="https://open.spotify.com/embed/playlist/1H7VjWekFdAanBNTdRnsEl?utm_source=generator"
              width="100%"
              height="100%"
              frameBorder="1"
              allowfullscreen="1"
              allowtransparency="true"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="spotify-link"
            ></iframe>
          </div>
        </div>
        <div className="ui four row grid track-component-grid">
          <div className="ui five wide column">
            <HomeMusic
              ImageName={baraku}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={antagonist}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={elevatorMsc}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={benchmark}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={comemyway}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={tesla}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={nightingale}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={misadv}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column">
            <HomeMusic
              ImageName={Lman}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui sixteen wide column"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
