# Accredian Enterprise — Partial Clone

A responsive partial clone of [Accredian Enterprise](https://enterprise.accredian.com/), built with Next.js (App Router), TypeScript, and Tailwind CSS, as a Full Stack Developer Intern assignment.

## Live Demo

- **Deployed URL:** _add your Vercel URL here after deploying_
- **Reference site:** https://enterprise.accredian.com/

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** lucide-react
- **Fonts:** Sora (display) + Inter (body), self-hosted via `@fontsource` (no external font requests)
- **API:** A mock enterprise-enquiry API built with Next.js Route Handlers

## Sections Built

1. **Navbar** — sticky, responsive, with an animated mobile menu
2. **Hero** — headline, sub-copy, and dual CTAs
3. **Client logo strip** — social proof band
4. **Stats bar** — key enterprise metrics
5. **Why Us** — 6-item feature grid (academic rigor, mentorship, analytics, etc.)
6. **Programs** — domain specialization grid (AI/GenAI, Data Science, Product, Leadership, etc.)
7. **How It Works** — a 4-step process timeline (Discover → Design → Onboard → Track)
8. **Testimonials** — an interactive carousel
9. **Enquiry form** — a real form wired to a mock API route, with loading/success/error states
10. **CTA band + Footer** — closing conversion section and multi-column footer

## Project Structure

```
src/
  app/
    api/enquire/route.ts   # Mock API: validates + "stores" enquiry submissions
    layout.tsx              # Root layout, fonts, metadata
    page.tsx                 # Assembles all landing page sections
    globals.css               # Design tokens (colors, fonts) via Tailwind v4 @theme
  components/
    ui/
      Button.tsx             # Reusable button (primary/secondary/ghost variants)
      Container.tsx          # Reusable max-width layout wrapper
    Navbar.tsx
    Hero.tsx
    LogoStrip.tsx
    StatsBar.tsx
    WhyUs.tsx
    Programs.tsx
    ProcessJourney.tsx
    Testimonials.tsx
    EnquireForm.tsx
    CTASection.tsx
    Footer.tsx
  data/
    content.ts                # Single source of truth for all section copy/data
```

## Design Decisions

- **Palette:** deep navy (`#0d1330`) paired with an academic gold accent (`#d4a537`) — evoking the "IIT/IIM-partnered" prestige positioning of the real Accredian Enterprise brand, rather than a generic SaaS blue/purple template.
- **Typography:** Sora for headings (confident, geometric), Inter for body copy (neutral, highly legible at small sizes) — self-hosted so the build has no external network dependency.
- **The 4-step process section** uses numbered steps deliberately, because the content genuinely is a sequential workflow (Discover → Design → Onboard → Track), not decoration.
- **Component reusability:** `Button` and `Container` are shared primitives used across every section; page section data lives in `src/data/content.ts` so copy can be edited without touching component logic.

## API Integration

`POST /api/enquire` — accepts `{ name, email, company, teamSize?, message? }`, validates required fields and email format, and returns a success/error JSON response. `GET /api/enquire` lists all submissions received in the current server session (in-memory, for demo purposes — swap in a real database/CRM for production).

## Getting Started Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Lint

```bash
npm run build
npm run lint
```

Both commands pass cleanly.

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com/new) with zero configuration — just import the GitHub repo and deploy.

## Possible Improvements

- Add a headless CMS (e.g. Sanity/Contentful) instead of the static `content.ts` file
- Persist enquiry submissions to a real database (Postgres/MongoDB) or CRM (HubSpot/Salesforce)
- Add unit tests (Jest/React Testing Library) for form validation logic
- Add scroll-triggered reveal animations with `framer-motion` for a more polished feel
- Add an actual comparison against the live reference site's exact section order/content once full visual access is available
