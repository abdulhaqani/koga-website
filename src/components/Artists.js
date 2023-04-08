import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArtistModal from './ArtistModal';
import antagonist from '../public/antagonist-blurred.png';
import comeMyWay from '../public/comemyway.jpg';
import tesla from '../public/tesla.png';
import elevator from '../public/elevator.msc.png';
import '../scss/artists.scss';
import '../scss/default.scss';

const Artists = () => {
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
    <div className="artists-wrap">
      <Header />
      <div className="artists">
        <ArtistModal
          ArtistName={trainingSeasonName}
          ArtistImage={antagonist}
          ArtistDescription={trainingSeasonDescription}
          ArtistVideo={trainingSeasonVideo}
        />
        <ArtistModal
          ArtistName={sonRobName}
          ArtistImage={tesla}
          ArtistDescription={sonRobDescription}
          ArtistVideo={sonRobVideo}
        />
        <ArtistModal
          ArtistName={greenbearddName}
          ArtistImage={comeMyWay}
          ArtistDescription={greenbearddDescription}
          ArtistVideo={greenbearddVideo}
        />
        <ArtistModal
          ArtistName={goodWinterName}
          ArtistImage={elevator}
          ArtistDescription={goodWinterDescription}
          ArtistVideo={goodWinterVideo}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
