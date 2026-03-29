"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GlowCard } from "./ui/spotlight-card";

// ─── Data ──────────────────────────────────────────────────────────────────
const testimonials = [
  { name: "د. أحمد الجبوري", username: "مدير مجمع الشفاء الطبي", body: "نظام ClinicAI الذي صممته Qodency استوعب 15 فرعاً لنا بدون أي تأخير في معالجة البيانات.", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "د. ياسمين طارق", username: "استشارية طبية", body: "سرعة الاستجابة في النظام حقيقية! السجلات الطبية تفتح في لمح البصر مقارنة بنظامنا القديم.", img: "https://randomuser.me/api/portraits/women/53.jpg" },
  { name: "د. فاطمة الزهراء", username: "إدارية مستشفى النور", body: "تصميم واجهة ClinicAI يسهل عمل الطاقم الطبي ويقلل الأخطاء الإدارية بشكل ملحوظ.", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "د. يوسف البصري", username: "مستثمر في القطاع الصحي", body: "Qodency تفهم احتياجات التوسع الطبي. هندسوا لنا بنية تحتية تتحمل ضغط مئات الحجوزات.", img: "https://randomuser.me/api/portraits/men/71.jpg" },
  { name: "د. مصطفى الخالدي", username: "رئيس قسم الأشعة", body: "النظام المستند إلى الميكروسيرفيسس يضمن لنا بقاء البيانات متاحة وآمنة 24/7.", img: "https://randomuser.me/api/portraits/men/62.jpg" },
  { name: "أ. سارة حسن", username: "مديرة مدارس الرؤية الحديثة", body: "البنية التحتية للنظام المدرسي قوية جداً. ربطنا الطلاب بالمعلمين في بيئة سحابية فائقة السرعة.", img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "أ. خالد السعدي", username: "CEO مجموعة تعليمية", body: "نظام Qodency التعليمي وفر علينا تكاليف صيانة الخوادم القديمة وزاد من كفاءة الإدارة.", img: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "أ. ليلى كريم", username: "رئيسة قسم الجودة التعليمية", body: "اللوحات القياسية لحظية تماماً، مما يسهل علينا اتخاذ القرارات القائمة على البيانات.", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "أ. عمر سامي", username: "مدير التقنية في مدرسة دولية", body: "التكامل مع أنظمة الدفع والحضور والغياب تم بسلاسة. فريق هندسي محترف.", img: "https://randomuser.me/api/portraits/men/36.jpg" },
  { name: "أ. هدى منصور", username: "استشارية EdTech", body: "واجهة المستخدم العربية مصممة بمعايير UX عالمية، مما سهل على المعلمين تبني النظام.", img: "https://randomuser.me/api/portraits/women/51.jpg" },
  { name: "م. علي العراقي", username: "CEO شركة خدمات لوجستية", body: "الاحترافية في كتابة الأكواد والتسليم في الموعد جعلتنا نعتمد عليهم في بناء نظام SaaS.", img: "https://randomuser.me/api/portraits/men/51.jpg" },
  { name: "عمر الدليمي", username: "مستثمر تقني", body: "مستوى الأمان والتشفير AES-256 الذي توفره Qodency يعطينا طمأنينة كاملة على البيانات.", img: "https://randomuser.me/api/portraits/men/33.jpg" },
  { name: "م. محمود صالح", username: "CTO شركة تكامل", body: "سهولة دمج الـ APIs المتعددة مع البنية التحتية التي صمموها مذهلة.", img: "https://randomuser.me/api/portraits/men/81.jpg" },
  { name: "ريم القيسي", username: "مديرة مالية", body: "Qodency لا تبني واجهات فقط، بل تبني أنظمة معالجة العمليات المالية المعقدة بأمان.", img: "https://randomuser.me/api/portraits/women/72.jpg" },
  { name: "حسن البغدادي", username: "مؤسس منصة E-commerce", body: "قدرة أنظمتهم على التوسع ساعدتنا في التعامل مع طفرات المواسم بدون أي توقف.", img: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "م. نور الهدى", username: "Ethical Hacker", body: "اختبرت أنظمة Qodency، ومستوى الحماية ضد الهجمات السيبرانية يتفوق على الكثير من المنافسين.", img: "https://randomuser.me/api/portraits/women/83.jpg" },
  { name: "بلال فاروق", username: "مدير مشاريع سحابية", body: "أداء الخوادم المستقر ونسبة الـ Uptime التي وعدونا بها 99.9% محققة بالكامل.", img: "https://randomuser.me/api/portraits/men/91.jpg" },
  { name: "م. زينب علي", username: "خبير ذكاء اصطناعي", body: "أنظمتهم مصممة لتكون AI-Ready، مما سهل علينا دمج نماذج التنبؤ الخاصة بنا.", img: "https://randomuser.me/api/portraits/women/94.jpg" },
  { name: "د. عصام النجار", username: "محاضر في هندسة البرمجيات", body: "أكواد Qodency مثال يحتذى به في النمطية وسهولة القراءة والصيانة.", img: "https://randomuser.me/api/portraits/men/65.jpg" },
  { name: "ليث سامي", username: "مدير شركة تسويق رقمي", body: "واجهاتهم الأمامية سريعة جداً، مما يحسن من تجربة المستخدم ويزيد معدلات التحويل.", img: "https://randomuser.me/api/portraits/men/21.jpg" },
];

