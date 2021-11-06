import React from 'react';
import '../scss/home.scss';
import Header from './Header';
import Footer from './Footer';
import HomeBody from './HomeBody';

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
