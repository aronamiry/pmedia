import React, { useState, useRef, useCallback, useEffect } from 'react';
import { 
  MagicWandBoldDuotoneIcon, 
  SliderMinimalisticHorizontalBoldDuotoneIcon 
} from '@solar-icons/react';
import { useLanguage } from '../../context/LanguageContext';

interface GradeScene {
  id: string;
  nameEn: string;
  nameTr: string;
  src: string;
  camera: string;
  lens: string;
  logFormat: string;
  lutTarget: string;
}

const scenes: GradeScene[] = [
  {
    id: 'sunset-highway',
    nameEn: 'California Sunset Anamorphic',
    nameTr: 'Kaliforniya Gün Batımı Anamorfik',
    src: '/images/color-grade/sunset-highway.jpg',
    camera: 'ARRI Alexa 35 (4.6K Super 35)',
    lens: 'Cooke Anamorphic /i 2x Prime 40mm',
    logFormat: 'ARRI LogC4 (Wide Gamut 4)',
    lutTarget: 'Kodak 2383 Print Film Emulation',
  },
  {
    id: 'chiaroscuro-portrait',
    nameEn: 'Low-Exposure Chiaroscuro',
    nameTr: 'Düşük Pozlamalı Chiaroscuro Portre',
    src: '/images/gallery/low-exposure-chiaroscuro.jpg',
    camera: 'RED V-Raptor 8K VV Large Format',
    lens: 'Leitz Cine Summilux-C 85mm T1.4',
    logFormat: 'REDcode RAW IPP2 Log3G10',
    lutTarget: 'Rec.709 Master Cinema Grade',
  },
];

