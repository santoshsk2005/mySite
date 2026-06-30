import { site } from "@/data/site";
import Section from "./Section";

export default function Connect() {
  return (
    <Section id="connect" title="Connect">
      <div className="rounded-3xl border border-hair bg-surface p-8 text-center md:p-12">
        <p className="mx-auto max-w-xl font-serif text-2xl text-ink">
          Let&apos;s talk about how to modernize your data and AI.
        </p>
        <p className="mt-3 text-muted">
          Always happy to connect with leaders, recruiters, and fellow builders.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Email me
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-hair px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-hair px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            GitHub
          </a>
          <a
            href={site.resume}
            className="rounded-full border border-hair px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
          >
            Résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
