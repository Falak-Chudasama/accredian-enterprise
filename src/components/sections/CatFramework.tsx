'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText, Settings, Combine } from 'lucide-react';

const pillars = [
  { 
    title: "Concept", 
    desc: "Foundational knowledge for deep subject understanding.", 
    icon: BookOpenText, 
    color: "from-blue-500 to-indigo-500",
    position: "left"
  },
  { 
    title: "Application", 
    desc: "Practical implementation through real-world scenarios.", 
    icon: Settings, 
    color: "from-indigo-500 to-blue-500",
    position: "center"
  },
  { 
    title: "Tools", 
    desc: "Resources and techniques for effective skill mastery.", 
    icon: Combine, 
    color: "from-blue-500 to-indigo-500",
    position: "right"
  }
];

export default function CatFramework() {
  return (
    <section className="bg-slate-950 relative overflow-hidden" id="cat">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">CAT Framework</span>
          </motion.h2>
          <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs mt-3">Our Proven Approach to Learning Excellence</p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[500px] gap-16 lg:gap-0">
          <div className="absolute inset-0 hidden lg:block">
            <svg viewBox="0 0 1200 400" className="w-full h-full fill-none">
              <motion.path
                d="M 150,200 C 150,50 450,50 450,200 C 450,350 750,350 750,200 C 750,50 1050,50 1050,200"
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="4"
                strokeDasharray="12 12"
              />
              <motion.path
                d="M 150,200 C 150,50 450,50 450,200 C 450,350 750,350 750,200 C 750,50 1050,50 1050,200"
                stroke="url(#gradient-line)"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="relative z-10 w-full lg:w-1/3 flex flex-col items-center"
            >
              <div className="group relative">
                <div className="w-64 h-64 rounded-full bg-slate-900/80 backdrop-blur-3xl border border-white/10 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} p-[1px] mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                      <pillar.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="absolute -inset-4 border border-blue-500/0 group-hover:border-blue-500/20 rounded-full transition-all duration-700 animate-[spin_10s_linear_infinite] hidden lg:block" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}