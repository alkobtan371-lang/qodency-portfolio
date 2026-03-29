"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "./ui/spotlight-card";

const Services = () => {
  const cardVariants = {
    hover: {
      scale: 1.02,
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  const iconFloatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 8,
        ease: "easeInOut" as const,
        repeat: Infinity
      }
    }
  };

  const gridPattern = (
    <svg width="100%" height="100%" className="absolute inset-0 opacity-[0.01]">
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );

  return (
    <section id="services" className="relative py-24 min-h-screen bg-TRANSPARENT overflow-hidden z-10" dir="rtl">
      
      {/* تأثيرات الإضاءة النيونية الغامرة في الخلفية */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-[#c799ff]/10 rounded-full blur-[150px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-[#a8ff78]/10 rounded-full blur-[150px] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ترويسة القسم */}
        <div className="mb-16 md:mb-24 text-right">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4 justify-start"
          >
            <div className="h-0.5 w-12 bg-[#a8ff78] shadow-[0_0_10px_#a8ff78]"></div>
            <p className="text-[#a8ff78] font-mono text-sm tracking-[0.2em] uppercase">Core Capabilities</p>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-headline text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            القدرات <span className="text-gray-500 font-light">الهندسية</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-4 text-gray-400 max-w-2xl text-lg font-headline"
          >
            نحن لا نبرمج مواقع عادية، بل نُهندس منصات رقمية معقدة قادرة على معالجة ملايين البيانات وتحمل أقصى درجات الضغط دون توقف.
          </motion.p>
        </div>

        {/* شبكة بينتو (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* البطاقة الأولى */}
          <GlowCard 
            glowColor="green"
            customSize
            className="md:col-span-2 min-h-75 border-none p-0"
          >
            <div className="p-8 md:p-12 h-full flex flex-col justify-between relative">
              {gridPattern}
              <motion.div 
                variants={iconFloatVariants}
                animate="animate"
                className="absolute top-0 left-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110 pointer-events-none"
              >
                <span className="material-symbols-outlined text-8xl text-white">cloud_done</span>
              </motion.div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#a8ff78]/10 flex items-center justify-center border border-[#a8ff78]/20 mb-6 shadow-[0_0_15px_rgba(168,255,120,0.1)] group-hover:shadow-[0_0_20px_rgba(168,255,120,0.2)] transition-shadow">
                  <span className="material-symbols-outlined text-[#a8ff78]">code_blocks</span>
                </div>
                <h2 className="font-headline text-3xl font-bold text-white mb-4">أنظمة SaaS السحابية</h2>
                <p className="text-gray-400 leading-relaxed max-w-xl font-headline text-lg">
                  تحويل نماذج الأعمال المعقدة إلى منصات سحابية (SaaS) مؤتمتة بالكامل. نستخدم أحدث تقنيات الـ Microservices لضمان سرعة الاستجابة، سهولة التحديث، والقدرة على استيعاب آلاف المستخدمين المتزامنين بمرونة تامة.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#a8ff78]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </GlowCard>

          {/* البطاقة الثانية: التطبيقات */}
          <GlowCard 
            glowColor="blue"
            customSize
            className="md:col-span-1 min-h-75 border-none p-0"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between relative">
              {gridPattern}
               <motion.div 
                  variants={iconFloatVariants}
                  animate="animate"
                  className="absolute -bottom-4 -right-4 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
               >
                <span className="material-symbols-outlined text-9xl text-white">smartphone</span>
              </motion.div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-shadow">
                  <span className="material-symbols-outlined text-blue-400">app_shortcut</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">بناء وتطوير التطبيقات (Apps)</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-headline mt-auto">
                  برمجة وتطوير تطبيقات هواتف ذكية (iOS و Android) بأعلى معايير الأداء والسرعة، مع التركيز على تجربة مستخدم (UX) خالية من التعقيد والتكامل السلس مع الأنظمة الخلفية.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* البطاقة الثالثة: المواقع الإلكترونية */}
          <GlowCard 
            glowColor="orange"
            customSize
            className="md:col-span-1 min-h-75 border-none p-0"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between relative">
              {gridPattern}
               <motion.div 
                  variants={iconFloatVariants}
                  animate="animate"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
               >
                <span className="material-symbols-outlined text-[12rem] text-orange-400">language</span>
              </motion.div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-shadow">
                  <span className="material-symbols-outlined text-orange-400">web</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">إنشاء وبناء المواقع الإلكترونية</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-headline mt-auto">
                  تصميم وتطوير منصات ومواقع إلكترونية بأحدث التقنيات والإمكانيات (Web 3.0 & SSR)، لضمان أقصى سرعة استجابة وتوافق تام مع محركات البحث وكافة الأجهزة.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* البطاقة الرابعة (المدارس الذكية سابقاً الثانية) */}
          <GlowCard 
            glowColor="purple"
            customSize
            className="md:col-span-2 min-h-75 border-none p-0"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between relative">
              {gridPattern}
               <motion.div 
                  variants={iconFloatVariants}
                  animate="animate"
                  className="absolute -bottom-4 left-4 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
               >
                <span className="material-symbols-outlined text-9xl text-[#c799ff]">account_balance</span>
              </motion.div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[#c799ff]/10 flex items-center justify-center border border-[#c799ff]/20 mb-6 shadow-[0_0_15px_rgba(199,153,255,0.1)] group-hover:shadow-[0_0_20px_rgba(199,153,255,0.2)] transition-shadow">
                  <span className="material-symbols-outlined text-[#c799ff]">cast_for_education</span>
                </div>
                <h3 className="font-headline text-3xl font-bold text-white mb-4">المدارس الذكية</h3>
                <p className="text-gray-400 leading-relaxed text-lg font-headline">
                  رقمنة المؤسسات التعليمية من الألف إلى الياء. بوابة موحدة تربط الإدارة، الكادر التدريسي، والطلاب بنظام ذكي يدير الحضور، المناهج، والتقييمات اللحظية.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* البطاقة الثالثة */}
          <GlowCard 
            glowColor="blue"
            customSize
            className="md:col-span-1 min-h-75 border-none p-0"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between relative">
              {gridPattern}
               <motion.div 
                  variants={iconFloatVariants}
                  animate="animate"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none"
               >
                <span className="material-symbols-outlined text-[12rem] text-white">dns</span>
              </motion.div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-shadow">
                  <span className="material-symbols-outlined text-white">security</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white mb-4">أمن وحماية البيانات</h3>
                <p className="text-gray-400 leading-relaxed text-sm font-headline mt-auto">
                  استقرار الخوادم بنسبة 99.9%. نقوم بتشفير قواعد البيانات وحمايتها من الاختراقات مع أنظمة نسخ احتياطي آلية تضمن عدم ضياع أي ملف للعملاء.
                </p>
              </div>
            </div>
          </GlowCard>

          {/* البطاقة الرابعة */}
          <GlowCard 
            glowColor="orange"
            customSize
            className="md:col-span-2 min-h-75 border-none p-0"
          >
            <div className="p-8 md:p-12 h-full flex flex-col justify-between relative">
              {gridPattern}
               <motion.div 
                  variants={iconFloatVariants}
                  animate="animate"
                  className="absolute top-0 right-0 w-full h-1 bg-linear-to-l from-transparent via-[#4af8e3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_#4af8e3]"
               />
               <motion.div 
                  variants={iconFloatVariants}
                  animate="animate"
                  className="absolute top-1/2 left-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 transform -translate-y-1/2 group-hover:scale-110 pointer-events-none"
               >
                <span className="material-symbols-outlined text-8xl text-white">vital_signs</span>
              </motion.div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#4af8e3]/10 flex items-center justify-center border border-[#4af8e3]/20 shadow-[0_0_15px_rgba(74,248,227,0.1)] group-hover:shadow-[0_0_20px_rgba(74,248,227,0.2)] transition-shadow">
                    <span className="material-symbols-outlined text-[#4af8e3]">local_hospital</span>
                  </div>
                  <div className="bg-[#4af8e3]/10 border border-[#4af8e3]/20 px-4 py-1 rounded-full flex items-center gap-2" dir="ltr">
                     <span className="w-2 h-2 rounded-full bg-[#4af8e3] animate-pulse shadow-[0_0_5px_#4af8e3]"></span>
                     <span className="text-[#4af8e3] font-mono text-xs font-bold tracking-widest uppercase">ClinicAI Architecture</span>
                  </div>
                </div>
                <h3 className="font-headline text-3xl font-bold text-white mb-4">محركات الإدارة الطبية المتقدمة</h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl font-headline text-lg">
                  تمتلك Qodency بنية تحتية برمجية مخصصة للقطاع الطبي. أنظمتنا مصممة للتوسع اللامحدود، قادرة على ربط وإدارة <strong className="text-[#4af8e3]">أكثر من 50 عيادة وفرع طبي</strong> في شبكة واحدة متزامنة، مع معالجة آلاف السجلات الطبية الحساسة لحظياً وبأعلى معايير التشفير.
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#4af8e3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </GlowCard>

        </div>
      </div>
    </section>
  );
};

export default Services;