import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useLocale } from '../../hooks/useLocale';

const ProcessTimeline = () => {
  const { t } = useLocale();

  return (
    <section id="process" className="bg-brand-cloud py-24 md:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <div className="eyebrow mb-3">{t.process.title}</div>
          <h2 className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-brand-navy md:text-5xl">
            {t.process.subtitle}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-ink/74">{t.process.intro}</p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {t.process.checkpoints.map((item) => (
              <div
                key={item}
                className="border border-brand-navy/10 bg-white/75 px-4 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-ink/70 backdrop-blur-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </Motion.div>

        <div className="space-y-10">
          {t.process.steps.map((step, index) => (
            <Motion.article
              key={step.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6 border-t border-brand-navy/12 pt-8 md:grid-cols-[108px_minmax(0,1fr)]"
            >
              <div className="text-5xl font-extrabold tracking-[-0.06em] text-brand-sand md:text-6xl">
                {step.metric}
              </div>
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-brand-navy md:text-[2rem]">
                  {step.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-brand-ink/72">{step.desc}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
