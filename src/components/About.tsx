import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './ui/FadeIn';
import { PuzzleImage } from './ui/PuzzleImage';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <span className="text-accent font-medium uppercase tracking-widest text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-warm mb-8 leading-tight">
                Crafting Excellence <br /> In Every Roast
              </h2>
              <p className="text-lg text-warm/90 mb-6 leading-relaxed">
                Where every cup of coffee is more than just a drink — it&apos;s a testament to our passion for quality.
                Brenhaus Coffee was born from a desire to merge the raw beauty of artisanal roasting with a refined, contemporary atmosphere.
              </p>
              <p className="text-lg text-warm/90 leading-relaxed mb-8 italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg">
                &quot;We believe in the purity of the bean, the precision of the temperature, and the quiet luxury of a perfectly balanced brew.&quot;
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <h4 className="font-serif text-2xl text-accent mb-1">San Vicente</h4>
                  <p className="text-xs text-warm/70 uppercase tracking-widest">Our Heritage in Bogo City</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-accent mb-1">Micro-Roasted</h4>
                  <p className="text-xs text-warm/70 uppercase tracking-widest">Precision in Every Batch</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            <PuzzleImage 
              src="https://i.pinimg.com/736x/82/41/81/8241813c95e331dc8a04bbefb3ff72c9.jpg" 
              alt="Artisanal Coffee"
            />
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-48 h-48 border-2 border-accent/20 rounded-[2rem] -z-0" 
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-warm/10 rounded-full blur-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
