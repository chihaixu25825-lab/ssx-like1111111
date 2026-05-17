import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { whiteCosmos, FashionDNA } from '../services/dnaEngine';
import ProductModal from './ProductModal';
import { ArrowUpRight, ShieldCheck, Activity, Info } from 'lucide-react';

export default function IntelligenceFlow() {
  const [selectedDNA, setSelectedDNA] = useState<FashionDNA | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const stream = whiteCosmos.getStream();

  // Sort into columns for a masonry-like effect manually
  const col1 = stream.filter((_, i) => i % 3 === 0);
  const col2 = stream.filter((_, i) => i % 3 === 1);
  const col3 = stream.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-40 bg-white relative z-10 overflow-hidden">
      <ProductModal 
        isOpen={!!selectedDNA} 
        onClose={() => setSelectedDNA(null)} 
        product={selectedDNA ? {
          id: parseInt(selectedDNA.id.split('_')[1]),
          name: selectedDNA.semantics.spirit,
          category: selectedDNA.semantics.temporal,
          image: selectedDNA.url,
          gallery: [selectedDNA.url],
          description: selectedDNA.semantics.philosophy
        } : null} 
      />

      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header: Intelligence Consolidation */}
        <div className="mb-32 flex flex-col md:flex-row justify-between items-start gap-16 border-b border-gray-100 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-[1px] bg-brand-gold"></div>
              <span className="text-[10px] tracking-[0.8em] uppercase font-black text-brand-gold">Elite Analyst Core / AI-01</span>
            </motion.div>
            <h2 className="text-6xl md:text-[120px] font-serif mb-12 italic tracking-tighter leading-[0.85] text-brand-black">
              Intelligence <br /> 
              <span className="not-italic font-light tracking-[0.1em] text-4xl md:text-7xl opacity-80 uppercase">Consolidation</span>
            </h2>
            <p className="text-brand-black/50 leading-relaxed tracking-[0.15em] text-lg font-light max-w-2xl uppercase">
              Autonomous scanning of global aesthetics. Decoding the semantic transition from wealth display to aura restraint. SS27 Predictive Momentum activated.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 md:text-right">
             <div className="space-y-1">
                <p className="text-[8px] tracking-[0.5em] uppercase text-brand-black/30 font-black">Pulse Origin</p>
                <p className="text-sm font-mono text-brand-gold">LVMH / KERING / LUXURY NODES</p>
             </div>
             <div className="space-y-1">
                <p className="text-[8px] tracking-[0.5em] uppercase text-brand-black/30 font-black">Sync Frequency</p>
                <p className="text-sm font-mono">124.8 Hz GLOBAL NEURAL FEED</p>
             </div>
             <div className="pt-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-brand-black/5 bg-gray-50 rounded-full">
                   <Activity size={12} className="text-brand-gold animate-pulse" />
                   <span className="text-[9px] tracking-[0.3em] font-black text-black">LIVE TRANSMISSION</span>
                </div>
             </div>
          </div>
        </div>

        {/* Cinematic Waterfall Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20">
          {[col1, col2, col3].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-12 md:gap-24">
              {column.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.1,
                    ease: [0.19, 1, 0.22, 1] 
                  }}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative cursor-crosshair"
                  onClick={() => setSelectedDNA(node)}
                >
                  {/* Image Container: Advanced Hover & Cinematic Scaling */}
                  <div className="relative overflow-hidden bg-gray-100 mb-8 aspect-auto shadow-sm">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
                      className="relative"
                    >
                      <img 
                        src={node.url} 
                        alt={node.semantics.spirit}
                        className="w-full object-cover transition-all duration-1000"
                      />
                      
                      {/* Deep Field Blur Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px]" />
                    </motion.div>

                    {/* Data Overlays: Apple Vision Glass Style */}
                    <AnimatePresence>
                      {hoveredId === node.id && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none"
                        >
                          <div className="flex justify-between items-start">
                             <div className="p-4 bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl">
                                <span className="text-[8px] tracking-[0.4em] uppercase font-black text-black/60 block mb-1">Signal</span>
                                <span className="text-[10px] text-black font-mono tracking-widest">{node.id.toUpperCase()}</span>
                             </div>
                             <div className="p-4 bg-white/40 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl">
                                <ArrowUpRight size={14} className="text-black" />
                             </div>
                          </div>

                          <div className="space-y-4">
                             <div className="p-6 bg-white/60 backdrop-blur-2xl border border-white/60 shadow-2xl rounded-3xl">
                                <div className="flex justify-between items-center mb-4">
                                   <span className="text-[7px] tracking-[0.5em] uppercase font-black text-brand-gold">Analyst Accuracy</span>
                                   <span className="text-[10px] text-black font-mono">{(node.semantics.analyst.buyerConfidence * 100).toFixed(1)}%</span>
                                </div>
                                <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                                   <motion.div 
                                     initial={{ width: 0 }}
                                     animate={{ width: `${node.semantics.analyst.buyerConfidence * 100}%` }}
                                     className="h-full bg-brand-gold"
                                   />
                                </div>
                             </div>
                             <div className="p-4 bg-black/90 backdrop-blur-xl rounded-2xl flex items-center justify-center gap-3">
                                <ShieldCheck size={12} className="text-brand-gold" />
                                <span className="text-[8px] tracking-[0.4em] uppercase font-black text-white">Consolidation Verified</span>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Typography: Luxury Labels */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[9px] tracking-[0.8em] uppercase text-brand-gold font-black mb-3">{node.semantics.temporal} / {node.semantics.signalX.pulseOrigin}</p>
                          <h3 className="text-3xl font-serif italic text-brand-black tracking-tight leading-none">{node.semantics.spirit}</h3>
                       </div>
                    </div>
                    
                    <p className="text-sm text-brand-black/40 font-light leading-relaxed tracking-[0.1em] max-w-sm">
                       {node.semantics.master.critique.substring(0, 100)}...
                    </p>

                    <div className="pt-6 grid grid-cols-2 gap-8 border-t border-gray-100">
                       <div className="space-y-1">
                          <p className="text-[7px] tracking-[0.4em] text-brand-black/20 uppercase font-black">Stability Index</p>
                          <p className="text-[11px] font-bold text-black tracking-widest">{node.semantics.analyst.luxuryStability * 100}% AGING</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[7px] tracking-[0.4em] text-brand-black/20 uppercase font-black">Verdict</p>
                          <p className="text-[11px] font-bold text-brand-gold tracking-widest uppercase">ELITE_ASSET</p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer: Intelligence Horizon */}
        <div className="mt-48 flex flex-col items-center">
           <div className="w-[1px] h-32 bg-gray-100 mb-12"></div>
           <motion.div
             animate={{ opacity: [0.3, 0.8, 0.3] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="text-[10px] tracking-[1.5em] uppercase font-black text-brand-black/30"
           >
              Synchronizing Future aesthetic nodes
           </motion.div>
        </div>
      </div>
    </section>
  );
}
