import React from 'react';
import { Image } from 'semantic-ui-react';
import '../scss/home.scss';
import '../scss/default.scss';
import SongModal from './SongModal';

const HomeMusic = (props) => {
  const { ImageName, SongLink, SongDescription } = props;
  return (
    <div>
      <div className="upcoming-tracks">
        <div className="ui raised fluid card center upcoming-card">
          <SongModal
            ModalTrigger={
              <Image
                src={ImageName}
                alt="upcoming"
                className="upcoming-release"
              />
            }
            ImageName={ImageName}
            SongLink={SongLink}
            SongDescription={SongDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeMusic;
