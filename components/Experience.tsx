import { site } from "@/data/site";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8 border-l border-hair pl-6">
        {site.experience.map((role, i) => (
          <div key={i} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-serif text-xl font-semibold text-ink">
                {role.title}
              </h3>
              <span className="text-sm text-muted">{role.dates}</span>
            </div>
            <p className="mt-0.5 font-medium text-sage">
              {role.company} · {role.location}
            </p>
            <ul className="mt-3 space-y-2">
              {role.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-ink/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm italic text-muted">{site.earlierExperience}</p>
    </Section>
  );
}
