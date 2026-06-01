import React, { useMemo } from 'react';
import Bio from '../components/Bio';
import HeroSection from '../components/HeroSection';
import VlogsSection from '../components/VlogsSection';
import CatalogueSection from '../components/CatalogueSection';
import Footer from '../components/Footer';
import sectionsConfig from '../data/sections.json';
import './Home.css';

function Home() {
  const enabledSections = useMemo(() => {
    return sectionsConfig.sections
      .filter(s => s.enabled)
      .sort((a, b) => a.order - b.order);
  }, []);

  const renderSection = (section) => {
    switch (section.id) {
      case 'bio':
        return <Bio key={section.id} />;
      case 'hero':
        return <HeroSection key={section.id} />;
      case 'vlogs':
        return <VlogsSection key={section.id} title={section.title} />;
      case 'catalogue':
        return <CatalogueSection key={section.id} title={section.title} subtitle={section.subtitle} />;
      case 'footer':
        return <Footer key={section.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="home">
      {enabledSections.map(section => renderSection(section))}
    </div>
  );
}

export default Home;
