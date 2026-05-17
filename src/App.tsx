/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import CinemaStream from './components/CinemaStream';
import IntelligenceFlow from './components/IntelligenceFlow';
import IntelligenceDashboard from './components/IntelligenceDashboard';
import AICore from './components/AICore';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-brand-cream overflow-x-hidden relative selection:bg-brand-gold selection:text-white">
      {/* Global Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-brand-gold z-[1000] origin-left"
        style={{ scaleX }}
      />

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[150px] bg-brand-gold/10"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[180px] bg-brand-black/5"
        />
      </div>

      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        
        {/* The Landing Authority */}
        <Hero />
        
        {/* Cinema Stream - Atmospheric Lead-in */}
        <CinemaStream />
        
        {/* Global Fashion Intelligence Feed - The Single Core Module */}
        <IntelligenceFlow />
        
        <Footer />
        <IntelligenceDashboard />
        <AICore />
      </div>
    </main>
  );
}



