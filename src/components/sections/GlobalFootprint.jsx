import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRightLeft, MapPin } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const GlobalFootprint = () => {
  const { t, locale } = useLocale();
  const labels =
    locale === 'ar'
      ? { origin: 'محور المنشأ', lane: 'خط الوجهة' }
      : { origin: 'Origin hub', lane: 'Destination lane' };

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-brand-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,195,157,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,76,58,0.22),transparent_28%)]" />
      <div className="relative grid gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-14">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <div className="eyebrow mb-3 text-brand-sand">{t.footprint.marketsTitle}</div>
          <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white md:text-5xl">
            {t.footprint.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/72">{t.footprint.subtitle}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {t.footprint.markets.map((market) => (
              <div
                key={market}
                className="border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/78"
              >
                {market}
              </div>
            ))}
          </div>
        </Motion.div>

        <div className="space-y-5">
          {t.footprint.corridors.map((corridor, index) => (
            <Motion.div
              key={corridor.from}
              initial={{ opacity: 0, x: locale === 'ar' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden border border-white/10 bg-white/[0.05] p-6 md:p-8"
            >
              <div className="absolute inset-y-0 start-0 w-1 bg-brand-emerald/70" />
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-brand-sand">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/42">
                      {labels.origin}
                    </div>
                    <div className="mt-1 text-2xl font-bold tracking-[-0.03em] text-white">{corridor.from}</div>
                  </div>
                </div>

                <div className="hidden h-px flex-1 bg-gradient-to-r from-brand-sand/50 via-brand-sand/15 to-transparent md:block rtl:bg-gradient-to-l" />

                <div className="flex items-center gap-3 md:min-w-[220px]">
                  <ArrowRightLeft className="h-5 w-5 text-brand-emerald" />
                  <div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/42">
                      {labels.lane}
                    </div>
                    <div className="mt-1 text-xl font-bold tracking-[-0.03em] text-white">{corridor.to}</div>
                  </div>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72">{corridor.note}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
