import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { PageRoute } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BoltBoldDuotoneIcon,
  CheckCircleBoldDuotoneIcon,
  ArrowRightUpBoldIcon,
  StarsBoldDuotoneIcon,
  CrownStarBoldDuotoneIcon,
  MagicWandBoldDuotoneIcon,
  VideocameraRecordBoldDuotoneIcon,
  ClapperboardPlayBoldDuotoneIcon,
  LayersBoldDuotoneIcon,
  LightbulbBoldDuotoneIcon,
  HeartBoldDuotoneIcon,
} from '@solar-icons/react';

interface MarketingPageProps {
  onOpenContact: () => void;
  setCurrentPage?: (page: PageRoute) => void;
}

interface SectorImpact {
  id: string;
  nameTr: string;
  nameEn: string;
  taglineTr: string;
  taglineEn: string;
  reachMultiplier: string;
  conversionLift: string;
  aovLift: string;
  recommendationTr: string;
  recommendationEn: string;
  deliverablesTr: string[];
  deliverablesEn: string[];
  quote: string;
}

const sectorsData: SectorImpact[] = [
  {
    id: 'fashion',
    nameTr: 'Moda, Ayakkabı & Sokak Giyimi',
    nameEn: 'Fashion, Footwear & Streetwear',
    taglineTr: 'Still Shoes gibi dinamik kentsel lookbooklar ve ritmik Reels serileri',
    taglineEn: 'Dynamic urban lookbooks and rhythmic Reels drops like Still Shoes',
    reachMultiplier: '4.8x',
    conversionLift: '+240%',
    aovLift: '+72%',
    recommendationTr: 'Dikey 9:16 ritmik kurgulu Reels serileri, sokak modası stüdyo lookbook çekimleri ve hızlı tempoyla değişen kombin kancaları.',
    recommendationEn: 'Vertical 9:16 rhythmic Reels cutdowns, street-style studio lookbooks, and high-velocity outfit hook variations.',
    deliverablesTr: [
      '12x Ritmik Dikey Reels / TikTok Kurgusu',
      '1x 4K Yatay Sezon Lansman Filmi',
      '20x Retouch Edilmiş E-Ticaret & Lookbook Karesi',
      '3 Farklı Giriş Kancasıyla A/B Reklam Test Paketleri'
    ],
    deliverablesEn: [
      '12x Rhythmic Vertical Reels / TikTok Drops',
      '1x 4K Master Hero Season Launch Commercial',
      '20x Master Retouched E-Commerce & Lookbook Stills',
      '3 Distinct Hook Variations for A/B Ad Testing'
    ],
    quote: '“Moda sektöründe ürünün dikişi, kumaş akışı ve modeldeki duruşu sinematik gösterilmezse müşteri sepete eklemez.”'
  },
  {
    id: 'jewelry',
    nameTr: 'Mücevher, Kuyumculuk & Lüks Aksesuar',
    nameEn: 'Haute Jewelry & Luxury Goods',
    taglineTr: 'Akdin Gold gibi mikroskobik altın zanaatı ve yüksek editoryal prestij',
    taglineEn: 'Microscopic gold craft and haute editorial prestige like Akdin Gold',
    reachMultiplier: '5.2x',
    conversionLift: '+310%',
    aovLift: '+120%',
    recommendationTr: '90mm/100mm 1:1 makro lenslerle altın dokusu ve taş ışıltısı vurgusu. Lüks ve asil DaVinci renk derecelendirmesiyle güven bariyerini aşan estetik.',
    recommendationEn: '90mm/100mm 1:1 macro optics showcasing gold mesh weave and diamond refraction. Haute DaVinci grading that dismantles purchase hesitation.',
    deliverablesTr: [
      '8x Makro Zanaat & Detay Dikey Filmi',
      '1x Haute Joaillerie Sinematik Marka Belgeseli',
      '15x Ultra-Yüksek Çözünürlüklü Makro Portre',
      'Kuyumculuk Fuarı ve Vitrin Loop Formatları'
    ],
    deliverablesEn: [
      '8x Macro Craftsmanship & Gemstone Reels',
      '1x Haute Joaillerie Cinematic Brand Documentary',
      '15x Ultra-Resolution Specular Macro Portraits',
      'Trade Fair & In-Store Digital Signage Loops'
    ],
    quote: '“Kuyumculukta müşteriye güven veren tek şey, altının işçiliğindeki en küçük detayı ekranda kusursuz görebilmesidir.”'
  },
  {
    id: 'ecommerce',
    nameTr: 'DTC E-Ticaret & Tüketici Markaları',
    nameEn: 'DTC E-Commerce & Consumer Brands',
    taglineTr: 'Kaydırmayı durduran doğrudan dönüşüm ve sepet büyütme odaklı video kurguları',
    taglineEn: 'Direct-response conversion video engines that crush ad fatigue and scale ROAS',
    reachMultiplier: '3.6x',
    conversionLift: '+185%',
    aovLift: '+54%',
    recommendationTr: 'İlk 1.5 saniyede problem-çözüm kancası, ürünün fonksiyonel detayını gösteren dinamik yakın çekimler ve net aksiyon çağrısı (CTA).',
    recommendationEn: 'First 1.5-second pattern interrupt, functional product micro-features in motion, and psychological CTA triggers.',
    deliverablesTr: [
      '16x Meta & TikTok Uyumlu Dikey Reklam Formatı',
      'Web Sitesi Hero Sayfası İçin Sessiz Otomatik Video Döngüleri',
      'Müşteri Deneyimi & Kutu Açılımı Sinematik Estetiği',
      'Sosyal Medya Hikaye ve Banner Tasarım Desteği'
    ],
    deliverablesEn: [
      '16x Meta & TikTok Optimized Direct-Response Creatives',
      'Silent Auto-Playing Website Hero Video Loops',
      'Cinematic Unboxing & Sensory Product Demo Cuts',
      'Dynamic Social Story & Retargeting Variants'
    ],
    quote: '“Meta Ads’de hedefleme bitti; kazananı belirleyen tek faktör reklamın görsel kalitesi ve kancasındaki hızdır.”'
  },
  {
    id: 'hospitality',
    nameTr: 'Premium Hizmet, Restoran & Mekan',
    nameEn: 'Premium Hospitality, Venues & Lifestyle',
    taglineTr: 'Mekanın aurasını, lezzet dokusunu ve prestijini ekrana taşıyan sinematik turlar',
    taglineEn: 'Cinematic sensory tours capturing the atmosphere, culinary craft, and prestige',
    reachMultiplier: '4.1x',
    conversionLift: '+220%',
    aovLift: '+45%',
    recommendationTr: 'Geniş açı mimari sinema lensleri, sıcak renk profili, ağır çekim mutfak/hazırlık anları ve mekana gitme arzusu yaratan ritmik atmosfer.',
    recommendationEn: 'Wide anamorphic interior staging, warm hospitality color grading, 120fps slow-motion culinary craft, and irresistible vibe pacing.',
    deliverablesTr: [
      '6x Ritmik Mekan Deneyimi & Atmosfer Reels’ı',
      '1x Sinematik Tanıtım & Vizyon Filmi',
      '25x Yüksek Çözünürlüklü Mekan & Menü Fotoğrafı',
      'Google Maps & Web Sitesi İçin 4K Sanal Vitrin'
    ],
    deliverablesEn: [
      '6x Kinetic Atmosphere & Experience Reels',
      '1x Cinematic Brand Philosophy Film',
      '25x Master High-End Interior & Culinary Stills',
      '4K Digital Showcase for Google Maps & Website'
    ],
    quote: '“Müşteri mekana gelmeden önce orada olmayı arzulamalıdır. Bunu sadece sinematik ışık ve ses başarabilir.”'
  },
];

