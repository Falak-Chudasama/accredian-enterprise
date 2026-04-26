'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const companyTestimonials = [
  {
    companyName: "Bayer Pharmaceuticals",
    content: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service.",
    logoSrc: "/bayer.png",
    rating: 5
  },
  {
    companyName: "Reliance Industries",
    content: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense.",
    logoSrc: "/reliance.png",
    rating: 5
  },
  {
    companyName: "IBM Global Services",
    content: "Enterprise-grade solution. Integrations with our existing tech stack were flawless, and the curriculum sticks. A critical asset for upskilling.",
    logoSrc: "/ibm.png",
    rating: 5
  },
  {
    companyName: "ADP",
    content: "The 'Accredian Edge' CAT framework completely transformed how our product team approaches enterprise challenges. Highly recommended.",
    logoSrc: "/adp.png",
    rating: 5
  },
  {
    companyName: "HCL Tech",
    content: "The Leadership Elevation program brought a decisive competitive advantage to our talent pipeline. Seamless scaling and world-class insights.",
    logoSrc: "/hcl.png",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter"
          >
            Trusted by Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Leaders.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs mt-3"
          >
            A cohesive strategy designed to transform global enterprise partners
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {companyTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/5 group hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="absolute top-6 right-8 text-slate-800 group-hover:text-blue-500/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="flex items-center gap-1 mb-10 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-10 font-medium italic relative z-10">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-5 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-800 bg-white group-hover:border-blue-500 transition-colors flex items-center justify-center p-2 shadow-lg">
                  <img 
                    src={testimonial.logoSrc} 
                    alt={testimonial.companyName} 
                    className="w-auto h-auto max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/logo_example.png';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base tracking-tight group-hover:text-blue-400 transition-colors">{testimonial.companyName}</h4>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mt-1">Verified Partner</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}