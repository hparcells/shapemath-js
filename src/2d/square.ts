/**
 * Finds the area of the square given its size.
 * @param size The length of one of the sides.
 * @returns The area of the square.
 */
export function area(size: number): number {
  if(typeof size !== 'number') {
    throw new TypeError('Provided value must be typeof number.');
  }
  if(size < 0) {
    throw new TypeError('Provided value must be greater than zero.');
  }

  return Math.pow(size, 2);
}

/**
 * Finds the perimeter of the square given its size.
 * @param size The length of one of the sides.
 * @returns The perimeter of the square.
 */
export function perimeterBySize(size: number): number {
  if(typeof size !== 'number') {
    throw new TypeError('Provided value must be typeof number.');
  }
  if(size < 0) {
    throw new TypeError('Provided value must be greater than zero.');
  }

  return size * 4;
}

/**
 * Finds the perimeter of the square given the area,
 * @param area The area of the square.
 * @returns The perimeter of the square.
 */
export function perimeterByArea(area: number): number {
  if(typeof area !== 'number') {
    throw new TypeError('Provided value must be typeof number.');
  }
  if(area < 0) {
    throw new TypeError('Provided value must be greater than zero.');
  }

  return Math.sqrt(area);
}

/**
 * Finds the final interior angle of the square given the others.
 * @param angle1 One angle of the square.
 * @param angle2 Another angle of the square.
 * @param angle3 The final angle of the square.
 * @returns The final interior angle.
 */
export function missingInteriorAngle(angle1: number, angle2: number, angle3: number): number {
  if(typeof angle1 !== 'number' || typeof angle2 !== 'number' || typeof angle3 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(angle1 < 0 || angle2 < 0 || angle3 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return 360 - (angle1 + angle2 + angle3);
}

/**
 * Finds the final exterior angle of the square given the others.
 * @param angle1 One angle of the square.
 * @param angle2 Another angle of the square.
 * @param angle3 The final angle of the square.
 * @returns The final exterior angle.
 */
export function missingExteriorAngle(angle1: number, angle2: number, angle3: number): number {
  if(typeof angle1 !== 'number' || typeof angle2 !== 'number' || typeof angle3 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(angle1 < 0 || angle2 < 0 || angle3 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return 360 - (angle1 + angle2 + angle3);
}

/**
 * TODO: Find diagonal length.
 * Hey if you want to open a pull request for this, go ahead.
 */
