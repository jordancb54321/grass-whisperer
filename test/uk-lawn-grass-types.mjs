import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/guides/uk-lawn-grass-types/index.html', import.meta.url), 'utf8');

assert.match(html, /Common UK lawn grass types/i);
for (const grass of [
  'Perennial ryegrass',
  'Red fescues',
  'Hard fescue',
  'Browntop bent',
  'Smooth-stalked meadow-grass',
  'Tall fescue',
]) {
  assert.match(html, new RegExp(grass, 'i'), `Expected ${grass} in the guide`);
}

for (const heading of ['What it is', 'Pros', 'Watch-outs', 'Best conditions']) {
  assert.match(html, new RegExp(heading, 'i'), `Expected a ${heading} heading`);
}

console.log('UK lawn grass-types guide contains all required species and decision details.');
