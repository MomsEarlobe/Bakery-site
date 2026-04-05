---
name: bakery-brand-and-design-rules
description: Visual design rules and brand guidelines for the Golden Crust Bakery site. Load this skill when making design decisions, choosing colors, setting typography, or building components.
---

# Golden Crust Bakery — Brand & Design Rules

## Visual Identity Summary
- **Mode:** Light — warm cream backgrounds, not white-white
- **Feel:** Handcrafted, warm, inviting, premium but approachable
- **Accent:** Gold used sparingly for premium touches
- **Contrast:** Dark brown text on cream backgrounds

## Color Rules

### Backgrounds
- Primary background: warm cream (`--bg-base: #faf7f2`)
- Alternate sections between `--bg-section` (cream) and `--bg-section-alt` (white) for rhythm
- Never use pure white (#ffffff) as the main background — always warm it up
- Surface overlays use warm brown-tinted transparency

### Text
- Primary text: dark warm brown (`--text-primary: #2c2418`) — not pure black
- Secondary text uses reduced opacity of the primary brown
- Labels and eyebrows: warm brown (`--text-label: #8b6d4c`)

### Accents
- Gold (`--accent-gold: #c8a46e`) — used for:
  - Decorative dividers
  - Icon highlights
  - Section accents
  - Secondary buttons
- Gold should never dominate — it should feel like sunlight catching a golden crust
- Dark brown (`--accent-dark: #2c2418`) — used for primary CTAs and strong emphasis

### Borders and Shadows
- Borders: warm brown-tinted, very subtle
- Shadows: warm-toned, soft and diffused — never harsh or cool-toned
- Cards use `--shadow-card` for gentle elevation

## Typography Rules

### Font Direction
- Headlines: soft, rounded serif or display face (Fraunces, Lora recommended)
- Body: rounded, humanist sans-serif (Nunito, DM Sans recommended)
- Never use harsh geometric fonts (no Roboto, no Helvetica, no Montserrat)
- The type should feel organic — like handwriting evolved into type

### Hierarchy
- Eyebrows: 11px, uppercase, letter-spaced, brown-toned
- Headlines: large, weighted, warm — the main statement
- Body: 16px minimum, 1.6+ line-height, easy to read
- CTAs: clear, distinct, properly sized

## Component Rules

### Cards
- Rounded corners (16px)
- Soft warm shadows
- Generous internal padding (24-32px)
- Image + content layout with clear separation
- Hover: subtle lift + shadow increase

### Buttons
- Primary: dark brown bg, cream text, 8px radius, 48px min-height
- Secondary: gold bg, dark text
- Ghost: transparent, brown border
- All: generous horizontal padding (24-32px)
- Hover: subtle shift, no jarring transitions

### Images
- Rounded corners matching the card radius
- Warm color grade — never cool or desaturated
- Consistent aspect ratios within grids
- Object-fit: cover for container images
- Gallery images: slight zoom on hover (contained)

### Forms
- Inputs: rounded, warm border, generous padding
- Focus state: subtle gold ring
- Labels: above inputs, clear and readable
- Submit buttons: full-width on mobile, prominent

## Layout Rules
- Max content width: 1140px
- Section padding: 80-112px vertical on desktop
- Content padding: 56px sides on desktop, 20px on mobile
- Single-column on mobile
- 2-3 column grids on desktop for cards/menu items
- Generous white space between sections

## What to Avoid
- Pure black or pure white — always use the warm variants
- Cool-toned shadows or borders
- Thin, spindly fonts
- Cramped spacing
- Heavy dark sections (this is a light-mode site)
- Stock photo aesthetic — images should feel genuine
- Over-designed components that draw attention to themselves instead of the food
