import React, { useState } from 'react';
import { Player } from '@remotion/player';
import { StudioReelComposition } from './StudioReelComposition';
import { 
  StarsBoldDuotoneIcon, 
  VideoFrameBoldDuotoneIcon, 
  EyeBoldDuotoneIcon, 
  EyeClosedBoldDuotoneIcon, 
  SliderMinimalisticHorizontalBoldDuotoneIcon 
} from '@solar-icons/react';
import { useLanguage } from '../../context/LanguageContext';

export const RemotionReelPlayer: React.FC = () => {
  const { language } = useLanguage();
  const [showTelemetry, setShowTelemetry] = useState(true);

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl md:rounded-[40px] bg-gray-950 p-4 sm:p-8 md:p-10 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] border border-gray-800 text-white">
      {/* Studio Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-gray-800/80">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-brand-pink animate-pulse" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-pink">
                PM.REEL // 2026
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-brand-blue/20 text-brand-blue font-bold uppercase">
                Remotion 4K
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              {language === 'tr' ? 'İnteraktif Yönetmen Kurgusu' : "Interactive Director's Cut"}
            </h3>
          </div>
        </div>

        {/* Telemetry Toggle & Tech Badges */}
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setShowTelemetry(!showTelemetry)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              showTelemetry
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {showTelemetry ? <EyeBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink" /> : <EyeClosedBoldDuotoneIcon className="w-3.5 h-3.5" />}
            <span>{showTelemetry ? 'Camera HUD: ON' : 'Camera HUD: OFF'}</span>
          </button>

          <div className="hidden md:flex items-center gap-2 font-sans text-xs font-bold text-gray-300 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
            <VideoFrameBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-blue" />
            <span>4K DCI • 24.000 FPS • PRORES</span>
          </div>
        </div>
      </div>

      {/* Remotion Player Container */}
      <div className="relative rounded-2xl md:rounded-[28px] overflow-hidden bg-black shadow-2xl border border-gray-800/60 ring-1 ring-white/5">
        <Player
          component={StudioReelComposition}
          inputProps={{
            title: 'PM.MEDIA 2026 SHOWREEL',
            showTelemetry: showTelemetry,
          }}
          durationInFrames={450}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={30}
          style={{
            width: '100%',
            aspectRatio: '16/9',
          }}
          controls
          loop
          autoPlay={false}
          acknowledgeRemotionLicense
        />
      </div>

      {/* Studio Deck Footer */}
      <div className="pt-6 mt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 font-medium">
            <SliderMinimalisticHorizontalBoldDuotoneIcon className="w-4 h-4 text-brand-blue" />
            <span>Remotion Realtime Composition Engine</span>
          </span>
          <span className="hidden sm:inline text-gray-600">•</span>
          <span>ARRI RAW / ACEScc Log-C Pipeline</span>
        </div>

        <div className="flex items-center gap-2 text-[11px] font-sans font-bold text-gray-400">
          <StarsBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink" />
          <span>DRAG TIMELINE TO SCRUB FRAMES</span>
        </div>
      </div>
    </div>
  );
};
