import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const CTASection = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,195,157,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(15,76,58,0.26),transparent_30%)]" />
      <div className="section-shell relative z-10">
        <div
          className="grid gap-10 border border-white/10 bg-white/[0.05] p-8 md:p-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="eyebrow mb-3 text-brand-sand">{t.contact.title}</div>
            <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white md:text-5xl">
              {t.ctaSection.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/72 md:text-xl">{t.ctaSection.subtitle}</p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.24em] text-brand-navy transition-all hover:bg-brand-sand"
          >
            {t.ctaSection.button}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
