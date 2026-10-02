import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { PageRoute } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { 
  HamburgerMenuBoldDuotoneIcon, 
  CloseCircleBoldDuotoneIcon, 
  ArrowRightUpBoldIcon 
} from '@solar-icons/react';

interface NavbarProps {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  onOpenContact,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, lenis]);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'works', label: t.nav.works },
    { id: 'services', label: t.nav.services },
    { id: 'marketing', label: t.nav.marketing },
  ];

  const handleNavClick = (page: PageRoute) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Centered Liquid Glass Dock Header */}
      <header className="fixed top-3 sm:top-6 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none pt-safe">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto inline-flex items-center justify-between gap-2 sm:gap-6 p-1.5 sm:p-2 rounded-full transition-all duration-300 select-none max-w-[calc(100vw-1.5rem)] ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12),0_0_1px_1px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04]'
              : 'bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]'
          }`}
        >
          {/* 1. LEFT CLUSTER: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer outline-none ${
                    isActive
                      ? 'text-gray-950'
                      : 'text-gray-500 hover:text-gray-950'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavDockPill"
                      className="absolute inset-0 rounded-full bg-gray-100/90 shadow-sm border border-gray-200/50"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Left/Center Divider */}
          <div className="hidden md:block w-px h-5 bg-gray-200/80" />

          {/* 2. CENTER PIECE: PM.Media Brand Mark in the Middle */}
          <button
            onClick={() => handleNavClick('home')}
            className="group relative flex items-center px-3 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-black/5 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <span className="text-base sm:text-lg font-black tracking-tight text-gray-950 font-sans group-hover:text-brand-blue transition-colors">
              PM.Media
            </span>
          </button>

          {/* Center/Right Divider */}
          <div className="hidden md:block w-px h-5 bg-gray-200/80" />

          {/* 3. RIGHT CLUSTER: Language Switcher & Call to Action (Desktop) */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            {/* Bilingual Switcher Pill */}
            <div 
              translate="no" 
              className="notranslate inline-flex items-center p-0.5 rounded-full bg-gray-100/90 border border-gray-200/60 text-xs font-bold font-sans"
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-gray-950 shadow-xs'
                    : 'text-gray-400 hover:text-gray-800'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === 'tr'
                    ? 'bg-white text-gray-950 shadow-xs'
                    : 'text-gray-400 hover:text-gray-800'
                }`}
                title="Türkçe"
              >
                TR
              </button>
            </div>

            <button
              onClick={onOpenContact}
              className="group px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold bg-gradient-to-r from-brand-blue to-indigo-600 text-white shadow-[0_8px_20px_-6px_rgba(43,82,255,0.45)] hover:shadow-[0_12px_24px_-6px_rgba(43,82,255,0.55)] hover:scale-102 active:scale-95 transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>{t.nav.startProject}</span>
              <ArrowRightUpBoldIcon className="w-4 h-4 text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right Controls: Language Toggle + Compact CTA + Hamburger Menu */}
          <div className="flex md:hidden items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-[11px] font-extrabold text-gray-800 active:scale-95 transition-all border border-gray-200/60"
              title={language === 'en' ? 'Türkçe' : 'English'}
            >
              {language === 'en' ? 'TR' : 'EN'}
            </button>

            <button
              onClick={onOpenContact}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold bg-brand-blue text-white shadow-sm active:scale-95 transition-transform"
            >
              {t.nav.startProject}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-900 transition-colors cursor-pointer active:scale-90"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <CloseCircleBoldDuotoneIcon className="w-5 h-5 text-brand-blue" /> : <HamburgerMenuBoldDuotoneIcon className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-[max(5.5rem,calc(env(safe-area-inset-top,0px)+4rem))] pb-[max(2rem,calc(env(safe-area-inset-bottom,0px)+1.5rem))] px-6 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[11px] font-bold tracking-widest text-gray-400 uppercase font-sans px-4 pb-2 border-b border-gray-100">
                {language === 'tr' ? 'MENÜ' : 'NAVIGATION'}
              </div>
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-2xl font-extrabold text-left transition-all px-4 py-3.5 rounded-2xl flex items-center justify-between cursor-pointer ${
                      isActive 
                        ? 'text-brand-blue bg-blue-50/80 shadow-xs' 
                        : 'text-gray-900 hover:bg-gray-50 active:scale-[0.99]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-brand-blue" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 flex flex-col gap-4 border-t border-gray-100">
              <div 
                translate="no"
                className="notranslate text-sm font-bold text-gray-700 flex items-center justify-between py-2 px-4 rounded-xl bg-gray-50/70 border border-gray-100"
              >
                <span className="text-xs uppercase tracking-wider text-gray-500 font-sans">Language</span>
                <div className="inline-flex items-center p-0.5 rounded-full bg-white border border-gray-200 text-xs font-bold font-sans">
                  <button
                    type="button"
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      language === 'en' ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('tr')}
                    className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                      language === 'tr' ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-500'
                    }`}
                  >
                    TR
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="group w-full py-4 rounded-full bg-gradient-to-r from-brand-blue to-indigo-600 text-white font-bold text-base shadow-xl flex items-center justify-center gap-2 active:scale-98 transition-transform cursor-pointer"
              >
                <span>{t.nav.startProject}</span>
                <ArrowRightUpBoldIcon className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
