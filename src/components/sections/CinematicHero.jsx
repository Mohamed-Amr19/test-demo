import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import heroVideo from '../../assets/Video_Generation_For_MHS_Group.mp4';

const heroTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const CinematicHero = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,195,157,0.16),transparent_28%),linear-gradient(110deg,rgba(8,23,36,0.96),rgba(8,23,36,0.78)_46%,rgba(8,23,36,0.48))] z-10" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-brand-navy/2 to-transparent lg:block z-10" />
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-55 mix-blend-screen animate-heroZoom"
        />
      </div>

      <div className="relative z-20 flex min-h-[100svh] flex-col pt-28">
        <div className="section-shell flex flex-1 items-center pb-22 md:pb-28">
          <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,360px)] lg:items-end">
            <div className="max-w-4xl">
              <Motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition}
                className="mb-6"
              >
                <div className="eyebrow mb-4 text-brand-sand">{t.hero.badge}</div>
                <div className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.38em] text-white/56">
                  {t.hero.brand}
                </div>
                <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl xl:text-[5.6rem]">
                  {t.hero.headline}
                </h1>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.18 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-navy transition-all hover:bg-brand-sand"
                >
                  {t.hero.cta}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm transition-colors hover:bg-white/12"
                >
                  {t.hero.secondaryCta}
                </a>
              </Motion.div>
            </div>

            {/* <Motion.div
              initial={{ opacity: 0, x: locale === 'ar' ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...heroTransition, delay: 0.22 }}
              className="border-t border-white/14 pt-8 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-8"
            >
              <div className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-sand">
                {t.hero.corridorTitle}
              </div>
              <div className="space-y-5">
                {t.hero.corridor.slice(0, 2).map((item) => (
                  <div key={item.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                      {item.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold leading-snug text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </Motion.div> */}
          </div>
        </div>

        <div className="relative border-t border-white/12 bg-white/[0.045] backdrop-blur-md">
          <div className="section-shell grid gap-8 py-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: 0.28 }}
            >
              <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-sand">
                {t.hero.manifestTitle}
              </div>
              <div className="space-y-3">
                {t.hero.manifest.slice(0, 2).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/78 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-emerald" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: 0.35 }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {[
                { value: t.stats.years, label: t.stats.yearsLabel },
                { value: t.stats.countries, label: t.stats.countriesLabel },
                { value: t.stats.quality, label: t.stats.qualityLabel },
              ].map((item) => (
                <div key={item.label} className="border-s border-white/12 ps-4 first:border-s-0 first:ps-0">
                  <div className="text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-brand-sand">
                    {item.label}
                  </div>
                </div>
              ))}
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;
