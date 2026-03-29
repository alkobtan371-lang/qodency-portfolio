"use client";
import React from "react";
import { motion } from "framer-motion";

const TypingCode = ({ children, delay = 0 }: { children: string | React.ReactNode, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden"
    >
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 1.5, delay: delay + 0.3, ease: "linear" }}
        className="whitespace-pre-wrap break-all overflow-hidden"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-2 h-4 bg-emerald-500 translate-x-full"
      />
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden min-h-screen bg-TRANSPARENT z-10">
      {/* خلفية الجزيئات العائمة (معرفة مسبقاً في globals.css) */}
      <div className="floating-dust"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* عنوان القسم */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-6xl font-bold tracking-tight mb-4 text-white"
          >
            كيف نعمل؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 font-mono text-sm tracking-[0.3em] uppercase"
          >
            Engineering Workflow Architecture
          </motion.p>
        </div>

        {/* حاوية الخط الزمني (Timeline Container) */}
        <div className="relative flex flex-col gap-24">
          {/* الخط المركزي (يظهر في الشاشات الكبيرة) */}
          <div className="hidden md:block absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-0.5 timeline-glow opacity-60 z-0"></div>

          {/* ============================== */}
          {/* المرحلة الأولى: النقاش والتحليل */}
          {/* ============================== */}
          <div className="relative z-10">
            {/* عقدة المركز (Node) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-10"
            >
              <div className="w-16 h-16 rounded-full bg-TRANSPARENT border-2 border-[#c799ff] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(199,153,255,0.3)] z-10">
                <span className="material-symbols-outlined text-[#c799ff] text-3xl">
                  forum
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center relative z-20">
                نقاش وتحليل المشروع
              </h3>
            </motion.div>

            {/* البطاقات (Grid) */}
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="ultra-thin-glass p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#c799ff]">
                    psychology
                  </span>
                  <h4 className="text-xl font-bold text-white">تحليل المتطلبات</h4>
                </div>
                <div className="code-mockup mb-6 group-hover:border-[#c799ff]/30 transition-colors h-auto min-h-[120px] md:h-[120px]">
                  <TypingCode>
                    <span className="text-purple-400">async function</span> <span className="text-blue-400">analyzeVision</span>(clientIdea) &#123;<br />
                    &nbsp;&nbsp;<span className="text-gray-400">// Parsing requirements...</span><br />
                    &nbsp;&nbsp;<span className="text-purple-400">const</span> structure = <span className="text-purple-400">await</span> ai.extract(clientIdea);<br />
                    &nbsp;&nbsp;<span className="text-purple-400">return</span> optimize(structure);<br />
                    &#125;
                  </TypingCode>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نقوم بتحليل فكرتك بعمق، ونفهم متطلبات النظام (مثل دعم 50 عيادة) لتصميم البنية التحتية البرمجية الأنسب.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="ultra-thin-glass p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#c799ff]">
                    architecture
                  </span>
                  <h4 className="text-xl font-bold text-white">هندسة الحلول</h4>
                </div>
                <div className="code-mockup mb-6 group-hover:border-[#c799ff]/30 transition-colors h-auto min-h-[120px] md:h-[120px]">
                  <TypingCode delay={0.5}>
                    <span className="text-gray-400">/* Database Schema */</span><br />
                    <span className="text-blue-400">Model</span> ClinicAI &#123;<br />
                    &nbsp;&nbsp;id: <span className="text-purple-400">UUID</span>,<br />
                    &nbsp;&nbsp;branches: <span className="text-purple-400">Int</span> @default(50),<br />
                    &nbsp;&nbsp;status: <span className="text-yellow-300">"SCALABLE"</span><br />
                    &#125;
                  </TypingCode>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نضع المخططات الهندسية ونختار التقنيات (Tech Stack) لضمان أعلى درجات الأداء وقابلية التوسع.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ============================== */}
          {/* المرحلة الثانية: التنفيذ والبرمجة */}
          {/* ============================== */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-10"
            >
              <div className="w-16 h-16 rounded-full bg-TRANSPARENT border-2 border-[#4af8e3] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(74,248,227,0.3)] z-10">
                <span className="material-symbols-outlined text-[#4af8e3] text-3xl">
                  code_blocks
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center relative z-20">
                التنفيذ وكتابة الأكواد
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="ultra-thin-glass p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#4af8e3]">
                    terminal
                  </span>
                  <h4 className="text-xl font-bold text-white">بناء الواجهات</h4>
                </div>
                <div className="code-mockup mb-6 group-hover:border-[#4af8e3]/30 transition-colors h-auto min-h-[120px] md:h-[120px] text-cyan-300">
                  <TypingCode>
                    &lt;<span className="text-blue-400">GlassmorphismCard</span><br />
                    &nbsp;&nbsp;<span className="text-purple-400">blur</span>="high"<br />
                    &nbsp;&nbsp;<span className="text-purple-400">data</span>=&#123;projectData&#125;<br />
                    /&gt;
                  </TypingCode>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نصمم واجهات مستخدم (UI) فخمة وتفاعلية، تماماً مثل هذا الموقع، لضمان تجربة مستخدم (UX) لا تُنسى.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="ultra-thin-glass p-8 rounded-2xl group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-[#4af8e3]">
                    dns
                  </span>
                  <h4 className="text-xl font-bold text-white">تطوير الخوادم</h4>
                </div>
                <div className="code-mockup mb-6 group-hover:border-[#4af8e3]/30 transition-colors h-auto min-h-[120px] md:h-[120px]">
                  <TypingCode delay={0.3}>
                    <span className="text-gray-400">// Load Balancer Config</span><br />
                    <span className="text-purple-400">if</span> (cluster.isMaster) &#123;<br />
                    &nbsp;&nbsp;<span className="text-purple-400">for</span> (<span className="text-purple-400">let</span> i = 0; i &lt; numCPUs; i++)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;cluster.fork();<br />
                    &#125;
                  </TypingCode>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  نبني أنظمة خلفية (Backend) معمارية قادرة على تحمل الضغط العالي وإدارة البيانات المعقدة بكفاءة.
                </p>
              </motion.div>
            </div>
          </div>

          {/* ============================== */}
          {/* المرحلة الثالثة: الفحص والنشر */}
          {/* ============================== */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-10"
            >
              <div className="w-16 h-16 rounded-full bg-TRANSPARENT border-2 border-[#a8ff78] flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,255,120,0.3)] z-10">
                <span className="material-symbols-outlined text-[#a8ff78] text-3xl">
                  rocket_launch
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center relative z-20">
                الفحص، الأمان، والنشر
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="ultra-thin-glass p-10 rounded-2xl relative overflow-hidden group hover:border-[#a8ff78]/40 transition-colors duration-500 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#a8ff78] text-4xl">
                    verified_user
                  </span>
                  <div>
                    <h4 className="text-2xl font-bold text-white">ضمان الجودة والإطلاق</h4>
                    <p className="text-[#a8ff78] font-mono text-sm mt-1" dir="ltr">System integrity: 100%</p>
                  </div>
                </div>
                <button className="bg-[#a8ff78]/10 text-[#a8ff78] border border-[#a8ff78]/30 px-8 py-3 rounded-full font-bold hover:bg-[#a8ff78] hover:text-[#050505] transition-all flex items-center gap-2">
                  إطلاق النظام <span className="material-symbols-outlined text-sm">bolt</span>
                </button>
              </div>
              
              <div className="code-mockup border-[#a8ff78]/20 mb-8 h-auto min-h-[160px] md:h-[160px]">
                <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                  <div className="w-3 h-3 rounded-full bg-[#a8ff78] animate-pulse"></div>
                  <span className="text-gray-400 text-xs">Terminal: Deployment successful</span>
                </div>
                <TypingCode delay={0.6}>
                  <span className="text-gray-500">➜</span> <span className="text-white">npm</span> run deploy:production<br />
                  <span className="text-[#a8ff78]">✔</span> Compiling optimized build...<br />
                  <span className="text-[#a8ff78]">✔</span> Running security audit (0 vulnerabilities found)<br />
                  <span className="text-[#a8ff78]">✔</span> Deployed to global edge network.
                </TypingCode>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-center">
                نخضع النظام لاختبارات أمان وأداء قاسية. بعد التأكد من جاهزيته التامة، نقوم بنشره على أحدث الخوادم السحابية ليكون متاحاً لعملائك بسرعة فائقة.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;