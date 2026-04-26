'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck, Mail, Building2, User } from 'lucide-react';

export default function LeadForm() {
  return (
    <section className="bg-[#050505] mt-10 py-32 relative overflow-hidden" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6"
          >
            Scale your <span className="text-blue-500">Future.</span>
          </motion.h2>
          <p className="text-zinc-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Ready to implement the CAT framework? Our advisors are standing by for a strategic deep-dive.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-zinc-900/50 backdrop-blur-2xl border border-zinc-800 p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="flex items-center gap-2 text-zinc-300 text-sm font-bold uppercase tracking-widest">
                    <User className="w-4 h-4 text-blue-500" />
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Alex Turner"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-2 text-zinc-300 text-sm font-bold uppercase tracking-widest">
                    <Mail className="w-4 h-4 text-blue-500" />
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="alex@arctic.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 text-zinc-300 text-sm font-bold uppercase tracking-widest">
                  <Building2 className="w-4 h-4 text-blue-500" />
                  Organization
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Company Name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner"
                />
              </div>

              <div className="space-y-4">
                <label className="text-zinc-300 text-sm font-bold uppercase tracking-widest">
                  How can we assist your team?
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-6 py-5 text-white text-lg placeholder:text-zinc-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-inner resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01, backgroundColor: '#3b82f6' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-3 transition-all text-lg uppercase tracking-widest shadow-[0_10px_20px_rgba(37,99,235,0.2)]"
              >
                Initialize Partnership
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}