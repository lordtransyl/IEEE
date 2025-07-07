import React from 'react';
import Navbar from '../components/Navbar';
import Mainpage from '../components/Mainpage';
import About from '../components/about';
import ImportantDate from '../components/ImportantDate';
import Areas from '../components/areas';
import Team from '../components/team';
import Footer from '../components/Footer';
import ContactUs from '../components/contact';

const Home = () => {
  return (
    <>
      <Navbar />
      <Mainpage />
      <About />
      <Areas />
      <ImportantDate />
      <Team />
      
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
