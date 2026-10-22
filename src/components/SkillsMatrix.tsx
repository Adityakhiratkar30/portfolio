"use client";

import { skillCategories } from "@/data/portfolioData";
import { Layers, Code, Cpu, Wrench } from "lucide-react";

export default function SkillsMatrix() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-[#581C87]" />;
      case 1:
        return <Layers className="w-4 h-4 text-[#581C87]" />;
      case 2:
        return <Cpu className="w-4 h-4 text-[#581C87]" />;
      case 3:
      default:
        return <Wrench className="w-4 h-4 text-[#581C87]" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-b border-[#E2D7C5] bg-[#FAF2E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E2D7C5] gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#581C87] mb-2 font-bold">
              TECHNICAL COMPETENCIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0F172A]">
              Systems & Technologies Matrix
            </h2>
          </div>
          <p className="font-mono text-xs text-[#475569] max-w-md">
            Concrete technical toolset mapped by engineering layer. 
            Focused on verifiable implementations, algorithmic constraints, and distributed consensus rather than arbitrary skill percentages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="bg-[#FFF9F0] border border-[#E2D7C5] rounded-2xl p-6 sm:p-7 shadow-sm relative"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EADCC8]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-lg shadow-sm">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-bold uppercase text-[#0F172A]">
                      {category.title}
                    </h3>
                    <p className="font-mono text-[11px] text-[#64748B]">
                      Layer 0{idx + 1}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#581C87] font-semibold">
                  [{category.skills.length} Items]
                </span>
              </div>

              <p className="font-mono text-xs text-[#475569] mb-5">
                {category.description}
              </p>

              {/* Skills List with Engineering Context */}
              <div className="space-y-3 font-mono text-xs">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 bg-[#FFFDF9] border border-[#E2D7C5] rounded-xl hover:border-[#D5C7B0] transition-colors shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[#0F172A] font-bold">
                        {skill.name}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#475569] leading-relaxed">
                      {skill.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
