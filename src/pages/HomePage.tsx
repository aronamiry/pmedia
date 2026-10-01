import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { PageRoute, Project } from '../types';
import { projectsData } from '../data/projects';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  VideocameraRecordBoldDuotoneIcon,
  MagicWandBoldDuotoneIcon,
  ClapperboardPlayBoldDuotoneIcon,
  CameraMinimalisticBoldDuotoneIcon,
  LayersBoldDuotoneIcon,
  LayersMinimalisticBoldDuotoneIcon,
  ArrowRightUpBoldIcon,
  StarsBoldDuotoneIcon,
  CrownStarBoldDuotoneIcon,
  AltArrowLeftBoldDuotoneIcon,
  AltArrowRightBoldDuotoneIcon,
  PlayBoldDuotoneIcon,
  LightbulbBoldDuotoneIcon,
  HeartBoldDuotoneIcon,
} from '@solar-icons/react';
import { HeroRemotionBackground } from '../components/remotion/HeroRemotionBackground';

// Lazy load heavy below-the-fold components to reduce initial bundle size by 80%
const BrandShowreelPlayer = React.lazy(() => 
  import('../components/ui/BrandShowreelPlayer').then(m => ({ default: m.BrandShowreelPlayer }))
);
const ArtisticPhotoGallery = React.lazy(() => 
  import('../components/ui/ArtisticPhotoGallery').then(m => ({ default: m.ArtisticPhotoGallery }))
);

interface HomePageProps {
  setCurrentPage: (page: PageRoute) => void;
  onOpenContact: () => void;
  onSelectProject: (project: Project) => void;
}

