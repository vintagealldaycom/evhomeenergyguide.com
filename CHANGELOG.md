# Changelog — v4.3.1 ("Sim-Lab") · update4.3.1.md

Batch applied from `update4.3.1.md` (+ clarifications in `update4.3.1A.MD`).
Build validated with `npm run build` — 21 pages, no errors. Site is local/testing,
so no live redirects were added (see #14).

---

## Naming & rebrand — "Calculators" → "Sim-Lab"

- **Header nav (#4):** "Calculators" renamed to **"Sim-Lab"** (desktop + mobile).
- **Route (#14):** `/en/calculators/` → **`/en/sim-lab/`**. The two live tool pages moved
  with it: `/en/sim-lab/charging-cost/` and `/en/sim-lab/solar-battery-sizer/`. Every
  internal reference updated (header, footer, home hero + CTA, 404, about, category hubs,
  breadcrumbs, `CALC_BASE`, search index). No `/en/calculators/*` paths remain anywhere.
  No redirects added — site is local/testing only.
- **Footer (#8, #10):** "Popular Calculators" heading → **"Sim-Lab"**; "All calculators →" →
  **"View all in Sim-Lab →"**. Removed **Charging Time Calculator** and
  **Home Energy Bill Estimator** from the footer tool list.
- **Home hero CTA:** "Try the calculators" → **"Try the Sim-Lab"** (route + label) for
  consistency with the rebrand.
- **Sub-page breadcrumbs / back-links:** "Calculators" → "Sim-Lab"; "← All calculators" →
  "← Back to Sim-Lab".
- The Sim-Lab page eyebrow and SEO `<title>`/meta intentionally keep
  "Calculators & Simulators" wording for search value.

## Home page

- **Hero eyebrow (#4):** "Your command center for all things electric" →
  **"Your Path to an Electric Home, Simplified."**
- **Hero body (#9):** Removed the "Welcome to your command center…" paragraph; replaced with
  **"Your path to an electric home, simplified. Connecting your EV, solar, and battery storage
  into one efficient system."** (kept the existing "From home chargers…" tail).
- **Stat band heading (#4):** "EV home energy, by the numbers" → **"National Energy Benchmarks"**.
- **"What does home charging really cost you?" (#6):** Removed the **"See all calculators →"**
  button.
- **Calculator (#7):** Added **"More tools in the Sim-Lab →"** at the bottom of the results
  card — homepage only (the shared calculator component and its dedicated page are untouched).
- **Reader-favorites section (#5):** Dropped the combined title + intro
  ("Where your power goes — and what to camp with"). Each card now carries its own kicker:
  **"Where Your Power Goes"** (usage) and **"EVs Ready for Adventure"** (camping).
- **Camping diagram (#1):** Added an inline SVG scene (EV + V2L cable & outlet, tent,
  campfire, pines, moon/stars) above the "Best EVs for camping (V2L power)" table, in the
  site's dark/emerald aesthetic. Fully responsive, no external assets.
- **Interactive charts (#3):** The "Where Your Power Goes" usage bars and the hero
  "range added per hour" bars now show an exact value on **hover and keyboard focus** via a
  lightweight, dependency-free floating tooltip (no chart library). Usage bars display
  **kWh + %**, derived from an **illustrative ~900 kWh/mo** baseline; a caption labels the
  figures "Illustrative." Tooltip flips below the bar if there's no room above and respects
  reduced-motion.

## Sim-Lab page (`/en/sim-lab/`)

- **Hero copy (#13):** Title → **"Sim-Lab"**; body replaced with the new
  "Explore the Sim-Lab…" paragraph (tagline "Run the numbers. Make the decision." kept).
- **Stat bar → feature strip (#12):** Replaced the numeric "12 / 2 / 10 / 100%" bar with a
  three-item pill strip: **Free · Interactive · Private** (each with an icon).
- **Suggest band (#12):** Replaced with **"Building the future of home energy, together.
  Have a specific simulation you need?"** and a **"Suggest a tool →"** button.
- **Categories (#11):** Filter chips now mirror the five site pillars exactly —
  **EV Home Charging · Smart Energy · Solar & Battery · Travel & Camping · Tools & Workshop** —
  so the Sim-Lab aligns 1:1 with the main nav and category hubs. Tools were re-assigned to
  their correct pillar (Option A) rather than a literal positional rename, so nothing is
  misfiled: the **Solar & Battery Backup Sizer** sits under *Solar & Battery* and the
  **EV Road Trip Planner** under *Travel & Camping*. "Tools & Workshop" currently has no
  tools; selecting it shows a friendly empty-state instead of a blank grid.
- **"Notify me" → "Coming soon" (#11):** Coming-soon cards no longer collect emails. The
  action-slot button is now a static **"Coming soon"** label (the duplicate top status tag
  was removed). The `NotifyModal` component and its email flow were removed entirely.

## Disclaimer (#2)

- Removed the **"Important disclaimer"** note from the site footer.
- Added the same short disclaimer as a highlighted **callout at the top of the
  `/disclaimer/` page**, so the message isn't lost.

## Mobile UI (#15)

- **Header menu:** Larger tap targets (≥52px rows, 16px inputs), active-page highlight with an
  inset accent bar, scrollable panel capped to viewport height, and safe-area padding.
- **Sim-Lab filter chips:** On phones, chips become an edge-to-edge horizontal scroll strip
  (snap, hidden scrollbar) instead of wrapping — cleaner and more "app-like."
- **Sim-Lab hero:** Tighter vertical rhythm, fluid `h1`, and a compact feature strip on small
  screens.
- **Home:** Camping SVG and interactive bars scale cleanly; usage rows have padded hit areas
  for touch.

## Housekeeping

- Version bumped **4.3.0 → 4.3.1** (`package.json`, `site.ts`; shown in footer).
- Deleted unused `src/components/NotifyModal.astro`.
- Removed dead CSS (`.footer-disclaimer`, `.dir-notify`, `.dir-soon`, stale `.app-stats`
  breakpoint).
