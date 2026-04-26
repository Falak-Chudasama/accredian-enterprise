'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const SocialIcon = ({ path, href }: { path: string; href: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 border border-slate-800"
  >
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  </motion.a>
);

const logos = {
  facebook: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z",
  linkedin: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2.3.7-2.8 1.7v-1.5H10v7.8h3v-4.1c0-.8.7-1.4 1.5-1.4s1.5.6 1.5 1.4v4.1h3M6.5 8.4A1.6 1.6 0 1 0 6.5 5a1.6 1.6 0 0 0 0 3.4M5 18.5h3V10.7H5v7.8z",
  x: "M18.9 3h3.3L15 11.1 22.8 21h-6.6l-5.2-6.8L5.1 21H1.8l7.6-8.6L2 3h6.8l4.7 6.2L18.9 3zm-1.2 16h1.8L7.3 5H5.4L17.7 19z",
  instagram: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.5a4.8 4.8 0 0 1 1.7 1.7c.2.4.4 1 .5 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.5 2.2a4.8 4.8 0 0 1-1.7 1.7c-.4.2-1 .4-2.2.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.5a4.8 4.8 0 0 1-1.7-1.7c-.2-.4-.4-1-.5-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.5-2.2a4.8 4.8 0 0 1 1.7-1.7c.4-.2 1-.4 2.2-.5 1.2-.1 1.6-.1 4.8-.1m0-2.2C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6a7 7 0 0 0-2.5 1.6 7 7 0 0 0-1.6 2.5C.1 5.8 0 6.6 0 7.1 0 8.3 0 8.7.1 10c0 1.3 0 1.7-.1 5.1s0 3.3.1 4.5c.1 1.3.3 2.1.6 2.9a7 7 0 0 0 1.6 2.5 7 7 0 0 0 2.5 1.6c.8.3 1.6.5 2.9.6 1.2.1 1.6.1 4.5.1s3.3 0 4.5-.1c1.3-.1 2.1-.3 2.9-.6a7 7 0 0 0 2.5-1.6 7 7 0 0 0 1.6-2.5c.3-.8.5-1.6.6-2.9.1-1.2.1-1.6.1-4.5s0-3.3-.1-4.5c-.1-1.3-.3-2.1-.6-2.9a7 7 0 0 0-1.6-2.5 7 7 0 0 0-2.5-1.6c-.8-.3-1.6-.5-2.9-.6-1.2-.1-1.6-.1-4.5-.1M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 0 0 12 5.8m0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-11a1.4 1.4 0 1 1-2.9 0 1.4 1.4 0 0 1 2.9 0",
  youtube: "M21.8 8a2.7 2.7 0 0 0-1.9-1.9C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.9.5A2.7 2.7 0 0 0 2.2 8c-.5 1.7-.5 5.2-.5 5.2s0 3.5.5 5.2a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.9.5 7.9.5s6.2 0 7.9-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-5.2.5-5.2s0-3.5-.5-5.2zM9.6 15.3V8.7l5.8 3.3-5.8 3.3z"
};

export default function Footer() {
  return (
    <footer className="bg-[#020617] pt-36 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white tracking-tighter">
                accredian<span className="text-blue-500">.</span>
              </h2>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.25em] leading-[1.8] max-w-[280px]">
                Credentials That Matter. <br />
                Powering Global Enterprise Upskilling.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <SocialIcon path={logos.facebook} href="#" />
              <SocialIcon path={logos.linkedin} href="#" />
              <SocialIcon path={logos.x} href="#" />
              <SocialIcon path={logos.instagram} href="#" />
              <SocialIcon path={logos.youtube} href="#" />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8 pt-2">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest">Accredian</h4>
            <ul className="space-y-4">
              {['About', 'Blog', 'Why Accredian', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8 pt-2">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {['Case Studies', 'CAT Framework', 'LMS Support', 'Privacy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:ml-auto w-full lg:max-w-sm">
            <div className="bg-[#080d1e] p-8 rounded-3xl border border-white/5 space-y-8">
              <h4 className="text-white font-bold text-lg tracking-tight">Connect with an Advisor</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#020617] flex items-center justify-center border border-slate-800">
                    <Mail className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-slate-200 text-[13px] font-semibold">enterprise@accredian.com</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#020617] flex items-center justify-center border border-slate-800 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-slate-400 text-[12px] font-medium leading-relaxed">
                    4th Floor, 250, Phase IV, Udyog Vihar, <br />
                    Sector 18, Gurugram, Haryana
                  </p>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#2563eb] hover:bg-blue-500 text-white font-bold py-2 rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                Enquire Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}