# Let's Attune — Website

## Overview
Static HTML website for Shilpa Jahagirdar's life coaching business **Let's Attune**.
Hosted on GitHub Pages at `arise.letsattune.com` (custom subdomain).

## Repo
- GitHub account: `shilpa-attune`
- Repo: `shilpa-attune/letsattune-website`
- SSH alias: `github-letsattune-website`
- Push command: `git remote set-url origin git@github-letsattune-website:shilpa-attune/letsattune-website.git`

## Hosting
- Platform: GitHub Pages (free)
- Custom domain: `arise.letsattune.com`
- SSL: Enforced via GitHub Pages (Let's Encrypt)
- Deploy: automatic on push to `main` branch (~30 seconds)

> **Brand & content vocabulary lives in `CONTEXT.md`** — read it before changing copy.
> **Architecture rationale lives in `docs/adr/0001`** (why zero-build / duplicated markup).

## Stack
- Plain HTML + CSS + vanilla JavaScript — no frameworks, no build tools
- Shared `styles.css` + `main.js` (design/behaviour centralised); header/footer markup is
  duplicated per page on purpose — see ADR 0001. Do not introduce a templating layer/SSG.
- Fonts (Google Fonts): **Fraunces** (display/headlines/brand) + **Poppins** (body/UI)
- No npm, no bundler, no server needed

## Colour Palette
Sampled from the brand palette file (`assets/Lets attune pallet.jpeg`) — CSS vars in `styles.css`:
- Navy (primary text / dark sections): `#1d3557`
- Steel blue (secondary accent): `#457b9d`
- Coral (CTAs / highlights): `#e63946`
- Dark green (rare accent / announce bar): `#0e4f47`
- Sage (brand field): `#abc9c9`
- Page base: `#f3f7f6` (light sage tint) · soft sage band: `#dbe8e6`

## File Structure
```
/
├── index.html          # Homepage
├── coach.html          # About the Coach (bio fits one screen)
├── workshops.html      # Current workshop landing page
├── styles.css          # Shared design system
├── main.js             # Shared behaviour (header, nav, reveal, typewriter)
├── CNAME               # Custom domain (arise.letsattune.com)
├── CLAUDE.md           # This file
├── CONTEXT.md          # Brand & content vocabulary (source of truth for copy)
├── docs/adr/           # Architecture decision records
└── assets/
    ├── Lets Attune logo.png    # Brand logo ('S monogram)
    ├── Lets attune pallet.jpeg # Colour palette reference
    ├── the-place-within.jpeg   # Sentimental forest photo (hero background)
    ├── shilpa.jpeg             # Coach photo (small, round teaser)
    ├── shilpa-full.jpg         # Coach photo (hi-res, About page)
    ├── workshop.jpeg           # Workshop session photo (workshops hero banner)
    └── qr.png                  # WhatsApp business QR (footer)
```

## Pages

### index.html — Homepage
1. Announcement bar (current workshop) + sticky glass header
2. Atmospheric forest hero (duotone + blur + grain), typewriter "Tune Into Yourself", 2 CTAs
3. "Does this sound familiar?" — 6 pain-point cards
4. How We Help — Understand → Explore → Align → Integrate (4 steps)
5. Ways We Support — Coaching · Workshops · Listening Circles · Corporate Programs
6. Who We Work With — pills
7. Coach teaser → coach.html
8. Testimonials (2, static 2-up on navy)
9. Why Let's Attune — serif manifesto
10. CTA strip + footer (QR, links, motto)

### coach.html — About the Coach
- Split bio that fits one screen (hi-res photo + condensed bio + credentials + CTAs)
- Beyond Coaching modality tags + blog links
- CTA + footer

### workshops.html — Current workshop
- Women's Reset & Reconnection Workshop (Jul 24–26 2026). Hardcoded but easy to swap.
- Facts strip, who-it's-for, "are you / wouldn't you rather" compare, what-we-explore,
  schedule, register CTA → Google Form + WhatsApp.

## Booking / contact
- Primary CTA → Google Form (`forms.gle/p1m3mecHvxKqkyVN9`)
- Secondary → WhatsApp `wa.me/918080166955` · email `shilpa@letsattune.com`
- No Calendly.

## Effects Used
- Typewriter hero headline · sticky shrinking glass header · scroll fade-ins (IntersectionObserver)
- Card/step hover lift · pill hover · animated announce-bar pulse · forest duotone hero
- All motion respects `prefers-reduced-motion`

## Local Preview
Just double-click `index.html` — opens directly in browser. No server needed.
All JS effects work fine locally (no API calls or network requests).

## Workflow
1. Make changes to HTML files
2. Preview locally (double-click index.html)
3. `git add . && git commit -m "description" && git push`
4. Site updates live in ~30 seconds

## Business Info
- Business: Let's Attune — life & executive coaching
- Coach: Shilpa Jahagirdar (PCC, ICF Certified)
- Email: shilpa@letsattune.com
- Phone: +8080166955
- Contact form: https://forms.gle/p1m3mecHvxKqkyVN9
- Original Google Sites: https://www.letsattune.com/
