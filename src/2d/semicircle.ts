/**
 * Finds the area of a semicircle given the radius.
 * @param radius The radius of the semicircle.
 * @returns The area of the semicircle.
 */
export function areaByRadius(radius: number): number {
  if(typeof radius !== 'number') {
    throw new TypeError('Provided radius must be typeof number.');
  }
  if(radius < 0) {
    throw new TypeError('Provided radius must be greater than zero.');
  }

  const radiusSquared: number = Math.pow(radius, 2);

  return (Math.PI * radiusSquared) / 2;
}

/**
 * Finds the area of a semicircle given the diameter.
 * @param diameter The diameter of the semicircle.
 * @returns The area of the semicircle.
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

  return (Math.PI * radiusSquared) / 2;
}

/**
 * Finds the circumference of the semicircle given the diameter.
 * @param diameter The diameter of the semicircle.
 * @returns The circumference of the semicircle.
 */
export function circumferenceByDiameter(diameter: number): number {
  if(typeof diameter !== 'number') {
    throw new TypeError('Provided diameter must be typeof number.');
  }
  if(diameter < 0) {
    throw new TypeError('Provided diameter must be greater than zero.');
  }

  const circle = Math.PI * diameter;
  const semicircle = circle / 2;

  return semicircle + diameter;
}

/**
 * Finds the circumference of the semicircle given the radius.
 * @param radius The radius of the semicircle.
 * @returns The circumference of the semicircle.
 */
export function circumferenceByRadius(radius: number): number {
  if(typeof radius !== 'number') {
    throw new TypeError('Provided radius must be typeof number.');
  }
  if(radius < 0) {
    throw new TypeError('Provided radius must be greater than zero.');
  }

  const diameter  = radius * 2;
  const circle = Math.PI * diameter;
  const semicircle = circle / 2;

  return semicircle + diameter;
}

/**
 * Finds the radius given the diameter.
 * @param area The area of the semicircle.
 * @returns The radius of the semicircle.
 */
export function radiusByArea(area: number): number {
  if(typeof area !== 'number') {
    throw new TypeError('Provided area must be typeof number.');
  }
  if(area < 0) {
    throw new TypeError('Provided area must be greater than zero.');
  }

  const toSqrt: number = (area * 2) / Math.PI;

  return Math.sqrt(toSqrt);
}

/**
 * Finds the diameter given the radius.
 * @param radius The radius of the semicircle.
 * @returns The diameter of the semicircle.
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
