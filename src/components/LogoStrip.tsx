import Container from "./ui/Container";
import { clientLogos } from "@/data/content";

export default function LogoStrip() {
  return (
    <section className="border-b border-navy-100/10 bg-navy-950 py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
          Trusted by learning teams at
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
          {clientLogos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center rounded-lg border border-white/5 py-3 text-sm font-semibold tracking-wide text-white/40 transition-colors hover:border-white/15 hover:text-white/70"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
