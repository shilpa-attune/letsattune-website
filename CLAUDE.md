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

## Stack
- Plain HTML + CSS + vanilla JavaScript — no frameworks, no build tools
- Font: **Poppins** (Google Fonts) — weights 300, 400, 600
- No npm, no bundler, no server needed

## Colour Palette
Derived from the brand palette file (`assets/Lets attune pallet.jpeg`):
- Background: `#f4f7f4` (light sage)
- Primary text / navy: `#1a2a4a`
- Accent / coral: `#e03a4a`
- Section borders: `#e4ebe4`

## File Structure
```
/
├── index.html          # Homepage
├── coach.html          # About the Coach page
├── CNAME               # Custom domain (arise.letsattune.com)
├── CLAUDE.md           # This file
└── assets/
    ├── Lets Attune logo.png   # Brand logo
    ├── Lets attune pallet.jpeg # Colour palette reference
    └── shilpa.jpeg            # Coach photo
```

## Pages

### index.html — Homepage
Sections:
1. Sticky shrinking header (logo + nav)
2. Hero with typewriter effect ("Tune Into Yourself")
3. Why Coaching section (fade-in on scroll)
4. Coaching types — 4 cards with hover lift (Listening, Experience, Transformative, Group)
5. Values grid — 4 tiles with hover colour change (Connection, Inclusivity, Holistic, Resilience)
6. Testimonials carousel (auto-slides every 4.5s, 2 real client quotes)
7. Contact CTA → links to Google Form
8. Footer

### coach.html — About the Coach
Sections:
1. Sticky shrinking header
2. Dark navy hero with circular photo (Shilpa's photo, zoom on hover)
3. Skill tags (Shadow Work, EI, Positive Psychology, NLP, etc.)
4. Bio paragraphs (fade in on scroll)
5. Book a Session CTA → links to Google Form
6. Footer

## Effects Used
- **Typewriter** on hero headline (vanilla JS)
- **Sticky shrinking header** on scroll
- **Fade-in on scroll** (IntersectionObserver)
- **Card hover lift** (CSS transform)
- **Values tile hover** colour change (CSS)
- **Testimonials carousel** with dot navigation (auto-advance + clickable dots)
- **Photo zoom on hover** (CSS transform)
- **CTA button fill** on hover (CSS pseudo-element slide)

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
