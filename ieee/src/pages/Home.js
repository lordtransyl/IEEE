import React from 'react';
import Navbar from '../components/Navbar';
import Mainpage from '../components/Mainpage';
import about from '../components/about';
import callforpaper from '../components/callforpaper';
import abstract from '../components/abstract';
import schedule from '../components/schedule';
import team from '../components/team';

const Home = () => {
  return (
    <>
      <Navbar />
      <Mainpage />
      <about />
      <callforpaper />
      <abstract />
      <schedule/>
      <team/>
    </>
  );
};

export default Home;
