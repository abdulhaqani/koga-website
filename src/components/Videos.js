import React from 'react';
import Header from './Header';
import VideoGrid from './VideoGrid';
import Footer from './Footer';
import '../scss/video.scss';

const Videos = () => {
  const videos = [
    {
      id: 'jhbsyJChp2Y',
      label: 'Training Season - Macaronie (Live Performance)',
    },
    {
      id: '0nFFqD2e1H4',
      label:
        'Training Season - Betelgeuse (A Short Film) [Official Music Video]',
    },
    {
      id: 'gz-chKIiIhM',
      label: 'Training Season - Macaronie (Official Music Video)',
    },
    {
      id: 'g-5m5GwmgCE',
      label: 'Training Season - SI-MMXXII',
    },
    {
      id: 'nNE_vjP90_Y',
      label: 'Training Season - Gone (Official Video)',
    },
    {
      id: 'GoOp5roR-Mg',
      label: 'SON ROB - GO! (Official Music Video)',
    },
    {
      id: 'Tecvz5zw1ks',
      label: 'Greenbeardd X GREY from ZETA - KAHOOTS (Official Music Video)',
    },
    {
      id: 'R_x-u7mnKuQ',
      label: 'Training Season - BARAKU (Halloween Music Video)',
    },
    {
      id: 'kpfnOwKt7b4',
      label: 'Greenbeardd - COMEMYWAY (ft. Training Season) (Visualizer)',
    },
    {
      id: 'dwV6XXmpBIs',
      label: 'SON ROB - SUNSET DRIVE (Official Music Video)',
    },
    {
      id: 'U4lF17b94ks',
      label: 'SON ROB - TESLA! (Official Music Video)',
    },
    {
      id: 'o8fVk1UevEc',
      label: 'Greenbeardd - BENCHMARK (AMV)',
    },
    {
      id: 'Mvq5o0abVSs',
      label: 'goodwinter - no sweet talk ft. shiloh',
    },
    {
      id: 'RI_QhUIACR8',
      label: 'Son Rob - MyAdvice2U',
    },
    {
      id: 'NYymrTBoRtI',
      label: 'Nos (The Sauce Pt.1) FT. JULIO PHUCKBOY',
    },
    {
      id: 'n7pyKPByjXY',
      label: "Koga's Dojo: Queen - KillBazeJohnson // Live Performance",
    },
    {
      id: 'jb3Z-6sEBSU',
      label: 'Training Season - Unicorn (Official Lyric Video)',
    },
    {
      id: 'GNQ2RK_O9-s',
      label: 'son rob - going bad freestyle video',
    },
    {
      id: 'HCoOeTj5VI0',
      label: 'Training Season - Bassment (Official Music Video)',
    },
    {
      id: 'pTD_XHYCELk',
      label: 'Son Rob - SENZU BEAN (coffee bean remix)',
    },
    {
      id: 'Gp-0K7R8Lo8',
      label: 'Training Season - Bossmann (Official Video)',
    },
    {
      id: 'PiefD23t6ho',
      label: 'son rob - sauce ft. lil pill',
    },
    {
      id: 'Ht7LbHvrdkQ',
      label: 'training season - quaaludes ft. xuave (MV)',
    },
    {
      id: 'P6u9OhSgZxs',
      label: 'king caexar - perfect',
    },
    {
      id: '0giqkHREbZM',
      label: "son rob - f**k 'em",
    },
    {
      id: 'HMiDNGfxxuc',
      label: "koga's dojo: son rob - sparks // live performance",
    },
  ];
  return (
    <div className="video-bg">
      <Header />
      <VideoGrid videos={videos} />
      <Footer />
    </div>
  );
};

export default Videos;
