import { ArrowRight, ShieldCheck } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Ambient academic-gold glow, restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative py-24 lg:py-32">
        <div className="flex flex-col items-start gap-8 lg:max-w-3xl">
          <div className="flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold-400">
            <ShieldCheck size={14} />
            <span>INDIA&apos;S MOST TRUSTED ENTERPRISE LEARNING PLATFORM</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Upskill your workforce{" "}
            <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
              at scale
            </span>
            .
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Partner with IITs, IIMs, and global universities to upskill your
            teams with curated programs, live mentorship, and real-time
            analytics — built for measurable ROI, not vanity metrics.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#enquire" variant="primary">
              Get a Custom Proposal <ArrowRight size={16} />
            </Button>
            <Button href="#programs" variant="ghost">
              Explore Programs
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-white/50">
            <span>Trusted by 500+ enterprises</span>
            <span className="h-1 w-1 rounded-full bg-white/30" />
            <span>94% average completion rate</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
