import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 8080;
const API_ROUTES = new Set(['chat', 'resume', 'walkthrough']);

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

async function handleAPI(routeName, req, res) {
  if (!API_ROUTES.has(routeName)) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'API route not found' }));
    return;
  }

  const mod = await import(`./api/${routeName}.js`);
  const headers = {};
  req.headers && Object.entries(req.headers).forEach(([k, v]) => { headers[k] = v; });
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks).toString();

  const fakeReq = {
    method: req.method,
    headers,
    json: () => JSON.parse(body || '{}'),
  };

  const response = await mod.default(fakeReq);
  res.writeHead(response.status || 200, Object.fromEntries(response.headers.entries()));

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }
  res.end();
}

const server = http.createServer(async (req, res) => {
  const rawPath = (req.url || '/').split('?')[0];
  const lowerRawPath = rawPath.toLowerCase();
  if (lowerRawPath.includes('/../') || lowerRawPath.startsWith('/..') || lowerRawPath.includes('%2e%2e')) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname.startsWith('/api/')) {
    const routeName = url.pathname.replace('/api/', '').replace(/\/$/, '');
    if (!/^[a-z0-9_-]+$/i.test(routeName)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid API route' }));
      return;
    }
    try {
      await handleAPI(routeName, req, res);
    } catch (err) {
      console.error(`API error (${routeName}):`, err.message);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  const requestPath = url.pathname === '/' ? '/index.html' : url.pathname;
  if (requestPath.split('/').some((segment) => segment === '..')) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  const filePath = path.resolve(__dirname, `.${requestPath}`);
  const rootPrefix = `${__dirname}${path.sep}`;

  if (!filePath.startsWith(rootPrefix)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath);

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => console.log(`Dev server: http://localhost:${PORT}`));
