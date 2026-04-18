import React from 'react';
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
              <h2 className="text-4xl font-serif text-text-dark mb-4">What Our Community Says</h2>
              <p className="text-text-dark/60 font-medium">3.8/5 Rating on Google • 12 Reviews</p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl relative backdrop-blur-sm bg-white/80">
              <div className="absolute top-8 left-8 text-accent/10">
                <span className="text-9xl font-serif">&ldquo;</span>
              </div>
              <div className="relative z-10 text-center">
                <p className="text-2xl md:text-3xl font-serif text-text-dark mb-8 leading-relaxed italic">
                  I love the vibe of this cafe. The minimalist aesthetic is so calming, and the coffee is actually high quality. It&apos;s my favorite spot for reading in Bogo.
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent rounded-full mb-4 flex items-center justify-center text-white font-serif text-2xl">
                    A
                  </div>
                  <h4 className="text-lg font-bold text-text-dark mb-1">Atasha</h4>
                  <span className="text-xs text-accent uppercase tracking-widest font-bold">Five Stars • Local Guide</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
