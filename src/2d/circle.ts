/**
 * Finds the area of a circle given the radius.
 * @param radius The radius of the circle.
 * @returns The area of the circle.
 */
export function areaByRadius(radius: number): number {
  if(typeof radius !== 'number') {
    throw new TypeError('Provided radius must be typeof number.');
  }
  if(radius < 0) {
    throw new TypeError('Provided radius must be greater than zero.');
  }

  const radiusSquared: number = Math.pow(radius, 2);

  return Math.PI * radiusSquared;
}

/**
 * Finds the area of a circle given the diameter.
 * @param diameter The diameter of the circle.
 * @returns The area of the circle.
 */
export function areaByDiameter(diameter: number): number {
  if(typeof diameter !== 'number') {
    throw new TypeError('Provided diameter must be typeof number.');
  }
  if(diameter < 0) {
    throw new TypeError('Provided diameter must be greater than zero.');
  }

  const radius: number = diameter / 2;
  const radiusSquared: number = Math.pow(radius, 2);

  return Math.PI * radiusSquared;
}

/**
 * Finds the circumference of the circle given the diameter.
 * @param diameter The diameter of the circle.
 * @returns The circumference of the circle.
 */
export function circumferenceByDiameter(diameter: number): number {
  if(typeof diameter !== 'number') {
    throw new TypeError('Provided diameter must be typeof number.');
  }
  if(diameter < 0) {
    throw new TypeError('Provided diameter must be greater than zero.');
  }

  return Math.PI * diameter;
}

/**
 * Finds the circumference of the circle given the radius.
 * @param radius The radius of the circle.
 * @returns The circumference of the circle.
 */
export function circumferenceByRadius(radius: number): number {
  if(typeof radius !== 'number') {
    throw new TypeError('Provided radius must be typeof number.');
  }
  if(radius < 0) {
    throw new TypeError('Provided radius must be greater than zero.');
  }

  return Math.PI * (radius * 2);
}

/**
 * Finds the radius given the diameter.
 * @param area The area of the circle.
 * @returns The radius of the circle.
 */
export function radiusByArea(area: number): number {
  if(typeof area !== 'number') {
    throw new TypeError('Provided area must be typeof number.');
  }
  if(area < 0) {
    throw new TypeError('Provided area must be greater than zero.');
  }

  const toSqrt: number = area / Math.PI;

  return Math.sqrt(toSqrt);
}

/**
 * Finds the diameter given the radius.
 * @param radius The radius of the circle.
 * @returns The diameter of the circle.
 */
export function diameterByRadius(radius: number): number {
  if(typeof radius !== 'number') {
    throw new TypeError('Provided radius must be typeof number.');
  }
  if(radius < 0) {
    throw new TypeError('Provided radius must be greater than zero.');
  }

  return radius * 2;
}
