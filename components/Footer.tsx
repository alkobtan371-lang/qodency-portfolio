"use client";
import React from "react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { RadialSocialMenu } from "@/components/ui/radial-social-menu"; // استدعاء المدار

function Footer() {
  const footerLinks = [
    {
      title: "عن Qodency",
      links: [
        { label: "رؤيتنا الهندسية", href: "#" },
        { label: "فريق العمل", href: "#" },
        { label: "المنهجية التقنية", href: "#" },
        { label: "الوظائف", href: "#" },
      ],
    },
    {
      title: "روابط سريعة",
      links: [
        { label: "الأسئلة الشائعة", href: "#" },
        { label: "الدعم الفني", href: "#" },
        { label: "ابدأ مشروعك", href: "#", pulse: true },
      ],
    },
  ];

  return (
    <footer className="bg-TRANSPARENT relative rounded-t-[3rem] border-t border-white/5 overflow-hidden mt-8 z-20">
      <div className="max-w-7xl mx-auto px-8 md:px-14 pt-14 pb-8 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12" dir="rtl">
          
          {/* قسم العلامة التجارية (أخذ 4 أعمدة) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-[#a8ff78] text-3xl font-extrabold material-symbols-outlined">
                terminal
              </span>
              <span className="text-white text-3xl font-black font-headline tracking-tighter italic">QODENCY</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 font-headline mt-4">
              نحن نهندس البنى التحتية الرقمية، ونبني أنظمة سحابية قابلة للتوسع للعيادات، المدارس، والمؤسسات الضخمة بقوة وثبات.
            </p>
          </div>

          {/* روابط الفوتر (أخذ 4 أعمدة) */}
          <div className="md:col-span-4 flex justify-around">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white text-lg font-bold mb-6 font-headline">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label} className="relative w-fit">
                      <a href={link.href} className="text-gray-400 hover:text-[#a8ff78] transition-colors font-headline text-sm block pr-2">
                        {link.label}
                      </a>
                      {link.pulse && (
                        <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-1.5 h-1.5 rounded-full bg-[#a8ff78] animate-pulse"></span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* المدار الشعاعي لوسائل التواصل (أخذ 4 أعمدة) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center -mt-8">
            <h4 className="text-white text-lg font-bold font-headline mb-4 z-30 bg-TRANSPARENT px-4">
               ابق متصلاً بنظامنا
            </h4>
            {/* استدعاء المدار هنا! */}
            <RadialSocialMenu />
          </div>

        </div>

        <hr className="border-t border-white/10 my-8" />

        <div className="flex justify-center items-center text-sm" dir="rtl">
          <p className="text-gray-500 font-mono">
            &copy; {new Date().getFullYear()} QODENCY. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>

      {/* تأثير النص التفاعلي الضخم من الخطوة السابقة */}
      <div className="lg:flex hidden h-64 -mt-20 -mb-10 pointer-events-auto z-50 relative select-none w-full justify-center">
        <div className="w-full max-w-5xl">
          <TextHoverEffect text="QODENCY" className="z-50" />
        </div>
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default Footer;