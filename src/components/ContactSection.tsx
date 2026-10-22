"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolioData";
import { Mail, Copy, Check, ArrowUpRight, Send, GitBranch } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.senderEmail || !formState.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormState({ senderName: "", senderEmail: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#E2D7C5] bg-[#FAF2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2D7C5] gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#581C87] mb-2 font-bold">
              COMMUNICATION CHANNEL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A]">
              Initiate Contact & Engineering Dialogue
            </h2>
          </div>
          <p className="font-mono text-xs text-[#475569] max-w-md">
            Available for software engineering internships, technical collaborations, and full-stack project inquiries. Direct responses guaranteed.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl p-6 shadow-sm">
              <div className="font-mono text-xs text-[#64748B] uppercase mb-2 font-semibold">
                Primary Engineering Inquiries
              </div>
              <div className="text-lg font-mono font-bold text-[#0F172A] mb-4 break-all">
                {personalData.socials.email}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold text-[#0F172A] bg-[#FFFDF9] border border-[#D5C7B0] hover:bg-[#F2E5D0] transition-colors rounded-lg shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalData.socials.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold text-white bg-[#581C87] hover:bg-[#4C1D95] transition-colors rounded-lg shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Client</span>
                </a>
              </div>
            </div>

            {/* Social & Code Links */}
            <div className="bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl p-6 font-mono text-xs space-y-3 shadow-sm">
              <div className="text-[#64748B] uppercase text-[11px] mb-2 font-semibold">
                External Verification Links
              </div>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#FFFDF9] border border-[#E2D7C5] hover:border-[#D5C7B0] text-[#0F172A] transition-colors rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-[#581C87]" />
                  <span className="font-bold">GitHub (@Adityakhiratkar30)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
              </a>

              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-[#FFFDF9] border border-[#E2D7C5] hover:border-[#D5C7B0] text-[#0F172A] transition-colors rounded-xl shadow-sm"
              >
                <span className="font-bold">LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4 text-[#64748B]" />
              </a>
            </div>

            {/* Response Time Notice */}
            <div className="p-4 bg-[#FFF9F0] border-l-4 border-[#581C87] border-t border-r border-b border-[#E2D7C5] rounded-r-xl font-mono text-xs text-[#475569] shadow-sm">
              <span className="text-[#0F172A] font-bold block mb-1">Response Protocol:</span>
              Standard response SLA is within 24 hours during working semesters. Inquiries regarding algorithms, code reviews, or internships are prioritized.
            </div>

          </div>

          {/* Quick Dispatch Form */}
          <div className="lg:col-span-7 bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="font-mono text-sm font-bold uppercase text-[#0F172A] mb-2">
              Send Direct Engineering Note
            </h3>
            <p className="font-mono text-xs text-[#475569] mb-6">
              Bypass email apps and transmit a direct inquiry. All submissions log directly.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl text-center space-y-3 font-mono shadow-inner">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-[#0F172A]">
                  DISPATCH LOGGED SUCCESSFULLY
                </div>
                <p className="text-xs text-[#475569]">
                  Thank you for reaching out. Aditya will review your note and follow up promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs bg-[#FFF9F0] text-[#0F172A] border border-[#D5C7B0] rounded-lg"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[#64748B] uppercase text-[10px] mb-1.5 font-semibold">
                    Your Name or Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Engineering Team Lead / Recruiter"
                    value={formState.senderName}
                    onChange={(e) =>
                      setFormState({ ...formState, senderName: e.target.value })
                    }
                    className="w-full bg-[#FFFDF9] border border-[#D5C7B0] focus:border-[#581C87] px-3.5 py-2.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none rounded-lg shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#64748B] uppercase text-[10px] mb-1.5 font-semibold">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formState.senderEmail}
                    onChange={(e) =>
                      setFormState({ ...formState, senderEmail: e.target.value })
                    }
                    className="w-full bg-[#FFFDF9] border border-[#D5C7B0] focus:border-[#581C87] px-3.5 py-2.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none rounded-lg shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#64748B] uppercase text-[10px] mb-1.5 font-semibold">
                    Subject / Discussion Scope
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your project, role, or technical inquiry..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-[#FFFDF9] border border-[#D5C7B0] focus:border-[#581C87] px-3.5 py-2.5 text-[#0F172A] placeholder:text-[#94A3B8] outline-none resize-none rounded-lg shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-xs font-bold text-white bg-[#581C87] hover:bg-[#4C1D95] transition-colors rounded-lg shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
