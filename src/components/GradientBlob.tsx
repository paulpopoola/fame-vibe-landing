"use client";

import { motion } from "motion/react";

interface GradientBlobProps {
  color: string;
  className?: string;
  delay?: number;
}

export function GradientBlob({ color, className = "", delay = 0 }: GradientBlobProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.1, 0.2, 0.1], 
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}
