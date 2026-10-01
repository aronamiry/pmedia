import React from 'react';
import { 
  CameraMinimalisticBoldDuotoneIcon, 
  BoltBoldDuotoneIcon, 
  VideoFrameBoldDuotoneIcon, 
  SliderMinimalisticHorizontalBoldDuotoneIcon, 
  LayersMinimalisticBoldDuotoneIcon, 
  MonitorBoldDuotoneIcon 
} from '@solar-icons/react';
import { useLanguage } from '../../context/LanguageContext';

export const CinemaGearRoster: React.FC = () => {
  const { language } = useLanguage();

  const gearItems = [
    {
      category: 'PRIMARY CINEMA A-CAM',
      model: 'ARRI Alexa Mini LF',
      specs: 'Large Format 4.5K Sensor • 14+ Stops Dynamic Range',
      icon: CameraMinimalisticBoldDuotoneIcon,
      tag: 'A-CAM',
    },
    {
      category: 'HIGH-SPEED & ACTION',
      model: 'RED V-Raptor 8K VV',
      specs: '120fps @ 8K • 600fps @ 2K • Global Shutter Mode',
      icon: BoltBoldDuotoneIcon,
      tag: '8K RAW',
    },
    {
      category: 'ANAMORPHIC GLASS',
      model: 'Cooke Anamorphic /i Full Frame',
      specs: 'True 2x Anamorphic Oval Bokeh • Organic Flare Characteristics',
      icon: VideoFrameBoldDuotoneIcon,
      tag: 'OPTICS',
    },
    {
      category: 'COLOR & FINISHING',
      model: 'DaVinci Resolve Studio 19',
      specs: 'Dual Apple M3 Ultra Studio Nodes • Tangent Wave Surfaces',
      icon: SliderMinimalisticHorizontalBoldDuotoneIcon,
      tag: 'POST',
    },
    {
      category: 'CAMERA STABILIZATION',
      model: 'DJI Ronin 2 + Ready Rig',
      specs: 'Full Remote Cinema Control • Vehicle Tracking Mounts',
      icon: LayersMinimalisticBoldDuotoneIcon,
      tag: 'RIGGING',
    },
    {
      category: 'DIRECTOR MONITORING',
      model: 'SmallHD Cine 24 + Teradek 4K',
      specs: 'Wireless 4K Zero-Latency Video Feed to Video Village',
      icon: MonitorBoldDuotoneIcon,
      tag: 'WIRELESS',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl md:rounded-[48px] bg-gray-900 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blob-blue opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blob-pink opacity-20 pointer-events-none" />

      <div className="relative z-10 space-y-12">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-800 text-brand-pink text-xs font-bold uppercase tracking-wider border border-gray-700">
            <CameraMinimalisticBoldDuotoneIcon className="w-3.5 h-3.5" />
            <span>{language === 'tr' ? 'TEKNİK STANDARTLAR & EKİPMAN' : 'TECHNICAL STANDARDS & GEAR'}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {language === 'tr' ? 'Hollywood Düzeyinde Sinema Donanımı' : 'Hollywood-Grade Production Arsenal'}
          </h3>
          <p className="text-gray-400 font-medium text-base sm:text-lg leading-relaxed">
            {language === 'tr'
              ? 'Projelerimizin her saniyesinde küresel reklam ve film endüstrisinin en gelişmiş optik ve sensör teknolojilerini kullanıyoruz.'
              : 'Deploying the global cinema and commercial industry’s most revered sensor and optical technology for every production.'}
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gearItems.map((gear, idx) => {
            const Icon = gear.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/80 hover:border-brand-blue hover:bg-gray-800 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-700/80 text-brand-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-gray-700 text-gray-200 uppercase">
                    {gear.tag}
                  </span>
                </div>
                <div className="text-[10px] font-sans uppercase tracking-wider text-gray-400 font-bold mb-1">
                  {gear.category}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-light-blue transition-colors">
                  {gear.model}
                </h4>
                <p className="text-xs text-gray-400 font-medium leading-relaxed">
                  {gear.specs}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
