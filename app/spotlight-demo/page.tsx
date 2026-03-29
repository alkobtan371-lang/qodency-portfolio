'use client';

import React from 'react';
import { GlowCard } from "@/components/ui/spotlight-card";
import { MoveRight, Cpu, Layers, Zap } from 'lucide-react';
import Image from 'next/image';

export default function SpotlightDemo() {
  const cards = [
    {
      title: "AI Development",
      description: "Building state-of-the-art agentic systems and Large Language Models integration.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      color: "blue" as const
    },
    {
      title: "UI/UX Design",
      description: "Crafting premium, high-performance interfaces that wow your users.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      color: "purple" as const
    },
    {
      title: "Fullstack Solutions",
      description: "Scalable backend architectures and blazing fast frontend engineering.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      color: "orange" as const
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-10 overflow-hidden">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            Premium <span className="text-blue-500">Spotlight</span> Cards
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Interact with the cards to see the dynamic glow effect that follows your pointer. 
            Perfect for highlighting features, services, or blog posts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, idx) => (
            <GlowCard 
              key={idx} 
              glowColor={card.color}
              size="lg"
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full h-40 mb-6 rounded-xl overflow-hidden border border-white/5">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  {card.icon}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                  Explore More <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}
