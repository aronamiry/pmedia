import type { Project } from '../types';

export const projectsData: Project[] = [
  // 1. TANITIM OPTİK - LUXURY EYEWEAR COMMERCIAL
  {
    id: 'tanitim-optik-luxury-eyewear',
    title: {
      tr: 'Kutlu Optik — Lüks Gözlük & Mağaza Tanıtım Filmi',
      en: 'Kutlu Optik — Luxury Eyewear Commercial',
    },
    client: 'Kutlu Optik',
    category: 'commercials',
    categoryLabel: {
      tr: 'Reklam Filmi',
      en: 'Commercial',
    },
    productionType: {
      tr: 'Sinematik Moda & Ürün Prodüksiyonu',
      en: 'Cinematic Fashion & Eyewear Stills',
    },
    description: {
      tr: 'Prada, Versace ve Ray-Ban gibi dünya markalarının yeni sezon modellerini yansıtan dinamik ve sinematik moda reklamı.',
      en: 'A high-contrast cinematic commercial showcasing premier luxury eyewear with dynamic lighting and high-fashion styling.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/tanitim-optik-luxury-eyewear.jpg',
    videoUrl: '/media/commercials/tanitim-optik-luxury-eyewear.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x 4K Master Reklam Filmi (60fps)', 'Sosyal Medya Dikey Kurgular', 'Özel Işık & Renk Tasarımı'],
      en: ['1x 4K Master Commercial (60fps)', 'Vertical Social Cutdowns', 'Custom Studio Lighting & Grade'],
    },
    specs: {
      camera: 'Sony Cinema Line 4K 60fps',
      grading: 'DaVinci Resolve Studio (High-Key Fashion Grade)',
      audio: 'Dynamic Electronic Commercial Score',
      aspect: '9:16 Vertical UHD',
    },
    featured: true,
  },

  // 2. AKDİN GOLD - YENİ YIL & ZARAFET
  {
    id: 'akdingold-yeni-yil-zarafet',
    title: {
      tr: 'Akdin Gold — Yeni Yıl & Zarafet Kampanyası',
      en: 'Akdin Gold — New Year Elegance Campaign',
    },
    client: 'Akdin Gold',
    category: 'commercials',
    categoryLabel: {
      tr: 'Reklam Filmi',
      en: 'Commercial',
    },
    productionType: {
      tr: 'Mücevher & Moda Sinematografisi',
      en: 'High Jewelry Cinematography',
    },
    description: {
      tr: '"Yeni yıla kendini mutlu ederek gir" temalı, el işçiliği Trabzon hasırı ve pırlantalı altın kolyelerin ışıltısını ön plana çıkaran prestij reklamı.',
      en: 'A sparkling high jewelry campaign spotlighting handcrafted Trabzon hasırı gold chokers and cuffs with luxury holiday styling.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/akdingold-yeni-yil-zarafet-commercial.jpg',
    videoUrl: '/media/commercials/akdingold-yeni-yil-zarafet-commercial.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Sinematik Reklam Filmi', 'Kampanya Sosyal Teaserları', 'Makro Mücevher Kurguları'],
      en: ['1x Cinematic Commercial', 'Social Teaser Cutdowns', 'Macro Jewelry Stills & Loops'],
    },
    specs: {
      camera: 'Sony FX3 + 90mm Macro G Master',
      grading: 'Warm Gold Lustre Color Grade',
      audio: 'Sensory Acoustic & Spatial Sound',
      aspect: '9:16 Vertical HD',
    },
    featured: true,
  },

  // 3. BEBECİM - BAYRAM KOLEKSİYONU
  {
    id: 'bebecim-bayram-campaign',
    title: {
      tr: 'Bebecim — Bayram Koleksiyonu Lansmanı',
      en: 'Bebecim — Holiday Kids Apparel Campaign',
    },
    client: 'Bebecim',
    category: 'commercials',
    categoryLabel: {
      tr: 'Reklam Filmi',
      en: 'Commercial',
    },
    productionType: {
      tr: 'Dinamik Perakende & Moda Prodüksiyonu',
      en: 'Retail Fashion & Kinetic Storytelling',
    },
    description: {
      tr: 'Çocuk giyim dünyasının neşeli ve renkli enerjisini yüksek tempolu kamera hareketleriyle aktaran bayram lansman filmi.',
      en: 'A vibrant, high-energy retail campaign capturing kids fashion with kinetic camera moves and cheerful holiday pacing.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/bebecim-bayram-campaign.jpg',
    videoUrl: '/media/commercials/bebecim-bayram-campaign.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x 60fps Akıcı Kampanya Filmi', 'Sosyal Medya Kampanya Kurgusu', 'Özel Ses & Ritim Kurgusu'],
      en: ['1x 60fps Fluid Campaign Film', 'Social Media Cutdowns', 'Voiceover & Rhythm Beat Mix'],
    },
    specs: {
      camera: 'Sony Cinema 60fps High-Speed',
      grading: 'Vibrant Commercial Color Profile',
      audio: 'Upbeat Commercial Jingles & Foley',
      aspect: '9:16 Vertical HD',
    },
    featured: true,
  },

  // 4. STILL SHOES - URBAN SNEAKERS & STREETWEAR
  {
    id: 'still-shoes-urban-sneakers',
    title: {
      tr: 'Still Shoes — Kalıp Taban Sokak Modası',
      en: 'Still Shoes — Urban Chunky Sneaker Drop',
    },
    client: 'Still Shoes & Bags',
    category: 'reels',
    categoryLabel: {
      tr: 'Reels & Dikey Video',
      en: 'Reels / Short-Form',
    },
    productionType: {
      tr: 'Sokak Modası & Ritim Kurgusu',
      en: 'Streetwear & Kinetic Beat Pacing',
    },
    description: {
      tr: 'Genç kitleye hitap eden süet ve deri platform spor ayakkabı lansmanı için müzikle birebir senkronize edilmiş dinamik reels kurgusu.',
      en: 'A beat-synced urban footwear reel engineered for high engagement and TikTok/Reels organic reach.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/still-shoes-urban-streetwear-sneakers-reel.jpg',
    videoUrl: '/media/reels/still-shoes-urban-streetwear-sneakers-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Viral Reels Kurgusu', 'Ürün Odaklı Işıklandırma', 'Sosyal Medya Satış Formatları'],
      en: ['1x Viral High-Retention Reel', 'Product Studio Lighting', 'E-Commerce Social Formats'],
    },
    specs: {
      camera: 'Sony Cinema Line + 35mm Prime',
      grading: 'Modern Muted Urban Film Profile',
      audio: 'Bass-Heavy Dynamic Transitions',
      aspect: '9:16 Vertical Full HD',
    },
    featured: true,
  },

  // 5. AKDİN GOLD - 13 SIRA TRABZON HASIRI KELEPÇE
  {
    id: 'akdingold-hasir-kelepce-craft',
    title: {
      tr: 'Akdin Gold — 13 Sıra Trabzon Hasırı Zanaati',
      en: 'Akdin Gold — 13-Row Trabzon Hasırı Craft',
    },
    client: 'Akdin Gold',
    category: 'product',
    categoryLabel: {
      tr: 'Ürün Videosu',
      en: 'Product Video',
    },
    productionType: {
      tr: 'Makro Mücevher & Zanaat Belgeseli',
      en: 'Macro Jewelry Cinematography',
    },
    description: {
      tr: 'Beyaz eldiven sunumuyla 13 sıra Trabzon hasırı altın kelepçenin el işçiliğini ve mikron hassasiyetini gözler önüne seren detay filmi.',
      en: 'White-glove macro cinematography capturing the intricate weaving and gold lustre of a mastercrafted 13-row Trabzon hasırı cuff.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/akdingold-13-sira-hasir-kelepce-reel.jpg',
    videoUrl: '/media/reels/akdingold-13-sira-hasir-kelepce-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x 4K Makro Ürün Kurgusu', 'El İşçiliği Detay Döngüleri', 'Mücevher Katalog Formatları'],
      en: ['1x 4K Macro Product Cut', 'Handcrafted Weave Loops', 'Jewelry Catalog Formats'],
    },
    specs: {
      camera: 'Sony FX3 + 90mm Macro G Master',
      grading: 'Gilded DaVinci Resolve Master Grade',
      audio: 'Organic Micro-Foley & Velvet Sound',
      aspect: '9:16 Vertical UHD',
    },
    featured: true,
  },

  // 6. GOURMET RESTAURANT - KARADENİZ GURME
  {
    id: 'gourmet-restaurant-dining',
    title: {
      tr: 'Karadeniz Gurme — Geleneksel Sofra & Mutfak Deneyimi',
      en: 'Karadeniz Gurme — Traditional Dining Experience',
    },
    client: 'Karadeniz Gurme',
    category: 'reels',
    categoryLabel: {
      tr: 'Gastronomi / Reels',
      en: 'Gastronomy / Social',
    },
    productionType: {
      tr: 'Mutfak Sanatı & Atmosferik Sinematografi',
      en: 'Culinary Arts & Atmosphere',
    },
    description: {
      tr: 'Cızırdayan köfteler, altın sarısı kaygana ve sıcacık otantik masa sunumlarıyla iştah kabartan sinematik restoran tanıtım reelsi.',
      en: 'A sensory culinary reel capturing sizzling köfte, golden pan specialties, and artisanal table atmospheres.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/gourmet-restaurant-dining-experience-reel.jpg',
    videoUrl: '/media/reels/gourmet-restaurant-dining-experience-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Viral Restoran Tanıtım Reels', 'Menü Vurgu Klipleri', 'Sosyal Medya Akış Formatları'],
      en: ['1x Viral Restaurant Reel', 'Menu Highlight Loops', 'Social Feed Cutdowns'],
    },
    specs: {
      camera: 'Sony FX3 + 50mm f/1.2 GM',
      grading: 'Warm Appetizing DaVinci Grade',
      audio: 'Organic Kitchen Sizzle ASMR',
      aspect: '9:16 Vertical HD',
    },
    featured: true,
  },

  // 7. AKDİN GOLD - EDITORIAL PORTRAIT PHOTOGRAPHY
  {
    id: 'akdingold-high-fashion-editorial',
    title: {
      tr: 'Akdin Gold — Editoryal Mücevher Fotoğrafçılığı',
      en: 'Akdin Gold — High Fashion Jewelry Editorial',
    },
    client: 'Akdin Gold',
    category: 'photography',
    categoryLabel: {
      tr: 'Fotoğraf Çekimi',
      en: 'Photography',
    },
    productionType: {
      tr: 'Stüdyo Portre & Lookbook Çekimi',
      en: 'Studio Portrait & Lookbook Campaign',
    },
    description: {
      tr: 'Sony Alpha tam kare sensör ile çekilmiş, ışık gölge dengesinin ve altın kolyelerin her detayının hissedildiği yüksek çözünürlüklü editoryal çekim.',
      en: 'High-resolution full-frame studio portraiture capturing gold chokers, cuffs, and filigree jewelry with editorial lighting.',
    },
    year: '2025',
    thumbnail: '/media/photography/akdingold-editorial-high-fashion-portrait.jpg',
    aspectRatio: '4:5',
    deliverables: {
      tr: ['12x Master Rötuşlu Lookbook Fotoğrafı', 'Basılı Katalog Formatları', 'Sosyal Medya Görsel Varlıkları'],
      en: ['12x Master Retouched Lookbook Frames', 'Print-Ready Catalog CMYK Masters', 'High-Res Social Grid Assets'],
    },
    specs: {
      camera: 'Sony Alpha 7R V + 85mm f/1.4 GM',
      grading: 'Bespoke Muted Luxury Color Retouch',
      audio: 'N/A — Stills Production',
      aspect: '4:5 & 3:2 Editorial',
    },
    featured: true,
  },

  // 8. DÖNEMİX - SEÇ AL COMMERCIAL
  {
    id: 'donemix-sec-al-commercial',
    title: {
      tr: 'Dönemix — Seç Al & Kazan Kampanyası',
      en: 'Dönemix — Pick & Win Gastronomy Promo',
    },
    client: 'Dönemix',
    category: 'commercials',
    categoryLabel: {
      tr: 'Reklam Filmi',
      en: 'Commercial',
    },
    productionType: {
      tr: 'Gastronomi & Sosyal Meydan Okuma',
      en: 'Food Challenge & Commercial Promo',
    },
    description: {
      tr: 'Dönemix lezzetlerini heyecan verici bir yarışma kurgusuyla buluşturan, yüksek tempolu ve viral etkileşimli reklam prodüksiyonu.',
      en: 'An interactive, fast-paced food challenge commercial blending culinary appeal with gamified audience engagement.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/donemix-sec-al-commercial.jpg',
    videoUrl: '/media/commercials/donemix-sec-al-commercial.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Viral Gastronomi Reklamı', 'TikTok & Instagram Kurguları', 'Ses Efektleri & Hareketli Grafikler'],
      en: ['1x Viral Food Commercial', 'TikTok & Instagram Editions', 'Sound Foley & Motion Graphics'],
    },
    specs: {
      camera: 'Sony Cinema Line 4K',
      grading: 'Rich Culinary Contrast Grade',
      audio: 'High-Paced Voiceover & Foley Sound',
      aspect: '9:16 Vertical HD',
    },
    featured: true,
  },

  // 9. AKDİN GOLD - MAĞAZA & INFLUENCER İŞBİRLİĞİ
  {
    id: 'akdingold-store-influencer-collab-reel',
    title: {
      tr: 'Akdin Gold — Mağaza Deneyimi & Influencer Lansmanı',
      en: 'Akdin Gold — In-Store Experience & Influencer Reel',
    },
    client: 'Akdin Gold',
    category: 'social',
    categoryLabel: {
      tr: 'Sosyal Medya',
      en: 'Social Media',
    },
    productionType: {
      tr: 'Influencer İşbirliği & Mağaza Çekimi',
      en: 'Influencer Collaboration & Store Tour',
    },
    description: {
      tr: 'Akdin Gold mağaza atmosferinde yeni koleksiyonların denenmesi ve kombin önerilerini içeren yüksek etkileşimli sosyal medya kurgusu.',
      en: 'An engaging lifestyle reel capturing the showroom experience, styling combinations, and client interaction.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/akdingold-store-influencer-collab-reel.jpg',
    videoUrl: '/media/reels/akdingold-store-influencer-collab-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Influencer Reels Kurgusu', 'Hikaye Formatları', 'Altyazı & Ses Miksajı'],
      en: ['1x Influencer Social Reel', 'Instagram Stories Formats', 'Subtitles & Voiceover Balancing'],
    },
    specs: {
      camera: 'Sony Cinema Line + 24-70mm GM II',
      grading: 'Warm Luxury Retail LUT',
      audio: 'Natural Dialog & Background Ambient Beat',
      aspect: '9:16 Vertical HD',
    },
    featured: false,
  },

  // 10. STILL SHOES - KRİSTAL TOKALI STİLETTO KOLEKSİYONU
  {
    id: 'still-shoes-stiletto-heels',
    title: {
      tr: 'Still Shoes — Kristal Tokalı Stiletto Koleksiyonu',
      en: 'Still Shoes — Jeweled Stiletto Heels Collection',
    },
    client: 'Still Shoes & Bags',
    category: 'product',
    categoryLabel: {
      tr: 'Ürün Videosu',
      en: 'Product Video',
    },
    productionType: {
      tr: 'Lüks Moda & Ürün Detay Çekimi',
      en: 'Luxury Footwear & Macro Reveal',
    },
    description: {
      tr: 'Sivri burun rugan stiletto ayakkabıların kalp şeklindeki ışıltılı kristal taşlarını sergileyen estetik ürün kurgusu.',
      en: 'Hypnotic product reel capturing heart-shaped crystal embellishments and glossy patent leather stilettos.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/still-shoes-stiletto-pointed-heels-reel.jpg',
    videoUrl: '/media/reels/still-shoes-stiletto-pointed-heels-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Ürün Detay Reels', 'E-Ticaret Banner Döngüleri', 'Işıklandırma & Renk Düzeltmesi'],
      en: ['1x Product Detail Reel', 'E-Commerce Hero Loops', 'Precision Lighting & Color Fix'],
    },
    specs: {
      camera: 'Sony Cinema Line + 50mm Prime',
      grading: 'High-Contrast Lustre Grade',
      audio: 'Refined Acoustic Click & Ambient Tone',
      aspect: '9:16 Vertical HD',
    },
    featured: false,
  },

  // 11. STILL SHOES - DİZ ÜSTÜ DERİ ÇİZME & BOTLAR
  {
    id: 'still-shoes-black-leather-boots',
    title: {
      tr: 'Still Shoes — Diz Üstü Deri Çizme & Bot Koleksiyonu',
      en: 'Still Shoes — Knee-High Leather Boots Collection',
    },
    client: 'Still Shoes & Bags',
    category: 'reels',
    categoryLabel: {
      tr: 'Reels & Dikey Video',
      en: 'Reels / Short-Form',
    },
    productionType: {
      tr: 'Sonbahar/Kış Ayakkabı Lansmanı',
      en: 'Autumn/Winter Footwear Drop',
    },
    description: {
      tr: 'Siyah hakiki deri katlamalı çizme ve kışlık botların dokusunu ve esnekliğini vurgulayan dinamik ürün tanıtımı.',
      en: 'Tactile showcase highlighting genuine leather fold-over silhouettes, flexibility, and fall/winter styling.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/still-shoes-black-leather-boots-reel.jpg',
    videoUrl: '/media/reels/still-shoes-black-leather-boots-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Kış Sezonu Reels', 'Platform Boyutları', 'Trend Ses Uyarlaması'],
      en: ['1x Winter Drop Reel', 'Multi-Platform Cutdowns', 'Trending Audio Integration'],
    },
    specs: {
      camera: 'Sony Cinema Line 4K',
      grading: 'Deep Shadow Matte Black Tone',
      audio: 'Rhythmic Studio Foley',
      aspect: '9:16 Vertical HD',
    },
    featured: false,
  },

  // 12. STILL SHOES - TAŞLI TRİKO ÇORAP BOTLAR
  {
    id: 'still-shoes-rhinestone-boots',
    title: {
      tr: 'Still Shoes — Taşlı Triko Çorap Botlar',
      en: 'Still Shoes — Rhinestone Knit Sock Boots',
    },
    client: 'Still Shoes & Bags',
    category: 'social',
    categoryLabel: {
      tr: 'Sosyal Medya',
      en: 'Social Media',
    },
    productionType: {
      tr: 'Işıltılı Ürün & Trend Kurgusu',
      en: 'Sparkle Product & Viral Trend Edit',
    },
    description: {
      tr: 'Işığı yakalayan taş işlemeli çorap botların zarafetini 15 saniyede anlatan yüksek etkileşimli sosyal medya kurgusu.',
      en: 'Catchy 15-second social reel demonstrating sparkle light reflections and sock-boot silhouette in motion.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/still-shoes-rhinestone-sock-boots-reel.jpg',
    videoUrl: '/media/reels/still-shoes-rhinestone-sock-boots-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x 15s Hızlı Etkileşim Kurgusu', 'TikTok & Instagram Uyarlaması', 'Kanca (Hook) Başlıkları'],
      en: ['1x 15s High-Retention Reel', 'TikTok & Instagram Specs', 'Hook Copy & Dynamic Framing'],
    },
    specs: {
      camera: 'Sony Cinema Line 4K',
      grading: 'Glitter Shimmer Highlight Boost',
      audio: 'Fast-Paced Electronic Hook',
      aspect: '9:16 Vertical HD',
    },
    featured: false,
  },

  // 13. AKDİN GOLD - SOLENA ÖZEL KOLEKSİYONU
  {
    id: 'akdingold-solena-choker-and-cuff',
    title: {
      tr: 'Akdin Gold — Solena Özel Koleksiyonu',
      en: 'Akdin Gold — Solena Signature Collection',
    },
    client: 'Akdin Gold & Solena',
    category: 'reels',
    categoryLabel: {
      tr: 'Reels & Dikey Video',
      en: 'Reels / Short-Form',
    },
    productionType: {
      tr: 'Koleksiyon Tanıtımı & 4’lü Bölünmüş Ekran',
      en: 'Collection Showcase & Split-Screen Reel',
    },
    description: {
      tr: 'Solena kolye, küpe, kelepçe ve yüzük setinin uyumunu ritmik kurgu ve bölünmüş ekran dinamiğiyle aktaran tanıtım filmi.',
      en: 'Signature jewelry set reveal featuring synchronized multi-angle perspectives and beat-driven motion.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/akdingold-solena-choker-and-cuff-reel.jpg',
    videoUrl: '/media/reels/akdingold-solena-choker-and-cuff-reel.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Set Tanıtım Reels', 'Ürün Eşleşme Grafikleri', 'Sosyal Medya Boyutlandırması'],
      en: ['1x Complete Set Showcase Reel', 'Product Pairing Graphics', 'Social Media Sizing'],
    },
    specs: {
      camera: 'Sony Cinema Line + Macro Optic',
      grading: 'Rich Gold Lustre Balance',
      audio: 'Modern Acoustic & Ambient Synths',
      aspect: '9:16 Vertical HD',
    },
    featured: false,
  },

  // 14. AKDİN GOLD & SOLENA - LOOKBOOK FOTOĞRAFLARI
  {
    id: 'akdingold-solena-lookbook',
    title: {
      tr: 'Akdin Gold & Solena — Lookbook Serisi',
      en: 'Akdin Gold & Solena — Lookbook Series',
    },
    client: 'Akdin Gold',
    category: 'photography',
    categoryLabel: {
      tr: 'Fotoğraf Çekimi',
      en: 'Photography',
    },
    productionType: {
      tr: 'Mücevher Katalog & Lookbook',
      en: 'Jewelry Catalog & Lookbook',
    },
    description: {
      tr: 'Solena koleksiyonunun zarafetini ve el işçiliği detaylarını belgeleyen yüksek çözünürlüklü lookbook fotoğraf serisi.',
      en: 'High-resolution lookbook stills documenting Solena gold choker, cuff, and filigree ring craftsmanship.',
    },
    year: '2025',
    thumbnail: '/media/photography/akdingold-solena-choker-and-cuff-lookbook.jpg',
    aspectRatio: '4:5',
    deliverables: {
      tr: ['8x Lookbook Fotoğrafı', 'Dijital Katalog Formatları', 'Sosyal Medya Görselleri'],
      en: ['8x Lookbook Frames', 'Digital Catalog Assets', 'Social Grid Imagery'],
    },
    specs: {
      camera: 'Sony Alpha 7R V',
      grading: 'Natural Warm Editorial Grade',
      audio: 'N/A — Stills Production',
      aspect: '4:5 Editorial',
    },
    featured: true,
  },

  // 15. STILL SHOES - DERİ BOT VE AYAKKABI LOOKBOOK
  {
    id: 'still-shoes-leather-editorial',
    title: {
      tr: 'Still Shoes — Deri Ayakkabı & Bot Lookbook',
      en: 'Still Shoes — Leather Boots & Footwear Lookbook',
    },
    client: 'Still Shoes & Bags',
    category: 'photography',
    categoryLabel: {
      tr: 'Fotoğraf Çekimi',
      en: 'Photography',
    },
    productionType: {
      tr: 'Stüdyo Moda & E-Ticaret Lookbook',
      en: 'Studio Fashion & Lookbook Campaign',
    },
    description: {
      tr: 'Siyah katlamalı hakiki deri botlar ve leopar desenli kürk kombinleriyle kış modasını yansıtan katalog çekimi.',
      en: 'Clean editorial lookbook stills highlighting genuine leather footwear paired with seasonal fashion styling.',
    },
    year: '2025',
    thumbnail: '/media/photography/still-shoes-leather-ankle-boots-editorial.jpg',
    aspectRatio: '4:5',
    deliverables: {
      tr: ['10x Master Retouched Lookbook', 'E-Ticaret Ürün Fotoğrafları', 'Banner Boyutları'],
      en: ['10x Master Retouched Lookbook', 'E-Commerce Product Stills', 'Banner Formats'],
    },
    specs: {
      camera: 'Sony Alpha Full-Frame',
      grading: 'Clean Commercial Studio Profile',
      audio: 'N/A — Stills Production',
      aspect: '4:5 Editorial',
    },
    featured: true,
  },

  // 16. PM MEDIA STUDIO - RENK & KURGU SÜİTİ (BTS)
  {
    id: 'pmmedia-studio-suite-dark-ambient',
    title: {
      tr: 'PM Media — Renk Masası & Kurgu Süiti (BTS)',
      en: 'PM Media — Color Grading & Post Suite (BTS)',
    },
    client: 'PM Media Studio',
    category: 'brand',
    categoryLabel: {
      tr: 'Stüdyo & Süreç',
      en: 'Studio & BTS',
    },
    productionType: {
      tr: 'Perde Arkası & Kurgu Süitleri',
      en: 'Behind-the-Scenes & Workflow',
    },
    description: {
      tr: 'DaVinci Resolve renk paneli, loş stüdyo ortamı ve zaman çizelgesi üzerinde milimetrik kurgu aşamalarını belgeleyen stüdyo içeriği.',
      en: 'An authentic behind-the-scenes look into PM Media’s dedicated grading suite, timeline precision, and post-production craft.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/pmmedia-studio-suite-dark-ambient-timeline.jpg',
    videoUrl: '/media/bts/pmmedia-studio-suite-dark-ambient-timeline.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Stüdyo Atmosfer Belgeseli', 'Kurgu & Renk İş Akışı Klipleri', 'Sosyal Medya Süreç Serisi'],
      en: ['1x Studio Ambience Docu-Clip', 'Post-Production Workflow Clips', 'Social Process Stories'],
    },
    specs: {
      camera: 'Cinema Rig + Dark Ambient Light',
      grading: 'Film Noir Shadow Profile',
      audio: 'Mechanical Keyboard & Studio Ambience',
      aspect: '9:16 Vertical',
    },
    featured: false,
  },

  // 17. PM MEDIA STUDIO - SİYAH BEYAZ KURGU ZANAATI (BTS)
  {
    id: 'pmmedia-editing-suite-bw-craft',
    title: {
      tr: 'PM Media — Siyah Beyaz Kurgu Zanaatı',
      en: 'PM Media — B&W Timeline Craft & Precision Edit',
    },
    client: 'PM Media Studio',
    category: 'brand',
    categoryLabel: {
      tr: 'Marka İçeriği',
      en: 'Brand Story',
    },
    productionType: {
      tr: 'Kurgu Masası & Zaman Çizelgesi Odaklı',
      en: 'Timeline & Editing Desk Intimate Stills',
    },
    description: {
      tr: 'Monitör karşısında ritmik klavye dokunuşları ve kare kare montaj sanatını yansıtan estetik siyah beyaz stüdyo kaydı.',
      en: 'Monochrome footage capturing the intimate focus of frame-by-frame cutting, ripple edits, and pacing design.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/pmmedia-editing-suite-bw-craft-timeline.jpg',
    videoUrl: '/media/bts/pmmedia-editing-suite-bw-craft-timeline.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Siyah Beyaz Sanat Kurgusu', 'Montaj Odası Sosyal Kesitleri', 'Zaman Çizelgesi Döngüleri'],
      en: ['1x B&W Cinema Edit', 'Post Room Social Highlights', 'Timeline Loops'],
    },
    specs: {
      camera: 'Cinema Macro Rig',
      grading: 'Monochrome Silver Gelatin Emulation',
      audio: 'Subtle Mechanical Keystrokes ASMR',
      aspect: '9:16 Vertical',
    },
    featured: false,
  },

  // 18. PM MEDIA - YARATICI KURGU & KAHVE SEANSI (BTS)
  {
    id: 'pmmedia-creative-editing-session-cafe',
    title: {
      tr: 'PM Media — Mobil Kurgu & Kahve Seansı',
      en: 'PM Media — Mobile Edit & Creative Cafe Flow',
    },
    client: 'PM Media Studio',
    category: 'events',
    categoryLabel: {
      tr: 'Etkinlik & Yaşam',
      en: 'Lifestyle & BTS',
    },
    productionType: {
      tr: 'Mobil Prodüksiyon & Yaratıcı Akış',
      en: 'Mobile Production & Creative Lifestyle',
    },
    description: {
      tr: 'Stüdyo dışı mekanlarda ham görüntülerin ilk kurgu taslaklarına dönüştüğü sıcak ve samimi yaratıcı çalışma anları.',
      en: 'Behind-the-scenes moments showing field grading, rough cuts on location, and creative workflow in transit.',
    },
    year: '2025',
    thumbnail: '/media/thumbnails/pmmedia-creative-editing-session-cafe.jpg',
    videoUrl: '/media/bts/pmmedia-creative-editing-session-cafe.mp4',
    aspectRatio: '9:16',
    deliverables: {
      tr: ['1x Yaratıcı Yaşam Kurgusu', 'Mobil İş Akışı Sosyal İçeriği', 'Doğal Işık Çekimleri'],
      en: ['1x Lifestyle Process Reel', 'Mobile Editing Social Cut', 'Natural Ambient Cinematography'],
    },
    specs: {
      camera: 'Mobile Cinema Setup',
      grading: 'Warm Cafe Kodachrome Grade',
      audio: 'Ambient Coffeehouse & Acoustic Soundscape',
      aspect: '9:16 Vertical',
    },
    featured: false,
  },
];
