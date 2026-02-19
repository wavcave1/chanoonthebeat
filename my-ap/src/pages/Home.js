import React from 'react';
import Bio from '../components/Bio';
import HeroSection from '../components/HeroSection';
import VlogsSection from '../components/VlogsSection';
import CatalogueSection from '../components/CatalogueSection';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Bio />
      <HeroSection />
      <VlogsSection />
      <CatalogueSection />
      <Footer />
    </div>
  );
}

export default Home;
