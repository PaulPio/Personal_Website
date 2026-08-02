# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
- This repository is a static personal portfolio site.
- Runtime stack is plain HTML + JavaScript, with Tailwind loaded from CDN inside `index.html` (no Node package manager, bundler, or compile step).
- Deploy target is Vercel, with production updates triggered by pushes to `master`.

## Commands used in this codebase
There is no build, lint, or automated test pipeline configured in this repo.

### Run locally
- Windows (quick open):
  - `start index.html`
- PowerShell (explicit):
  - `Start-Process .\index.html`
- Optional local static server (useful for browser-like hosting behavior):
  - `python -m http.server 8000`
  - Then open `http://localhost:8000/`

### Build
- None (static files only).

### Lint
- None configured in-repo.

### Tests
- None configured in-repo.
- Single test execution is not applicable because there is no test framework in this repository.

## Architecture (big picture)
### 1) Content-first page shell in `index.html`
- `index.html` contains the full page structure (sections, navigation, contact form, resume links, social links, fixed action buttons).
- Tailwind config is inlined in `<head>` (`darkMode: 'class'`), and styles are primarily utility classes.
- The page defines placeholders/hooks consumed by JavaScript:
  - `#projects-container` for dynamic project cards
  - `data-i18n` attributes for translated text
  - Controls like `#theme-toggle`, `#lang-selector`, `.project-filter`, `.project-filter-btn`, `#contact-form`, `#back-to-top`, and `#skill-bars`.

### 2) Behavior and data live in `script.js`
- `script.js` is the single behavior layer and holds two large in-memory data models:
  - `projects[]`: canonical project content, categories, tags, and outbound links
  - `translations`: per-language UI text for English/Spanish/Portuguese
- App state is managed via two globals:
  - `currentLang` (active language)
  - `currentCategory` (active project filter)
- On `DOMContentLoaded`, initialization runs in this order:
  - theme bootstrap from `localStorage`
  - `renderProjects()`
  - `updateLanguage()`
  - `setupEventListeners()`
  - animation and UX initializers (`initScrollAnimations`, `initBackToTop`, `initSkillBars`)
  - `initContactForm()`

### 3) How key features are implemented
- Project filtering/rendering:
  - `renderProjects()` filters `projects[]` by `currentCategory`, updates the projects section title from translation keys, then recreates all project cards into `#projects-container`.
  - `updateFilterButtons()` keeps top-level filter button styles in sync with active category.
- Internationalization:
  - `updateLanguage()` reads `data-i18n` attributes and writes text/placeholder content from `translations[currentLang]`.
  - Language changes trigger both `updateLanguage()` and `renderProjects()` so project titles/descriptions switch language too.
- Theme:
  - Theme uses HTML root `dark` class + `localStorage.theme`.
  - Toggle handler updates both class and persistence.
- Contact workflow:
  - `initContactForm()` intercepts submit, POSTs `FormData` to Formspree endpoint from the form `action`, and updates `#form-status`.
- Scroll/animation UX:
  - IntersectionObserver powers reveal animations (`.fade-in-up`) and skill bar fill animation (`.skill-bar-fill` widths from `data-width`).
  - Back-to-top visibility toggles based on scroll position.

## Change guidance for future agents
### Adding or editing projects
- Modify `projects[]` in `script.js`.
- Keep each project’s language fields (`title`, `description`) complete for `en`, `es`, and `pt` to avoid missing UI text.
- Ensure `category` matches expected filter values (`featured` behavior is controlled by `featured: true`, while category filtering uses `all|personal|school`).

### Updating translated UI copy
- Add/update keys across all three language objects in `translations`.
- Use matching `data-i18n` attributes in `index.html`.
- If translated content appears in project cards, update `projects[]` language fields (not `translations`).

### Working constraints inherited from `CLAUDE.md`
- Treat this as a no-build static site unless tooling is intentionally introduced.
- Local verification is primarily browser-based.
- Vercel deploy flow is branch-push based (`master`).
