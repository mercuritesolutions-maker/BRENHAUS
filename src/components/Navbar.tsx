import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  setOrderMode: (mode: boolean) => void;
  handleNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const Navbar = ({ isScrolled, isMenuOpen, setIsMenuOpen, setOrderMode, handleNavLinkClick }: NavbarProps) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vibe', href: '#vibe' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit', href: '#visit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur-md shadow-sm py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl font-bold tracking-[0.2em] text-accent">
          BRENHAUS
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="group relative text-sm font-medium text-warm hover:text-accent transition-colors duration-200 py-2"
            >
              {link.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"
                layoutId="underline"
              />
            </a>
          ))}
          <button 
            onClick={() => setOrderMode(true)}
            className="px-6 py-2 bg-accent text-primary rounded-full text-xs font-bold hover:bg-accent-dark transition-all transform hover:scale-105"
          >
            Order Online
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-warm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary overflow-hidden border-b border-warm/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-serif text-warm border-b border-warm/5 pb-2"
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setOrderMode(true); setIsMenuOpen(false); }}
                className="w-full px-6 py-4 bg-accent text-primary rounded-2xl text-lg font-bold shadow-lg"
              >
                Order Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
