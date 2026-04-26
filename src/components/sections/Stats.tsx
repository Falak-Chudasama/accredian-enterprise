import React from 'react';
import ScrollReveal from '../ui/ScrollReveal';

const statData = [
  { value: "10K+", label: "Professionals Trained", sub: "For exceptional career success" },
  { value: "200+", label: "Sessions Delivered", sub: "With unmatched excellence" },
  { value: "5K+", label: "Active Learners", sub: "Engaged in dynamic courses" }
];

export default function Stats() {
  return (
    <section className="bg-slate-950 relative z-20 border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
          {statData.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center py-16 px-6 group hover:bg-slate-900/50 transition-colors duration-500 relative overflow-hidden">
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-6xl font-light tracking-tighter text-white mb-4 group-hover:text-blue-400 transition-colors duration-500">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-slate-300 tracking-wide uppercase mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  {stat.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}