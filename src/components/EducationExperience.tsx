"use client";

import { educationData } from "@/data/portfolioData";
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from "lucide-react";

export default function EducationExperience() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 border-b border-[#E2D7C5] bg-[#FAF2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2D7C5] gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#581C87] mb-2 font-bold">
              ACADEMIC FOUNDATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A]">
              Education & Campus Credentials
            </h2>
          </div>
          <p className="font-mono text-xs text-[#475569] max-w-md">
            Formal computer science engineering curriculum grounded in algorithmic rigor, computer architecture, systems design, and campus leadership.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-8 bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#EADCC8]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-3 py-1 bg-[#581C87] text-white font-mono text-xs font-bold rounded-md shadow-sm">
                    {edu.shortName}
                  </span>
                  <span className="font-mono text-xs text-[#64748B] font-medium">
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase text-[#0F172A]">
                  {edu.institution}
                </h3>
                <div className="text-sm font-mono text-[#581C87] font-semibold mt-1">
                  {edu.degree} in {edu.specialization}
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end font-mono text-xs text-[#64748B] space-y-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#581C87]" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#581C87]" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Coursework Modules */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#64748B] mb-4 font-semibold">
                <BookOpen className="w-4 h-4 text-[#581C87]" />
                <span>Core Academic Coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {edu.coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl flex items-center gap-2.5 text-[#0F172A] font-medium shadow-sm"
                  >
                    <span className="text-[#581C87] font-bold">#</span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Campus Responsibility Side Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl p-6 font-mono text-xs shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#EADCC8] text-[#0F172A] font-bold">
                <Award className="w-4 h-4 text-[#581C87]" />
                <span>CAMPUS LEADERSHIP</span>
              </div>
              
              <div className="space-y-3">
                <div className="p-3.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl shadow-sm">
                  <div className="text-[10px] uppercase text-[#64748B] mb-1 font-semibold">
                    Student Representative Council
                  </div>
                  <div className="text-xs font-bold text-[#0F172A] mb-1">
                    Sports Club Council Member
                  </div>
                  <p className="text-[11px] text-[#475569] leading-relaxed">
                    Contributing to campus athletics operations, tournament organizing, and university sports representation at SIT.
                  </p>
                </div>

                <div className="p-3.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl shadow-sm">
                  <div className="text-[10px] uppercase text-[#64748B] mb-1 font-semibold">
                    Engineering Cohort
                  </div>
                  <div className="text-xs font-bold text-[#0F172A] mb-1">
                    Class of 2026 (Semester 5 / 6)
                  </div>
                  <p className="text-[11px] text-[#475569] leading-relaxed">
                    Collaborating on peer software development teams, algorithmic problem solving, and distributed system prototypes.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
