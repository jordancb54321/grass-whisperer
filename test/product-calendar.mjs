import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../dist/lawn-care-calendar/index.html', import.meta.url), 'utf8');

assert.match(html, /Product prompts, not a shopping list/i);
for (const term of [
  'Spring lawn fertiliser',
  'Slow-release lawn fertiliser',
  'Autumn lawn fertiliser',
  'Lawn seed',
  'Bone meal is not a routine lawn feed',
  'Do not fertilise drought-stressed, frozen or waterlogged turf',
]) {
  assert.match(html, new RegExp(term, 'i'), `Expected product schedule guidance for: ${term}`);
}

console.log('Product-aware lawn-care calendar includes seasonal recommendations and safety guardrails.');
