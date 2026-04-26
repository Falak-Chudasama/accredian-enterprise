'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How does the CAT Framework specifically benefit enterprise teams?",
    answer: "The CAT Framework (Concept, Application, Tools) ensures that upskilling isn't just theoretical. It bridges the gap between foundational knowledge and real-world execution, providing your team with the actual tools used in top-tier global operations."
  },
  {
    question: "Can the training programs be customized for specific industry needs?",
    answer: "Absolutely. While our core domains are robust, we tailor the case studies, toolsets, and application scenarios to align with your organization's specific challenges and goals."
  },
  {
    question: "What kind of support do we receive during the deployment phase?",
    answer: "Every enterprise partner is assigned a dedicated success manager. We provide end-to-end support, from LMS integration to real-time progress tracking and post-session mentorship."
  },
  {
    question: "Is the learning platform compatible with our existing tech stack?",
    answer: "Yes. Our platform is built on a modern, flexible architecture that supports SSO and integrates seamlessly with most major enterprise LMS and communication tools like Slack and Microsoft Teams."
  },
  {
    question: "How do you measure the ROI of the training programs?",
    answer: "We provide comprehensive analytics dashboards that track learner engagement, skill proficiency gains, and project-based application success, giving you tangible data on workforce transformation."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-950 mt-16 relative overflow-hidden" id="faq">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-4"
          >
            Any <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Questions?</span>
          </motion.h2>
          <p className="text-slate-400 font-medium">Everything you need to know about the Accredian experience.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group rounded-2xl transition-all duration-500 ${
                activeIndex === index 
                  ? 'bg-slate-900/60 border-indigo-500/30' 
                  : 'bg-slate-900/20 border-white/5 hover:bg-slate-900/40'
              } border backdrop-blur-sm overflow-hidden`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  activeIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${
                  activeIndex === index ? 'rotate-180 text-indigo-400' : 'text-slate-500'
                }`}>
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 pb-8 text-slate-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}