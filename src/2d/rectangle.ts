/**
 * Finds the area of the rectangle given the height and width.
 * @param length The width of the rectangle.
 * @param width The height of the rectangle.
 */
export function area(length: number, width: number): number {
  if(typeof length !== 'number' || typeof width !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(length < 0 || width < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return length * width;
}

/**
 * Finds the perimeter of the rectangle given both side lengths.
 * @param length The width of the rectangle.
 * @param width The height of the rectangle.
 */
export function perimeterBySides(length: number, width: number): number {
  if(typeof length !== 'number' || typeof width !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(length < 0 || width < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return length + length + width + width;
}

/**
 * Finds the final interior angle of the rectangle given the others.
 * @param angle1 One angle of the rectangle.
 * @param angle2 Another angle of the rectangle.
 * @param angle3 The final angle of the rectangle.
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
 * Finds the final exterior angle of the rectangle given the others.
 * @param angle1 One angle of the rectangle.
 * @param angle2 Another angle of the rectangle.
 * @param angle3 The final angle of the rectangle.
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
 * TODO: Find diagonal lengths.
 * Hey if you want to open a pull request for this, go ahead.
 */

/**
 * TODO: Find width.
 * Hey if you want to open a pull request for this, go ahead.
 */

 /**
 * TODO: Find length.
 * Hey if you want to open a pull request for this, go ahead.
 */
