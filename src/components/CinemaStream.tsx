import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { whiteCosmos, FashionDNA } from '../services/dnaEngine';

export default function CinemaStream() {
  const stream = whiteCosmos.getStream();
  
  return (
    <section className="bg-brand-black">
      {stream.map((dna, idx) => (
        <StreamEntry key={dna.id} dna={dna} index={idx} />
      ))}
    </section>
  );
}

function StreamEntry({ dna, index }: { dna: FashionDNA, index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div ref={containerRef} className="relative h-[110vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={dna.url} 
          className="w-full h-full object-cover lg:object-contain" 
          alt="Visual Addiction Stream" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black/60" />
      </motion.div>

      {/* Neural Link Overlay Circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute top-1/4 left-1/3 w-96 h-96 border border-white/5 rounded-full"
         />
         <motion.div 
           animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
           transition={{ duration: 15, repeat: Infinity, delay: 2 }}
           className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-brand-gold/10 rounded-full"
         />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl px-6 md:px-20 h-full flex flex-col justify-end pb-20 md:pb-32">
        <motion.div 
          style={{ y: yText }}
          className="max-w-3xl text-white bg-black/5 backdrop-blur-[60px] p-8 md:p-16 border border-white/5 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center gap-6 mb-8">
             <span className="text-[10px] tracking-[1em] uppercase font-black text-brand-gold opacity-50">Visual Essence {index + 1}</span>
          </div>
          
          <h2 className="text-4xl md:text-8xl font-serif italic mb-10 leading-none tracking-tighter">
            {dna.semantics.spirit}
          </h2>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pt-10 border-t border-white/5 mb-10">
             <div>
               <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Buyer Confidence</p>
               <p className="text-[11px] font-medium uppercase tracking-[0.2em]">{dna.semantics.analyst.buyerConfidence * 100}% Stability</p>
             </div>
             <div>
               <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Luxury Stability</p>
               <p className="text-[11px] font-medium uppercase tracking-[0.2em]">{dna.semantics.analyst.luxuryStability * 100}% Integrity</p>
             </div>
             <div className="hidden lg:block">
               <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Market Fatigue</p>
               <p className="text-[11px] font-medium uppercase tracking-[0.2em]">{dna.semantics.analyst.marketFatigue * 100}% Risk</p>
             </div>
             <div className="hidden lg:block">
               <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Coherence Rate</p>
               <p className="text-[11px] font-medium uppercase tracking-[0.2em]">{dna.semantics.analyst.collectionCoherence * 100}% Level</p>
             </div>
           </div>

          <div className="my-12 py-10 border-y border-white/5 grid grid-cols-1 md:grid-cols-2 gap-16">
             <div className="space-y-6">
                <p className="text-[8px] tracking-[0.5em] uppercase text-brand-gold font-black opacity-60">SIGNAL-X GLOBAL NETWORK / 趋势信号网</p>
                <div className="space-y-4">
                   <p className="text-xl md:text-2xl font-serif italic text-white leading-snug">
                     "{dna.semantics.master.critique}"
                   </p>
                   <p className="text-[10px] text-white/40 tracking-widest leading-relaxed uppercase">
                     {dna.semantics.master.reasoning}
                   </p>
                </div>
             </div>
             <div className="flex flex-col justify-center gap-12">
                <div className="grid grid-cols-2 gap-10">
                   <div>
                     <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Commercial Performance</p>
                     <p className="text-[10px] text-white uppercase tracking-[0.2em] font-medium">{dna.semantics.market.commercialValue} Global Index</p>
                   </div>
                   <div>
                     <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Momentum Alpha</p>
                     <p className="text-[10px] text-brand-gold uppercase tracking-[0.2em] font-black">{dna.semantics.market.trendVelocity * 100}% Velocity</p>
                   </div>
                </div>
                <div>
                   <p className="text-[7px] tracking-[0.4em] uppercase text-white/30 font-black mb-3">Market Segmentation / 市场细分</p>
                   <div className="flex flex-wrap gap-3">
                      {dna.semantics.master.designerInfluence.map(d => (
                        <span key={d} className="px-3 py-1.5 border border-white/10 text-[8px] text-white/60 tracking-widest uppercase hover:border-brand-gold hover:text-white transition-colors cursor-crosshair">
                          {d}
                        </span>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          <div className="flex justify-between items-center">
             <div className="flex gap-12">
                <div className="flex flex-col gap-1">
                 <span className="text-[6px] tracking-[0.3em] text-white/20 uppercase font-black">Visual Silence</span>
                 <span className="text-[9px] tracking-[0.2em] text-brand-gold uppercase">{dna.semantics.transcendence.luxurySilence * 100}% Density</span>
               </div>
               <div className="flex flex-col gap-1">
                 <span className="text-[6px] tracking-[0.3em] text-white/20 uppercase font-black">Temporal Vector</span>
                 <span className="text-[9px] tracking-[0.2em] text-white/60 uppercase">{dna.semantics.genome.eraVector}</span>
               </div>
             </div>
             <button className="group relative px-10 py-5 overflow-hidden">
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <span className="relative z-10 text-[10px] tracking-[0.5em] uppercase font-black mix-blend-difference group-hover:text-black transition-colors">Enter Studio</span>
                <div className="absolute inset-0 border border-white/10" />
             </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle brand identifier */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:block opacity-20">
         <div className="flex flex-col gap-1">
            <span className="text-[7px] tracking-[1em] font-black text-brand-gold uppercase">White Cosmos</span>
            <div className="w-8 h-px bg-white/40" />
         </div>
      </div>
    </div>
  );
}
