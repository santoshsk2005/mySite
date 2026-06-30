import { site } from "@/data/site";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {site.projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-hair bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-accent">
                {p.name}
              </h3>
              <span className="rounded-full bg-bg px-2.5 py-1 text-xs text-muted">
                {p.lang}
              </span>
            </div>
            <p className="mt-2 text-ink/80">{p.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-accent">
              View on GitHub →
            </span>
          </a>
        ))}
      </div>
      <a
        href={site.github}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block text-sm font-medium text-muted hover:text-accent"
      >
        See all repositories on GitHub →
      </a>
    </Section>
  );
}
