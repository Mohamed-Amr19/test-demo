import React from 'react';
import { ArrowRight, ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';

const ContactPage = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-brand-cloud pt-32 pb-20 md:pt-40">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.7fr)]">
          <div>
            <div className="eyebrow mb-4">{t.contact.title}</div>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-brand-navy md:text-6xl">
              {t.contact.subtitle}
            </h1>

            <div className="mt-12 grid gap-8 border-t border-brand-navy/10 pt-8 md:grid-cols-2">
              <div>
                <div className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                  {t.contact.egypt}
                </div>
                <div className="space-y-4 text-brand-ink/72">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-emerald" />
                    <span>Plot 204, Neighborhood 2, District 16, Sheikh Zayed City, Giza</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brand-emerald" />
                    <span className="font-semibold text-brand-navy" dir="ltr">
                      +20 155 741 2975
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                  {t.contact.sa}
                </div>
                <div className="space-y-4 text-brand-ink/72">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-brand-emerald" />
                    <span className="font-semibold text-brand-navy" dir="ltr">
                      +27 774 540 935
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-brand-emerald" />
                    <span className="font-semibold text-brand-navy" dir="ltr">
                      Info@mhsgroup-export.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-brand-navy/10 bg-white/85 p-8 shadow-[0_24px_60px_rgba(8,23,36,0.08)] backdrop-blur-sm md:p-10">
            <div className="eyebrow mb-3">{t.contact.quickActionTitle}</div>
            <p className="text-lg leading-relaxed text-brand-ink/72">{t.contact.quickActionText}</p>

            <a
              href="https://wa.me/+201557412975"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-navy px-6 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-brand-emerald"
            >
              {t.contact.whatsapp}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </a>

            <div className="mt-8 border-t border-brand-navy/10 pt-6">
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-emerald">
                {t.contact.email}
              </div>
              <div className="mt-2 font-semibold text-brand-navy" dir="ltr">
                Info@mhsgroup-export.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
