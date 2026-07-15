import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/guides/reuse-turf/index.html', import.meta.url), 'utf8');

assert.match(html, /How to lift and reuse turf/i);
for (const phrase of [
  'Prepare the receiving area first',
  'Lift turf in manageable strips',
  'Keep the roots damp and the turf cool',
  'Lay it again promptly',
  'Avoid reusing turf that carries persistent weeds',
]) {
  assert.match(html, new RegExp(phrase, 'i'), `Expected reuse-turf guidance: ${phrase}`);
}

console.log('Reusable turf guide includes lift, storage, relaying and suitability guidance.');
