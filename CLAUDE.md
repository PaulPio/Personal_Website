# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Paul Piotrowski, showcasing projects, education, experience, and skills. Built with vanilla HTML, JavaScript, and Tailwind CSS (CDN) - no build process required.

## Development Workflow

This is a **static site** with no build tools or package managers.

**To view/test changes:**
```bash
# Simply open the HTML file in a browser
open index.html  # macOS
start index.html # Windows
```

**To deploy:**
- The site is deployed on Vercel
- Push changes to the `master` branch to trigger automatic deployment

## Architecture

### File Structure
- **index.html** - Main HTML structure, all sections, inline styles
- **script.js** - All JavaScript (projects data, translations, event handlers, animations)
- **profile pic.jpg** - Profile photo
- **Paul_Piotrowski_Resume.pdf** - Downloadable resume

### Key Architectural Patterns

**1. Multi-Language Support**
- Three languages: English (en), Spanish (es), Portuguese (pt)
- All translations stored in `translations` object in script.js
- Projects have multilingual titles and descriptions
- Use `data-i18n` attributes on HTML elements to enable translation
- Current language tracked in `currentLang` variable

**2. Dynamic Project Rendering**
- Projects array in script.js contains all project data
- Projects categorized as: `featured`, `personal`, `school`
- Filter by category using `currentCategory` variable
- Projects render into `#projects-container` dynamically
- Each project has localized title, description, tags, and links

**3. GitHub Activity Integration**
- Uses external API services for GitHub stats (not part of this codebase):
  - `ghchart.rshah.org` - Contribution calendar
  - `github-readme-stats.vercel.app` - Stats cards and language stats
  - `streak-stats.demolab.com` - Contribution streak
- Color scheme: Green (`#16a34a` light, `#22c55e` dark) to match GitHub style
- All images have dark/light mode variants
- Error handling: broken images auto-hide via inline `onerror` handlers

**4. Theme System**
- Dark mode via Tailwind's `dark:` class modifier
- Theme persisted in `localStorage.theme`
- Respects system preference on first visit
- Toggle button triggers class change on `<html>` element

## Common Modifications

### Adding a New Project
1. Add project object to `projects` array in script.js
2. Include all required fields: id, title (EN/ES/PT), description (EN/ES/PT), category, tags, links
3. Set `featured: true` if it should appear in Featured Projects filter
4. Projects auto-render on page load

### Updating GitHub Stats Colors
All GitHub stat images use URL parameters for colors. To change colors:
- Find the `<!-- GitHub Stats -->` section in index.html
- Update color hex codes in image URLs (remove `#` prefix)
- Maintain separate colors for light/dark modes

### Adding Translations
1. Add new key to all three language objects in `translations` (en, es, pt)
2. Add `data-i18n="your_key"` attribute to HTML element
3. Translation applies automatically on language change

### Contact Form
- Uses Formspree (action URL in index.html form element)
- Form submission handled in `initContactForm()` function
- To change form endpoint, update the `action` attribute on `#contact-form`

## Important Implementation Notes

**Tailwind CSS**
- Loaded via CDN (no build step)
- Custom config inline in `<script>` tag in `<head>`
- Uses dark mode class strategy

**Third-Party Services**
- Vercel Analytics included for page tracking
- Formspree for contact form submissions
- Multiple GitHub stats services (can be rate-limited)

**Image Handling**
- All images should have explicit error handlers
- GitHub stats images must have light/dark variants
- Use `loading="lazy"` for below-fold images only (not critical images)

**Responsive Design**
- Mobile-first approach with Tailwind breakpoints
- Mobile menu toggle functionality in inline script
- All sections should work on mobile (320px) through desktop (2560px+)

## Color Scheme

**Light Mode:**
- Primary: Blue #2563eb (blue-600)
- Accent: Green #16a34a (green-600) for GitHub elements
- Background: #f8fafc (slate-50)

**Dark Mode:**
- Primary: Blue #60a5fa (blue-400)
- Accent: Green #22c55e (green-500) for GitHub elements
- Background: #1f2937 (gray-800)

## Git Workflow

**Main branch:** `master`
- All production code on master
- Direct commits acceptable (personal project)
- Vercel auto-deploys from master

**Making changes:**
- Test locally by opening index.html
- Commit with descriptive messages
- Push to trigger deployment
