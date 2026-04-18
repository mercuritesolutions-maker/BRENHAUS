import React from 'react';
import { MapPin, Clock, ChevronRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Visit = () => {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <span className="text-accent font-medium uppercase tracking-widest text-xs mb-4 block">Location</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-6">Find us in the heart of Bogo</h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-2xl text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1 text-text-dark">Address</h4>
                    <p className="text-text-dark/70">San Vicente St, Bogo City, 6010 Cebu, Philippines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary rounded-2xl text-accent shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-1 text-text-dark">Store Hours</h4>
                    <p className="text-text-dark/70">Daily: 11:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-primary rounded-3xl border border-warm/5">
                <h4 className="font-serif text-2xl mb-4 text-text-dark">Getting Here</h4>
                <p className="text-sm text-text-dark/70 leading-relaxed mb-6">
                  Located along the historic San Vicente street, we are easily accessible from the main highway. 
                  Street parking is available directly in front of the café.
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=San+Vicente+St,+Bogo+City,+6010+Cebu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
                >
                  Get Directions <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-[500px] w-full bg-primary rounded-[3rem] overflow-hidden shadow-inner relative border-8 border-primary shadow-2xl">
              <iframe 
                title="Knoah Mari Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.4!2d124.0!-12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a84dfbe535976b%3A0x6e9a8f4b00000000!2sSan+Vicente+St%2C+Bogo+City%2C+Cebu!5e0!3m2!1sen!2sph!4v1713437500000!5m2!1sen!2sph"
                className="w-full h-full grayscale-[0.3] contrast-[1.1]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
