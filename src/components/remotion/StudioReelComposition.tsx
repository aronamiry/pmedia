import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

export interface StudioReelProps {
  title?: string;
  showTelemetry?: boolean;
}

export const StudioReelComposition: React.FC<StudioReelProps> = ({
  showTelemetry = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Helper to format frame into timecode (HH:MM:SS:FF)
  const totalSeconds = Math.floor(frame / fps);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const frameRemainder = frame % fps;
  const timecode = `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(frameRemainder).padStart(2, '0')}`;

  // Scene 1 Spring Title
  const scene1TitleSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 120 },
  });

  const scene1Opacity = interpolate(frame, [0, 20, 130, 150], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scene 2 Spring Title
  const scene2TitleSpring = spring({
    frame: frame - 150,
    fps,
    config: { damping: 14, stiffness: 130 },
  });

  const scene2Opacity = interpolate(frame, [150, 170, 280, 300], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Scene 3 Spring Title
  const scene3TitleSpring = spring({
    frame: frame - 300,
    fps,
    config: { damping: 16, stiffness: 110 },
  });

  const scene3Opacity = interpolate(frame, [300, 320, 430, 450], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Camera zoom effect per scene
  const zoom1 = interpolate(frame, [0, 150], [1, 1.08]);
  const zoom2 = interpolate(frame, [150, 300], [1, 1.08]);
  const zoom3 = interpolate(frame, [300, 450], [1, 1.08]);

  return (
    <AbsoluteFill className="bg-black select-none font-sans overflow-hidden">
      {/* SCENE 1 (Frames 0 - 150): High-End Commercial */}
      <Sequence from={0} durationInFrames={150}>
        <AbsoluteFill style={{ transform: `scale(${zoom1})` }}>
          <img
            src="/media/thumbnails/tanitim-optik-luxury-eyewear.jpg"
            alt="Tanıtım Optik Luxury Eyewear Shoot"
            className="w-full h-full object-cover filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
        </AbsoluteFill>

        <AbsoluteFill
          className="flex flex-col items-center justify-center text-center px-8"
          style={{ opacity: scene1Opacity }}
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/80 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-lg"
            style={{ transform: `translateY(${(1 - scene1TitleSpring) * 20}px)` }}
          >
            COMMERCIAL CAMPAIGN
          </div>
          <h2
            className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-2xl"
            style={{
              transform: `scale(${scene1TitleSpring}) translateY(${(1 - scene1TitleSpring) * 30}px)`,
            }}
          >
            PRECISION IN EVERY FRAME
          </h2>
          <p className="text-white/80 font-medium text-base sm:text-lg mt-3 max-w-xl">
            Tanıtım Optik — Directed & Edited by PM Media
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 2 (Frames 150 - 300): Color Grading & Sound */}
      <Sequence from={150} durationInFrames={150}>
        <AbsoluteFill style={{ transform: `scale(${zoom2})` }}>
          <img
            src="/media/thumbnails/pmmedia-studio-suite-dark-ambient-timeline.jpg"
            alt="PM Media Color Grading Suite"
            className="w-full h-full object-cover filter brightness-90 contrast-125 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
        </AbsoluteFill>

        <AbsoluteFill
          className="flex flex-col items-center justify-center text-center px-8"
          style={{ opacity: scene2Opacity }}
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/90 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-lg"
            style={{ transform: `translateY(${(1 - scene2TitleSpring) * 20}px)` }}
          >
            POST-PRODUCTION & COLOR
          </div>
          <h2
            className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-2xl"
            style={{
              transform: `scale(${scene2TitleSpring}) translateY(${(1 - scene2TitleSpring) * 30}px)`,
            }}
          >
            DAVINCI COLOR & SOUND SUITE
          </h2>
          <p className="text-white/80 font-medium text-base sm:text-lg mt-3 max-w-xl">
            PM Media Post-Production Timeline & Color Grading
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* SCENE 3 (Frames 300 - 450): Akdin Gold High Jewelry */}
      <Sequence from={300} durationInFrames={150}>
        <AbsoluteFill style={{ transform: `scale(${zoom3})` }}>
          <img
            src="/media/thumbnails/akdingold-yeni-yil-zarafet-commercial.jpg"
            alt="Akdin Gold High Jewelry Shoot"
            className="w-full h-full object-cover filter brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
        </AbsoluteFill>

        <AbsoluteFill
          className="flex flex-col items-center justify-center text-center px-8"
          style={{ opacity: scene3Opacity }}
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-4 shadow-lg"
            style={{ transform: `translateY(${(1 - scene3TitleSpring) * 20}px)` }}
          >
            LUXURY JEWELRY CAMPAIGN
          </div>
          <h2
            className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-2xl"
            style={{
              transform: `scale(${scene3TitleSpring}) translateY(${(1 - scene3TitleSpring) * 30}px)`,
            }}
          >
            AKDİN GOLD // HAUTE JOAILLERIE
          </h2>
          <p className="text-white/80 font-medium text-base sm:text-lg mt-3 max-w-xl">
            Trabzon Hasırı & Solena Signature Collections
          </p>
        </AbsoluteFill>
      </Sequence>

      {/* PERSISTENT STUDIO CAMERA HUD & TELEMETRY */}
      {showTelemetry && (
        <AbsoluteFill className="pointer-events-none p-6 sm:p-8 flex flex-col justify-between">
          {/* Top Bar: Rec Indicator & Timecode */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
              <span className="text-xs font-black tracking-widest text-white uppercase font-sans">
                REC [RAW 4K]
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-wider text-white/70 uppercase hidden sm:inline-block font-sans">
                TCG
              </span>
              <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20 font-sans tabular-nums text-xs sm:text-sm font-bold text-white tracking-wider">
                {timecode}
              </span>
            </div>
          </div>

          {/* Center Crosshairs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="w-12 h-[1px] bg-white" />
            <div className="h-12 w-[1px] bg-white absolute" />
          </div>

          {/* Bottom Bar: Telemetry Data & Audio Levels */}
          <div className="flex items-end justify-between">
            <div className="space-y-1 font-sans text-[10px] sm:text-xs font-semibold text-white/90">
              <div>CAM: ARRI ALEXA MINI LF [FPS: 24.000]</div>
              <div>SHUTTER: 180.0° • ISO: 800 • WB: 5600K</div>
              <div>FORMAT: APPLE PRORES 4444 XQ [4K DCI]</div>
            </div>

            {/* Audio Waveform Levels */}
            <div className="flex items-end gap-1 h-8 sm:h-10 bg-black/40 backdrop-blur-sm p-2 rounded border border-white/10">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => {
                const heightPercent = 20 + Math.abs(Math.sin((frame + bar * 12) / 6)) * 80;
                return (
                  <div
                    key={bar}
                    className={`w-1 rounded-full ${
                      heightPercent > 80 ? 'bg-red-500' : heightPercent > 60 ? 'bg-yellow-400' : 'bg-green-400'
                    }`}
                    style={{ height: `${heightPercent}%` }}
                  />
                );
              })}
            </div>
          </div>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
