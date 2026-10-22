"use client";

import { useState } from "react";
import { projectsData } from "@/data/portfolioData";
import {
  ArrowUpRight,
  GitBranch,
  Layers,
  Cpu,
  MapPin,
  Clock,
  Truck,
  Database,
  Lock,
  Workflow,
} from "lucide-react";

export default function ProjectsSection() {
  const [activeRouteOptTab, setActiveRouteOptTab] = useState<
    "architecture" | "cvrptw" | "regulations" | "groq"
  >("architecture");

  const [activeTenderTab, setActiveTenderTab] = useState<
    "lifecycle" | "readmodel" | "storage"
  >("lifecycle");

  const routeOpt = projectsData.find((p) => p.id === "routeopt")!;
  const tenderBlock = projectsData.find((p) => p.id === "tenderblock")!;

  return (
    <section id="projects" className="py-24 border-b border-[#E2D7C5] bg-[#FAF2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2D7C5] gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#581C87] mb-2 font-bold">
              ENGINEERING CENTERPIECE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A]">
              Featured Technical Implementations
            </h2>
          </div>
          <p className="font-mono text-xs text-[#475569] max-w-md">
            Production-oriented architectures solving non-trivial computational problems: 
            capacitated vehicle routing algorithms, municipal regulation enforcement, and decentralized smart contract state machines.
          </p>
        </div>

        {/* Project 1: RouteOpt */}
        <div className="mb-20 bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl shadow-sm overflow-hidden">
          {/* Card Meta Header */}
          <div className="p-6 border-b border-[#EADCC8] bg-[#FAF2E6]/60 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span className="px-3 py-1 bg-[#581C87] text-white font-bold rounded-md">
                  01 / OPERATIONS RESEARCH & AI
                </span>
                <span className="text-[#CBD5E1]">·</span>
                <span className="text-[#475569] font-medium">Urban Freight Routing</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#0F172A]">
                {routeOpt.title}
              </h3>
              <p className="text-sm font-mono text-[#475569] mt-1">
                {routeOpt.subtitle}
              </p>
            </div>

            <a
              href={routeOpt.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold text-[#0F172A] bg-[#FFFDF9] border border-[#D5C7B0] hover:bg-[#F2E5D0] transition-colors rounded-lg shadow-sm"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#581C87]" />
              <span>Inspect Sparsh566/RouteOpt</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
            </a>
          </div>

          {/* Project Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Problem & Engineering Solution */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-2 font-semibold">
                  The Problem Space
                </h4>
                <p className="text-sm text-[#0F172A] leading-relaxed bg-[#FFFDF9] p-4 border border-[#E2D7C5] rounded-xl shadow-inner">
                  {routeOpt.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-2 font-semibold">
                  System Architecture & Solution
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {routeOpt.solution}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-3 font-semibold">
                  Key Technical Specifications
                </h4>
                <ul className="space-y-2.5 font-mono text-xs text-[#0F172A]">
                  {routeOpt.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#581C87] mt-0.5 font-bold">»</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#EADCC8]">
                <div className="font-mono text-[11px] text-[#64748B] uppercase mb-2 font-semibold">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {routeOpt.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#FFFDF9] border border-[#E2D7C5] rounded-md font-mono text-xs text-[#0F172A] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive System Architecture Viewer */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-2 flex items-center justify-between font-semibold">
                <span>Interactive Architecture Console</span>
                <span className="text-[#581C87]">[OR-TOOLS / GROQ]</span>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg mb-4 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveRouteOptTab("architecture")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeRouteOptTab === "architecture"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  Pipeline
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRouteOptTab("cvrptw")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeRouteOptTab === "cvrptw"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  CVRPTW
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRouteOptTab("regulations")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeRouteOptTab === "regulations"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  Municipal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRouteOptTab("groq")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeRouteOptTab === "groq"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  Groq LLM
                </button>
              </div>

              {/* Tab Display Screen */}
              <div className="flex-1 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl p-5 font-mono text-xs shadow-sm">
                {activeRouteOptTab === "architecture" && (
                  <div className="space-y-4">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // SYSTEM DISPATCH PIPELINE
                    </div>
                    <pre className="text-[11px] text-[#0F172A] leading-relaxed overflow-x-auto whitespace-pre p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
{`[ Dispatch Web UI (Leaflet Map + Transit Controls) ]
                     │
                     ▼
       [ FastAPI Core REST Orchestrator ]
                     │
       ┌─────────────┼──────────────┐
       ▼             ▼              ▼
[ CVRPTW Solver ] [ Traffic Base ] [ Groq AI Simulator ]
  (OR-Tools)      (MMRDA / PMC)     (gpt-oss-120b)
       │
       ▼
[ OSRM / Haversine Distance Matrix Generator ]`}
                    </pre>
                    <p className="text-[#475569] text-[11px] leading-relaxed">
                      Orchestrates freight requests by calculating distance matrices, applying municipal time windows, executing OR-Tools solver constraints, and streaming transit polylines to the Leaflet UI.
                    </p>
                  </div>
                )}

                {activeRouteOptTab === "cvrptw" && (
                  <div className="space-y-3">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // CAPACITATED VEHICLE ROUTING WITH TIME WINDOWS
                    </div>
                    <div className="space-y-2 text-[11px]">
                      <div className="p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold block mb-1">
                          Delivery Van (LCV - Tata Ace / Dost)
                        </span>
                        <div className="text-[#475569]">
                          Payload: 1,200 kg · Clearance: 1.9 m · Exempt from urban peak-hour bans.
                        </div>
                      </div>
                      <div className="p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold block mb-1">
                          Freight Truck (MCV/HCV - Tata 407 / Eicher)
                        </span>
                        <div className="text-[#475569]">
                          Payload: 4,500 kg · Clearance: 3.1 m · Restricted during municipal peak windows.
                        </div>
                      </div>
                    </div>
                    <p className="text-[#475569] text-[11px]">
                      Features embedded greedy heuristic fallback for instant fallback during serverless executions.
                    </p>
                  </div>
                )}

                {activeRouteOptTab === "regulations" && (
                  <div className="space-y-3">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // MUNICIPAL ROAD RESTRICTION ENGINE
                    </div>
                    <ul className="space-y-2 text-[11px] text-[#475569]">
                      <li className="p-2.5 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold">Morning Peak Heavy Ban: </span>
                        08:00 AM to 11:30 AM (MMRDA / Pune PMC guidelines).
                      </li>
                      <li className="p-2.5 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold">Evening Peak Heavy Ban: </span>
                        05:00 PM to 09:30 PM (urban corridors).
                      </li>
                      <li className="p-2.5 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold">Flyover Gantries: </span>
                        2.5m height barrier detection rerouting heavy trucks to surface roads.
                      </li>
                      <li className="p-2.5 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold">Regulatory Fine Guard: </span>
                        Calculates penalty risk under Sections 115 & 116 of MV Act (₹20,000 fine avoidance).
                      </li>
                    </ul>
                  </div>
                )}

                {activeRouteOptTab === "groq" && (
                  <div className="space-y-3">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // GROQ AI WHAT-IF DISRUPTION SIMULATOR
                    </div>
                    <div className="p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg text-[11px] text-[#0F172A] space-y-1">
                      <div className="text-[#64748B]">Model: gpt-oss-120b via Groq Cloud</div>
                      <div className="text-[#0F172A] font-bold pt-1">
                        Scenario: Urban Monsoon Flash Flood / Arterial Flyover Block
                      </div>
                      <p className="text-[#475569] pt-1 italic">
                        &quot;Reroute Freight Truck T-407 via Eastern Expressway service lane; switch pending delivery window 4 to Delivery Van LCV-1 to bypass flyover waterlogging before 17:00 peak entry restriction.&quot;
                      </p>
                    </div>
                    <p className="text-[#475569] text-[11px]">
                      Outputs 3-sentence actionable guidance to dispatchers and drivers, handling breakdowns, toll delays, and sudden cargo shifts in real time.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Metric Strip */}
              <div className="grid grid-cols-4 gap-2 mt-4 font-mono text-[11px]">
                {routeOpt.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg shadow-sm">
                    <div className="text-[#64748B] text-[10px] uppercase truncate font-semibold">{m.label}</div>
                    <div className="text-[#0F172A] font-bold truncate">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Project 2: TenderBlock */}
        <div className="bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl shadow-sm overflow-hidden">
          {/* Card Meta Header */}
          <div className="p-6 border-b border-[#EADCC8] bg-[#FAF2E6]/60 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 font-mono text-xs">
                <span className="px-3 py-1 bg-[#581C87] text-white font-bold rounded-md">
                  02 / WEB3 & DISTRIBUTED SYSTEMS
                </span>
                <span className="text-[#CBD5E1]">·</span>
                <span className="text-[#475569] font-medium">Flow Blockchain & Smart Contracts</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase text-[#0F172A]">
                {tenderBlock.title}
              </h3>
              <p className="text-sm font-mono text-[#475569] mt-1">
                {tenderBlock.subtitle}
              </p>
            </div>

            <a
              href={tenderBlock.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold text-[#0F172A] bg-[#FFFDF9] border border-[#D5C7B0] hover:bg-[#F2E5D0] transition-colors rounded-lg shadow-sm"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#581C87]" />
              <span>Inspect Sparsh566/TenderBlock</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B]" />
            </a>
          </div>

          {/* Project Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-2 font-semibold">
                  The Problem Space
                </h4>
                <p className="text-sm text-[#0F172A] leading-relaxed bg-[#FFFDF9] p-4 border border-[#E2D7C5] rounded-xl shadow-inner">
                  {tenderBlock.problem}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-2 font-semibold">
                  System Architecture & Solution
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {tenderBlock.solution}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-3 font-semibold">
                  Core Architectural Capabilities
                </h4>
                <ul className="space-y-2.5 font-mono text-xs text-[#0F172A]">
                  {tenderBlock.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#581C87] mt-0.5 font-bold">»</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#EADCC8]">
                <div className="font-mono text-[11px] text-[#64748B] uppercase mb-2 font-semibold">
                  Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {tenderBlock.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#FFFDF9] border border-[#E2D7C5] rounded-md font-mono text-xs text-[#0F172A] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Blockchain Architecture */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="font-mono text-xs uppercase tracking-wider text-[#64748B] mb-2 flex items-center justify-between font-semibold">
                <span>Decentralized Architecture Specs</span>
                <span className="text-[#581C87]">[FLOW / CADENCE]</span>
              </div>

              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg mb-4 font-mono text-[11px]">
                <button
                  type="button"
                  onClick={() => setActiveTenderTab("lifecycle")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeTenderTab === "lifecycle"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  On-Chain
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTenderTab("readmodel")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeTenderTab === "readmodel"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  Indexer Sync
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTenderTab("storage")}
                  className={`py-2 px-1 text-center rounded transition-colors ${
                    activeTenderTab === "storage"
                      ? "bg-[#581C87] text-white font-bold shadow-sm"
                      : "text-[#475569] hover:text-[#0F172A]"
                  }`}
                >
                  IPFS Vault
                </button>
              </div>

              {/* Tab Display Screen */}
              <div className="flex-1 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl p-5 font-mono text-xs shadow-sm">
                {activeTenderTab === "lifecycle" && (
                  <div className="space-y-4">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // CADENCE SMART CONTRACT STATE MACHINE
                    </div>
                    <pre className="text-[11px] text-[#0F172A] leading-relaxed overflow-x-auto whitespace-pre p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
{`[ Admin Creates Tender ]
       │  (Signs transaction with Flow FCL)
       ▼
[ Tender Published on Flow Chain ]
       │  (Transaction hash generated & emitted)
       ▼
[ Bidder Connects Wallet ]
       │  (Cryptographic signature & bid validation)
       ▼
[ Automated Settlement Trigger ]
       │  (Lowest valid bid awarded trustlessly)
       ▼
[ Status: SETTLED + Experience Points Credited ]`}
                    </pre>
                    <p className="text-[#475569] text-[11px] leading-relaxed">
                      All state alterations execute on Flow blockchain first to ensure cryptographic immutability and eliminate administrative collusion.
                    </p>
                  </div>
                )}

                {activeTenderTab === "readmodel" && (
                  <div className="space-y-3">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // HYBRID READ-MODEL INDEXER
                    </div>
                    <ul className="space-y-2 text-[11px] text-[#475569]">
                      <li className="p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold block mb-1">
                          Sub-Second Queries:
                        </span>
                        Direct blockchain queries can be high-latency. The Node.js/Express indexer listens for confirmed transactions and mirrors states to MySQL.
                      </li>
                      <li className="p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg">
                        <span className="text-[#0F172A] font-bold block mb-1">
                          Full-Text Tender Discovery:
                        </span>
                        Provides instant paginated searching, status filtering (active / settled), and bidder history without querying the chain continuously.
                      </li>
                    </ul>
                  </div>
                )}

                {activeTenderTab === "storage" && (
                  <div className="space-y-3">
                    <div className="text-[#581C87] font-bold pb-2 border-b border-[#EADCC8]">
                      // IPFS & WEB3.STORAGE PERSISTENCE
                    </div>
                    <div className="p-3 bg-[#FAF2E6] border border-[#E2D7C5] rounded-lg text-[11px] text-[#0F172A] space-y-2">
                      <div className="text-[#64748B]">
                        Protocol: InterPlanetary File System (IPFS)
                      </div>
                      <p className="text-[#475569]">
                        Tender specifications, requirement manifests, and bidder submissions are hashed into immutable CIDs (Content Identifiers) using Web3.Storage.
                      </p>
                      <div className="text-[#581C87] font-bold pt-1">
                        CID State: Cryptographically Verifiable & Tamper-Evident
                      </div>
                    </div>
                    <p className="text-[#475569] text-[11px]">
                      Ensures that RFP specifications cannot be modified post-issuance by any party.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Metric Strip */}
              <div className="grid grid-cols-4 gap-2 mt-4 font-mono text-[11px]">
                {tenderBlock.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg shadow-sm">
                    <div className="text-[#64748B] text-[10px] uppercase truncate font-semibold">{m.label}</div>
                    <div className="text-[#0F172A] font-bold truncate">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
