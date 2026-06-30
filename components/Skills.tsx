import { site } from "@/data/site";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Strengths">
      <div className="mb-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
          Core Strengths
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {site.strengths.map((s) => (
            <span
              key={s}
              className="rounded-xl border border-hair bg-surface px-3.5 py-2 text-sm text-ink"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
          Technical Skills
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {site.techSkills.map((cat) => (
            <div key={cat.group} className="rounded-2xl border border-hair bg-surface p-5">
              <p className="mb-2.5 font-serif font-semibold text-ink">{cat.group}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md bg-bg px-2.5 py-1 text-sm text-muted"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
            Certifications
          </h3>
          <ul className="space-y-2 text-ink/85">
            {site.certifications.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sage">
            Education
          </h3>
          <ul className="space-y-2 text-ink/85">
            {site.education.map((e) => (
              <li key={e} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
