import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Cpu, MessageSquare, Upload, FileText, PieChart, TrendingUp, X, Sparkles, Network } from 'lucide-react';
import { whiteCosmos } from '../services/dnaEngine';

export default function AICore() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [status, setStatus] = useState('Silent Intelligence');
  const [logs, setLogs] = useState(whiteCosmos.getLogs());
  const [report, setReport] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs([...whiteCosmos.getLogs()]);
      
      const statuses = [
        'ANALYZING GLOBAL RUNWAY',
        'DETECTING TREND SHIFT',
        'MARKET SIGNAL ACQUIRED',
        'LUXURY EVOLUTION MAPPING',
        'CONSUMER TASTE SYNCING',
        'SATURATION ALERT: LOGO MANIA'
      ];
      if (Math.random() > 0.7) {
        setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
        setTimeout(() => setStatus('Silent Intelligence'), 3000);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    setReport(null);

    // Simulate Deep Fashion Analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setReport({
        type: file.type.includes('image') ? 'IMAGE_ANALYSIS' : 'DOCUMENT_INSIGHT',
        name: file.name,
        timestamp: new Date().toISOString(),
        analysis: {
          silhouette: "Tailored Outerwear / Softened Authority",
          trendLifecycle: "Rising / Early Growth",
          buyerConfidence: "0.94 (Strong Order Candidate)",
          luxuryStability: "0.96 (High-Value Asset)",
          marketFatigue: "0.08 (Minimal Dilution)",
          collectionCoherence: "0.92 (High Integrity)",
          commercialImpact: "High-yield strategic entry for SS27 premium cohorts.",
          executiveSummary: {
            what: "Structural shift from rigid brutalism to 'Fluid Authority' silhouettes.",
            why: "Consumer fatigue with industrial harshness; market pivot toward 'Protective Softness'.",
            impact: "High sell-through potential in tier-1 luxury retail sectors."
          }
        },
        recommendation: "Strategic Bestseller Candidate. Recommended for deep inventory positioning for SS27 core luxury segments."
      });
    }, 3000);
  };

  return (
    <>
      {/* Floating AI Core Button */}
      <motion.div 
        className="fixed bottom-10 right-10 z-[2000]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 flex items-center justify-center"
        >
          {/* Breathing Aura */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white rounded-full blur-xl"
          />
          
          {/* Neural Pulse Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                animate={{ 
                  scale: [1, 2],
                  opacity: [0.5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: ring * 1,
                  ease: "easeOut" 
                }}
                className="absolute w-full h-full border border-white/20 rounded-full"
              />
            ))}
          </div>

          {/* Main Core */}
          <div className="relative w-12 h-12 bg-black rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
             
             {/* Neural Pulse Lines (Simulated with rotating gradient) */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.2)_180deg,transparent_200deg)]"
             />

             <Brain size={20} className="text-white relative z-10" />
          </div>

          {/* Status Light */}
          <div className="absolute top-0 right-0 w-3 h-3 flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
          </div>

          {/* Label Tooltip */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap hidden group-hover:block">
             <div className="flex flex-col items-end">
                <span className="text-[7px] tracking-[0.5em] text-black/40 uppercase font-black">AI Core 01</span>
                <span className="text-[10px] tracking-widest text-black font-bold uppercase">{status}</span>
             </div>
          </div>
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center px-6 pointer-events-none">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
            />

            {/* Panel */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20 pointer-events-auto flex flex-col md:flex-row"
            >
              {/* Sidebar: Intelligence Stream */}
              <div className="w-full md:w-80 bg-gray-50/50 border-r border-gray-100 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-10">
                   <Network size={16} className="text-brand-gold" />
                   <span className="text-[9px] tracking-[0.5em] uppercase font-black">Market Neural Path</span>
                </div>
                
                <div className="flex-1 overflow-y-auto space-y-6 pr-2 -mr-4 custom-scrollbar">
                   {logs.map((log, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.05 }}
                       className="space-y-1"
                     >
                       <div className="flex justify-between items-center">
                          <span className="text-[7px] font-mono text-gray-400">{log.timestamp}</span>
                          <span className="text-[7px] font-mono text-brand-gold">{log.action}</span>
                       </div>
                       <p className="text-[10px] text-gray-600 font-medium leading-relaxed uppercase tracking-wider">{log.foundIntelligence}</p>
                     </motion.div>
                   ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100 italic font-serif text-sm text-gray-400">
                  "The market is a nervous system. We do not observe it; we become it."
                </div>
              </div>

              {/* Main Content: Intelligence Panel */}
              <div className="flex-1 p-10 flex flex-col overflow-y-auto">
                <div className="flex justify-between items-start mb-12">
                   <div>
                      <h2 className="text-4xl font-serif italic mb-2 tracking-tighter">Fashion Intelligence Core</h2>
                      <p className="text-[10px] tracking-[0.6em] text-gray-400 uppercase font-black">Global Market Brain / SS27 ALPHA</p>
                   </div>
                   <button 
                     onClick={() => setIsOpen(false)}
                     className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors"
                   >
                     <X size={16} />
                   </button>
                </div>

                {/* Upload & Interaction Area */}
                <div className="space-y-10">
                   <div 
                     onClick={() => fileInputRef.current?.click()}
                     className="group border-2 border-dashed border-gray-100 rounded-3xl p-12 text-center hover:border-brand-gold hover:bg-brand-gold/[0.02] transition-all cursor-pointer"
                   >
                      <input 
                        type="file" 
                        className="hidden" 
                        ref={fileInputRef} 
                        onChange={handleFileUpload}
                      />
                      <div className="flex flex-col items-center gap-6">
                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold/10 transition-all">
                           <Upload size={24} className="text-gray-400 group-hover:text-brand-gold" />
                        </div>
                        <div>
                           <p className="text-xl font-serif mb-2 italic">Connect Intelligence Nodes</p>
                           <p className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">Upload: Runway Shot, Market Report, Fabric Code or Tech Pack</p>
                        </div>
                      </div>
                   </div>

                   {/* Analysis Results / Reports */}
                   <AnimatePresence mode="wait">
                     {isAnalyzing ? (
                       <motion.div 
                         key="analyzing"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         className="flex flex-col items-center gap-6 py-20"
                       >
                          <div className="relative w-20 h-20">
                             <motion.div 
                               animate={{ rotate: 360 }}
                               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                               className="absolute inset-0 border-2 border-brand-gold border-t-transparent rounded-full"
                             />
                             <div className="absolute inset-0 flex items-center justify-center">
                                <Sparkles className="text-brand-gold" size={24} />
                             </div>
                          </div>
                          <p className="text-[11px] tracking-[0.8em] uppercase font-black text-brand-gold animate-pulse">Decoding Aesthetic Vectors...</p>
                       </motion.div>
                     ) : report ? (
                       <motion.div 
                         key="report"
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="bg-gray-50/50 rounded-3xl p-10 space-y-10 border border-gray-100"
                       >
                          <div className="flex justify-between items-center border-b border-gray-100 pb-6">
                             <div className="flex items-center gap-4">
                                <FileText className="text-brand-gold" size={20} />
                                <div>
                                   <p className="text-[7px] tracking-[0.3em] font-black uppercase text-gray-400">Intelligence Node Generated</p>
                                   <p className="text-sm font-bold tracking-widest uppercase">{report.name}</p>
                                </div>
                             </div>
                             <div className="text-right">
                                <p className="text-[10px] font-mono text-gray-400">{report.timestamp}</p>
                                <p className="text-[9px] text-brand-gold font-bold uppercase tracking-widest">{report.type}</p>
                             </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                             <div className="space-y-8">
                                <div>
                                   <h4 className="text-[8px] tracking-[0.4em] uppercase font-bold text-gray-400 mb-4 italic">Executive Summary / 决策摘要</h4>
                                   <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                      <div>
                                         <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">What Changed</p>
                                         <p className="text-[10px] text-gray-600 font-medium">{report.analysis.executiveSummary.what}</p>
                                      </div>
                                      <div>
                                         <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">Strategic Significance</p>
                                         <p className="text-[10px] text-gray-600 font-medium">{report.analysis.executiveSummary.why}</p>
                                      </div>
                                      <div>
                                         <p className="text-[7px] text-brand-gold uppercase tracking-widest mb-1">Commercial Impact</p>
                                         <p className="text-[10px] text-gray-600 font-medium">{report.analysis.executiveSummary.impact}</p>
                                      </div>
                                   </div>
                                </div>
                                <div>
                                   <h4 className="text-[8px] tracking-[0.4em] uppercase font-bold text-gray-400 mb-4 italic">Market Logistics</h4>
                                   <div className="space-y-4">
                                      <div className="flex justify-between border-b border-gray-100 pb-2">
                                         <span className="text-[10px] text-gray-500 uppercase tracking-widest">Trend Lifecycle</span>
                                         <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">{report.analysis.trendLifecycle}</span>
                                      </div>
                                      <div className="flex justify-between border-b border-gray-100 pb-2">
                                         <span className="text-[10px] text-gray-500 uppercase tracking-widest">Buyer Confidence</span>
                                         <span className="text-[10px] font-bold text-black uppercase tracking-widest">{report.analysis.buyerConfidence}</span>
                                      </div>
                                      <div className="flex justify-between border-b border-gray-100 pb-2">
                                         <span className="text-[10px] text-gray-500 uppercase tracking-widest">Luxury Stability</span>
                                         <span className="text-[10px] font-bold text-black uppercase tracking-widest">{report.analysis.luxuryStability}</span>
                                      </div>
                                      <div className="flex justify-between border-b border-gray-100 pb-2">
                                         <span className="text-[10px] text-gray-500 uppercase tracking-widest">Market Fatigue</span>
                                         <span className="text-[10px] font-bold text-black uppercase tracking-widest">{report.analysis.marketFatigue}</span>
                                      </div>
                                      <div className="flex justify-between border-b border-gray-100 pb-2">
                                         <span className="text-[10px] text-gray-500 uppercase tracking-widest">Coherence Rate</span>
                                         <span className="text-[10px] font-bold text-black uppercase tracking-widest">{report.analysis.collectionCoherence}</span>
                                      </div>
                                   </div>
                                </div>
                             </div>

                             <div className="space-y-8">
                                <div>
                                   <h4 className="text-[8px] tracking-[0.4em] uppercase font-bold text-gray-400 mb-4 italic">Commercial Positioning</h4>
                                   <div className="space-y-4">
                                      <div className="p-4 bg-white rounded-2xl border border-gray-100">
                                         <p className="text-[7px] text-gray-400 uppercase tracking-widest mb-1">Target Assessment</p>
                                         <p className="text-xs font-bold text-black uppercase">{report.analysis.commercialImpact}</p>
                                      </div>
                                      <div className="p-4 bg-white rounded-2xl border border-gray-100">
                                         <p className="text-[7px] text-gray-400 uppercase tracking-widest mb-1">Silhouette Core</p>
                                         <p className="text-xs font-bold text-black uppercase">{report.analysis.silhouette}</p>
                                      </div>
                                   </div>
                                </div>
                                <div className="p-6 bg-brand-black text-white rounded-2xl">
                                   <h4 className="text-[8px] tracking-[0.4em] uppercase font-bold text-brand-gold mb-3">AI Strategic Verdict</h4>
                                   <p className="text-sm font-serif italic leading-relaxed opacity-80">"{report.recommendation}"</p>
                                </div>
                                <div className="flex gap-4">
                                   <button className="flex-1 bg-black text-white text-[9px] tracking-[0.3em] font-black uppercase py-4 rounded-xl hover:bg-gray-900 transition-colors">Export Report</button>
                                   <button className="flex-1 border border-gray-200 text-black text-[9px] tracking-[0.3em] font-black uppercase py-4 rounded-xl hover:bg-gray-50 transition-colors">Archive Node</button>
                                </div>
                             </div>
                          </div>
                       </motion.div>
                     ) : (
                       <motion.div 
                         key="empty"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="flex flex-col items-center gap-10 py-10"
                       >
                          <div className="grid grid-cols-3 gap-8 w-full max-w-lg">
                             <div className="text-center space-y-3">
                                <div className="w-10 h-10 rounded-full border border-gray-100 mx-auto flex items-center justify-center">
                                   <Cpu size={14} className="text-gray-300" />
                                </div>
                                <p className="text-[8px] tracking-widest uppercase font-bold text-gray-400">Signal-X Scan</p>
                             </div>
                             <div className="text-center space-y-3">
                                <div className="w-10 h-10 rounded-full border border-gray-100 mx-auto flex items-center justify-center">
                                   <PieChart size={14} className="text-gray-300" />
                                </div>
                                <p className="text-[8px] tracking-widest uppercase font-bold text-gray-400">Pulse Origin</p>
                             </div>
                             <div className="text-center space-y-3">
                                <div className="w-10 h-10 rounded-full border border-gray-100 mx-auto flex items-center justify-center">
                                   <TrendingUp size={14} className="text-gray-300" />
                                </div>
                                <p className="text-[8px] tracking-widest uppercase font-bold text-gray-400">Predictive Momentum</p>
                             </div>
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
