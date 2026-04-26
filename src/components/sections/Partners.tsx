'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Reliance", src: "/reliance.png" },
  { name: "HCL", src: "/hcl.png" },
  { name: "IBM", src: "/ibm.png" },
  { name: "ADP", src: "/adp.png" },
  { name: "Bayer", src: "/bayer.png" },
];

export default function Partners() {
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-slate-950 py-16 border-b border-slate-800/50 overflow-hidden relative" id="testimonials">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-slate-500 uppercase tracking-[0.15em] mb-12"
        >
          Successful collaborations with the industry's best
        </motion.p>
      </div>
      
      <div className="relative w-full flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

        <div className="animate-scroll flex gap-16 md:gap-24 px-8 items-center">
          {marqueeItems.map((partner, index) => (
            <div
              key={index}
              className="relative group flex-shrink-0 cursor-pointer flex items-center justify-center w-[120px] md:w-[160px]"
            >
              <img 
                src={partner.src} 
                alt={`${partner.name} logo`} 
                className="h-8 md:h-12 w-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-xl font-bold text-slate-400 group-hover:text-white transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}