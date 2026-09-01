import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [layout, styles] = await Promise.all([
  readFile(new URL('../src/layouts/BaseLayout.astro', import.meta.url), 'utf8'),
  readFile(new URL('../src/styles/global.css', import.meta.url), 'utf8'),
]);

test('site exposes an accessible theme toggle that persists the visitor preference', () => {
  assert.match(layout, /class="theme-toggle"/);
  assert.match(layout, /aria-pressed=/);
  assert.match(layout, /localStorage\.setItem\('grass-whisperer-theme'/);
  assert.match(layout, /document\.documentElement\.dataset\.theme/);
});

test('dark theme has an explicit color system and honors the system preference', () => {
  assert.match(styles, /html\[data-theme='dark'\]/);
  assert.match(styles, /@media \(prefers-color-scheme: dark\)/);
  assert.match(styles, /--paper:\s*#[0-9a-f]{6}/i);
  assert.match(styles, /--ink:\s*#[0-9a-f]{6}/i);
});
