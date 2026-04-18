import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              <span className="text-accent font-medium uppercase tracking-widest text-xs mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-8 leading-tight">
                Handcrafted with <br /> Heartfelt Charm
              </h2>
              <p className="text-lg text-text-dark/80 mb-6 leading-relaxed">
                Where every cup of coffee is more than just a drink — it&apos;s a memory in the making.
                Knoah Mari was born from a love for minimalist aesthetics and the simple joy of connection.
              </p>
              <p className="text-lg text-text-dark/80 leading-relaxed mb-8 italic border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg">
                &quot;We believe in the power of a quiet moment, a warm porcelain cup, and the comfort of shared treats that awaken a sense of nostalgia.&quot;
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div>
                  <h4 className="font-serif text-2xl text-text-dark mb-1">San Vicente</h4>
                  <p className="text-xs text-text-dark/50 uppercase tracking-widest">Our Home in Bogo City</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-text-dark mb-1">Artisanal</h4>
                  <p className="text-xs text-text-dark/50 uppercase tracking-widest">Every Bean Matters</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                <img
                  src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/667776229_4465946517020768_3338768476312708232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE-T_Wa8iAXFUM8SNiwSjBssZymlo6nJZaxnKaWjqclluCF3VcG5w_tZ5p-BNpAw_EJSubOTO0BmjC9IQkDfNqq&_nc_ohc=fMrSL_qT5A0Q7kNvwGpaSEI&_nc_oc=AdrEzBohL-33D1oKHyjpD5zZJdgx3QyZmMRji-z0P8zGG0G54mCv2POy9O3vLNP0i_16haRWNc4Kw3_FsY8Dix4m&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=xlOcRivyJNJeeWEraE2JWQ&_nc_ss=7a3a8&oh=00_Af0OY89R4XRmYCBFLzS6u90Zd1inotCCgoe2rW9CJL1thQ&oe=69E8D292"
                  alt="Artisanal Coffee"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 border-2 border-accent/20 rounded-[2rem] -z-0" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-warm/10 rounded-full blur-2xl" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
