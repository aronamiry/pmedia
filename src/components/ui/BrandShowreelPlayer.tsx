import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Minimize2, 
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const BrandShowreelPlayer: React.FC = () => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(43.6);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 43.6);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current && !videoRef.current) return;
    
    if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {
          if ((videoRef.current as any)?.webkitEnterFullscreen) {
            (videoRef.current as any).webkitEnterFullscreen();
          }
        });
      } else if ((containerRef.current as any)?.webkitRequestFullscreen) {
        (containerRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any)?.webkitEnterFullscreen) {
        (videoRef.current as any).webkitEnterFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || (document as any).webkitFullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 2800);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full flex justify-center py-2 select-none">
      {/* Outer wrapper with subtle soft ambient light (hidden in fullscreen) */}
      <div className={`relative w-full ${isFullscreen ? '' : 'max-w-[360px] sm:max-w-[400px] md:max-w-[430px]'}`}>
        {!isFullscreen && (
          <div className="absolute -inset-3 bg-gradient-to-r from-brand-pink/20 via-brand-blue/20 to-purple-500/20 rounded-[42px] blur-2xl opacity-60 pointer-events-none -z-10" />
        )}

        {/* Reel Chassis matching video aspect ratio (9:16) */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
          onClick={togglePlay}
          className={`group cursor-pointer select-none transition-all duration-300 ${
            isFullscreen
              ? 'fixed inset-0 z-[9999] w-screen h-screen bg-black flex items-center justify-center p-0 rounded-none border-none ring-0 overflow-hidden'
              : 'relative w-full aspect-[9/16] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-black shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] border border-white/15 ring-1 ring-white/10'
          }`}
        >
          {/* Subtle Ambient Video Glow in Fullscreen Background */}
          {isFullscreen && (
            <video
              src="/media/showreel.mp4"
              muted
              loop
              playsInline
              autoPlay
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 scale-110 pointer-events-none transform-gpu"
            />
          )}

          {/* Centered Reel Stage - 100% Uncropped Vertical Video Stage */}
          <div className={`relative flex items-center justify-center overflow-hidden ${
            isFullscreen 
              ? 'h-full max-h-screen w-auto aspect-[9/16] shadow-2xl z-10' 
              : 'w-full h-full'
          }`}>
            {/* Main 9:16 Video - object-contain ensures top & bottom are NEVER cut off! */}
            <video
              ref={videoRef}
              src="/media/showreel.mp4"
              playsInline
              loop
              autoPlay
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-contain"
            />

            {/* Top & Bottom Subtle Vignette for Control Contrast */}
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/80 via-black/25 to-transparent pointer-events-none z-[5]" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none z-[5]" />

            {/* Center Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-xs transition-all pointer-events-none">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-gray-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                </div>
              </div>
            )}

            {/* Top HUD Bar */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className={`absolute top-4 left-4 right-4 z-20 flex items-center justify-between transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Live Indicator & Studio Title */}
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_rgba(239,68,68,0.9)]" />
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white font-sans">
                  PM.MEDIA // SHOWREEL
                </span>
              </div>

              {/* Sound Toggle Button */}
              <button
                onClick={toggleMute}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-[10px] sm:text-[11px] font-semibold border transition-all active:scale-95 cursor-pointer shadow-lg ${
                  isMuted 
                    ? 'bg-black/60 hover:bg-black/80 border-white/20 text-white' 
                    : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                }`}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-brand-pink" />
                    <span className="font-sans">{language === 'tr' ? 'Sesi Aç' : 'Unmute'}</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="font-sans">{language === 'tr' ? 'Ses Açık' : 'Sound On'}</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Floating Glass Control Deck */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 transition-opacity duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="bg-black/75 backdrop-blur-xl border border-white/15 rounded-2xl p-2.5 sm:p-3 shadow-2xl text-white space-y-2">
                
                {/* Scrubbable Timeline Track */}
                <div className="relative group/track flex items-center cursor-pointer">
                  <input
                    type="range"
                    min={0}
                    max={duration || 43.6}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-white/20 hover:h-1.5 rounded-lg appearance-none cursor-pointer accent-brand-pink focus:outline-none transition-all"
                    style={{
                      background: `linear-gradient(to right, #ec4899 0%, #3b82f6 ${progressPercent}%, rgba(255,255,255,0.2) ${progressPercent}%, rgba(255,255,255,0.2) 100%)`
                    }}
                  />
                </div>

                {/* Bottom Row Controls */}
                <div className="flex items-center justify-between gap-2 text-xs">
                  {/* Left: Play/Pause, Mute & Slim Modern Timecode */}
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5 text-brand-pink" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>

                    {/* Slim Modern Timecode */}
                    <span className="font-sans font-light text-[11px] sm:text-xs text-white/85 tabular-nums tracking-wide">
                      {formatTime(currentTime)} <span className="text-white/40 font-thin">/</span> {formatTime(duration)}
                    </span>
                  </div>

                  {/* Right: Replay + Fullscreen */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                          videoRef.current.play().catch(() => {});
                          setIsPlaying(true);
                        }
                      }}
                      className="p-1 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition-colors cursor-pointer"
                      title={language === 'tr' ? 'Başa Sar' : 'Restart'}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={toggleFullscreen}
                      className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
                      aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                    >
                      {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