export const ColorGradingSlider: React.FC = () => {
  const { language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentScene = scenes[selectedSceneIndex];

  // Measure container width for subpixel alignment across responsive breakpoints
  const updateContainerWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, [updateContainerWidth]);

  // Compute position relative to container
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, []);

  // When pointer is pressed, capture pointer so it stays attached even outside bounds
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsPointerDown(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if browser does not support setPointerCapture
    }
    updatePosition(e.clientX);
  };

  // Move slider whenever mouse moves over the image OR when dragging
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsPointerDown(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl sm:rounded-3xl md:rounded-[48px] bg-white p-4 sm:p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-6 sm:mb-8">
        <div className="space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-light-pink text-brand-pink text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <MagicWandBoldDuotoneIcon className="w-3.5 h-3.5" />
            <span>{language === 'tr' ? 'POST-PRODÜKSİYON & DAVINCI RENK' : 'POST-PRODUCTION & DAVINCI COLOR'}</span>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            {language === 'tr' ? (
              <>Kamera Ham <span className="text-gradient">LOG</span> vs Sinematik Kurgu</>
            ) : (
              <>Raw Sensor <span className="text-gradient">LOG</span> vs Final Film Grade</>
            )}
          </h3>

          <p className="text-gray-500 font-medium text-xs sm:text-base md:text-lg max-w-2xl leading-relaxed">
            {language === 'tr'
              ? 'ARRI LogC ve RED Log3G10 ham sensör dinamik aralığını koruyarak DaVinci Resolve ile sinematik Rec.709 renk kurgusuna dönüştürüyoruz. Siyah-beyaz değil, gerçek ham pastel LOG renkleri.'
              : 'Preserving full 14+ stops dynamic range in authentic sensor LOG (with muted pastel hues, lifted pedestal shadows) and mastering into award-winning cinematic Rec.709.'}
          </p>
        </div>

        {/* Scene Switcher & Touch/Mouse Status */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 self-start md:self-auto">
          <div className="flex items-center gap-1 sm:gap-1.5 bg-gray-100 p-1 rounded-2xl border border-gray-200">
            {scenes.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setSelectedSceneIndex(idx)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  selectedSceneIndex === idx
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {language === 'tr' ? scene.nameTr : scene.nameEn}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-gray-600 bg-gray-50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl border border-gray-200">
            <SliderMinimalisticHorizontalBoldDuotoneIcon className={`w-3.5 h-3.5 ${isPointerDown ? 'text-brand-pink animate-pulse' : 'text-brand-blue'}`} />
            <span>
              {isPointerDown
                ? (language === 'tr' ? 'Kaydırılıyor' : 'Sliding')
                : (language === 'tr' ? 'Kaydırmak için Dokunun' : 'Touch or Hover to Compare')}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Slider Frame with Touch Attachment */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-[21/9] rounded-xl sm:rounded-2xl md:rounded-[32px] overflow-hidden select-none cursor-ew-resize shadow-2xl ring-1 ring-gray-900/10 touch-none group"
      >
        {/* Layer 1: Final Graded Master (Full width background) */}
        <div className="absolute inset-0">
          <img
            src={currentScene.src}
            alt="Final Graded Film"
            className="w-full h-full object-cover filter contrast-[1.22] saturate-[1.18] brightness-[0.98]"
          />

          {/* Badge: Graded */}
          <div className="absolute top-3 right-3 sm:top-6 sm:right-6 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-black/75 backdrop-blur-md text-white font-sans text-[10px] sm:text-sm font-bold tracking-tight border border-white/20 shadow-lg pointer-events-none flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-pink animate-pulse" />
            <span>GRADED [REC.709]</span>
          </div>

          {/* Technical LUT readout bottom-right */}
          <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 px-2.5 py-1 rounded-lg sm:rounded-xl bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-sans font-semibold text-gray-300 border border-white/10 pointer-events-none hidden sm:block">
            {currentScene.lutTarget}
          </div>
        </div>

        {/* Layer 2: Raw Sensor Flat LOG (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="absolute inset-0 h-full"
            style={{
              width: containerWidth ? `${containerWidth}px` : '100vw',
              minWidth: '100%',
            }}
          >
            {/*
              Authentic ARRI / RED LOG Simulation:
              - Lifted shadow pedestal (never 0 crushed black)
              - Flatter gamma / lower contrast
              - Retains true colors (NOT black and white): muted pastel sunset oranges, sky teals, skin tones (72% saturation)
              - Subtle milky shadow lift via mix-blend-screen overlay
            */}
            <img
              src={currentScene.src}
              alt="Raw Sensor LOG"
              className="w-full h-full object-cover filter contrast-[0.66] brightness-[1.16] saturate-[0.74]"
            />

            {/* Milky LOG shadow pedestal overlay */}
            <div className="absolute inset-0 bg-[#32363e]/15 mix-blend-screen pointer-events-none" />

            {/* Badge: Raw LOG */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-900/85 backdrop-blur-md text-white font-sans text-[10px] sm:text-sm font-bold tracking-tight border border-white/20 shadow-lg pointer-events-none flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-blue" />
              <span>RAW [{currentScene.logFormat.includes('LogC') ? 'LOG-C4' : 'LOG3G10'}]</span>
            </div>

            {/* Technical LOG readout bottom-left */}
            <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 px-2.5 py-1 rounded-lg sm:rounded-xl bg-gray-950/70 backdrop-blur-md text-[10px] sm:text-[11px] font-sans font-semibold text-gray-300 border border-white/10 pointer-events-none hidden sm:block">
              FLAT 14.5+ STOPS • UNCOMPRESSED SENSOR
            </div>
          </div>
        </div>

        {/* Draggable Divider Line that attaches to mouse/touch */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Central Handle Pill */}
          <div className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-gray-900 shadow-2xl flex items-center justify-center font-bold text-xs border-2 ${isPointerDown ? 'border-brand-pink scale-110' : 'border-brand-blue'} ring-4 ring-black/25 transition-transform duration-150`}>
            <SliderMinimalisticHorizontalBoldDuotoneIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${isPointerDown ? 'text-brand-pink' : 'text-brand-blue'}`} />
          </div>

          {/* Micro position indicator */}
          <div className="absolute bottom-2.5 sm:bottom-3 -translate-x-1/2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-md text-white font-sans text-[9px] sm:text-[10px] font-bold">
            {Math.round(sliderPosition)}%
          </div>
        </div>
      </div>

      {/* Tech Specifications Footer Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 font-sans text-xs text-gray-600">
        <div>
          <span className="text-gray-400 block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">CAPTURE SENSOR</span>
          <span className="font-bold text-gray-900 text-[11px] sm:text-xs">{currentScene.camera}</span>
        </div>
        <div>
          <span className="text-gray-400 block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">CINE GLASS</span>
          <span className="font-bold text-gray-900 text-[11px] sm:text-xs">{currentScene.lens}</span>
        </div>
        <div>
          <span className="text-gray-400 block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">COLOR PIPELINE</span>
          <span className="font-bold text-gray-900 text-[11px] sm:text-xs">{currentScene.logFormat}</span>
        </div>
        <div>
          <span className="text-gray-400 block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider">MASTER FINISH</span>
          <span className="font-bold text-brand-pink text-[11px] sm:text-xs">{currentScene.lutTarget}</span>
        </div>
      </div>
    </div>
  );
};
