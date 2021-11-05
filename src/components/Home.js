import React from 'react';
import '../scss/home.scss';
import Header from './Header';
import Footer from './Footer';

export const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <h1 className="center">Main content</h1>
      <Footer></Footer>
    </div>
  );
};

export default Home;
