"use client";
import React from "react";
import { motion } from "framer-motion";
import { GlowCard } from "./ui/spotlight-card";

interface Project {
  _id: string;
  title: string;
  status: 'completed' | 'progress';
  category: string;
  techStack?: string[];
  description: string;
  image: string;
  demoLink?: string;
  githubLink?: string;
  isStatic?: boolean; // Helping flag
}

interface PortfolioProps {
  projects?: Project[];
}

const staticProjects: Project[] = [
  {
    _id: "static_1",
    title: "نظام ClinicAI الموحد",
    category: "بنية تحتية طبية (Healthcare SaaS)",
    description: "محرك برمجي متطور يربط ويدير بيانات أكثر من 50 فرعاً طبياً في شبكة واحدة. يعالج آلاف السجلات الطبية المعقدة لحظياً بأعلى معايير التشفير الطبي، متجاوزاً الأنظمة التقليدية بمراحل.",
    techStack: ["Next.js", "PostgreSQL", "Microservices", "Redis"],
    status: 'completed',
    image: "/projects/clinic_ai_preview.png",
    isStatic: true
  },
  {
    _id: "static_2",
    title: "منصة المدارس الذكية",
    category: "نظام إدارة تعليمي (EdTech SaaS)",
    description: "بيئة سحابية متكاملة لرقمنة المؤسسات التعليمية. تدير آلاف الطلاب والمناهج والتقييمات، مع بوابات دخول مخصصة للإدارة، المعلمين، وأولياء الأمور في واجهة واحدة سريعة.",
    techStack: ["React", "Node.js", "WebSockets", "AWS"],
    status: 'completed',
    image: "/projects/smart_school_preview.png",
    isStatic: true
  }
];

const Portfolio = ({ projects = [] }: PortfolioProps) => {
  // Merge static ones at the beginning, then dynamic ones from Sanity
  const allProjects = [...staticProjects, ...projects];

  return (
    <section id="portfolio" className="relative py-32 bg-TRANSPARENT overflow-hidden z-10" dir="rtl">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ترويسة القسم */}
        <div className="mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black font-headline tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-gray-600 leading-tight"
          >
            الأرشيف <br />الهندسي
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-32 bg-[#a8ff78] mt-8 origin-right shadow-[0_0_15px_#a8ff78]"
          />
        </div>

        {/* قائمة المشاريع */}
        <div className="flex flex-col gap-32 md:gap-40">
          {allProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isComingSoon = project.status === 'progress';

            const accentClasses = "text-[#a8ff78]";
            const borderAccentClasses = "border-[#a8ff78]/30";
            const colorGradient = "from-[#4af8e3]/10 to-transparent";
            const icon = isComingSoon ? "payments" : "code";

            return (
              <motion.div 
                key={project._id} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                
                {/* 1. قسم النصوص */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`material-symbols-outlined text-4xl ${accentClasses}`}>
                      {icon}
                    </span>
                    <span className="text-gray-400 font-mono text-sm uppercase tracking-widest bg-white/5 px-4 py-1 rounded-full border border-white/10">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 font-headline text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-headline border-r-2 border-white/10 pr-6">
                    {project.description}
                  </p>
                  
                  {isComingSoon && (
                    <div className="flex gap-12 mb-10">
                       <div className="flex flex-col">
                        <span className="text-gray-500 text-sm mb-2 font-headline">الحالة</span>
                        <span className={`text-4xl font-mono font-bold ${accentClasses}`}>
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-3">
                    {project.techStack?.map((tech, idx) => (
                      <span key={idx} className={`px-5 py-2 rounded-full border border-white/10 text-xs font-mono text-gray-300 backdrop-blur-md bg-white/5 hover:${borderAccentClasses} transition-colors cursor-default`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" className="mt-8 text-[#a8ff78] underline font-mono text-sm">عرض الموقع الحي</a>
                  )}
                </motion.div>

                {/* 2. قسم العرض البصري (Images or Coming Soon) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-1/2"
                >
                  <GlowCard 
                    glowColor={isComingSoon ? "orange" : "blue"}
                    customSize
                    className="aspect-square md:aspect-[4/3] p-0 border-none overflow-hidden"
                  >
                    <div className={`w-full h-full relative group shadow-2xl overflow-hidden rounded-[2rem] border ${borderAccentClasses} bg-gradient-to-br ${colorGradient}`}>
                      {!isComingSoon ? (
                          <div className="w-full h-full relative p-4 md:p-8">
                             <div className="absolute inset-4 md:inset-8 bg-black/40 rounded-3xl z-10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <button className={`px-8 py-3 rounded-full bg-white text-black font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500`}>
                                  عرض تفاصيل الهندسة
                                </button>
                             </div>
                             <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover rounded-2xl shadow-2xl grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                             />
                          </div>
                      ) : (
                        <div className="absolute inset-4 md:inset-8 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 p-6 flex flex-col shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-700">
                          <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                          </div>
                          <div className="flex-1 flex flex-col items-center justify-center gap-5">
                             <div className="relative">
                                <div className={`w-32 h-32 rounded-full border border-dashed ${borderAccentClasses} flex items-center justify-center animate-spin-slow`}>
                                    <span className={`material-symbols-outlined text-5xl ${accentClasses} animate-pulse`}>
                                    {icon}
                                    </span>
                                </div>
                             </div>
                             <span className="text-gray-500 font-mono text-sm tracking-widest uppercase">Under Engineering</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </GlowCard>
                </motion.div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};



export default Portfolio;