import React from 'react';
import { Clock, Coffee, Star, ChevronRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export const Vibe = () => {
  const experiences = [
    {
      title: 'Cozy Ambiance',
      desc: 'A minimalist sanctuary designed for focus and deep conversations.',
      // Replace with your actual image URL
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
      icon: <Clock className="text-accent" />
    },
    {
      title: 'Handcrafted Drinks',
      desc: 'From classic espresso to our signature blends, made with passion.',
      img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
      icon: <Coffee className="text-accent" />
    },
    {
      title: 'Thoughtful Treats',
      desc: 'Artisanal pastries that pair perfectly with your favorite brew.',
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
      icon: <Star className="text-accent" />
    },
    {
      title: 'Memorable Service',
      desc: 'Friendly baristas who know your name and your favorite order.',
      img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
      icon: <ChevronRight className="text-accent" />
    }
  ];
  return (
    <section id="vibe" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="text-accent font-medium uppercase tracking-[0.3em] text-xs mb-4 block">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif text-warm mb-6">The Art of the Brew</h2>
            <div className="w-24 h-1 bg-accent/30 mx-auto rounded-full" />
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.1}>
              <div className="group h-full bg-white/5 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 border border-white/5">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] contrast-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8">
                  <div className="mb-4 p-3 bg-accent/10 w-fit rounded-xl">{item.icon}</div>
                  <h3 className="text-xl font-serif text-warm mb-3 italic">
                    {item.title}
                  </h3>
                  <p className="text-warm/90 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};