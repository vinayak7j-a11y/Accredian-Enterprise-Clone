"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/95 backdrop-blur border-b border-white/10" : "bg-navy-950"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 focus-ring rounded">
          <span className="font-display text-xl font-bold text-white">
            Accredian
          </span>
          <span className="rounded-full bg-gold-500/15 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-gold-400">
            ENTERPRISE
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#enquire" variant="primary">
            Talk to Us
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="focus-ring rounded p-2 text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded px-2 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-2">
              <Button href="#enquire" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                Talk to Us
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
