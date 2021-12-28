import React from 'react';
import { Image } from 'semantic-ui-react';
import '../scss/home.scss';
import '../scss/default.scss';
import baraku from '../public/baraku.jpeg';
import SongModal from './SongModal';

const HomeMusic = (props) => {
  return (
    <div>
      <div className="upcoming-tracks">
        <div className="ui raised fluid card center upcoming-card">
          <SongModal
            ModalTrigger={
              <Image
                src={props.ImageName}
                alt="upcoming"
                className="upcoming-release"
              />
            }
            ImageName={props.ImageName}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMusic;
