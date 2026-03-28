import React from 'react';
import { useLocale } from '../../hooks/useLocale';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ProductBento = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const images = {
    livestock: "https://mhsgroup-export.com/wp-content/uploads/2024/06/Downloader.la-6678408b67e82-1-1024x683.jpg",
    meat: "https://mhsgroup-export.com/wp-content/uploads/2024/06/Downloader.la-66786770ba11e-1-1024x683.jpg",
    produce: "https://mhsgroup-export.com/wp-content/uploads/2024/06/Downloader.la-6678df7f7d8db-1-1024x683.jpg"
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-emerald uppercase mb-2">{t.products.title}</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-navy max-w-2xl">{t.products.subtitle}</h3>
          </div>
          <Link to="/products" className="group flex items-center gap-2 font-bold text-brand-emerald hover:text-brand-navy transition-colors">
            View All Catalogs
            <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((item) => (
            <Link to={`/products/${item.id}`} key={item.id} className="group block relative h-[400px] overflow-hidden rounded-sm bg-brand-navy">
              <img
                src={images[item.id]}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="inline-block px-3 py-1 rounded-sm bg-brand-sand/20 backdrop-blur-md text-brand-sand text-xs font-bold tracking-wider mb-4 w-max">
                  {item.origin}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">{item.name}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-emerald font-bold text-sm">
                   Explore <ArrowIcon className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBento;
