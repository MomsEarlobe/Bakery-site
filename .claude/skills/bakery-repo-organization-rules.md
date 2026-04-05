---
name: bakery-repo-organization-rules
description: File organization and repo structure rules for the Golden Crust Bakery site. Load this skill when creating, moving, or organizing files in the project.
---

# Golden Crust Bakery — Repo Organization Rules

## Folder Structure
```
Bakery-site/
├── CLAUDE.md               ← Project instructions (load first)
├── DESIGN-STANDARDS.md     ← Universal quality standards
├── SITE-THEME.md           ← Design tokens and visual identity
├── README.md               ← Repo overview for GitHub
├── index.html              ← Full page HTML
├── css/
│   └── styles.css          ← All styles, CSS custom properties
├── images/                 ← All images and visual assets
├── js/
│   └── interactions.js     ← All GSAP animations, scroll behavior, ordering UI
├── notes/
│   ├── learnings.md        ← Session learnings and decisions log
│   └── self-review.md      ← Screenshot review checklist
├── tools/                  ← MCP and agent tools (pre-existing)
└── .claude/
    ├── agents/             ← Agent definitions
    │   ├── bakery-strategist.md
    │   ├── bakery-copywriter.md
    │   ├── bakery-ui-designer.md
    │   ├── bakery-animation-director.md
    │   └── bakery-qa-reviewer.md
    ├── skills/             ← Skill definitions
    │   ├── bakery-project-overview.md
    │   ├── bakery-brand-and-design-rules.md
    │   ├── bakery-animation-and-interaction-rules.md
    │   ├── bakery-content-and-copy-rules.md
    │   ├── bakery-ordering-and-data-requirements.md
    │   ├── bakery-build-qa-checklist.md
    │   └── bakery-repo-organization-rules.md
    └── settings.local.json ← Local Claude settings
```

## File Rules

### One File Per Purpose
- All HTML in `index.html`
- All CSS in `css/styles.css`
- All JS in `js/interactions.js`
- No splitting into multiple files unless complexity demands it

### No External Dependencies (except CDN)
- GSAP loaded via CDN
- Google Fonts loaded via CDN link
- No npm, no bundler, no build tools
- Everything self-contained in this folder

### Images
- Store all images in `images/`
- Use descriptive filenames: `sourdough-loaf.jpg`, `bakery-interior.jpg`
- Optimize for web (compress, appropriate dimensions)
- Use `.webp` when possible for smaller file sizes

### Notes
- `notes/learnings.md` — log decisions, discoveries, and session notes
- `notes/self-review.md` — screenshot verification checklist
- Keep notes concise and actionable

### Git
- Commit with descriptive messages
- Do not commit secrets or API keys
- Do not commit large binary files unnecessarily
- Keep the repo clean — no temp files, no duplicates

## Naming Conventions

### CSS Classes
- Use descriptive, component-based naming
- Format: `section-name__element--modifier`
- Examples: `hero__headline`, `menu__card`, `menu__card--featured`
- Prefix utility classes: `u-text-center`, `u-margin-top`

### CSS Custom Properties
- Follow the token naming in SITE-THEME.md
- Prefix by category: `--bg-`, `--text-`, `--accent-`, `--sp-`, `--sz-`, `--r-`
- All tokens defined in `:root` at the top of `styles.css`

### JavaScript
- Functions: camelCase, descriptive names
- Format: `initScrollReveals()`, `initOrderingForm()`, `initBreadAnimation()`
- Group related functionality into clearly named init functions
- Call all init functions from a `DOMContentLoaded` listener

## What Not to Create
- No `package.json` (unless tools require it)
- No build configuration files
- No test files (this is a static demo site)
- No additional markdown files beyond those in the structure above
- No duplicate or backup files
