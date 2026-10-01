import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CameraMinimalisticBoldDuotoneIcon, 
  MaximizeSquareBoldDuotoneIcon, 
  CloseCircleBoldDuotoneIcon, 
  HeartBoldDuotoneIcon, 
  StarBoldDuotoneIcon, 
  MapPointBoldDuotoneIcon, 
  VideoFrameBoldDuotoneIcon, 
  ArrowRightUpBoldIcon,
  StarsBoldDuotoneIcon, 
  AltArrowDownBoldDuotoneIcon,
  CameraRotateBoldDuotoneIcon 
} from '@solar-icons/react';
import { useLanguage } from '../../context/LanguageContext';

export interface PhotoItem {
  id: string;
  titleEn: string;
  titleTr: string;
  category: 'jewelry' | 'fashion' | 'macro';
  categoryLabelEn: string;
  categoryLabelTr: string;
  imageSrc: string;
  aspect: string;
  lensSpec: string;
  lightingSpec: string;
  subjectDetailEn: string;
  subjectDetailTr: string;
  filmStock: string;
  locationEn: string;
  locationTr: string;
  rating: string;
}

const photoItems: PhotoItem[] = [
  {
    id: 'akdingold-editorial-portrait',
    titleEn: 'Akdin Gold Haute Joaillerie Portrait',
    titleTr: 'Akdin Gold Yüksek Mücevher Portresi',
    category: 'jewelry',
    categoryLabelEn: 'Haute Jewelry',
    categoryLabelTr: 'Yüksek Mücevher',
    imageSrc: '/media/photography/akdingold-editorial-high-fashion-portrait.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: 'Sony 85mm G Master • f/1.4',
    lightingSpec: 'Sculpted Studio Key & Ambient Gold Rim',
    subjectDetailEn: 'Full-frame studio portraiture showcasing Akdin Gold handcrafted choker and cuffs with authentic skin texture.',
    subjectDetailTr: 'Akdin Gold el işçiliği kolye ve bilezikleri sergileyen yüksek çözünürlüklü editoryal stüdyo portresi.',
    filmStock: 'Sony CineAlta Venice Profile',
    locationEn: 'Istanbul, Akdin Atelier',
    locationTr: 'İstanbul, Akdin Atölyesi',
    rating: '5.0',
  },
  {
    id: 'akdingold-solena-lookbook',
    titleEn: 'Akdin Gold Solena Choker & Cuff Lookbook',
    titleTr: 'Akdin Gold Solena Kolye & Kelepçe Lookbook',
    category: 'jewelry',
    categoryLabelEn: 'Jewelry Lookbook',
    categoryLabelTr: 'Mücevher Lookbook',
    imageSrc: '/media/photography/akdingold-solena-choker-and-cuff-lookbook.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '50mm Macro Prime • f/2.0',
    lightingSpec: 'Clean Luxury Jewelry Studio Lighting',
    subjectDetailEn: 'High fashion lookbook shot capturing Solena signature gold choker and matching cuff set.',
    subjectDetailTr: 'Solena altın kolye ve kelepçe setinin zarafetini vurgulayan katalog çekimi.',
    filmStock: 'Digital Medium Format',
    locationEn: 'Istanbul, Fashion Atelier',
    locationTr: 'İstanbul, Moda Atölyesi',
    rating: '5.0',
  },
  {
    id: 'still-shoes-leather-boots',
    titleEn: 'Still Shoes Fold-Over Leather Boots',
    titleTr: 'Still Shoes Katlamalı Hakiki Deri Çizme',
    category: 'fashion',
    categoryLabelEn: 'Fashion Editorial',
    categoryLabelTr: 'Moda Editoryali',
    imageSrc: '/media/photography/still-shoes-leather-ankle-boots-editorial.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '35mm Prime • f/1.8',
    lightingSpec: 'Directional Studio Flash & Velvet Shadows',
    subjectDetailEn: 'Genuine black leather fold-over knee boots styled with contemporary outerwear.',
    subjectDetailTr: 'Siyah hakiki deri katlamalı çizme ve modern dış giyim kombinasyonuyla stüdyo moda çekimi.',
    filmStock: 'Kodak Portra 160',
    locationEn: 'Istanbul, Fashion District',
    locationTr: 'İstanbul, Moda Bölgesi',
    rating: '4.9',
  },
  {
    id: 'still-shoes-rhinestone-boots',
    titleEn: 'Still Shoes Rhinestone Sparkle Boots & Fur',
    titleTr: 'Still Shoes Işıltılı Taşlı Bot & Kürk',
    category: 'fashion',
    categoryLabelEn: 'Lookbook Stills',
    categoryLabelTr: 'Lookbook Çekimi',
    imageSrc: '/media/photography/still-shoes-rhinestone-boots-fur-lookbook.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '50mm Art Lens • f/1.4',
    lightingSpec: 'Multi-Angle Sparkle Glint Lighting',
    subjectDetailEn: 'Rhinestone crystal sock boots paired with leopard fur outerwear in an editorial lookbook.',
    subjectDetailTr: 'Leopar kürk kaban ile kombinlenmiş kristal taşlı çorap botların ışıltılı lookbook çekimi.',
    filmStock: 'Cinestill 400D',
    locationEn: 'Istanbul, Studio Loft',
    locationTr: 'İstanbul, Stüdyo Loft',
    rating: '4.9',
  },
  {
    id: 'still-shoes-chunky-sneakers',
    titleEn: 'Still Shoes Chunky Urban Sneaker Drop',
    titleTr: 'Still Shoes Kalıp Taban Sokak Modası Sneaker',
    category: 'fashion',
    categoryLabelEn: 'Streetwear Stills',
    categoryLabelTr: 'Sokak Modası',
    imageSrc: '/media/photography/still-shoes-chunky-sneakers-urban-style.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '24-70mm G Master • f/2.8',
    lightingSpec: 'High-Key Commercial Studio Profile',
    subjectDetailEn: 'Contemporary suede and leather platform sneaker styling for the urban streetwear drop.',
    subjectDetailTr: 'Kalıp taban süet sneaker sokak modası lansmanı için çekilmiş yüksek detaylı ürün editoryali.',
    filmStock: 'Kodak Ektar 100',
    locationEn: 'Istanbul, Streetwear Atelier',
    locationTr: 'İstanbul, Sokak Modası Atölyesi',
    rating: '4.9',
  },
  {
    id: 'akdingold-complete-set',
    titleEn: 'Akdin Gold Complete Haute Jewelry Suite',
    titleTr: 'Akdin Gold Komple Yüksek Mücevher Seti',
    category: 'macro',
    categoryLabelEn: 'Jewelry Suite',
    categoryLabelTr: 'Mücevher Seti',
    imageSrc: '/media/photography/akdingold-complete-jewelry-set-portrait.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '90mm Macro • f/2.8',
    lightingSpec: 'Precision Diffused Jewelry Tent',
    subjectDetailEn: 'Complete bridal and luxury gold suite including necklace, drop earrings, cuff, and ring.',
    subjectDetailTr: 'Kolye, küpe, kelepçe ve yüzükten oluşan komple altın mücevher setinin stüdyo portresi.',
    filmStock: 'Fujifilm Provia 100F',
    locationEn: 'Istanbul, Akdin Atelier',
    locationTr: 'İstanbul, Akdin Atölyesi',
    rating: '5.0',
  },
  {
    id: 'akdingold-hasir-wrist',
    titleEn: 'Akdin Gold Trabzon Hasırı Wrist Macro',
    titleTr: 'Akdin Gold Trabzon Hasırı Bilek Makrosu',
    category: 'macro',
    categoryLabelEn: 'Craft Macro',
    categoryLabelTr: 'Zanaat Makrosu',
    imageSrc: '/media/photography/akdingold-hasir-kelepce-wrist-macro.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '100mm Macro • f/4.0',
    lightingSpec: 'Directional Specular Glint Highlight',
    subjectDetailEn: 'Close-up macro detail of the handcrafted gold mesh weave on model wrist.',
    subjectDetailTr: 'Modelin bileğinde sergilenen el örgüsü altın hasır dokusunun makro zanaat detayı.',
    filmStock: 'Kodak Gold 200',
    locationEn: 'Istanbul, Akdin Studio',
    locationTr: 'İstanbul, Akdin Stüdyosu',
    rating: '5.0',
  },
  {
    id: 'akdingold-ring-macro',
    titleEn: 'Akdin Gold Filigree Floral Ring Macro',
    titleTr: 'Akdin Gold Telkari Çiçek Yüzük Makrosu',
    category: 'macro',
    categoryLabelEn: 'Detail Macro',
    categoryLabelTr: 'Detay Makrosu',
    imageSrc: '/media/photography/akdingold-filigree-ring-macro.jpg',
    aspect: 'aspect-[3/4]',
    lensSpec: '90mm Macro 1:1 • f/5.6',
    lightingSpec: 'Micro Spot & Gold Deflection',
    subjectDetailEn: 'Extreme macro close-up of gold filigree flower ring petals and central gemstone setting.',
    subjectDetailTr: 'Altın telkari çiçek motifli yüzüğün taç yaprakları ve taş yuvasını gösteren aşırı makro çekim.',
    filmStock: 'Kodak Portra 400',
    locationEn: 'Istanbul, Akdin Atelier',
    locationTr: 'İstanbul, Akdin Atölyesi',
    rating: '5.0',
  },
];

