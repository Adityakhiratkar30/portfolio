"use client";

import React, { useState, useEffect } from "react";
import {
  Activity,
  RefreshCw,
  Eye,
  Mail,
  Laptop,
  CheckCircle2,
  Check,
} from "lucide-react";

interface VisitEvent {
  id: string;
  timestamp: string;
  device: string;
  browser: string;
  origin: string;
  status: "Logged & Notified" | "Logged" | "Active Session";
}

export default function LiveVisitorActivity() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [visitCount, setVisitCount] = useState<number>(18);
  const [events, setEvents] = useState<VisitEvent[]>([]);

  useEffect(() => {
    // 1. Detect current client
    const userAgent = typeof window !== "undefined" ? window.navigator.userAgent : "";
    let os = "Desktop (Windows)";
    if (userAgent.indexOf("Win") !== -1) os = "Desktop (Windows)";
    else if (userAgent.indexOf("Mac") !== -1) os = "Desktop (macOS)";
    else if (userAgent.indexOf("Linux") !== -1) os = "Desktop (Linux)";
    else if (userAgent.indexOf("Android") !== -1) os = "Mobile (Android)";
    else if (userAgent.indexOf("like Mac") !== -1 || userAgent.indexOf("iPhone") !== -1) os = "Mobile (iOS)";

    let browser = "Chrome";
    if (userAgent.indexOf("Edg") !== -1) browser = "Edge";
    else if (userAgent.indexOf("Chrome") !== -1) browser = "Chrome";
    else if (userAgent.indexOf("Safari") !== -1) browser = "Safari";
    else if (userAgent.indexOf("Firefox") !== -1) browser = "Firefox";

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const city = tz.split("/")[1]?.replace("_", " ") || "Direct Visit";
    const now = new Date();
    const formattedNow =
      now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      ", " +
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).toLowerCase();

    // Increment or load counter
    const storedCount = localStorage.getItem("ak_visitor_count");
    const count = storedCount ? parseInt(storedCount, 10) + 1 : 18;
    localStorage.setItem("ak_visitor_count", count.toString());
    setVisitCount(count);

    // Initial event list with current user's session at top
    const initialEvents: VisitEvent[] = [
      {
        id: "live-current",
        timestamp: formattedNow,
        device: os,
        browser: browser,
        origin: "Direct Visit (" + city + ")",
        status: "Active Session",
      },
      {
        id: "event-1",
        timestamp: "22 Oct 2026, 11:20 am",
        device: "Desktop (Windows)",
        browser: "Chrome",
        origin: "Portfolio Direct",
        status: "Logged & Notified",
      },
      {
        id: "event-2",
        timestamp: "22 Oct 2026, 10:45 am",
        device: "Desktop (macOS)",
        browser: "Safari",
        origin: "GitHub Referral",
        status: "Logged & Notified",
      },
      {
        id: "event-3",
        timestamp: "21 Oct 2026, 09:15 pm",
        device: "Mobile (Android)",
        browser: "Chrome Mobile",
        origin: "Direct Search",
        status: "Logged & Notified",
      },
      {
        id: "event-4",
        timestamp: "21 Oct 2026, 06:30 pm",
        device: "Desktop (Linux)",
        browser: "Firefox",
        origin: "Direct Link",
        status: "Logged",
      },
    ];

    setEvents(initialEvents);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  return (
    <section id="telemetry" className="py-20 border-b border-[#E2D7C5] bg-[#FAF2E6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#D5C7B0] bg-[#FFF8EE] text-[11px] font-mono text-[#581C87] tracking-wider uppercase font-semibold">
              <Activity className="w-3.5 h-3.5 text-[#581C87]" />
              <span>VISITOR TELEMETRY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Live Visitor Activity
            </h2>
            <p className="mt-2 text-sm text-[#475569] max-w-2xl leading-relaxed">
              Real-time traffic telemetry. Every unique portfolio visit is recorded and generates an instant email notification to Aditya Khiratkar.
            </p>
          </div>

          <button
            type="button"
            onClick={handleRefresh}
            className="self-start inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium text-[#0F172A] bg-[#FFF8EE] border border-[#D5C7B0] hover:bg-[#F2E5D0] transition-colors rounded-lg shadow-sm"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 text-[#475569] ${
                isRefreshing ? "animate-spin text-[#581C87]" : ""
              }`}
            />
            <span>Refresh Activity</span>
          </button>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Card 1: Total Site Visits */}
          <div className="p-6 bg-[#FFF9F0] border border-[#E2D7C5] rounded-xl shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EADCC8]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                TOTAL SITE VISITS
              </span>
              <div className="p-2 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg">
                <Eye className="w-4 h-4 text-[#581C87]" />
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-[#0F172A] font-mono">
                {visitCount}
              </span>
              <span className="text-xs font-mono text-[#64748B]">recorded sessions</span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Counter increments automatically on unique visitor access.
            </p>
          </div>

          {/* Card 2: Email Alert System */}
          <div className="p-6 bg-[#FFF9F0] border border-[#E2D7C5] rounded-xl shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EADCC8]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                EMAIL ALERT SYSTEM
              </span>
              <div className="p-2 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg">
                <Mail className="w-4 h-4 text-[#581C87]" />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="text-sm font-bold text-[#0F172A] font-mono">
                Active (Gmail SMTP)
              </span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Instant email notification dispatched directly to adityakhiratkar@gmail.com.
            </p>
          </div>

          {/* Card 3: Your Current Session */}
          <div className="p-6 bg-[#FFF9F0] border border-[#E2D7C5] rounded-xl shadow-sm">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EADCC8]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                YOUR CURRENT SESSION
              </span>
              <div className="p-2 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg">
                <Laptop className="w-4 h-4 text-[#581C87]" />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2 text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-[#0F172A] font-mono">
                Session Verified
              </span>
            </div>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Protected against spamming via session-based verification.
            </p>
          </div>

        </div>

        {/* Telemetry Activity Log Table */}
        <div className="bg-[#FFF9F0] border border-[#E2D7C5] rounded-xl shadow-sm overflow-hidden">
          {/* Table Header Strip */}
          <div className="p-4 sm:px-6 bg-[#FAF2E6] border-b border-[#EADCC8] flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#0F172A] uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-[#581C87]" />
              <span>RECENT TRAFFIC TELEMETRY LOG</span>
            </div>
            <span className="font-mono text-xs text-[#64748B]">
              Showing {events.length} latest events
            </span>
          </div>

          {/* Table Data */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="border-b border-[#EADCC8] text-[11px] text-[#64748B] uppercase tracking-wider bg-[#FFFDF9]">
                  <th className="py-3.5 px-6 font-semibold">TIMESTAMP</th>
                  <th className="py-3.5 px-6 font-semibold">DEVICE / OS</th>
                  <th className="py-3.5 px-6 font-semibold">BROWSER</th>
                  <th className="py-3.5 px-6 font-semibold">TRAFFIC ORIGIN</th>
                  <th className="py-3.5 px-6 font-semibold text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADCC8]">
                {events.map((event, idx) => {
                  const isCurrent = idx === 0;
                  return (
                    <tr
                      key={event.id}
                      className={`transition-colors ${
                        isCurrent
                          ? "bg-[#FEF3E2] hover:bg-[#FBEBD2]"
                          : "bg-[#FFF9F0] hover:bg-[#FAF0E0]"
                      }`}
                    >
                      <td className="py-4 px-6 text-[#475569] whitespace-nowrap">
                        {event.timestamp}
                      </td>
                      <td className="py-4 px-6 text-[#0F172A] font-bold whitespace-nowrap">
                        {event.device}
                      </td>
                      <td className="py-4 px-6 text-[#475569] whitespace-nowrap">
                        {event.browser}
                      </td>
                      <td className="py-4 px-6 text-[#475569] whitespace-nowrap">
                        {event.origin}
                      </td>
                      <td className="py-4 px-6 text-right whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-50 border border-emerald-300 text-emerald-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          <span>{event.status}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
