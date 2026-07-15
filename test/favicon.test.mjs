import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');

assert.match(html, /rel="icon"[^>]+href="\/favicon-48\.png"/i);
assert.match(html, /rel="apple-touch-icon"[^>]+href="\/apple-touch-icon\.png"/i);
assert.match(html, /rel="manifest"[^>]+href="\/site\.webmanifest"/i);

for (const path of ['../dist/favicon.ico', '../dist/favicon-48.png', '../dist/apple-touch-icon.png', '../dist/site.webmanifest']) {
  await access(new URL(path, import.meta.url));
}

console.log('Search-friendly favicon assets and declarations are present.');
