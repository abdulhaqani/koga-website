import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ArtistModal from './ArtistModal';
import { Modal, Image, Button, Icon } from 'semantic-ui-react';
import { TransitionModal } from 'semantic-ui-react-transition-modal';
import antagonist from '../public/antagonist-blurred.png';
import '../scss/artists.scss';
import '../scss/default.scss';

const Artists = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="artists-wrap">
      <div className="navbar">
        <Header />
      </div>
      <div className="artists">
        <ArtistModal />
        <ArtistModal />
        <ArtistModal />
        <ArtistModal />
      </div>
      <Footer />
    </div>
  );
};
/*
<Modal.Actions>
<Button onClick={() => setOpen(false)} primary>
Proceed <Icon name="chevron right" />
</Button>
</Modal.Actions>
*/

export default Artists;
