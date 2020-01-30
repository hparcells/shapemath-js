/**
 * Converts radians to degrees.
 * @param degrees The amount of degrees to convert.
 */
export function degreesToRadians(degrees: number) {
  if(typeof degrees !== 'number') {
    throw new TypeError('Provided degrees must be typeof number.');
  }

  return degrees * (Math.PI / 180);
}

/**
 * Converts radians to degrees.
 * @param radians The amount of radians to convert.
 */
export function radiansToDegrees(radians: number) {
  if(typeof radians !== 'number') {
    throw new TypeError('Provided radians must be typeof number.');
  }

  return radians * (180 / Math.PI);
}
