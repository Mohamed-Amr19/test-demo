import React from 'react';
import ProductBento from '../components/sections/ProductBento';
import CTASection from '../components/sections/CTASection';
import { useLocale } from '../hooks/useLocale';

const ProductsPage = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-brand-cloud">
      <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,195,157,0.18),transparent_30%),linear-gradient(140deg,rgba(8,23,36,1),rgba(8,23,36,0.82)_56%,rgba(15,76,58,0.46))]" />
        <div className="section-shell relative z-10">
          <div className="eyebrow mb-4 text-brand-sand">{t.products.overviewTitle}</div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] md:text-6xl">
            {t.products.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/72">{t.products.overviewText}</p>
        </div>
      </section>

      <ProductBento />
      <CTASection />
    </div>
  );
};

export default ProductsPage;
