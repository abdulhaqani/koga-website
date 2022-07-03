import React, { useState } from 'react';

import { Modal, Image, Button, Icon } from 'semantic-ui-react';
import { TransitionModal } from 'semantic-ui-react-transition-modal';
import '../scss/artists.scss';
import '../scss/default.scss';
const ArtistModal = (props) => {
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
            src={props.ArtistImage}
            className="artist-image modal"
            alt="antagonist"
          />
        }
      >
        <div className="artist-modal center">
          <Modal.Header></Modal.Header>

          <Modal.Content image scrolling>
            <h1 className="artist-modal-title">{props.ArtistName}</h1>
            <div className="modal-header-container">
              <Image size="large" src={props.ArtistImage} wrapped />
            </div>

            <Modal.Description>
              <div className="artist-modal-description-container ui grid">
                <div className="one wide column"></div>
                <div className="five wide column center">
                  <div className="video-container">
                    <h3 className="artist-modal-video-title">Newest release</h3>
                    <iframe className="artist-embed" src={props.ArtistVideo} />
                  </div>
                </div>
                <div className="one wide column"></div>
                <p className="modal-description nine wide column">
                  {props.ArtistDescription}
                </p>
                <div></div>
              </div>
            </Modal.Description>
          </Modal.Content>
        </div>
      </TransitionModal>
    </div>
  );
};

export default ArtistModal;
