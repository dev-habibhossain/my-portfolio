import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectsAccordion from "@/components/ProjectsAccordion";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience limit={2} />
      <Skills />
      <ProjectsAccordion />
      <Reviews />
      <Contact />
    </>
  );
}
