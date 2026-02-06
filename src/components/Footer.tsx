import { Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2026 Fame Hub HQ. All rights reserved. Powered by vibes</p>
        <p>A <span className="text-[#FFB800]">Golden Fame Entertainment</span> initiative</p>
      </div>
    </footer>
  );
}