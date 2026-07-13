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

for (const image of [
  'grass-type-perennial-ryegrass.webp',
  'grass-type-red-fescue.webp',
  'grass-type-hard-fescue.webp',
  'grass-type-browntop-bent.webp',
  'grass-type-smooth-stalked-meadow-grass.webp',
  'grass-type-tall-fescue.webp',
]) {
  assert.match(html, new RegExp(`/images/${image}`), `Expected local image ${image}`);
}

assert.equal((html.match(/class="grass-type-photo"/g) ?? []).length, 6, 'Expected one labelled photo for each grass type');
console.log('UK lawn grass-types guide contains all required species, decision details and six labelled photographs.');
