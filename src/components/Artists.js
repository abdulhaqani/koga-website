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
            <div className="artistModal center">
              <Modal.Header>
                <h1 className="modalDescTitle">Profile Picture</h1>
              </Modal.Header>
              <Modal.Content image scrolling>
                <Image
                  size="medium"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                  wrapped
                />

                <Modal.Description>
                  <div className="modalDescContainer">
                    <p className="modalDescription">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>

                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/paragraph.png"
                    style={{ marginBottom: 10 }}
                  />
                  <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen(false)} primary>
                  Proceed <Icon name="chevron right" />
                </Button>
              </Modal.Actions>
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

export default Artists;
