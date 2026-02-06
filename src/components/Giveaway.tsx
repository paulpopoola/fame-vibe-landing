"use client";

import { motion } from "motion/react";
import { Ticket, Calendar, Sparkles, Users, Gift, Trophy, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export function Giveaway() {
  // Countdown timer to February 14th
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-02-14T00:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 max-w-[1440px] mx-auto relative">
      {/* Attention-grabbing pulse effect */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/10 via-[#EC4899]/10 to-[#FFB800]/10 rounded-[3rem] blur-3xl"
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#FF6B00]/50 shadow-2xl shadow-[#FF6B00]/20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0a0a0a]">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00] rounded-full blur-[150px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EC4899] rounded-full blur-[150px]" 
          />
        </div>

        <div className="relative z-10 p-8 md:p-16">
          
          {/* Top Badge */}
          <div className="flex justify-center mb-8">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899] shadow-lg shadow-[#FF6B00]/30"
            >
              <Zap size={20} className="text-white" fill="white" />
              <span className="text-white font-black tracking-wide text-sm uppercase">🔥 Limited Time Giveaway 🔥</span>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1] tracking-tight">
                WIN VIP ACCESS TO
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#EC4899] to-[#FFB800] mt-2">
                  ESCAPE ROOM PARTY
                </span>
              </h2>

              {/* Urgency Indicators */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="text-[#FFB800]" size={24} />
                  <span className="text-white font-bold text-lg">Event Countdown</span>
                </div>
                <div className="flex gap-4 justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#FF6B00] tabular-nums">{timeLeft.days}</div>
                    <div className="text-white/60 text-xs uppercase font-bold">Days</div>
                  </div>
                  <div className="text-white/40 text-4xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#EC4899] tabular-nums">{timeLeft.hours}</div>
                    <div className="text-white/60 text-xs uppercase font-bold">Hours</div>
                  </div>
                  <div className="text-white/40 text-4xl font-bold">:</div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-[#FFB800] tabular-nums">{timeLeft.minutes}</div>
                    <div className="text-white/60 text-xs uppercase font-bold">Mins</div>
                  </div>
                </div>
              </div>

             
             

              {/* CTA Button */}
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899] text-white font-black text-xl hover:shadow-2xl hover:shadow-[#FF6B00]/50 transition-all shadow-lg shadow-[#FF6B00]/30"
              >
                🎉 JOIN VIBE LIST TO ENTER NOW 🎉
              </motion.button>
              
              <p className="text-white/40 text-sm mt-4">
                ⚡ Winners announced Feb 10th • No purchase necessary
              </p>
            </div>

            {/* Right Visual - Actual Flyer */}
            <div className="relative flex-shrink-0">
              <motion.div 
                animate={{ 
                  rotate: [2, -2, 2],
                  y: [0, -10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-72 sm:w-96"
              >
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#EC4899] rounded-[2rem] blur-2xl opacity-60" />
                
                {/* Actual Flyer Image */}
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#FF6B00]/40 border-4 border-white/10">
                  <img 
                    src="/escaperoom.png" 
                    alt="Escape Room Party Flyer - Win VIP Tickets"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-20 h-20 rounded-full border-4 border-[#FFB800] opacity-40"
              />
              <motion.div 
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-[#EC4899] opacity-40 blur-md"
              />
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}