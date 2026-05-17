import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { whiteCosmos, FashionDNA } from '../services/dnaEngine';
import ProductModal from './ProductModal';
import { ArrowUpRight, ShieldCheck, Activity, Info } from 'lucide-react';

export default function IntelligenceFlow() {
  const [selectedDNA, setSelectedDNA] = useState<FashionDNA | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const stream = whiteCosmos.getStream();

  // Adaptive Editorial Grid Logic
  const col1 = stream.filter((_, i) => i % 3 === 0);
  const col2 = stream.filter((_, i) => i % 3 === 1);
  const col3 = stream.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-40 bg-white relative z-10 overflow-hidden">
      <ProductModal isOpen={!!selectedDNA} onClose={() => setSelectedDNA(null)} dna={selectedDNA} />

      {/* Luxury Scroll Continuity (SX-003) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 pointer-events-none">
         <div className="w-[1px] h-32 bg-black/40"></div>
         <motion.div 
            animate={{ height: [10, 60, 10] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-[1px] bg-brand-gold" 
         />
         <div className="w-[1px] h-32 bg-black/40"></div>
      </div>

      {/* Global Trend Clock Sidebar (GT-001) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-12 z-50 mix-blend-difference pointer-events-none">
         <p className="text-[8px] tracking-[1em] font-black uppercase text-white/20 vertical-text origin-center -rotate-90 whitespace-nowrap mb-20">Global Trend Clock</p>
         <div className="relative w-8 h-8">
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-white/10 rounded-full"
            />
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
               className="absolute inset-2 border border-brand-gold/20 rounded-full border-t-brand-gold/60"
            />
         </div>
         <div className="h-40 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>

      <div className="max-w-[1900px] mx-auto px-6 lg:px-16">
        {/* Market Authority Header */}
        <div className="mb-48 flex flex-col lg:flex-row justify-between items-end gap-20 border-b border-gray-100 pb-24">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="w-16 h-[1px] bg-brand-gold"></div>
              <span className="text-[11px] tracking-[1.2em] uppercase font-black text-brand-gold">Signal Density Mode / Elite Core AI-01</span>
            </motion.div>
            <h2 className="text-8xl lg:text-[180px] font-serif mb-16 italic tracking-tighter leading-[0.75] text-brand-black group">
               <span className="inline-block transition-transform duration-1000 group-hover:scale-[1.05] group-hover:translate-x-4">WHITE</span> 
               <br /> 
               <span className="not-italic font-light tracking-[0.25em] text-4xl lg:text-9xl opacity-80 uppercase pt-6 block transition-all duration-1000 group-hover:tracking-[0.5em]">COSMOS</span>
            </h2>
            <p className="text-brand-black/40 leading-[2.2] tracking-[0.25em] text-xl font-light max-w-4xl uppercase">
              Autonomous aesthetic sensors active. Decoding the semantic transition from physical wealth to digital aura restraint. SS27 Predictive Intelligence stream initiated.
            </p>
          </div>
          
          <div className="flex flex-col gap-12 lg:text-right pb-10">
             <div className="space-y-3">
                <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Signal Flux</p>
                <p className="text-xl font-mono text-brand-gold tracking-widest">128.4 Hz / ACTIVE</p>
             </div>
             <div className="space-y-3">
                <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Global Sentiment</p>
                <p className="text-xl font-mono tracking-widest uppercase">Hyper-Silence ↑</p>
             </div>
          </div>
        </div>

        {/* Cinematic Waterfall Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32">
          {[col1, col2, col3].map((column, colIdx) => (
            <div key={colIdx} className={`flex flex-col gap-24 lg:gap-48 ${colIdx === 1 ? 'lg:pt-64' : colIdx === 2 ? 'lg:pt-[32rem]' : ''}`}>
              {column.map((node, i) => {
                // Adaptive Hero Injection
                const isHero = i > 0 && i % 4 === 0;
                
                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.8, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                    onMouseEnter={() => setHoveredId(node.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group relative cursor-crosshair ${isHero ? 'lg:-mx-32 z-20' : ''}`}
                    onClick={() => setSelectedDNA(node)}
                  >
                    {/* Pause Zone Injection (AGENT-25: Visual Purity) */}
                    {i > 0 && i % 3 === 0 && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mb-48 bg-gray-50/50 p-20 border border-gray-100/50 relative group/pause overflow-hidden"
                      >
                         <p className="text-[10px] tracking-[1em] font-black uppercase text-brand-black/20 mb-8">System Signal / {node.semantics.geo?.city.toUpperCase() || 'MODERNISM'}</p>
                         <div className="flex justify-between items-end">
                            <div>
                               <p className="text-4xl font-serif italic text-black/40 group-hover/pause:text-brand-gold transition-colors duration-1000">
                                  {node.semantics.market.marketSentiment}
                               </p>
                            </div>
                            <div className="text-right">
                               <p className="text-[9px] font-mono text-black/20 tracking-tighter mb-2">PULSE: {node.semantics.runway?.era}</p>
                               <div className="h-0.5 w-32 bg-gray-100">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '80%' }}
                                    className="h-full bg-brand-gold opacity-30" 
                                  />
                               </div>
                            </div>
                         </div>
                      </motion.div>
                    )}

                    {/* Image Container with Luxury Motion */}
                    <div className={`relative overflow-hidden bg-gray-50 mb-12 shadow-sm transition-all duration-1000 ${
                      isHero ? 'aspect-[21/9]' : (i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-[3/2]' : 'aspect-square')
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 4, ease: [0.19, 1, 0.22, 1] }}
                        className="relative h-full w-full"
                      >
                        <img 
                          src={node.url} 
                          alt={node.semantics.spirit}
                          className="w-full h-full object-cover transition-all duration-2000 grayscale-[0.4] group-hover:grayscale-0 contrast-[1.05]"
                        />

                        {/* Visual Gravity Mapping (AP-002) */}
                        <div className="absolute inset-0 pointer-events-none">
                           <motion.div 
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 0.6 }}
                              className="absolute top-[35%] left-[55%] w-3 h-3 bg-brand-gold rounded-full blur-[2px]"
                           />
                           <motion.div 
                              initial={{ scale: 0, opacity: 0 }}
                              whileInView={{ scale: 1, opacity: 0.3 }}
                              transition={{ delay: 0.4 }}
                              className="absolute top-[60%] left-[45%] w-2 h-2 bg-brand-gold rounded-full blur-[4px]"
                           />
                        </div>

                        {/* Visual Rarity & Flow Indicators (AGENT-53, 60, 69) */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                           <motion.div 
                              animate={{ 
                                top: ['-100%', '200%']
                              }}
                              transition={{ 
                                duration: 12, 
                                repeat: Infinity, 
                                ease: "linear" 
                              }}
                              className="absolute w-full h-[100px] bg-gradient-to-b from-transparent via-brand-gold/5 to-transparent opacity-50"
                           />
                           {/* Agent-69 Rhythm Pulse */}
                           <motion.div 
                              animate={{ opacity: [0.1, 0.3, 0.1] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="absolute inset-0 border border-brand-gold/5"
                           />
                           {node.semantics.composition?.rarityScore && node.semantics.composition.rarityScore > 0.9 && (
                              <div className="absolute top-4 right-4 bg-brand-gold/80 backdrop-blur-xl px-4 py-1 text-[8px] tracking-[0.4em] font-black text-black">
                                 RARE_SIGNAL
                              </div>
                           )}
                           {/* Agent-65 Contrast Tension Marker */}
                           {node.semantics.strategic?.contrastTension && node.semantics.strategic.contrastTension > 0.9 && (
                              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                 <div className="w-1 h-1 bg-white rounded-full animate-ping"></div>
                                 <span className="text-[7px] tracking-[0.3em] font-bold text-white/40 uppercase">High Tension Scan</span>
                              </div>
                           )}
                        </div>

                        {/* Visual DNA Extraction Layer (Embedded in Image) */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-between">
                           <div className="flex justify-between items-start">
                              <div className="flex flex-col gap-2 opacity-30 group-hover:opacity-100 transition-opacity duration-1000">
                                 <div className="bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-px border border-white/10">
                                    <span className="text-[8px] tracking-[0.5em] font-black text-brand-gold uppercase">{node.semantics.signalX.pulseOrigin}</span>
                                 </div>
                                 <span className="text-[8px] tracking-[0.4em] font-black text-white mix-blend-difference uppercase">Stability {node.semantics.analyst.luxuryStability * 100}%</span>
                              </div>
                              <div className="p-3 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-50 group-hover:scale-100">
                                 <ArrowUpRight size={16} className="text-white" />
                              </div>
                           </div>

                           <div className="flex justify-between items-end">
                              <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0">
                                 <span className="text-[7px] tracking-[0.6em] font-black text-white/40 uppercase">Commercial Velocity</span>
                                 <span className="text-lg font-mono text-white mix-blend-difference">{(node.semantics.analyst.growthVelocity * 100).toFixed(1)}</span>
                              </div>
                              <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                 <span className="text-[8px] tracking-[0.5em] font-black text-brand-gold uppercase">Elite_Asset_Node</span>
                              </div>
                           </div>
                        </div>

                        {/* Cinematic Atmosphere Filter */}
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 backdrop-blur-[2px]" />
                      </motion.div>
                    </div>

                    {/* Elite Typography Labels */}
                    <div className="space-y-10 px-6">
                       <div className="flex justify-between items-start">
                          <div className="space-y-4">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-[1px] bg-brand-gold/40"></div>
                                <span className="text-[10px] tracking-[1.2em] uppercase text-brand-black/20 font-black">{node.semantics.temporal}</span>
                             </div>
                             <h3 className="text-5xl lg:text-7xl font-serif italic text-brand-black tracking-tighter leading-none group-hover:text-brand-gold transition-colors duration-1000">{node.semantics.spirit}</h3>
                          </div>
                          <div className="text-right flex flex-col gap-2">
                             <span className="text-[10px] font-mono text-brand-black/20 tracking-widest">{node.id.toUpperCase()}</span>
                             <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1 border border-gray-100">
                                <Activity size={10} className="text-brand-gold" />
                                <span className="text-[9px] font-black tracking-widest">SIGNAL_HIGH</span>
                             </div>
                          </div>
                       </div>

                       <p className="text-base text-brand-black/50 font-light leading-relaxed tracking-[0.2em] max-w-lg uppercase">
                          {node.semantics.master.critique.substring(0, 110)}...
                       </p>

                       <div className="pt-10 grid grid-cols-2 gap-16 border-t border-gray-100">
                          <div className="space-y-3">
                             <p className="text-[9px] tracking-[0.6em] text-brand-black/20 uppercase font-black">Aesthetic DNA</p>
                             <p className="text-sm font-bold text-black tracking-[0.3em] uppercase">{node.semantics.visualDNA.silhouetteType.split(' ')[0]} / {node.semantics.visualDNA.tailoringLogic.split(' ')[0]}</p>
                          </div>
                          <div className="space-y-3">
                             <p className="text-[9px] tracking-[0.6em] text-brand-black/20 uppercase font-black">Market Sentiment</p>
                             <p className="text-sm font-bold text-brand-gold tracking-[0.3em] uppercase">{node.semantics.market.marketSentiment}</p>
                          </div>
                       </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer: Transmission Horizon */}
        <div className="mt-80 flex flex-col items-center">
           <div className="w-[1px] h-48 bg-gray-100 mb-20"></div>
           <motion.div
             animate={{ opacity: [0.1, 0.4, 0.1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="text-[12px] tracking-[2em] uppercase font-black text-brand-black/30 text-center"
           >
              Consolidating future Market aesthetic nodes
           </motion.div>
        </div>
      </div>
    </section>
  );
}
