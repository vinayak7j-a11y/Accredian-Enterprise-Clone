import Container from "./ui/Container";
import { stats } from "@/data/content";

export default function StatsBar() {
  return (
    <section className="bg-mist-50 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-navy-900 sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-ink-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
