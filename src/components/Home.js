import React from 'react';
import '../scss/home.scss';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';

export const Home = () => {
  return (
    <div className="home">
      <div className="header-container">
        <Header />
      </div>
      <div className="home-body-container">
        <HomeBody />
      </div>
      <Footer bg="#232323" />
    </div>
  );
};

export default Home;
