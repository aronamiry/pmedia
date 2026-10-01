import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

export interface SocialMarketingReelProps {
  title?: string;
}

export const SocialMarketingReelComposition: React.FC<SocialMarketingReelProps> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Helper to format frame into timecode (MM:SS:FF)
  const totalSeconds = Math.floor(frame / fps);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const frameRemainder = frame % fps;
  const timecode = `00:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(frameRemainder).padStart(2, '0')}`;

  // ----------------------------------------------------------------------
  // SCENE 1 (Frames 0 - 95): THE HOOK // STOP THE SCROLL
  // ----------------------------------------------------------------------
  const scene1Spring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });
  const scene1Opacity = interpolate(frame, [0, 15, 80, 95], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scene1Zoom = interpolate(frame, [0, 95], [1, 1.1]);
  // Floating likes count counter: 0 -> 1.4M
  const likesCounter = Math.floor(interpolate(frame, [10, 75], [120, 1420], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }));

  // ----------------------------------------------------------------------
  // SCENE 2 (Frames 95 - 190): ALGORITHMIC VELOCITY // RETENTION PACING
  // ----------------------------------------------------------------------
  const scene2Frame = frame - 95;
  const scene2Spring = spring({
    frame: scene2Frame,
    fps,
    config: { damping: 13, stiffness: 130 },
  });
  const scene2Opacity = interpolate(frame, [95, 110, 175, 190], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scene2Zoom = interpolate(frame, [95, 190], [1.08, 1]);
  // Retention progress line width
  const retentionProgress = interpolate(frame, [105, 170], [10, 94], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // ----------------------------------------------------------------------
  // SCENE 3 (Frames 190 - 280): PERFORMANCE // BRAND SCALING
  // ----------------------------------------------------------------------
  const scene3Frame = frame - 190;
  const scene3Spring = spring({
    frame: scene3Frame,
    fps,
    config: { damping: 15, stiffness: 110 },
  });
  const scene3Opacity = interpolate(frame, [190, 205, 265, 280], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scene3Zoom = interpolate(frame, [190, 280], [1, 1.12]);

  // ----------------------------------------------------------------------
  // SCENE 4 (Frames 280 - 390): THE PM MEDIA CINEMATIC OUTRO
  // ----------------------------------------------------------------------
  const outroFrame = frame - 280;
  const outroLogoSpring = spring({
    frame: outroFrame,
    fps,
    config: { damping: 14, stiffness: 110, mass: 0.9 },
  });
  const outroTextSpring = spring({
    frame: outroFrame - 15,
    fps,
    config: { damping: 16, stiffness: 120 },
  });
  const outroBeamWidth = interpolate(outroFrame, [10, 60], [0, 320], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const outroOpacity = interpolate(frame, [280, 295, 380, 390], [0, 1, 1, 0.95], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Audio equalizer bars
  const eqBars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <AbsoluteFill className="bg-black select-none font-sans overflow-hidden text-white">
      {/* =================================================================== */}
      {/* SCENE 1: HOOK & VIRAL VELOCITY (Frames 0 - 95)                     */}
      {/* =================================================================== */}
      <Sequence from={0} durationInFrames={95}>
        <AbsoluteFill style={{ transform: `scale(${scene1Zoom})` }}>
          <img
            src="/media/thumbnails/tanitim-optik-luxury-eyewear.jpg"
            alt="Tanıtım Optik Luxury Eyewear Campaign"
            className="w-full h-full object-cover filter brightness-[0.8] contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
        </AbsoluteFill>

        <AbsoluteFill
          className="flex flex-col justify-between p-8 sm:p-14"
          style={{ opacity: scene1Opacity }}
        >
          {/* Top Tag */}
          <div className="flex items-center justify-between">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-pink/90 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest shadow-[0_4px_20px_rgba(255,51,102,0.4)]"
              style={{ transform: `translateY(${(1 - scene1Spring) * 15}px)` }}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>01 // STOP THE SCROLL</span>
            </div>

            <div className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-widest text-white/90 uppercase">
              HOOK RETENTION: 94.2%
            </div>
          </div>

          {/* Center Kinetic Headline */}
          <div className="max-w-3xl space-y-3">
            <div
              className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-cyan-400 uppercase"
              style={{ transform: `translateY(${(1 - scene1Spring) * 20}px)` }}
            >
              SOCIAL MEDIA MARKETING
            </div>
            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase drop-shadow-2xl"
              style={{
                transform: `scale(${0.9 + scene1Spring * 0.1}) translateY(${(1 - scene1Spring) * 30}px)`,
              }}
            >
              ATTENTION IS THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300">CURRENCY.</span>
            </h1>
            <p className="text-white/80 font-medium text-sm sm:text-lg max-w-xl">
              Engineered short-form content that captures eyes in the first 3 seconds and algorithms reward with massive reach.
            </p>
          </div>

          {/* Bottom Social Engagement Simulation */}
          <div className="flex items-center justify-between border-t border-white/15 pt-5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                <span className="text-red-500 text-sm">❤️</span>
                <span className="text-xs font-bold text-white">{likesCounter}K LIKES</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                <span className="text-cyan-400 text-sm">💬</span>
                <span className="text-xs font-bold text-white">18.4K COMMENTS</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                <span className="text-amber-400 text-sm">🚀</span>
                <span className="text-xs font-bold text-white">+480% VIRAL REACH</span>
              </div>
            </div>

            <div className="text-[11px] font-bold text-white/70 uppercase tracking-widest hidden md:block">
              TIKTOK • REELS • SHORTS
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =================================================================== */}
      {/* SCENE 2: ALGORITHMIC VELOCITY & PACING (Frames 95 - 190)           */}
      {/* =================================================================== */}
      <Sequence from={95} durationInFrames={95}>
        <AbsoluteFill style={{ transform: `scale(${scene2Zoom})` }}>
          <img
            src="/media/thumbnails/akdingold-yeni-yil-zarafet-commercial.jpg"
            alt="Akdin Gold High Jewelry Campaign"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-125 saturate-120"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/65" />
        </AbsoluteFill>

        <AbsoluteFill
          className="flex flex-col justify-between p-8 sm:p-14"
          style={{ opacity: scene2Opacity }}
        >
          {/* Top Tag */}
          <div className="flex items-center justify-between">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/90 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest shadow-[0_4px_20px_rgba(43,82,255,0.4)]"
              style={{ transform: `translateY(${(1 - scene2Spring) * 15}px)` }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-300" />
              <span>02 // ALGORITHMIC RETENTION</span>
            </div>

            <div className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-widest text-cyan-300 uppercase">
              PACING & SOUND DESIGN
            </div>
          </div>

          {/* Center Kinetic Headline */}
          <div className="max-w-3xl space-y-3">
            <div
              className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-pink-400 uppercase"
              style={{ transform: `translateY(${(1 - scene2Spring) * 20}px)` }}
            >
              AUDIO-SYNC EDITORIAL PACING
            </div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase drop-shadow-2xl"
              style={{
                transform: `scale(${0.9 + scene2Spring * 0.1}) translateY(${(1 - scene2Spring) * 30}px)`,
              }}
            >
              HYPNOTIC RHYTHM. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">ZERO DROP-OFF.</span>
            </h2>
            <p className="text-white/80 font-medium text-sm sm:text-lg max-w-xl">
              Micro-foley sound effects, custom beat sync, and color fidelity calibrated to stop fingers mid-scroll.
            </p>
          </div>

          {/* Bottom Live Retention Curve Indicator */}
          <div className="border-t border-white/15 pt-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-white/80">AUDIENCE RETENTION CURVE</span>
              <span className="text-cyan-400 font-mono tracking-wider">{Math.floor(retentionProgress)}% RETENTION AT OUTRO</span>
            </div>
            {/* Visual Retention Bar */}
            <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-blue via-cyan-400 to-emerald-400 rounded-full transition-all"
                style={{ width: `${retentionProgress}%` }}
              />
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =================================================================== */}
      {/* SCENE 3: BRAND SCALING & ROI (Frames 190 - 280)                     */}
      {/* =================================================================== */}
      <Sequence from={190} durationInFrames={90}>
        <AbsoluteFill style={{ transform: `scale(${scene3Zoom})` }}>
          <img
            src="/media/thumbnails/still-shoes-urban-streetwear-sneakers-reel.jpg"
            alt="Still Shoes Urban Streetwear Drop"
            className="w-full h-full object-cover filter brightness-[0.7] contrast-125 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/65" />
        </AbsoluteFill>

        <AbsoluteFill
          className="flex flex-col justify-between p-8 sm:p-14"
          style={{ opacity: scene3Opacity }}
        >
          {/* Top Tag */}
          <div className="flex items-center justify-between">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/90 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest shadow-[0_4px_20px_rgba(147,51,234,0.4)]"
              style={{ transform: `translateY(${(1 - scene3Spring) * 15}px)` }}
            >
              <span className="w-2 h-2 rounded-full bg-purple-300" />
              <span>03 // MEASURABLE GROWTH</span>
            </div>

            <div className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-widest text-emerald-400 uppercase">
              3.4X AVERAGE ROAS
            </div>
          </div>

          {/* Center Kinetic Headline */}
          <div className="max-w-3xl space-y-3">
            <div
              className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-emerald-400 uppercase"
              style={{ transform: `translateY(${(1 - scene3Spring) * 20}px)` }}
            >
              HIGH-IMPACT CAMPAIGN RESULTS
            </div>
            <h2
              className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[0.95] uppercase drop-shadow-2xl"
              style={{
                transform: `scale(${0.9 + scene3Spring * 0.1}) translateY(${(1 - scene3Spring) * 30}px)`,
              }}
            >
              VIEWS TURN INTO <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">COMMERCE.</span>
            </h2>
            <p className="text-white/80 font-medium text-sm sm:text-lg max-w-xl">
              Turn casual scrollers into passionate brand advocates through cinematic visual storytelling and high-frequency content packages.
            </p>
          </div>

          {/* Bottom Metric Badges */}
          <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-5 text-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-2xl">
              <div className="text-xl sm:text-2xl font-black text-white">12.8M+</div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">ORGANIC IMPRESSIONS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-2xl">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">3.4X</div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">PAID AD ROAS</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 rounded-2xl">
              <div className="text-xl sm:text-2xl font-black text-cyan-400">+85K</div>
              <div className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">NEW FOLLOWERS</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =================================================================== */}
      {/* SCENE 4: PM MEDIA CINEMATIC OUTRO (Frames 280 - 390)               */}
      {/* =================================================================== */}
      <Sequence from={280} durationInFrames={110}>
        <AbsoluteFill className="bg-black flex items-center justify-center relative overflow-hidden">
          {/* Ambient Cosmic Radial Glows */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-brand-blue/35 via-brand-pink/25 to-purple-600/30 blur-[120px] pointer-events-none"
            style={{
              transform: `scale(${0.8 + Math.sin(outroFrame * 0.05) * 0.2})`,
            }}
          />

          {/* Animated Background Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />

          {/* Outro Content Container */}
          <div
            className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            style={{ opacity: outroOpacity }}
          >
            {/* 1. PM Media Brand Emblem */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-brand-blue via-indigo-600 to-brand-pink p-[2px] shadow-[0_0_50px_rgba(43,82,255,0.5)] mb-6"
              style={{
                transform: `scale(${outroLogoSpring}) rotate(${(1 - outroLogoSpring) * -15}deg)`,
              }}
            >
              <div className="w-full h-full bg-black/90 rounded-[22px] flex items-center justify-center backdrop-blur-md">
                <span className="font-black text-2xl sm:text-3xl text-white tracking-tighter">
                  PM
                </span>
              </div>
            </div>

            {/* 2. PM.MEDIA Bold Monolithic Typography */}
            <h2
              className="text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-none font-sans drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              style={{
                letterSpacing: `${interpolate(outroFrame, [0, 40], [0.05, 0.18], { extrapolateRight: 'clamp' })}em`,
                transform: `scale(${0.9 + outroTextSpring * 0.1})`,
              }}
            >
              PM.MEDIA
            </h2>

            {/* 3. Expanding Neon Laser Beam */}
            <div
              className="h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent my-6 shadow-[0_0_20px_rgba(56,189,248,1)]"
              style={{ width: `${outroBeamWidth}px` }}
            />

            {/* 4. Tagline */}
            <p
              className="text-xs sm:text-base md:text-lg font-extrabold tracking-[0.25em] text-white/90 uppercase font-sans max-w-xl"
              style={{
                opacity: interpolate(outroFrame, [20, 50], [0, 1], { extrapolateRight: 'clamp' }),
                transform: `translateY(${interpolate(outroFrame, [20, 50], [15, 0], { extrapolateRight: 'clamp' })}px)`,
              }}
            >
              SOCIAL MEDIA MARKETING & CINEMA PRODUCTION
            </p>

            {/* 5. Minimal Web Handle & CTA */}
            <div
              className="mt-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase transition-all shadow-xl"
              style={{
                opacity: interpolate(outroFrame, [35, 65], [0, 1], { extrapolateRight: 'clamp' }),
                transform: `translateY(${interpolate(outroFrame, [35, 65], [15, 0], { extrapolateRight: 'clamp' })}px)`,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LET'S SCALE YOUR BRAND // PM.MEDIA</span>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* =================================================================== */}
      {/* MINIMAL CAMERA HUD & LIVE TIMECODE WATERMARK                        */}
      {/* =================================================================== */}
      <AbsoluteFill className="pointer-events-none p-5 sm:p-7 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest text-white/90 uppercase font-mono">
              PM.REEL // 4K 60FPS
            </span>
          </div>

          <div className="px-2.5 py-0.5 rounded bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80 tabular-nums">
            {timecode}
          </div>
        </div>

        {/* Minimal Audio Equalizer Visualizer on Bottom Right */}
        <div className="flex items-end justify-between">
          <div className="text-[10px] font-bold text-white/60 tracking-wider uppercase font-sans">
            STEREO 48kHz • SOCIAL MARKETING
          </div>

          <div className="flex items-end gap-[3px] h-4 bg-black/40 backdrop-blur-sm px-2 py-1 rounded border border-white/10">
            {eqBars.map((bar) => {
              const h = 20 + Math.abs(Math.sin((frame + bar * 10) / 4)) * 80;
              return (
                <div
                  key={bar}
                  className="w-[2px] bg-cyan-400 rounded-full"
                  style={{ height: `${h}%` }}
                />
              );
            })}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
