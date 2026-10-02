import React from 'react';
import { useLenis } from 'lenis/react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import { motion } from 'framer-motion';
import {
  MagicWandBoldDuotoneIcon,
  VideocameraRecordBoldDuotoneIcon,
  CameraMinimalisticBoldDuotoneIcon,
  ClapperboardPlayBoldDuotoneIcon,
  LayersBoldDuotoneIcon,
  LayersMinimalisticBoldDuotoneIcon,
  BoltBoldDuotoneIcon,
  CheckCircleBoldDuotoneIcon,
  ArrowRightUpBoldIcon,
  ClockCircleBoldDuotoneIcon,
  StarsBoldDuotoneIcon,
} from '@solar-icons/react';

interface ServicesPageProps {
  onOpenContact: () => void;
}

interface ServiceTheme {
  gradientBg: string;
  cardBorder: string;
  cardBorderHover: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  iconBg: string;
  iconColor: string;
  accentText: string;
  accentDot: string;
  glowColor: string;
  btnHover: string;
}

const serviceThemes: Record<string, ServiceTheme> = {
  'content-creation': {
    // 01: California Sunset / Vibrant Coral Pink to Orange
    gradientBg: 'from-rose-500/[0.08] via-orange-500/[0.04] to-transparent',
    cardBorder: 'border-rose-200/80',
    cardBorderHover: 'hover:border-rose-300 hover:shadow-[0_20px_50px_-12px_rgba(244,63,94,0.18)]',
    badgeBg: 'bg-rose-500/10',
    badgeText: 'text-rose-600',
    badgeBorder: 'border-rose-200',
    iconBg: 'bg-gradient-to-br from-rose-500 to-orange-500',
    iconColor: 'text-white',
    accentText: 'text-rose-600',
    accentDot: 'bg-rose-500',
    glowColor: 'bg-rose-400/20',
    btnHover: 'hover:bg-rose-600',
  },
  'video-production': {
    // 02: Electric Cinema Blue / Royal Indigo
    gradientBg: 'from-blue-600/[0.08] via-indigo-500/[0.04] to-transparent',
    cardBorder: 'border-blue-200/80',
    cardBorderHover: 'hover:border-blue-300 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.18)]',
    badgeBg: 'bg-blue-500/10',
    badgeText: 'text-blue-600',
    badgeBorder: 'border-blue-200',
    iconBg: 'bg-gradient-to-br from-blue-600 to-indigo-600',
    iconColor: 'text-white',
    accentText: 'text-blue-600',
    accentDot: 'bg-blue-500',
    glowColor: 'bg-blue-400/20',
    btnHover: 'hover:bg-blue-600',
  },
  'photography': {
    // 03: Emerald Mint / Fresh Jade
    gradientBg: 'from-emerald-500/[0.08] via-teal-500/[0.04] to-transparent',
    cardBorder: 'border-emerald-200/80',
    cardBorderHover: 'hover:border-emerald-300 hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.18)]',
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-600',
    badgeBorder: 'border-emerald-200',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    iconColor: 'text-white',
    accentText: 'text-emerald-600',
    accentDot: 'bg-emerald-500',
    glowColor: 'bg-emerald-400/20',
    btnHover: 'hover:bg-emerald-600',
  },
  'video-editing': {
    // 04: Cosmic Violet / Neon Fuchsia
    gradientBg: 'from-purple-600/[0.08] via-fuchsia-500/[0.04] to-transparent',
    cardBorder: 'border-purple-200/80',
    cardBorderHover: 'hover:border-purple-300 hover:shadow-[0_20px_50px_-12px_rgba(147,51,234,0.18)]',
    badgeBg: 'bg-purple-500/10',
    badgeText: 'text-purple-600',
    badgeBorder: 'border-purple-200',
    iconBg: 'bg-gradient-to-br from-purple-600 to-fuchsia-600',
    iconColor: 'text-white',
    accentText: 'text-purple-600',
    accentDot: 'bg-purple-500',
    glowColor: 'bg-purple-400/20',
    btnHover: 'hover:bg-purple-600',
  },
  'social-media-content': {
    // 05: Amber Gold / Warm Tangerine
    gradientBg: 'from-amber-500/[0.08] via-orange-500/[0.04] to-transparent',
    cardBorder: 'border-amber-200/80',
    cardBorderHover: 'hover:border-amber-300 hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.18)]',
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-600',
    badgeBorder: 'border-amber-200',
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    iconColor: 'text-white',
    accentText: 'text-amber-600',
    accentDot: 'bg-amber-500',
    glowColor: 'bg-amber-400/20',
    btnHover: 'hover:bg-amber-600',
  },
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
  const { language, t } = useLanguage();

  const serviceIcons = [
    MagicWandBoldDuotoneIcon,
    VideocameraRecordBoldDuotoneIcon,
    CameraMinimalisticBoldDuotoneIcon,
    ClapperboardPlayBoldDuotoneIcon,
    LayersBoldDuotoneIcon,
  ];

  const lenis = useLenis();

  React.useEffect(() => {
    const handleScrollToTarget = () => {
      const hash = window.location.hash;
      if (hash) {
        const cleaned = hash.replace('#services-', '').replace('#services', '').replace('#', '');
        if (cleaned) {
          setTimeout(() => {
            const el = document.getElementById(cleaned);
            if (el) {
              if (lenis) {
                lenis.scrollTo(el, { offset: -100, duration: 1.2 });
              } else {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              el.classList.add('ring-4', 'ring-brand-blue/40');
              setTimeout(() => el.classList.remove('ring-4', 'ring-brand-blue/40'), 2500);
            }
          }, 350);
        }
      }
    };
    handleScrollToTarget();
    window.addEventListener('hashchange', handleScrollToTarget);
    return () => window.removeEventListener('hashchange', handleScrollToTarget);
  }, [lenis]);

  return (
    <div className="pt-28 sm:pt-40 pb-16 sm:pb-20 space-y-14 sm:space-y-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
      
      {/* 1. HERO TITLE WITH CUSTOM IMAGE BACKGROUND */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-14 text-center md:text-left shadow-2xl"
      >
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{ backgroundImage: `url('/images/hi.jfif')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40" />

        <div className="relative z-10 space-y-3 sm:space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm text-[11px] sm:text-xs font-bold text-white">
            <LayersMinimalisticBoldDuotoneIcon className="w-4 h-4 text-brand-pink" />
            <span>{t.servicesPage.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-sans">
            {t.servicesPage.title}
          </h1>

          <p className="text-base sm:text-xl text-gray-100 font-bold leading-relaxed max-w-2xl">
            {t.servicesPage.subtitle}
          </p>
        </div>
      </motion.div>

      {/* 2. THE 5 CORE DISCIPLINES - COMPACT, MINIMAL BENTO GRID WITH UNIQUE GRADIENTS & SOLAR ICONS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 items-stretch">
        {servicesData.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          const theme = serviceThemes[service.id] || serviceThemes['content-creation'];
          const isFlagship = service.id === 'social-media-content';

          return (
            <motion.div
              id={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              key={service.id}
              className={`relative overflow-hidden rounded-2xl sm:rounded-[36px] bg-gradient-to-br ${theme.gradientBg} bg-white border ${theme.cardBorder} ${theme.cardBorderHover} p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 transition-all duration-300 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.06)] group ${
                isFlagship ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 inset-x-0 h-1.5 ${theme.iconBg}`} />

              {/* Ambient Radial Mesh Glow */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-500 ${theme.glowColor}`} />

              <div className="relative z-10 space-y-4 sm:space-y-5">
                
                {/* Header Row: Number, Icon, Title, Highlight Pill */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${theme.iconBg} ${theme.iconColor} flex items-center justify-center shadow-md shrink-0`}>
                      <Icon size={22} />
                    </div>

                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-gray-400 uppercase font-sans block">
                        SERVICE 0{index + 1}
                      </span>
                      <h2 className="text-lg sm:text-2xl font-black text-gray-900 tracking-tight font-sans">
                        {service.title[language]}
                      </h2>
                    </div>
                  </div>

                  {/* Highlight Pill with Solar Bolt Icon */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} shadow-2xs self-start sm:self-auto`}>
                    <BoltBoldDuotoneIcon size={14} />
                    <span>{service.highlight[language]}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-800 font-bold leading-relaxed">
                  {service.description[language]}
                </p>

                {/* Grid Structure: Scope & Deliverables */}
                <div className={`pt-1 gap-6 items-start ${
                  isFlagship ? 'grid grid-cols-1 md:grid-cols-12' : 'space-y-4'
                }`}>
                  
                  {/* Scope / Core Disciplines */}
                  <div className={isFlagship ? 'md:col-span-7 space-y-2' : 'space-y-2'}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.accentText} font-sans block`}>
                      {t.servicesPage.scopeTitle}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.items[language].slice(0, isFlagship ? 6 : 4).map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-gray-200 text-xs sm:text-sm font-bold text-gray-800 shadow-2xs hover:bg-white hover:border-gray-300 transition-colors"
                        >
                          <CheckCircleBoldDuotoneIcon size={13} className={theme.accentText} />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <div className={isFlagship ? 'md:col-span-5 space-y-2 md:border-l md:border-gray-100 md:pl-6' : 'space-y-2 pt-2 border-t border-gray-100'}>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans block">
                      {t.servicesPage.deliverablesTitle}
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm font-bold text-gray-700">
                      {service.deliverables[language].slice(0, 3).map((deliv, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${theme.accentDot} shrink-0`} />
                          <span className="truncate">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Bottom Row: Tagline + Start CTA (Stacks gracefully on phones) */}
              <div className="pt-4 border-t border-gray-100/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
                <span className="text-xs sm:text-sm font-bold text-gray-500 font-sans truncate">
                  {service.tagline[language]}
                </span>

                <button
                  onClick={onOpenContact}
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-gray-950 text-white text-xs font-bold shadow-md ${theme.btnHover} hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans shrink-0 group w-full sm:w-auto`}
                >
                  <span>{t.nav.startProject}</span>
                  <ArrowRightUpBoldIcon size={18} className="text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* 3. WORKING MODELS / PACKAGES COMPARISON WITH SOLAR ICONS */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-8 sm:space-y-12"
      >
        <div className="space-y-2.5 sm:space-y-3 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white border border-gray-200/80 text-[11px] sm:text-xs font-bold text-gray-500 shadow-sm">
            <ClockCircleBoldDuotoneIcon size={16} className="text-brand-pink" />
            <span>{t.servicesPage.packagesBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-gray-900 font-sans">
            {t.servicesPage.packagesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {t.servicesPage.packages.map((pkg, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-9 rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 flex flex-col justify-between space-y-6 hover:border-brand-blue hover:shadow-xl transition-all duration-300 relative overflow-hidden group shadow-sm"
            >
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brand-light-blue rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
              
              <div className="space-y-4 relative z-10">
                <span className="inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-gray-950 text-white shadow-sm font-sans">
                  {pkg.badge}
                </span>

                <div>
                  <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 mb-1.5 font-sans tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-800 font-bold leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 pt-4 border-t border-gray-100">
                  {pkg.bullets.map((b, i) => (
                    <li key={i} className="text-sm sm:text-base font-bold text-gray-800 flex items-center gap-2.5">
                      <CheckCircleBoldDuotoneIcon size={16} className="text-brand-blue shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-3.5 rounded-full bg-gray-50 text-gray-900 text-xs sm:text-sm font-bold hover:bg-brand-blue hover:text-white transition-all shadow-sm flex items-center justify-center gap-2 relative z-10 active:scale-[0.98] cursor-pointer font-sans group"
              >
                <span>{language === 'tr' ? 'Teklif Alın' : 'Request Package Scope'}</span>
                <ArrowRightUpBoldIcon size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 4. FINAL CTA WITH SOLAR STARS ICON */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-2xl sm:rounded-3xl md:rounded-[48px] bg-gray-900 text-white p-8 sm:p-20 text-center space-y-6 sm:space-y-10 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-blob-blue opacity-40 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none" />
        
        <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gray-800 text-brand-pink flex items-center justify-center mx-auto shadow-lg border border-gray-700">
          <StarsBoldDuotoneIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <h2 className="relative z-10 text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight italic">
          “{t.servicesPage.endCtaTitle}”
        </h2>

        <p className="relative z-10 text-base sm:text-2xl text-gray-200 max-w-xl mx-auto font-bold">
          {t.servicesPage.endCtaSubtitle}
        </p>

        <div className="relative z-10 pt-2 sm:pt-4 flex items-center justify-center">
          <button
            onClick={onOpenContact}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-brand-blue text-white font-bold text-base sm:text-lg hover:bg-brand-blue-hover transition-all shadow-[0_8px_20px_-6px_rgba(43,82,255,0.5)] active:scale-95 cursor-pointer"
          >
            <span>{t.servicesPage.endCtaButton}</span>
            <ArrowRightUpBoldIcon size={22} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </motion.section>
    </div>
  );
};
