import React from 'react';
import '../scss/home.scss';
import '../scss/default.scss';
import Fade from 'react-reveal/Fade';
import baraku from '../public/baraku.jpeg';
import antagonist from '../public/antagonist-blurred.png';
import elevatorMsc from '../public/elevator.msc.png';
import nightingale from '../public/nightingale.jpg';
import tesla from '../public/tesla.png';
import Lman from '../public/Lman.jpg';
import misadv from '../public/misadv.jpg';
import comemyway from '../public/comemyway.jpg';
import gone from '../public/gone.jpg';
import benchmark from '../public/benchmark.jpg';
import HomeMusic from './HomeMusic';
import MusicSlider from './MusicSlider';
import SongModal from './SongModal';
import doors from '../public/Doors.png';
import echelon from '../public/Echelon.JPEG';
import go from '../public/GO.png';
import lallaby from '../public/Lallaby.JPEG';
import nangaDef from '../public/Nanga_def.png';
import sneakers from '../public/sneakers.png';
import oak from '../public/Oak.PNG';
import stokeOnATuesday from '../public/stoke_on_a_tuesday.png';
import wto from '../public/W.T.O.png';
import perpetual from '../public/perpetual.JPG';
import whoAmI from '../public/who_am_i.png';
import whyWait from '../public/why_wait.png';
import {
  wtoDesc,
  nangaDefDesc,
  whoAmIDesc,
  whyWaitDesc,
  perpetualDesc,
  lallabyDesc,
  goneDesc,
  sneakersDesc,
  stokeDesc,
  doorsDesc,
  goDesc,
  elevatorDesc,
  echelonDesc,
  antagonistDesc,
  benchmarkDesc,
  comeMyWayDesc,
  barakuDesc,
  teslaDesc,
  misadvDesc,
  lManDesc,
  oakDesc,
} from '../public/constants';

const HomeBody = () => {
  return (
    <div className="home-image-container">
      <Fade delay={250}>
        <div className="ui raised fluid card">
          <MusicSlider />
        </div>
      </Fade>
      <SongModal />
      <Fade>
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
                ImageName={wto}
                SongLink="https://song.link/WTO"
                SongDescription={wtoDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={nangaDef}
                SongLink="https://song.link/ndef"
                SongDescription={nangaDefDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={whoAmI}
                SongLink="https://song.link/GREENBEARDDWHOAMI"
                SongDescription={whoAmIDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={whyWait}
                SongLink="https://song.link/Whywait"
                SongDescription={whyWaitDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={perpetual}
                SongLink="https://song.link/perpetual"
                SongDescription={perpetualDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={lallaby}
                SongLink="https://song.link/Lallabys"
                SongDescription={lallabyDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={gone}
                SongLink="https://song.link/QueenGone"
                SongDescription={goneDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={sneakers}
                SongLink="https://song.link/SNEAKERS"
                SongDescription={sneakersDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={stokeOnATuesday}
                SongLink="https://song.link/STOKE"
                SongDescription={stokeDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={doors}
                SongLink="https://song.link/doors"
                SongDescription={doorsDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={go}
                SongLink="https://song.link/SonRobGo"
                SongDescription={goDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={echelon}
                SongLink="https://song.link/ECHELON"
                SongDescription={echelonDesc}
              />
            </div>

            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={antagonist}
                SongLink="https://song.link/antagonist"
                SongDescription={antagonistDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={elevatorMsc}
                SongLink="https://song.link/elevator"
                SongDescription={elevatorDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={benchmark}
                SongLink="https://song.link/Benchmark"
                SongDescription={benchmarkDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={comemyway}
                SongLink="https://song.link/C0MEWYWAY"
                SongDescription={comeMyWayDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={baraku}
                SongLink="https://album.link/baraku"
                SongDescription={barakuDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={tesla}
                SongLink="https://song.link/TESLA"
                SongDescription={teslaDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={misadv}
                SongLink="https://open.spotify.com/album/2MB4yaCKAmImF7UzdcUM9O?si=212OEehBSB-cIbDo5JWw5A"
                SongDescription={misadvDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={Lman}
                SongLink="https://open.spotify.com/album/5vlIHAnKxJhAbNWFHU3o0V?si=QZH76oS0T-iqYzFivMQVpw"
                SongDescription={lManDesc}
              />
            </div>
            <div className="ui five wide column upcoming-grid">
              <HomeMusic
                ImageName={oak}
                SongLink="https://soundcloud.com/trainingseason/sets/oak-by-training-season"
                SongDescription={oakDesc}
              />
            </div>
            <div className="ui sixteen wide column"></div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HomeBody;