const faqs = [
  {
    qTr: 'Neden bir çalışanımıza iPhone ile video çektirmek yerine PM Media ile çalışmalıyız?',
    qEn: 'Why hire PM Media instead of just having an employee film on an iPhone?',
    aTr: 'iPhone gündelik hikaye ve kamera arkası için harikadır; fakat bir markanın vitrini ve reklam kampanyası telefon ile çekildiğinde tüketici bilinçaltında "amatör işletme" etiketi yapıştırır. Sony Venice & FX6 6K sinema sensörleri, özel prime lensler, kontrollü ışık matematiği ve profesyonel DaVinci renk derecelendirmesi; ürününüzü sıradanlıktan çıkarıp lüks arzu nesnesine dönüştürür. Müşteriler yüksek bütçeli gördükleri markalara 3-5 kat daha fazla ödemeye gönüllüdür.',
    aEn: 'An iPhone is fine for raw behind-the-scenes stories, but when your primary advertising and product showcase looks like phone footage, buyers subconsciously perceive your brand as amateur and cheap. Our Sony Venice & FX6 cinema rigs, prime optics, controlled specular lighting, and DaVinci Resolve color mastery turn your product into an object of luxury desire. Consumers willingly pay 3x-5x higher prices for brands that project unmistakable visual superiority.'
  },
  {
    qTr: 'Geleneksel ajansların pazarlamada başarısız olmasının asıl sebebi nedir?',
    qEn: 'What is the real reason traditional agencies fail at marketing today?',
    aTr: 'Geleneksel ajanslar 2015 televizyon kafasıyla çalışır: İlk 10 saniye logoyu gösterir, yavaş konuşmalar koyar ve haftalarca süren e-posta toplantılarıyla bütçenizi tüketir. 2026 sosyal medya dünyasında ise izleyicinin dikkat eşiği 1.5 saniyedir. PM Media, ilk 90 karede psikolojik kanca uygular, ritmik kurguyla izleyiciyi ekrana hapseder ve her çekimden 15+ farklı platform formatı üreterek paranızın tam karşılığını verir.',
    aEn: 'Traditional agencies still operate with a 2015 mindset: slow 10-second corporate logo intros, boring corporate voiceovers, and endless bureaucratic email meetings while your ad budget evaporates. In the 2026 feed economy, users decide to swipe in 1.5 seconds. PM Media engineers thumb-stopping psychological hooks in the first 90 frames, locks retention with kinetic pacing, and extracts 15+ omnichannel assets from every shoot day.'
  },
  {
    qTr: 'Kreatif kalite, Meta ve TikTok reklam maliyetlerimizi (CAC/ROAS) nasıl düşürür?',
    qEn: 'How does high-end creative actually lower our ad costs (CAC) and increase ROAS?',
    aTr: 'Meta (Advantage+) ve TikTok reklam algoritmaları, kullanıcıların sonuna kadar izlediği, paylaştığı ve kaydettiği videolara indirim yapar (daha düşük CPM ve CPC). Zayıf bir videoyla insanlara reklam göstermek için Meta’ya binlerce lira harcamanız gerekirken, kancası güçlü sinematik bir video organik gibi yayılır ve reklam maliyetinizi yarı yarıya düşürür.',
    aEn: 'Meta (Advantage+) and TikTok ad auction algorithms heavily reward content with high watch time, replays, and shares with cheaper CPMs and lower cost-per-click. Mediocre videos suffer ad fatigue and sky-high ad costs, whereas thumb-stopping cinematic creative acts as its own targeting mechanism, lowering acquisition costs by up to 50%.'
  },
  {
    qTr: 'Tek bir çekim gününden ne kadar içerik elde ederiz?',
    qEn: 'How much content do we actually get from a single production day?',
    aTr: 'PM Media’da "tek bir video çekip gitmek" yoktur. Tek bir stüdyo veya lokasyon çekim gününde; ana lansman filmi, 12-16 farklı dikey Reels/TikTok varyasyonu, e-ticaret için editoryal fotoğraflar, ürün makroları ve reklam testleri için farklı kancalar eş zamanlı üretilir. Markanız 2-3 ay boyunca yüksek kaliteli içerikle kesintisiz beslenir.',
    aEn: 'At PM Media, we don’t just shoot one video and leave. In a single orchestrated production day, we capture your hero brand commercial, 12-16 distinct vertical Reels with varied hooks for A/B testing, master retouched e-commerce stills, and micro-loops. Your brand stays loaded with premier content for months.'
  }
];

