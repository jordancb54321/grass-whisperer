import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const expectedLinks = [
  'https://www.rhs.org.uk/lawns',
  'https://www.gardenersworld.com/how-to/maintain-the-garden/how-to-care-for-your-lawn/',
  'https://www.lawnsmith.co.uk/lawn-care-advice/',
  'https://www.lovethegarden.com/uk-en/lawn-care',
  'https://thegrasspeople.com/help-advice/',
  'https://www.youtube.com/watch?v=w_dsoOCWy0E',
  'https://www.youtube.com/watch?v=_2hrfemLDGg',
  'https://www.youtube.com/watch?v=u5SpSR3yyEk',
  'https://www.youtube.com/watch?v=DxtmESJOaZ0',
  'https://www.landis.org.uk/soilscapes/',
  'https://www.metoffice.gov.uk/weather/forecast/uk',
  'https://www.water.org.uk/customers/find-your-supplier',
];

test('resources page contains the verified links and source context', async () => {
  const html = await readFile(new URL('../dist/resources/index.html', import.meta.url), 'utf8');
  assert.match(html, /Useful lawn-care resources/i);
  for (const link of expectedLinks) {
    assert.ok(html.includes(link.replaceAll('&', '&amp;')) || html.includes(link), `Expected verified resource ${link}`);
  }
  assert.match(html, /Commercial source/i);
  assert.match(html, /Reviewed 13 July 2026/i);
  assert.match(html, /external websites/i);
});
