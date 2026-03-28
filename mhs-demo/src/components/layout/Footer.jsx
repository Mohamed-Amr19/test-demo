import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t-4 border-brand-emerald">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-emerald rounded-sm flex items-center justify-center text-white font-bold text-lg">
                M
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                MHS <span className="font-light">Group</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.hero.subheadline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-brand-sand">{t.products.title}</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              {t.products.items.map(item => (
                <li key={item.id}>
                  <Link to="/products" className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-brand-sand">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-brand-sand">{t.contact.title}</h4>
            <p className="text-sm text-gray-300 mb-2">{t.contact.egypt}</p>
            <p className="text-sm text-brand-emerald font-semibold mb-4">+20 155 741 2975</p>
            <p className="text-sm text-gray-300 mb-2">{t.contact.sa}</p>
            <p className="text-sm text-brand-emerald font-semibold">+27 774 540 935</p>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MHS Group. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
