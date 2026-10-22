"use client";

import { personalData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF2E6] text-[#475569] font-mono text-xs border-t border-[#E2D7C5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E2D7C5]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#581C87] inline-block rounded-sm"></span>
              <span className="font-bold text-[#0F172A] uppercase tracking-wider text-sm">
                {personalData.name}
              </span>
              <span className="text-[#CBD5E1]">/</span>
              <span>Symbiosis Institute of Technology</span>
            </div>
            <p className="text-[11px] text-[#64748B]">
              Engineered with Next.js App Router, TypeScript, and Tailwind CSS. Built on the authentic warm cream palette with zero emojis.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] hover:text-[#581C87] font-semibold transition-colors"
            >
              GitHub (@Adityakhiratkar30)
            </a>
            <span className="text-[#CBD5E1]">·</span>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0F172A] hover:text-[#581C87] font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#CBD5E1]">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#581C87] hover:text-[#4C1D95] font-bold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            Copyright 2026 {personalData.name}. All verified project code hosted publicly under MIT/Open licenses.
          </div>
          <div>
            Color Swatch: [Deep Royal Purple, Slate Grey, Warm Cream, Coral Accent]
          </div>
        </div>
      </div>
    </footer>
  );
}
