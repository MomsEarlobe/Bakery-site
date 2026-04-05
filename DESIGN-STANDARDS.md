# Design Standards
## Impact Web Company — Universal Quality & Build Standards

> This document defines **how well** every site built under Impact Web Company should be built. It does not define what any specific site should look like. Colors, fonts, moods, and visual identity are defined per-project in each site's `SITE-THEME.md`.

---

## The Two-Layer System

| Layer | Document | Covers |
|---|---|---|
| Universal quality standards | `DESIGN-STANDARDS.md` (this file) | Layout, hierarchy, spacing, motion, responsiveness, code quality, polish bar |
| Per-project visual identity | `SITE-THEME.md` (in each site folder) | Colors, fonts, mood, imagery, button style, motion personality, brand voice |

**Rule:** Every site must meet the universal standards. Every site gets its own visual identity.

---

## Layout Quality

- **Mobile-first.** Design for small screens first. Desktop is an enhancement, not the base.
- **Section rhythm.** Each section should have a clear start and generous breathing room. Do not compress sections to fit more content.
- **Consistent alignment.** All elements should align to the same grid or layout system. Rogue alignment looks unfinished.
- **Max-width constraint.** Content should not stretch edge-to-edge on large screens. Use a max-width container (typically 1100–1200px) to keep lines readable.

---

## Typography Hierarchy

Every page must have a legible, intentional type hierarchy. The exact fonts are defined per site, but the structure is always:

1. **Section label / eyebrow** — small, spaced, muted — contextualizes what follows
2. **Headline** — large, weighted, high contrast — the main statement
3. **Subtitle or supporting copy** — medium size, secondary opacity — adds context
4. **Body copy** — comfortable reading size (minimum 14px), 1.6–1.7 line-height
5. **CTA** — distinct, button-formatted or clearly linked

Never collapse this hierarchy. A page where labels, titles, and subtitles feel the same size reads as flat and unpolished.

**Minimum standards:**
- Body copy: 14px minimum, preferably 15–16px
- Section headlines: at least 2× the body size
- Line-height: 1.6 or higher for body, 1.0–1.15 for large display text
- Letter-spacing: 0.1em+ for all-caps labels; tight or neutral for display headlines

---

## Spacing and Rhythm

Good spacing is what separates premium from amateur.

- **Sections:** Large top/bottom padding. On desktop, aim for 80–120px. On mobile, 48–64px minimum.
- **Vertical rhythm:** Consistent gaps between elements within a section. Use a spacing scale, not arbitrary values.
- **Between cards:** 12–16px gap for grids. Not so tight that cards feel crammed; not so loose that they feel unrelated.
- **Within cards:** Internal padding should be generous relative to the card size. Cards that feel cramped look cheap.
- **White space is intentional.** Empty space is not wasted space — it makes the important elements more visible.

---

## Section Structure

Every section should follow a clear pattern:

1. Label / eyebrow (optional but recommended)
2. Headline
3. Supporting copy (optional)
4. Content (cards, list, form, images, etc.)
5. CTA row (when appropriate)

Sections that open with a weak or missing headline feel like they start in the middle. Sections without CTAs at natural decision points lose conversions.

---

## CTA Clarity

- There should be one clear primary action visible at any given scroll position
- CTAs should use action-oriented labels — not "Learn More" as a primary action
- Supporting copy near a CTA should reduce hesitation, not add complexity
- Button size should be large enough to see and tap easily (min 44px height on mobile)
- Primary CTAs should be visually distinct from secondary and ghost buttons

---

## Responsiveness Standards

- **Mobile layout must be tested** — not just assumed to work
- Single-column layout on mobile (≤768px) for most page types
- Navigation must be accessible on mobile — no hidden nav with no fallback
- Touch targets must be large enough (44px minimum)
- No horizontal scrolling (unless intentional and clearly designed)
- Images and backgrounds must crop and scale intentionally — no awkward cutoffs
- Font sizes must remain readable on small screens — never below 13px

---

## Motion Quality

Motion is optional. When used, it must earn its place.

**Standards:**
- Motion should reinforce hierarchy, polish, or interactivity — not decorate
- Scroll reveals: subtle fade and slide — one-time play, no reverse
- Hover states: responsive and fast (0.18–0.28s) — not sluggish
- Entrances: smooth, not bouncy or mechanical
- Parallax: restrained — suggestion of depth, not a distraction
- No looping animations on non-interactive elements
- No animations that delay access to content

**Performance:**
- Use CSS transitions for hover and simple state changes
- Use GSAP only when CSS transitions are insufficient
- Test all motion on mobile — if it lags or feels wrong, simplify or remove it
- `will-change` should be used sparingly and only where compositing is actually needed

---

## Code Quality

- Clean, readable structure — someone else should be able to understand the file without a guide
- CSS custom properties (variables) for all repeated values — colors, spacing, radius, type scale
- No inline styles for design values
- Class names should describe what something is, not just what it looks like
- No unused CSS rules or dead JavaScript
- Animations that interact with CSS hover transforms must use `clearProps: 'transform'` in GSAP to avoid conflicts
- Mobile styles should not be an afterthought bolted on at the end — they should be part of the design system from the start

---

## Screenshot Review Standard

Before treating any visual work as done, apply the screenshot verification loop:

1. Build or refine the section
2. Preview it in a browser
3. Screenshot it and look at it as a design reviewer — not as the person who built it
4. Ask: does this look finished? Would a client trust this?
5. Fix what does not pass
6. Repeat until it is clearly stronger

---

## Quality Bar

Every site built under Impact Web Company must clear this bar:

- **Better than a DIY website builder** — more intentional, more premium, more considered
- **Better than a generic template** — visually distinct, tailored to the business, not copy-paste
- **Believable as a real local business** — looks and reads like a real place, not a stock demo
- **Polished enough to show a real client** — spacing, hierarchy, copy, and motion all feel finished
- **Conversion-focused** — designed to make customers take action, not just to look nice

If a site does not clear this bar, it is not ready. Refine it until it is.
