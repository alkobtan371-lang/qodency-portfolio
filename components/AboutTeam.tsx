"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Zap } from "lucide-react";
import Image from "next/image";
import { GlowCard } from "./ui/spotlight-card";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const VISION_CARDS = [
  {
    icon: <Terminal className="w-6 h-6 text-emerald-400" />,
    title: "هندسة النخبة",
    description: "نحن لا نكتب أكواداً فحسب، بل نبني هياكل برمجية معقدة تدير المؤسسات الضخمة بكفاءة تامة.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "نظم فائقة الأداء",
    description: "كل ميكرو-ثانية تفرق. أنظمتنا مصممة لتكون الأسرع في معالجة البيانات وبأقل زمن استجابة ممكن.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "أمن البنى التحتية",
    description: "الحماية ليست ميزة إضافية، بل هي جوهر البناء. تشفير وحماية تبدأ من أول سطر برمجي.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Eng. Mohammad K. Ibrahim",
    role: "Founder & Full Stack Developer",
    bio: "خبير في هندسة معماريات SaaS الضخمة وبناء الأنظمة السحابية الموزعة وفائقة الأداء، متخصص في تحويل الرؤى الرقمية المعقدة إلى حقيقة ملموسة.",
    image: "/images/portrait.jpg", // Placeholder - Update with real image
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export default function AboutTeam() {
  return (
    <section id="about" className="relative py-24 pb-32 overflow-hidden bg-transparent selection:bg-emerald-500/30">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-emerald-900/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" dir="rtl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wider text-neutral-300 uppercase">الرؤية والرسالة</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-headline"
          >
            نهندس البناء الرقمي.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 mt-2 font-headline">
              لا نكتفي بكتابة الكود.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto font-headline"
          >
            في Qodency، ننظر إلى تطوير البرمجيات من خلال عدسة الهندسة المعمارية الصارمة. 
            نحن نبني أنظمة قوية، قابلة للتوسع، وآمنة مصممة لإعادة تعريف معايير الصناعة والتحول الرقمي.
          </motion.p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {VISION_CARDS.map((card, idx) => (
             <GlowCard
                key={idx}
                glowColor={idx === 0 ? "green" : idx === 1 ? "blue" : "blue"}
                customSize
                className="p-0 border-none rounded-2xl overflow-hidden bg-transparent"
             >
                <div className="p-8 h-full relative z-10 text-right group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300 mr-0">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-headline">{card.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm font-headline">{card.description}</p>
                </div>
             </GlowCard>
          ))}
        </div>

        {/* The Architects Header */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white font-headline">المهندسون المعماريون</h3>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto font-headline">العقول الهندسية التي تصمم وترسم أنظمة المستقبل.</p>
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <GlowCard
              key={idx}
              glowColor="green"
              customSize
              className="w-full sm:w-[350px] p-0 border-none rounded-2xl overflow-hidden"
            >
              <div className="h-full w-full bg-black/40 backdrop-blur-xl p-6 relative flex flex-col items-center text-center group">
                
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-emerald-500/30 transition-colors duration-300 mb-6 relative">
                  <div className="w-full h-full bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center">
                      <span className="text-4xl text-neutral-600 font-bold">{member.name.charAt(0)}</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-emerald-400 font-medium text-sm mb-4">{member.role}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mb-8 flex-grow">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-auto relative z-20">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
}
