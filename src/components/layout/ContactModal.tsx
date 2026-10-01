import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  CloseCircleBoldDuotoneIcon, 
  ArrowRightBoldIcon,
  LetterBoldDuotoneIcon 
} from '@solar-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInstagram = () => {
    window.open('https://www.instagram.com/perinazmedia.tr/', '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${t.contactModal.directEmail}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-md"
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl md:rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            {/* Top Header Bar */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  PM.Media
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <CloseCircleBoldDuotoneIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 text-center space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                  {t.contactModal.title}
                </h3>
                <p className="text-base text-gray-500 max-w-[280px] mx-auto leading-relaxed">
                  {t.contactModal.subtitle}
                </p>
              </div>

              <div className="grid gap-3 pt-2">
                {/* Instagram Direct Message Button */}
                <button
                  onClick={handleInstagram}
                  className="group relative w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-[#E1306C] hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#F56040]/10 via-[#E1306C]/10 to-[#833AB4]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#F56040]/15 via-[#E1306C]/15 to-[#833AB4]/15 text-[#E1306C] flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-gray-900 text-lg leading-tight">
                        {t.contactModal.instagram}
                      </span>
                      <span className="block text-xs font-semibold text-[#E1306C]">
                        @perinazmedia.tr
                      </span>
                    </div>
                  </div>
                  <ArrowRightBoldIcon className="w-6 h-6 text-[#E1306C] -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </button>

                {/* Email Button */}
                <button
                  onClick={handleEmail}
                  className="group relative w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-blue-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <div className="relative flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-brand-blue flex items-center justify-center">
                      <LetterBoldDuotoneIcon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-gray-900 text-lg leading-tight">
                        {t.contactModal.email}
                      </span>
                      <span className="block text-xs font-semibold text-gray-400">
                        {t.contactModal.directEmail}
                      </span>
                    </div>
                  </div>
                  <ArrowRightBoldIcon className="w-6 h-6 text-brand-blue -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                </button>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-4 text-center bg-gray-50/50 border-t border-gray-100">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                {t.contactModal.studioLocation}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
