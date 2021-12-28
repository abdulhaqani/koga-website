import React, { useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import baraku from '../public/baraku.jpeg';

import '../scss/songmodal.scss';
import '../scss/default.scss';
const SongModal = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      dimmer="blurring"
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.ModalTrigger}
    >
      <Modal.Content
        className="scrolling content dark-theme-bg"
        style={{ background: '#121212', color: '#dddddd' }}
      >
        <Image
          src={props.ImageName}
          alt="modal-image"
          className="modal-image"
        />
        <Modal.Description>
          <h2 className="center">Song description</h2>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions style={{ 'background-color': '#121212' }}>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          Listen to Song
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default SongModal;
