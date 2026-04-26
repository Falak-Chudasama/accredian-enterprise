'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed top-0 w-full z-50 h-20 transition-all duration-300 flex items-center ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)] group-hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] transition-shadow duration-300">
            <span className="text-white font-bold text-xl leading-none">a</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
            accredian<span className="text-indigo-400">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#domains" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Domains</Link>
          <Link href="#framework" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Process</Link>
          <Link href="#testimonials" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Partners</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">
            Sign In
          </Link>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white text-sm font-semibold py-2.5 px-5 rounded-md shadow-[0_0_15px_-3px_rgba(79,70,229,0.6)] hover:shadow-[0_0_25px_-3px_rgba(79,70,229,0.8)] transition-all duration-300 transform hover:-translate-y-0.5">
            Enquire Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}