import type { Metadata } from "next";
import { GlobalBackground } from "@/components/ui/global-background";
import "./globals.css";

// إعدادات الـ SEO (تظهر في محرك بحث جوجل وعلامة تبويب المتصفح)
export const metadata: Metadata = {
  metadataBase: new URL('https://qodency.online'),
  title: "Qodency | هندسة البنى التحتية الرقمية",
  description: "نحن نهندس البنى التحتية الرقمية، ونبني أنظمة سحابية قابلة للتوسع للعيادات، المدارس، والمؤسسات الضخمة.",
  // تم توسيع الكلمات المفتاحية لتشمل الأخطاء الشائعة والبحث العام (مبرمج، شركة برمجة) لضمان الظهور
  keywords: [
    "تحول رقمي", "هندسة سحابية", "نظم طبية", "نظم تعليمية", "Qodency", "SaaS Iraq",
    "كودنسي", "كودنسي للبرمجيات", "Qodensy", "Qodency Iraq", "شركة برمجة في العراق",
    "مبرمج تطبيقات", "انشاء موقع الكتروني", "نظام عيادات طبية", "ClinicAI", "شركة تقنية"
  ],
  authors: [{ name: "Qodency Team" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Qodency | هندسة البنى التحتية الرقمية",
    description: "نحن نهندس البنى التحتية الرقمية، ونبني أنظمة سحابية قابلة للتوسع.",
    url: "https://qodency.online",
    siteName: "Qodency",
    images: [
      {
        url: "/og-image.png", // سنبقي على الصورة الاحترافية المولدة لأنها مصممة بقياسات المشاركة الاجتماعية
        width: 1200,
        height: 630,
        alt: "Qodency Digital Engineering",
      },
    ],
    locale: "ar_IQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qodency | Digital Infrastructure Engineering",
    description: "Engineering scalable cloud solutions for modern enterprises.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // كود الـ Schema لتعريف محركات البحث بالهوية المؤسسية لـ Qodency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Qodency",
    "alternateName": ["كودنسي", "Qodensy"],
    "url": "https://qodency.online",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "نحن نهندس البنى التحتية الرقمية، ونبني أنظمة سحابية قابلة للتوسع للعيادات، المدارس، والمؤسسات الضخمة.",
    "author": {
      "@type": "Organization",
      "name": "Qodency Team",
      "location": "Iraq"
    }
  };

  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        {/* إدراج الـ Schema بصيغة JSON-LD لرفع تصنيف الموقع في محركات البحث */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-transparent text-white overflow-x-hidden min-h-screen">

        {/* مكون الخلفية الحية - يعمل بصمت في أعمق طبقة */}
        <GlobalBackground />

        {/* محتوى الموقع بالكامل يوضع فوق الخلفية */}
        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}