export const MarketingPage: React.FC<MarketingPageProps> = ({
  onOpenContact,
  setCurrentPage,
}) => {
  const { language } = useLanguage();
  const [activeSector, setActiveSector] = useState<string>('fashion');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const selectedSector = sectorsData.find(s => s.id === activeSector) || sectorsData[0];

  const handleWorksClick = () => {
    if (setCurrentPage) {
      setCurrentPage('works');
    } else {
      window.location.hash = 'works';
    }
  };

  return (
    <div className="w-full bg-white text-gray-900 pt-24 sm:pt-28 pb-20 selection:bg-brand-blue selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-6 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-tr from-brand-blue/15 via-brand-pink/15 to-amber-400/10 blur-[100px] pointer-events-none rounded-full -z-10" />

        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <BoltBoldDuotoneIcon className="w-4 h-4 text-brand-blue animate-pulse" />
            <span>{language === 'tr' ? 'BÜYÜME BİLİMİ & KREATİF DÖNÜŞÜM' : 'GROWTH SCIENCE & CREATIVE ROI'}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-950 font-sans leading-[1.08]"
          >
            {language === 'tr' ? (
              <>
                Pazarlamada Bütçe Yakmayın.{' '}
                <span className="text-gradient">Ciro Üreten Bir Görsel Güç</span> İnşa Edin.
              </>
            ) : (
              <>
                Stop Burning Cash on Ads.{' '}
                <span className="text-gradient">Build a High-Converting</span> Visual Engine.
              </>
            )}
          </motion.h1>

          {/* Subtitle with Reddit context */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 font-sans font-medium leading-relaxed max-w-3xl mx-auto"
          >
            {language === 'tr'
              ? 'İşletmelerin %90’ı pazarlamayı verimsiz bir masraf olarak görür çünkü geleneksel ajansların sunduğu sıkıcı videolar ve sahte tıklamalar satış getirmez. 2026 dikkat ekonomisinde kazananlar; sinema kalitesinde görsel prestij ve ilk 1.5 saniyede kaydırmayı durduran kreatif mühendislik üretenlerdir.'
              : '90% of businesses view marketing as an annoying expense because traditional agencies deliver boring corporate videos and fake clicks that never ring the register. In 2026, the brands that win command attention with cinema-grade aesthetic prestige and thumb-stopping creative engineering in the first 1.5 seconds.'}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gray-950 hover:bg-gray-800 text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>{language === 'tr' ? 'Büyüme Stratejinizi Başlatın' : 'Start Your Growth Strategy'}</span>
              <ArrowRightUpBoldIcon className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={handleWorksClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <ClapperboardPlayBoldDuotoneIcon className="w-4 h-4 text-brand-pink" />
              <span>{language === 'tr' ? 'Seçilmiş İşlerimizi İnceleyin' : 'Explore Selected Work'}</span>
            </button>
          </motion.div>
        </div>

        {/* 4 KEY STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-14 sm:mt-20">
          {[
            {
              value: '1.5s',
              label: language === 'tr' ? 'Kritik Kanca Eşiği' : 'Thumb-Stop Window',
              desc: language === 'tr' ? 'İzleyicinin geçme ya da kalma karar süresi' : 'Time users take to stay or swipe past',
              color: 'text-brand-blue',
              bg: 'bg-blue-50/80 border-blue-100',
            },
            {
              value: '3.4x',
              label: language === 'tr' ? 'Dönüşüm Çarpanı' : 'Conversion Multiplier',
              desc: language === 'tr' ? 'Sinematik ürün sunumuyla artan satış' : 'Higher checkout intent vs phone clips',
              color: 'text-emerald-600',
              bg: 'bg-emerald-50/80 border-emerald-100',
            },
            {
              value: '+68%',
              label: language === 'tr' ? 'Sepet Tutarı Artışı' : 'AOV Lift Index',
              desc: language === 'tr' ? 'Lüks algıyla yükselen ürün fiyat gücü' : 'Driven by haute aesthetic brand trust',
              color: 'text-brand-pink',
              bg: 'bg-rose-50/80 border-rose-100',
            },
            {
              value: '50M+',
              label: language === 'tr' ? 'Organik İzlenme' : 'Organic Views',
              desc: language === 'tr' ? 'Partner markalarımıza sıfır reklam bütçesiyle erişim' : 'Zero-ad-spend reach on client drops',
              color: 'text-indigo-600',
              bg: 'bg-indigo-50/80 border-indigo-100',
            },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 sm:p-6 rounded-2xl border ${stat.bg} backdrop-blur-sm flex flex-col justify-between space-y-2`}
            >
              <div className={`text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight ${stat.color}`}>
                {stat.value}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 font-sans">{stat.label}</h4>
                <p className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed mt-0.5">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. THE REDDIT REALITY CHECK: WHY 90% OF MARKETING FAILS */}
      <section className="bg-gray-50/80 border-y border-gray-100 py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-600 text-xs font-bold uppercase tracking-wider mb-3">
              <StarsBoldDuotoneIcon className="w-3.5 h-3.5" />
              <span>{language === 'tr' ? 'GİRİŞİMCİLERİN GERÇEĞİ // REDDIT ANALİZİ' : 'FOUNDER REALITY CHECK // REDDIT INSIGHTS'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 font-sans leading-tight">
              {language === 'tr'
                ? 'Reddit ve Sektörün Acı İtirafı: "Pazarlamam Neden Çalışmıyor?"'
                : 'What Founders on Reddit Admit: "Why Isn’t My Marketing Working?"'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium mt-3 leading-relaxed">
              {language === 'tr'
                ? 'r/entrepreneur, r/ecommerce ve r/marketing topluluklarında her gün binlerce işletme sahibinin tartıştığı acı gerçek: Zayıf kreatif bütçeyi yutar, sinematik ve vurucu kreatif ise işletmeyi pazar lideri yapar.'
                : 'In communities like r/entrepreneur and r/marketing, thousands of founders complain about the exact same trap: weak, generic creative eats your runway, while cinematic hook engineering creates market leaders.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                titleTr: 'Canva ve Telefon Çekimi Tuzağı',
                titleEn: 'The Canva & iPhone Video Illusion',
                descTr: 'Ürününüz ne kadar iyi olursa olsun; amatör ışık ve alelade telefon videosu ucuzluk hissi verir. Müşteri, gördüğü görselin kalitesini doğrudan ürününüzün kalitesiyle eşitler.',
                descEn: 'No matter how great your product is, amateur lighting and shaky phone footage instantly trigger cheapness. Consumers subconsciously judge the caliber of your business by the caliber of your visual identity.',
                quote: '“Telefonu iyi bir stajyer tuttum, param cebimde kalsın dedim. 6 ayda sıfır büyüme oldu. Ne zaman ki sinema kalitesinde prodüksiyona geçtik, ciromuz 4 katına çıktı.”',
                source: 'r/ecommerce • 2.4k upvotes',
                borderColor: 'hover:border-rose-300',
              },
              {
                num: '02',
                titleTr: 'Sıkıcı 10 Saniyelik Kurumsal Girişler',
                titleEn: 'The Boring 10-Second Corporate Intro',
                descTr: 'Logoyla başlayan, ağır fon müziğiyle 10 saniye hiçbir şey anlatmayan videolar artık ölü doğuyor. TikTok ve Instagram algoritmaları, ilk 2 saniyede terk edilen içerikleri derhal bastırır.',
                descEn: 'Videos starting with slow logos and elevator music die instantly. TikTok and Instagram algorithms punish and suppress content that drops viewers in the first 2 seconds.',
                quote: '“Eski ajansımızın hazırladığı 40 saniyelik tanıtım filmini kendi çalışanlarımız bile sonuna kadar izlemiyordu. Çünkü kanca yoktu.”',
                source: 'r/marketing • 1.8k upvotes',
                borderColor: 'hover:border-amber-300',
              },
              {
                num: '03',
                titleTr: 'Hayalet Tıklamalar vs. Gerçek Kasa',
                titleEn: 'Vanity Impressions vs. Cold Cash',
                descTr: 'Ajanslar raporlarında 100.000 gösterim gösterip kutlama yapar; fakat kasa boştur. Görsel cazibesi ve net satın alma arzusu yaratmayan reklam sadece para yakar.',
                descEn: 'Agencies love celebrating 100,000 cheap impressions while your checkout dashboard is empty. Without high emotional resonance and direct conversion triggers, ads just burn your runway.',
                quote: '“Tıklamalar tavan yaptı ama tek bir sipariş gelmedi. Çünkü reklam müşteride arzu uyandırmıyordu; sadece akışı işgal ediyordu.”',
                source: 'r/smallbusiness • 3.1k upvotes',
                borderColor: 'hover:border-blue-300',
              },
              {
                num: '04',
                titleTr: 'Kreatif Artık Yeni Hedeflemedir',
                titleEn: 'Creative Is Now The Targeting',
                descTr: 'Meta ve TikTok yapay zeka reklam algoritmalarında artık gizli kitle hedefleme hileleri çalışmıyor. Doğru kitleyi çeken ve reklam maliyetini düşüren tek şey, videonun görsel kalitesidir.',
                descEn: 'With AI-driven ad algorithms on Meta and TikTok, interest targeting hacks are obsolete. The only lever that attracts the ideal high-paying buyer is the quality and framing of the video itself.',
                quote: '“Medya satın alma gerçeği: Kötü reklam bütçe yakar, sinematik ve vurucu bir video reklamı ise kendi kendini optimize eder.”',
                source: 'r/PPC • 1.5k upvotes',
                borderColor: 'hover:border-emerald-300',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm transition-all duration-300 ${item.borderColor} hover:shadow-xl flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-widest text-gray-400 font-mono">
                      PITFALL // {item.num}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 font-mono bg-gray-100 px-2.5 py-1 rounded-full">
                      {item.source}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-gray-950 font-sans">
                    {language === 'tr' ? item.titleTr : item.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                    {language === 'tr' ? item.descTr : item.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 bg-gray-50/70 p-4 rounded-2xl">
                  <p className="text-xs text-gray-700 italic font-medium leading-relaxed">
                    {item.quote}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SIDE-BY-SIDE COMPARISON: OLD AGENCY WAY VS PM MEDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <MagicWandBoldDuotoneIcon className="w-3.5 h-3.5" />
            <span>{language === 'tr' ? 'FARKIMIZ VE STANDARDI' : 'THE CONTRAST & STANDARD'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 font-sans leading-tight">
            {language === 'tr'
              ? 'Eski Ajans Modeli vs. PM Media Standardı'
              : 'Outdated Agency Model vs. The PM Media Standard'}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium mt-3">
            {language === 'tr'
              ? 'Hantal süreçler, amatör çekimler ve boş vaatler yerine; ölçülebilir görsel üstünlük.'
              : 'No bloated bureaucracy or empty vanity reports. Just high-converting visual dominance.'}
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="bg-white rounded-3xl border border-gray-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Left: The Old Way */}
            <div className="p-6 sm:p-10 bg-gray-50/40">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg">
                  ✕
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 font-sans">
                    {language === 'tr' ? 'Geleneksel Ajans / Amatör Yol' : 'Traditional Agency / DIY Approach'}
                  </h3>
                  <p className="text-xs text-rose-600 font-bold">
                    {language === 'tr' ? 'Bütçe yakar, dikkat çekmez' : 'Burns ad budget & ignores retention'}
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-6 text-xs sm:text-sm font-medium text-gray-600">
                {[
                  {
                    label: language === 'tr' ? 'Kamera & Optik' : 'Camera & Optics',
                    val: language === 'tr' ? 'Düz telefon çekimi ya da jenerik internet stok videoları' : 'Shaky phone footage or lifeless generic stock videos',
                  },
                  {
                    label: language === 'tr' ? 'Kanca & Hız' : 'Hook & Velocity',
                    val: language === 'tr' ? 'Yavaş logolu girişler; izleyici 2. saniyede geçer' : 'Slow corporate intros; viewers drop off in 2 seconds',
                  },
                  {
                    label: language === 'tr' ? 'Marka Prestiji' : 'Brand Perception',
                    val: language === 'tr' ? 'Sıradan görünüm; indirim yapmaya ve fiyat kırmaya zorlar' : 'Commodity-grade look; forces price wars & discounts',
                  },
                  {
                    label: language === 'tr' ? 'Teslimat & Hız' : 'Turnaround Speed',
                    val: language === 'tr' ? 'Haftalarca süren e-posta trafiği ve bürokratik revizyonlar' : 'Weeks of endless email chains and corporate red tape',
                  },
                  {
                    label: language === 'tr' ? 'Varlık Çeşitliliği' : 'Asset Multiplier',
                    val: language === 'tr' ? 'Tek bir yatay video için yüksek ajans faturası' : '1 single horizontal video with high markup invoices',
                  },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-rose-500 font-bold mt-0.5 text-base">✕</span>
                    <div>
                      <span className="font-bold text-gray-900 block text-xs uppercase tracking-wider">{row.label}:</span>
                      <span className="text-gray-600 leading-relaxed">{row.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The PM Media Way */}
            <div className="p-6 sm:p-10 bg-gradient-to-b from-brand-blue/[0.03] to-transparent">
              <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  ✓
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-gray-900 font-sans">
                    {language === 'tr' ? 'PM Media Standardı (Doğru Yol)' : 'The PM Media Standard (Done Right)'}
                  </h3>
                  <p className="text-xs text-emerald-600 font-bold">
                    {language === 'tr' ? 'Kaydırmayı durdurur, satış getirir' : 'Stops the thumb & unlocks high margins'}
                  </p>
                </div>
              </div>

              <div className="space-y-6 pt-6 text-xs sm:text-sm font-medium text-gray-700">
                {[
                  {
                    label: language === 'tr' ? 'Kamera & Optik' : 'Camera & Optics',
                    val: language === 'tr' ? 'Sony Venice & FX6 6K Sinema kameraları, özel prime lensler, DaVinci Studio renk' : 'Sony Venice & FX6 6K Cinema rigs, prime glass, DaVinci Resolve color suites',
                  },
                  {
                    label: language === 'tr' ? 'Kanca & Hız' : 'Hook & Velocity',
                    val: language === 'tr' ? 'İlk 1.5 saniyede psikolojik dikkat kancası, ritmik kurgu ve ses frekansı tasarımı' : 'Engineered 1.5s pattern interrupt, kinetic cuts, tailored sound design',
                  },
                  {
                    label: language === 'tr' ? 'Marka Prestiji' : 'Brand Perception',
                    val: language === 'tr' ? 'Lüks & yüksek moda editoryali; ürünün algılanan değerini 3-5 katına çıkarır' : 'Haute editorial aesthetic; multiplies perceived value and unlocks luxury pricing',
                  },
                  {
                    label: language === 'tr' ? 'Teslimat & Hız' : 'Turnaround Speed',
                    val: language === 'tr' ? 'Çevik stüdyo yönetimi, hızlı teslimat ve yayına hazır dikey/yatay formatlar' : 'Agile studio execution, swift turnaround, and deployment-ready delivery',
                  },
                  {
                    label: language === 'tr' ? 'Varlık Çeşitliliği' : 'Asset Multiplier',
                    val: language === 'tr' ? '1 çekim gününden 15+ dikey Reels, 4K ana film, makro fotoğraflar ve hikayeler' : '1 shoot day yields 15+ vertical Reels, 4K hero film, macro photography & story cutdowns',
                  },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircleBoldDuotoneIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-950 block text-xs uppercase tracking-wider">{row.label}:</span>
                      <span className="text-gray-700 leading-relaxed font-semibold">{row.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 4 PILLARS OF HIGH-ROI CREATIVE */}
      <section className="bg-gray-50/70 border-t border-gray-200/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-bold uppercase tracking-wider mb-3">
              <LayersBoldDuotoneIcon className="w-3.5 h-3.5" />
              <span>{language === 'tr' ? 'ÜRETİM FELSEFEMİZ // 4 TEMEL SÜTUN' : 'OUR BLUEPRINT // 4 CORE PILLARS'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 font-sans leading-tight">
              {language === 'tr'
                ? 'PM Media Neden Çalışır? 4 Temel Sütun.'
                : 'Why PM Media Works: 4 Non-Negotiable Pillars.'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium mt-3 leading-relaxed">
              {language === 'tr'
                ? 'Görsel sanatı doğrudan satış psikolojisiyle birleştiren üretim disiplinimiz.'
                : 'Bridging pure cinematic art with direct-response consumer psychology.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                num: '01',
                titleTr: 'Algılanan Değer Mühendisliği (Lüks Efekti)',
                titleEn: 'Perceived Value Engineering (The Luxury Effect)',
                descTr: 'Bir ürünü 500 TL yerine 3.500 TL’ye sattıran şey arkasındaki görsel auradır. Akdin Gold ve moda partnerlerimizde uyguladığımız makro ışık disiplini, müşterinin güven bariyerini ilk saniyede yıkar.',
                descEn: 'What enables a brand to command $300 instead of $30 is the visual aura. Our macro lighting setups and color fidelity dismantle skepticism instantly.',
                highlightTr: 'Fiyat kırmak yerine ürünün algılanan değerini yükseltiriz.',
                highlightEn: 'Command premium pricing without resorting to margin-killing discounts.',
                icon: CrownStarBoldDuotoneIcon,
                color: 'text-amber-500',
                border: 'hover:border-amber-200',
              },
              {
                num: '02',
                titleTr: '1.5 Saniyelik Kanca (Thumb-Stopping Hook)',
                titleEn: '1.5-Second Thumb-Stopping Hooks',
                descTr: 'İnsan beyni sosyal medya akışında sürekli dopamin arar. Ritmik kesmeler, makro doku şokları ve ses frekansı tasarımımızla kullanıcının başparmağını ekranda dondururuz.',
                descEn: 'The human brain seeks dopamine stimulation in the feed. We integrate micro-surprises, rhythmic visual drops, and optical depth to freeze the thumb in place.',
                highlightTr: 'Kaydırma refleksini kırıp dikkati markanıza kilitleriz.',
                highlightEn: 'Interrupt the doomscroll and own user attention before competitors.',
                icon: BoltBoldDuotoneIcon,
                color: 'text-brand-blue',
                border: 'hover:border-blue-200',
              },
              {
                num: '03',
                titleTr: 'Algoritma Uyumlu İçerik Mimarisi',
                titleEn: 'Algorithm-Native Architecture',
                descTr: 'Instagram ve TikTok algoritmaları izlenme süresini (watch time) ve paylaşımı ödüllendirir. Çektiğimiz her dikey format, platformların organik keşfetine girmesi için optimize edilir.',
                descEn: 'Instagram and TikTok reward retention curves and shareability. Every vertical cutdown is formatted to maximize algorithmic distribution on explore feeds.',
                highlightTr: 'Reklam harcamanız olmadan milyonlara ulaşma gücü.',
                highlightEn: 'Unlock millions of zero-ad-spend organic views across platforms.',
                icon: VideocameraRecordBoldDuotoneIcon,
                color: 'text-brand-pink',
                border: 'hover:border-rose-200',
              },
              {
                num: '04',
                titleTr: 'Tek Çekimden Sonsuz Varlık (Content Multiplier)',
                titleEn: 'The Omnichannel Asset Multiplier',
                descTr: 'Tek bir prodüksiyon setinden; lansman filmi, 12 farklı kancaya sahip Reels/TikTok varyasyonları, web sitesi hero videoları ve e-ticaret editoryal fotoğrafları üretiriz.',
                descEn: 'From one strategic production day, we extract hero commercials, 12 multi-hook vertical reels, high-resolution e-commerce stills, and banner assets.',
                highlightTr: 'Maksimum verimlilik, sıfır bütçe israfı.',
                highlightEn: 'Maximum creative asset ROI with zero waste of time or budget.',
                icon: LayersBoldDuotoneIcon,
                color: 'text-emerald-500',
                border: 'hover:border-emerald-200',
              },
            ].map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={i}
                  className={`bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm transition-all duration-300 ${pillar.border} hover:shadow-xl flex flex-col justify-between`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                        <IconComp className={`w-6 h-6 ${pillar.color}`} />
                      </div>
                      <span className="text-xl font-black font-mono text-gray-300">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-gray-950 font-sans">
                      {language === 'tr' ? pillar.titleTr : pillar.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans font-medium">
                      {language === 'tr' ? pillar.descTr : pillar.descEn}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2">
                    <CheckCircleBoldDuotoneIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-bold text-gray-900 font-sans">
                      {language === 'tr' ? pillar.highlightTr : pillar.highlightEn}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SECTOR IMPACT CALCULATOR / SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3">
            <LightbulbBoldDuotoneIcon className="w-3.5 h-3.5" />
            <span>{language === 'tr' ? 'SEKTÖREL ETKİ SİMÜLATÖRÜ' : 'SECTOR IMPACT SIMULATOR'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 font-sans leading-tight">
            {language === 'tr'
              ? 'Sektörünüz İçin Doğru Pazarlama Etkisi'
              : 'Calculate Marketing Impact for Your Business'}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-medium mt-3">
            {language === 'tr'
              ? 'İşletme modelinizi seçin; profesyonel sinematik prodüksiyonun metriklerinize yapacağı etkiyi görün.'
              : 'Select your business vertical to see how cinema-grade creative engineering scales your numbers.'}
          </p>
        </div>

        {/* Sector Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {sectorsData.map(sector => {
            const isSelected = sector.id === activeSector;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer font-sans ${
                  isSelected
                    ? 'bg-gray-950 text-white shadow-lg scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {language === 'tr' ? sector.nameTr : sector.nameEn}
              </button>
            );
          })}
        </div>

        {/* Selected Sector Impact Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSector.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              {/* Left Column: Details & Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
                    {language === 'tr' ? 'ÖNERİLEN KREATİF DİSİPLİN' : 'RECOMMENDED CREATIVE DISCIPLINE'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950 font-sans mt-1">
                    {language === 'tr' ? selectedSector.nameTr : selectedSector.nameEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                    {language === 'tr' ? selectedSector.taglineTr : selectedSector.taglineEn}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {language === 'tr' ? selectedSector.recommendationTr : selectedSector.recommendationEn}
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3 font-sans">
                    {language === 'tr' ? 'ANAHTAR TESLİM PAKET İÇERİĞİ:' : 'TURNKEY DELIVERABLES SUITE:'}
                  </h4>
                  <ul className="space-y-2.5">
                    {(language === 'tr' ? selectedSector.deliverablesTr : selectedSector.deliverablesEn).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-800">
                        <CheckCircleBoldDuotoneIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-gray-500 italic font-medium">
                    {selectedSector.quote}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Metric Multipliers */}
              <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                    <BoltBoldDuotoneIcon className="w-3.5 h-3.5" />
                    <span>{language === 'tr' ? 'BEKLENEN BÜYÜME ÇARPANI' : 'EXPECTED GROWTH MULTIPLIER'}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black font-sans">
                    {language === 'tr' ? 'Ölçülebilir Pazar Etkisi' : 'Measurable Impact Index'}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 font-medium block">
                        {language === 'tr' ? 'Organik Erişim Artışı' : 'Organic Reach Lift'}
                      </span>
                      <span className="text-xs text-gray-300 font-bold">{language === 'tr' ? 'Keşfet & Akış İlerlemesi' : 'Explore & Feed Velocity'}</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-sans">
                      {selectedSector.reachMultiplier}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 font-medium block">
                        {language === 'tr' ? 'Satın Alma Dönüşümü' : 'Conversion Intent'}
                      </span>
                      <span className="text-xs text-gray-300 font-bold">{language === 'tr' ? 'Sepete Ekleme Oranı' : 'Checkout & Add to Cart'}</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-brand-pink font-sans">
                      {selectedSector.conversionLift}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-gray-400 font-medium block">
                        {language === 'tr' ? 'Ortalama Sepet Tutarı (AOV)' : 'Average Order Value Lift'}
                      </span>
                      <span className="text-xs text-gray-300 font-bold">{language === 'tr' ? 'Algılanan Değer Artışı' : 'Perceived Value Gain'}</span>
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-brand-blue font-sans">
                      {selectedSector.aovLift}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full py-3.5 rounded-full bg-white text-gray-950 font-bold text-xs sm:text-sm hover:bg-gray-100 hover:scale-102 active:scale-98 transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>{language === 'tr' ? 'Bu Stratejiyi Markanıza Uygulayın' : 'Deploy This Strategy For Your Brand'}</span>
                  <ArrowRightUpBoldIcon className="w-4 h-4 text-gray-950" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* 6. PROOF POINTS: REAL TRANSFORMATIONS */}
      <section className="bg-gray-50/70 border-t border-gray-200/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3">
              <CrownStarBoldDuotoneIcon className="w-3.5 h-3.5" />
              <span>{language === 'tr' ? 'KANITLANMIŞ GERÇEK MÜŞTERİLER' : 'PROVEN CLIENT TRANSFORMATIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 font-sans leading-tight">
              {language === 'tr'
                ? 'Kamera Karşısında Büyüyen Markalar'
                : 'Brands Scaled With PM Media Creative'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-medium mt-3">
              {language === 'tr'
                ? 'Gerçek stüdyo çekimleri, milyonlara ulaşan dikey formatlar ve somut ticari başarı.'
                : 'Real studio drops, viral vertical velocity, and compounding brand equity.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case 1: Still Shoes */}
            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-md overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <img
                  src="/media/thumbnails/still-shoes-urban-streetwear-sneakers-reel.jpg"
                  alt="Still Shoes Urban Streetwear"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-brand-pink text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">
                  FASHION & FOOTWEAR
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl sm:text-2xl font-black font-sans">Still Shoes & Bags</h4>
                  <p className="text-xs text-gray-300 font-medium">Trabzon Fashion Drop & Streetwear Campaigns</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs border border-emerald-200">
                    {language === 'tr' ? '12+ Dikey Reels Lansmanı' : '12+ Vertical Reel Drops'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-brand-blue font-bold text-xs border border-blue-200">
                    {language === 'tr' ? 'Viral Sokak Modası' : 'Viral Streetwear Reach'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  {language === 'tr'
                    ? 'Kalıp taban sneaker, kristal taşlı stiletto ve katlamalı deri çizmeler için hazırladığımız dinamik sokak modası kurguları; sıradan bir ayakkabı markasını sosyal medyada arzulanan bir moda ikonuna dönüştürdü.'
                    : 'From chunky streetwear sneakers to jeweled stilettos, our kinetic pacing and editorial lookbooks positioned Still Shoes as an aspirational fashion authority on Instagram & TikTok.'}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-500 font-sans">Trabzon, Fashion District</span>
                  <button
                    onClick={handleWorksClick}
                    className="text-xs font-bold text-brand-blue hover:text-brand-pink flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{language === 'tr' ? 'Kampanyayı Gör' : 'View Campaign'}</span>
                    <ArrowRightUpBoldIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Case 2: Akdin Gold */}
            <div className="bg-white rounded-3xl border border-gray-200/90 shadow-md overflow-hidden flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <img
                  src="/media/photography/akdingold-complete-jewelry-set-portrait.jpg"
                  alt="Akdin Gold Haute Joaillerie"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-[11px] font-black uppercase px-3 py-1 rounded-full">
                  HAUTE JOAILLERIE
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl sm:text-2xl font-black font-sans">Akdin Gold</h4>
                  <p className="text-xs text-gray-300 font-medium">Trabzon Hasırı Craftsmanship & Macro Film Series</p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-600 font-bold text-xs border border-amber-200">
                    {language === 'tr' ? '1:1 Makro Zanaat Filmleri' : '1:1 Macro Craft Films'}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs border border-emerald-200">
                    {language === 'tr' ? 'Lüks İtibar Çarpanı' : 'Haute Prestige Scaling'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                  {language === 'tr'
                    ? 'Trabzon’un asırlık altın hasır örgü geleneğini 100mm makro optikler ve kontrollü stüdyo ışığıyla kaydettik. Telkârinin her mikronunu gösteren çekimler, markayı ulusal ve küresel pazarda lüks mücevher sınıfına taşıdı.'
                    : 'Documenting centuries-old Trabzon Hasırı gold mesh weaving with 100mm macro lenses and precision specular control. The resulting films established Akdin Gold as an indisputable tier-1 luxury jeweler.'}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-500 font-sans">Trabzon, Akdin Atelier</span>
                  <button
                    onClick={handleWorksClick}
                    className="text-xs font-bold text-brand-blue hover:text-brand-pink flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{language === 'tr' ? 'Mücevher Serisini Gör' : 'View Jewelry Suite'}</span>
                    <ArrowRightUpBoldIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNFILTERED FAQ (REDDIT EDITION) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <StarsBoldDuotoneIcon className="w-3.5 h-3.5" />
            <span>{language === 'tr' ? 'SIKÇA SORULAN SORULAR' : 'UNFILTERED FAQ'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-gray-950 font-sans leading-tight">
            {language === 'tr'
              ? 'İşletme Sahiplerinin Merak Ettikleri'
              : 'Direct Answers for Business Owners'}
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-medium mt-2">
            {language === 'tr'
              ? 'Video pazarlaması, bütçe ve yatırım geri dönüşü (ROI) hakkında dürüst yanıtlar.'
              : 'No agency jargon. Honest answers on creative production, pricing, and ROI.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-gray-950 font-sans">
                    {language === 'tr' ? faq.qTr : faq.qEn}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-bold text-gray-600 text-sm">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed border-t border-gray-100">
                        {language === 'tr' ? faq.aTr : faq.aEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CLOSING HIGH-CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-8">
        <div className="relative bg-gradient-to-tr from-gray-950 via-gray-900 to-black text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-14 md:p-20 shadow-2xl overflow-hidden text-center">
          {/* Ambient color blobs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-brand-blue/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-brand-pink/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <BoltBoldDuotoneIcon className="w-3.5 h-3.5 text-brand-pink" />
              <span>{language === 'tr' ? 'BÜYÜMEK İÇİN İLK ADIMI ATIN' : 'MAKE THE SHIFT TODAY'}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans leading-tight">
              {language === 'tr' ? (
                <>
                  Pazarlamada Bütçe Kaybetmeyi Bırakın.{' '}
                  <span className="text-gradient">Doğru Prodüksiyonla Büyüyün.</span>
                </>
              ) : (
                <>
                  Stop Settling for Invisible Marketing.{' '}
                  <span className="text-gradient">Scale With High-ROI Creative.</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto font-sans">
              {language === 'tr'
                ? 'Sıkıcı videolara veda edin. Markanızı hak ettiği sinematik zirveye taşıyalım. Fikrinizi bizimle paylaşın, hemen bir strateji oluşturalım.'
                : 'Say goodbye to boring videos and wasted ad spend. Let’s craft a visual identity that commands market attention and converts viewers into loyal customers.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-gray-950 hover:bg-gray-100 font-black text-sm sm:text-base shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-sans flex items-center justify-center gap-2"
              >
                <span>{language === 'tr' ? 'Projenizi Konuşalım' : 'Start a Project'}</span>
                <ArrowRightUpBoldIcon className="w-4 h-4 text-gray-950" />
              </button>

              <a
                href="https://www.instagram.com/perinazmedia.tr/"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-sans flex items-center justify-center gap-2"
              >
                <HeartBoldDuotoneIcon className="w-4 h-4 text-brand-pink" />
                <span>{language === 'tr' ? 'Instagram’dan Ulaşın (@perinazmedia.tr)' : 'DM on Instagram (@perinazmedia.tr)'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;
