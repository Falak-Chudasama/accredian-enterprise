'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  BrainCircuit, 
  UserRoundCheck, 
  BarChart3, 
  Settings2, 
  Globe2, 
  WalletCards 
} from 'lucide-react';

const domains = [
  { title: "Product & Innovation Hub", icon: Lightbulb, color: "from-blue-500 to-cyan-400" },
  { title: "Gen-AI Mastery", icon: BrainCircuit, color: "from-indigo-500 to-purple-400" },
  { title: "Leadership Elevation", icon: UserRoundCheck, color: "from-blue-600 to-indigo-400" },
  { title: "Tech & Data Insights", icon: BarChart3, color: "from-cyan-500 to-blue-400" },
  { title: "Operations Excellence", icon: Settings2, color: "from-indigo-400 to-blue-400" },
  { title: "Digital Enterprise", icon: Globe2, color: "from-blue-500 to-indigo-600" },
  { title: "Fintech Innovation Lab", icon: WalletCards, color: "from-cyan-400 to-indigo-500" }
];

export default function DomainExpertise() {
  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden" id="domains">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Domain Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs"
          >
            Specialized Programs Designed to Fuel Innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-blue-500/30 transition-all duration-500 ${
                index === 6 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.color} p-[1px] mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                    <domain.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                  {domain.title}
                </h3>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}