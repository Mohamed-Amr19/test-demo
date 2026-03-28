import React from 'react';
import CinematicHero from '../components/sections/CinematicHero';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import ProductBento from '../components/sections/ProductBento';
import GlobalFootprint from '../components/sections/GlobalFootprint';
import CTASection from '../components/sections/CTASection';
import { useLocale } from '../hooks/useLocale';

const HomePage = () => {
  return (
    <div className="bg-brand-cloud">
      <CinematicHero />
      <ProcessTimeline />
      <section className="py-24 max-w-7xl mx-auto px-6">
        <GlobalFootprint />
      </section>
      <ProductBento />
      <CTASection />
    </div>
  );
};
export default HomePage;
