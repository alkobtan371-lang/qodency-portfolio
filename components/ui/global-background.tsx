"use client";
import React from "react";
import { motion } from "framer-motion";
import ParticlesBG from "./particles-bg";

export const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-50] w-full h-full bg-[#050505] overflow-hidden pointer-events-none">
      
      {/* 1. النمط الشبكي الدقيق (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      
      {/* 2. شبكة الجسيمات التفاعلية (Interactive Particles Network) */}
      <ParticlesBG />

      {/* 3. الكرات الضوئية المتحركة بألوان Qodency (Animated Floating Orbs) */}
      {/* اللون البنفسجي */}
      <motion.div
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "10%", "-10%", "0%"],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#c799ff]/10 blur-[120px]"
      />
      
      {/* اللون السماوي */}
      <motion.div
        animate={{
          x: ["0%", "-10%", "5%", "0%"],
          y: ["0%", "-5%", "10%", "0%"],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-[40%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-[#4af8e3]/10 blur-[120px]"
      />
      
      {/* اللون الأخضر النيوني */}
      <motion.div
        animate={{
          x: ["0%", "10%", "-5%", "0%"],
          y: ["0%", "-10%", "5%", "0%"],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-[#a8ff78]/10 blur-[120px]"
      />

      {/* 3. تأثير الضوضاء السينمائية (Cinematic Grain/Noise Shader) ليعطي ملمساً فاخراً */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-overlay"
        style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
        }}
      ></div>
      
    </div>
  );
};