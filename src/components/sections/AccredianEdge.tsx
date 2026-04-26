'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Users,
  Settings,
  Cpu,
  Zap,
  Target,
  Box
} from 'lucide-react';

const steps = [
  {
    title: "Tailored Solutions",
    desc: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb,
    pos: "top" as const
  },
  {
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: Users,
    pos: "bottom" as const
  },
  {
    title: "Innovative Framework",
    desc: "Proprietary methods for impactful, application-driven results.",
    icon: Settings,
    pos: "top" as const
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning experiences.",
    icon: Cpu,
    pos: "bottom" as const
  },
  {
    title: "Diverse Offerings",
    desc: "Courses across industries, skill levels, and emerging fields.",
    icon: Zap,
    pos: "top" as const
  },
  {
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: Target,
    pos: "bottom" as const
  },
  {
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    icon: Box,
    pos: "top" as const
  }
];

export default function AccredianEdge() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .edge-display { font-family: 'Instrument Serif', Georgia, serif; }
        .edge-body    { font-family: 'DM Sans', sans-serif; }
        .edge-mono    { font-family: 'JetBrains Mono', monospace; }

        .node-ring {
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          border: 1px dashed rgba(99,102,241,0.2);
          transition: border-color 0.4s ease;
        }
        .node-wrap:hover .node-ring {
          border-color: rgba(99,102,241,0.5);
        }
        .node-wrap:hover .node-icon-bg {
          background: rgba(99,102,241,0.15);
          border-color: rgba(99,102,241,0.5);
          box-shadow: 0 0 20px -4px rgba(99,102,241,0.3);
        }
        .node-wrap:hover .node-icon {
          color: #a5b4fc;
        }
        .node-icon-bg {
          transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .node-icon {
          transition: color 0.4s ease;
        }

        .shimmer-track {
          animation: shimmer-move 3s linear infinite;
        }
        @keyframes shimmer-move {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }

        .label-line {
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(99,102,241,0.3), transparent);
        }
      `}</style>

      <section className="edge-body bg-[#080c14] py-28 relative overflow-hidden" id="framework">

        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full" />
        </div>

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-18">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-4"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Accredian Edge</span>
          </motion.h2>
          <p className="text-slate-400 font-medium tracking-widest uppercase text-sm">Strategic Training Excellence</p>
        </div>

          {/* Timeline */}
          <div className="relative hidden lg:block">

            {/* Top label row */}
            <div className="grid grid-cols-7 mb-0" style={{ height: '160px' }}>
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center justify-end pb-0">
                  {step.pos === 'top' && (
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex flex-col items-center"
                    >
                      <div className="text-center px-2 mb-3">
                        <p className="text-white text-[13px] font-semibold leading-snug mb-1.5 whitespace-nowrap">{step.title}</p>
                        <p className="text-slate-500 text-[11px] leading-relaxed font-light max-w-[110px] mx-auto">{step.desc}</p>
                      </div>
                      <div className="label-line h-10" />
                      <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Icon row with track */}
            <div className="relative flex items-center" style={{ height: '72px' }}>
              {/* Track line */}
              <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-slate-800 overflow-hidden">
                <div
                  className="shimmer-track absolute top-0 left-0 h-full w-1/5"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)' }}
                />
              </div>

              {/* Nodes */}
              <div className="grid grid-cols-7 w-full relative z-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-center"
                  >
                    <div className="node-wrap relative cursor-pointer flex items-center justify-center" style={{ width: 56, height: 56 }}>
                      <div className="node-ring" />
                      <div
                        className="node-icon-bg relative z-10 w-14 h-14 rounded-full border border-slate-700/80 bg-[#0c1120] flex items-center justify-center"
                      >
                        <step.icon className="node-icon w-5 h-5 text-slate-400" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom label row */}
            <div className="grid grid-cols-7" style={{ height: '160px' }}>
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center justify-start pt-0">
                  {step.pos === 'bottom' && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                      <div className="label-line h-10" />
                      <div className="text-center px-2 mt-3">
                        <p className="text-white text-[13px] font-semibold leading-snug mb-1.5 whitespace-nowrap">{step.title}</p>
                        <p className="text-slate-500 text-[11px] leading-relaxed font-light max-w-[110px] mx-auto">{step.desc}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-800/60 bg-slate-900/30 hover:border-indigo-500/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-slate-700 bg-[#0c1120] flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <p className="text-white text-[13px] font-semibold mb-1">{step.title}</p>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom separator */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      </section>
    </>
  );
}