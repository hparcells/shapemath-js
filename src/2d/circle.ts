/**
 * Finds the area of a circle given the radius.
 * @param radius The radius of the circle.
 */
export function areaByRadius(radius: number): number {
  if (typeof radius !== 'number') {
    throw new TypeError('Provided radius must be typeof number.');
  }

  const radiusSquared: number = Math.pow(radius, 2);

  return Math.PI * radiusSquared;
}
