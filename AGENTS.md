## Cursor Cloud specific instructions

This is a static portfolio site with AI-powered features (vanilla HTML + JS + Tailwind CSS via CDN). The AI features use Vercel serverless edge functions + Anthropic Claude via the Vercel AI SDK.

### Running the site locally (with AI features)

```bash
node dev-server.js
```

This serves static files AND proxies the `/api/*` routes locally. Requires `ANTHROPIC_API_KEY` in the environment. If the key isn't set, the widget renders but shows a graceful error when attempting AI calls.

For static-only dev (no AI): `python3 -m http.server 8080`

### Dependencies

```bash
npm install
```

Packages: `ai` (Vercel AI SDK v6) and `@ai-sdk/anthropic`. Used by the edge functions in `/api/`.

### Linting / Testing

No automated tests or lint tools. Validation is visual — open the site in a browser and verify features (theme toggle, language switcher, project filters, chat widget, animations).

To validate API module syntax: `node -e "import './api/context.js'"`

### Key gotchas

- The file `profile pic.jpg` has a space in its name; always quote it in shell commands.
- Tailwind config is inline in a `<script>` tag inside `index.html` `<head>`.
- AI model is `claude-sonnet-4-6` — if Anthropic deprecates this, check `curl -s https://api.anthropic.com/v1/models -H "x-api-key: $ANTHROPIC_API_KEY" -H "anthropic-version: 2023-06-01"` for current IDs.
- `dev-server.js` caches imported modules; restart it after changing API route files.
- `chat-widget.js` reads the `projects` array from `script.js` — it must load after `script.js`.
- API routes use ES modules (`"type": "module"` in package.json) and Vercel edge runtime.
- GitHub stats images rely on rate-limited third-party APIs; broken images auto-hide via `onerror`.
- Vercel Analytics script 404s in local dev (expected).

### Architecture reference

See `CLAUDE.md` for full details on color scheme, translation system, and modification guides.
