import React, { useState, useEffect, lazy, Suspense } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { LanguageProvider } from './context/LanguageContext';
import type { PageRoute, Project } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ContactModal } from './components/layout/ContactModal';
import { VideoPlayerModal } from './components/ui/VideoPlayerModal';
import { AnimatePresence, motion } from 'framer-motion';

// HomePage is directly imported for instant initial load (zero waterfall lag)
import { HomePage } from './pages/HomePage';

// Lazy load secondary pages
const WorksPage = lazy(() => import('./pages/WorksPage').then(module => ({ default: module.WorksPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));

const lenisOptions = {
  lerp: 0.08,
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical' as const,
  gestureOrientation: 'vertical' as const,
  smoothWheel: true,
  syncTouch: false,
  touchMultiplier: 0,
  autoRaf: true,
};

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 750);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[10000] bg-cali-sunset flex flex-col items-center justify-center overflow-hidden pointer-events-none"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter drop-shadow-2xl"
      >
        PM.Media
      </motion.div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "160px" }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        className="h-1 bg-white/90 mt-6 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]"
      />
    </motion.div>
  );
};

const PageWrapper: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => (
  <motion.div
    key={id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
    className="w-full h-full"
  >
    {children}
  </motion.div>
);

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  // Handle modal scroll locks with Lenis & body style (only when modal is actively open)
  useEffect(() => {
    if (isContactOpen || Boolean(selectedProject)) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
  }, [isContactOpen, selectedProject, lenis]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'works' || hash === 'home') {
        setCurrentPage(hash as PageRoute);
      } else if (hash.startsWith('services')) {
        setCurrentPage('services');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-gray-900 selection:text-white relative">
        <Navbar
          currentPage={currentPage}
          setCurrentPage={handleNavigate}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            {currentPage === 'home' && (
              <PageWrapper id="home">
                <HomePage
                  setCurrentPage={handleNavigate}
                  onOpenContact={() => setIsContactOpen(true)}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              </PageWrapper>
            )}
            {currentPage === 'works' && (
              <PageWrapper id="works">
                <Suspense fallback={<div className="min-h-screen" />}>
                  <WorksPage
                    onSelectProject={(proj) => setSelectedProject(proj)}
                    onOpenContact={() => setIsContactOpen(true)}
                  />
                </Suspense>
              </PageWrapper>
            )}
            {currentPage === 'services' && (
              <PageWrapper id="services">
                <Suspense fallback={<div className="min-h-screen" />}>
                  <ServicesPage onOpenContact={() => setIsContactOpen(true)} />
                </Suspense>
              </PageWrapper>
            )}
          </AnimatePresence>
        </main>

        <Footer
          setCurrentPage={handleNavigate}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <VideoPlayerModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </>
  );
};

export function App() {
  return (
    <ReactLenis root options={lenisOptions}>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ReactLenis>
  );
}

export default App;
