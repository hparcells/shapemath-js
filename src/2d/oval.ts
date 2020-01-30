/**
 * Finds the area of the oval given the radiuses.
 * @param majorRadius The shorter radius of the oval.
 * @param minorRadius The longer radius of the oval.
 * @returns The area of the oval.
 */
export function area(majorRadius: number, minorRadius: number): number {
  if(typeof majorRadius !== 'number' || typeof minorRadius !== 'number') {
    throw new TypeError('Provided radiuses must be typeof number.');
  }
  if(majorRadius < 0 || minorRadius < 0) {
    throw new TypeError('Provided radiuses must be greater than zero.');
  }

  const bothRadius = majorRadius * minorRadius;

  return bothRadius * Math.PI;
}

/**
 * Finds the major radius given the area and minor radius.
 * @param area The area of the oval.
 * @param minorRadius The minor radius of the oval.
 * @returns The major radius of the oval.
 */
export function majorRadius(area: number, minorRadius: number): number {
  if(typeof area !== 'number' || typeof minorRadius !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(area < 0 || minorRadius < 0) {
    throw new TypeError('Provided area and radius must be greater than zero.');
  }

  const piMinor = Math.PI * minorRadius;

  return area / piMinor;
}

/**
 * Finds the minor radius given the area and minor radius.
 * @param area The area of the oval.
 * @param majorRadius The major radius of the oval.
 * @returns The minor radius of the oval.
 */
export function minorRadius(area: number, majorRadius: number): number {
  if(typeof area !== 'number' || typeof majorRadius !== 'number') {

    throw new TypeError('Provided values must be typeof number.');
  }
  if(area < 0 || majorRadius < 0) {
    throw new TypeError('Provided area and radius must be greater than zero.');
  }

  const piMajor = Math.PI * majorRadius;

  return area / piMajor;
}

/**
 * TODO: Circumference
 * Hey if you want to open a pull request for this, go ahead.
 * https://www.google.com/search?q=ellipse%20calc%3A%20find%20C.
 */
