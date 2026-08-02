# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project overview
- Static personal portfolio site for Paul Piotrowski (arcade-styled UI).
- Runtime stack is plain HTML + JavaScript, with Tailwind loaded from CDN inside `index.html` (no Node package manager, bundler, or compile step).
- Deploy target is Vercel, with production updates triggered by pushes to `master`.

## Commands used in this codebase
There is no build, lint, or automated test pipeline configured in this repo.

### Run locally
- Windows (quick open):
  - `start index.html`
- PowerShell (explicit):
  - `Start-Process .\index.html`
- Optional local static server:
  - `python -m http.server 8080`
  - Then open `http://localhost:8080/`

### Build / Lint / Tests
- None configured in-repo. Validation is visual in the browser.

## Architecture
### 1) Page shell in `index.html`
- Full page structure (nav, hero, about, projects, experience, skills, education, contact).
- Tailwind config inlined in `<head>`; arcade fonts (Press Start 2P, VT323).
- Hooks consumed by JavaScript:
  - `#projects-container` / `#featured-project` for project cards
  - `data-i18n` attributes for translated text
  - Controls like `#lang-selector`, `.project-filter-btn`, `#contact-form`, `#back-to-top`

### 2) Behavior and data in `script.js`
- `projects[]`: project content, categories, tags, `image` thumbs under `assets/thumbs/`, outbound links
- `translations`: EN / ES / PT UI copy
- State: `currentLang`, `currentCategory`
- Featured hero prefers `id === 'prof-summarizer'`

### 3) Thumbnails
- Deployed sites: use landing-page screenshots in `assets/thumbs/`
- No live landing page: GitHub repo OG preview is OK

## Change guidance
### Adding or editing projects
- Modify `projects[]` in `script.js` with complete `en` / `es` / `pt` title + description.
- Add or update `assets/thumbs/<id>.png` and set `image`.
- Categories: `personal` | `school`; featured hero uses `featured: true` + preferred id.

### Updating translated UI copy
- Add/update keys across all three language objects in `translations`.
- Match `data-i18n` attributes in `index.html`.

### Experience
- Experience HTML lives in `index.html`; copy strings live in `translations` (`script.js`).

## Constraints
- Keep the site no-build static unless tooling is intentionally introduced.
- Quote `profile pic.jpg` in shell commands (space in filename).
- Vercel deploys from `master`.

See `CLAUDE.md` for color scheme notes and additional modification guides.
