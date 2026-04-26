'use client';

import React from 'react';
import { ArrowRight, Star, TrendingUp, Users, BookOpen, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const faces = [
  { id: 1, src: "/face1.jpeg", alt: "Educational Professional 1" },
  { id: 2, src: "/face2.jpeg", alt: "Educational Professional 2" },
  { id: 3, src: "/face3.jpeg", alt: "Educational Professional 3" },
  { id: 4, src: "/face4.jpeg", alt: "Educational Professional 4" },
  { id: 5, src: "/face5.jpeg", alt: "Educational Professional 5" }
];

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-start items-center px-4 sm:px-6 pt-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-extrabold tracking-tight text-white leading-[1] sm:leading-[0.95] mb-6 sm:mb-8 drop-shadow-lg"
        >
          Next-Gen <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">
            Expertise.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mb-10 sm:mb-12 leading-relaxed font-medium px-4 sm:px-0 drop-shadow-md"
        >
          Cultivate high-performance teams through expert learning. Tailored solutions and industry insights designed to scale modern operations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white px-8 py-4 rounded-md font-bold text-sm transition-all shadow-[0_0_25px_-5px_rgba(79,70,229,0.6)] hover:shadow-[0_0_35px_-5px_rgba(79,70,229,0.8)] transform hover:-translate-y-1">
            Enquire Now
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/50 border border-slate-600 text-white px-8 py-4 rounded-md font-bold text-sm hover:bg-slate-700 hover:border-slate-400 transition-all transform hover:-translate-y-1">
            Explore Framework
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex -space-x-3">
            {faces.map((face, index) => (
              <div 
                key={face.id} 
                className={`w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center shadow-lg overflow-hidden z-${10-index}`}
              >
                <img 
                  src={face.src} 
                  alt={face.alt} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    // Optional fallback UI if image is missing
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-xs text-white/50 font-bold">${index + 1}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold bg-slate-800/40 px-4 py-1.5 rounded-full border border-slate-700/50">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
            </div>
            Trusted by 10,000+ professionals
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.5 }}
        className="relative mt-16 w-full max-w-5xl hidden md:flex flex-col flex-grow perspective-1000"
      >
        <div className="relative z-10 w-full h-full min-h-[300px] border-x border-t border-slate-700/80 bg-slate-900/80 backdrop-blur-2xl rounded-t-2xl shadow-[0_-20px_50px_-15px_rgba(79,70,229,0.3)] overflow-hidden flex flex-col transform rotate-x-12 origin-bottom">
          <div className="w-full h-12 border-b border-slate-700/50 bg-slate-800/50 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <div className="ml-4 px-3 py-1 bg-slate-900/50 rounded-md border border-slate-700/50 text-xs text-slate-400 font-mono flex items-center gap-2">
              <Activity className="w-3 h-3 text-indigo-400" />
              enterprise.accredian.com/dashboard
            </div>
          </div>

          <div className="flex flex-1 p-6 gap-6">
            <div className="w-64 flex flex-col gap-4">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-sm font-semibold text-slate-200">Active Learners</span>
                </div>
                <div className="text-2xl font-bold text-white">5,248</div>
                <div className="text-xs text-green-400 font-medium mt-1">+12% this month</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors cursor-pointer group">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                  <span className="text-sm font-semibold text-slate-200">Course Completion</span>
                </div>
                <div className="text-2xl font-bold text-white">94.2%</div>
                <div className="text-xs text-green-400 font-medium mt-1">+4.1% this month</div>
              </div>
            </div>

            <div className="flex-1 rounded-xl bg-slate-800/30 border border-slate-700/50 p-6 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div>
                  <h3 className="text-lg font-bold text-white">Enterprise Engagement Metrics</h3>
                  <p className="text-sm text-slate-400">Weekly active users across all domains</p>
                </div>
                <div className="p-2 bg-indigo-500/20 rounded-lg border border-indigo-500/30">
                  <TrendingUp className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              <div className="flex-1 w-full relative z-10">
                <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#818cf8" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  
                  <motion.path
                    d="M 0,130 C 40,120 80,140 120,90 C 160,40 200,80 240,60 C 280,40 320,50 360,20 C 380,5 390,15 400,5 L 400,150 L 0,150 Z"
                    fill="url(#areaGrad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                  
                  <motion.path
                    d="M 0,130 C 40,120 80,140 120,90 C 160,40 200,80 240,60 C 280,40 320,50 360,20 C 380,5 390,15 400,5"
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                  />
                  
                  <motion.circle 
                    cx="400" cy="5" r="5" 
                    fill="#3b82f6" 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: 2.8, type: "spring" }} 
                  />
                  <motion.circle 
                    cx="400" cy="5" r="10" 
                    fill="#3b82f6" 
                    opacity="0.3" 
                    initial={{ scale: 0 }} 
                    animate={{ scale: [0, 1.5, 1], opacity: [0, 0.4, 0] }} 
                    transition={{ delay: 2.8, duration: 1.5, repeat: Infinity }} 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}