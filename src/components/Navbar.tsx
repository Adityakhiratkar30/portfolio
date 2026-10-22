"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { personalData } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Activity } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Live Telemetry", href: "#telemetry" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Technical Matrix", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[#FAF2E6]/95 backdrop-blur-md border-b border-[#E2D7C5]"
          : "bg-[#FAF2E6] border-b border-[#E2D7C5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark */}
          <Link
            href="#overview"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-[#581C87] text-[#FAF2E6] flex items-center justify-center font-mono text-sm font-bold rounded-lg shadow-sm">
              AK
            </div>
            <div>
              <span className="font-mono text-xs tracking-wider uppercase text-[#0F172A] font-bold block">
                {personalData.name}
              </span>
              <span className="font-mono text-[10px] text-[#64748B] tracking-wider block uppercase">
                {personalData.institution.split(" ")[0]} CS / Class 2026
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[#475569] hover:text-[#581C87] hover:bg-[#FFF9F0] transition-colors rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs text-[#0F172A] bg-[#FFF9F0] border border-[#E2D7C5] hover:bg-[#F2E5D0] transition-colors rounded-lg font-medium shadow-sm"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-mono text-xs text-white bg-[#581C87] hover:bg-[#4C1D95] transition-colors rounded-lg font-medium shadow-sm"
            >
              <span>Initiate Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#475569] hover:text-[#0F172A] hover:bg-[#FFF9F0] border border-[#E2D7C5] rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF2E6] border-b border-[#E2D7C5] px-4 pt-3 pb-5 space-y-2 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-[#475569] hover:text-[#581C87] hover:bg-[#FFF9F0] rounded-md font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E2D7C5] flex flex-col gap-2">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 bg-[#FFF9F0] text-[#0F172A] border border-[#E2D7C5] rounded-lg"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center px-3 py-2 bg-[#581C87] text-white rounded-lg font-medium"
            >
              <span>Initiate Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
