import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { whiteCosmos, FashionDNA } from '../services/dnaEngine';
import ProductModal from './ProductModal';
import { Activity, BarChart3, Fingerprint, Globe } from 'lucide-react';

export default function IntelligenceFlow() {
  const [selectedDNA, setSelectedDNA] = useState<FashionDNA | null>(null);
  const stream = whiteCosmos.getStream();

  return (
    <section className="py-24 bg-brand-cream relative z-10">
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

      <div className="max-w-screen-2xl mx-auto px-6 md:px-20">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-8xl font-serif mb-8 italic tracking-tighter">Global Intelligence Feed / 趋势情报流</h2>
            <p className="text-brand-black/40 leading-relaxed tracking-widest text-lg font-light max-w-xl">
              24-hour autonomous scanning of global silhouettes, textiles, and market vectors. Transmitting raw aesthetic intelligence.
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="flex flex-col items-end">
                <span className="text-[7px] tracking-[0.4em] uppercase text-brand-black/30 font-black mb-1">Signal Status</span>
                <span className="text-[10px] font-mono text-brand-gold animate-pulse">ACTIVE / TRANSMITTING</span>
             </div>
             <div className="w-[1px] h-10 bg-brand-black/10"></div>
             <div className="flex flex-col items-end">
                <span className="text-[7px] tracking-[0.4em] uppercase text-brand-black/30 font-black mb-1">Sync Ratio</span>
                <span className="text-[10px] font-mono">0.998 GLOBAL</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-y-32">
          {stream.map((node, i) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedDNA(node)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-brand-accent shadow-2xl">
                 <img 
                   src={node.url} 
                   alt={node.semantics.spirit}
                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                 />
                 
                 {/* Intelligence Overlays */}
                 <div className="absolute top-6 left-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 flex items-center gap-2 border border-black/5">
                       <BarChart3 size={10} className="text-brand-gold" />
                       <span className="text-[8px] font-black tracking-widest text-black">Bestseller: {node.semantics.market.bestsellerPotential * 100}%</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 flex items-center gap-2 border border-black/5">
                       <Fingerprint size={10} className="text-brand-gold" />
                       <span className="text-[8px] font-black tracking-widest text-black">DNA: {node.semantics.genome.brandDNA}</span>
                    </div>
                 </div>

                 {/* Pulse Indicator */}
                 <div className="absolute bottom-6 right-6 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></div>
                    <span className="text-[8px] tracking-[0.3em] font-black text-white mix-blend-difference uppercase">{node.semantics.signalX.pulseOrigin} Node</span>
                 </div>
              </div>

              {/* Data Section */}
              <div className="space-y-4">
                 <div className="flex justify-between items-start">
                    <div>
                       <p className="text-[9px] tracking-[0.5em] uppercase text-brand-gold font-black mb-1">{node.semantics.temporal}</p>
                       <h3 className="text-2xl font-serif italic tracking-tight">{node.semantics.spirit}</h3>
                    </div>
                    <span className="text-[10px] font-mono text-black/30 pt-1">ID: {node.id.toUpperCase()}</span>
                 </div>
                 
                 <p className="text-xs text-brand-black/60 font-light leading-relaxed tracking-wider border-l border-brand-gold/20 pl-4">
                    {node.semantics.master.critique.substring(0, 80)}...
                 </p>

                 <div className="pt-4 grid grid-cols-2 gap-4 border-t border-brand-black/5">
                    <div>
                       <p className="text-[7px] tracking-[0.2em] text-brand-black/30 uppercase mb-1">Luxury Stability</p>
                       <p className="text-[10px] font-bold text-black">{node.semantics.analyst.luxuryStability * 100}% Stability</p>
                    </div>
                    <div>
                       <p className="text-[7px] tracking-[0.2em] text-brand-black/30 uppercase mb-1">Buyer Confidence</p>
                       <p className="text-[10px] font-bold text-brand-gold leading-none">{node.semantics.analyst.buyerConfidence * 100}% CONFIDENCE</p>
                    </div>
                 </div>
              </div>
              
              {/* Interactive Decoration */}
              <div className="absolute -inset-4 border border-brand-black/0 group-hover:border-brand-black/5 transition-all duration-700 -z-10 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Stream Footer */}
        <div className="mt-32 pt-20 border-t border-brand-black/5 text-center">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-flex items-center gap-6"
           >
              <div className="w-12 h-[1px] bg-brand-black/20"></div>
              <span className="text-[9px] tracking-[1em] uppercase font-black text-brand-black/40">Loading further intelligence nodes</span>
              <div className="w-12 h-[1px] bg-brand-black/20"></div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
