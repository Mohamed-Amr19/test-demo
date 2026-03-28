import React from 'react';
import { useLocale } from '../hooks/useLocale';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import GlobalFootprint from '../components/sections/GlobalFootprint';
import CTASection from '../components/sections/CTASection';

const AboutPage = () => {
  const { t, locale } = useLocale();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cloud"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/80 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1588556008151-5e9210eb7b02?auto=format&fit=crop&q=80"
            alt="Global operations"
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block px-4 py-1 rounded-full border border-brand-emerald/30 bg-brand-emerald/10 text-brand-emerald text-sm font-bold tracking-widest uppercase mb-6">
              {t.nav.about}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 whitespace-pre-line tracking-tight">
              {t.about.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              {t.about.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-bold tracking-widest text-brand-emerald uppercase mb-3">{t.about.missionTitle}</h2>
            <p className="text-3xl md:text-4xl font-bold text-brand-navy leading-tight">
              {t.about.missionText}
            </p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {t.about.stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 flex flex-col justify-center hover:border-brand-emerald transition-colors">
                <div className="text-4xl font-bold text-brand-emerald mb-2" dir="ltr">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Global Footprint */}
        <GlobalFootprint />
      </section>

      {/* Values */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {t.about.values.map((value, i) => {
              const icons = [<Globe2 className="w-8 h-8 text-brand-emerald" />, <TrendingUp className="w-8 h-8 text-brand-emerald" />, <ShieldCheck className="w-8 h-8 text-brand-emerald" />];
              return (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center mb-6 group-hover:bg-brand-emerald transition-colors duration-500">
                    {React.cloneElement(icons[i], { className: "w-8 h-8 transition-colors duration-500 group-hover:text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  );
};
export default AboutPage;
