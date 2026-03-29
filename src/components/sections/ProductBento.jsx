import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const ProductBento = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="section-shell">
        <div className="grid gap-10 border-b border-brand-navy/10 pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-3xl">
            <div className="eyebrow mb-3">{t.products.title}</div>
            <h2 className="text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-brand-navy md:text-5xl">
              {t.products.subtitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-ink/72">{t.products.overviewText}</p>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-emerald transition-colors hover:text-brand-navy"
          >
            {t.products.browseLabel}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 space-y-20">
          {t.products.items.map((item, index) => (
            <Motion.article
              key={item.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-12 lg:items-end"
            >
              <Link
                to={`/products/${item.id}`}
                className={`group block overflow-hidden lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative h-[420px] overflow-hidden rounded-[1.8rem] bg-brand-navy md:h-[520px]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brand-sand">
                      {item.eyebrow}
                    </div>
                    <div className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">
                      {item.name}
                    </div>
                  </div>
                </div>
              </Link>

              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="text-sm font-semibold uppercase tracking-[0.26em] text-brand-emerald">{item.origin}</div>
                <h3 className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-navy md:text-4xl">
                  {item.name}
                </h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/72">{item.desc}</p>

                <div className="mt-8 grid gap-4 border-t border-brand-navy/10 pt-6 sm:grid-cols-2">
                  {item.stats.slice(0, 1).map((stat) => (
                    <div key={stat.label}>
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                        {stat.label}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-brand-navy">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/products/${item.id}`}
                  className="group mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-brand-navy transition-colors hover:text-brand-emerald"
                >
                  {t.products.browseLabel}
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBento;
