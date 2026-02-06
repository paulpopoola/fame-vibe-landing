"use client";

import { Instagram, Twitter } from "lucide-react";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 backdrop-blur-md bg-[#050505]/70"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB800] via-[#FF6B00] to-[#EC4899] flex items-center justify-center">
          <span className="text-white font-bold text-xl">FH</span>
        </div>
        <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Fame Hub HQ</span>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white">
          <Instagram size={20} />
        </a>
        <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white">
          <Twitter size={20} />
        </a>
      </div>
    </motion.nav>
  );
}
