"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8 bg-transparent overflow-hidden font-tajawal">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Glassy Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-white/[0.03] to-white/[0.08] border border-white/[0.1] backdrop-blur-3xl p-12 md:p-20 text-center"
        >
          {/* Subtle Inner Glow */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />
          
          <div className="relative z-10" dir="rtl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight font-headline"
            >
              جاهز لبناء <span className="text-emerald-400">مستقبل أعمالك</span> <br className="hidden md:block" /> الرقمي؟
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-headline"
            >
              فلنحول أفكارك الرؤيوية إلى واقع رقمي فائق الأداء. 
              هنا تجتمع الدقة الهندسية مع التصميم المستقبلي في Qodency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* Primary Action */}
              <Link 
                href="#contact" 
                className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-emerald-500 text-black font-bold text-lg hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] overflow-hidden font-headline"
              >
                <MessageCircle className="w-6 h-6" />
                <span>ابدأ مشروعك الآن</span>
                <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
              </Link>

              {/* Secondary Action */}
              <Link 
                href="#portfolio" 
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-lg transition-colors border-b border-transparent hover:border-white/20 pb-1 font-headline"
              >
                شاهد أعمالنا
                <ArrowRight className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        </motion.div>
      </div>

      {/* Background Subtle Sparkle Effect (Simple Dot Grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
    </section>
  );
}
