import React, { useState } from 'react';
import type { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { 
  HeartBoldDuotoneIcon, 
  StarBoldDuotoneIcon, 
  MapPointBoldDuotoneIcon, 
  CameraMinimalisticBoldDuotoneIcon, 
  VideoFrameBoldDuotoneIcon, 
  SliderMinimalisticHorizontalBoldDuotoneIcon, 
  ArrowRightUpBoldIcon,
  PlayBoldDuotoneIcon 
} from '@solar-icons/react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  layout?: 'standard' | 'vertical' | 'featured';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onClick,
  layout = 'standard',
}) => {
  const { language } = useLanguage();
  const [isLiked, setIsLiked] = useState(false);
  const isVertical = layout === 'vertical';

  // Camera and format spec chips inspired by the micro-specs row
  const cameraLabel = project.specs?.camera
    ? project.specs.camera.split('+')[0].trim().replace('VV Large Format', '').trim()
    : 'Cinema 4K';

  const aspectLabel = project.specs?.aspect
    ? project.specs.aspect.split('/')[0].trim()
    : project.aspectRatio === '9:16' ? '9:16 Reel' : '2.39:1 Cine';

  const gradingLabel = project.specs?.grading
    ? project.specs.grading.includes('DaVinci') ? 'DaVinci' : 'ACEScc'
    : 'ProRes 444';

  return (
    <div
      onClick={() => onClick(project)}
      className={`group relative cursor-pointer overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gray-950 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.28)] hover:-translate-y-1 select-none isolate ${
        isVertical ? 'aspect-[9/16]' : layout === 'featured' ? 'aspect-[4/5] sm:aspect-[16/11]' : 'aspect-[4/5] sm:aspect-[3/4]'
      }`}
    >
      {/* 1. Full-Bleed Media (Image Background) */}
      <img
        src={project.thumbnail}
        alt={project.title[language]}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Top Subtle Vignette Gradient */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

      {/* Bottom Cinematic Scrim Gradient (Full smooth gradient feather, zero harsh cuts or blur boundaries) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-black/20 to-transparent pointer-events-none z-10" />

      {/* 2. Top Header Bar (Category Pill + Frosted Glass Action Button) */}
      <div className="absolute top-4 left-4 right-4 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between z-20">
        {/* Category Badge Pill */}
        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider bg-black/60 text-white border border-white/20 shadow-md">
          {project.categoryLabel[language]}
        </span>

        {/* Floating Heart Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          aria-label="Save project"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-lg active:scale-90 cursor-pointer"
        >
          <HeartBoldDuotoneIcon
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
              isLiked ? 'text-brand-pink scale-110' : 'text-white'
            }`}
          />
        </button>
      </div>

      {/* Center Subtle Play Button (Visible on hover if video available) */}
      {project.videoUrl && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-gray-950 flex items-center justify-center shadow-2xl border border-white transform group-hover:scale-110 transition-transform">
            <PlayBoldDuotoneIcon className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5" />
          </div>
        </div>
      )}

      {/* 3. Bottom Content Box (Transparent layout container resting on the seamless cinematic gradient) */}
      <div className="absolute inset-x-0 bottom-0 pb-5 px-5 sm:pb-6 sm:px-7 flex flex-col justify-end text-white z-20 space-y-2 sm:space-y-2.5">
        {/* Title & Star Rating Row */}
        <div className="flex items-start justify-between gap-2.5">
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight group-hover:text-brand-light-blue transition-colors line-clamp-2">
            {project.title[language]}
          </h3>

          <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-amber-400 bg-black/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/15 shrink-0 shadow-sm">
            <StarBoldDuotoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
            <span>4.9</span>
          </div>
        </div>

        {/* Client / Location Row */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-gray-300 font-medium">
          <MapPointBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink shrink-0" />
          <span className="truncate">{project.client}</span>
        </div>

        {/* Micro Specs Row: Minimalist Modern Sans Typography */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 text-[10px] sm:text-xs font-sans font-semibold tracking-tight text-white/90 pt-0.5 sm:pt-1">
          <div className="flex items-center gap-1 sm:gap-1.5 truncate">
            <CameraMinimalisticBoldDuotoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-blue shrink-0" />
            <span className="truncate font-semibold tracking-tight">{cameraLabel}</span>
          </div>

          <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />

          <div className="flex items-center gap-1 sm:gap-1.5 truncate">
            <VideoFrameBoldDuotoneIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-pink shrink-0" />
            <span className="truncate font-semibold tracking-tight">{aspectLabel}</span>
          </div>

          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30 shrink-0" />

          <div className="hidden sm:flex items-center gap-1.5 truncate">
            <SliderMinimalisticHorizontalBoldDuotoneIcon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate font-semibold tracking-tight">{gradingLabel}</span>
          </div>
        </div>

        {/* Bottom Row: Year/Type + Prominent White Pill Button */}
        <div className="pt-2 flex items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="text-base sm:text-xl font-bold text-white tracking-tight">
              {project.year}
            </div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-sans font-bold tracking-wider">
              {project.categoryLabel[language]}
            </div>
          </div>

          {/* Prominent White Pill CTA Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick(project);
            }}
            className="px-4 py-2 sm:px-7 sm:py-3 rounded-full bg-white text-gray-950 font-bold text-xs sm:text-sm hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer group/btn"
          >
            <span>{language === 'tr' ? 'İncele' : 'Explore Case'}</span>
            <ArrowRightUpBoldIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-950 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
