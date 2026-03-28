import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const ProductIndexPage = () => {
  const { categoryId } = useParams();
  const { t, locale } = useLocale();
  const navigate = useNavigate();
  const ArrowIcon = locale === 'ar' ? ArrowRight : ArrowLeft;
  
  const category = t.products.items.find(item => item.id === categoryId);
  
  if (!category) return <div className="pt-32 text-center">Category not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen flex flex-col"
    >
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 flex-grow w-full">
        <button 
          onClick={() => navigate('/products')} 
          className="flex items-center gap-2 text-gray-500 hover:text-brand-emerald transition-colors mb-10 font-medium"
        >
          <ArrowIcon className="w-5 h-5" /> {locale === 'ar' ? 'الرجوع إلى جميع المنتجات' : 'Back to all products'}
        </button>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">{category.name}</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">{category.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.catalog && category.catalog.map(product => (
            <Link to={`/products/${categoryId}/${product.id}`} key={product.id}>
              <motion.div 
                layoutId={`product-card-${product.id}`}
                className="bg-white group overflow-hidden border border-gray-100 hover:border-brand-emerald hover:shadow-xl transition-all duration-500 cursor-pointer rounded-sm"
              >
                <motion.div layoutId={`product-image-${product.id}`} className="h-64 w-full overflow-hidden bg-gray-100">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </motion.div>
                <div className="p-8">
                  <motion.h3 layoutId={`product-title-${product.id}`} className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-emerald transition-colors">
                    {product.name}
                  </motion.h3>
                  <p className="text-gray-600 line-clamp-2 leading-relaxed">{product.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </motion.div>
  );
};
export default ProductIndexPage;
