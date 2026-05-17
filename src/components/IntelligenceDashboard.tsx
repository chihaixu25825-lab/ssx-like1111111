import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Cpu, Database, Network, Globe, Activity, Eye, Zap } from 'lucide-react';
import { whiteCosmos } from '../services/dnaEngine';

export default function IntelligenceDashboard() {
  const [logs, setLogs] = useState(whiteCosmos.getLogs());

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(whiteCosmos.getLogs());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-10 left-10 z-[100] group pointer-events-none sm:pointer-events-auto">
      <div className="bg-brand-black/80 backdrop-blur-3xl border border-white/5 p-6 w-80 transition-all duration-1000 opacity-0 group-hover:opacity-100 translate-y-12 group-hover:translate-y-0 shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden relative border-brand-gold/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <Network size={14} className="text-brand-gold" />
              <span className="text-[9px] tracking-[0.5em] text-white font-black uppercase">Market Intelligence AI-01</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[7px] text-brand-gold font-bold uppercase tracking-widest">Market Brain Active</span>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
               <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                  <p className="text-[7px] tracking-[0.2em] text-white/30 uppercase mb-1">Buyer Confidence</p>
                  <p className="text-xs font-mono text-white">0.962</p>
               </div>
               <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                  <p className="text-[7px] tracking-[0.2em] text-white/30 uppercase mb-1">Luxury Stability</p>
                  <p className="text-xs font-mono text-brand-gold">HIGH / STABLE</p>
               </div>
            </div>
            <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex justify-between items-center">
               <p className="text-[7px] tracking-[0.2em] text-white/30 uppercase">Collection Coherence</p>
               <p className="text-[10px] font-mono text-brand-gold">ELITE LEVEL (0.94)</p>
            </div>
          </div>

          <div className="space-y-3 h-40 overflow-hidden relative">
            <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-brand-black/80 to-transparent pointer-events-none z-20" />
            <AnimatePresence mode='popLayout'>
              {logs.map((log, idx) => (
                <motion.div 
                  key={`${log.timestamp}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-[8px] tracking-wider font-mono border-l border-brand-gold/20 pl-3 py-1 bg-white/5"
                >
                  <div className="flex justify-between items-center opacity-40 mb-1">
                    <span className="text-[6px]">{log.timestamp}</span>
                    <span className="text-[6px] uppercase">{log.action}</span>
                  </div>
                  <p className="text-white/80 leading-relaxed whitespace-nowrap overflow-hidden text-ellipsis">
                    {log.foundIntelligence}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex flex-col gap-3">
             <div className="flex justify-between items-center">
                <span className="text-[7px] text-white/40 tracking-[0.4em] uppercase font-bold">Early Signal Network Coverage</span>
                <span className="text-[7px] text-white font-mono">GLOBAL COVERAGE</span>
             </div>
             <div className="h-0.5 w-full bg-white/10 overflow-hidden rounded-full">
                <motion.div 
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="h-full w-40 bg-brand-gold/20"
                />
             </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-12 h-12 rounded-full border border-brand-gold/20 flex items-center justify-center cursor-pointer hover:border-brand-gold transition-colors"
      >
        <Eye size={16} className="text-brand-gold" />
      </motion.div>
    </div>
  );
}
