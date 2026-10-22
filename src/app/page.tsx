import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveVisitorActivity from "@/components/LiveVisitorActivity";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import EducationExperience from "@/components/EducationExperience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF2E6] text-[#0F172A] selection:bg-[#FF7B82] selection:text-white">
      <Navbar />
      <Hero />
      <LiveVisitorActivity />
      <ProjectsSection />
      <SkillsMatrix />
      <EducationExperience />
      <ContactSection />
      <Footer />
    </main>
  );
}
