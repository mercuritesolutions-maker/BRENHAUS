import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Vibe } from './components/Vibe';
import { Reviews } from './components/Reviews';
import { Visit } from './components/Visit';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

// Constants
import { MENU_ITEMS } from './constants/menu';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [orderMode, setOrderMode] = useState(false);
  const [cart, setCart] = useState<Record<number, number>>({});
  const [orderStep, setOrderStep] = useState<'selection' | 'details' | 'success'>('selection');

  const addToCart = (id: number) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => {
      const next = { ...prev };
      const current = next[id] || 0;
      if (current > 1) next[id] = current - 1;
      else delete next[id];
      return next;
    });
  };

  const cartCount = (Object.values(cart) as number[]).reduce((a, b) => a + b, 0);
  const cartTotal = MENU_ITEMS.reduce((sum, item) => {
    const qty = cart[item.id] || 0;
    return sum + (item.price * qty);
  }, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vibe', href: '#vibe' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit', href: '#visit' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-primary">
      <Navbar 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        setOrderMode={setOrderMode} 
        handleNavLinkClick={handleNavLinkClick} 
      />

      <Hero setOrderMode={setOrderMode} handleNavLinkClick={handleNavLinkClick} />
      
      <About />
      
      <Vibe />
      
      <Reviews />
      
      <Visit />
      
      <Contact />

      <Footer navLinks={navLinks} />

      <OrderModal 
        orderMode={orderMode}
        setOrderMode={setOrderMode}
        orderStep={orderStep}
        setOrderStep={setOrderStep}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartCount={cartCount}
        cartTotal={cartTotal}
      />

      {/* Floating Messenger Button */}
      <motion.a 
        href="#"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-[60] p-4 bg-accent text-primary rounded-full shadow-2xl shadow-accent/40 flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-sm font-bold">
          Connect with us
        </span>
      </motion.a>
      <Analytics />
    </div>
  );
}
