'use client';

import { useEffect, useCallback, useRef } from "react";

export default function ParticlesBG() {
  const containerRef = useRef<HTMLDivElement>(null);

  const initParticles = useCallback((isDark: boolean) => {
    // cleanup old canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    // Adjusting colors to match project's Emerald/Cyan theme
    const colors = {
      particles: "#a8ff78", // Emerald Green
      lines: "#4af8e3",     // Cyan
      accent: "#10b981",    // Darker Emerald
    };

    // @ts-ignore
    if (window.particlesJS) {
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 15 : 60; // Significantly reduced for mobile

      // @ts-ignore
      window.particlesJS("particles-js", {
        particles: {
          number: { value: particleCount, density: { enable: true, value_area: 1200 } }, // Reduced density for performance
          color: { value: colors.particles },
          shape: { type: "circle", stroke: { width: 0, color: colors.accent } },
          opacity: {
            value: 0.3, // Subtle opacity
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1 },
          },
          size: {
            value: 2,
            random: true,
            anim: { enable: true, speed: 1, size_min: 1 },
          },
          line_linked: {
            enable: true,
            distance: 200,
            color: colors.lines,
            opacity: 0.15,
            width: 1,
          },
          move: { 
            enable: true, 
            speed: 1.5, 
            direction: "none",
            random: true, 
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 250, line_linked: { opacity: 0.4 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load script only if not already present
    if (!document.getElementById("particles-script")) {
      const script = document.createElement("script");
      script.id = "particles-script";
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        initParticles(true);
      };
    } else {
      initParticles(true);
    }

    // Adjust visibility based on scroll to hide in Hero
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = window.innerHeight * 0.8; // Approximate hero height
        if (scrollY < heroHeight) {
          containerRef.current.style.opacity = "0";
        } else {
          containerRef.current.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initParticles]);

  return (
    <div
      ref={containerRef}
      id="particles-js"
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none transition-opacity duration-1000 bg-transparent"
      style={{ opacity: 0 }}
    />
  );
}
