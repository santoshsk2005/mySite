import { site } from "@/data/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Connect />
      </main>
      <footer className="border-t border-hair py-8">
        <p className="mx-auto max-w-5xl px-5 text-sm text-muted">
          © {new Date().getFullYear()} {site.name} · Built with Next.js in Columbus, OH
        </p>
      </footer>
    </>
  );
}
