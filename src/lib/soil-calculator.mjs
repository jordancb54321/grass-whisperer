const UNEVENNESS_FACTORS = Object.freeze({
  slight: 0.25,
  moderate: 0.4,
  severe: 0.55,
});

const round = (value, places = 3) => {
  const multiplier = 10 ** places;
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};

export function estimateLevellingSoil({
  lengthMetres,
  widthMetres,
  lowReadingCm,
  highReadingCm,
  unevenness,
}) {
  if (![lengthMetres, widthMetres].every(Number.isFinite) || lengthMetres <= 0 || widthMetres <= 0) {
    throw new RangeError('Lawn dimensions must be positive numbers.');
  }

  if (![lowReadingCm, highReadingCm].every(Number.isFinite)) {
    throw new RangeError('High and low survey readings must be numbers.');
  }

  const profileFactor = UNEVENNESS_FACTORS[unevenness];
  if (!profileFactor) {
    throw new RangeError('Choose a valid unevenness level.');
  }

  const areaSquareMetres = round(lengthMetres * widthMetres);
  const levelDifferenceCm = round(Math.abs(highReadingCm - lowReadingCm));
  const averageFillDepthCm = round(levelDifferenceCm * profileFactor);
  const baseVolumeCubicMetres = round(areaSquareMetres * (averageFillDepthCm / 100));
  const orderVolumeCubicMetres = round(baseVolumeCubicMetres * 1.1);
  const estimatedKilograms = Math.round(orderVolumeCubicMetres * 1500);

  return {
    areaSquareMetres,
    levelDifferenceCm,
    averageFillDepthCm,
    baseVolumeCubicMetres,
    orderVolumeCubicMetres,
    estimatedKilograms,
    bulkBags: estimatedKilograms === 0 ? 0 : Math.ceil(estimatedKilograms / 800),
    smallBags: estimatedKilograms === 0 ? 0 : Math.ceil(estimatedKilograms / 25),
    planningLowKilograms: Math.round(baseVolumeCubicMetres * 1300),
    planningHighKilograms: Math.round(baseVolumeCubicMetres * 1700 * 1.15),
  };
}
