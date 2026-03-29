import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';
import CTASection from '../components/sections/CTASection';

const ProductIndexPage = () => {
  const { categoryId } = useParams();
  const { t, locale } = useLocale();
  const navigate = useNavigate();
  const ArrowIcon = locale === 'ar' ? ArrowRight : ArrowLeft;
  const category = t.products.items.find((item) => item.id === categoryId);

  if (!category) {
    return <div className="pt-32 text-center text-2xl font-bold text-brand-navy">Category not found</div>;
  }

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cloud"
    >
      <section className="relative overflow-hidden bg-brand-navy pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 h-full w-full object-cover opacity-22 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,23,36,0.98),rgba(8,23,36,0.84)_52%,rgba(8,23,36,0.38))]" />
        <div className="section-shell relative z-10">
          <button
            onClick={() => navigate('/products')}
            className="mb-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/66 transition-colors hover:text-white"
          >
            <ArrowIcon className="h-4 w-4" />
            {locale === 'ar' ? 'العودة إلى جميع الفئات' : 'Back to all categories'}
          </button>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.7fr)] lg:items-end">
            <div className="max-w-4xl">
              <div className="eyebrow mb-4 text-brand-sand">{category.eyebrow}</div>
              <h1 className="text-5xl font-extrabold leading-[0.96] tracking-[-0.05em] md:text-6xl">
                {category.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/72">{category.desc}</p>
            </div>

            <div className="border-t border-white/12 pt-6 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-8">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-sand">
                {category.origin}
              </div>
              <div className="mt-6 grid gap-5 border-t border-white/10 pt-6">
                {category.stats.slice(0, 1).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <div className="grid gap-10 border-b border-brand-navy/10 pb-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-emerald">{category.origin}</div>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.highlights.slice(0, 2).map((highlight) => (
              <div key={highlight} className="border border-brand-navy/10 bg-white/70 px-4 py-4 text-sm leading-relaxed text-brand-ink/72">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {category.catalog.map((product, index) => (
            <Link to={`/products/${categoryId}/${product.id}`} key={product.id}>
              <Motion.article
                layoutId={`product-card-${product.id}`}
                className="grid gap-6 border-t border-brand-navy/10 pt-10 transition-colors hover:text-brand-emerald md:grid-cols-[minmax(240px,340px)_minmax(0,1fr)]"
              >
                <Motion.div
                  layoutId={`product-image-${product.id}`}
                  className={`overflow-hidden rounded-[1.6rem] bg-brand-navy ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-[280px] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                </Motion.div>

                <div className={`flex flex-col justify-between ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    <div className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand-emerald">
                      {product.eyebrow}
                    </div>
                    <Motion.h2
                      layoutId={`product-title-${product.id}`}
                      className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-brand-navy md:text-4xl"
                    >
                      {product.name}
                    </Motion.h2>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-ink/72">{product.desc}</p>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-1">
                    {product.details.slice(0, 1).map((detail) => (
                      <div key={detail.label}>
                        <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                          {detail.label}
                        </div>
                        <div className="mt-2 text-base font-semibold text-brand-navy">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.article>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </Motion.div>
  );
};

export default ProductIndexPage;
