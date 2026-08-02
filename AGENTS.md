# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project overview
- This repository is a static personal portfolio site with optional AI-powered features.
- Frontend is plain HTML + JavaScript, with Tailwind loaded from CDN inside `index.html` (no bundler or compile step).
- AI features use Vercel serverless edge functions + Anthropic Claude via the Vercel AI SDK (`/api/*`, `chat-widget.js`).
- Deploy target is Vercel, with production updates triggered by pushes to `master`.

## Commands used in this codebase

### Run locally (with AI features)

```bash
npm install
node dev-server.js
```

This serves static files AND proxies the `/api/*` routes locally. Requires `ANTHROPIC_API_KEY` in the environment. If the key isn't set, the widget renders but shows a graceful error when attempting AI calls.

### Run locally (static only, no AI)

```bash
# Windows
start index.html

# Or a simple static server
python -m http.server 8080
# Then open http://localhost:8080/
```

### Build
- None (static files + edge functions; no frontend compile step).

### Lint
- None configured in-repo.

### Tests
- None configured in-repo.
- Validation is visual — open the site in a browser and verify features (theme toggle, language switcher, project filters, chat widget, animations).
- To validate API module syntax: `node -e "import './api/context.js'"`

### Dependencies

```bash
npm install
```

Packages: `ai` (Vercel AI SDK v6) and `@ai-sdk/anthropic`. Used by the edge functions in `/api/`.

## Architecture (big picture)
### 1) Content-first page shell in `index.html`
- `index.html` contains the full page structure (sections, navigation, contact form, resume links, social links, fixed action buttons).
- Tailwind config is inlined in `<head>` (`darkMode: 'class'`), and styles are primarily utility classes.
- The page defines placeholders/hooks consumed by JavaScript:
  - `#projects-container` for dynamic project cards
  - `data-i18n` attributes for translated text
  - Controls like `#theme-toggle`, `#lang-selector`, `.project-filter`, `.project-filter-btn`, `#contact-form`, `#back-to-top`, and `#skill-bars`.
- `chat-widget.js` loads after `script.js` (it reads the `projects` array).

### 2) Behavior and data live in `script.js`
- `script.js` is the main behavior layer and holds two large in-memory data models:
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

### 3) AI features
- `api/chat.js` — streaming chat assistant ("Ask Paul AI")
- `api/walkthrough.js` — project code walkthrough assistant
- `api/context.js` — shared portfolio context injected into system prompts
- `dev-server.js` — local static server + `/api/*` proxy
- `chat-widget.js` — floating chat/walkthrough UI widget

### 4) How key frontend features are implemented
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
- If the AI assistant should know about the project, also update `api/context.js`.

### Updating translated UI copy
- Add/update keys across all three language objects in `translations`.
- Use matching `data-i18n` attributes in `index.html`.
- If translated content appears in project cards, update `projects[]` language fields (not `translations`).

### Key gotchas
- The file `profile pic.jpg` has a space in its name; always quote it in shell commands.
- Tailwind config is inline in a `<script>` tag inside `index.html` `<head>`.
- AI model is `claude-sonnet-4-6` — if Anthropic deprecates this, check `curl -s https://api.anthropic.com/v1/models -H "x-api-key: $ANTHROPIC_API_KEY" -H "anthropic-version: 2023-06-01"` for current IDs.
- `dev-server.js` caches imported modules; restart it after changing API route files.
- `chat-widget.js` reads the `projects` array from `script.js` — it must load after `script.js`.
- API routes use ES modules (`"type": "module"` in package.json) and Vercel edge runtime.
- GitHub stats images rely on rate-limited third-party APIs; broken images auto-hide via `onerror`.
- Vercel Analytics script 404s in local dev (expected).

### Working constraints
- Frontend remains no-build static HTML/JS unless tooling is intentionally introduced.
- Local verification is primarily browser-based; use `node dev-server.js` when testing AI routes.
- Vercel deploy flow is branch-push based (`master`).

### Architecture reference
See `CLAUDE.md` for full details on color scheme, translation system, and modification guides.
