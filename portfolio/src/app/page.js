import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-BackGround ">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <ProjectsSection /> */}
        <AboutSection />
      </div>
    </main>
  );
}