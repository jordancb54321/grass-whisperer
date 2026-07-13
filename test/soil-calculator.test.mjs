import assert from 'node:assert/strict';
import test from 'node:test';
import { estimateLevellingSoil } from '../src/lib/soil-calculator.mjs';

test('estimates soil from area, survey range and unevenness', () => {
  const result = estimateLevellingSoil({
    lengthMetres: 10,
    widthMetres: 8,
    lowReadingCm: 2,
    highReadingCm: 10,
    unevenness: 'moderate',
  });

  assert.equal(result.areaSquareMetres, 80);
  assert.equal(result.levelDifferenceCm, 8);
  assert.equal(result.averageFillDepthCm, 3.2);
  assert.equal(result.baseVolumeCubicMetres, 2.56);
  assert.equal(result.orderVolumeCubicMetres, 2.816);
  assert.equal(result.estimatedKilograms, 4224);
  assert.equal(result.bulkBags, 6);
  assert.equal(result.smallBags, 169);
  assert.equal(result.planningLowKilograms, 3328);
  assert.equal(result.planningHighKilograms, 5005);
});

test('survey reading order does not change the estimate', () => {
  const forward = estimateLevellingSoil({ lengthMetres: 5, widthMetres: 4, lowReadingCm: 1, highReadingCm: 7, unevenness: 'slight' });
  const reverse = estimateLevellingSoil({ lengthMetres: 5, widthMetres: 4, lowReadingCm: 7, highReadingCm: 1, unevenness: 'slight' });
  assert.deepEqual(reverse, forward);
});

test('returns no soil when the survey readings are level', () => {
  const result = estimateLevellingSoil({ lengthMetres: 5, widthMetres: 4, lowReadingCm: 3, highReadingCm: 3, unevenness: 'severe' });
  assert.equal(result.estimatedKilograms, 0);
  assert.equal(result.bulkBags, 0);
  assert.equal(result.smallBags, 0);
});

test('rejects invalid dimensions and unevenness values', () => {
  assert.throws(
    () => estimateLevellingSoil({ lengthMetres: 0, widthMetres: 4, lowReadingCm: 1, highReadingCm: 5, unevenness: 'moderate' }),
    /dimensions/i,
  );
  assert.throws(
    () => estimateLevellingSoil({ lengthMetres: 5, widthMetres: 4, lowReadingCm: 1, highReadingCm: 5, unevenness: 'unknown' }),
    /unevenness/i,
  );
});
