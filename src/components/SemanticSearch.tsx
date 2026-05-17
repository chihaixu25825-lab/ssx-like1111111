import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles, Wand2, Eye } from 'lucide-react';
import { whiteCosmos, FashionDNA } from '../services/dnaEngine';

export default function SemanticSearch({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<FashionDNA[]>([]);

  useEffect(() => {
    if (query.length > 1) {
      setIsAnalyzing(true);
      const timer = setTimeout(async () => {
        const matches = await whiteCosmos.getSemanticMatch(query);
        setResults(matches);
        setIsAnalyzing(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-brand-cream/60 backdrop-blur-[80px] flex items-start justify-center pt-[10vh] px-6 md:px-20 overflow-y-auto custom-scrollbar"
        >
          <div className="w-full max-w-screen-xl relative z-10">
            <div className="flex items-center gap-8 border-b border-brand-black/10 pb-10">
              <div className="relative">
                <Search className="text-brand-gold w-10 h-10 font-light" strokeWidth={1} />
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -inset-4 bg-brand-gold/20 rounded-full blur-2xl"
                />
              </div>
              
              <input 
                autoFocus
                placeholder="Search by market sentiment, trend, or silhouettle..."
                className="bg-transparent border-none outline-none text-2xl md:text-6xl font-serif italic w-full placeholder:text-gray-300 tracking-tighter text-brand-black"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              
              <button onClick={onClose} className="p-4 hover:rotate-90 transition-all duration-700 hover:bg-brand-black hover:text-white rounded-full">
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="mt-16 pb-20">
              <AnimatePresence mode="wait">
                {isAnalyzing ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-6 py-32"
                  >
                    <div className="relative">
                      <Sparkles className="text-brand-gold w-16 h-16 animate-pulse" strokeWidth={1} />
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                        className="absolute -inset-4 border-t border-brand-gold/30 rounded-full"
                      />
                    </div>
                    <p className="text-[10px] tracking-[1em] uppercase text-brand-black/40 font-bold">Synchronizing with Global Market Intelligence...</p>
                  </motion.div>
                ) : results.length > 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                  >
                    {results.map((dna, i) => (
                      <motion.div 
                        key={dna.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                      >
                         <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                            <img src={dna.url} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                            <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                               <Eye className="text-white" size={32} strokeWidth={1} />
                            </div>
                         </div>
                         <p className="text-[10px] tracking-[0.4em] uppercase text-brand-gold font-bold mb-2">{dna.semantics.spirit}</p>
                         <h4 className="text-2xl font-serif italic text-brand-black">{dna.semantics.silhouette}</h4>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : query && (
                   <div className="text-center py-32">
                     <p className="text-gray-300 text-lg italic">未找到匹配的审美基因。尝试搜索“赛博”,“冷淡”或“建筑感”...</p>
                   </div>
                )}
              </AnimatePresence>
            </div>

            {!query && (
              <div className="mt-24 max-w-2xl">
                <h5 className="text-[10px] tracking-[0.8em] uppercase font-black mb-12 text-brand-black/30">Intelligence Core & Trend Mapping</h5>
                <div className="flex flex-col gap-10">
                  {[
                    "Rising Silhouettes / 上升轮廓", 
                    "Quiet Luxury Market / 安静奢华市场", 
                    "SS27 Trend Velocity / SS27 趋势速度", 
                    "Aesthetic Saturation Guard / 审美饱和防御", 
                    "Global Style Heatmap / 全球款式热力图"
                  ].map((t, i) => (
                    <button key={i} onClick={() => setQuery(t.split(' / ')[0])} className="text-left text-3xl md:text-5xl font-serif italic hover:pl-8 transition-all hover:text-brand-gold origin-left text-brand-black/60">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

