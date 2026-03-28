import React, { useEffect, useState } from 'react';
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
      setScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeLike = location.pathname === '/' || location.pathname === '/about';
  const isTransparent = isHomeLike && !scrolled && !mobileMenuOpen;
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.blogs, path: '/blogs' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <nav
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isTransparent ? 'py-5' : 'py-3'
      )}
    >
      <div
        className={clsx(
          'mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 md:px-6 transition-all duration-300',
          isTransparent
            ? 'bg-transparent'
            : 'w-[calc(100%-1rem)] border border-black/5 bg-white/88 shadow-[0_24px_60px_rgba(8,23,36,0.08)] backdrop-blur-xl'
        )}
      >
        <Link to="/" className="flex items-center gap-3 py-2.5" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-sand/40 bg-brand-navy text-sm font-extrabold tracking-[0.18em] text-white">
            MHS
          </div>
          <div className="min-w-0">
            <div
              className={clsx(
                'text-[0.63rem] font-semibold uppercase tracking-[0.32em] transition-colors',
                isTransparent ? 'text-brand-sand' : 'text-brand-emerald'
              )}
            >
              {t.nav.region}
            </div>
            <div
              className={clsx(
                'text-base font-semibold tracking-[0.08em] transition-colors md:text-lg',
                isTransparent ? 'text-white' : 'text-brand-navy'
              )}
            >
              MHS Group
            </div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'relative py-6 text-[0.73rem] font-semibold uppercase tracking-[0.26em] transition-colors',
                isActive(link.path)
                  ? 'text-brand-emerald'
                  : isTransparent
                    ? 'text-white/78 hover:text-white'
                    : 'text-brand-navy/68 hover:text-brand-navy'
              )}
            >
              {link.name}
              <span
                className={clsx(
                  'absolute inset-x-0 -bottom-[1px] h-px origin-center bg-brand-emerald transition-transform duration-300',
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0'
                )}
              />
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleLocale}
            className={clsx(
              'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors',
              isTransparent
                ? 'border-white/20 text-white/80 hover:border-white/40 hover:text-white'
                : 'border-brand-navy/10 text-brand-navy/70 hover:border-brand-emerald/30 hover:text-brand-emerald'
            )}
          >
            <Globe className="h-4 w-4" />
            {t.nav.language}
          </button>

          <Link
            to="/contact"
            className={clsx(
              'group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.24em] transition-all',
              isTransparent
                ? 'bg-white text-brand-navy hover:bg-brand-sand'
                : 'bg-brand-navy text-white hover:bg-brand-emerald'
            )}
          >
            {t.nav.cta}
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>

        <button
          className={clsx(
            'rounded-full p-2 transition-colors md:hidden',
            isTransparent ? 'text-white' : 'text-brand-navy'
          )}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mx-4 mt-3 rounded-[2rem] border border-black/5 bg-white/95 px-6 py-6 shadow-[0_30px_80px_rgba(8,23,36,0.12)] backdrop-blur-xl md:hidden">
          <div className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-brand-emerald">
            {t.nav.region}
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'border-b border-black/5 pb-4 text-sm font-semibold uppercase tracking-[0.2em]',
                  isActive(link.path) ? 'text-brand-emerald' : 'text-brand-navy'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                toggleLocale();
                setMobileMenuOpen(false);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy"
            >
              <Globe className="h-4 w-4" />
              {t.nav.language}
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.cta}
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
