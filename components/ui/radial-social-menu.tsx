"use client";
import React, { useEffect, useState } from "react";
import { Mail, MapPin, Globe } from "lucide-react";

// ─── أيقونات مخصصة لوسائل التواصل ───
const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const RadialSocialMenu: React.FC = () => {
  // قائمة أيقونات التواصل الخاصة بـ Qodency
  const icons = [
    { icon: <FacebookIcon size={20} />, href: "#", color: "hover:text-blue-400 hover:border-blue-400" },
    { icon: <InstagramIcon size={20} />, href: "#", color: "hover:text-pink-500 hover:border-pink-500" },
    { icon: <XIcon size={20} />, href: "#", color: "hover:text-white hover:border-white" },
    { icon: <Mail size={20} />, href: "mailto:hello@qodency.com", color: "hover:text-[#a8ff78] hover:border-[#a8ff78]" },
    { icon: <TikTokIcon size={20} />, href: "#", color: "hover:text-[#ff0050] hover:border-[#ff0050]" },
    { icon: <Globe size={20} />, href: "#", color: "hover:text-[#c799ff] hover:border-[#c799ff]" },
  ];

  const radius = 100; // نصف القطر (حجم المدار)
  const [angleOffset, setAngleOffset] = useState(0);
  const [mounted, setMounted] = useState(false);

  // أنيميشن الدوران المستمر السلس
  useEffect(() => {
    setMounted(true);
    let animationFrame: number;
    const animate = () => {
      setAngleOffset((prev) => prev + 0.003); // سرعة الدوران
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-64 h-64 z-20">
      
      {/* المركز (Hub) - شعار Qodency يضيء */}
      <div className="absolute z-10 flex items-center justify-center w-20 h-20 rounded-full bg-[#0a0a0a] border border-[#a8ff78]/30 shadow-[0_0_30px_rgba(168,255,120,0.2)]">
        <span className="material-symbols-outlined text-[#a8ff78] text-4xl animate-pulse">
          terminal
        </span>
        {/* النبض الدائري خلف المركز */}
        <div className="absolute inset-0 rounded-full bg-[#a8ff78]/10 animate-ping opacity-50"></div>
      </div>

      {/* خط المدار (Orbit Ring) */}
      <div
        className="absolute rounded-full border border-dashed border-white/10 pointer-events-none"
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      />

      {/* الأيقونات الدوارة (Satellites) - تظهر فقط بعد التحميل في المتصفح لمنع خطأ الـ Hydration */}
      {mounted && icons.map((item, index) => {
        const angle = (index / icons.length) * 2 * Math.PI + angleOffset;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        return (
          <a
            key={index}
            href={item.href}
            className={`absolute flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 text-gray-400 shadow-lg hover:scale-110 transition-all duration-300 z-20 backdrop-blur-md ${item.color}`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};