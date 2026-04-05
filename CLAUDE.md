# Golden Crust Bakery — Demo Site

> This is the standalone repo folder for the Golden Crust Bakery demo website. It is a self-contained HTML/CSS/JS site built as a portfolio piece for Impact Web Company. All assets live inside this folder. No external file dependencies.

---

## What This Site Is

A premium demo website for **Golden Crust Bakery** — an artisan luxury bakery in Sioux Falls, SD. The site markets a neighborhood bakery that offers handcrafted breads, pastries, and seasonal baked goods with online ordering and pickup scheduling.

This is a **demo site** built by Impact Web Company to demonstrate hospitality web design skills. It should feel like a real business site, not a template or placeholder.

---

## Project Identity

- **Site name:** Golden Crust Bakery
- **Location:** Sioux Falls, SD
- **Type:** Artisan luxury bakery
- **Pricing:** Mid-tier (accessible premium)
- **Ordering:** Online ordering with pickup scheduling
- **Email list:** Yes — updates, new items, seasonal menus
- **Tone:** Warm, friendly, clean, slightly upscale

---

## File Structure

```
Bakery-site/
├── CLAUDE.md               ← This file
├── DESIGN-STANDARDS.md     ← Universal quality standards (shared with all IWC sites)
├── SITE-THEME.md           ← Design tokens and visual identity for this site
├── index.html              ← Full page HTML
├── css/
│   └── styles.css          ← All styles, CSS custom properties, design system
├── images/                 ← Site imagery and assets
├── js/
│   └── interactions.js     ← All animations, scroll behavior, ordering UI
├── notes/                  ← Design notes and review checklists
└── .claude/
    ├── agents/             ← AI agent definitions for this project
    └── skills/             ← AI skill definitions for this project
```

---

## Tech Stack

- **HTML/CSS/JS** — no build tools, no framework
- **GSAP 3.12 + ScrollTrigger** — animations (CDN)
- All external dependencies are CDN-loaded. No npm, no bundler.

---

## Key Design Direction

- **Mood:** Light, warm, inviting, premium, handcrafted
- **NOT:** Cold, sterile, generic template, fast-food, overly corporate
- **Signature interaction:** Bread transformation animation — dough → rising → baked bread — smooth, organic, and premium
- **Mobile-first** — the mobile experience matters as much as desktop

---

## Site Sections

1. **Hero** — headline, warm bakery feel, bread animation, main CTA
2. **About / Our Story** — the bakery's philosophy, craft, and warmth
3. **Menu / What We Bake** — categorized menu display (breads, pastries, seasonal)
4. **Online Ordering** — ordering system UI with pickup scheduling
5. **Gallery** — photo gallery of baked goods, the bakery space, and process
6. **Testimonials** — customer reviews and social proof
7. **Email Signup** — subscribe for updates, new items, seasonal menus
8. **Location & Hours** — map, address, hours, contact info
9. **Footer** — social links, quick links, brand mark

---

## Content Rules

- Do not invent detailed business facts that were never confirmed
- If something is unknown, mark it clearly as a placeholder
- Keep copy warm, natural, and inviting — artisan hospitality language
- Avoid overly flashy marketing language or generic AI-sounding copy
- Treat the bakery as a real neighborhood experience, not a sales funnel
- Do not invent specific menu prices, staff names, or supplier details
- All menu items should feel realistic for a Sioux Falls artisan bakery

---

## Context Hygiene

- Use `/clear` between unrelated tasks to reset context
- Use `/compact` during long sessions to free context space
- Agents should load only their listed skills, not all skills
- Keep sessions focused: one workflow or one section per session when possible

---

## Workflow Chains

Agents hand off to each other in defined sequences. Each agent receives input from the previous step and produces output for the next.

### Chains
- **Full Build:** strategist → copywriter → ui-designer → animation-director → qa-reviewer
- **Copy Refresh:** copywriter → qa-reviewer
- **Visual Polish:** ui-designer → animation-director → qa-reviewer
- **Bug Fix Loop:** qa-reviewer → [identified agent] → qa-reviewer

### Handoff Protocol
| Agent | Receives | Outputs |
|---|---|---|
| strategist | user request or qa-reviewer feedback | section plan, content priorities, conversion notes |
| copywriter | strategist plan or qa-reviewer fixes | final copy, placeholder flags, CTA labels |
| ui-designer | copywriter copy or strategist plan | built HTML/CSS, layout notes |
| animation-director | ui-designer sections | implemented motion, performance notes |
| qa-reviewer | any builder's completed work | issue list with severity, target agent, pass/fail |

---

## Autonomous Execution Rules

- Keep moving unless blocked — do not pause to ask about every small design or copy decision
- Make local improvements proactively — if something is weak while working in the file, fix it
- Run internal critique before presenting work — check hierarchy, spacing, CTA, copy
- Only stop and ask when a decision is high-risk or changes core direction
- Preserve the bread transformation animation as a signature differentiator

---

## Session Wrap-Up

At the end of each work session:
1. QA reviewer runs a final check (or self-review if QA was not invoked)
2. Log any learnings to `notes/learnings.md`
3. Note any unfinished work or follow-ups in the commit message or a note
4. Use `/compact` if continuing, `/clear` if switching tasks

---

## Quality Bar

Every change should leave the site:
- More polished than before
- Feeling like a real artisan bakery — warm, handcrafted, inviting
- Light, clean, premium but approachable — never cold or generic
- Mobile-friendly and conversion-focused
- Good enough to show potential bakery, cafe, and restaurant clients as proof of skill
