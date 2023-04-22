import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArtistSlider from './ArtistSlider';
import '../scss/about.scss';
const About = () => {
  const artistName = 'KOGA';
  const desc1 =
    'Koga, is an emerging Canadian hip hop collective, originating from Ottawa.';
  const desc2 =
    'Koga features a diverse roster with unique and multi talented individuals including collaborative acts like Training Season, Son Rob, Greenbeardd, Goodwinter & Bizzaro.';
  const desc3 =
    'The group draws inspiration from their love of all things culture,from music & anime to film & fashion. Our artists come from very diverse backgrounds with unique & personal experiences that are often reflected in their works.';
  const desc4 =
    "Koga studios takes pride in our artists' ability to create trendy music however; full pieces are delivered. Every track is more than a track and it connects every character, alter ego, occurrence and every song together has a larger, inter-connected story.";
  const desc5 =
    "We want to create a world that is limitless and doesn't box us into any category. The purpose of our ‘music’ is to really push the boundaries we presently use to define it and to leave a lasting impression on art and culture.";
  const desc6 =
    'Advancing the art form is paramount to us. We want to push what has been done even further than anyone else. The world is in dire need of truth right now and there is nothing truer than the pursuit of what is meaningful. Music isn’t just sound, but a vehicle for our lived experiences, our pain, our joy, our humanity';

  const welcome = 'Welcome to the Koga Universe.';

  return (
    <div className="about-page">
      <Header />
      <div className="ui grid about-grid">
        <div className="row center full-width">
          <div className="full-width center about-title">{welcome}</div>
        </div>
        <div className="row">
          <div className="full-width center about-desc">
            {desc1} {desc2} {desc3} {desc4} {desc5} {desc6}
          </div>
        </div>
        <div className="about-container">
          <h1 className="about-title center"></h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
