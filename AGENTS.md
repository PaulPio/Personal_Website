## Cursor Cloud specific instructions

This is a static portfolio site with AI-powered features (vanilla HTML + JS + Tailwind CSS via CDN). The AI features use Vercel serverless edge functions + AI SDK.

### Running the site locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/` in a browser. The site requires internet access for the Tailwind CSS CDN (`cdn.tailwindcss.com`); without it, all styling is lost.

The AI chat widget will render but API calls will fail in local dev (they require Vercel's serverless runtime + `OPENAI_API_KEY`). This is expected and the widget handles it gracefully.

### Dependencies

```bash
npm install
```

The `package.json` has `ai` and `@ai-sdk/openai` as dependencies, used only by the Vercel edge functions in `/api/`.

### Linting / Testing

There are no automated tests or lint tools configured. Validation is done visually by opening `index.html` in a browser and manually verifying features (theme toggle, language switcher, project filters, chat widget UI, responsive layout).

To validate API module syntax: `node -e "import './api/context.js'"` (requires Node 18+).

### Key gotchas

- The file `profile pic.jpg` has a space in its name; always quote the path when referencing it in shell commands.
- Tailwind config is inline in a `<script>` tag inside `index.html` `<head>`, not in a separate config file.
- GitHub stats images rely on third-party APIs that are rate-limited; broken images auto-hide via `onerror` handlers.
- Vercel Analytics script only works when deployed to Vercel; it 404s in local dev (this is expected and non-blocking).
- AI chat widget (`chat-widget.js`) reads the `projects` array from `script.js` for the Code Walkthrough feature. It must load after `script.js`.
- API routes use ES modules (`"type": "module"` in package.json) and Vercel edge runtime.

### Architecture reference

See `CLAUDE.md` for full architectural details, color scheme, translation system, and modification guides.
