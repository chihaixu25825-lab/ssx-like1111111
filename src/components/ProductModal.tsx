import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Palette, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';
import { whiteCosmos } from '../services/dnaEngine';
import { cosmosIntelligence, FashionIntelligenceScore } from '../services/whiteCosmosProcessor';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    category: string;
    image: string;
    gallery: string[];
    description: string;
  } | null;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [showAIInsights, setShowAIInsights] = useState(false);
  const [scores, setScores] = useState<FashionIntelligenceScore | null>(null);

  useEffect(() => {
    if (isOpen && product) {
      whiteCosmos.track(`Deep Intelligence Analysis: ${product.name}`);
      // Simulate real-time calculation
      setTimeout(() => {
        setScores(cosmosIntelligence.evaluateAesthetic({
          id: `p-${product.id}`,
          url: product.image,
          semantics: { spirit: '', palette: [], silhouette: '', material: '', location: '' }
        }));
      }, 600);
    }
  }, [isOpen, product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-cream/95 backdrop-blur-3xl p-0 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="bg-white/80 backdrop-blur-3xl w-full max-w-7xl h-full md:max-h-[85vh] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] flex flex-col md:flex-row relative border border-white/50 rounded-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[60] p-3 md:p-2 bg-brand-black text-white rounded-full hover:bg-brand-gold transition-all duration-500 hover:rotate-90"
            >
              <X size={20} />
            </button>

            {/* Left: Image Gallery with Intelligence Overlay */}
            <div className="w-full md:w-2/3 h-[45vh] md:h-full overflow-y-auto custom-scrollbar bg-brand-accent p-2 md:p-4 space-y-2 md:space-y-4 relative">
              <motion.img 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                src={product.image} 
                className="w-full object-cover" 
                alt={product.name} 
              />
              
              {/* Intelligence Mapping Overlay */}
              <div className="absolute inset-x-8 top-10 pointer-events-none flex flex-col gap-2">
                 <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 self-start">
                    <p className="text-[8px] tracking-[0.5em] font-bold text-white uppercase">WHITE COSMOS / SS26</p>
                 </div>
              </div>

              {product.gallery.map((img, idx) => (
                <img key={idx} src={img} className="w-full object-cover" alt={`${product.name} detail ${idx}`} />
              ))}
            </div>

            {/* Right: Info & Intelligence Metadata */}
            <div className="w-full md:w-1/3 h-[55vh] md:h-full p-8 md:p-14 overflow-y-auto md:overflow-visible flex flex-col justify-between bg-white/40 backdrop-blur-md relative border-l border-white/20 shadow-inner">
              <div className="relative z-10">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-[9px] md:text-[10px] tracking-[0.8em] uppercase text-brand-gold font-bold mb-4 block">
                    {product.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif mb-8 md:mb-12 italic leading-none">{product.name}</h2>
                  
                  <div className="mb-12 space-y-6">
                    <div className="h-px bg-brand-black/10 w-full" />
                    <p className="text-brand-black text-xl font-serif italic leading-relaxed">
                      "A manifestation of architectural silence, where form meets the singularity of future consciousness."
                    </p>
                    <div className="h-px bg-brand-black/10 w-full" />
                  </div>

                  <p className="text-brand-black/50 text-[14px] leading-relaxed mb-12 font-light tracking-wide max-w-sm">
                    {product.description} This exploration delves into the physics of aesthetic tension, observed and refined through the WHITE COSMOS intelligence layer.
                  </p>
                  
                  <div className="space-y-6 mb-16">
                    <div className="flex justify-between text-[9px] uppercase tracking-[0.3em] font-black">
                      <span className="opacity-30">AESTHETIC ID</span>
                      <span className="">#WC-{product.id}092</span>
                    </div>
                    <div className="flex justify-between text-[9px] uppercase tracking-[0.3em] font-black">
                      <span className="opacity-30">ARCHIVE PERIOD</span>
                      <span className="">ERA 2026 / 04</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4 pb-6">
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-brand-black text-white py-6 flex items-center justify-center text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black transition-all duration-700"
                >
                  Explore Collection
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full border border-brand-black text-brand-black py-6 flex items-center justify-center text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-black hover:bg-brand-black hover:text-white transition-all duration-700"
                >
                  Aesthetic Alignment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

