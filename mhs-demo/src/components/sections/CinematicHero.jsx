import React from 'react';
import { useLocale } from '../../hooks/useLocale';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/Video_Generation_For_MHS_Group.mp4';

const CinematicHero = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-navy flex flex-col pb-16 md:pb-0">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/30 via-brand-navy/5 to-transparent z-10 rtl:bg-gradient-to-l"></div>
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 mix-blend-overlay animate-heroZoom"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 flex-1 flex flex-col justify-center mt-20 md:mt-0">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-sand/30 bg-brand-navy/50 backdrop-blur-sm text-brand-sand text-sm font-semibold tracking-wide mb-8">
            {t.hero.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight whitespace-pre-line tracking-tight">
            {t.hero.headline}
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-0">
            <Link to="/contact" className="group flex items-center justify-center gap-2 bg-brand-emerald text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all hover:bg-white hover:text-brand-emerald cursor-pointer">
              {t.hero.cta}
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
            </Link>

            <a href="#process" className="group flex items-center justify-center gap-2 bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-sm font-semibold text-lg transition-all hover:bg-white/20">
              {t.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {/* Global Scale Bar */}
      <div className="relative z-20 w-full bg-brand-navy/20 backdrop-blur-sm border-t border-white/10 border-b-0 md:absolute md:bottom-0">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-white mb-1">{t.stats.years}</div>
            <div className="text-sm text-brand-sand font-medium uppercase tracking-wider">{t.stats.yearsLabel}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">{t.stats.countries}</div>
            <div className="text-sm text-brand-sand font-medium uppercase tracking-wider">{t.stats.countriesLabel}</div>
          </div>
          <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-white/20 md:border-s pt-6 md:pt-0 md:ps-8">
            <div className="text-3xl font-bold text-white mb-1">{t.stats.quality}</div>
            <div className="text-sm text-brand-emerald font-medium uppercase tracking-wider">{t.stats.qualityLabel}</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CinematicHero;
