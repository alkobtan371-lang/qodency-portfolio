"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-300);

  // Use springs for smooth follower effect
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // Check if hovering over interactive elements
    const isInteractive = 
      target.closest('button') || 
      target.closest('a') || 
      target.closest('[role="button"]') ||
      target.classList.contains('group');
      
    setIsHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    // Hide default cursor globally
    document.body.style.cursor = "none";
    
    // Set cursor to none for all interactive elements via CSS
    const style = document.createElement("style");
    style.innerHTML = `
      * { cursor: none !important; }
      @media (max-width: 768px) {
        .custom-cursor-container { display: none !important; }
        * { cursor: auto !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
      document.head.removeChild(style);
    };
  }, [handleMouseMove, handleMouseOver]);

  if (!mounted) return null;

  return (
    <div className="custom-cursor-container fixed inset-0 pointer-events-none z-[99999]">
      {/* 1. The main glowing ring (Follower) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
        }}
        className={`fixed top-[-20px] left-[-20px] w-10 h-10 border-2 rounded-full transition-colors duration-300 flex items-center justify-center
          ${isHovering ? 'border-[#06B6D4] bg-[#06B6D4]/10' : 'border-[#06B6D4]/40 bg-transparent'}
          ${!isVisible ? 'opacity-0' : 'opacity-100'}
        `}
      >
        <div className={`w-1 h-1 bg-[#06B6D4] rounded-full ${isHovering ? 'scale-0' : 'scale-100'} transition-transform duration-300`} />
      </motion.div>

      {/* 2. Secondary subtle pulse or trailing particles can go here */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
        }}
        className={`fixed top-[-4px] left-[-4px] w-2 h-2 bg-[#FACC15] rounded-full pointer-events-none shadow-[0_0_10px_#FACC15]
           ${!isVisible ? 'opacity-0' : 'opacity-100'} ${isHovering ? 'scale-[3] opacity-50' : 'scale-100'} 
           transition-all duration-300 z-10
        `}
      />
    </div>
  );
};

export default CustomCursor;
