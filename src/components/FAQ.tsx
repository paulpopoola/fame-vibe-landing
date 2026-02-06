"use client";

import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "When does Vibe launch?",
    a: "We are launching our beta in February 2026. Join the waitlist to get early access and exclusive perks."
  },
  {
    q: "How much does it cost?",
    a: "Vibe is free to download and use! You only pay for the event tickets you purchase. There are no hidden subscription fees for general users."
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. We use industry-standard encryption and never sell your personal data. Your privacy and safety are our top priorities."
  },
  {
    q: "How does verification work?",
    a: "We use a combination of social media linking, government ID checks (for hosts), and community vouching to ensure everyone on the platform is real."
  },
  {
    q: "Is this just for Lagos?",
    a: "For now, yes! We are laser-focused on perfecting the experience in Lagos before expanding to other major African cities."
  },
  {
    q: "What makes Vibe different from other apps?",
    a: "Most apps just sell tickets. Vibe is about the people. We help you see who's going, make connections before the event, and ensure a safer, more social night out."
  },
  {
    q: "Can I host events on Vibe?",
    a: "Yes! We will be opening up tools for promoters and hosts soon. Contact us if you're interested in being a launch partner."
  },
  {
    q: "What events will be on Vibe?",
    a: "Everything from exclusive club nights and boat cruises to underground raves, house parties, and cultural festivals."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          Questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] via-[#FF6B00] to-[#EC4899]">Answered.</span>
        </h2>
        <p className="text-white/60 text-lg">
          Everything you need to know about Vibe
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="text-white font-bold text-lg">{faq.q}</span>
              <ChevronDown 
                className={`text-[#FFB800] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-white/70 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-white/60">
        Still have questions? <a href="mailto:hello@vibe.ng" className="text-[#FFB800] hover:underline">Email us at hello@vibe.ng</a>
      </div>
    </section>
  );
}
