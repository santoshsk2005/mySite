import Reveal from "./Reveal";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-hair py-16">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <h2 className="mb-8 font-serif text-2xl font-semibold text-ink md:text-3xl">
            <span className="text-accent">/</span> {title}
          </h2>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
