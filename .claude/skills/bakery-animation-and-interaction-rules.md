---
name: bakery-animation-and-interaction-rules
description: Animation and interaction rules for the Golden Crust Bakery site. Load this skill when implementing any motion, hover effects, scroll reveals, or the signature bread transformation animation.
---

# Golden Crust Bakery — Animation & Interaction Rules

## Animation Level: Medium
Enough motion to feel premium and polished. Not enough to distract from the food or feel gimmicky. Every animation must serve the warm, handcrafted brand.

## The Signature Animation: Bread Transformation

### Concept
A hero animation showing bread being made: dough → rising → baked bread.

### Stages
1. **Dough** — raw dough ball, pale, soft-looking
2. **Rising** — dough expanding outward and upward, gaining volume
3. **Baked** — golden crust, finished loaf, warm and inviting

### Implementation Options (choose best fit)
- **SVG morph:** Animate SVG paths between shapes using GSAP MorphSVG or CSS
- **Image sequence:** Crossfade between illustrated/photographed stages
- **CSS-only:** Shape and color transitions on a stylized element
- **Canvas:** For more complex organic motion

### Timing and Feel
- Full transformation: 3-5 seconds
- Ease: organic, unhurried — `power2.inOut` or custom bezier
- Color: transition from pale cream (#f5efe6) to golden brown (#c8a46e)
- Scale: slight growth during rising phase (1.0 → 1.15 → 1.05)
- Trigger: scroll-driven or autoplay on load (test both)
- Loop: can loop gently if autoplay, or play-once if scroll-triggered

### Mobile
- Simplify if needed — crossfade between static images is acceptable
- Ensure it doesn't delay content access
- Must not cause layout shifts

## Scroll Reveal Rules

### Standard Entrance
```
- Direction: fade up
- Distance: 20-30px translateY
- Duration: 0.6-0.8s
- Ease: power2.out
- Stagger: 0.1-0.15s between children
- Trigger: when element is 80% visible
- Play: once (no reverse)
```

### Section Headers
- Eyebrow fades in first, then headline, then subtitle
- Stagger: 0.12s between elements
- Creates a gentle reading flow

### Cards and Grid Items
- Stagger across grid: 0.1s between cards
- Each card fades up + slight scale-in (0.98 → 1.0)
- Duration: 0.5-0.6s per card

### Gallery Images
- Stagger reveal with slight scale (0.95 → 1.0)
- Mask reveal (clip-path) is also a good fit for this brand

## Hover Effects

### Cards
- translateY: -4px (subtle lift)
- Shadow: increase spread and opacity
- Transition: 0.25s ease
- Optional: slight image zoom within card (1.0 → 1.03)

### Buttons
- Background: slight lightening or darkening
- Scale: 1.0 → 1.02 (barely perceptible)
- Transition: 0.2s ease
- No color jumps — smooth transitions only

### Menu Items
- Warm highlight background on hover
- Gentle left-border accent appearance
- Transition: 0.2s ease

### Gallery Images
- Scale within container: 1.0 → 1.05
- Slight brightness increase
- Transition: 0.3s ease
- Overflow: hidden on container

### Navigation Links
- Smooth underline slide-in from left
- Or gentle opacity/color transition
- Transition: 0.2s ease

## Micro-interactions

### Form Inputs
- Focus: gold ring animation (box-shadow transition)
- Valid state: subtle green checkmark fade-in
- Error state: gentle red highlight, no jarring shake

### Email Signup
- Success: smooth checkmark + "You're in!" message fade
- Button: gentle loading spinner → success state

### Scroll Indicator (Hero)
- Gentle bounce or fade-pulse to suggest scrolling
- Disappears after first scroll

## Performance Rules

### Use CSS for:
- All hover transitions
- Simple opacity/transform changes
- Focus states and form interactions
- Color transitions

### Use GSAP for:
- Scroll-triggered reveals (ScrollTrigger)
- The bread transformation animation
- Staggered entrance sequences
- Complex multi-step timelines

### Optimization
- Animate only `transform` and `opacity` when possible
- Use `will-change` only on actively animating elements
- Remove `will-change` after animation completes (or use GSAP's handling)
- Test on mobile — simplify anything that stutters
- Batch ScrollTrigger instances for performance

## What to Avoid
- Bouncy, springy easing (too playful for this brand)
- Mechanical or robotic motion
- Parallax on mobile
- Looping animations on static content
- Animations that block content access
- Flash/pop effects (too harsh for the warm brand)
- 3D transforms unless they serve a clear purpose
- Animation for animation's sake
