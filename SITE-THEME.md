# Site Theme
## Golden Crust Bakery — Visual Identity

> This is the theme doc for the Golden Crust Bakery demo site. For the universal quality standards, see `DESIGN-STANDARDS.md`.

---

## Project Info

| | |
|---|---|
| **Site name** | Golden Crust Bakery |
| **Site type** | Artisan bakery / Online ordering |
| **Location** | Sioux Falls, SD |
| **Folder** | `Bakery-site/` |

---

## Mood and Personality

**Mood:** Light, warm, inviting, handcrafted — like walking into a sunlit bakery where fresh bread is cooling on the counter and flour dusts the wooden surfaces. Premium but accessible, artisan but friendly.

**The site should feel like:**
- A warm morning in a neighborhood bakery
- Fresh-baked, handcrafted, made with care
- Inviting and approachable — come as you are
- Clean and modern but with organic warmth
- Slightly upscale without being exclusive

**NOT:**
- Cold, sterile, or corporate
- Generic template or stock photography feel
- Fast-food or chain bakery aesthetic
- Overly rustic / farmhouse kitsch
- Dark or moody (this is a light-mode site)
- Harsh, geometric, or tech-startup feeling

---

## Color Palette

| Role | Token | Value | Notes |
|---|---|---|---|
| Background base | `--bg-base` | `#faf7f2` | Warm cream / off-white |
| Background section | `--bg-section` | `#f5f0e8` | Slightly darker warm cream |
| Background section alt | `--bg-section-alt` | `#ffffff` | Clean white for contrast sections |
| Surface | `--bg-surface` | `rgba(139,109,76,0.04)` | Warm glass-like surface |
| Surface hover | `--bg-surface-hover` | `rgba(139,109,76,0.08)` | Warm hover state |
| Text primary | `--text-primary` | `#2c2418` | Dark warm brown |
| Text secondary | `--text-secondary` | `rgba(44,36,24,0.65)` | Muted brown text |
| Text muted | `--text-muted` | `rgba(44,36,24,0.4)` | Subtle brown text |
| Text label | `--text-label` | `#8b6d4c` | Warm brown label |
| Accent gold | `--accent-gold` | `#c8a46e` | Primary accent — warm bakery gold |
| Accent gold light | `--accent-gold-light` | `#dcc39b` | Light gold for highlights |
| Accent brown | `--accent-brown` | `#8b6d4c` | Secondary accent — baked crust brown |
| Accent dark | `--accent-dark` | `#2c2418` | Subtle black for contrast |
| CTA button bg | `--btn-primary-bg` | `#2c2418` | Dark brown CTA button |
| CTA button text | `--btn-primary-text` | `#faf7f2` | Cream text on dark button |
| CTA button secondary bg | `--btn-secondary-bg` | `#c8a46e` | Gold secondary button |
| CTA button secondary text | `--btn-secondary-text` | `#2c2418` | Dark text on gold button |
| Border subtle | `--border-subtle` | `rgba(139,109,76,0.1)` | Warm subtle border |
| Border card | `--border-card` | `rgba(139,109,76,0.12)` | Card edge |
| Border accent | `--border-accent` | `rgba(200,164,110,0.3)` | Gold accent border |
| Accent divider | `--accent-divider` | `#e8ddd0` | Warm cream divider |
| Shadow soft | `--shadow-soft` | `0 2px 16px rgba(44,36,24,0.06)` | Soft warm shadow |
| Shadow card | `--shadow-card` | `0 4px 24px rgba(44,36,24,0.08)` | Card shadow |

---

## Typography

Use a font pairing that feels soft, rounded, and slightly organic — like bread dough. Avoid harsh geometric fonts.

| Role | Direction | Notes |
|---|---|---|
| Display / Headlines | Rounded serif or soft display face | Should feel warm, organic, handcrafted — not corporate |
| Body | Rounded sans-serif or humanist sans | Readable, warm, friendly |
| Labels / Eyebrows | Spaced uppercase, light weight | Brown-toned, small, contextual |

Specific fonts — suggested direction:
- Display: `Fraunces`, `Lora`, `Playfair Display` (variable weight preferred)
- Body: `Nunito`, `Nunito Sans`, `DM Sans`, `Outfit`
- Consider Google Fonts for easy CDN loading

| Token | Value | Use |
|---|---|---|
| `--sz-hero` | `clamp(44px, 6vw, 80px)` | Hero headline |
| `--sz-h2` | `clamp(28px, 3.5vw, 48px)` | Section titles |
| `--sz-h3` | `clamp(18px, 2vw, 26px)` | Card / subsection titles |
| `--sz-h4` | `clamp(15px, 1.5vw, 19px)` | Small headings |
| `--sz-label` | `11px` | Section labels / eyebrows |
| `--sz-body-lg` | `18px` | Section subtitles |
| `--sz-body` | `16px` | Body copy |
| `--sz-sm` | `14px` | Supporting text |
| `--sz-xs` | `12px` | Micro labels |

---

## Spacing

| Token | Value |
|---|---|
| `--sp-28` | `112px` — section padding desktop |
| `--sp-20` | `80px` |
| `--sp-16` | `64px` |
| `--sp-12` | `48px` |
| `--sp-10` | `40px` |
| `--sp-8` | `32px` |
| `--sp-6` | `24px` |
| `--sp-5` | `20px` |
| `--sp-4` | `16px` |
| `--sp-3` | `12px` |
| `--sp-2` | `8px` |

---

## Layout

- Single-page scrolling site
- Content max-width: `--container-max: 1140px`
- Content padding: `56px` (desktop), `36px` (tablet), `20px` (mobile)
- Full-width hero with bread transformation animation
- Alternating cream/white section backgrounds for visual rhythm

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `--r-sm` | `8px` | Buttons, inputs — soft and rounded |
| `--r-md` | `12px` | Icon containers, tags |
| `--r-lg` | `16px` | Cards |
| `--r-xl` | `24px` | Large containers, image frames |
| `--r-pill` | `999px` | Pill-shaped buttons, badges |

---

## Motion

- GSAP 3.12 + ScrollTrigger for scroll-driven animation
- Ease: `power2.out` for entrances, `power1.out` for interactive tweens (softer than other IWC sites)
- `--ease-fast: 0.2s ease` — micro-interactions
- `--ease-base: 0.3s ease` — standard hover
- `--ease-slow: 0.6s cubic-bezier(0.16, 1, 0.3, 1)` — reveals and transitions
- Bread transformation is the signature motion piece — see animation skill/agent files
- Overall motion feel: gentle, organic, unhurried — like dough rising

---

## Imagery Direction

- Light, warm photography — natural lighting, shallow depth of field
- Fresh bread, golden crusts, flour-dusted surfaces, warm interiors
- Hands shaping dough, fresh ingredients, the baking process
- Avoid stock photos that feel generic — every image should feel like it belongs to this bakery
- Color grade: warm, slightly desaturated, natural tones

---

## Tone of Voice

Warm, friendly, genuine, slightly proud of the craft. Like a baker inviting you to try something fresh from the oven — not a salesperson, not a food critic.

- Premium but approachable
- Confident in the craft but never pretentious
- Warm and neighborly
- Focused on the experience of fresh, handcrafted baked goods
- Local and community-oriented
