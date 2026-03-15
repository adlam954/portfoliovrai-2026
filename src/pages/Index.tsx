import  E5Section  from "@/components/portfolio/E5Section";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { TechWatchSection } from "@/components/portfolio/TechWatchSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";
import { personalInfo } from "@/data/portfolio-data";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | {personalInfo.title}</title>
        <meta name="description" content={personalInfo.tagline} />
        <meta property="og:title" content={`${personalInfo.name} | Portfolio`} />
        <meta property="og:description" content={personalInfo.tagline} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechWatchSection />
        <E5Section />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
