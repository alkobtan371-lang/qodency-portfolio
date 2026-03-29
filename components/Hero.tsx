"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = y1; // Keep rows synchronized vertically
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const rows = [
    { id: 1, duration: 22, offset: 0, 
      left: ["أفكارك", "رؤيتك المستقبلية", "نظام عيادات متكامل"], 
      right: ["const vision = decrypt(idea);", "await system.deploy(vision);", "cluster.scale({ nodes: 50 });"] 
    },
    { id: 2, duration: 28, offset: -5, 
      left: ["طموحك الرقمي", "إدارة المدارس الذكية", "توسع غير محدود"], 
      right: ["module.init(digital_ambition);", "SmartSchool.mount(dashboard);", "while(true) { expand(); }"] 
    },
    { id: 3, duration: 25, offset: -12, 
      left: ["أداء عالي", "حماية البيانات", "بنية تحتية قوية"], 
      right: ["latency.optimize(1.2ms);", "crypto.encrypt(AES_256);", "server.build(architecture);"] 
    }
  ];

  const renderSide = (side: 'left' | 'right') => (
    <motion.div style={{ y: side === 'left' ? y1 : y2 }} className={`split-layer layer-${side} bg-TRANSPARENT`}>
      {side === 'left' && (
        <div className="absolute top-[20%] left-[10%] text-gray-500 font-mono text-[10px] md:text-xs tracking-[0.3em] z-30 opacity-50">
          // INPUT_STREAM
        </div>
      )}
      {rows.map((row) => (
        <motion.div 
          key={row.id}
          className={`data-stream row-${row.id}`}
          style={{ willChange: "transform" }}
          animate={{ x: ["0vw", "200vw"] }}
          transition={{ 
            duration: row.duration, 
            repeat: Infinity, 
            ease: "linear",
            delay: row.offset 
          }}
        >
          {row[side].map((text, i) => (
            <span key={i} className="stream-item">
              {text}
            </span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-TRANSPARENT overflow-hidden">
      
      {/* الخط المركزي المضيء وتأثير التشفير */}
      <div className="portal-spine" />
      <div className="portal-glow-overlay" />

      {/* الطبقة اليسرى واليمنى */}
      {renderSide('left')}
      {renderSide('right')}

      {/* العبارة السفلية والأزرار */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-6 md:bottom-10 w-full text-center z-30 px-6"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-bold text-lg md:text-3xl tracking-[0.1em] md:tracking-[0.2em] text-white uppercase drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] mb-5"
        >
          Transforming <span className="text-[#a8ff78] italic font-light">Vision</span> Into Code
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <Link 
            href="#services" 
            className="group relative px-6 py-2.5 bg-[#a8ff78] text-black text-sm font-bold rounded-lg flex items-center gap-2 hover:bg-white transition-all overflow-hidden"
          >
            <span className="relative z-10">استكشف خدماتنا</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform" />
          </Link>

          <Link 
            href="#contact" 
            className="group px-6 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-bold rounded-lg flex items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all font-headline"
          >
            <Terminal className="w-4 h-4 group-hover:text-[#a8ff78] transition-colors" />
            <span>تواصل معنا</span>
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;