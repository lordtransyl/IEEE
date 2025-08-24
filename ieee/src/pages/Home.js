import React from 'react';
import Navbar from '../components/Navbar';
import Mainpage from '../components/Mainpage';
import About from '../components/about';
import ImportantDate from '../components/ImportantDate';
import Areas from '../components/areas';
import Team from '../components/team';
import Footer from '../components/Footer';
import ContactUs from '../components/contact';
import Timeline from "../components/Timeline";

const Home = () => {
  return (
    <>
      <Navbar />
      <Mainpage />
      <About />
      <Areas />
      <ImportantDate />
      <Timeline />
      <Team />
      
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
