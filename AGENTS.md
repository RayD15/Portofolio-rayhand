# AGENTS.md

## Project Overview

Portfolio website for an SMK (vocational school) student. Built with **React 18 + Vite 5** (JavaScript, not TypeScript). Includes the Lanyard component (React Bits) with a physics-simulated 3D ID card hanging from a lanyard.

## Key Facts

- **Language**: Indonesian (Bahasa Indonesia)
- **Design theme**: Brutalist web — stark contrast, monospace + sans-serif, hard borders, blocky geometry, no gradients, no rounded corners (except `--r-md`)
- **Entry point**: `index.html` → `src/main.jsx` → `src/App.jsx`
- **Framework**: React 18 with Vite 5
- **Global CSS**: `src/index.css` — uses CSS custom properties (`--ink-*`, `--accent-*`, `--bg`)
- **Effects**: `src/hooks/usePortfolioEffects.js` — one big `useEffect` that recreates the vanilla-JS effects (loader, particles, cursor trail, counters, reveals, contact form, smooth scroll) via DOM selectors
- **3D Lanyard**: `src/components/Lanyard.jsx` + `Lanyard.css` (React Bits, JS + CSS variant)
- **Dependencies**: three, meshline, @react-three/fiber, @react-three/drei, @react-three/rapier, @vitejs/plugin-react
- **External deps**: Google Fonts (Space Mono, Inter), Font Awesome 6.4.0
- **DESIGN.md**: Meta design system analysis used as reference — not part of this portfolio

## Architecture Notes

- Single-page site with anchor navigation (`#home`, `#about`, `#skills`, `#interest`, `#contact`)
- Sections are React components in `src/components/` (Navbar, Hero, About, Skills, Interest, Journey, Contact, Footer, BackToTop)
- Hero renders the `<Lanyard>` component with the profile photo (`src/assets/profil.jpeg`) as `frontImage`
- The old CSS/JS pendulum profile card was removed and replaced by the Lanyard
- `.glb`/`.png`/`.jpeg` assets imported from `src/assets/`; `vite.config.js` sets `assetsInclude: ['**/*.glb']`
- Contact form uses client-side validation only (no backend)

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build

## Style Conventions

- CSS variables defined in `:root` — use existing tokens, don't add new ones
- Transitions use `--t-fast`, `--t-normal` timing variables
- Spacing uses `--sp-1` through `--sp-7` (rem-based)
- Border radius uses `--r-sm`, `--r-md`, `--r-lg`, `--r-full`
- Fonts: Space Mono for headings/UI, Inter for body text — no serif fonts
- Brutalist aesthetic: thick 3px borders, square corners, offset box shadows, high contrast

## Gotchas

- No linting or typecheck commands configured — validate with `npm run build`
- The `body::before` overlay is removed — background is clean `#F5F0EB`
- Particles and cursor effects create DOM elements dynamically — don't rely on static HTML structure alone
- Lanyard creates a WebGL canvas; heavy physics run only while visible (the hero is above the fold)
- `usePortfolioEffects` mutates DOM via selectors — if you rename/remove a selector, update the hook too
- 3D card model `card.glb` can be edited at https://modelviewer.dev/editor/
