import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Scale } from 'lucide-react';
import { pillarsData } from '@/lib/data';

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === pillarsData.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev === pillarsData.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? pillarsData.length - 1 : prev - 1));

  return (
    <section className="bg-[#0D152D] text-white p-8 lg:p-20 flex flex-col items-center justify-center text-center relative overflow-hidden border-b border-[#18233F] group">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_#18233F_0%,_transparent_75%)] z-10"></div>
      
      <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center w-full min-h-[260px] justify-center">
        <div className="w-12 h-12 rounded-full bg-[#18233F] border border-[#B8B9B9]/30 flex items-center justify-center mb-6 text-[#B8B9B9]">
          <Scale className="w-6 h-6 stroke-[1.5]" />
        </div>
        
        <div className="w-full relative flex items-center justify-center min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center"
            >
              <p className="text-lg md:text-2xl font-semibold tracking-tight leading-snug mb-8 text-[#E4E5E7] max-w-3xl font-serif italic">
                "{pillarsData[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center gap-1.5">
                <span className="font-bold text-xs uppercase tracking-widest text-[#B8B9B9]">
                  {pillarsData[currentIndex].role}
                </span>
                <span className="text-[#85888F] text-[11px] uppercase tracking-widest font-mono">
                  {pillarsData[currentIndex].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-12 z-30">
          <button 
            onClick={prev} 
            className="w-10 h-10 border border-[#18233F] bg-[#18233F]/50 flex items-center justify-center text-[#85888F] hover:text-[#B8B9B9] hover:border-[#B8B9B9]/40 hover:bg-[#18233F] transition-colors rounded-sm focus:outline-none"
            aria-label="Pilar anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="font-mono text-[13px] tracking-widest text-[#85888F] font-bold">
            0{currentIndex + 1} <span className="text-[#18233F] px-1 font-normal">/</span> 0{pillarsData.length}
          </div>
          <button 
            onClick={next} 
            className="w-10 h-10 border border-[#18233F] bg-[#18233F]/50 flex items-center justify-center text-[#85888F] hover:text-[#B8B9B9] hover:border-[#B8B9B9]/40 hover:bg-[#18233F] transition-colors rounded-sm focus:outline-none"
            aria-label="Próximo pilar"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
