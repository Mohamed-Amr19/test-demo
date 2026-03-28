import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const ProductShowPage = () => {
  const { categoryId, productId } = useParams();
  const { t, locale } = useLocale();
  const navigate = useNavigate();
  const ArrowIcon = locale === 'ar' ? ArrowRight : ArrowLeft;
  
  const category = t.products.items.find(item => item.id === categoryId);
  const product = category?.catalog?.find(p => p.id === productId);

  if (!product) return <div className="pt-32 text-center text-brand-navy font-bold text-2xl">Product not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col pt-28 md:pt-32"
    >
      <div className="pb-24 max-w-7xl mx-auto px-6 w-full flex-grow">
        <button 
          onClick={() => navigate(`/products/${categoryId}`)} 
          className="flex items-center gap-2 text-gray-500 hover:text-brand-emerald transition-colors mb-10 font-bold tracking-widest uppercase text-sm"
        >
          <ArrowIcon className="w-5 h-5" /> {locale === 'ar' ? 'الرجوع إلى ' : 'Back to '}{category.name}
        </button>

        {/* layoutId applied to the entire card container to seamlessly grow from the grid */}
        <motion.div 
          layoutId={`product-card-${product.id}`}
          className="bg-white rounded-sm overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div layoutId={`product-image-${product.id}`} className="h-[50vh] md:h-[65vh] w-full overflow-hidden bg-gray-100 rounded-sm">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="flex flex-col justify-center py-4 lg:py-12 pr-6 md:pr-12 pl-6 md:pl-0 rtl:pr-6 rtl:md:pr-0 rtl:pl-6 rtl:md:pl-12">
              <motion.h1 layoutId={`product-title-${product.id}`} className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight">
                {product.name}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-10"
              >
                {product.desc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-5 mb-14"
              >
                <div className="flex items-center gap-3 text-brand-navy">
                  <CheckCircle2 className="w-6 h-6 text-brand-emerald shrink-0" />
                  <span className="font-semibold text-lg">{t.stats.qualityLabel}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-navy">
                  <CheckCircle2 className="w-6 h-6 text-brand-emerald shrink-0" />
                  <span className="font-semibold text-lg">{locale === 'ar' ? 'مسار لوجستي متكامل (مبرد/مجمد)' : 'End-to-End Cold Chain Logistics'}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-navy">
                  <CheckCircle2 className="w-6 h-6 text-brand-emerald shrink-0" />
                  <span className="font-semibold text-lg">{locale === 'ar' ? 'جاهز للطلبات الضخمة والتصدير العالمي' : 'Export Ready for Bulk Wholesale'}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://wa.me/+201557412975"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-emerald text-white px-10 py-5 rounded-sm font-bold text-lg transition-all hover:bg-brand-navy shadow-lg hover:-translate-y-1"
                >
                  {t.contact.whatsapp}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <CTASection />
    </motion.div>
  );
};

export default ProductShowPage;
