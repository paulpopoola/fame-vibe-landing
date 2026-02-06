"use client";

import { motion } from "motion/react";
import { Ticket, Search, UserCheck, MessageCircle, Calendar, Shield } from "lucide-react";

const features = [
  {
    icon: Ticket,
    title: "Instant Ticketing",
    desc: "No more bank transfer screenshots. Get your QR code instantly and breeze through the door.",
    gradient: "from-amber-400 to-orange-500",
    emoji: "🎟️"
  },
  {
    icon: Search,
    title: "Discover Your People",
    desc: "See who's going before you buy. Find your tribe and make sure the vibe is right.",
    gradient: "from-orange-500 to-red-500",
    emoji: "🔍"
  },
  {
    icon: UserCheck,
    title: "Verified Profiles",
    desc: "Real people only. Event check-ins verify active users so you know who you're meeting.",
    gradient: "from-pink-500 to-rose-500",
    emoji: "✅"
  },
  {
    icon: MessageCircle,
    title: "Pre-Event Connections",
    desc: "Message people before the event. Plan meetups and never walk into a party alone.",
    gradient: "from-emerald-400 to-teal-500",
    emoji: "💬"
  },
  {
    icon: Calendar,
    title: "All Events, One Place",
    desc: "Boat cruises, raves, house parties, and club nights. Curated for the best experience.",
    gradient: "from-orange-400 to-red-500",
    emoji: "🎉"
  },
  {
    icon: Shield,
    title: "Actually Safe",
    desc: "Not just checkboxes. Real verification and community reporting to keep the vibes immaculate.",
    gradient: "from-blue-500 to-indigo-600",
    emoji: "🔐"
  }
];

export function Features() {
  return (
    <section className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899]">Vibe</span>?
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          We're fixing everything that's broken about Lagos nightlife. Here's how.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
              {feature.emoji}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-white/60 leading-relaxed">{feature.desc}</p>
            
            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-3xl transition-colors pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899] text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
        >
          Join the Waitlist →
        </button>
      </div>
    </section>
  );
}
