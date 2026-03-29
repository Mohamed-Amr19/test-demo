import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-[#07131d] text-white">
      <div className="section-shell py-14 md:py-18">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,0.7fr))]">
          <div className="max-w-md">
            <div className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brand-sand">
              {t.nav.region}
            </div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-sand/35 bg-brand-navy text-sm font-extrabold tracking-[0.18em] text-white">
                MHS
              </div>
              <div className="text-2xl font-semibold tracking-[0.08em]">MHS Group</div>
            </Link>
            <p className="mt-5 text-base leading-relaxed text-white/62">{t.hero.subheadline}</p>
          </div>

          <div>
            <div className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand-sand">
              {t.products.title}
            </div>
            <div className="space-y-3 text-sm text-white/68">
              {t.products.items.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`} className="block transition-colors hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand-sand">
              {t.nav.about}
            </div>
            <div className="space-y-3 text-sm text-white/68">
              <Link to="/about" className="block transition-colors hover:text-white">
                {t.nav.about}
              </Link>
              <Link to="/blogs" className="block transition-colors hover:text-white">
                {t.nav.blogs}
              </Link>
              <Link to="/contact" className="block transition-colors hover:text-white">
                {t.nav.contact}
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand-sand">
              {t.contact.title}
            </div>
            <div className="space-y-4 text-sm text-white/68">
              <div>
                <div>{t.contact.egypt}</div>
                <div className="mt-1 font-semibold text-white" dir="ltr">
                  +20 155 741 2975
                </div>
              </div>
              <div>
                <div>{t.contact.sa}</div>
                <div className="mt-1 font-semibold text-white" dir="ltr">
                  +27 774 540 935
                </div>
              </div>
              <div className="font-semibold text-brand-sand" dir="ltr">
                Info@mhsgroup-export.com
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs font-medium uppercase tracking-[0.22em] text-white/36 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} MHS Group</div>
          <div>Cold-chain export programs across Africa</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
