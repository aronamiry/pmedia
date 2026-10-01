import type { ServiceDetail } from '../types';


export const servicesData: ServiceDetail[] = [
  {
    id: 'content-creation',
    title: {
      tr: 'İçerik Üretimi',
      en: 'Content Creation',
    },
    tagline: {
      tr: 'Kaydırmayı durduran, algoritmada öne çıkan özgün fikirler.',
      en: 'Stop the scroll with original ideas built for algorithmic velocity.',
    },
    description: {
      tr: 'Sıradan sosyal medya paylaşımları değil; markanızın kimliğini ve değer teklifini dakikalar değil saniyeler içinde hissettiren kreatif konseptler geliştiriyoruz.',
      en: 'Not just vanity posts. We craft high-retention creative concepts that communicate your brand values and convert attention into brand affinity.',
    },
    items: {
      tr: [
        'Sosyal medya içerikleri',
        'Reels & TikTok videoları',
        'Kısa formatlı (Short-form) videolar',
        'Marka hikaye anlatımı & içerikleri',
        'Kreatif konsept geliştirme',
        'İçerik planlama & yayın stratejisi',
      ],
      en: [
        'Social media content',
        'Reels & TikTok concepts',
        'Short-form vertical video',
        'Brand storytelling & narrative content',
        'Creative concept development',
        'Content planning & calendar strategy',
      ],
    },
    deliverables: {
      tr: [
        'Aylık veya kampanya bazlı içerik takvimi',
        '9:16 dikey & 1:1 kare formatlarda optimize çıktılar',
        'Etkileşim odaklı kanca (hook) metinleri',
        'Telif hakları temizlenmiş ses ve müzik lisansları',
      ],
      en: [
        'Monthly or campaign-based content calendars',
        'Optimized 9:16 vertical & 1:1 square master exports',
        'High-retention hook copy & caption structures',
        'Fully cleared commercial audio & music licensing',
      ],
    },
    highlight: {
      tr: 'İlk 3 saniye kancası garantisi',
      en: 'Engineered 3-second hook retention',
    },
  },
  {
    id: 'video-production',
    title: {
      tr: 'Video Prodüksiyon',
      en: 'Video Production',
    },
    tagline: {
      tr: 'Sinema perdesinden telefon ekranına: ödün vermeyen görsel standart.',
      en: 'From the cinema screen to the mobile display: uncompromised visual standards.',
    },
    description: {
      tr: 'Büyük ölçekli reklam filmlerinden şık ürün lansmanlarına; profesyonel yönetmenler, görüntü yönetmenleri ve ışık ekipleriyle sette hayata geçirilen eksiksiz çekim gücü.',
      en: 'From flagship commercial campaigns to tactile product releases; we bring director-level vision, cinema cameras, and professional lighting crews to every set.',
    },
    items: {
      tr: [
        'Reklam filmleri (TVC & Dijital)',
        'Ürün tanıtım videoları',
        'Marka imaj filmleri (Brand Films)',
        'Tanıtım & lansman videoları',
        'Kurumsal hikaye filmleri',
        'Etkinlik & gösteri çekimleri',
      ],
      en: [
        'Commercial films (Broadcast & Digital)',
        'Tactile product showcase videos',
        'Brand ethos & manifesto films',
        'Launch & promotional campaign videos',
        'Corporate story films',
        'Live event & keynote cinematography',
      ],
    },
    deliverables: {
      tr: [
        '4K / 6K ProRes ve RAW ana master kurgular',
        'Tüm platformlara uygun en-boy oranları (16:9, 9:16, 4:5)',
        'Profesyonel set ekibi, ışık ve kamera donanımı',
        'Ön hazırlık (treatment, storyboard, shotlist)',
      ],
      en: [
        '4K / 6K ProRes and RAW master deliveries',
        'Multi-platform aspect ratio cuts (16:9, 9:16, 4:5)',
        'Full cinema-tier crew, lighting, and camera package',
        'Complete pre-production (treatment, storyboard, shotlist)',
      ],
    },
    highlight: {
      tr: 'RED & ARRI 6K Sinema Ekipmanı',
      en: 'RED & ARRI 6K Cinema Camera Pipeline',
    },
  },
  {
    id: 'photography',
    title: {
      tr: 'Fotoğraf Çekimi',
      en: 'Photography',
    },
    tagline: {
      tr: 'Işık, doku ve kompozisyonun en saf haliyle buluştuğu kareler.',
      en: 'Light, texture, and composition captured in their purest form.',
    },
    description: {
      tr: 'E-ticaret sitenizden basılı reklam panolarına, Instagram akışınızdan basın bültenlerine kadar markanızı lüks ve güvenilir hissettiren profesyonel fotoğrafçılık.',
      en: 'From e-commerce lookbooks to high-impact billboards, social feeds, and editorial press: photography that establishes instant authority and luxury appeal.',
    },
    items: {
      tr: [
        'Ürün fotoğrafçılığı (Stüdyo & Konsept)',
        'Marka & Lookbook fotoğrafçılığı',
        'Sosyal medya için özel fotoğraf setleri',
        'Etkinlik & Lansman fotoğrafçılığı',
      ],
      en: [
        'Product photography (Studio & In-situ)',
        'Brand & editorial lookbook photography',
        'Curated social media image asset banks',
        'High-profile event & launch photography',
      ],
    },
    deliverables: {
      tr: [
        'Yüksek çözünürlüklü rötuşlanmış (retouched) fotoğraflar',
        'Web için optimize edilmiş hafif formatlar',
        'Stüdyo veya lokasyon çekimi',
        'Ticari kullanım ve telif hakkı devri',
      ],
      en: [
        'Full-resolution color-graded & retouched stills',
        'Web-optimized lightweight formats for instant page load',
        'Dedicated studio setup or architectural on-location shoot',
        'Full commercial usage rights transfer',
      ],
    },
    highlight: {
      tr: 'Hassas Renk ve Yüksek Çözünürlüklü Rötuş',
      en: 'Precision Color Fidelity & High-End Retouching',
    },
  },
  {
    id: 'video-editing',
    title: {
      tr: 'Video Kurgu & Post-Prodüksiyon',
      en: 'Video Editing & Post-Production',
    },
    tagline: {
      tr: 'Ham görüntüleri büyüleyici bir görsel ritme dönüştürme sanatı.',
      en: 'Transforming raw footage into a rhythmic, compelling visual experience.',
    },
    description: {
      tr: 'Çektiğiniz veya bize ulaştırdığınız görüntüleri DaVinci Resolve Studio renk bilimi, dinamik ses miksajı, motion graphics ve dikkat çekici tempo ile tamamlıyoruz.',
      en: 'Whether you shot it or we did; we bring DaVinci Resolve Studio color science, immersive sound design, crisp motion graphics, and hypnotic editorial pacing.',
    },
    items: {
      tr: [
        'Reels, Shorts ve TikTok kurguları',
        'YouTube uzun formatlı video kurgusu',
        'Reklam & kampanya kurgusu',
        'Sinematik renk derecelendirme (Color Grading)',
        'Motion graphics & 2D animasyonlar',
        'Özel ses tasarımı (Sound Design & Foley)',
        'Dinamik altyazı ve caption tasarımı',
      ],
      en: [
        'Reels, Shorts, and TikTok dynamic editing',
        'YouTube long-form narrative editing',
        'Commercial & campaign broadcast cuts',
        'Cinematic color grading in DaVinci Resolve',
        'Custom motion graphics & 2D titles',
        'Spatial sound design, mix & mastering',
        'Dynamic animated captions & multi-lingual subtitles',
      ],
    },
    deliverables: {
      tr: [
        'Master ProRes ve H.264 / H.265 teslimatları',
        'Sosyal medya için özel altyazılı versiyonlar',
        'Müzik, SFX ve diyalog ayrılmış ses kanalları (Stems)',
        'Hızlı revizyon süreci (Frame.io entegrasyonu)',
      ],
      en: [
        'Master ProRes and H.264 / H.265 deliverables',
        'Burned-in animated subtitle versions for muted mobile feeds',
        'Clean split audio stems (Music, SFX, Dialogue)',
        'Rapid turnarounds via Frame.io timecoded review',
      ],
    },
    highlight: {
      tr: 'Frame.io ile Hızlı Geri Bildirim',
      en: 'Frame-Accurate Timecoded Review',
    },
  },
  {
    id: 'social-media-content',
    title: {
      tr: 'Sosyal Medya İçerik Yönetimi',
      en: 'Social Media Content Packages',
    },
    tagline: {
      tr: 'Düzenli, tutarlı ve yüksek standartlı bir akış için tam destek.',
      en: 'Consistent, premium, high-frequency media flow built for brand growth.',
    },
    description: {
      tr: 'Markanızın sosyal medyadaki varlığını şansa bırakmayın. Aylık içerik paketlerimizle her hafta en kaliteli videoları yayına hazır teslim edelim.',
      en: 'Never wonder what to post again. Our recurring content packages give you a steady pipeline of polished, audience-tested videos every single week.',
    },
    items: {
      tr: [
        'Anahtar teslim içerik paketleri',
        'Aylık düzenli video ve görsel üretimi',
        'Platforma özel formatlama (Instagram, TikTok, YouTube, LinkedIn)',
        'Kreatif sanat yönetimi & marka dili oluşturma',
      ],
      en: [
        'Turnkey content retainer packages',
        'Monthly recurring video & image production runs',
        'Platform-native formatting (Instagram, TikTok, YouTube, LinkedIn)',
        'Creative art direction & cohesive brand language',
      ],
    },
    deliverables: {
      tr: [
        'Aylık 12, 16 veya 24 adet hazır dikey video',
        'Trend analizleri ve her video için özel metinler',
        'Planlı aylık stüdyo ve dış çekim seansları',
        'Performans değerlendirme ve içerik optimizasyonu',
      ],
      en: [
        '12, 16, or 24 fully finished vertical videos per month',
        'Trend analysis and tailored post captions for every clip',
        'Dedicated monthly studio & outdoor shoot dates',
        'Monthly review and creative performance optimization',
      ],
    },
    highlight: {
      tr: 'Aylık Düzenli İçerik Partnerliği',
      en: 'Predictable Monthly Production Partner',
    },
  },
];
