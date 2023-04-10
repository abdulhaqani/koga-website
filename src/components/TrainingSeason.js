import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArtistSlider from './ArtistSlider';
import '../scss/about.scss';
const TrainingSeason = () => {
  const trainingSeasonName = 'Training Season';
  const trainingSeasonDescription =
    "Training Season is an emerging Canadian alternative rap/hip  hop group. Members include GP, King Caexar and Queenn.  Training Season's music incorporates elements of trap,  R&B/soul, acoustic bass-lines, jazzy samples and explores a  variety of provocative and personal themes, relating to dark  romanticism, melancholy and depression. Our sound is  influenced by west coast, old school hip hop, atl and Japanese  Anime.";
  const trainingSeasonVideo = 'https://www.youtube.com/embed/nNE_vjP90_Y';

  const sonRobName = 'Son Rob';
  const sonRobDescription =
    'Navigating through an ever changing hip-hop soundscape, Son Rob is an artist who isn’t afraid to bend the rules when it comes to what a traditional rapper should be. He prides himself on his versatility and his ability to seamlessly adapt to any sound put in front of him but seems to never lose his way because of his solid lyrical foundation. Son Rob put out "F*ck \'Em", his debut single in late 2017. Since his debut, He has released “Sacrifices” (2018), his first collaboration, with Montreal artist, MOBILE PRO. He then released “17” (2018), a track that allowed him to make his first appearance on a major radio station in the UK, The Pit LDN. He ended his 2018 run with “Sparks”. He picked right back up where he left off in 2019 with “Sauce” and followed up with “Damn”, the first track from his collaborative debut with, Greenbeardd. He also featured on “Soulmates” (2019) alongside Training Season’s Queenn. \n\nIn October 2019, Son Rob released “The Misadventures of Son Rob and Greenbeardd. This release would come to be the most important for Son Rob in his young career. The album would be a springboard allowing him to appear on CKCU FM, a popular local radio station in his hometown of Ottawa. It would also help him garner social media attention, which allowed him the chance to appear on Canadian publications Locals Only and Small World Live. Since his debut project, he’s appeared on posse cut, Bonfire (2020) and featured on New York artist Wavele$$’ Anti-Gravity Album (2021).';
  const sonRobVideo = 'https://www.youtube.com/embed/GoOp5roR-Mg';

  const greenbearddName = 'Greenbeardd';
  const greenbearddDescription =
    'Greenbeardd is an up and coming hip-hop artist from Ottawa, Canada. He is part of the rap collective known as ‘Koga’. The young rapper, known for his distinct ability to blend catchy melodies with hardcore lyricism inspired by 90s boom bap, is closely associated with label mates Son Rob & Training Season. Greenbeardd draws influence from many new age lyricists such as MF DOOM and Joey Bada$$.';
  const greenbearddVideo = 'https://www.youtube.com/embed/kpfnOwKt7b4';

  const goodWinterName = 'Good Winter';
  const goodWinterDescription = 'Good winter description';
  const goodWinterVideo = 'https://www.youtube.com/embed/Mvq5o0abVSs';
  return (
    <div className="about-page">
      <Header />
      <div className="ui grid about-grid">
        <div className="about-container">
          <ArtistSlider />
        </div>
        <div className="about-container">
          <h1 className="about-title center">KOGA</h1>
          <p className="about-desc center">
            Koga, is an emerging Canadian hip hop collective, originating from
            Ottawa.
          </p>
          <p className="about-desc center">
            Koga features a diverse roster with unique and multi talented
            individuals including collaborative acts like Training Season, Son
            Rob, Greenbeardd, Goodwinter & Bizzaro.
          </p>
          <p className="about-desc center">
            The group draws inspiration from their love of all things culture,
            from music & anime to film & fashion. Our artists come from very
            diverse backgrounds with unique & personal experiences that are
            often reflected in their works.
          </p>
          <p className="about-desc center">
            Koga studios takes pride in our artists' ability to create trendy
            music however; full pieces are delivered. Every track is more than a
            track and it connects every character, alter ego, occurrence and
            every song together has a larger, inter-connected story.
          </p>
          <div className="quote">
            <p className="about-desc-quote center">
              “We want to create a world that is limitless and doesn't box us
              into any category. The purpose of our ‘music’ is to really push
              the boundaries we presently use to define it and to leave a
              lasting impression on art and culture.”
            </p>
          </div>

          <div className="quote">
            <p className="about-desc-quote center">
              “Advancing the art form is paramount to us. We want to push what
              has been done even further than anyone else. The world is in dire
              need of truth right now and there is nothing truer than the
              pursuit of what is meaningful. Music isn’t just sound, but a
              vehicle for our lived experiences, our pain, our joy, our
              humanity”
            </p>
          </div>
          <p className="about-desc center">Welcome to the Koga Universe.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainingSeason;
