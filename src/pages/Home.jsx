import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Agenda from '../components/Agenda';
import Schedule from '../components/Schedule';
import Venue from '../components/Venue';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Schedule />
      <Agenda />
      <Venue />
      <Sponsors />
      <FAQ />
    </div>
  );
};

export default Home;
