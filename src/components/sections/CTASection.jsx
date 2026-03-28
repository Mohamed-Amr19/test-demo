import React from 'react';
import { useLocale } from '../../hooks/useLocale';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-brand-navy py-24 md:py-32 border-t border-brand-emerald/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588556008151-5e9210eb7b02?auto=format&fit=crop&q=80')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/90 to-brand-navy/40"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          {t.ctaSection.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto"
        >
          {t.ctaSection.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
           <Link to="/contact" className="group inline-flex items-center justify-center gap-3 bg-brand-emerald text-white px-10 py-5 rounded-sm font-bold text-lg transition-all hover:bg-white hover:text-brand-emerald shadow-xl hover:-translate-y-1">
              {t.ctaSection.button}
              <ArrowIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
           </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default CTASection;
