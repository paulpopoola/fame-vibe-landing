"use client";

import { motion } from "motion/react";
import { Check, Star } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";



export function Hero() {
  // Initialize ALL fields with empty strings (not undefined)
  const [formData, setFormData] = useState({
    name: "",           // Changed from fullName to match your input
    phone: "",
    email: "",
    instagram: "",
    frequency: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            instagram: formData.instagram,
            frequency: formData.frequency,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) throw error;

      // Success!
      setSubmitStatus({
        type: "success",
        message: "🎉 You're on the vibe list! let's get the vibe started"
      });
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        instagram: "",
        frequency: ""
      });

      console.log("Successfully added to waitlist:", data);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
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
                <p className="text-white/60 text-sm">First 100 people get free upcoming event tickets + limited vibe pass</p>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-4 rounded-xl ${
                    submitStatus.type === "success" 
                      ? "bg-green-500/20 border border-green-500/30 text-green-400" 
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Name *" 
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number *" 
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                      disabled={isSubmitting}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-8 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FF6B00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      value={formData.instagram}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <select 
                    name="frequency"
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/90 focus:outline-none focus:border-[#FF6B00] transition-colors appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
                    value={formData.frequency}
                    onChange={handleChange}
                  >
                    <option value="" disabled className="bg-[#050505] text-white/40">What's your favorite vibe?</option>
                    <option value="rave-party" className="bg-[#050505]">Rave Party</option>
                    <option value="boat-cruise" className="bg-[#050505]">Boat Cruise</option>
                    <option value="house-party" className="bg-[#050505]">House Party</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899] text-white font-bold text-lg hover:opacity-90 transition-opacity mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join the Vibelist →"}
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