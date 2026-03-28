import React from 'react';
import ProductBento from '../components/sections/ProductBento';
import CTASection from '../components/sections/CTASection';
import { useLocale } from '../hooks/useLocale';

const ProductsPage = () => {
  const { t } = useLocale();
  return (
    <div className="pt-12 min-h-screen flex flex-col">
      <div className="flex-grow">
        <ProductBento />
      </div>
      <CTASection />
    </div>
  );
};
export default ProductsPage;
