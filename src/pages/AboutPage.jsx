import React from 'react';
import { useLocale } from '../hooks/useLocale';
import GlobalFootprint from '../components/sections/GlobalFootprint';
import CTASection from '../components/sections/CTASection';

const AboutPage = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen bg-brand-cloud">
      <section className="relative overflow-hidden bg-brand-navy pb-20 pt-32 text-white md:pt-40 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,195,157,0.16),transparent_28%),linear-gradient(120deg,rgba(8,23,36,0.98),rgba(8,23,36,0.84)_48%,rgba(15,76,58,0.34))]" />
        <div className="section-shell relative z-10">
          <div className="eyebrow mb-4 text-brand-sand">{t.nav.about}</div>
          <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.96] tracking-[-0.05em] md:text-6xl">
            {t.about.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/72">{t.about.heroSubtitle}</p>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-brand-navy/10 pb-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <div className="eyebrow mb-3">{t.about.missionTitle}</div>
            <p className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-navy md:text-4xl">
              {t.about.missionText}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.about.stats.map((stat) => (
              <div key={stat.label} className="border border-brand-navy/10 bg-white/75 px-5 py-6">
                <div className="text-4xl font-extrabold tracking-[-0.05em] text-brand-emerald" dir="ltr">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink/68">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-shell pb-16 md:pb-20">
        <GlobalFootprint />
      </div>

      <section className="bg-white py-20 md:py-24">
        <div className="section-shell grid gap-10 md:grid-cols-3">
          {t.about.values.map((value) => (
            <div key={value.title} className="border-t border-brand-navy/12 pt-6">
              <div className="eyebrow mb-3">{value.title}</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default AboutPage;
