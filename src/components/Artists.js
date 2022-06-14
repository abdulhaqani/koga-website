import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
//import { Link } from 'react-router-dom';
import { Modal, Image, Button, Icon } from 'semantic-ui-react';
import { TransitionModal } from 'semantic-ui-react-transition-modal';
import antagonist from '../public/antagonist-blurred.png';
import '../scss/artists.scss';

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
            <Modal.Header>Profile Picture</Modal.Header>
            <Modal.Content image scrolling>
              <Image
                size="medium"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
                wrapped
              />

              <Modal.Description>
                <p>
                  This is an example of expanded content that will cause the
                  modal's dimmer to scroll.
                </p>

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
