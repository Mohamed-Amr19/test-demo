import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';
import CTASection from '../components/sections/CTASection';

const ProductShowPage = () => {
  const { categoryId, productId } = useParams();
  const { t, locale } = useLocale();
  const navigate = useNavigate();
  const ArrowIcon = locale === 'ar' ? ArrowRight : ArrowLeft;

  const category = t.products.items.find((item) => item.id === categoryId);
  const product = category?.catalog?.find((item) => item.id === productId);

  if (!product) {
    return <div className="pt-32 text-center text-2xl font-bold text-brand-navy">Product not found</div>;
  }

  const labels = locale === 'ar'
    ? {
        back: `الرجوع إلى ${category.name}`,
        assurances: 'ضمانات التشغيل',
        fit: 'مناسب لـ',
        sourcing: 'ملاحظة التوريد',
        inquiry: 'استفسار مباشر',
        inquiryText: 'أرسل السوق المستهدف والكمية المطلوبة وتوقيت الشحن التقريبي. سيصلك رد سريع من الفريق التجاري.',
        callout: 'جاهز لطلبات الجملة وبرامج التوريد المتكررة',
      }
    : {
        back: `Back to ${category.name}`,
        assurances: 'Operating assurances',
        fit: 'Best suited for',
        sourcing: 'Sourcing note',
        inquiry: 'Direct inquiry',
        inquiryText:
          'Share destination market, target volume, and shipping window. The commercial team can respond with the right routing context quickly.',
        callout: 'Built for wholesale orders and repeat supply programs',
      };

  const productUrl = typeof window !== 'undefined' ? window.location.href : '';
  const waMessage =
    locale === 'ar'
      ? `مرحباً، أود الاستفسار عن ${product.name}. رابط المنتج: ${productUrl}`
      : `Hello, I would like to inquire about ${product.name}. Product link: ${productUrl}`;
  const waLink = `https://wa.me/+201557412975?text=${encodeURIComponent(waMessage)}`;

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cloud"
    >
      <section className="relative overflow-hidden bg-brand-navy pb-14 pt-28 text-white md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,195,157,0.16),transparent_26%),linear-gradient(120deg,rgba(8,23,36,0.98),rgba(8,23,36,0.84)_48%,rgba(8,23,36,0.36))]" />
        <div className="section-shell relative z-10">
          <button
            onClick={() => navigate(`/products/${categoryId}`)}
            className="mb-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/68 transition-colors hover:text-white"
          >
            <ArrowIcon className="h-4 w-4" />
            {labels.back}
          </button>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.96fr)_minmax(280px,0.74fr)] lg:items-end">
            <div className="max-w-4xl">
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-brand-sand">
                {product.eyebrow}
              </div>
              <Motion.h1
                layoutId={`product-title-${product.id}`}
                className="mt-4 text-5xl font-extrabold leading-[0.96] tracking-[-0.05em] md:text-6xl"
              >
                {product.name}
              </Motion.h1>
              <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/74">{product.lead}</p>
            </div>

            <div className="border-t border-white/12 pt-6 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-8">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                {category.name}
              </div>
              <div className="mt-2 text-lg font-semibold text-white">{labels.callout}</div>
              <div className="mt-6 grid gap-5 border-t border-white/10 pt-6">
                {product.details.slice(0, 2).map((detail) => (
                  <div key={detail.label}>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/42">
                      {detail.label}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">{detail.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <Motion.div
          layoutId={`product-card-${product.id}`}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.62fr)] lg:items-start"
        >
          <div>
            <Motion.div
              layoutId={`product-image-${product.id}`}
              className="overflow-hidden rounded-[2rem] bg-brand-navy shadow-[0_34px_90px_rgba(8,23,36,0.14)]"
            >
              <img src={product.img} alt={product.name} className="h-[360px] w-full object-cover md:h-[560px]" />
            </Motion.div>

            <div className="mt-8 grid gap-4 border-t border-brand-navy/10 pt-8 sm:grid-cols-2">
              {product.details.map((detail) => (
                <div key={detail.label}>
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                    {detail.label}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-brand-navy">{detail.value}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-10 border-t border-brand-navy/10 pt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div>
                <div className="eyebrow mb-3">{labels.assurances}</div>
                <div className="space-y-4">
                  {product.assurances.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-base leading-relaxed text-brand-ink/74">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-emerald" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="eyebrow mb-3">{labels.fit}</div>
                <div className="space-y-3">
                  {product.fit.map((item) => (
                    <div key={item} className="border border-brand-navy/10 bg-white/70 px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink/72">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-brand-navy/10 pt-10">
              <div className="eyebrow mb-3">{labels.sourcing}</div>
              <p className="max-w-4xl text-2xl font-bold leading-relaxed tracking-[-0.03em] text-brand-navy">
                {product.sourcingNote}
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="border border-brand-navy/10 bg-white/85 p-6 shadow-[0_24px_60px_rgba(8,23,36,0.08)] backdrop-blur-sm md:p-8">
              <div className="eyebrow mb-3">{labels.inquiry}</div>
              <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-brand-navy">
                {t.contact.quickActionTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-ink/72">{labels.inquiryText}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-navy px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-brand-emerald"
              >
                {t.contact.whatsapp}
              </a>

              <div className="mt-8 border-t border-brand-navy/10 pt-6">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                  {t.contact.email}
                </div>
                <div className="mt-2 font-semibold text-brand-navy" dir="ltr">
                  Info@mhsgroup-export.com
                </div>
              </div>

              <div className="mt-6 border-t border-brand-navy/10 pt-6">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                  {t.contact.egypt}
                </div>
                <div className="mt-2 font-semibold text-brand-navy" dir="ltr">
                  +20 155 741 2975
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </section>

      <CTASection />
    </Motion.div>
  );
};

export default ProductShowPage;
