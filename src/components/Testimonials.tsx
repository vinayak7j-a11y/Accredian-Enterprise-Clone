"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Container from "./ui/Container";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-white py-24">
      <Container className="max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-500">
            Client Stories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-950 sm:text-4xl">
            Hear from L&amp;D leaders and CHROs
          </h2>
        </div>

        <div className="mt-14 rounded-3xl border border-navy-950/8 bg-mist-50 p-10 sm:p-14">
          <Quote className="text-gold-500" size={32} />
          <p className="mt-6 font-display text-xl leading-relaxed text-navy-950 sm:text-2xl">
            &ldquo;{current.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div>
              <p className="font-semibold text-navy-950">{current.name}</p>
              <p className="text-sm text-ink-600">{current.company}</p>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous testimonial"
                onClick={() => go(-1)}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => go(1)}
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy-950/15 text-navy-950 transition-colors hover:bg-navy-950 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`focus-ring h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold-500" : "w-1.5 bg-navy-950/15"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
