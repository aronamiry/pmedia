import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import type { PageRoute } from '../../types';
import { useLenis } from 'lenis/react';
import { 
  ClockCircleBoldDuotoneIcon, 
  LetterBoldDuotoneIcon, 
  MapPointBoldDuotoneIcon 
} from '@solar-icons/react';

interface FooterProps {
  setCurrentPage: (page: PageRoute) => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t, language } = useLanguage();
  const [studioTime, setStudioTime] = useState('');
  const lenis = useLenis();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Istanbul',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setStudioTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNav = (page: PageRoute) => {
    setCurrentPage(page);
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-100 relative overflow-hidden">
      {/* PREMIUM MARQUEE */}
      <div className="w-full bg-brand-blue py-4 sm:py-6 md:py-8 transform -rotate-2 scale-105 shadow-[0_0_40px_rgba(43,82,255,0.3)] my-8 sm:my-12 overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center whitespace-nowrap text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-white uppercase mx-4 sm:mx-6">
              <span>LET'S CREATE A MASTERPIECE</span>
              <span className="text-brand-pink mx-4 sm:mx-6 text-3xl sm:text-4xl md:text-6xl">&bull;</span>
              <span>PM.MEDIA</span>
              <span className="text-brand-pink mx-4 sm:mx-6 text-3xl sm:text-4xl md:text-6xl">&bull;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 pb-12 pb-safe">
        
        {/* Top Minimal Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-gray-200">
          
          <div className="space-y-6 max-w-sm">
            <span className="text-2xl font-bold tracking-tight text-gray-900 font-sans">
              PM.Media
            </span>
            <p className="text-sm sm:text-base text-gray-700 font-bold leading-relaxed">
              {t.footer.manifesto}
            </p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-gray-100 text-xs font-bold text-gray-500 shadow-sm">
              <ClockCircleBoldDuotoneIcon className="w-4 h-4 text-brand-blue" />
              <span>IST</span>
              <span className="text-gray-900 font-bold">{studioTime || '12:00:00'}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                {t.footer.pagesTitle}
              </h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => handleNav('home')} className="text-sm font-bold text-gray-600 hover:text-gray-900">
                    {t.nav.home}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('works')} className="text-sm font-bold text-gray-600 hover:text-gray-900">
                    {t.nav.works}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('services')} className="text-sm font-bold text-gray-600 hover:text-gray-900">
                    {t.nav.services}
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNav('marketing')} className="text-sm font-bold text-gray-600 hover:text-gray-900">
                    {t.nav.marketing}
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                Socials
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.instagram.com/perinazmedia.tr/" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
                    Instagram (@perinazmedia.tr)
                  </a>
                </li>
                <li>
                  <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-600 hover:text-gray-900">
                    Vimeo
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="mailto:Perinazmedia@gmail.com" className="flex items-center gap-3 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
                <LetterBoldDuotoneIcon className="w-4 h-4 text-brand-blue" />
                Perinazmedia@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm font-bold text-gray-600">
                <MapPointBoldDuotoneIcon className="w-4 h-4 shrink-0 mt-0.5 text-brand-blue" />
                <span>{language === 'tr' ? 'Trabzon, Türkiye' : 'Trabzon, Turkey'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-400">
          <p>{t.footer.rights.replace('{year}', new Date().getFullYear().toString())}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
