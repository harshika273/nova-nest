# NovaNest — Product Requirements Document

## Original Problem Statement
Create NovaNest — a modern, premium-quality responsive marketing site for an AI-powered productivity & wellness platform aimed at students and young professionals. Apple/Linear/Notion/Stripe-inspired aesthetic with dark/light toggle, glassmorphism, gradient accents (cyan/indigo), framer-motion animations, and reusable React components.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion + Recharts + Lucide React
- **Backend**: None (static marketing site)
- **Theme**: Class-based dark/light, default `dark`, persisted in `localStorage` (`novanest-theme`)
- **Custom Tailwind variant**: `light:` registered via plugin (so we can write `light:bg-white` etc.)
- **Routing**: React Router with single `/` route → `Landing` page

## User Personas
- **Maya** — PhD candidate juggling research, classes, and wellness; needs a calm planner.
- **Jordan** — Early-career designer who wants mood + habit insight without anxious gamification.
- **Sofía / cohorts** — Student teams looking for shared workspaces and study rooms.

## Core Requirements (Static)
- 9 sections: Hero, TrustedBy, Features, Dashboard Preview, Testimonials, Pricing, FAQ, CTA Banner, Footer
- Premium extras: cursor glow, scroll progress, sticky blurred navbar, mobile hamburger menu, page reveal animations, smooth scroll
- Fully responsive (mobile / tablet / desktop)
- Dark/light mode toggle
- Accessible color contrast & data-testids on every interactive element

## What's Implemented (2026-02-11)
- ✅ ThemeProvider with class-based dark/light, default dark, localStorage persistence
- ✅ Sticky blurred Navbar with logo, 4 nav links, theme toggle, sign-in, Get Started, animated mobile hamburger
- ✅ Hero with aurora background image, floating glow orbs, animated MiniDashboard mockup, two CTAs
- ✅ Watch Demo modal (placeholder video frame with pulsing play button)
- ✅ TrustedBy infinite marquee (10 fictional brands)
- ✅ Features grid — 6 cards with hover lifts and gradient glows
- ✅ Interactive Dashboard Preview with Recharts (focus area, habit bar, mood pie), task list, 30-day streak calendar
- ✅ Testimonials masonry (4 cards with avatars, ratings, quotes)
- ✅ Pricing — 3 tiers (Free / Pro / Enterprise), Pro highlighted with cyan glow + "Most popular" badge, monthly/yearly toggle
- ✅ FAQ — Shadcn Accordion, 6 honest answers
- ✅ CTA Banner with grid pattern + aurora glow
- ✅ Footer with newsletter form (local validation, "Done" state), social icons, 4 link columns, system status indicator
- ✅ CursorGlow (radial gradient tracking mouse, screen blend mode)
- ✅ ScrollProgress (top progress bar, framer-motion spring)
- ✅ Page reveal animation on landing
- ✅ E2E tested via testing_agent_v3 — 100% pass

## Testing Outcome
- Backend: n/a (no backend)
- Frontend: 100% pass at 390px / 768px / 1440px viewports
- No console errors, no page errors
- All data-testids present and matching spec

## Prioritized Backlog
### P1 (next session)
- Real auth + user accounts (when product moves beyond marketing site)
- Persist newsletter signups to MongoDB + transactional email confirmation
- Live blog / changelog page
- Pricing — Stripe checkout integration

### P2
- Open-graph / Twitter card images
- Sitemap.xml + robots.txt
- Replace placeholder Watch Demo with real product walkthrough video
- Localization (i18n)

## Notes for Next Agents
- Default theme class on `<html>` is `dark`. Toggle adds/removes `light`.
- Custom Tailwind variant `light:` is registered in `tailwind.config.js`.
- All interactive elements have `data-testid` per the data-testid usage rules.
- No backend was created — `server.py` is unchanged. If adding real signup, prefix new routes with `/api`.
