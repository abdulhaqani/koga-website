import React from "react";
import "../scss/home.scss";
import "../scss/default.scss";
import baraku from "../public/baraku.jpeg";
import antagonist from "../public/antagonist-blurred.png";
import elevatorMsc from "../public/elevator.msc.png";
import nightingale from "../public/nightingale.jpg";
import tesla from "../public/tesla.png";
import Lman from "../public/Lman.jpg";
import misadv from "../public/misadv.jpg";
import comemyway from "../public/comemyway.jpg";
import benchmark from "../public/benchmark.jpg";
import HomeMusic from "./HomeMusic";
import MusicSlider from "./MusicSlider";
import SongModal from "./SongModal";

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
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={baraku}
              SongLink="https://open.spotify.com/track/2PWGTh2fAqaIXeu6maMq8s?si=4511af2174d84188"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={antagonist}
              SongLink="https://open.spotify.com/track/0VDpB5eaIRcwehxljFR882?si=3d922911a22841fc"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={elevatorMsc}
              SongLink="https://open.spotify.com/track/6TXDvYkGSvMLRKtAm8qFgD?si=0e07347d70744d56"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={benchmark}
              SongLink="https://open.spotify.com/track/0Lc4R9b0AZFSYafNwm0As7?si=22d6c997779d4578"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={comemyway}
              SongLink="https://open.spotify.com/track/2zPEqch058WqgylDBwfj5p?si=31e488c2e1b347f7"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={tesla}
              SongLink="https://open.spotify.com/track/0rOaZsCdEmPzdXDmyNfENI?si=d71291c31de44522"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={nightingale}
              SongLink="https://open.spotify.com/track/0qCKgI1nQFAeFne0CtXdoN?si=de3a8f6d150f4a97"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={misadv}
              SongLink="https://open.spotify.com/album/2MB4yaCKAmImF7UzdcUM9O?si=212OEehBSB-cIbDo5JWw5A"
            />
          </div>
          <div className="ui five wide column upcoming-grid">
            <HomeMusic
              ImageName={Lman}
              SongLink="https://open.spotify.com/album/5vlIHAnKxJhAbNWFHU3o0V?si=QZH76oS0T-iqYzFivMQVpw"
            />
          </div>
          <div className="ui sixteen wide column"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
