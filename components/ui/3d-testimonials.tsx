"use client";
import React, { ComponentPropsWithoutRef, useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [contentSize, setContentSize] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentSize(vertical ? contentRef.current.offsetHeight : contentRef.current.offsetWidth);
    }
  }, [children, vertical]);

  useEffect(() => {
    if (contentSize > 0) {
      const durationStr = getComputedStyle(document.documentElement).getPropertyValue('--duration') || '40s';
      const duration = parseFloat(durationStr);
      const gapStr = getComputedStyle(document.documentElement).getPropertyValue('--gap') || '1rem';
      const gap = parseFloat(gapStr) * 16; 

      const totalSize = contentSize + gap;
      
      // حل خطأ TypeScript بإجبار النوع (Type Casting)
      const animateParams: any = {
        [vertical ? 'y' : 'x']: reverse ? [0, totalSize] : [0, -totalSize],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      };

      controls.start(animateParams);
    }
  }, [controls, contentSize, vertical, reverse]);

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        'group flex overflow-hidden p-2 [--gap:1rem] gap-(--gap) relative will-change-transform',
        { 'flex-row': !vertical, 'flex-col': vertical },
        className
      )}
      onMouseEnter={() => pauseOnHover && controls.stop()}
      onMouseLeave={() => pauseOnHover && contentSize > 0 && controls.start({
        [vertical ? 'y' : 'x']: reverse ? [0, contentSize + 16] : [0, -(contentSize + 16)],
        transition: { duration: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--duration') || '40s'), ease: "linear", repeat: Infinity, repeatType: "loop" }
      } as any)}
    >
      <motion.div
        ref={contentRef}
        animate={controls}
        className={cn('flex shrink-0 will-change-transform', {
          'flex-row gap-(--gap)': !vertical,
          'flex-col gap-(--gap)': vertical,
        })}
      >
        {children}
      </motion.div>
      
      {Array.from({ length: repeat - 1 }, (_, i) => (
        <motion.div
          key={i}
          animate={controls}
          className={cn('flex shrink-0 will-change-transform', {
            'flex-row gap-(--gap)': !vertical,
            'flex-col gap-(--gap)': vertical,
          })}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}