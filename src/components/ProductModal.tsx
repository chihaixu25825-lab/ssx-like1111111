import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, BarChart3, Fingerprint, Network, ShieldCheck, Zap, Globe } from 'lucide-react';
import { whiteCosmos, FashionDNA } from '../services/dnaEngine';
import { cosmosIntelligence, FashionIntelligenceScore } from '../services/whiteCosmosProcessor';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  dna: FashionDNA | null;
}

export default function ProductModal({ isOpen, onClose, dna }: ProductModalProps) {
  const [activeTab, setActiveTab] = useState<'INTEL' | 'DNA' | 'NETWORK' | 'DYNAMICS' | 'GENEALOGY' | 'STRATEGY' | 'PROTOCOL' | 'MASTERY'>('INTEL');

  useEffect(() => {
    if (isOpen && dna) {
      whiteCosmos.track(`Deep Intelligence Consolidation: ${dna.semantics.spirit}`);
    }
  }, [isOpen, dna]);

  if (!dna) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white/95 backdrop-blur-3xl p-0 lg:p-20"
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 30 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="bg-white w-full max-w-[1700px] h-full lg:max-h-[90vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative border border-gray-100 rounded-px"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 z-[60] text-brand-black hover:text-brand-gold transition-colors duration-500 hover:rotate-90"
            >
              <X size={28} strokeWidth={1} />
            </button>

            {/* Left: Cinematic Image Layer */}
            <div className="w-full lg:w-[55%] h-[40vh] lg:h-full bg-gray-50 relative overflow-hidden group">
               <motion.img 
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  src={dna.url} 
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-3000 group-hover:scale-105 group-hover:grayscale-0" 
                  alt={dna.semantics.spirit} 
               />
               
               {/* Signal HUD Overlay */}
               <div className="absolute inset-0 p-12 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                     <div className="bg-black/95 text-white px-8 py-4 rounded-px border border-white/10 backdrop-blur-3xl">
                        <p className="text-[10px] tracking-[0.6em] font-black uppercase text-brand-gold mb-2">Authority Node / {dna.semantics.signalX.pulseOrigin}</p>
                        <div className="flex items-center gap-3">
                           <Globe size={12} className="text-brand-gold" />
                           <span className="text-[9px] tracking-[0.4em] font-mono uppercase">{dna.semantics.geo?.styleIdentity || 'Global Standard'}</span>
                        </div>
                     </div>
                  </div>
                  
                  <div className="flex justify-end">
                     <div className="bg-white/95 backdrop-blur-3xl p-10 border border-black/5 max-w-sm shadow-2xl">
                        <p className="text-[11px] tracking-[0.4em] font-black uppercase text-brand-gold mb-4">Silhouette Protocol</p>
                        <p className="text-lg font-serif italic text-black/80 leading-relaxed mb-6">
                           {dna.semantics.atelier.silhouetteArchitecture}
                        </p>
                        <div className="flex gap-4">
                           {dna.semantics.visualDNA.visualPressurePoints?.map((point, idx) => (
                             <span key={idx} className="text-[8px] px-3 py-1 bg-black/5 rounded-px tracking-widest text-black/40 uppercase">Point_{idx+1}: {point}</span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right: Elite Analyst Console */}
            <div className="w-full lg:w-[45%] h-[60vh] lg:h-full p-10 lg:p-20 overflow-y-auto bg-white border-l border-gray-100 custom-scrollbar">
               <div className="space-y-16">
                  {/* Phase 1: Identity & Spirit */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                  >
                     <div className="flex items-center gap-6 mb-10">
                        <span className="text-[10px] tracking-[1em] uppercase font-black text-brand-gold">{dna.semantics.temporal}</span>
                        <div className="flex-1 h-[0.5px] bg-brand-gold/20"></div>
                        <span className="text-[10px] tracking-[0.6em] uppercase font-black text-black/20">{dna.id.toUpperCase()}</span>
                     </div>
                     <h2 className="text-6xl lg:text-8xl font-serif italic text-brand-black tracking-tighter leading-none mb-12">{dna.semantics.spirit}</h2>
                     <p className="text-xl font-light text-brand-black/40 leading-[2] tracking-[0.1em] uppercase border-l-2 border-brand-gold pl-12 max-w-xl">
                        {dna.semantics.philosophy}
                     </p>
                  </motion.div>

                  {/* Phase 2: Navigation / Analytics Selector */}
                  <div className="flex gap-16 border-b border-gray-100 pb-2">
                     {['INTEL', 'DNA', 'NETWORK', 'DYNAMICS', 'GENEALOGY', 'STRATEGY', 'PROTOCOL', 'MASTERY'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`text-[11px] tracking-[0.6em] font-black pb-4 transition-all duration-500 relative ${activeTab === tab ? 'text-black' : 'text-black/10 hover:text-black/30'}`}
                        >
                           {tab} {activeTab === tab && <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-gold" />}
                        </button>
                     ))}
                  </div>

                  {/* Phase 3: Dynamic Data Panels */}
                  <div className="min-h-[500px]">
                     <AnimatePresence mode="wait">
                        {activeTab === 'INTEL' && (
                           <motion.div
                             key="intel"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="space-y-8">
                                 <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Analyst Critique</p>
                                 <p className="text-2xl font-light text-brand-black/80 leading-relaxed tracking-wider">
                                    {dna.semantics.master.critique}
                                 </p>
                              </div>
                              <div className="grid grid-cols-2 gap-12 pt-12 border-t border-gray-50">
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.6em] uppercase text-brand-black/20 font-black">Aura Protocol</p>
                                    <p className="text-lg font-bold tracking-[0.4em] text-black uppercase">{dna.semantics.godcore.aura}</p>
                                 </div>
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.6em] uppercase text-brand-black/20 font-black">Innovation Score</p>
                                    <div className="flex items-baseline gap-2">
                                       <p className="text-5xl font-mono text-brand-gold">{dna.semantics.master.innovationScore}</p>
                                       <span className="text-xs text-black/20 font-mono">/ 100</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="p-12 bg-black text-white space-y-8">
                                 <p className="text-[10px] tracking-[0.6em] uppercase font-black text-white/30">Strategic Impact Forecast</p>
                                 <p className="text-lg font-light leading-relaxed tracking-widest italic text-white/80">"{dna.semantics.analyst.commercialImpact}"</p>
                              </div>
                           </motion.div>
                        )}

                        {activeTab === 'DNA' && (
                           <motion.div
                             key="dna"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="grid grid-cols-2 gap-12"
                           >
                              <div className="p-12 bg-gray-50 border border-gray-100 space-y-6">
                                 <p className="text-[9px] tracking-[0.6em] text-black/30 uppercase font-black">Silhouette Focus</p>
                                 <p className="text-2xl font-serif italic text-black">{dna.semantics.visualDNA.silhouetteType}</p>
                              </div>
                              <div className="p-12 bg-gray-50 border border-gray-100 space-y-6">
                                 <p className="text-[9px] tracking-[0.6em] text-black/30 uppercase font-black">Fabric Mood</p>
                                 <p className="text-2xl font-serif italic text-black">{dna.semantics.fabric?.emotion || dna.semantics.material}</p>
                              </div>
                              <div className="col-span-2 space-y-10 py-12">
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Composition Balancing (VB-002)</p>
                                    <div className="flex items-center gap-6">
                                       <p className="text-4xl font-mono">{(dna.semantics.composition?.balanceScore || 0.8) * 100}</p>
                                       <div className="flex-1 h-px bg-gray-100 relative">
                                          <motion.div 
                                            initial={{ left: 0 }}
                                            animate={{ left: `${(dna.semantics.composition?.balanceScore || 0.5) * 100}%` }}
                                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                       <p className="text-[9px] tracking-[0.6em] uppercase text-brand-black/20 font-black">Luxury Density (LD-001)</p>
                                       <div className="h-0.5 w-full bg-gray-100">
                                          <motion.div initial={{ width: 0 }} animate={{ width: `${(dna.semantics.composition?.luxuryDensityScore || 0.9) * 100}%` }} className="h-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
                                       </div>
                                    </div>
                                    <div className="space-y-4">
                                       <p className="text-[9px] tracking-[0.6em] uppercase text-brand-black/20 font-black">Visual Temp (VT-001)</p>
                                       <p className="text-xl font-mono uppercase tracking-widest">{dna.semantics.composition?.visualTemperature || 'Neutral'}</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-span-2 p-12 bg-black text-white space-y-8">
                                 <p className="text-[10px] tracking-[0.8em] text-white/30 uppercase font-black">Visual Gravity Map (AP-002)</p>
                                 <p className="text-xl font-light leading-relaxed tracking-widest">{dna.semantics.composition?.visualGravityMap || 'Uniform central distribution.'}</p>
                              </div>
                           </motion.div>
                        )}

                        {activeTab === 'NETWORK' && (
                           <motion.div
                             key="network"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="grid grid-cols-2 gap-16">
                                 <div className="space-y-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Trend Origin (TO-003)</p>
                                    <p className="text-2xl font-serif italic text-black">{dna.semantics.marketDynamics?.trendOriginNode || dna.semantics.signalX.pulseOrigin}</p>
                                    <p className="text-[9px] tracking-[0.4em] text-brand-gold uppercase">Origin Node Verified</p>
                                 </div>
                                 <div className="space-y-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Price Perception (PP-002)</p>
                                    <p className="text-2xl font-mono uppercase tracking-[0.1em]">{dna.semantics.marketDynamics?.pricePerception || 'High Luxury'}</p>
                                 </div>
                              </div>
                              
                              <div className="p-16 bg-gray-50 border border-gray-100 space-y-12">
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[1em] text-black/30 uppercase font-black">Cultural Signal (CS-003)</p>
                                    <p className="text-3xl font-serif italic text-black/70 leading-snug">
                                       "{dna.semantics.marketDynamics?.culturalSignal || 'Awaiting synchronization with global cultural nodes.'}"
                                    </p>
                                 </div>
                                 <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                       <p className="text-[9px] tracking-[0.6em] text-black/20 uppercase font-black">Retail Acceleration (RS-003)</p>
                                       <p className="text-3xl font-mono">{(dna.semantics.marketDynamics?.retailAcceleration || 0.4) * 100}</p>
                                    </div>
                                    <div className="space-y-4">
                                       <p className="text-[9px] tracking-[0.6em] text-black/20 uppercase font-black">Geo-Style Heat</p>
                                       <p className="text-3xl font-mono text-brand-gold">{(dna.semantics.geo?.regionalHeat || 0.5) * 100}</p>
                                    </div>
                                 </div>
                              </div>
                           </motion.div>
                        )}

                        {activeTab === 'DYNAMICS' && (
                           <motion.div
                             key="dynamics"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="flex justify-between items-end border-b border-gray-100 pb-12">
                                 <div>
                                    <p className="text-[10px] tracking-[1em] uppercase text-brand-black/20 font-black mb-4">Casting Aesthetic (CI-002)</p>
                                    <p className="text-3xl font-serif italic">{dna.semantics.presentation?.castingAesthetic || 'Neutral Precision'}</p>
                                 </div>
                                 <div className="text-right">
                                    <p className="text-[10px] tracking-[1em] uppercase text-brand-black/20 font-black mb-4">Market Sentiment</p>
                                    <p className="text-2xl font-mono text-brand-gold uppercase">{dna.semantics.market.marketSentiment}</p>
                                 </div>
                              </div>

                              <div className="grid grid-cols-2 gap-16">
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Layering Complexity (SA-002)</p>
                                    <div className="h-0.5 w-full bg-gray-100">
                                       <motion.div initial={{ width: 0 }} animate={{ width: `${(dna.semantics.presentation?.layeringComplexity || 0.5) * 100}%` }} className="h-full bg-black" />
                                    </div>
                                 </div>
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Market Velocity</p>
                                    <div className="h-0.5 w-full bg-gray-100">
                                       <motion.div initial={{ width: 0 }} animate={{ width: `${dna.semantics.market.trendVelocity * 100}%` }} className="h-full bg-brand-gold" />
                                    </div>
                                 </div>
                              </div>

                              <div className="p-16 bg-gray-50 border border-gray-100 space-y-10">
                                 <p className="text-[10px] tracking-[1em] text-black/30 uppercase font-black">Styling Logic (SA-003)</p>
                                 <p className="text-2xl font-light tracking-widest text-black/80">
                                    {dna.semantics.presentation?.stylingLogic || 'Modular assembly with emphasis on structural flow.'}
                                 </p>
                              </div>
                           </motion.div>
                        )}

                        {activeTab === 'GENEALOGY' && (
                           <motion.div
                             key="genealogy"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="space-y-8">
                                 <p className="text-[10px] tracking-[1em] uppercase text-brand-black/20 font-black">Trend Ancestry Tree (TM-002)</p>
                                 <div className="flex flex-wrap gap-8 items-center">
                                    {dna.semantics.genealogy?.trendAncestry.map((node, i) => (
                                      <div key={i} className="flex items-center gap-4">
                                         <span className="text-xl font-serif italic">{node}</span>
                                         {i < dna.semantics.genealogy.trendAncestry.length - 1 && <span className="text-brand-gold">→</span>}
                                      </div>
                                    ))}
                                 </div>
                              </div>

                              <div className="grid grid-cols-2 gap-16">
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Energy Curve (ME-002)</p>
                                    <p className="text-2xl font-mono uppercase tracking-widest text-brand-gold">{dna.semantics.genealogy?.momentumCurve || 'STABLE'}</p>
                                 </div>
                                 <div className="space-y-6">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Cross-Brand Alliances</p>
                                    <div className="flex flex-col gap-2">
                                       {dna.semantics.genealogy?.crossBrand联盟.map((brand, i) => (
                                          <p key={i} className="text-xs font-mono text-black/60">NODE: {brand}</p>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              <div className="p-16 bg-black text-white space-y-8">
                                 <p className="text-[10px] tracking-[1em] text-white/30 uppercase font-black">Accessory Momentum (AS-002)</p>
                                 <p className="text-xl font-light leading-relaxed tracking-widest">
                                    {dna.semantics.genealogy?.accessorySignal || 'Minimalist integration pattern detected.'}
                                 </p>
                              </div>
                           </motion.div>
                        )}

                        {activeTab === 'STRATEGY' && (
                           <motion.div
                             key="strategy"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="flex justify-between items-start border-b border-gray-100 pb-12">
                                 <div>
                                    <p className="text-[10px] tracking-[1em] uppercase text-brand-black/20 font-black mb-4">Trend Clock Stage (GT-001)</p>
                                    <p className="text-3xl font-serif italic text-brand-gold">{dna.semantics.strategic?.trendClockStage || 'New Era'}</p>
                                 </div>
                                 <div className="text-right">
                                    <p className="text-[10px] tracking-[1em] uppercase text-brand-black/20 font-black mb-4">Lifecycle Remaining</p>
                                    <p className="text-2xl font-mono text-black">{dna.semantics.strategic?.remainingLifecycle || 'Unknown'}</p>
                                 </div>
                              </div>

                              <div className="grid grid-cols-2 gap-16">
                                 <div className="space-y-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Category Velocity (GC-003)</p>
                                    <div className="flex items-center gap-6">
                                       <p className="text-4xl font-mono">{(dna.semantics.strategic?.categoryVelocity || 0.5) * 100}</p>
                                       <div className="flex-1 h-px bg-gray-100 relative">
                                          <motion.div 
                                             initial={{ width: 0 }}
                                             animate={{ width: `${(dna.semantics.strategic?.categoryVelocity || 0.5) * 100}%` }}
                                             className="absolute top-0 left-0 h-full bg-brand-gold"
                                          />
                                       </div>
                                    </div>
                                    <p className="text-[9px] tracking-[.4em] uppercase text-black/40">Category: {dna.semantics.strategic?.category}</p>
                                 </div>
                                 <div className="space-y-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Contrast Tension (SC-002)</p>
                                    <p className="text-3xl font-mono">{dna.semantics.strategic?.contrastTension || 0.5}</p>
                                 </div>
                              </div>

                              <div className="p-16 bg-gray-50 border border-gray-100 flex justify-between items-center">
                                 <div className="space-y-4">
                                    <p className="text-[10px] tracking-[1em] text-brand-black/30 uppercase font-black">Priority Ranking (IP-002)</p>
                                    <p className="text-4xl font-mono">{dna.semantics.strategic?.priorityRank || 0.9}</p>
                                 </div>
                                 {dna.semantics.strategic?.alertSignal && (
                                    <motion.div 
                                       animate={{ opacity: [1, 0.4, 1] }} 
                                       transition={{ duration: 1, repeat: Infinity }}
                                       className="px-6 py-2 bg-red-50 text-red-500 border border-red-100 text-[10px] tracking-[0.5em] font-black uppercase"
                                    >
                                       Rapid Shift Alert
                                    </motion.div>
                                 )}
                              </div>
                           </motion.div>
                        )}

                        {activeTab === 'PROTOCOL' && (
                           <motion.div
                             key="protocol"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="grid grid-cols-2 gap-16">
                                 <div className="space-y-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Iconic Look Score (RF-002)</p>
                                    <p className="text-5xl font-mono text-brand-gold">{dna.semantics.protocol_100?.production.iconicLookScore || 0.9}</p>
                                 </div>
                                 <div className="space-y-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Shadow Contrast (SL-002)</p>
                                    <p className="text-4xl font-mono">{dna.semantics.protocol_100?.physics.shadowContrast || 0.8}</p>
                                 </div>
                              </div>

                              <div className="p-16 bg-black text-white space-y-12">
                                 <div>
                                    <p className="text-[10px] tracking-[1em] text-white/30 uppercase font-black mb-6">Future Luxury Probability (FS-081)</p>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: `${(dna.semantics.protocol_100?.forecast.futureProbability || 0.5) * 100}%` }}
                                          className="h-full bg-brand-gold"
                                       />
                                    </div>
                                    <p className="text-[9px] mt-4 font-mono text-brand-gold">PROBABILITY_EXTRAPOLATION: {(dna.semantics.protocol_100?.forecast.futureProbability || 0.5) * 100}%</p>
                                 </div>

                                 <div className="grid grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                       <p className="text-[9px] tracking-[0.6em] text-white/20 uppercase font-black">Semantic Depth</p>
                                       <p className="text-2xl font-mono">{dna.semantics.protocol_100?.forecast.semanticDepth || 0.9}</p>
                                    </div>
                                    <div className="space-y-4">
                                       <p className="text-[9px] tracking-[0.6em] text-white/20 uppercase font-black">Impact Retention</p>
                                       <p className="text-2xl font-mono text-brand-gold">{dna.semantics.protocol_100?.resonance.impactRetention || 0.95}</p>
                                    </div>
                                 </div>
                              </div>

                              <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-50">
                                 <div className="text-center">
                                    <p className="text-[8px] tracking-[0.2em] text-black/30 font-black uppercase mb-2">Depth</p>
                                    <p className="text-xl font-mono">{dna.semantics.protocol_100?.physics.depthLayering || 0.8}</p>
                                 </div>
                                 <div className="text-center border-x border-gray-100 px-4">
                                    <p className="text-[8px] tracking-[0.2em] text-black/30 font-black uppercase mb-2">Continuity</p>
                                    <p className="text-xl font-mono">{dna.semantics.protocol_100?.physics.motionContinuity || 0.9}</p>
                                 </div>
                                 <div className="text-center">
                                    <p className="text-[8px] tracking-[0.2em] text-black/30 font-black uppercase mb-2">Taste Match</p>
                                    <p className="text-xl font-mono text-brand-gold">{dna.semantics.protocol_100?.resonance.tasteAlignment || 0.8}</p>
                                 </div>
                              </div>
                           </motion.div>
                        )}
                        {activeTab === 'MASTERY' && (
                           <motion.div
                             key="mastery"
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             exit={{ opacity: 0, y: -10 }}
                             className="space-y-16"
                           >
                              <div className="grid grid-cols-2 gap-16">
                                 <div className="space-y-12">
                                    <div className="space-y-4">
                                       <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Visual Rhythm (RS-102)</p>
                                       <p className="text-4xl font-light italic">{dna.semantics.mastery?.immersion.visualRhythm || 0.9}</p>
                                    </div>
                                    <div className="space-y-4">
                                       <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Visual Calm (VC-102)</p>
                                       <p className="text-4xl font-light text-brand-gold">{dna.semantics.mastery?.immersion.calmIndex || 0.9}</p>
                                    </div>
                                 </div>
                                 <div className="p-16 bg-[#fcfcfc] border border-gray-100 flex flex-col justify-center gap-8">
                                    <p className="text-[10px] tracking-[0.8em] uppercase text-brand-black/20 font-black">Micro Structural Detail (MD-102)</p>
                                    <p className="text-6xl font-mono text-black leading-none">{dna.semantics.mastery?.micro.microDetailScore || 0.9}</p>
                                    <p className="text-[9px] tracking-widest text-black/40 uppercase">Intelligence Node: {dna.semantics.mastery?.micro.constructionIntelligence}</p>
                                 </div>
                              </div>

                              <div className="space-y-12 pt-8 border-t border-gray-100">
                                 <div className="flex justify-between items-end">
                                    <div className="space-y-2">
                                       <p className="text-[10px] tracking-[.8em] uppercase text-brand-black/20 font-black">Aesthetic Shift Index (AS-102)</p>
                                       <p className="text-2xl font-serif italic">Directional Migration: {dna.semantics.mastery?.market.aestheticShiftIndex || 0.8}</p>
                                    </div>
                                    <div className="text-right">
                                       <p className="text-[10px] tracking-[.8em] uppercase text-brand-black/20 font-black">Flow Continuity</p>
                                       <p className="text-3xl font-mono text-brand-gold">{dna.semantics.mastery?.immersion.flowContinuity || 0.9}</p>
                                    </div>
                                 </div>

                                 <div className="p-16 bg-black text-white flex justify-between items-center overflow-hidden relative">
                                    <div className="relative z-10 space-y-4">
                                       <p className="text-[10px] tracking-[1em] text-white/30 uppercase font-black">Authentic Luxury Validation (HD-102)</p>
                                       <p className="text-3xl font-mono tracking-widest uppercase">Verified Absolute High-End</p>
                                    </div>
                                    <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center relative">
                                       <motion.div 
                                          animate={{ rotate: 360 }}
                                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                          className="absolute inset-0 border-t border-brand-gold"
                                       />
                                       <span className="text-xs font-mono text-brand-gold">1.00</span>
                                    </div>
                                    {/* Abstract luxury noise background */}
                                    <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>

                  {/* Footer: Transmission Protocol */}
                  <div className="pt-20 flex justify-between items-center border-t border-gray-100">
                     <div className="flex items-center gap-4">
                        <div className="w-4 h-4 bg-brand-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                        <span className="text-[10px] font-mono tracking-widest text-brand-black/40 uppercase">Live Intel Sync: SS27-TRANS-NOD-01</span>
                     </div>
                     <button className="text-[11px] tracking-[0.5em] font-black uppercase text-brand-gold hover:text-black transition-colors duration-500 px-8 py-4 border border-brand-gold/20 hover:border-black rounded-px">
                        Acquire Market Node
                     </button>
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


