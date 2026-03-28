import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '../../hooks/useLocale';
import clsx from 'clsx';

const Navbar = () => {
  const { t, locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = (location.pathname === '/' || location.pathname === '/about') && !scrolled;

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.blogs, path: '/blogs' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b',
        !isTransparent ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3' : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-navy rounded-sm flex items-center justify-center text-white font-bold text-xl group-hover:bg-brand-emerald transition-colors">
            M
          </div>
          <span className={clsx("font-bold text-xl tracking-tight transition-colors", !isTransparent ? "text-brand-navy" : "text-white")}>
            MHS <span className="font-light">Group</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-sm font-medium transition-colors relative group",
                location.pathname === link.path 
                  ? (!isTransparent ? "text-brand-emerald" : "text-brand-emerald") 
                  : (!isTransparent ? "text-gray-600 hover:text-brand-emerald" : "text-white/80 hover:text-white hover:drop-shadow-sm")
              )}
            >
              {link.name}
              <span className={clsx(
                "absolute -bottom-1 start-0 h-[2px] bg-brand-emerald transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className={clsx("flex items-center gap-2 text-sm font-semibold transition-colors", !isTransparent ? "text-gray-700 hover:text-brand-emerald" : "text-white/80 hover:text-white")}
          >
            <Globe className="w-4 h-4" />
            <span className={locale === 'ar' ? "font-sans" : "font-sans"}>{t.nav.language}</span>
          </button>
          
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-brand-navy hover:bg-brand-emerald text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            {t.nav.cta}
            <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={clsx("md:hidden transition-colors", !isTransparent ? "text-brand-navy" : "text-white")}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "text-base font-medium",
                location.pathname === link.path ? "text-brand-emerald" : "text-brand-navy"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-2"></div>
          <button
            onClick={() => { toggleLocale(); setMobileMenuOpen(false); }}
            className="flex items-center gap-2 font-semibold text-brand-navy"
          >
            <Globe className="w-5 h-5" />
            {t.nav.language}
          </button>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-navy text-white px-4 py-3 rounded-sm text-center font-semibold mt-2"
          >
            {t.nav.cta}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
