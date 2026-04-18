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
          src="https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-6/514248163_122137353248920168_3971601876015675934_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHF0buCdjd7vWE4poUAhyGvottAsSWUzLmi20CxJZTMuQVkarAy_aN4bRIK8theoqRctuSyyZd21sqVkY07XQi9&_nc_ohc=RBsxPdi6XzgQ7kNvwFMypaZ&_nc_oc=AdoKfTrXY58BadcLcfD2OlWg9fzeyCdhqKxY2OiUJwOYAarI4xZh7llN4qGGC5b6E8lIkXCNA1DoqwP82CVP3Im_&_nc_pt=1&_nc_zt=23&_nc_ht=scontent.fmnl13-2.fna&_nc_gid=dcrX3hDNH6sUW4YDaAb2-Q&_nc_ss=7a3a8&oh=00_Af0r7Ta1SxJIf8exWVna3te39TGpB_GXHSd9siBzd0z1gw&oe=69E8CB67"
          alt="Knoah Mari Interior"
          className="w-full h-full object-cover transform scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-text-dark/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-primary">
        <FadeIn>
          <span className="inline-block px-4 py-1 mb-6 border border-primary/30 rounded-full text-xs uppercase tracking-widest bg-primary/10 backdrop-blur-sm">
            Est. 2024 • San Vicente St
          </span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 leading-tight">
            More than just a <br />
            <span className="italic">cup of coffee</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 font-light leading-relaxed">
            Every brew at Knoah Mari is a memory in the making.
            Step into a space where artisanal espresso meets heartfelt charm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setOrderMode(true)}
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group shadow-lg shadow-accent/20"
            >
              Order Online
              <ShoppingCart size={18} className="translate-y-[-1px]" />
            </button>
            <a
              href="#visit"
              onClick={(e) => handleNavLinkClick(e, '#visit')}
              className="px-8 py-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 backdrop-blur-md rounded-full transition-all duration-300"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary opacity-50"
      >
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-px h-12 bg-primary/50" />
        </div>
      </motion.div>
    </section>
  );
};
