import React from 'react';
import Navbar from '../components/Navbar';
import Mainpage from '../components/Mainpage';
import About from '../components/about';
import Callforpaper from '../components/callforpaper';
import Abstract from '../components/abstract';
import Schedule from '../components/schedule';
import Team from '../components/team';

const Home = () => {
  return (
    <>
      <Navbar />
      <Mainpage />
      <About />
      <Callforpaper />
      <Abstract />
      <Schedule />
      <Team />
    </>
  );
};

export default Home;
