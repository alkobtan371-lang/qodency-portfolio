import React, { ReactNode } from 'react';

export interface GlowCardProps {
  children?: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const colorMap = {
  blue: 'rgba(56, 189, 248, 0.1)',
  purple: 'rgba(168, 85, 247, 0.1)',
  green: 'rgba(74, 222, 128, 0.1)',
  orange: 'rgba(251, 146, 60, 0.1)',
  red: 'rgba(248, 113, 113, 0.1)',
};

const borderColorMap = {
  blue: 'rgba(56, 189, 248, 0.2)',
  purple: 'rgba(168, 85, 247, 0.2)',
  green: 'rgba(74, 222, 128, 0.2)',
  orange: 'rgba(251, 146, 60, 0.2)',
  red: 'rgba(248, 113, 113, 0.2)',
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const baseStyles: React.CSSProperties = {
    backgroundColor: 'rgba(10, 10, 10, 0.65)', // Dark static background
    boxShadow: `inset 0 0 40px ${colorMap[glowColor]}, 0 8px 32px 0 rgba(0, 0, 0, 0.6)`,
    border: `1px solid ${borderColorMap[glowColor]}`,
  };

  if (width !== undefined) {
    baseStyles.width = typeof width === 'number' ? `${width}px` : width;
  }
  if (height !== undefined) {
    baseStyles.height = typeof height === 'number' ? `${height}px` : height;
  }

  return (
    <div
      style={baseStyles}
      className={`
        ${getSizeClasses()}
        ${!customSize && sizeMap[size] ? 'aspect-[3/4]' : ''}
        rounded-2xl 
        relative 
        grid 
        grid-rows-[1fr_auto] 
        p-5 
        gap-4 
        transition-all
        duration-300
        overflow-hidden
        ${className}
      `}
    >
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  );
};

export { GlowCard };
