import React, { useState } from 'react';
import { Mail, MessageCircle, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-serif text-warm mb-8 tracking-tight">
                Connect With <br /><span className="italic text-accent">The Brewmasters.</span>
              </h2>
              <div className="space-y-4 mb-10">
                <p className="text-warm/90 leading-relaxed">
                  Have a question about our roasts or want to host an event? We&apos;d love to hear from you. 
                  Reach out via our form or connect through Messenger.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:hello@brenhauscoffee.com" 
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all"
                >
                  <div className="p-4 bg-accent/10 rounded-2xl text-accent group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-warm/70 font-bold mb-1">Email Us</p>
                    <p className="text-lg font-serif text-warm">hello@brenhauscoffee.com</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all"
                >
                  <div className="p-4 bg-accent/10 text-accent rounded-2xl group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-warm/70 font-bold mb-1">Messenger</p>
                    <p className="text-lg font-serif text-warm">Chat with us directly</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1">
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-md">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-bold text-warm/70 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-primary border border-white/10 rounded-2xl text-warm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-warm/70 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-primary border border-white/10 rounded-2xl text-warm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-warm/70 mb-2">Your Message</label>
                    <textarea 
                      required
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us something..."
                      className="w-full px-6 py-4 bg-primary border border-white/10 rounded-2xl text-warm focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className={`w-full py-5 rounded-2xl font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 ${
                      status === 'success' ? 'bg-green-600 text-white' : 'bg-accent hover:bg-accent-dark text-primary hover:shadow-accent/20'
                    }`}
                  >
                    {status === 'loading' && <Loader2 className="animate-spin" size={20} />}
                    {status === 'success' && <CheckCircle size={20} />}
                    {status === 'idle' && 'Send Message'}
                    {status === 'error' && 'Try Again'}
                    {status !== 'loading' && status !== 'idle' ? null : <ArrowRight size={20} />}
                  </button>
                  
                  {status === 'success' && (
                    <p className="text-center text-sm text-green-600 font-medium">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-center text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
