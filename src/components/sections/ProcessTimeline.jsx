import React from 'react';
import { useLocale } from '../../hooks/useLocale';
import { Package, ShieldCheck, Ship } from 'lucide-react';

const icons = {
  1: <Package className="w-8 h-8 text-brand-emerald" />,
  2: <ShieldCheck className="w-8 h-8 text-brand-emerald" />,
  3: <Ship className="w-8 h-8 text-brand-emerald" />
};

const ProcessTimeline = () => {
  const { t } = useLocale();

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-emerald uppercase mb-2">{t.process.title}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-navy max-w-2xl">{t.process.subtitle}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] start-16 end-16 h-px bg-gray-200 z-0"></div>

          {t.process.steps.map((step) => (
            <div key={step.id} className="relative z-10 group cursor-default">
              <div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-brand-emerald group-hover:shadow-md transition-all duration-300">
                {icons[step.id]}
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h4>
              <p className="text-gray-600 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
