import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, 400]);
  const yText = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="relative min-h-[140vh] md:h-[120vh] bg-brand-cream overflow-hidden">
      <div className="flex flex-col lg:flex-row h-screen sticky top-0">
        {/* Left Section: Artistic Focus */}
        <div className="w-full lg:w-7/12 relative bg-brand-accent overflow-hidden group h-[60vh] lg:h-full">
          <motion.div 
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center p-4 lg:p-16 h-full"
          >
            <div className="w-full h-full bg-[#D1CFCA] shadow-2xl relative flex items-end p-6 lg:p-16 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
                alt="Editorial Shot" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:from-black/50"></div>
              
              <motion.div 
                style={{ y: yText }}
                className="relative z-10 text-white"
              >
                <span className="block text-[8px] md:text-[10px] uppercase tracking-[1em] mb-6 opacity-60 font-black whitespace-nowrap">INTELLIGENCE CONSOLIDATION / ELITE ANALYST CORE</span>
                <h1 className="text-4xl md:text-8xl font-serif leading-tight italic tracking-tighter">
                  Fashion <br /> 
                  <span className="not-italic opacity-90 font-light text-3xl md:text-6xl tracking-[0.2em]">Authority</span>
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical Accent Text */}
          <div 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.5em] opacity-30 pointer-events-none hidden lg:block"
            style={{ writingMode: 'vertical-rl' }}
          >
            GLOBAL MARKET INTELLIGENCE AUTHORITY
          </div>
        </div>

        {/* Right Section: Details and CTAs */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between p-8 lg:p-24 bg-brand-cream">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-16"
          >
            <div className="h-[1px] w-20 bg-brand-black"></div>
            <p className="text-xl md:text-2xl font-serif italic text-brand-black leading-relaxed">
              "The market is not a collection of sales, but a deep neural map of evolving human desire and aesthetic saturation."
            </p>
            
            <div className="pt-10">
               <h3 className="text-[10px] tracking-[0.8em] font-black uppercase text-brand-black/30 mb-8">Elite Analyst Intelligence</h3>
               <div className="space-y-6">
                  {['Buyer Confidence Index', 'Luxury Stability Map', 'Market Fatigue Guard'].map(t => (
                    <div key={t} className="group cursor-pointer flex justify-between items-center border-b border-brand-border pb-4 hover:border-brand-black transition-colors">
                       <span className="text-sm tracking-widest text-brand-black/60 group-hover:text-brand-black">{t}</span>
                       <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">EXECUTE</span>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 lg:mt-0"
          >
            <button className="group relative w-full border border-brand-black py-8 text-[11px] uppercase tracking-[0.5em] font-black overflow-hidden bg-brand-black text-white hover:text-white transition-colors duration-500">
               <div className="relative z-10">Access Intelligence Feed</div>
            </button>
            <div className="flex justify-between items-center mt-8">
              <span className="text-[9px] tracking-[0.5em] font-black text-brand-black/20">INTEL CORE v2.0</span>
              <div className="text-[10px] text-brand-black/40 tracking-[0.4em] uppercase font-bold">
                Observe Civilization
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-10 left-10 md:left-20 flex items-center gap-6"
          >
            <div className="flex flex-col gap-1">
               <span className="text-[7px] tracking-[0.5em] text-white/20 uppercase font-black">Market Trend Sync</span>
               <div className="w-32 h-0.5 bg-white/5 relative overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '0%'] }}
                    transition={{ duration: 2, ease: "circOut" }}
                    className="absolute inset-0 bg-brand-gold w-full"
                    style={{ width: '98%' }}
                  />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Narrative Element (Editorial 3D feel) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1.2 }}
          className="absolute top-[20%] left-[54%] w-48 h-64 border border-white/20 backdrop-blur-xl bg-white/5 z-20 shadow-2xl hidden lg:flex items-center justify-center p-8 text-center"
        >
          <div>
            <div className="w-8 h-[1px] bg-white/60 mx-auto mb-4"></div>
            <p className="text-[10px] text-white/80 uppercase tracking-[0.2em] mb-2 italic">Analyst Insight</p>
            <p className="text-white text-xs leading-tight font-light tracking-wide">Autonomous Style <br/> Heatmapping Sync</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
