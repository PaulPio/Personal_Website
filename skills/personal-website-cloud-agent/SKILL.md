---
name: personal-website-cloud-agent
description: Use when a Cloud agent needs to run, test, or verify this personal portfolio website repository.
---

# Personal Website Cloud Agent Runbook

## Overview

This repo is a static portfolio site: no package manager, build step, database, auth session, or feature-flag service. Test it as browser-delivered HTML/CSS/JS plus a few third-party services.

## Quick Start

1. Confirm you are in `/workspace` and on the intended branch.
2. Start a local static server:
   `python3 -m http.server 4173 --bind 127.0.0.1`
3. Open `http://127.0.0.1:4173/index.html`.
4. For syntax-only checks, run:
   `node --check script.js`

No app login is required. Do not log into Vercel, Formspree, GitHub, or external project demos unless the task explicitly requires it.

## Codebase Areas

### HTML, layout, and static assets

Files: `index.html`, `profile pic.jpg`, `Paul_Piotrowski_Resume.pdf`.

Testing workflow:
- Serve locally and inspect desktop plus mobile widths.
- Check header navigation, mobile menu, section anchors, resume link, profile image, and contact form presence.
- Expect Tailwind, Google Fonts, Vercel Analytics, GitHub stat cards, and Formspree to depend on network access.

### JavaScript interactions

File: `script.js`.

Testing workflow:
- Run `node --check script.js`.
- In the browser, test theme toggle, language selector (`EN`, `ES`, `PT`), project filters (`Featured`, `All`, `Personal`, `School`), back-to-top button, fade-in animations, and skill bars.
- Validate content changes by interacting with the page, not by editing `currentLang` or `currentCategory` directly.

### Projects and translations

Primary data lives in `projects` and `translations` in `script.js`; translated elements in `index.html` use `data-i18n` or `data-i18n-btn`.

Testing workflow:
- For new projects, check every title and description has `en`, `es`, and `pt`.
- Confirm category filtering shows the project in the intended view.
- If a project should be on the default page, set `featured: true` and verify it appears under `Featured`.
- For translation edits, switch each language in the browser and inspect affected sections.

### External integrations

Integrations: Tailwind CDN, Google Fonts, Vercel Analytics, GitHub stats image services, Formspree.

Testing workflow:
- Treat failed GitHub stat images as non-blocking when their inline `onerror` hides them.
- Local Vercel Analytics may 404; this is expected outside Vercel.
- Avoid sending real contact form submissions during routine tests. For contact-form work, temporarily mock `window.fetch` in DevTools or use a disposable test message only when explicitly requested.

### Feature flags and environment

There are no runtime feature flags, `.env` files, or build-time environment variables. UI state is controlled by:
- `localStorage.theme` for light/dark mode.
- The language selector DOM state for translations.
- Project filter buttons and `data-category` values for project views.

Mock states through browser controls or DevTools localStorage. Do not add a flag framework for one-off testing.

### Deployment checks

Production deploys from `master` on Vercel after push.

Testing workflow before shipping:
- Confirm `git diff` only contains intended files.
- Run `node --check script.js` after JavaScript edits.
- Serve the site locally and manually exercise changed areas.
- For UI changes, capture a screenshot or short video showing the changed behavior.

## Updating This Skill

When you discover a new setup step, test shortcut, flaky external service behavior, or reliable workaround:
1. Add the smallest useful instruction to the relevant codebase area.
2. Include the exact command, URL, mock, or browser action.
3. Remove outdated advice in the same edit.
4. Re-run the workflow you documented before committing the skill update.
