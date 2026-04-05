---
name: bakery-build-qa-checklist
description: QA checklist for reviewing Golden Crust Bakery site builds. Load this skill when running quality reviews on completed sections or pages.
---

# Golden Crust Bakery — Build QA Checklist

## How to Use
Run through this checklist after building or modifying any section. Every item should pass before the work is considered done.

---

## Visual Design

### Typography
- [ ] Eyebrow text: 11px, uppercase, letter-spaced, warm brown
- [ ] Headlines: large, properly weighted, clear hierarchy
- [ ] Body copy: 16px minimum, 1.6+ line-height
- [ ] No collapsed hierarchy (all levels visually distinct)
- [ ] Fonts match SITE-THEME.md direction (soft, rounded, organic)

### Color
- [ ] Background uses warm cream tokens, not pure white
- [ ] Text uses dark brown, not pure black
- [ ] Gold accents used sparingly — decorative, not dominant
- [ ] Sections alternate between cream and white for rhythm
- [ ] No cool-toned shadows or borders

### Spacing
- [ ] Section padding: 80-112px desktop, 48-64px mobile
- [ ] Consistent vertical rhythm within sections
- [ ] Card internal padding: generous (24-32px)
- [ ] White space feels intentional, not accidental
- [ ] Grid gaps: 12-16px between cards

### Components
- [ ] Cards: rounded (16px), soft shadows, clean layout
- [ ] Buttons: 48px min-height, generous padding, clear hierarchy
- [ ] Forms: rounded inputs, clear labels, gold focus ring
- [ ] Images: rounded corners, consistent aspect ratios
- [ ] Dividers: warm, subtle, not harsh lines

---

## Copy Quality

- [ ] Headlines create desire or curiosity
- [ ] Body copy is scannable (short paragraphs)
- [ ] CTAs are specific and action-oriented
- [ ] Menu descriptions are appetizing and concise
- [ ] No generic AI-sounding language
- [ ] Tone: warm, friendly, genuine
- [ ] Placeholders clearly marked with [PLACEHOLDER]
- [ ] No invented facts (prices, hours, names) unless realistic

---

## Animation & Motion

- [ ] Scroll reveals: smooth fade-up, one-time play
- [ ] Hover effects: responsive (0.2-0.3s), subtle
- [ ] Bread transformation animation works (if implemented)
- [ ] No janky or stuttering motion
- [ ] No animations that delay content access
- [ ] Mobile: animations work or degrade gracefully
- [ ] GSAP instances properly cleaned up on destroy

---

## Responsive Design

### Mobile (≤768px)
- [ ] Single-column layout
- [ ] Touch targets: 44px minimum
- [ ] No horizontal scrolling
- [ ] Font sizes readable (never below 13px)
- [ ] Navigation accessible
- [ ] Images crop/scale properly
- [ ] Ordering UI usable with thumbs

### Tablet (769-1024px)
- [ ] Layout adapts (2-column where appropriate)
- [ ] Spacing adjusts proportionally
- [ ] Images maintain quality

### Desktop (1025px+)
- [ ] Content constrained to max-width (1140px)
- [ ] Multi-column layouts where appropriate
- [ ] Hover states active
- [ ] Full animation experience

---

## Code Quality

- [ ] CSS uses design tokens (custom properties from SITE-THEME.md)
- [ ] No inline styles for design values
- [ ] HTML is semantic (proper heading levels, landmarks)
- [ ] Class names are descriptive and consistent
- [ ] No unused CSS rules or dead JavaScript
- [ ] GSAP `clearProps` used where needed
- [ ] No console errors or warnings

---

## Conversion & UX

- [ ] Primary CTA visible at key scroll positions
- [ ] Ordering flow is intuitive and clear
- [ ] Email signup is inviting, not pushy
- [ ] Trust signals present (testimonials before CTAs)
- [ ] Location/hours easy to find
- [ ] Menu items have clear "Add to Order" actions
- [ ] Overall flow: browse → desire → order/visit

---

## Brand Consistency

- [ ] Site feels like a warm, artisan bakery
- [ ] Light, cream-toned — not dark, not cold
- [ ] Gold accents feel like sunlight, not bling
- [ ] Typography feels organic and handcrafted
- [ ] Overall impression: "I want to go there"
- [ ] Does NOT feel like: a template, a chain bakery, a tech startup

---

## Final Check

- [ ] Would a real bakery owner be impressed by this?
- [ ] Would a potential IWC client see this and want to hire us?
- [ ] Does this feel like a real business, not a demo?
- [ ] Is this better than what the bakery could get from Squarespace/Wix?
