import {
  GraduationCap,
  Users,
  UsersRound,
  BarChart3,
  Settings2,
  Globe2,
  LucideIcon,
} from "lucide-react";
import Container from "./ui/Container";
import { whyUs } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  Users,
  UsersRound,
  BarChart3,
  Settings2,
  Globe2,
};

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-500">
            Why Accredian Enterprise
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            The operating system for enterprise learning
          </h2>
          <p className="mt-4 text-ink-600">
            From curriculum design to analytics — everything an ambitious
            learning organization needs, under one roof.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-navy-950/8 bg-white p-8 transition-all duration-200 hover:border-gold-500/40 hover:shadow-[0_20px_40px_-24px_rgba(19,27,69,0.25)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
