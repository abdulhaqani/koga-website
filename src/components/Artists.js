import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
//import { Link } from 'react-router-dom';
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
        <div className="artist center">
          <TransitionModal
            animation="scale"
            duration={300}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
              <img
                src={antagonist}
                className="artist-image modal"
                alt="antagonist"
              />
            }
          >
            <div className="artist-modal center">
              <Modal.Header></Modal.Header>

              <Modal.Content image scrolling>
                <h1 className="artist-modal-title">Training Season</h1>
                <div className="modal-header-container">
                  <Image size="large" src={antagonist} wrapped />
                </div>

                <Modal.Description>
                  <div className="artist-modal-description-container ui grid">
                    <div className="eight wide column center">
                      <h1 className="artist-modal-title">Newest release</h1>
                      <iframe
                        className="artist-embed"
                        src="https://www.youtube.com/embed/nNE_vjP90_Y"
                      />
                    </div>
                    <p className="modal-description eight wide column">
                      Training Season is an emerging Canadian alternative
                      rap/hip hop group. Members include GP, King Caexar and
                      Queenn. Training Season's music incorporates elements of
                      trap, R&B/soul, acoustic bass-lines, jazzy samples and
                      explores a variety of provocative and personal themes,
                      relating to dark romanticism, melancholy and depression.
                      Our sound is influenced by west coast, old school hip hop,
                      atl and Japanese Anime.
                    </p>
                  </div>
                  <br />
                  <br />
                </Modal.Description>
              </Modal.Content>
            </div>
          </TransitionModal>
        </div>
        <div className="artist center">
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
        <div className="artist center">
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
        <div className="artist center">
          <img src={antagonist} className="artist-image" alt="antagonist" />
        </div>
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