export const ArtisticPhotoGallery: React.FC = () => {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'jewelry' | 'fashion' | 'macro'>('all');
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [savedPhotos, setSavedPhotos] = useState<Record<string, boolean>>({});

  const filterOptions = [
    { key: 'all', labelEn: `All Stills (${photoItems.length})`, labelTr: `Tüm Fotoğraflar (${photoItems.length})` },
    { key: 'jewelry', labelEn: 'Akdin Gold Haute Jewelry', labelTr: 'Akdin Gold Mücevher' },
    { key: 'fashion', labelEn: 'Still Shoes & Fashion', labelTr: 'Still Shoes Moda & Bot' },
    { key: 'macro', labelEn: 'Macro & Craft Details', labelTr: 'Zanaat & Makro Detay' },
  ];

  const filteredPhotos = selectedFilter === 'all' 
    ? photoItems 
    : photoItems.filter(item => item.category === selectedFilter);

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
        <div className="space-y-3 sm:space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <CameraRotateBoldDuotoneIcon className="w-3.5 h-3.5 animate-spin-slow" />
            <span>{language === 'tr' ? `${photoItems.length} SEÇKİN KARE // MÜŞTERİ ARŞİVİ` : `${photoItems.length} CURATED FRAMES // CLIENT ARCHIVE`}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-tight">
            {language === 'tr' ? (
              <>Editoryal Fotoğrafçılık & <span className="text-gradient">Moda Serisi</span></>
            ) : (
              <>Editorial Stills & <span className="text-gradient">Fashion Series</span></>
            )}
          </h2>

          <p className="text-gray-600 text-xs sm:text-base leading-relaxed">
            {language === 'tr' 
              ? `Akdin Gold yüksek mücevher portrelerinden Still Shoes sokak modası ve lüks lookbook serilerine uzanan ${photoItems.length} parçalık orijinal stüdyo ve editoryal fotoğraf arşivi.`
              : `From Akdin Gold haute joaillerie portraits to Still Shoes contemporary lookbooks and macro jewelry crafts. An authentic ${photoItems.length}-frame client editorial stills archive.`}
          </p>
        </div>

        {/* Real Production Guarantee Badge */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-white border border-gray-200/80 shadow-sm text-[11px] sm:text-xs text-gray-700 font-sans font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{language === 'tr' ? '%100 GERÇEK MÜŞTERİ ÇEKİMLERİ' : '100% REAL CLIENT PRODUCTIONS'}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl bg-gray-900 text-white shadow-sm text-[11px] sm:text-xs font-sans font-bold">
            <CameraMinimalisticBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink" />
            <span>{filteredPhotos.length} {language === 'tr' ? 'Fotoğraf Yayında' : 'Photos Live'}</span>
          </div>
        </div>
      </div>

      {/* Floating Style Filter Tabs - Mobile Edge-to-Edge Scrollable */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-10 scrollbar-none">
        <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 rounded-full bg-white/85 backdrop-blur-2xl border border-gray-200/80 shadow-sm shrink-0">
          {filterOptions.map(tab => {
            const isActive = selectedFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setSelectedFilter(tab.key as any);
                  setVisibleCount(12);
                }}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer outline-none select-none ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-950'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryFilterPill"
                    className="absolute inset-0 rounded-full bg-gray-950 shadow-md shadow-black/20"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">
                  {language === 'tr' ? tab.labelTr : tab.labelEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 
        Artistic Gallery Grid:
        - Full bleed photography
        - No harsh black border lines (soft rounded-[32px])
        - Top bar: Frosted glass category badge + Floating frosted glass heart button
        - Bottom: Soft continuous black gradient without harsh backdrop-blur cut
        - Smooth popLayout animation without jumping or popping
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {displayedPhotos.map((photo) => {
            const isSaved = !!savedPhotos[photo.id];

            return (
              <motion.div
                layout="position"
                key={photo.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  layout: { type: 'spring', stiffness: 350, damping: 28 },
                  opacity: { duration: 0.25 },
                  scale: { duration: 0.25 }
                }}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gray-950 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.28)] hover:-translate-y-1 transition-all duration-500 cursor-pointer aspect-[3/4] select-none"
              >
                {/* 1. Full-Bleed Media */}
                <img
                  src={photo.imageSrc}
                  alt={language === 'tr' ? photo.titleTr : photo.titleEn}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Subtle Gradient */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none" />

                {/* 2. Top Header Bar: Clean Frosted Pill + Floating Frosted Heart Button */}
                <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between z-20 pointer-events-none">
                  {/* Category Pill with Bold Mini Text */}
                  <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md text-white border border-white/15 shadow-sm">
                    {language === 'tr' ? photo.categoryLabelTr : photo.categoryLabelEn}
                  </span>

                  {/* Top-Right Floating Heart Button (Interactive) */}
                  <button
                    onClick={(e) => toggleSave(photo.id, e)}
                    className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/40 hover:bg-white/60 backdrop-blur-md text-white flex items-center justify-center transition-all duration-200 shadow-lg active:scale-90 cursor-pointer"
                    aria-label="Save frame"
                  >
                    <HeartBoldDuotoneIcon
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                        isSaved ? 'text-brand-pink scale-110' : 'text-white'
                      }`}
                    />
                  </button>
                </div>

                {/* Center Maximize Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center shadow-2xl border border-white/20 transform group-hover:scale-110 transition-transform">
                    <MaximizeSquareBoldDuotoneIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* 
                  3. Bottom Content Box:
                  - Smooth continuous gradient from black/95 via black/60 to transparent
                  - Eliminates the harsh horizontal blur boundary cutting images in half
                  - Clean bold mini text typography
                */}
                <div className="absolute inset-x-0 bottom-0 pt-28 sm:pt-36 pb-4 sm:pb-6 px-4 sm:px-7 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end text-white z-20 space-y-2 sm:space-y-2.5">
                  {/* Row 1: Title & Star Rating */}
                  <div className="flex items-start justify-between gap-2.5">
                    <h3 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight group-hover:text-brand-light-blue transition-colors line-clamp-1 font-sans">
                      {language === 'tr' ? photo.titleTr : photo.titleEn}
                    </h3>

                    <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-amber-400 bg-black/40 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/10 shrink-0 font-sans">
                      <StarBoldDuotoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                      <span>{photo.rating}</span>
                    </div>
                  </div>

                  {/* Row 2: Location with Icon in Bold Mini Text */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-300 font-bold font-sans">
                    <MapPointBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                    <span className="truncate">{language === 'tr' ? photo.locationTr : photo.locationEn}</span>
                  </div>

                  {/* Row 3: Micro-Specs with Icons & Bold Mini Text */}
                  <div className="flex items-center gap-2.5 sm:gap-3.5 text-[10px] sm:text-[11px] font-sans font-semibold text-gray-300/90 pt-0.5">
                    <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                      <CameraMinimalisticBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span className="truncate">{photo.lensSpec}</span>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-1.5 truncate">
                      <VideoFrameBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                      <span className="truncate">{photo.filmStock}</span>
                    </div>
                  </div>

                  {/* Row 4: Authentic Still Badge + White Pill Button */}
                  <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-400 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{language === 'tr' ? 'Orijinal Çekim' : 'Real Client Still'}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhoto(photo);
                      }}
                      className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-gray-950 font-bold text-[11px] sm:text-xs hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl flex items-center gap-1 sm:gap-1.5 shrink-0 cursor-pointer font-sans group/btn"
                    >
                      <span>{language === 'tr' ? 'İncele' : 'Inspect'}</span>
                      <ArrowRightUpBoldIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-950 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Load More Button if remaining */}
      {hasMore && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="group px-8 py-3.5 rounded-full bg-gray-950 text-white font-bold text-sm shadow-xl hover:bg-black hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <StarsBoldDuotoneIcon className="w-4 h-4 text-brand-pink" />
            <span>
              {language === 'tr' 
                ? `Daha Fazla Göster (${filteredPhotos.length - visibleCount} Kare Kaldı)` 
                : `Load More Frames (${filteredPhotos.length - visibleCount} Remaining)`}
            </span>
            <AltArrowDownBoldDuotoneIcon className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Lightbox Modal - Luminous Frosted Liquid Glass Theme */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/60 backdrop-blur-2xl"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-3xl border border-white/90 rounded-2xl sm:rounded-[36px] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.18),0_0_1px_1px_rgba(255,255,255,0.9)] ring-1 ring-black/[0.04] flex flex-col md:flex-row text-gray-900"
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-gray-950 flex items-center justify-center border border-white/70 shadow-md backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-90"
                aria-label="Close"
              >
                <CloseCircleBoldDuotoneIcon className="w-5 h-5" />
              </button>

              {/* Lightbox Image Stage with Subtle Frosted Frame */}
              <div className="md:w-3/5 bg-gradient-to-b from-gray-100/90 via-gray-50/70 to-gray-100/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 relative overflow-hidden shrink-0">
                {/* Soft ambient color glows behind the photo */}
                <div className="absolute w-72 h-72 rounded-full bg-brand-pink/15 blur-3xl pointer-events-none -top-10 -left-10" />
                <div className="absolute w-72 h-72 rounded-full bg-brand-blue/15 blur-3xl pointer-events-none -bottom-10 -right-10" />

                <img
                  src={activePhoto.imageSrc}
                  alt={language === 'tr' ? activePhoto.titleTr : activePhoto.titleEn}
                  className="max-h-[42vh] sm:max-h-[55vh] md:max-h-[72vh] w-auto max-w-full object-contain rounded-xl sm:rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.22)] ring-1 ring-black/5 relative z-10"
                />
              </div>

              {/* Lightbox Details Panel - Modern Frosted Glass */}
              <div className="md:w-2/5 p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 bg-white/80 backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/60 text-gray-900">
                <div className="space-y-3 sm:space-y-4">
                  {/* Modern Category & Production Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider bg-brand-pink/10 text-brand-pink border border-brand-pink/20 shadow-sm">
                      {language === 'tr' ? activePhoto.categoryLabelTr : activePhoto.categoryLabelEn}
                    </span>
                    <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/80 shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{language === 'tr' ? 'ORİJİNAL ÇEKİM' : 'REAL PRODUCTION'}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-black tracking-tight text-gray-950 font-sans leading-tight">
                    {language === 'tr' ? activePhoto.titleTr : activePhoto.titleEn}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 font-sans">
                    <MapPointBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                    <span>{language === 'tr' ? activePhoto.locationTr : activePhoto.locationEn}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                    {language === 'tr' ? activePhoto.subjectDetailTr : activePhoto.subjectDetailEn}
                  </p>
                </div>

                {/* Tech Specs Sheet - Ultra Clean Minimalist Design */}
                <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 border-t border-gray-100 text-[11px] sm:text-xs font-sans">
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-wider">OPTICAL SETUP</span>
                    <span className="text-brand-blue font-bold tracking-tight">{activePhoto.lensSpec}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-wider">LIGHTING & EXPOSURE</span>
                    <span className="text-gray-900 text-right font-bold tracking-tight">{activePhoto.lightingSpec}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-gray-100">
                    <span className="text-gray-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-wider">FILM STOCK</span>
                    <span className="text-brand-pink font-bold tracking-tight">{activePhoto.filmStock}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-wider">PRODUCTION ARCHIVE</span>
                    <span className="text-emerald-600 font-bold tracking-tight">{language === 'tr' ? 'ORİJİNAL PERİ ARŞİVİ' : 'ORIGINAL PERI ARCHIVE'}</span>
                  </div>
                </div>

                {/* Action Button: Sleek Modern Dark Pill */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-gray-950 hover:bg-black text-white font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-gray-950/15 cursor-pointer font-sans"
                >
                  {language === 'tr' ? 'Önizlemeyi Kapat' : 'Close Preview'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
