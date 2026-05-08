## Cursor Cloud specific instructions

This is a static site (vanilla HTML + JS + Tailwind CSS via CDN). There is no build step, no package manager, and no dependencies to install.

### Running the site locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser. The site requires internet access for the Tailwind CSS CDN (`cdn.tailwindcss.com`); without it, all styling is lost.

### Linting / Testing

There are no automated tests or lint tools configured. Validation is done visually by opening `index.html` in a browser and manually verifying features (theme toggle, language switcher, project filters, responsive layout).

### Key gotchas

- The file `profile pic.jpg` has a space in its name; always quote the path when referencing it in shell commands.
- Tailwind config is inline in a `<script>` tag inside `index.html` `<head>`, not in a separate config file.
- GitHub stats images rely on third-party APIs that are rate-limited; broken images auto-hide via `onerror` handlers.
- Vercel Analytics script only works when deployed to Vercel; it 404s in local dev (this is expected and non-blocking).

### Architecture reference

See `CLAUDE.md` for full architectural details, color scheme, translation system, and modification guides.
