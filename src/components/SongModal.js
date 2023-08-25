import React, { useState } from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';

import '../scss/songmodal.scss';
import '../scss/default.scss';
import '../scss/artists.scss';

const SongModal = (props) => {
  const openSongLink = () => {
    window.open(SongLink, '_blank'); // Open the link in a new tab/window
    setOpen(false); // Close the modal
  };

  const [open, setOpen] = useState(false);

  const { ModalTrigger, ImageName, SongDescription, SongLink } = props;

  let lines = [];
  if (SongDescription && typeof SongDescription === 'string') {
    lines = SongDescription.split('\n');
  }
  return (
    <Modal
      dimmer="blurring"
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={ModalTrigger}
    >
      <Modal.Content
        className="scrolling content dark-theme-bg"
        style={{ background: '#121212', color: '#dddddd', padding: '0%' }}
      >
        <div className="modal-image-container">
          <a href={SongLink} target="_blank" rel="noopener noreferrer">
            <Image src={ImageName} alt="modal-image" className="modal-image" />
          </a>
        </div>

        <Modal.Description>
          <p className="song-desc">
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ 'background-color': '#121212' }}>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button color="green" onClick={openSongLink}>
          Listen to Song
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SongModal;
