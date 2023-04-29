import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// react components
import Home from './components/Home';
import About from './components/About.js';
import Artists from './components/Artists';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Merch from './components/Merch.js';
import Artist from './components/Artist';
// scss

const App = () => {
  const trainingSeasonName = 'Training Season';
  const trainingSeasonDescription =
    "Training Season is an emerging Canadian alternative rap/hip  hop group. Members include GP, King Caexar and Queenn.  Training Season's music incorporates elements of trap,  R&B/soul, acoustic bass-lines, jazzy samples, rock and explores a  variety of provocative and personal themes, relating to dark  romanticism, melancholy and depression. Their sound is  influenced by west coast, old school hip hop, atl and Japanese  Anime.";

  const trainingSeasonDescription2 =
    "Each of the 3 artists bring their own unique sounds to the table, with King Caexar specializing in lyrical boom bap, funky trap, varied beat production and DOOM inspired lyricism. GP on the other hand specializes in a more funcy style of indie hip hop, soft rock, and at times harnessing his alter ego 'tempest' to demonstrate his own lyrical skills. Meanwhile Queen brings the whole group together which her powerful voice and hypnotic R&B vocals, while also contributing a unique flair in her hip hop verses";

  const trainingSeasonDescription3 =
    "Training season has multiple projects ranging from their debut mixtape 'Oak', to their thought provoking album 'Caexar saga: LMan', coupled with numerous singles, featured works and unique productions, all of which provide a different avenue to peer into the creative minds behind Training Season. Stay tuned for more :)";

  const trainingSeasonQuote =
    "Broke tryna fix pecuniary debt; \
There's no hope with income thinner than my silhouette; \n\
Alone at night I swear to god; \
Vituperate a sinners life that's cursed, destined for hara-kiri death";
  const trainingSeasonVideo = 'https://www.youtube.com/embed/nNE_vjP90_Y';

  const trainingSeasonspotify = '';
  const trainingSeasonIg = '';
  const trainingSeasonFb = '';

  const sonRobName = 'Son Rob';
  const sonRobDescription1 =
    'Navigating through an ever changing hip-hop soundscape, Son Rob is an artist who isn’t afraid to bend the rules when it comes to what a traditional rapper should be. He prides himself on his versatility and his ability to seamlessly adapt to any sound put in front of him but seems to never lose his way because of his solid lyrical foundation.';

  const sonRobDescription2 =
    'Son Rob put out "F*ck \'Em", his debut single in late 2017. Since his debut, He has released “Sacrifices” (2018), his first collaboration, with Montreal artist, MOBILE PRO. He then released “17” (2018), a track that allowed him to make his first appearance on a major radio station in the UK, The Pit LDN. He ended his 2018 run with “Sparks”. He picked right back up where he left off in 2019 with “Sauce” and followed up with “Damn”, the first track from his collaborative debut with, Greenbeardd. He also featured on “Soulmates” (2019) alongside Training Season’s Queenn. \n\n';

  const sonRobDescription3 =
    'In October 2019, Son Rob released “The Misadventures of Son Rob and Greenbeardd. This release would come to be the most important for Son Rob in his young career. The album would be a springboard allowing him to appear on CKCU FM, a popular local radio station in his hometown of Ottawa. It would also help him garner social media attention, which allowed him the chance to appear on Canadian publications Locals Only and Small World Live. Since his debut project, he’s appeared on posse cut, Bonfire (2020) and featured on New York artist Wavele$$’ Anti-Gravity Album (2021).';

  const sonRobQuote =
    "With the, chronic always stalling me... nah 'cause Tempest offered it; \
It's Honey berry Only bitch , no swisher I been coughing up; \
It's Koga Klan 'cross the epidermis until the coffin shut; \
Running rampant until the piggies start the locking up";
  const sonRobVideo = 'https://www.youtube.com/embed/GoOp5roR-Mg';

  const greenbearddName = 'Greenbeardd';
  const greenbearddDescription =
    'Greenbeardd is an up and coming hip-hop artist from Ottawa, Canada. He is part of the rap collective known as ‘Koga’. The young rapper, known for his distinct ability to blend catchy melodies with hardcore lyricism inspired by 90s boom bap.';

  const greenbearddDescription2 =
    'Greenbeardd also has a distinct interest in alternative forms of music ranging from 2000s rock, trap, 90s R&B, and Lo-Fi. His music range is evident when looking at his discography, where it ranges from the melodic "ComeMyWay", to the hard hitting "Benchmark", to his MF DOOM inspired "MF BEARD", or even the complex trap-synth production "W.T.O".';

  const greenbearddDescription3 =
    'Greenbeardd is closely linked with label mates Son Rob & Training Season. Greenbeardd especially draws influence from many new age lyricists such as MF DOOM and Joey Bada$$, yet he makes it a point not to be put into a confined grouping as a pure boom bap artist. Ultimately, music is the best avenue for him to express himself and it shows.';

  const greenBearddQuote =
    "I feel like I'm the greatest, no discussion debate I'm the greatest, confidence is oozing man it feels to good to be shameless. evading my space I'm telling you it's good to be famous. A lyrical genius that's reeling you in my contagious. Unveiling my feeling I'm dealing I'm hitting my ceiling. Jealousy spewing I'm assuming its my latest of statements.";
  const greenbearddVideo = 'https://www.youtube.com/embed/kpfnOwKt7b4';

  const goodWinterName = 'GoodxWinter';
  const goodWinterDescription =
    'GoodxWinter is producer who takes strong inspiration influential producers like Nujabes, J Dilla, and Shiloh Dynasty. While GoodxWinter may prefer retaining his anonimity, he still tries to communicate to his fans through his productions.';

  const goodWinterDescription2 =
    'GoodxWinter is also involved with a previous koga partner, the fashion brand in "Hikikmori Race Club", where you can expect further direct collaborations with Koga in the future';
  const goodWinterVideo = 'https://www.youtube.com/embed/Mvq5o0abVSs';
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route exact path="/artists" element={<Artists />} />
          <Route
            exact
            path="/artists/TrainingSeason"
            element={
              <Artist
                artistName={trainingSeasonName}
                description={trainingSeasonDescription}
                description2={trainingSeasonDescription2}
                description3={trainingSeasonDescription3}
                quote={trainingSeasonQuote}
                video={trainingSeasonVideo}
              />
            }
          />

          <Route
            exact
            path="/artists/TrainingSeason/KingCaexar"
            element={
              <Artist
                artistName={trainingSeasonName}
                description={trainingSeasonDescription}
                description2={trainingSeasonDescription2}
                description3={trainingSeasonDescription3}
                quote={trainingSeasonQuote}
                video={trainingSeasonVideo}
              />
            }
          />

          <Route
            exact
            path="/artists/TrainingSeason/GP"
            element={
              <Artist
                artistName={trainingSeasonName}
                description={trainingSeasonDescription}
                description2={trainingSeasonDescription2}
                description3={trainingSeasonDescription3}
                quote={trainingSeasonQuote}
                video={trainingSeasonVideo}
              />
            }
          />

          <Route
            exact
            path="/artists/TrainingSeason/Queenn"
            element={
              <Artist
                artistName={trainingSeasonName}
                description={trainingSeasonDescription}
                description2={trainingSeasonDescription2}
                description3={trainingSeasonDescription3}
                quote={trainingSeasonQuote}
                video={trainingSeasonVideo}
              />
            }
          />
          <Route
            exact
            path="/artists/Greenbeardd"
            element={
              <Artist
                artistName={greenbearddName}
                description={greenbearddDescription}
                description2={greenbearddDescription2}
                description3={greenbearddDescription3}
                quote={greenBearddQuote}
                video={greenbearddVideo}
              />
            }
          />
          <Route
            exact
            path="/artists/SonRob"
            element={
              <Artist
                artistName={sonRobName}
                description={sonRobDescription1}
                description2={sonRobDescription2}
                description3={sonRobDescription3}
                quote={sonRobQuote}
                video={sonRobVideo}
              />
            }
          />
          <Route
            exact
            path="/artists/GoodxWinter"
            element={
              <Artist
                artistName={goodWinterName}
                description={goodWinterDescription}
                description2={goodWinterDescription2}
                video={goodWinterVideo}
              />
            }
          />
          <Route exact path="/merch" element={<Merch />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
