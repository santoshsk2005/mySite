import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-16 pt-16 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage">
            Hi, I&apos;m
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ink md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl font-serif text-xl text-ink md:text-2xl">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xl text-muted">{site.subTagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={site.resume}
              className="rounded-full border border-hair bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              Download résumé
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <a href={site.linkedin} className="hover:text-accent" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span aria-hidden>·</span>
            <a href={site.github} className="hover:text-accent" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span aria-hidden>·</span>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              Email
            </a>
            <span aria-hidden>·</span>
            <span>{site.location}</span>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="mx-auto h-56 w-56 overflow-hidden rounded-3xl border-4 border-surface bg-hair shadow-lg md:h-72 md:w-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.photo}
              alt={site.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        {site.quickFacts.map((f) => (
          <span
            key={f}
            className="rounded-full border border-hair bg-surface px-4 py-1.5 text-sm text-muted"
          >
            {f}
          </span>
        ))}
      </div>
    </section>
  );
}
