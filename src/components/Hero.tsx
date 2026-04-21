import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface HeroProps {
  setOrderMode: (mode: boolean) => void;
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Hero = ({ setOrderMode, handleNavLinkClick }: HeroProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Brenhaus Coffee Interior"
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-warm">
        <FadeIn>
          <span className="inline-block px-4 py-1 mb-6 border border-accent/30 rounded-full text-xs uppercase tracking-[0.3em] bg-accent/5 backdrop-blur-sm text-accent">
            EST. 2024 • THE DARK ROAST
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
            Artistry in <br />
            <span className="italic text-accent">every bean</span>
          </h1>
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
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-warm opacity-50"
      >
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-12 bg-warm/50" />
        </div>
      </motion.div>
    </section>
  );
};
