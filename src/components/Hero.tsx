"use client";

import Image from "next/image";
import { personalData } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Activity } from "lucide-react";

export default function Hero() {
  return (
    <section id="overview" className="relative pt-28 pb-20 border-b border-[#E2D7C5] bg-[#FAF2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Operational Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 px-4 mb-10 bg-[#FFF9F0] border border-[#E2D7C5] rounded-xl font-mono text-xs shadow-sm">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF7B82] animate-pulse"></span>
            <span className="text-[#0F172A] font-bold tracking-wide">
              SYSTEM STATUS: ACTIVE
            </span>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-[#475569] font-medium">
              {personalData.institution} [B.Tech CSE]
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#475569]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#581C87]" />
              <span>Pune / Nagpur, MH</span>
            </span>
            <span className="hidden sm:inline text-[#CBD5E1]">/</span>
            <span className="hidden sm:inline">Graduation: 2026</span>
          </div>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-[11px] font-mono uppercase tracking-wider text-white bg-[#581C87] rounded-md font-semibold shadow-sm">
                Software Engineering & Systems
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0F172A] uppercase leading-[1.05] mb-6">
                Aditya Khiratkar
              </h1>
              
              <p className="text-lg sm:text-xl font-normal text-[#475569] leading-relaxed mb-6 max-w-2xl">
                Third-year Computer Science undergraduate at Symbiosis Institute of Technology. 
                Developing systems across vehicle routing optimization (CVRPTW), decentralized smart contract procurement, and high-performance full-stack architectures.
              </p>

              <div className="p-4 bg-[#FFF9F0] border-l-4 border-[#581C87] border-t border-r border-b border-[#E2D7C5] rounded-r-xl mb-8 font-mono text-xs text-[#334155] leading-relaxed max-w-2xl shadow-sm">
                <span className="text-[#0F172A] font-bold block mb-1">Architectural Philosophy:</span>
                Zero placeholder fluff. Focusing on mathematical constraints (Google OR-Tools), verifiable blockchain state transitions (Flow Cadence), and strict type contracts.
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold text-white bg-[#581C87] hover:bg-[#4C1D95] transition-colors rounded-lg shadow-sm"
              >
                <span>Inspect Technical Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#telemetry"
                className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold text-[#0F172A] bg-[#FFF9F0] border border-[#E2D7C5] hover:bg-[#F2E5D0] transition-colors rounded-lg shadow-sm"
              >
                <Activity className="w-4 h-4 text-[#581C87]" />
                <span>Live Telemetry</span>
              </a>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold text-[#475569] hover:text-[#0F172A] hover:bg-[#FFF9F0] transition-colors rounded-lg"
              >
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-[#E2D7C5] font-mono">
              {personalData.stats.map((stat, i) => (
                <div key={i} className="p-3 bg-[#FFF9F0] border border-[#E2D7C5] rounded-lg shadow-sm">
                  <div className="text-[10px] uppercase text-[#64748B] mb-1 font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-xs font-bold text-[#0F172A]">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Authentic Architectural Portrait Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FFF9F0] border border-[#E2D7C5] p-4 sm:p-5 rounded-2xl shadow-md">
              {/* Technical Card Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EADCC8] font-mono text-[11px] text-[#475569]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#581C87]" />
                  <span className="text-[#0F172A] font-bold">VERIFIED IDENTITY</span>
                </div>
                <span>SIT-CSE-2026</span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#FAF2E6] border border-[#E2D7C5] shadow-inner">
                <Image
                  src={personalData.avatarUrl}
                  alt="Aditya Khiratkar portrait at Symbiosis Institute of Technology"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#FFFDF9]/95 backdrop-blur-sm border-t border-[#E2D7C5] font-mono text-[11px] flex justify-between items-center text-[#475569]">
                  <span className="font-bold text-[#0F172A]">Aditya Khiratkar</span>
                  <span className="text-[#581C87] font-semibold">Symbiosis Institute of Technology</span>
                </div>
              </div>

              {/* Metadata Badges below image */}
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between items-center py-2 px-3 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg">
                  <span className="text-[#64748B]">Affiliation</span>
                  <span className="text-[#0F172A] font-bold">Symbiosis International (SIT)</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg">
                  <span className="text-[#64748B]">Primary Focus</span>
                  <span className="text-[#0F172A] font-bold">Systems & CVRPTW Optimization</span>
                </div>
                <div className="flex justify-between items-center py-2 px-3 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg">
                  <span className="text-[#64748B]">Repositories</span>
                  <span className="text-[#581C87] font-bold">RouteOpt / TenderBlock</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
