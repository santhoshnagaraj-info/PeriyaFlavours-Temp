###VI'll add a short plan, then read key project files (package.json, configs, layout, pages, components).

Created 6 todos

Preamble: I'll open and read the main project files to understand the app structure.I will read package.json and key files using workspace-relative paths.

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/package.json)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/next.config.ts)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/tsconfig.json)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/README.md)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/layout.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/page.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/Navbar.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/Hero.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/FeaturedFoods.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/Restaurants.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/Contact.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/Footer.tsx)

Read [](file:///home/santo/program/work/projects-FSD/PeriyaFlavours-Temp/app/components/SearchModal.tsx)

Completed: *Explore codebase and read key files* (1/6)

I'll deliver a concise, structured analysis with pros/cons, impacts, and prioritized improvements.

**Overview**
- **Project**: PeriyaFlavours — Next.js (app router) marketing/discovery site.
- **Key files**: package.json, layout.tsx, page.tsx, components in components.

**Architecture & Features**
- **Framework**: Next.js app-router (Next 16) with React 19 and TypeScript.
- **Styling**: Tailwind CSS (Tailwind v4 listed) + custom global CSS `[app/globals.css]`.
- **Fonts**: Google fonts via `next/font` in layout.tsx.
- **Pages / UI**: Single-page landing with sections: `Hero`, `FeaturedFoods`, `Restaurants`, `Contact`, `SearchModal`, `Navbar`, `Footer`.
- **Client/Server**: Most components are client components (`'use client'` in page.tsx and some components). No API routes or backend integration present.
- **Data**: Static in-file arrays for foods/restaurants (no external data fetching).
- **Interactivity**: Smooth scrolling, modal search, mobile menu, form with client-side submit alert.

**Pros**
- **Design & UX**: Polished modern UI, accessible CTAs, good dark theme contrast and consistent design language.
- **Developer DX**: TypeScript, clear component structure, small codebase — easy to read and extend.
- **Performance (baseline)**: Static content + client hydration only where needed — good for fast initial loads.
- **Local-first scope**: Focused content for Periyakulam reduces scope complexity and legal/operational concerns (not an ordering platform).
- **Dependencies minimal**: Few dependencies (lucide-react, tailwind, next) — easier upgrades and fewer vulnerabilities.

**Cons / Shortcomings**
- **No data layer**: Hardcoded content prevents CMS editing, dynamic updates, or scaling.
- **No backend / persistence**: `Contact` form only shows alert and does not store/send submissions.
- **SEO / SSR**: Using many client components may reduce SSR content; metadata exists but dynamic SEO (structured data, open graph) is minimal.
- **Accessibility**: Some interactive elements lack ARIA attributes (e.g., modal focus-trap, close button semantics), and images use external URLs without optimized `<Image>` usage.
- **Images**: Remote image URLs used directly via `<img>`; not using `next/image` optimizations or configured remote patterns.
- **No tests / CI / linting hooks**: package.json has `lint` but no test scripts or CI config.
- **Error handling & input validation**: Forms have HTML-required attributes only; no spam protection or server-side validation.

**Impacts**
- **Security**
  - Low immediate attack surface (static site), but contact form missing server-side validation and rate-limiting if later wired to an endpoint.
  - External images could leak referrers; relying on unsanitized user content later could introduce XSS risk.
- **Performance**
  - Good initial performance for static content; adding many client components increases JS bundle size.
  - Images loaded directly from Unsplash without optimization can slow LCP.
- **Maintainability**
  - Clear file structure and TypeScript help maintainability.
  - Hardcoded content will become painful to update as content grows.
- **Scalability / Business**
  - Current shape is fine for a brochure site. For features like full restaurant listings, search, reviews or CMS-driven content, architectural changes are necessary.
- **User Experience**
  - Smooth, attractive UI for discovery. Missing features: persistent search, saved favorites, actual restaurant detail pages or filters.

**Prioritized Improvements (what and where to place changes)**
- 1) Add data source / CMS integration (high impact)
  - What: Move restaurants/foods into a headless CMS (e.g., Sanity, Contentful) or JSON API.
  - Where: Replace in-file arrays in FeaturedFoods.tsx and Restaurants.tsx with data-fetching hooks in server components (e.g., `getRestaurants()` in `lib/data.ts`).
- 2) Implement real contact handling (high priority)
  - What: Create an API route to accept and validate contact submissions, add server-side validation and spam protection (reCAPTCHA or rate limits), send email or store in DB.
  - Where: Add `app/api/contact/route.ts` (or serverless function) + update form in Contact.tsx to POST to that endpoint.
- 3) Optimize images and media (medium)
  - What: Use `next/image` for automatic optimization and add next.config.ts remotePatterns for Unsplash or self-host images.
  - Where: Replace `<img>` in Restaurants.tsx and FeaturedFoods.tsx with `Image` from `next/image` and update next.config.ts.
- 4) Accessibility & ARIA (medium)
  - What: Add focus management and ARIA roles for `SearchModal`, keyboard traps, `aria-label` on buttons, semantic HTML.
  - Where: SearchModal.tsx, Navbar.tsx, Hero.tsx.
- 5) SEO & meta (medium)
  - What: Add Open Graph, Twitter cards, structured data for restaurants, and server-side rendered content for critical sections.
  - Where: Extend `metadata` in layout.tsx, add dynamic metadata per page/restaurant.
- 6) Split client/server boundaries & reduce client JS (medium)
  - What: Convert components that don't need client interactivity to server components; hydrate smaller parts.
  - Where: `FeaturedFoods` and `Restaurants` can be server components; keep `Navbar` and modals as client.
- 7) Add tests & CI (low→medium)
  - What: Add unit tests (Jest/Testing Library) and GitHub Actions for lint/build.
  - Where: Add `tests/` and `.github/workflows/ci.yml`.
- 8) Add types and runtime checks (low)
  - What: Define types for `Restaurant`/`Food` in `types/` and centralize data shapes.
  - Where: `types/index.ts`, update components to import types.

**Quick low-effort wins**
- Replace external `<img>` with `next/image` for at least hero and cards.
- Add `rel="noopener noreferrer"` and `target="_blank"` rules if external links are added.
- Add `aria-label` to modal close button and trap focus when `SearchModal` opens.
- Add `sitemap.xml` generation and robots rules for better indexing.

**Suggested next steps I can take for you**
- Implement the contact API and wire the form (fast, high impact).
- Convert images to `next/image` and update next.config.ts (quick).
- Wire a simple JSON data source (local `data/*.json`) and refactor components to fetch it.

Would you like me to implement one of the prioritized items now? If yes, pick which (contact API, image optimization, CMS wiring, or accessibility fixes).