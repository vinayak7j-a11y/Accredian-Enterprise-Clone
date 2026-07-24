import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function CTASection() {
  return (
    <section className="bg-navy-950 py-20 text-white">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-bold sm:text-4xl">
          Join 500+ enterprises building future-ready teams
        </h2>
        <p className="max-w-xl text-white/60">
          Talk to our enterprise learning consultants and see a curriculum
          mapped to your team&apos;s skill gaps in under a week.
        </p>
        <Button href="#enquire" variant="primary">
          Talk to Us <ArrowRight size={16} />
        </Button>
      </Container>
    </section>
  );
}
