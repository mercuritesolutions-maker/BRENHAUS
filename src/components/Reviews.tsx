import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>
              <h2 className="text-4xl font-serif text-warm mb-4">Voice of the Connoisseur</h2>
              <p className="text-accent font-medium tracking-[0.2em] uppercase text-xs">Rated 4.9/5 by our discerning guests</p>
            </div>
          </FadeIn>

          <FadeIn>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/5 p-10 md:p-16 rounded-[3rem] shadow-2xl relative backdrop-blur-md border border-white/10"
            >
              <motion.div 
                animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-8 text-accent"
              >
                <span className="text-9xl font-serif leading-none opacity-20">&ldquo;</span>
              </motion.div>
              <div className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-warm mb-8 leading-relaxed italic">
                  Brenhaus is more than a coffee shop; it&apos;s an olfactory journey. The depth of their dark roast is unparalleled in the city, and the ambiance is pure sophistication.
                </p>
                <div className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-accent rounded-full mb-4 flex items-center justify-center text-primary font-serif text-2xl font-bold"
                  >
                    A
                  </motion.div>
                  <h4 className="text-lg font-bold text-warm mb-1">Atasha</h4>
                  <span className="text-xs text-accent uppercase tracking-widest font-bold">Five Stars • Local Guide</span>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
