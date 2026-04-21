import React from 'react';
import { MapPin, MessageCircle, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  navLinks: { name: string, href: string }[];
}

export const Footer = ({ navLinks }: FooterProps) => {
  return (
    <footer className="py-20 bg-text-dark text-warm/60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          <div className="max-w-xs">
            <h2 className="text-3xl font-serif text-white mb-6 uppercase tracking-widest">Brenhaus Coffee</h2>
            <p className="text-sm leading-relaxed mb-8">
              A sanctuary for coffee lovers where every bean is roasted to perfection and every cup tells a story of craftsmanship.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Facebook size={18} />
              </a>
              <a href="mailto:hello@brenhauscoffee.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-accent transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="shrink-0 opacity-50" />
                  <span>San Vicente St, Bogo City, Cebu</span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={16} className="shrink-0 opacity-50" />
                  <a href="#" className="hover:text-accent">Messenger</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-medium text-warm/50">
          <div className="flex flex-col gap-1">
            <p>© 2024 Brenhaus Coffee. All Rights Reserved.</p>
            <p className="text-[8px] tracking-tighter">Made by Mercurite Solutions</p>
          </div>
          <div className="flex gap-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
