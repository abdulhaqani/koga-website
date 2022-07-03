import React, { useState } from 'react';

import { Modal, Image, Button, Icon } from 'semantic-ui-react';
import { TransitionModal } from 'semantic-ui-react-transition-modal';
import '../scss/artists.scss';
import '../scss/default.scss';

const VideoModal = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="artist center">
      <TransitionModal
        animation="scale"
        duration={300}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <img
            src={props.SongImage}
            className="video-image modal"
            alt="antagonist"
          />
        }
      >
        <div className="artist-modal center">
          <Modal.Header></Modal.Header>
          <Modal.Content image scrolling>
            <h1 className="artist-modal-title">{props.SongTitle}</h1>
            <div className="modal-header-container">
              <div className="one wide column"></div>
              <div className="fourteen wide column center">
                <div className="video-container">
                  <iframe className="video-embed" src={props.SongVideo} />
                </div>
              </div>
              <div className="one wide column"></div>
            </div>
          </Modal.Content>
        </div>
      </TransitionModal>
    </div>
  );
};

export default VideoModal;