const getServiceForProject = (project: Project) => {
  switch (project.category) {
    case 'commercials':
      return {
        id: 'video-production',
        name: { tr: 'Video Prodüksiyon', en: 'Video Production' },
        icon: VideocameraRecordBoldDuotoneIcon,
        tag: { tr: 'Ticari Reklam Filmi', en: 'Commercial Film' },
        badgeBg: 'bg-blue-600/90 text-white',
      };
    case 'reels':
      return {
        id: 'content-creation',
        name: { tr: 'İçerik Üretimi', en: 'Content Creation' },
        icon: MagicWandBoldDuotoneIcon,
        tag: { tr: 'Reels & Dikey Video', en: 'Viral Reels Engine' },
        badgeBg: 'bg-pink-600/90 text-white',
      };
    case 'product':
      return {
        id: 'video-editing',
        name: { tr: 'Kurgu & Post-Prodüksiyon', en: 'Editing & Post' },
        icon: ClapperboardPlayBoldDuotoneIcon,
        tag: { tr: 'Ürün Kurgusu & VFX', en: 'Macro Product Film' },
        badgeBg: 'bg-purple-600/90 text-white',
      };
    case 'photography':
      return {
        id: 'photography',
        name: { tr: 'Fotoğraf Çekimi', en: 'Photography' },
        icon: CameraMinimalisticBoldDuotoneIcon,
        tag: { tr: 'Moda & Editoryal', en: 'Editorial Photography' },
        badgeBg: 'bg-emerald-600/90 text-white',
      };
    case 'social':
      return {
        id: 'social-media-content',
        name: { tr: 'Sosyal Medya Yönetimi', en: 'Social Content Package' },
        icon: LayersBoldDuotoneIcon,
        tag: { tr: 'Aylık İçerik Paketi', en: 'Social Media' },
        badgeBg: 'bg-amber-600/90 text-white',
      };
    default:
      return {
        id: 'video-production',
        name: { tr: 'Video Prodüksiyon', en: 'Video Production' },
        icon: VideocameraRecordBoldDuotoneIcon,
        tag: { tr: 'Kreatif Prodüksiyon', en: 'Creative Production' },
        badgeBg: 'bg-gray-900/90 text-white',
      };
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 200 }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  onOpenContact,
  onSelectProject,
}) => {
  const { language, t } = useLanguage();
  const featuredProjects = projectsData.filter((p) => p.featured);

  const navigateToService = (serviceId: string) => {
    setCurrentPage('services');
    window.location.hash = `services-${serviceId}`;
    setTimeout(() => {
      const el = document.getElementById(serviceId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-brand-blue/40');
        setTimeout(() => el.classList.remove('ring-4', 'ring-brand-blue/40'), 2500);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 350);
  };

  // Global & section scroll animation tracking
  const { scrollY } = useScroll();
  const heroTextY = useTransform(scrollY, [0, 400], [0, 50]);
  const heroTextOpacity = useTransform(scrollY, [0, 350], [1, 0.4]);
  const floatImg1Y = useTransform(scrollY, [0, 500], [0, -60]);
  const floatImg2Y = useTransform(scrollY, [0, 500], [0, -40]);

  // Dedicated scroll tracking for 3 Stacked Service Cards
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: servicesScroll } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });

  const yCard1 = useTransform(servicesScroll, [0.1, 0.85], [35, -20]);
  const yCard2 = useTransform(servicesScroll, [0.1, 0.85], [60, -35]);
  const yCard3 = useTransform(servicesScroll, [0.1, 0.85], [85, -50]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };
  const goToSlide = (idx: number) => {
    if (idx === currentSlide) return;
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [featuredProjects.length]);

  return (
    <div className="bg-white overflow-x-clip w-full min-h-screen relative">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-x-clip">
        
        {/* Remotion Dynamic Background with Language Switch and Floating Badges */}
        <HeroRemotionBackground language={language} />
        <div className="absolute inset-0 grain-overlay pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 w-full">
          {/* Headline with Absolute Floating Elements */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ y: heroTextY, opacity: heroTextOpacity }}
            className="relative text-[2.75rem] xs:text-[3.5rem] sm:text-[5.5rem] md:text-[7.5rem] leading-[1.08] sm:leading-[1.05] font-semibold text-gray-900 tracking-tight z-10"
          >
            {/* Floating Image 1 (Top Right) - Electric Cinema Blue Accent Border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ y: floatImg1Y }}
              className="block absolute -top-12 -right-3 xs:-top-14 xs:-right-6 sm:-top-16 sm:-right-32 md:-right-56 w-16 xs:w-24 sm:w-40 md:w-52 aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_15px_35px_-8px_rgba(37,99,235,0.35)] rotate-6 animate-float border-[3px] sm:border-[5px] border-blue-400/90 ring-2 ring-blue-500/30 -z-10 bg-gray-100 pointer-events-none select-none"
            >
              <img 
                fetchPriority="high" 
                decoding="async" 
                src="/media/photography/akdingold-editorial-high-fashion-portrait.jpg" 
                alt="High Fashion Editorial" 
                className="w-full h-full object-cover object-top opacity-95 pointer-events-none select-none" 
              />
            </motion.div>

            {/* Floating Image 2 (Bottom Left) - California Sunset Rose Accent Border */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ y: floatImg2Y }}
              className="block absolute -bottom-10 -left-3 xs:-bottom-14 xs:-left-6 sm:-bottom-16 sm:-left-32 md:-left-56 w-14 xs:w-20 sm:w-36 md:w-48 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_15px_35px_-8px_rgba(244,63,94,0.35)] -rotate-12 animate-float border-[3px] sm:border-[5px] border-rose-400/90 ring-2 ring-rose-500/30 -z-10 bg-gray-100 [animation-delay:1.5s] pointer-events-none select-none"
            >
              <img 
                fetchPriority="high" 
                decoding="async" 
                src="/media/photography/still-shoes-rhinestone-boots-fur-lookbook.jpg" 
                alt="Fashion Lookbook" 
                className="w-full h-full object-cover object-center opacity-95 pointer-events-none select-none" 
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="relative z-20 drop-shadow-sm">
              {t.hero.headline1}
            </motion.div>
            <motion.div variants={fadeInUp} className="relative z-20 animate-rainbow inline-block px-2 drop-shadow-sm">
              {t.hero.headline2}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-8 w-full max-w-sm sm:max-w-none mx-auto"
          >
            <button
              onClick={() => {
                setCurrentPage('works');
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm sm:text-base font-bold text-gray-900 border-2 border-gray-200 hover:border-gray-900 transition-colors text-center cursor-pointer"
            >
              {t.hero.ctaSecondary}
            </button>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-bold bg-brand-blue text-white hover:bg-brand-blue-hover transition-all shadow-[0_8px_20px_-6px_rgba(43,82,255,0.5)] active:scale-95 text-center cursor-pointer"
            >
              {t.hero.ctaPrimary}
            </button>
          </motion.div>
        </div>

        {/* Seamless bottom fade overlay: melts colors into white with zero cut border */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-56 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none z-[5]" />
      </section>

      {/* 1.5 CLIENT LOGO MARQUEE */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-gray-50 py-12 border-y border-gray-100 overflow-hidden flex items-center"
      >
        <div className="animate-marquee flex items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-400 mx-12 uppercase tracking-widest font-sans">Nike</span>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-400 mx-12 uppercase tracking-widest font-serif italic">Red Bull</span>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-400 mx-12 uppercase tracking-widest font-sans">Porsche</span>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-400 mx-12 uppercase tracking-widest font-sans">Samsung</span>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-400 mx-12 uppercase tracking-widest font-serif italic">Adidas</span>
              <span className="text-3xl md:text-4xl font-extrabold text-gray-400 mx-12 uppercase tracking-widest font-sans">L'Oréal</span>
            </React.Fragment>
          ))}
        </div>
      </motion.section>

      {/* 1.8 SOCIAL MEDIA MARKETING VIDEO SHOWREEL (REMOTION) */}
      <section className="py-20 sm:py-28 px-6 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-blob-blue opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-extrabold uppercase tracking-wider border border-brand-pink/20 font-sans">
              <StarsBoldDuotoneIcon className="w-3.5 h-3.5" />
              <span>{language === 'tr' ? 'Sosyal Medya Showreel' : 'Social Marketing Reel'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight font-sans">
              {language === 'tr' ? 'Sosyal Medya Pazarlama & Prodüksiyon' : 'Social Media Marketing & Production'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <React.Suspense fallback={<div className="aspect-[9/16] w-full max-w-[360px] sm:max-w-[400px] md:max-w-[430px] mx-auto rounded-[28px] sm:rounded-[36px] bg-gray-900/60 animate-pulse" />}>
              <BrandShowreelPlayer />
            </React.Suspense>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR CASES (CINEMATIC CAROUSEL WITH SERVICE LINKS) */}
      <section className="py-28 md:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blob-blue opacity-10 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-bold tracking-wider uppercase mb-3">
                <CrownStarBoldDuotoneIcon className="w-3.5 h-3.5" />
                <span>{language === 'tr' ? 'Seçkin Portfolyo & Hizmet Eşleşmesi' : 'Featured Cases & Disciplines'}</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 font-sans">
                {language === 'tr' ? 'Projelerimiz' : 'Our cases'}
              </h2>
            </div>
            <p className="max-w-md text-gray-500 font-medium leading-relaxed text-sm sm:text-base md:text-right">
              {language === 'tr' 
                ? 'Her görsel ve film, markanıza özel kreatif bir prodüksiyon disipliniyle şekillenir. Fotoğrafa veya etikete tıklayarak doğrudan ilgili hizmete gidin.' 
                : 'Every film and still is anchored in a specialized creative discipline. Click any photo or service tag to explore that service.'}
            </p>
          </motion.div>

          {/* Carousel Stage Track */}
          <div className="relative w-full h-[520px] sm:h-[580px] md:h-[620px] flex items-center justify-center">
            {/* Left Sliding Button - Prominent & Eye-Level Visible (Desktop/Tablet) */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="hidden sm:flex absolute left-2 sm:left-3 md:left-5 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-gray-950 text-gray-900 hover:text-white border border-gray-200/90 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_45px_-8px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-90 transition-all duration-200 items-center justify-center cursor-pointer pointer-events-auto group focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <AltArrowLeftBoldDuotoneIcon size={26} className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            </button>

            {/* Right Sliding Button - Prominent & Eye-Level Visible (Desktop/Tablet) */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="hidden sm:flex absolute right-2 sm:right-3 md:right-5 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-gray-950 text-gray-900 hover:text-white border border-gray-200/90 shadow-[0_12px_36px_-8px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_45px_-8px_rgba(0,0,0,0.35)] hover:scale-110 active:scale-90 transition-all duration-200 items-center justify-center cursor-pointer pointer-events-auto group focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <AltArrowRightBoldDuotoneIcon size={26} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            <AnimatePresence initial={false} mode="sync">
              {featuredProjects.map((project, idx) => {
                const isActive = idx === currentSlide;
                const isPrev = idx === (currentSlide - 1 + featuredProjects.length) % featuredProjects.length;
                const isNext = idx === (currentSlide + 1) % featuredProjects.length;
                
                if (!isActive && !isPrev && !isNext) return null;

                const serviceInfo = getServiceForProject(project);
                const ServiceIcon = serviceInfo.icon;

                const initialX = isPrev ? '-75%' : isNext ? '75%' : '0%';
                const exitX = direction >= 0 ? '-75%' : '75%';

                return (
                  <motion.div
                    key={project.id}
                    initial={{
                      scale: 0.85,
                      opacity: 0,
                      x: initialX,
                    }}
                    animate={{
                      scale: isActive ? 1 : 0.88,
                      opacity: isActive ? 1 : 0.45,
                      x: isActive ? '0%' : isPrev ? '-60%' : '60%',
                      zIndex: isActive ? 30 : 10,
                    }}
                    exit={{
                      scale: 0.84,
                      opacity: 0,
                      x: exitX,
                      zIndex: 0,
                      transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      willChange: 'transform, opacity',
                    }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.16}
                    onDragEnd={(_e, { offset, velocity }) => {
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -80 || offset.x < -60) nextSlide();
                      else if (swipe > 80 || offset.x > 60) prevSlide();
                    }}
                    className={`absolute w-[94%] sm:w-[86%] md:w-[78%] max-w-[940px] h-full rounded-2xl sm:rounded-3xl md:rounded-[40px] bg-white border border-gray-200/90 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] p-3.5 sm:p-6 md:p-8 flex flex-col justify-between select-none ${
                      isActive ? 'cursor-default pointer-events-auto' : 'cursor-pointer hover:opacity-75'
                    }`}
                    onClick={() => {
                      if (!isActive) {
                        if (isPrev) prevSlide();
                        else if (isNext) nextSlide();
                      }
                    }}
                  >
                    {/* Visual Media Viewport - Direct Link to Services */}
                    <div 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToService(serviceInfo.id);
                      }}
                      className="relative w-full aspect-[16/10] sm:aspect-[2/1] md:aspect-[16/8] rounded-xl sm:rounded-2xl md:rounded-[28px] overflow-hidden group cursor-pointer shadow-md bg-gray-950"
                      title={language === 'tr' ? `${serviceInfo.name[language]} hizmet sayfasına git` : `View ${serviceInfo.name[language]} service`}
                    >
                      <img 
                        loading="eager" 
                        decoding="async" 
                        draggable={false}
                        src={project.thumbnail} 
                        alt={project.title[language]}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none" 
                      />
                      
                      {/* Cinema Vignette & Gradients */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/20 to-black/30 pointer-events-none group-hover:from-gray-950/75 transition-colors" />

                      {/* Top-Left Floating Service Link Badge */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToService(serviceInfo.id);
                        }}
                        className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/60 hover:bg-brand-blue backdrop-blur-md border border-white/25 text-white text-[11px] sm:text-xs font-bold shadow-lg transition-all duration-300 group/badge cursor-pointer"
                      >
                        <ServiceIcon size={14} className="text-white shrink-0" />
                        <span className="truncate max-w-[110px] xs:max-w-[140px] sm:max-w-none">{serviceInfo.name[language]}</span>
                        <ArrowRightUpBoldIcon size={14} className="text-white/80 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5 transition-transform shrink-0" />
                      </button>

                      {/* Top-Right Technical Spec Badge */}
                      <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-sm">
                        <span className="truncate max-w-[90px] xs:max-w-none">{project.specs?.camera ? project.specs.camera.split('+')[0].trim() : 'Cinema Master'}</span>
                        <span className="text-white/40">•</span>
                        <span>{project.year}</span>
                      </div>

                      {/* Center Hover Reveal: Explore Service Page Pill */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-gray-950 font-bold text-xs uppercase tracking-wider shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowRightUpBoldIcon size={18} className="text-brand-blue" />
                          <span>{language === 'tr' ? 'Hizmet Sayfasına Git' : 'Explore Service'}</span>
                        </div>
                      </div>

                      {/* Bottom Tag Overlay on Image */}
                      <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
                          {serviceInfo.tag[language]}
                        </span>
                      </div>
                    </div>

                    {/* Metadata & Actions Bar */}
                    <div className="pt-3 sm:pt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-1 sm:space-y-1.5 max-w-xl">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue font-sans">
                            {project.client}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-xs font-semibold text-gray-500">
                            {project.productionType[language]}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight font-sans line-clamp-1">
                          {project.title[language]}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed line-clamp-2">
                          {project.description[language]}
                        </p>
                      </div>

                      {/* Action CTAs */}
                      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 pt-1 md:pt-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigateToService(serviceInfo.id);
                          }}
                          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gray-950 hover:bg-black text-white text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans"
                        >
                          <span>{language === 'tr' ? 'Hizmeti Keşfet' : 'Explore Service'}</span>
                          <ArrowRightUpBoldIcon size={18} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>

                        {project.videoUrl && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProject(project);
                            }}
                            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold border border-gray-200 hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans"
                          >
                            <PlayBoldDuotoneIcon size={14} className="text-gray-900" />
                            <span>{language === 'tr' ? 'Filmi İzle' : 'Watch Film'}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom Navigation Dots & Counter */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2.5 sm:gap-3.5">
            {/* Mobile Prev Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="flex sm:hidden w-10 h-10 rounded-full bg-white border border-gray-200/90 shadow-sm items-center justify-center text-gray-900 active:scale-90 transition-transform cursor-pointer shrink-0"
            >
              <AltArrowLeftBoldDuotoneIcon size={20} />
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2 bg-gray-100/90 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-full border border-gray-200/60 shadow-inner">
              {featuredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-7 sm:w-8 h-2.5 bg-gray-950 rounded-full'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Next Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex sm:hidden w-10 h-10 rounded-full bg-white border border-gray-200/90 shadow-sm items-center justify-center text-gray-900 active:scale-90 transition-transform cursor-pointer shrink-0"
            >
              <AltArrowRightBoldDuotoneIcon size={20} />
            </button>

            <div className="text-xs font-bold text-gray-400 font-sans tracking-wider ml-1">
              0{currentSlide + 1} / 0{featuredProjects.length}
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES (INTERACTIVE SCROLL-LINKED STACK) */}
      <section ref={servicesRef} className="py-20 sm:py-28 md:py-36 bg-gray-50/70 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-12 sm:space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {t.servicesOverview.tag}
            </h2>
            <p className="text-gray-500 font-medium max-w-lg mx-auto text-sm sm:text-base md:text-lg">
              {language === 'tr' 
                ? 'Fikirden nihai yayına kadar uçtan uca prodüksiyon gücü.' 
                : 'End-to-end production mastery from initial spark to final delivery.'}
            </p>
          </motion.div>

          <div className="relative flex flex-col items-center max-w-3xl mx-auto space-y-5 sm:space-y-8">
            {/* Card 1 - Light Blue / Strategy */}
            <motion.div 
              style={{ y: yCard1 }}
              className="w-full relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                onClick={() => {
                  setCurrentPage('services');
                }}
                className="w-full bg-brand-light-blue rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 text-left shadow-lg cursor-pointer border-2 border-white transition-shadow hover:shadow-2xl group"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white text-brand-blue text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                    <LightbulbBoldDuotoneIcon className="w-4 h-4" />
                    <span>01 • {language === 'tr' ? 'STRATEJİ' : 'STRATEGY'}</span>
                  </div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-110 shrink-0">
                    <ArrowRightUpBoldIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-3 sm:mb-4">
                  01 {language === 'tr' ? 'Fikir & Strateji' : 'Concept & Strategy'}
                </h3>
                <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                  {t.process.steps[0].desc}
                </p>
              </motion.div>
            </motion.div>

            {/* Card 2 - White / Production */}
            <motion.div 
              style={{ y: yCard2 }}
              className="w-full relative z-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                onClick={() => {
                  setCurrentPage('services');
                }}
                className="w-full bg-white rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 text-left shadow-xl cursor-pointer border-2 border-gray-100 transition-shadow hover:shadow-2xl group"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-gray-100 text-gray-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                    <VideocameraRecordBoldDuotoneIcon className="w-4 h-4 text-brand-blue" />
                    <span>02 • {language === 'tr' ? 'PRODÜKSİYON' : 'PRODUCTION'}</span>
                  </div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gray-100 text-gray-900 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-110 shrink-0">
                    <ArrowRightUpBoldIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  02 {language === 'tr' ? 'Prodüksiyon' : 'Production'}
                </h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                  {t.process.steps[2].desc}
                </p>
              </motion.div>
            </motion.div>

            {/* Card 3 - Brand Pink / Post-Production */}
            <motion.div 
              style={{ y: yCard3 }}
              className="w-full relative z-30"
            >
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02, y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
                onClick={() => {
                  setCurrentPage('services');
                }}
                className="w-full bg-brand-pink rounded-2xl sm:rounded-3xl md:rounded-[40px] p-6 sm:p-8 md:p-12 text-left shadow-2xl cursor-pointer border-2 border-white/20 transition-shadow hover:shadow-[0_25px_50px_-12px_rgba(255,51,102,0.4)] group"
              >
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                    <LayersMinimalisticBoldDuotoneIcon className="w-4 h-4" />
                    <span>03 • {language === 'tr' ? 'KURGU & DAĞITIM' : 'POST-PRODUCTION'}</span>
                  </div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-brand-pink transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-110 backdrop-blur-sm shrink-0">
                    <ArrowRightUpBoldIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  03 {language === 'tr' ? 'Kurgu & Dağıtım' : 'Post-Production'}
                </h3>
                <p className="text-white/95 font-medium text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                  {t.process.steps[3].desc}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 3.8 ARTISTIC OPTICAL STUDIES & GRAPHIC SHOTS */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <React.Suspense fallback={<div className="min-h-[400px] w-full max-w-[1400px] mx-auto rounded-3xl bg-gray-50 animate-pulse" />}>
            <ArtisticPhotoGallery />
          </React.Suspense>
        </motion.div>
      </section>

      {/* 4. NUMBERS THAT SPEAK */}
      <section className="py-20 sm:py-32 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-blob-blue opacity-25 pointer-events-none" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-12 sm:space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 sm:space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {language === 'tr' ? 'Konuşan Rakamlar' : 'Numbers that speak'}
            </h2>
            <p className="text-gray-500 font-medium max-w-md mx-auto text-sm sm:text-base md:text-lg">
              {language === 'tr' 
                ? 'Strateji, tasarım ve büyüme genelindeki etkimizi kanıtlayan etkileyici metrikler.' 
                : 'Impressive metrics that prove our effectiveness across strategy, production, and growth.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 md:gap-8">
            {[
              { value: '50M+', label: t.hero.metrics.views, color: 'text-brand-blue', bg: 'bg-brand-light-blue/40' },
              { value: '140+', label: t.hero.metrics.productions, color: 'text-gray-900', bg: 'bg-gray-50' },
              { value: '45+', label: t.hero.metrics.brands, color: 'text-brand-pink', bg: 'bg-brand-light-pink/40' },
              { value: '4K+', label: t.hero.metrics.quality, color: 'text-gray-900', bg: 'bg-gray-50' },
            ].map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 160,
                  damping: 18,
                  delay: idx * 0.12
                }}
                whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.2 } }}
                className={`space-y-2 sm:space-y-3 p-5 sm:p-8 rounded-2xl sm:rounded-3xl ${metric.bg} border-2 border-white shadow-sm transition-all hover:shadow-xl cursor-default`}
              >
                <div className={`text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-[11px] sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL BIG CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto relative rounded-2xl sm:rounded-3xl md:rounded-[48px] overflow-hidden bg-brand-light-pink py-12 px-5 sm:py-20 sm:px-8 md:px-16 text-center shadow-soft"
        >
          <div className="absolute inset-0 bg-blob-pink opacity-80" />
          <div className="absolute inset-0 grain-overlay opacity-30" />
          
          <div className="relative z-10 space-y-8 sm:space-y-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15]">
              {t.homeCta.part1} <span className="inline-flex items-center justify-center bg-brand-pink text-white w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-xl sm:rounded-2xl -rotate-6 mx-1 sm:mx-2 shadow-lg align-middle"><HeartBoldDuotoneIcon className="w-5 h-5 sm:w-8 sm:h-8 text-white" /></span> {t.homeCta.part2} <span className="inline-flex items-center justify-center bg-brand-light-blue text-brand-blue w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-xl sm:rounded-2xl rotate-6 mx-1 sm:mx-2 align-middle"><StarsBoldDuotoneIcon className="w-5 h-5 sm:w-8 sm:h-8 text-brand-blue" /></span> {t.homeCta.part3}
            </h2>
            
            <div>
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold bg-brand-blue text-white hover:bg-brand-blue-hover transition-all shadow-[0_8px_20px_-6px_rgba(43,82,255,0.5)] active:scale-95 hover:scale-105 cursor-pointer"
              >
                {t.homeCta.button}
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
