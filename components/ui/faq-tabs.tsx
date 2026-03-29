'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQProps {
  title?: string;
  subtitle?: string;
  categories: Record<string, string>;
  faqData: Record<string, { question: string; answer: string }[]>;
  className?: string;
}

// Main reusable FAQ component
export const FAQ: React.FC<FAQProps> = ({ 
  title = "الأسئلة الشائعة",
  subtitle = "إجابات على استفساراتك الهندسية",
  categories,
  faqData,
  className,
  ...props 
}) => {
  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section 
      dir="rtl"
      className={cn(
        "relative overflow-hidden bg-transparent px-4 py-24 text-white font-headline",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs 
        categories={categories}
        selected={selectedCategory} 
        setSelected={setSelectedCategory} 
      />
      <FAQList 
        faqData={faqData}
        selected={selectedCategory} 
      />
    </section>
  );
};

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center mb-16 px-6">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-4 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text font-mono text-sm font-bold uppercase tracking-widest text-transparent"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-6xl font-black text-center leading-tight tracking-tight"
    >
      {title}
    </motion.h2>
    {/* Decorative Background Glow */}
    <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 z-0 h-[400px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
  </div>
);

const FAQTabs = ({ 
  categories, 
  selected, 
  setSelected 
}: { 
  categories: Record<string, string>; 
  selected: string; 
  setSelected: (key: string) => void 
}) => (
  <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 px-4">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={cn(
          "relative overflow-hidden whitespace-nowrap rounded-full border px-6 py-2.5 text-sm font-bold transition-all duration-300",
          selected === key
            ? "border-emerald-500/50 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            : "border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
        )}
      >
        <span className="relative z-10">{label}</span>
        <AnimatePresence>
          {selected === key && (
            <motion.span
              layoutId="faq-tab-pill"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 z-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-md"
            />
          )}
        </AnimatePresence>
      </button>
    ))}
  </div>
);

const FAQList = ({ 
  faqData, 
  selected 
}: { 
  faqData: Record<string, { question: string; answer: string }[]>; 
  selected: string 
}) => (
  <div className="mx-auto mt-16 max-w-3xl px-4 relative z-10">
    <AnimatePresence mode="wait">
      <motion.div
        key={selected}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {faqData[selected]?.map((faq, index) => (
          <FAQItem key={`${selected}-${index}`} {...faq} />
        ))}
      </motion.div>
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      className={cn(
        "rounded-2xl border transition-all duration-500 overflow-hidden",
        isOpen ? "bg-white/[0.03] border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)]" : "bg-white/[0.02] border-white/5"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 md:p-6 text-right transition-colors"
      >
        <span
          className={cn(
            "text-lg font-bold transition-colors duration-300",
            isOpen ? "text-emerald-400" : "text-white"
          )}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors",
            isOpen ? "bg-emerald-500 border-emerald-500 text-black" : "border-white/10 text-gray-500"
          )}
        >
          <Plus className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-400 leading-relaxed text-base border-t border-white/5 pt-4 mt-2">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
