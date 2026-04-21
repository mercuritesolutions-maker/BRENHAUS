import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, CheckCircle2, Loader2 } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../constants/menu';

interface OrderModalProps {
  orderMode: boolean;
  setOrderMode: (mode: boolean) => void;
  orderStep: 'selection' | 'details' | 'success';
  setOrderStep: (step: 'selection' | 'details' | 'success') => void;
  cart: Record<number, number>;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
  cartTotal: number;
}

export const OrderModal = ({ 
  orderMode, 
  setOrderMode, 
  orderStep, 
  setOrderStep, 
  cart, 
  addToCart, 
  removeFromCart, 
  cartCount, 
  cartTotal 
}: OrderModalProps) => {
  const [orderDetails, setOrderDetails] = useState({ name: '', pickupTime: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = async () => {
    if (!orderDetails.name) {
      alert('Please enter your name');
      return;
    }

    setIsSubmitting(true);
    
    const items = MENU_ITEMS
      .filter(i => cart[i.id])
      .map(i => ({ name: i.name, qty: cart[i.id], price: i.price }));

    try {
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...orderDetails,
          items,
          total: cartTotal
        }),
      });

      if (response.ok) {
        setOrderStep('success');
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error('Order error:', error);
      alert('Error connecting to service.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {orderMode && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-text-dark/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-primary w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl relative border border-white/10"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md">
              <div>
                <h2 className="text-3xl font-serif text-warm italic">Curate Your Brew</h2>
                <p className="text-sm text-warm/50">Hand-selected beans, prepared for your arrival.</p>
              </div>
              <button 
                onClick={() => { setOrderMode(false); setOrderStep('selection'); }}
                className="p-3 hover:bg-white/5 rounded-full transition-colors text-warm"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8">
              {orderStep === 'selection' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MENU_ITEMS.map((item) => (
                    <div key={item.id} className="bg-white/5 p-4 rounded-3xl border border-white/10 hover:border-accent/30 transition-colors group">
                      <div className="relative overflow-hidden rounded-2xl mb-4 h-40">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-lg text-warm">{item.name}</h4>
                        <span className="font-bold text-accent">₱{item.price}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-warm/30">{item.category}</span>
                        <div className="flex items-center gap-3">
                          {(cart[item.id] || 0) > 0 && (
                            <>
                              <button onClick={() => removeFromCart(item.id)} className="p-1.5 hover:bg-white/10 rounded-lg text-warm transition-colors">
                                <Minus size={16} />
                              </button>
                              <span className="font-bold text-warm">{cart[item.id]}</span>
                            </>
                          )}
                          <button onClick={() => addToCart(item.id)} className="p-1.5 bg-accent/10 text-accent hover:bg-accent hover:text-primary rounded-lg transition-all">
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {orderStep === 'details' && (
                <div className="max-w-md mx-auto space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif mb-2 text-warm">Guest Details</h3>
                    <p className="text-sm text-warm/60">Tell us when you&apos;ll be arriving.</p>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-sm space-y-6">
                    <div className="space-y-4">
                      {MENU_ITEMS.filter(i => cart[i.id]).map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm text-warm/80">
                          <span>{cart[item.id]}x {item.name}</span>
                          <span className="font-bold">₱{item.price * cart[item.id]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center font-bold text-lg text-warm">
                      <span>Total Amount</span>
                      <span className="text-accent">₱{cartTotal}</span>
                    </div>
                    <div className="space-y-4 pt-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={orderDetails.name}
                        onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                        className="w-full px-6 py-3 bg-primary rounded-xl border border-white/10 text-warm focus:ring-2 focus:ring-accent outline-none" 
                      />
                      <input 
                        type="text" 
                        placeholder="Pickup Time (e.g. 2:30 PM)" 
                        value={orderDetails.pickupTime}
                        onChange={(e) => setOrderDetails({ ...orderDetails, pickupTime: e.target.value })}
                        className="w-full px-6 py-3 bg-primary rounded-xl border border-white/10 text-warm focus:ring-2 focus:ring-accent outline-none" 
                      />
                    </div>
                  </div>
                </div>
              )}

              {orderStep === 'success' && (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10 }}
                    className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-8 border border-accent/30"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-4xl font-serif mb-4 text-warm italic">Excellence Awaits</h3>
                  <p className="text-lg text-warm/60 max-w-sm">Your selection has been registered. We are preparing your artisanal experience.</p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
              {orderStep !== 'success' && (
                <div className="p-8 border-t border-white/5 flex items-center justify-between bg-white/5 backdrop-blur-md">
                  <div className="hidden sm:block">
                    <p className="text-xs uppercase tracking-widest font-bold text-warm/30">Subtotal</p>
                    <p className="text-2xl font-serif text-warm">₱{cartTotal}</p>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    {orderStep === 'selection' ? (
                      <button 
                        disabled={cartCount === 0}
                        onClick={() => setOrderStep('details')}
                        className={`flex-1 sm:flex-none px-10 py-4 rounded-full font-bold transition-all shadow-lg ${cartCount > 0 ? 'bg-accent text-primary hover:scale-105' : 'bg-white/5 text-warm/20 cursor-not-allowed'}`}
                      >
                        Review Selection ({cartCount})
                      </button>
                    ) : (
                      <button 
                        disabled={isSubmitting}
                        onClick={handlePlaceOrder}
                        className="flex-1 sm:flex-none px-10 py-4 bg-accent text-primary rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting && <Loader2 className="animate-spin" size={20} />}
                        {isSubmitting ? 'Securing...' : 'Confirm Order'}
                      </button>
                    )}
                  </div>
                </div>
              )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
