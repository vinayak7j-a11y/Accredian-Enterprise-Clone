import Container from "./ui/Container";
import { process } from "@/data/content";

export default function ProcessJourney() {
  return (
    <section id="process" className="bg-mist-50 py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-500">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            From skill gap to measurable outcome
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-navy-950/15 to-transparent lg:block"
          />
          {process.map((item) => (
            <div key={item.step} className="relative flex flex-col gap-4">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 font-display text-sm font-bold text-gold-400">
                {item.step}
              </div>
              <h3 className="font-display text-lg font-semibold text-navy-950">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
