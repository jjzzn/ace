import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Agenda from '../components/Agenda';
import Schedule from '../components/Schedule';
import Venue from '../components/Venue';
import Sponsors from '../components/Sponsors';
import FAQ from '../components/FAQ';

const Home = () => {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <Banner />
      <About />
      <Schedule />
      <Agenda />
      <Venue />
      {/* <Sponsors /> */}
      <FAQ />
    </div>
  );
};

export default Home;
