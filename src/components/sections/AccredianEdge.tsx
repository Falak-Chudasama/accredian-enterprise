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
    desc: "Programs customized to your organization's goals.",
    icon: Lightbulb,
    align: "top"
  },
  {
    title: "Expert Guidance",
    desc: "Learn from industry leaders with real-world success.",
    icon: Users,
    align: "bottom"
  },
  {
    title: "Innovative Framework",
    desc: "Proprietary methods for application-driven results.",
    icon: Settings,
    align: "top"
  },
  {
    title: "Advanced Technology",
    desc: "State-of-the-art LMS for seamless learning.",
    icon: Cpu,
    align: "bottom"
  },
  {
    title: "Diverse Offerings",
    desc: "Courses across industries and emerging fields.",
    icon: Zap,
    align: "top"
  },
  {
    title: "Proven Impact",
    desc: "Trusted by leading organizations for measurable ROI.",
    icon: Target,
    align: "bottom"
  },
  {
    title: "Flexible Delivery",
    desc: "Online and offline options tailored to your needs.",
    icon: Box,
    align: "top"
  }
];

export default function AccredianEdge() {
  return (
    <section className="bg-slate-950 py-32 overflow-hidden relative" id="framework">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Accredian Edge</span>
          </motion.h2>
          <p className="text-slate-400 text-lg font-medium">Key Aspects of Our Strategic Training</p>
        </div>

        <div className="relative">
          {/* Central Animated Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: step.align === 'top' ? -40 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center group ${
                  step.align === 'top' ? 'lg:flex-col' : 'lg:flex-col-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`text-center mb-8 lg:mb-0 ${step.align === 'top' ? 'lg:mb-12' : 'lg:mt-12'}`}>
                  <h3 className="text-white font-bold mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[150px] mx-auto">{step.desc}</p>
                </div>

                {/* Animated Circle / Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center relative z-20 group-hover:border-indigo-500 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all duration-500">
                    <step.icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                  </div>
                  
                  {/* Decorative pulse for the circle */}
                  <div className="absolute inset-0 rounded-full bg-indigo-500/20 animate-ping opacity-0 group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />
    </section>
  );
}