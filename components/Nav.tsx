import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hair bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-serif text-lg font-semibold text-ink">
          Santosh Kulkarni
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.resume}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Résumé
          </a>
        </div>
        <a
          href={site.resume}
          className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white md:hidden"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
