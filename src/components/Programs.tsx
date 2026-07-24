import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import { programs } from "@/data/content";

export default function Programs() {
  return (
    <section id="programs" className="bg-navy-950 py-24 text-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-400">
              Domain Specializations
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Programs built around real skill gaps
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60">
            Every track is co-designed with academic partners and refreshed
            with current industry practice — not recycled slide decks.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <a
              key={program.title}
              href="#enquire"
              className="focus-ring group flex flex-col justify-between gap-6 bg-navy-950 p-8 transition-colors hover:bg-navy-900"
            >
              <div>
                <h3 className="font-display text-lg font-semibold">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {program.description}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-gold-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
