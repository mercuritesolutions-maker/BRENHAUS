import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Visit = () => {
  return (
    <section id="visit" className="py-24 bg-primary border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <span className="text-accent font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Location</span>
              <h2 className="text-4xl md:text-5xl font-serif text-warm mb-6">Visit Our <span className="text-accent italic">Sanctuary</span></h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-2xl text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1 text-warm">Address</h4>
                    <p className="text-warm/90">San Vicente St, Bogo City, 6010 Cebu, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-2xl text-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1 text-warm">Experience Hours</h4>
                    <p className="text-warm/90">Daily: 11:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                <h4 className="font-serif text-2xl mb-4 text-accent">Getting Here</h4>
                <p className="text-sm text-warm/90 leading-relaxed mb-6">
                  Located along the historic San Vicente street, Brenhaus Coffee is easily accessible from the main highway. 
                  Private parking is available for our guests.
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=San+Vicente+St,+Bogo+City,+6010+Cebu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent-dark transition-colors"
                >
                  Open in Maps <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="h-[500px] w-full bg-accent/5 rounded-[3rem] overflow-hidden shadow-inner relative border-8 border-white/5 shadow-2xl"
            >
              <iframe 
                title="Brenhaus Coffee Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.4!2d124.0!-12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a84dfbe535976b%3A0x6e9a8f4b00000000!2sSan+Vicente+St%2C+Bogo+City%2C+Cebu!5e0!3m2!1sen!2sph!4v1713437500000!5m2!1sen!2sph"
                className="w-full h-full grayscale-[0.8] invert-[0.9] hue-rotate-[180deg] opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
