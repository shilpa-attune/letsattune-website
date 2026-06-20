# Zero-build static site with duplicated markup

**Context.** The Let's Attune site is 3 small, stable pages maintained by a non-developer
who deploys via `git push` to GitHub Pages and previews by double-clicking an `.html` file.

**Decision.** No build tools, no framework, no static-site generator. Each page is a
self-contained `.html` file with its **header/footer/announcement-bar markup duplicated**
inline. Shared *styling and behaviour* live in a single `styles.css` and `main.js` linked
relatively, so the design is centralised even though the markup is copied.

**Why.** A generator (Eleventy/Astro) or JS fetch-includes would template the shared markup
once, but each carries a cost that outweighs the benefit at 3 pages: a generator adds npm +
a build step + `node_modules`, breaking the "just `git push`" workflow; `fetch()` includes
break `file://` double-click preview (CORS) and need a local server. Duplicating header/footer
across 3 files means a nav change is a 3-file edit — trivial and acceptable here.

**Consequence / note to future devs.** The repeated header/footer is **deliberate** — do not
"fix" it by introducing a templating layer unless the page count grows enough to justify the
tooling. Keep the shared look in `styles.css` / `main.js`; only structural markup is duplicated.
