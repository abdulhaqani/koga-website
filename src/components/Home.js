import React from 'react';
import '../scss/home.scss';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-body-container">
        <HomeBody />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
