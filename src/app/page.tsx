import type { Metadata } from "next";
import AboutSection from "@/app/components/AboutSection";
import ContactSection from "@/app/components/ContactSection";
import HeroSection from "@/app/components/HeroSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsSection from "@/app/components/SkillsSection";

export const metadata: Metadata = {
  title: "Álvaro García — Full-Stack Developer",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
