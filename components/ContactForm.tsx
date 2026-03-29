'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, MessageSquare, CheckCircle, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('فشل في إرسال الرسالة');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact error:', error);
      setStatus('error');
      // Reset error after 5s to allow retry
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden bg-transparent" dir="rtl">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-mono text-sm uppercase tracking-[0.2em] mb-4"
          >
            Engineering Contact B2B
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            دعنا نبدأ <span className="text-gray-500">هندسة فكرتك</span>
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl font-headline max-w-2xl mx-auto">
            أرسل استفسارك وسيقوم فريقنا ببدء الدراسة التقنية لمشروعك خلال 24 ساعة.
          </p>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] rounded-[2.5rem] p-8 md:p-12"
        >
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">تم الإرسال بنجاح!</h3>
              <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-headline">
                وصلت رسالتك لفريق Qodency. سنتواصل معك عبر البريد info@qodency.online في أقرب وقت.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              >
                إرسال رسالة أخرى
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-headline">
              
              {/* Name field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 mr-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-500" /> الاسم بالكامل
                </label>
                <input 
                  required
                  placeholder="محمد علي"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                />
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 mr-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-500" /> البريد الإلكتروني
                </label>
                <input 
                  required
                  placeholder="name@company.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>

              {/* Phone field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 mr-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-emerald-500" /> رقم الهاتف (اختياري)
                </label>
                <input 
                  placeholder="+964..."
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 mr-2 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-emerald-500" /> نوع المشروع
                </label>
                <select 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 appearance-none transition-all"
                >
                  <option value="" className="bg-neutral-900">اختر نوع الخدمة...</option>
                  <option value="SaaS Engineering" className="bg-neutral-900">هندسة أنظمة SaaS</option>
                  <option value="UI/UX Engineering" className="bg-neutral-900">هندسة واجهات وتجربة مستخدم</option>
                  <option value="Cloud Infrastructure" className="bg-neutral-900">البنية التحتية السحابية</option>
                  <option value="Consultation" className="bg-neutral-900">استشارة تقنية</option>
                </select>
              </div>

              {/* Message field */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-400 mr-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-500" /> تفاصيل الفكرة
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="أخبرنا باختصار عن متطلبات مشروعك..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                />
              </div>

              {/* Error State */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:col-span-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center"
                  >
                    حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على info@qodency.online
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={cn(
                    "w-full group relative flex items-center justify-center gap-3 px-8 py-5 rounded-[1.8rem] bg-emerald-500 text-black font-black text-xl hover:bg-emerald-400 transition-all duration-500 shadow-[0_4px_30px_rgba(168,255,120,0.2)] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden",
                    status === 'loading' ? 'animate-pulse' : ''
                  )}
                >
                  {status === 'loading' ? (
                    "جاري الإرسال للهندسة..."
                  ) : (
                    <>
                      <span>ابدأ الرحلة التقنية</span>
                      <Send className="w-6 h-6 rotate-[21deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* Glowing background decor */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
