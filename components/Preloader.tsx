"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [percent, setPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    
    // Progress counter
    let interval: any;
    const duration = 2500; // 2.5s for loading
    const intervalTime = 30; // ms
    const increments = 100 / (duration / intervalTime);

    interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // start the zoom in animation
          setTimeout(() => {
            setIsLoading(false);
            // Re-enable scrolling after animation finishes
            setTimeout(() => {
                document.body.style.overflow = "";
            }, 1000); 
          }, 800); // Delay before closing to allow zoom to play
          return 100;
        }
        return prev + increments;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo Container - will zoom into the Q */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: percent === 100 ? 150 : 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
            className="w-full max-w-lg px-8 relative"
            style={{ transformOrigin: "18.5% 50%" }} // Precise origin of the "Q" hole in the logo
          >
            {/* The Logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 220" style={{ direction: 'ltr' }} className="w-full h-full drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <g transform="translate(60, 50)">
                  <path d="M 40,10 L 80,10 L 110,40 L 110,80 L 80,110 L 40,110 L 10,80 L 10,40 Z" fill="none" stroke="#06B6D4" strokeWidth="12" strokeLinejoin="bevel"/>
                  <path d="M 35,45 L 55,60 L 35,75" fill="none" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M 65,75 L 85,75" fill="none" stroke="#FACC15" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M 95,95 L 115,115 L 135,100" fill="none" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round"/>
                </g>
                <text x="210" y="120" fontFamily="System-ui, -apple-system, sans-serif" fontSize="85" fontWeight="900" fill="#06B6D4">Qodency</text>
                <text x="215" y="155" fontFamily="System-ui, sans-serif" fontSize="16" fontWeight="700" letterSpacing="4">
                  <tspan fill="#FACC15" fontWeight="900" fontSize="18">{`{ }`}</tspan><tspan fill="#FFFFFF"> CONNECT YOUR SYSTEM</tspan>
                </text>
            </svg>
          </motion.div>

          {/* Loading Bar and Counter */}
          <motion.div 
             initial={{ opacity: 1, y: 0 }}
             animate={{ opacity: percent === 100 ? 0 : 1, y: percent === 100 ? 20 : 0 }}
             transition={{ duration: 0.3 }}
             className="absolute bottom-20 left-0 right-0 max-w-xs mx-auto flex flex-col items-center gap-4"
          >
            <div className="text-[#06B6D4] font-mono text-xl font-bold tracking-widest">
              {Math.min(Math.round(percent), 100)}%
            </div>
            {/* Progress Bar Track */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               {/* Progress Bar Fill */}
               <div 
                 className="h-full bg-gradient-to-r from-[#06B6D4] to-[#FACC15]"
                 style={{ width: `${Math.min(percent, 100)}%` }}
               />
            </div>
            <div className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">
               Initializing Core
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
