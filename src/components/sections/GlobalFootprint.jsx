import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';

const GlobalFootprint = () => {
  const { t } = useLocale();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-brand-navy rounded-sm overflow-hidden text-white shadow-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-12 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">{t.about.footprintTitle}</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-10">
            {t.about.footprintText}
          </p>
          <div className="flex flex-col xl:flex-row gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-brand-emerald" />
                <span className="font-bold text-xl">{t.contact.sa}</span>
              </div>
              <span className="text-brand-sand text-sm block">Livestock & Meat Export Focus</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-brand-emerald" />
                <span className="font-bold text-xl">{t.contact.egypt}</span>
              </div>
              <span className="text-brand-sand text-sm block">Fresh Produce Hub</span>
            </div>
          </div>
        </div>

        {/* Animated Africa Map */}
        <div className="h-[400px] md:h-[500px] bg-gray-900 relative overflow-hidden flex items-center justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29.svg"
            alt="Map focused on Africa"
            className="absolute inset-0 w-full h-full object-contain opacity-20 p-4"
          />
          <svg className="absolute inset-0 w-full h-full z-10 p-4" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <motion.path
              d="M 54,78 Q 80,55 60,28"
              fill="none"
              stroke="#10b981"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <motion.circle
              cx="54" cy="78" r="1.5"
              fill="#10b981"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.circle
              cx="54" cy="78" r="3"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="0.25"
              animate={{ scale: [1, 3], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.circle
              cx="60" cy="28" r="1.5"
              fill="#10b981"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 2.5 }}
            />
            <motion.circle
              cx="60" cy="28" r="3"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="0.25"
              animate={{ scale: [1, 3], opacity: [0.8, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 2.5 }}
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalFootprint;
