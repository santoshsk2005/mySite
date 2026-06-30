import { site } from "@/data/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-ink/90">
        {site.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
