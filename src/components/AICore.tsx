import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Network, X, Brain as BrainIcon, Radio, Upload, Globe, ArrowRight, ShieldCheck, Activity, Cpu, FileText, Sparkles } from 'lucide-react';
import { whiteCosmos } from '../services/dnaEngine';

export default function AICore() {
  const [isOpen, setIsOpen] = useState(false);
  const [analystStatus, setAnalystStatus] = useState('Silent Intelligence');
  const [logs, setLogs] = useState(whiteCosmos.getLogs());
  const [report, setReport] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs([...whiteCosmos.getLogs()]);
      
      const statuses = [
        'AGENT-101: RUNWAY SOUNDLESS',
        'AGENT-102: MICRO DETAIL SCAN',
        'AGENT-104: VISUAL CALM SYNC',
        'AGENT-105: AUTHENTICITY VALIDATION',
        'AGENT-107: CONSTRUCTION INTEL',
        'AGENT-108: IMMERSIVE FLOW',
        'AGENT-109: AESTHETIC SHIFT INDEX',
        'AGENT-110: LUXURY IMMERSION CORE'
      ];
      if (Math.random() > 0.7) {
        setAnalystStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        setTimeout(() => setAnalystStatus('Silent Intelligence'), 3000);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    setReport(null);

    // Simulate Deep Fashion Analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setReport({
        type: file.type.includes('image') ? 'SILHOUETTE_SCAN' : 'MARKET_FORECAST',
        name: file.name,
        timestamp: new Date().toISOString(),
        analysis: {
          silhouette: "Aggressive Brutalism / Shifting to Fluid Noir",
          trendLifecycle: "Emerging / High Potential",
          buyerConfidence: "0.91 (Strategic Accumulation)",
          luxuryStability: "0.98 (Archival Quality)",
          marketFatigue: "0.02 (Absolute Freshness)",
          collectionCoherence: "0.94 (DNA Integrity)",
          luxuryDensity: "0.96 (High-Value Asset)",
          growthVelocity: "0.88 High",
          commercialImpact: "Dominant aesthetic signal for SS27 ultra-luxury tiers.",
          executiveSummary: {
            what: "Structural migration from Industrial Brutalism to 'Soft Armor' silhouettes.",
            why: "Saturation of rigid power-dressing; consumer pivot to material-driven authority.",
            impact: "High commercial yield in Paris/Milan core luxury sectors."
          }
        },
        recommendation: "Pillar Asset Candidate. Recommended for priority inventory positioning for upcoming FW27/SS28 cycles."
      });
    }, 3000);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[2000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="absolute bottom-28 right-0 w-[550px] max-h-[85vh] bg-black text-white shadow-2xl flex flex-col overflow-hidden border border-white/10 rounded-px"
          >
            {/* Analyst Header */}
            <div className="p-8 border-b border-white/10 flex justify-between items-center bg-zinc-900">
               <div className="flex items-center gap-5">
                  <div className="relative">
                     <BrainIcon size={24} className="text-brand-gold" />
                     <motion.div 
                        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-brand-gold rounded-full"
                     />
                  </div>
                  <div>
                    <h3 className="text-[11px] tracking-[0.6em] font-black uppercase text-brand-gold">Elite Analyst Core AI-01</h3>
                    <p className="text-[9px] tracking-[0.4em] font-mono text-white/30 uppercase">{analystStatus}</p>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors duration-500">
                  <X size={20} strokeWidth={1} />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar flex">
               {/* Left: Intelligence Logs */}
               <div className="w-[45%] border-r border-white/5 bg-black/50 p-8 space-y-8 overflow-y-auto" ref={scrollRef}>
                 <p className="text-[9px] tracking-[0.5em] font-black uppercase text-white/20 mb-10">Signal_Stream</p>
                 {logs.map((log, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, x: -10 }} 
                     animate={{ opacity: 1, x: 0 }} 
                     className="group border-l border-brand-gold/20 pl-6 space-y-3"
                   >
                      <div className="flex justify-between items-center opacity-30">
                         <span className="text-[8px] font-mono tracking-widest">{log.timestamp}</span>
                         <span className="text-[8px] tracking-[0.4em] font-black uppercase">{log.action}</span>
                      </div>
                      <p className="text-[11px] font-light leading-relaxed tracking-wider text-white/70 group-hover:text-brand-gold transition-colors duration-500">
                         {log.foundIntelligence}
                      </p>
                   </motion.div>
                 ))}
               </div>

               {/* Right: Analysis & Tools */}
               <div className="w-[55%] p-10 bg-zinc-950/50 space-y-12">
                  <AnimatePresence mode="wait">
                    {isAnalyzing ? (
                      <motion.div 
                        key="analyzing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full flex flex-col items-center justify-center gap-8 py-20"
                      >
                         <div className="relative w-20 h-20">
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-brand-gold border-t-transparent rounded-full" />
                            <div className="absolute inset-0 flex items-center justify-center">
                               <Sparkles className="text-brand-gold" size={24} />
                            </div>
                         </div>
                         <p className="text-[10px] tracking-[1em] text-brand-gold uppercase animate-pulse">Decoding Aesthetic Vectors...</p>
                      </motion.div>
                    ) : report ? (
                      <motion.div 
                        key="report"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-10"
                      >
                         <div className="space-y-4">
                            <p className="text-[9px] tracking-[0.5em] font-black uppercase text-brand-gold">Active Report / {report.type}</p>
                            <h4 className="text-3xl font-serif italic text-white/90">{report.name}</h4>
                         </div>

                         <div className="space-y-6 bg-white/5 p-6 border border-white/5">
                            <p className="text-[9px] tracking-[0.4em] font-black uppercase text-white/40">Market Positioning</p>
                            <p className="text-sm font-light leading-relaxed tracking-widest text-white/80">{report.analysis.commercialImpact}</p>
                            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                               <div>
                                  <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">Buy Confidence</p>
                                  <p className="text-base font-mono">{report.analysis.buyerConfidence}</p>
                               </div>
                               <div>
                                  <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">Luxury Density</p>
                                  <p className="text-base font-mono">{report.analysis.luxuryDensity}</p>
                               </div>
                               <div>
                                  <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">Trend Velocity</p>
                                  <p className="text-base font-mono">{report.analysis.growthVelocity}</p>
                               </div>
                               <div>
                                  <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">Stability</p>
                                  <p className="text-base font-mono">{report.analysis.luxuryStability}</p>
                               </div>
                            </div>
                         </div>

                         <div className="p-6 bg-brand-gold/10 border border-brand-gold/20">
                            <p className="text-[9px] tracking-[0.4em] font-black uppercase text-brand-gold mb-3">Verdict</p>
                            <p className="text-xs font-light tracking-widest leading-relaxed italic text-white/90">"{report.recommendation}"</p>
                         </div>

                         <button onClick={() => setReport(null)} className="w-full py-4 text-[10px] tracking-[0.5em] font-black uppercase border border-white/10 hover:bg-white hover:text-black transition-all">Reset Console</button>
                      </motion.div>
                    ) : (
                      <div className="space-y-12">
                         <div 
                           onClick={() => fileInputRef.current?.click()}
                           className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-gold/30 p-12 text-center cursor-pointer transition-all"
                         >
                            <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileUpload} />
                            <Upload size={32} className="mx-auto mb-6 text-white/20 group-hover:text-brand-gold transition-colors" />
                            <p className="text-[11px] tracking-[0.6em] font-black uppercase mb-2">Upload Intel Node</p>
                            <p className="text-[8px] tracking-[0.2em] font-light text-white/20 uppercase">Runway Report / Silhouette Scan</p>
                         </div>

                         <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-6 border border-white/5 hover:bg-white/5 transition-all">
                               <Globe size={14} className="text-brand-gold" />
                               <span className="text-[9px] tracking-[0.4em] font-black uppercase">Global Map</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 py-6 border border-white/5 hover:bg-white/5 transition-all">
                               <Network size={14} className="text-brand-gold" />
                               <span className="text-[9px] tracking-[0.4em] font-black uppercase">DNA Path</span>
                            </button>
                         </div>

                         <div className="p-6 bg-zinc-900 border border-white/5 space-y-4">
                            <div className="flex items-center gap-3 opacity-40">
                               <Cpu size={12} />
                               <span className="text-[8px] tracking-[0.4em] font-black uppercase">System Logic</span>
                            </div>
                            <p className="text-sm font-serif italic text-white/40 leading-relaxed">
                               "Decoding the migration from physical wealth to digital aura restraint. Market predictive momentum at 128.4 Hz."
                            </p>
                         </div>
                      </div>
                    )}
                  </AnimatePresence>
               </div>
            </div>

            {/* Analyst Dialogue Input */}
            <div className="p-6 bg-zinc-950 flex items-center gap-6 border-t border-white/5">
               <input 
                 type="text" 
                 placeholder="INQUIRE MARKET CONSCIOUSNESS..." 
                 className="flex-1 bg-transparent border-none focus:ring-0 text-[11px] tracking-[0.4em] font-black uppercase text-white/40 placeholder:text-white/10"
               />
               <button className="w-12 h-12 bg-white/5 hover:bg-brand-gold hover:text-black transition-all flex items-center justify-center">
                  <ArrowRight size={18} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-24 h-24 bg-black rounded-full flex items-center justify-center relative shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden group"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            boxShadow: isOpen ? "0 0 50px rgba(212,175,55,0.4)" : "0 0 30px rgba(255,255,255,0.05)"
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-brand-gold/10"
        />

        <div className="relative z-10">
           {isOpen ? (
             <X size={28} strokeWidth={1} className="text-white" />
           ) : (
             <div className="flex flex-col items-center gap-2">
                <Network size={28} strokeWidth={1} className="text-brand-gold" />
                <div className="flex gap-1.5 h-3 items-end">
                   <motion.div animate={{ height: [4, 12, 4] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-[2px] bg-brand-gold/30" />
                   <motion.div animate={{ height: [12, 4, 12] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-[2px] bg-brand-gold" />
                   <motion.div animate={{ height: [6, 10, 6] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-[2px] bg-brand-gold/30" />
                </div>
             </div>
           )}
        </div>

        {/* Outer Circular Pulse */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
           <motion.circle
             cx="48" cy="48" r="44"
             fill="none"
             stroke="currentColor"
             strokeWidth="0.5"
             className="text-brand-gold opacity-10"
             strokeDasharray="276.4"
             animate={{ strokeDashoffset: [276.4, 0, -276.4] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           />
        </svg>
      </motion.button>
    </div>
  );
}
