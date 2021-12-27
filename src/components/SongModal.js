import React, { useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import baraku from '../public/baraku.jpeg';

import '../scss/songmodal.scss';
import '../scss/default.scss';
const SongModal = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={props.ModalTrigger}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        {props.ModalTrigger}
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>Song description</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
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
