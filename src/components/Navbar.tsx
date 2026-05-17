import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import SemanticSearch from './SemanticSearch';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Market Brain', en: '市场中枢' },
    { name: 'Trend Scan', en: '趋势扫描' },
    { name: 'Style Ranking', en: '款式排行' },
    { name: 'Bestseller Prediction', en: '爆款预测' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[150] px-6 md:px-10 py-6 md:py-8 flex items-center justify-between transition-all duration-1000 ${
          isScrolled ? 'bg-brand-cream/80 backdrop-blur-2xl py-4 md:py-5 border-b border-brand-black/5 text-brand-black' : 'bg-transparent text-brand-black md:text-white'
        }`}
      >
        {/* Left: Menu Trigger */}
        <div className="flex-1 flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex items-center gap-4 hover:opacity-70 transition-all"
          >
            <div className="relative w-8 h-8 flex flex-col justify-center gap-2">
              <span className={`h-[1px] transition-all duration-700 bg-current ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
              <span className={`h-[1px] transition-all duration-700 bg-current ${isOpen ? 'w-0' : 'w-5 opacity-60'}`} />
              <span className={`h-[1px] transition-all duration-700 bg-current ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
            </div>
            <span className="text-[9px] tracking-[0.8em] font-black hidden lg:block opacity-60 group-hover:opacity-100 transition-opacity">MENU</span>
          </button>
          
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hover:opacity-70 transition-all flex items-center gap-4 group"
          >
            <Search size={18} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
            <span className="text-[9px] tracking-[0.8em] font-black hidden lg:block opacity-60 group-hover:opacity-100 transition-opacity">AESTHETIC SEARCH</span>
          </button>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center">
          <a href="/" className="group flex flex-col items-center">
            <span className="text-2xl md:text-3xl tracking-[0.6em] font-serif font-light uppercase transition-all duration-700 group-hover:tracking-[0.8em]">
              WHITE COSMOS
            </span>
            <span className="max-w-0 group-hover:max-w-full transition-all duration-700 h-px bg-brand-gold w-full mt-1"></span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex-1 flex justify-end items-center gap-12">
          <button className="relative w-6 h-[1px] bg-current opacity-20 hover:opacity-100 transition-opacity"></button>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 animate-pulse"></div>
        </div>
      </nav>

      <SemanticSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[140] bg-brand-black text-white p-10 md:p-20 flex flex-col justify-center"
          >
            <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="flex flex-col gap-6 md:gap-8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a 
                      href="#" 
                      className="group flex flex-col md:flex-row md:items-end gap-2 md:gap-6"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-4xl md:text-8xl font-serif italic font-light hover:text-brand-gold transition-colors duration-500 decoration-1 hover:underline underline-offset-8">
                        {item.name}
                      </span>
                      <span className="text-[10px] tracking-[0.5em] text-white/30 mb-2 md:mb-5 uppercase font-bold">
                        {item.en}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>
              
              <div className="hidden lg:flex flex-col justify-center border-l border-white/10 pl-20">
                <p className="text-[10px] tracking-[0.6em] text-brand-gold uppercase mb-8 font-bold">SELECTED VISUALS</p>
                <div className="aspect-[4/5] bg-white/5 relative overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110" 
                    alt="Menu Inspiration"
                   />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
