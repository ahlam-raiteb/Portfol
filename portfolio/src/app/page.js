import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main class="flex min-h-screen  min-w-screen flex-col bg-BackGround ">
      <Navbar />
      <div class="flex flex-col container mt-14 mx-auto px-12 py-4 w-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}