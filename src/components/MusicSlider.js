import React from 'react';
import Slider from 'react-slick';
import baraku from '../public/baraku.jpeg';
import antagonist from '../public/antagonist-blurred.png';
import elevatorMsc from '../public/elevator.msc.png';
import nightingale from '../public/nightingale.jpg';
import tesla from '../public/tesla.png';
import comemyway from '../public/comemyway.jpg';
import gone from '../public/gone.jpg';
import benchmark from '../public/benchmark.jpg';
import doors from '../public/Doors.png';
import echelon from '../public/Echelon.JPEG';
import go from '../public/GO.png';
import lallaby from '../public/Lallaby.JPEG';
import perpetual from '../public/perpetual.JPG';
import nangaDef from '../public/Nanga_def.png';
import sneakers from '../public/sneakers.png';
import stokeOnATuesday from '../public/stoke_on_a_tuesday.png';
import wto from '../public/W.T.O.png';
import whoAmI from '../public/who_am_i.png';
import whyWait from '../public/why_wait.png';
import '../scss/home.scss';
import '../scss/default.scss';

import SliderLink from './SliderLink';

const MusicSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <SliderLink
        image={nangaDef}
        name="nangaDef"
        link="https://song.link/ndef"
      />
      <SliderLink image={wto} name="wto" link="https://song.link/WTO" />
      <SliderLink
        image={whyWait}
        name="whyWait"
        link="https://song.link/Whywait"
      />
      <SliderLink image={doors} name="doors" link="https://song.link/doors" />
      <SliderLink
        image={perpetual}
        name="perpetual"
        link="https://song.link/perpetual"
      />
      <SliderLink
        image={lallaby}
        name="baraku"
        link="https://song.link/Lallabys"
      />
      <SliderLink
        image={whoAmI}
        name="whoAmI"
        link="https://song.link/GREENBEARDDWHOAMI"
      />
      <SliderLink
        image={stokeOnATuesday}
        name="stokeOnATuesday"
        link="https://song.link/STOKE"
      />
      <SliderLink image={gone} name="gone" link="https://song.link/QueenGone" />
      <SliderLink
        image={echelon}
        name="echelon"
        link="https://song.link/ECHELON"
      />
      <SliderLink image={go} name="go" link="https://song.link/SonRobGo" />
      <SliderLink
        image={sneakers}
        name="sneakers"
        link="https://song.link/SNEAKERS"
      />
      <SliderLink
        image={baraku}
        name="baraku"
        link="https://album.link/BARAKU"
      />
      <SliderLink
        image={comemyway}
        name="comemyway"
        link="https://song.link/C0MEWYWAY"
      />
      <SliderLink
        image={benchmark}
        name="benchmark"
        link="https://song.link/Benchmark"
      />
      <SliderLink
        image={antagonist}
        name="antagonist"
        link="https://song.link/antagonist"
      />
      <SliderLink image={tesla} name="tesla" link="https://song.link/TESLA" />
      <SliderLink
        image={elevatorMsc}
        name="elevatorMsc"
        link="https://song.link/elevator"
      />
    </Slider>
  );
};

export default MusicSlider;
