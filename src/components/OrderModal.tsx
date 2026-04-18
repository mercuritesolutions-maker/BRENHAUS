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
            className="bg-primary w-full max-w-4xl max-h-[90vh] rounded-[3rem] overflow-hidden flex flex-col shadow-2xl relative"
          >
            {/* Header */}
            <div className="p-8 border-b border-warm/10 flex items-center justify-between bg-white/50">
              <div>
                <h2 className="text-3xl font-serif text-text-dark">Order Online</h2>
                <p className="text-sm text-text-dark/50">Handcrafted goodness, ready for pickup.</p>
              </div>
              <button 
                onClick={() => { setOrderMode(false); setOrderStep('selection'); }}
                className="p-3 hover:bg-warm/5 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-texture">
              {orderStep === 'selection' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MENU_ITEMS.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-3xl border border-warm/5 shadow-sm">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-2xl mb-4"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-lg">{item.name}</h4>
                        <span className="font-bold text-accent">₱{item.price}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-text-dark/30">{item.category}</span>
                        <div className="flex items-center gap-3">
                          {(cart[item.id] || 0) > 0 && (
                            <>
                              <button onClick={() => removeFromCart(item.id)} className="p-1.5 hover:bg-primary rounded-lg">
                                <Minus size={16} />
                              </button>
                              <span className="font-bold">{cart[item.id]}</span>
                            </>
                          )}
                          <button onClick={() => addToCart(item.id)} className="p-1.5 bg-accent/10 text-accent hover:bg-accent hover:text-white rounded-lg transition-colors">
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
                    <h3 className="text-2xl font-serif mb-2">Finalize Details</h3>
                    <p className="text-sm text-text-dark/60">Almost there! Just a few more things.</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-warm/5 shadow-sm space-y-6">
                    <div className="space-y-4">
                      {MENU_ITEMS.filter(i => cart[i.id]).map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                          <span>{cart[item.id]}x {item.name}</span>
                          <span className="font-bold">₱{item.price * cart[item.id]}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-warm/10 flex justify-between items-center font-bold text-lg">
                      <span>Total Amount</span>
                      <span className="text-accent">₱{cartTotal}</span>
                    </div>
                    <div className="space-y-4 pt-4">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        value={orderDetails.name}
                        onChange={(e) => setOrderDetails({ ...orderDetails, name: e.target.value })}
                        className="w-full px-6 py-3 bg-primary rounded-xl border-none focus:ring-2 focus:ring-accent" 
                      />
                      <input 
                        type="text" 
                        placeholder="Pickup Time (e.g. 2:30 PM)" 
                        value={orderDetails.pickupTime}
                        onChange={(e) => setOrderDetails({ ...orderDetails, pickupTime: e.target.value })}
                        className="w-full px-6 py-3 bg-primary rounded-xl border-none focus:ring-2 focus:ring-accent" 
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
                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-green-500/20"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-4xl font-serif mb-4">Memory in the making!</h3>
                  <p className="text-lg text-text-dark/60 max-w-sm">Your order has been received. We&apos;ll notify you when it&apos;s ready for pickup.</p>
                </div>
              )}
            </div>

            {/* Footer Actions */}
              {orderStep !== 'success' && (
                <div className="p-8 border-t border-warm/10 flex items-center justify-between bg-white/50">
                  <div className="hidden sm:block">
                    <p className="text-xs uppercase tracking-widest font-bold text-text-dark/30">Total Value</p>
                    <p className="text-2xl font-serif text-text-dark">₱{cartTotal}</p>
                  </div>
                  <div className="flex gap-4 w-full sm:w-auto">
                    {orderStep === 'selection' ? (
                      <button 
                        disabled={cartCount === 0}
                        onClick={() => setOrderStep('details')}
                        className={`flex-1 sm:flex-none px-10 py-4 rounded-full font-bold transition-all shadow-lg ${cartCount > 0 ? 'bg-accent text-white hover:scale-105' : 'bg-warm/10 text-text-dark/30 cursor-not-allowed'}`}
                      >
                        Review Order ({cartCount})
                      </button>
                    ) : (
                      <button 
                        disabled={isSubmitting}
                        onClick={handlePlaceOrder}
                        className="flex-1 sm:flex-none px-10 py-4 bg-accent text-white rounded-full font-bold shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                      >
                        {isSubmitting && <Loader2 className="animate-spin" size={20} />}
                        {isSubmitting ? 'Processing...' : 'Place Pickup Order'}
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
