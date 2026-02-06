
"use client";

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    instagram: "",
    frequency: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase logic will go here
    console.log("Form submitted", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Left Column */}
       {/* Left Column */}
<div className="flex-1 w-full max-w-2xl z-10 text-center lg:text-left">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-[#FFB800]/20 to-[#FF6B00]/20 border border-[#FFB800]/30"
  >
    <span className="text-white font-medium text-sm">✨ Coming Soon</span>
  </motion.div>

  <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-extrabold leading-[0.9] tracking-tight mb-6">
    <span className="block text-white">Let's Get</span>
    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899]">
      The Vibe
    </span>
    <span className="block text-white">Started</span>
  </h1>

  <p className="text-white/70 text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0">
    Connect with your vibe. Discover the hottest events. Meet people who actually show up. Your crew, your events, your city.
  </p>

  <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">
      <div className="bg-[#FFB800] p-1 rounded-full text-black">
        <Check size={12} strokeWidth={4} />
      </div>
      <span className="text-white font-medium">QR Ticketing</span>
    </div>
    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">
       <div className="bg-[#FF6B00] p-1 rounded-full text-white">
        <Check size={12} strokeWidth={4} />
      </div>
      <span className="text-white font-medium">Verified Profiles</span>
    </div>
    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm whitespace-nowrap">
       <div className="bg-[#EC4899] p-1 rounded-full text-white">
        <Check size={12} strokeWidth={4} />
      </div>
      <span className="text-white font-medium">Real Connections</span>
    </div>
  </div>
</div>

        {/* Right Column - Waitlist Form */}
        <div className="flex-1 w-full max-w-md z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-br from-[#FFB800] via-[#FF6B00] to-[#EC4899]"
          >
            <div className="bg-[#050505]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 h-full">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Join the Vibelist</h3>
                <p className="text-white/60 text-sm">First 100 people get free upcoming event  tickets + limited vibe pass</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Full Name *" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number *" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address *" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">@</span>
                    <input 
                      type="text" 
                      name="instagram"
                      placeholder="Instagram Handle" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <select 
                    name="frequency"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 focus:outline-none focus:border-[#FF6B00] transition-colors appearance-none"
                    value={formData.frequency}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="bg-[#050505] text-white/40">How often do you go out?</option>
                    <option value="weekly" className="bg-[#050505]">Weekly</option>
                    <option value="monthly" className="bg-[#050505]">Monthly</option>
                    <option value="occasionally" className="bg-[#050505]">Occasionally</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899] text-white font-bold text-lg hover:opacity-90 transition-opacity mt-2"
                >
                  Join the Vibelist →
                </button>
              </form>

              <p className="text-white/30 text-xs mt-4 text-center">
                By joining, you agree to receive updates about Fame Hub HQ.
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-[#FFB800]">
                <Star size={14} fill="#FFB800" />
                <span className="text-sm font-medium">Early Bird Rewards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}