import React from 'react';
import Header from './Header';
import kogaMusic from '../public/koga_music_cropped.png';
import '../scss/about.scss';
import '../scss/default.scss';

const Contact = () => {
  const artistName = 'KOGA';
  const desc1 =
    'We at Koga recognize the importance of hearing from different perspectives, and we also recognize the power of collaborative efforts.';
  const desc2 =
    'As such, we would love for you to contact us if you have any critiques, desire to connect for a collaboration, or just say hello :)';

  const contactEmail = 'Email: trainingseasonfam@gmail.com';

  return (
    <div className="about-page">
      <Header />
      <img src={kogaMusic} alt="" className="full-width" />

      <div className="row full-width about-desc-container">
        <div className="center contact-desc">{desc1}</div>
        <div className="center contact-desc">{desc2} </div>
      </div>
      <div className="row center full-width">
        <div className="full-width center contact-title">{contactEmail}</div>
      </div>
    </div>
  );
};

export default Contact;
