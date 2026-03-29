"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavTab {
  label: string;
  href: string;
}

const tabs: NavTab[] = [
  { label: "الخدمات", href: "#services" },
  { label: "آلية العمل", href: "#how-it-works" },
  { label: "أعمالنا", href: "#portfolio" },
  { label: "الهندسة والفريق", href: "#about" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "الأسئلة", href: "#faq" },
];

export const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <ul
      dir="rtl"
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
          const { width } = selectedTab.getBoundingClientRect();
          setPosition({
            left: selectedTab.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className="relative mx-auto flex w-fit rounded-full border border-white/10 bg-white/5 backdrop-blur-md p-1"
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.href}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          href={tab.href}
          setPosition={setPosition}
          onClick={() => setSelected(i)}
        >
          {tab.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  href: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
  onClick: () => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, href, setPosition, onClick }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || typeof ref === "function" || !ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer"
      >
        <a
          href={href}
          className="block px-4 py-2 text-sm font-headline text-white relative z-10 whitespace-nowrap transition-colors duration-300"
        >
          {children}
        </a>
      </li>
    );
  }
);

Tab.displayName = "Tab";

const Cursor = ({
  position,
}: {
  position: { left: number; width: number; opacity: number };
}) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
    />
  );
};
