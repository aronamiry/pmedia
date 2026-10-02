import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import { motion } from 'framer-motion';
import { 
  LayersMinimalisticBoldDuotoneIcon,
  TvBoldDuotoneIcon,
  ShareCircleBoldDuotoneIcon,
  StarsBoldDuotoneIcon,
  BoxMinimalisticBoldDuotoneIcon,
  CameraMinimalisticBoldDuotoneIcon,
  SmartphoneBoldDuotoneIcon,
  CalendarBoldDuotoneIcon,
  ClapperboardPlayBoldDuotoneIcon,
  ArrowRightUpBoldIcon,
  PlayBoldDuotoneIcon
} from '@solar-icons/react';

interface WorksPageProps {
  onSelectProject: (project: Project) => void;
  onOpenContact: () => void;
}

export const WorksPage: React.FC<WorksPageProps> = ({ onSelectProject, onOpenContact }) => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const filterKeys: { 
    key: ProjectCategory; 
    label: string; 
    icon: React.ComponentType<{ className?: string; size?: string | number }> 
  }[] = [
    { key: 'all', label: t.worksPage.filters.all, icon: LayersMinimalisticBoldDuotoneIcon },
    { key: 'commercials', label: t.worksPage.filters.commercials, icon: TvBoldDuotoneIcon },
    { key: 'social', label: t.worksPage.filters.social, icon: ShareCircleBoldDuotoneIcon },
    { key: 'brand', label: t.worksPage.filters.brand, icon: StarsBoldDuotoneIcon },
    { key: 'product', label: t.worksPage.filters.product, icon: BoxMinimalisticBoldDuotoneIcon },
    { key: 'photography', label: t.worksPage.filters.photography, icon: CameraMinimalisticBoldDuotoneIcon },
    { key: 'reels', label: t.worksPage.filters.reels, icon: SmartphoneBoldDuotoneIcon },
    { key: 'events', label: t.worksPage.filters.events, icon: CalendarBoldDuotoneIcon },
  ];

  const getCategoryCount = (key: ProjectCategory) => {
    if (key === 'all') return projectsData.length;
    return projectsData.filter((p) => p.category === key).length;
  };

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const verticalProjects = projectsData.filter(
    (p) => p.category === 'reels' || p.category === 'social' || p.aspectRatio === '9:16'
  );

  return (
    <div className="pt-28 sm:pt-40 pb-16 sm:pb-20 space-y-12 sm:space-y-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10">
      {/* 1. HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 sm:space-y-6 max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-gray-200 text-[11px] sm:text-xs font-bold text-gray-500 shadow-sm">
          <ClapperboardPlayBoldDuotoneIcon className="w-4 h-4 text-brand-blue" />
          <span>{t.worksPage.tag}</span>
        </div>

        <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          {t.worksPage.title}
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-800 font-bold leading-relaxed">
          {t.worksPage.subtitle}
        </p>
      </motion.div>

      {/* 2. PREMIUM FLOATING LIQUID GLASS DOCK - Edge-to-Edge swipe on phones */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="sticky top-20 sm:top-24 z-30 py-2 sm:py-3 -my-2 sm:-my-3 pointer-events-auto -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        <div className="relative max-w-full">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none px-1">
            <div 
              onMouseLeave={() => setHoveredCategory(null)}
              className="inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-2 rounded-full bg-white/90 backdrop-blur-xl border border-white/90 shadow-[0_16px_45px_-12px_rgba(0,0,0,0.08),0_0_1px_1px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] isolate shrink-0"
            >
              {filterKeys.map((tab) => {
                const isActive = activeCategory === tab.key;
                const isHovered = hoveredCategory === tab.key;
                const IconComponent = tab.icon;
                const count = getCategoryCount(tab.key);

                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveCategory(tab.key)}
                    onMouseEnter={() => setHoveredCategory(tab.key)}
                    whileTap={{ scale: 0.95 }}
                    className={`relative z-10 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4.5 py-1.5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer outline-none select-none ${
                      isActive
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-950'
                    }`}
                  >
                    {/* Active Magnetic Sliding Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeWorksDockPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 shadow-md shadow-gray-950/25"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      />
                    )}

                    {/* Hover Ghost Pill */}
                    {!isActive && isHovered && (
                      <motion.div
                        layoutId="hoverWorksDockPill"
                        className="absolute inset-0 rounded-full bg-gray-100/80"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}

                    {/* Category Icon */}
                    <IconComponent
                      className={`relative z-10 w-3.5 sm:w-4 h-3.5 sm:h-4 transition-transform duration-200 ${
                        isActive 
                          ? 'text-brand-pink scale-110' 
                          : 'text-gray-400 group-hover:text-gray-600'
                      }`}
                    />

                    {/* Category Label */}
                    <span className="relative z-10">{tab.label}</span>

                    {/* Count Badge */}
                    <span
                      className={`relative z-10 text-[10px] sm:text-[11px] font-sans font-bold px-1.5 sm:px-2 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Live Filter Readout Badge */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/75 backdrop-blur-xl border border-gray-200/80 text-xs font-sans font-bold text-gray-700 shadow-sm shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>
                {filteredProjects.length} {language === 'tr' ? 'Proje Gösteriliyor' : 'Projects Live'}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. MAIN PORTFOLIO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {filteredProjects.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <ProjectCard
              project={project}
              onClick={onSelectProject}
              layout="standard"
            />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center rounded-2xl md:rounded-[32px] bg-white border border-gray-200 shadow-sm">
          <p className="text-base sm:text-lg font-bold text-gray-400">
            {language === 'tr'
              ? 'Bu kategoride henüz yayınlanmış proje bulunmuyor.'
              : 'No published projects in this category yet.'}
          </p>
        </div>
      )}

      {/* 4. DEDICATED 9:16 VERTICAL CONTENT SUITE */}
      <motion.section 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 sm:mt-32 rounded-2xl sm:rounded-3xl md:rounded-[48px] bg-gray-900 text-white p-6 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-blob-blue opacity-20 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-gray-800">
          <div className="space-y-3 sm:space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-800 border border-gray-700 text-[11px] sm:text-xs font-bold text-brand-pink">
              <SmartphoneBoldDuotoneIcon className="w-4 h-4" />
              <span>TIKTOK • REELS • SHORTS</span>
            </div>
            <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.worksPage.verticalRoomTitle}
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 font-bold leading-relaxed">
              {t.worksPage.verticalRoomSubtitle}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-blue text-white text-xs sm:text-sm font-bold transition-all shadow-[0_8px_20px_-6px_rgba(43,82,255,0.4)] hover:bg-brand-blue-hover active:scale-95 self-start md:self-auto cursor-pointer"
          >
            <span>{t.nav.startProject}</span>
            <ArrowRightUpBoldIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 3 Interactive Phone Mockup Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-16">
          {verticalProjects.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', stiffness: 150, damping: 18, delay: idx * 0.15 }}
              onClick={() => onSelectProject(item)}
              className="group cursor-pointer mx-auto w-full max-w-[300px] sm:max-w-[320px] rounded-3xl md:rounded-[40px] p-3.5 sm:p-4 bg-gray-800 border-4 border-gray-700 shadow-2xl transition-all duration-300 hover:border-brand-pink hover:scale-105"
            >
              {/* Phone Screen Container */}
              <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden aspect-[9/16] bg-black">
                <img
                  src={item.thumbnail}
                  alt={item.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Phone Speaker Notch */}
                <div className="absolute top-2.5 sm:top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-black/90 rounded-full flex items-center justify-center">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-900 mr-2" />
                  <div className="w-8 sm:w-10 h-1 rounded-full bg-white/20" />
                </div>

                {/* Overlay Play Indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 text-white border border-white/20 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-transparent transition-all shadow-2xl">
                    <PlayBoldDuotoneIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gray-950/90 border border-white/15 shadow-xl">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase text-brand-pink block mb-0.5 sm:mb-1">
                    {item.client}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                    {item.title[language]}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 5. PORTFOLIO BOTTOM CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center pt-10 sm:pt-16"
      >
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
          {t.finalCta.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-3 font-medium">
          {t.finalCta.subtitle}
        </p>
        <button
          onClick={onOpenContact}
          className="mt-6 sm:mt-8 w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gray-900 text-white font-bold text-sm sm:text-base hover:bg-black transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] active:scale-95 hover:scale-105 cursor-pointer"
        >
          {t.nav.startProject}
        </button>
      </motion.div>
    </div>
  );
};
