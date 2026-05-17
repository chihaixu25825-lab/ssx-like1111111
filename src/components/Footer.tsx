import React from 'react';

export default function Footer() {
  const years = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-cream border-t border-brand-border pt-32 pb-16 px-10 md:px-20">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-24 md:mb-32 text-center md:text-left">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-serif tracking-[0.4em] uppercase mb-10 font-light text-brand-black">WHITE COSMOS</h2>
            <p className="text-brand-black/40 text-xs leading-relaxed max-w-xs font-light tracking-widest mx-auto md:mx-0">
              The architecture of future luxury. Establishing the base layer of global aesthetic civilization.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.5em] uppercase mb-10 font-black">Market Intelligence</h4>
            <ul className="space-y-5 text-[11px] tracking-widest text-brand-black/40 uppercase font-bold">
              <li><a href="#" className="hover:text-brand-black transition-colors">Global Heatmap</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Demand Prediction</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Saturation Guard</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Market Demand AI</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.5em] uppercase mb-10 font-black">Trend Analytics</h4>
            <ul className="space-y-5 text-[11px] tracking-widest text-brand-black/40 uppercase font-bold">
              <li><a href="#" className="hover:text-brand-black transition-colors">Style Ranking</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Bestseller Index</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Commercial Luxury</a></li>
              <li><a href="#" className="hover:text-brand-black transition-colors">Future Index</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] tracking-[0.5em] uppercase mb-10 font-black">Join Civilization</h4>
            <p className="text-xs text-brand-black/30 mb-10 leading-relaxed uppercase tracking-widest">Connect with the global aesthetic brain core.</p>
            <div className="flex border-b border-brand-black/10 pb-4 group focus-within:border-brand-black transition-colors">
              <input 
                type="email" 
                placeholder="CIVILIZATION ID" 
                className="bg-transparent text-[11px] uppercase tracking-[0.5em] w-full outline-none focus:placeholder-transparent transition-all"
              />
              <button className="text-[10px] uppercase tracking-[0.5em] font-black hover:text-brand-gold transition-colors">SYNC</button>
            </div>
          </div>
        </div>
        
        {/* Global Fashion Alliance Section */}
        <div className="mb-24 md:mb-32">
          <h4 className="text-[10px] tracking-[1em] uppercase mb-16 font-black text-brand-gold text-center opacity-40">Civilization Alignment / 审美基座</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-16">
            {[
              { name: "Louis Vuitton", cn: "LV", desc: "Monogram heritage and the vanguard of global luxury.", url: "https://www.louisvuitton.com" },
              { name: "Chanel", cn: "PARIS", desc: "The eternal definition of elegance and high-craft.", url: "https://www.chanel.com" },
              { name: "Hermès", cn: "HERITAGE", desc: "The absolute singularity of artisan mastery.", url: "https://www.hermes.com" },
              { name: "Gucci", cn: "FLORENCE", desc: "The bold evolution of modern Italian luxury.", url: "https://www.gucci.com" },
              { name: "Dior", cn: "COUTURE", desc: "The architectural foundation of feminine power.", url: "https://www.dior.com" },
              { name: "Prada", cn: "MILANO", desc: "Intellectual minimalism and avant-garde exploration.", url: "https://www.prada.com" },
              { name: "Giorgio Armani", cn: "TAILORING", desc: "The master of precision and understated strength.", url: "https://www.armani.com" },
              { name: "Fendi", cn: "ROMANO", desc: "Roman luxury and the craftsmanship of innovation.", url: "https://www.fendi.com" },
              { name: "Versace", cn: "AVANT", desc: "The explosive energy of Greek-Italian opulence.", url: "https://www.versace.com" },
              { name: "Burberry", cn: "LONDON", desc: "The British foundation of technical elegance.", url: "https://www.burberry.com" }
            ].map((brand, i) => (
              <div key={i} className="group border-l border-brand-border pl-6 hover:border-brand-black transition-colors duration-700">
                <a href={brand.url} target="_blank" rel="noopener noreferrer" className="block">
                  <h5 className="text-[10px] tracking-[0.4em] font-black mb-3 group-hover:text-brand-black transition-colors uppercase">{brand.name} / {brand.cn}</h5>
                  <p className="text-[10px] text-brand-black/30 leading-relaxed font-light mb-4 group-hover:text-brand-black/60 transition-colors uppercase tracking-widest">
                    {brand.desc}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[9px] tracking-[0.5em] uppercase text-brand-black/30 font-medium">
            © {years} WHITE COSMOS CIVILIZATION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-12 text-[9px] tracking-[0.5em] uppercase text-brand-black/30 font-medium">
            <a href="#" className="hover:text-brand-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-black transition-colors">Legal</a>
            <a href="#" className="hover:text-brand-black transition-colors">Archive Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
