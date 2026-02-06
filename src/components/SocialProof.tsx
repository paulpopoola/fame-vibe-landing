"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

export function SocialProof() {
  return (
    <section className="relative py-20 px-6 border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Testimonial */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/20 to-[#FF6B00]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FF6B00] flex items-center justify-center text-white font-bold text-xl">
                GF
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Golden Fame</h4>
                <p className="text-white/60 text-sm">Founder, Golden Fame Entertainment</p>
              </div>
            </div>
            
            <blockquote className="text-white text-xl sm:text-2xl italic font-light leading-relaxed mb-8">
              "For years, I've seen the same problems at every event. People want to connect, but there's no easy way. So we are building Fame Hub HQ. This is my promise: every event will be better, every connection will be real, and nightlife will never be the same."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 pt-6 border-t border-white/10">
              <div className="flex-1 sm:text-center sm:border-r border-white/10 px-4 first:pl-0 last:border-0">
                <div className="text-[#FFB800] font-bold text-2xl">10,000+</div>
                <div className="text-white/50 text-sm">Party People</div>
              </div>
              <div className="flex-1 sm:text-center sm:border-r border-white/10 px-4 last:border-0">
                <div className="text-[#FF6B00] font-bold text-2xl">100+</div>
                <div className="text-white/50 text-sm">Events Hosted</div>
              </div>
              <div className="flex-1 sm:text-center px-4 last:pr-0">
                <div className="text-[#EC4899] font-bold text-2xl">12+ Years</div>
                <div className="text-white/50 text-sm">Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built by the people who throw the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-[#EC4899]">best parties</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            We are the pulse of the city. We are promoters, organizers, and party-goers who know exactly what nightlife needs because we live it every weekend.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFB800] to-[#FFB800]/50 flex items-center justify-center shrink-0">
                <Check size={16} className="text-black" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Trusted by Nightlife Community</h4>
                <p className="text-white/50">Partnered with the top clubs and promoters in VI, Lekki, and Ikeja.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF6B00]/50 flex items-center justify-center shrink-0">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Built for Vibers, by Vibers</h4>
                <p className="text-white/50">Designed specifically for the unique energy and logistics of our city.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#EC4899] to-[#EC4899]/50 flex items-center justify-center shrink-0">
                <Check size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1">Your Data is Safe</h4>
                <p className="text-white/50">Enterprise-grade security to protect your identity and payments.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
