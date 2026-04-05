# Golden Crust Bakery — Build Learnings

## 2026-04-05 — Initial Full Build

### What worked
- Fraunces + Nunito font pairing creates the warm, organic feel the brand needs
- SVG bread animation with GSAP crossfade is lightweight and works on mobile
- Alternating cream/white sections create good visual rhythm
- Menu card layout with integrated "Add to Order" buttons feels natural
- Category tabs with pill design match the bakery aesthetic
- Sticky cart in the ordering section keeps order visible while filling form

### Decisions made
- Used SVG stages (dough/rising/baked) with opacity crossfade rather than SVG morph — simpler, more reliable, still reads as transformation
- Chose 2-column menu grid over 3-column — gives room for descriptions and images to breathe
- Placed gallery after ordering (not before) — people who scroll past ordering still get visual reinforcement before testimonials
- Made 2 time slots unavailable for realism in the demo
- Used Unsplash direct URLs for images — will need local copies for production

### Watch out for
- Duplicate image URLs are easy to introduce when building menu cards quickly — always verify each card has a unique image
- Gallery grid math matters: ensure wide items (span 2) + regular items add up to fill rows evenly
- GSAP defer order matters — GSAP core must load before ScrollTrigger, both before interactions.js