// ─── Card ──────────────────────────────────────────────────────────────────
function TestimonialCard({
  img,
  name,
  username,
  body,
}: (typeof testimonials)[number]) {
  return (
    <GlowCard 
      glowColor="green" 
      customSize
      className="w-64 md:w-72 flex-shrink-0 border-none p-0"
    >
      <div className="p-4 md:p-5 h-full" dir="rtl">
        <div className="flex items-center gap-3 mb-3">
          <Avatar className="size-10 border border-[#a8ff78]/20 flex-shrink-0">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-[#1a1a1a] text-white text-xs">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0">
            <figcaption className="text-sm font-bold text-white truncate">
              {name}
            </figcaption>
            <p className="text-xs text-[#a8ff78]/65 truncate">{username}</p>
          </div>
        </div>
        <blockquote className="text-sm text-gray-400 leading-relaxed">
          {body}
        </blockquote>
      </div>
    </GlowCard>
  );
}

// ─── Smooth Column ─────────────────────────────────────────────────────────
// Uses requestAnimationFrame for buttery-smooth animation.
// Each column gets its own independent speed and direction.
// Cards are duplicated once (not 10×) to create the seamless loop.
function SmoothColumn({
  items,
  direction = "up",
  speed = 0.4,
}: {
  items: (typeof testimonials)[number][];
  direction?: "up" | "down";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pauseRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // We render items twice. The seamless point is at exactly half the
    // scrollHeight — when we reach it we snap back to 0 (up) or -half (down).
    const step = () => {
      if (!pauseRef.current) {
        const half = track.scrollHeight / 2;

        if (direction === "up") {
          posRef.current += speed;
          if (posRef.current >= half) posRef.current -= half;
          track.style.transform = `translateY(-${posRef.current}px)`;
        } else {
          posRef.current -= speed;
          if (posRef.current <= -half) posRef.current += half;
          track.style.transform = `translateY(${Math.abs(posRef.current)}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    // Start at mid-point for "down" columns so they don't all begin at 0
    if (direction === "down") {
      posRef.current = -(track.scrollHeight / 4);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [direction, speed]);

  return (
    <div
      className="relative overflow-hidden flex-shrink-0"
      style={{ height: "100%" }}
      onMouseEnter={() => { pauseRef.current = true; }}
      onMouseLeave={() => { pauseRef.current = false; }}
    >
      {/*
        FIX: will-change: transform tells the browser to promote this element
        to its own compositor layer, so the animation runs on the GPU without
        repainting other layers — eliminating jank.
      */}
      <div
        ref={trackRef}
        className="flex flex-col gap-4"
        style={{ willChange: "transform" }}
        dir="ltr"
      >
        {/* Original set */}
        {items.map((r, i) => (
          <TestimonialCard key={`a-${i}`} {...r} />
        ))}
        {/* Duplicate set — creates the seamless loop */}
        {items.map((r, i) => (
          <TestimonialCard key={`b-${i}`} {...r} />
        ))}
      </div>
    </div>
  );
}

// ─── Column config: 4 columns with staggered speeds ───────────────────────
// We split the testimonials into 4 slices and give each column its own
// speed so they don't all move in sync (which looks mechanical).
function buildColumns(all: typeof testimonials) {
  const half = Math.ceil(all.length / 2);
  const first = all.slice(0, half);
  const second = all.slice(half);
  // Interleave so adjacent columns feel independent
  const col1 = first.filter((_, i) => i % 2 === 0);
  const col2 = first.filter((_, i) => i % 2 !== 0);
  const col3 = second.filter((_, i) => i % 2 === 0);
  const col4 = second.filter((_, i) => i % 2 !== 0);
  return [col1, col2, col3, col4];
}

interface Testimonial {
  name: string;
  username: string;
  body: string;
  img: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function Testimonials({ testimonials: dynamicTestimonials }: TestimonialsProps) {
  const dataToUse = dynamicTestimonials && dynamicTestimonials.length > 0 ? dynamicTestimonials : testimonials;
  const [col1, col2, col3, col4] = buildColumns(dataToUse);

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-TRANSPARENT overflow-hidden flex flex-col items-center justify-center min-h-screen"
      dir="rtl"
    >
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16 relative z-20 px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#a8ff78] font-mono text-sm tracking-[0.2em] uppercase mb-4"
        >
          System Verification
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4"
        >
          ماذا يقول{" "}
          <span className="text-gray-500 font-light">الشركاء؟</span>
        </motion.h2>
      </div>

      {/*
        FIX: The 3-D container.
        - perspective is set on the container that holds the columns,
          not on a grandparent, so the transform is applied correctly.
        - overflow-hidden is on the tight wrapper, not on the section,
          so gradient fades clip properly.
        - Height is explicit so columns know how tall their viewport is.
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-6xl overflow-hidden z-10"
        style={{ height: "520px" }}
      >
        {/* 3-D tilt wrapper */}
        <div
          className="flex flex-row items-start gap-4 md:gap-5 w-full h-full"
          style={{
            transform:
              "perspective(900px) rotateX(22deg) rotateY(-12deg) rotateZ(8deg)",
            transformOrigin: "center center",
          }}
          dir="ltr"
        >
          {/* Column 1 — up, baseline speed */}
          <SmoothColumn items={col1} direction="up" speed={0.35} />

          {/* Column 2 — down, slightly faster */}
          <SmoothColumn items={col2} direction="down" speed={0.42} />

          {/* Column 3 — up, slowest — hidden on small screens */}
          <SmoothColumn
            items={col3}
            direction="up"
            speed={0.28}
          />

          {/* Column 4 — down, medium — hidden until lg */}
          <SmoothColumn
            items={col4}
            direction="down"
            speed={0.38}
          />
        </div>

        {/* Gradient fades — clip the edges cleanly */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 left-0  w-20 bg-gradient-to-r from-[#050505] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-20" />
      </motion.div>
    </section>
  );
}