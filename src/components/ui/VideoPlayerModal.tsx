import React, { useRef, useState, useEffect } from 'react';
import type { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { 
  CloseCircleBoldDuotoneIcon, 
  VolumeLoudBoldDuotoneIcon, 
  VolumeCrossBoldDuotoneIcon, 
  PlayBoldDuotoneIcon, 
  PauseBoldDuotoneIcon 
} from '@solar-icons/react';

interface VideoPlayerModalProps {
  project: Project | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ project, onClose }) => {
  const { language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Body scroll lock on mobile/desktop
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [onClose]);

  if (!project) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const isVertical = project.aspectRatio === '9:16';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl transition-opacity">
      <div
        className="relative w-full max-w-[1200px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl md:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row pb-safe"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 p-2 sm:p-3 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-gray-950 transition-all shadow-md border border-gray-200 active:scale-95 cursor-pointer"
          aria-label="Close video player"
        >
          <CloseCircleBoldDuotoneIcon className="w-5 h-5" />
        </button>

        {/* Video Stage Area */}
        <div
          className={`relative bg-gray-50 flex items-center justify-center p-3 sm:p-6 md:p-10 shrink-0 ${
            isVertical ? 'lg:w-1/2 min-h-0' : 'lg:w-[65%] min-h-0'
          }`}
        >
          {project.videoUrl ? (
            <div
              className={`relative overflow-hidden rounded-xl sm:rounded-[24px] shadow-2xl ${
                isVertical ? 'aspect-[9/16] max-h-[50vh] sm:max-h-[600px] w-auto bg-black ring-1 ring-gray-200' : 'w-full aspect-[16/9] bg-black ring-1 ring-gray-200'
              }`}
            >
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.thumbnail}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* In-Video Overlay Controls */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-auto bg-black/75 px-3.5 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-[16px] border border-white/20 shadow-xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={togglePlay}
                    className="p-1 rounded-lg text-white hover:text-brand-pink transition-colors cursor-pointer"
                  >
                    {isPlaying ? <PauseBoldDuotoneIcon className="w-4 h-4 sm:w-5 sm:h-5" /> : <PlayBoldDuotoneIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1 rounded-lg text-white hover:text-brand-pink transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeCrossBoldDuotoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-brand-pink" /> : <VolumeLoudBoldDuotoneIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </button>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-white/80 tracking-wider">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-pink animate-pulse" />
                  <span>{project.aspectRatio}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative rounded-xl sm:rounded-[24px] overflow-hidden shadow-lg">
              <img
                src={project.thumbnail}
                alt={project.title[language]}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Project Meta Sidebar */}
        <div
          className={`p-5 sm:p-8 md:p-12 flex flex-col bg-white border-t lg:border-t-0 lg:border-l border-gray-100 ${
            isVertical ? 'lg:w-1/2' : 'lg:w-[35%]'
          }`}
        >
          <div className="space-y-4 sm:space-y-6 flex-1 pt-2 lg:pt-0">
            <div>
              <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-brand-blue/10">
                  {project.categoryLabel[language]}
                </span>
                <span className="text-xs font-bold text-gray-400">
                  {project.year}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {project.title[language]}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-gray-500 mt-1 sm:mt-2">
                Client: <span className="text-gray-900">{project.client}</span>
              </p>
            </div>

            <p className="text-xs sm:text-base text-gray-600 leading-relaxed font-medium pt-1 sm:pt-2">
              {project.description[language]}
            </p>

            <div className="pt-4 sm:pt-6 border-t border-gray-100 space-y-3 sm:space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {language === 'tr' ? 'TESLİMATLAR' : 'DELIVERABLES'}
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li className="text-xs sm:text-sm font-bold text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  1x 30s Hero Film
                </li>
                <li className="text-xs sm:text-sm font-bold text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                  3x 9:16 Social Cutdowns
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
);
};
