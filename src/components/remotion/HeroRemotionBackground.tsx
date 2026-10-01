import React from 'react';
import {
  VideocameraRecordBoldDuotoneIcon,
  CameraMinimalisticBoldDuotoneIcon,
  StarsBoldDuotoneIcon,
  ClapperboardPlayBoldDuotoneIcon,
  HeartBoldDuotoneIcon,
  PlayBoldDuotoneIcon,
  BoltBoldDuotoneIcon,
  LayersMinimalisticBoldDuotoneIcon,
} from '@solar-icons/react';

interface FloatingIconItem {
  id: string;
  leftPercent: number;
  topPercent: number;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  iconColor: string;
  borderColor: string;
  glowColor: string;
  tag?: { tr: string; en: string };
  scale: number;
  animClass: string;
  hideOnMobile?: boolean;
}

// 8 Minimalist, Bolder, Modern Floating Solar Icon Badges with Colored Borders & Bi-lingual Tags
const floatingItems: FloatingIconItem[] = [
  {
    id: 'cinema-cam',
    leftPercent: 12,
    topPercent: 82,
    icon: VideocameraRecordBoldDuotoneIcon,
    iconColor: '#2563EB',
    borderColor: 'rgba(37, 99, 235, 0.45)',
    glowColor: 'rgba(37, 99, 235, 0.22)',
    tag: { tr: 'SİNEMA 4K', en: 'CINEMA 4K' },
    scale: 0.95,
    animClass: 'animate-float-1',
    hideOnMobile: false,
  },
  {
    id: 'creative-stars',
    leftPercent: 18,
    topPercent: 12,
    icon: StarsBoldDuotoneIcon,
    iconColor: '#F43F5E',
    borderColor: 'rgba(244, 63, 94, 0.45)',
    glowColor: 'rgba(244, 63, 94, 0.22)',
    scale: 1.05,
    animClass: 'animate-float-2',
    hideOnMobile: false,
  },
  {
    id: 'energy-bolt',
    leftPercent: 8,
    topPercent: 48,
    icon: BoltBoldDuotoneIcon,
    iconColor: '#F59E0B',
    borderColor: 'rgba(245, 158, 11, 0.5)',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    tag: { tr: 'VİRAL HIZ', en: 'VIRAL SPEED' },
    scale: 0.98,
    animClass: 'animate-float-3',
    hideOnMobile: true,
  },
  {
    id: 'photo-lens',
    leftPercent: 15,
    topPercent: 74,
    icon: CameraMinimalisticBoldDuotoneIcon,
    iconColor: '#10B981',
    borderColor: 'rgba(16, 185, 129, 0.45)',
    glowColor: 'rgba(16, 185, 129, 0.2)',
    tag: { tr: 'HAM ÇEKİM', en: 'RAW STILL' },
    scale: 1.0,
    animClass: 'animate-float-1',
    hideOnMobile: true,
  },
  {
    id: 'studio-heart',
    leftPercent: 84,
    topPercent: 14,
    icon: HeartBoldDuotoneIcon,
    iconColor: '#FF3366',
    borderColor: 'rgba(255, 51, 102, 0.45)',
    glowColor: 'rgba(255, 51, 102, 0.24)',
    scale: 1.08,
    animClass: 'animate-float-2',
    hideOnMobile: false,
  },
  {
    id: 'clapper-edit',
    leftPercent: 82,
    topPercent: 80,
    icon: ClapperboardPlayBoldDuotoneIcon,
    iconColor: '#8B5CF6',
    borderColor: 'rgba(139, 92, 246, 0.45)',
    glowColor: 'rgba(139, 92, 246, 0.22)',
    tag: { tr: 'KURGU & RENK', en: 'POST & EDIT' },
    scale: 0.95,
    animClass: 'animate-float-3',
    hideOnMobile: false,
  },
  {
    id: 'play-reel',
    leftPercent: 80,
    topPercent: 68,
    icon: PlayBoldDuotoneIcon,
    iconColor: '#0284C7',
    borderColor: 'rgba(2, 132, 199, 0.45)',
    glowColor: 'rgba(2, 132, 199, 0.22)',
    tag: { tr: 'PRORES REELS', en: 'PRORES REEL' },
    scale: 1.0,
    animClass: 'animate-float-1',
    hideOnMobile: true,
  },
  {
    id: 'layers-mesh',
    leftPercent: 91,
    topPercent: 62,
    icon: LayersMinimalisticBoldDuotoneIcon,
    iconColor: '#06B6D4',
    borderColor: 'rgba(6, 182, 212, 0.45)',
    glowColor: 'rgba(6, 182, 212, 0.2)',
    scale: 1.05,
    animClass: 'animate-float-2',
    hideOnMobile: true,
  },
];

interface HeroRemotionBackgroundProps {
  language?: 'tr' | 'en';
}

// Ultra-fast, GPU-accelerated Pure CSS/React Background
export const HeroRemotionBackground: React.FC<HeroRemotionBackgroundProps> = ({ language = 'tr' }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-white">
      {/* 1. SEAMLESS AMBIENT GRADIENTS (Lightweight CSS / SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1920 1080"
        fill="none"
      >
        <defs>
          <radialGradient id="sunset-grad" cx="25%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#FF3366" stopOpacity="0.38" />
            <stop offset="30%" stopColor="#FF6B6B" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#FFA07A" stopOpacity="0.14" />
            <stop offset="85%" stopColor="#FFE066" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sky-grad" cx="80%" cy="42%" r="75%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="35%" stopColor="#60A5FA" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#818CF8" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom-grad" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.18" />
            <stop offset="40%" stopColor="#FBBF24" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="#FFFFFF" />
        <rect width="100%" height="100%" fill="url(#sunset-grad)" />
        <rect width="100%" height="100%" fill="url(#sky-grad)" />
        <rect width="100%" height="100%" fill="url(#bloom-grad)" />
      </svg>

      {/* 2. FLOATING BADGES (Hardware-accelerated CSS animations) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {floatingItems.map((item) => {
          const IconComponent = item.icon;
          const labelText = item.tag ? (language === 'tr' ? item.tag.tr : item.tag.en) : null;

          return (
            <div
              key={item.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${item.animClass} ${
                item.hideOnMobile ? 'hidden md:block' : 'block'
              }`}
              style={{
                left: `${item.leftPercent}%`,
                top: `${item.topPercent}%`,
                transform: `scale(${item.scale})`,
                willChange: 'transform',
              }}
            >
              <div
                className={`inline-flex items-center rounded-full bg-white/95 backdrop-blur-xl transition-transform hover:scale-105 ${
                  labelText ? 'px-2.5 py-1.5 sm:px-4 sm:py-2 gap-1.5 sm:gap-2.5' : 'p-2 sm:p-3'
                }`}
                style={{
                  border: `2px solid ${item.borderColor}`,
                  boxShadow: `0 14px 35px -8px ${item.glowColor}, 0 0 1px 1px rgba(0, 0, 0, 0.04), inset 0 1px 1px 0 rgba(255, 255, 255, 0.95)`,
                }}
              >
                {/* Solar Icon */}
                <div
                  style={{
                    color: item.iconColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconComponent size={labelText ? 20 : 24} className="sm:w-6 sm:h-6" />
                </div>

                {/* Micro-Tag */}
                {labelText && (
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[10px] sm:text-[13px] font-extrabold tracking-wider uppercase text-gray-900 whitespace-nowrap font-sans">
                      {labelText}
                    </span>
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: item.iconColor,
                        boxShadow: `0 0 8px ${item.iconColor}`,
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
