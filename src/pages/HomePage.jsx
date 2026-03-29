import React from 'react';
import CinematicHero from '../components/sections/CinematicHero';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import ProductBento from '../components/sections/ProductBento';
import GlobalFootprint from '../components/sections/GlobalFootprint';
import CTASection from '../components/sections/CTASection';

const HomePage = () => {
  return (
    <div className="bg-brand-cloud">
      <CinematicHero />
      <ProcessTimeline />
      <div className="section-shell pb-24 md:pb-32">
        <GlobalFootprint />
      </div>
      <ProductBento />
      <CTASection />
    </div>
  );
};

export default HomePage;
