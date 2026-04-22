import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface HeroProps {
  setOrderMode: (mode: boolean) => void;
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Hero = ({ setOrderMode, handleNavLinkClick }: HeroProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Brenhaus Coffee Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </motion.div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 text-center text-warm"
      >
        <FadeIn>
          <span className="inline-block px-4 py-1 mb-6 border border-accent/30 rounded-full text-xs uppercase tracking-[0.3em] bg-accent/5 backdrop-blur-sm text-accent">
            EST. 2024 • THE DARK ROAST
          </span>
          <div className="flex flex-col items-center mb-6 overflow-hidden">
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-serif leading-tight"
            >
              Artistry in
            </motion.h1>
            <motion.h1 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl font-serif leading-tight italic text-accent"
            >
              every bean
            </motion.h1>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-80 font-light leading-relaxed">
            Welcome to Brenhaus Coffee. Where premium artisanal roasting 
            meets the sophisticated comfort of a modern sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setOrderMode(true)}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-primary rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group shadow-lg shadow-accent/10 font-bold"
            >
              Order Online
              <ShoppingCart size={18} className="translate-y-[-1px]" />
            </button>
            <a
              href="#visit"
              onClick={(e) => handleNavLinkClick(e, '#visit')}
              className="px-8 py-4 bg-warm/5 hover:bg-warm/10 text-warm border border-warm/20 backdrop-blur-md rounded-full transition-all duration-300"
            >
              Plan your visit
            </a>
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-warm"
      >
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-12 bg-warm/50" />
        </div>
      </motion.div>
    </section>
  );
};
