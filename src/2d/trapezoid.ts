/**
 * Finds the area of the trapezoid given the bases and the height.
 * @param base1 One of the bases of the trapezoid.
 * @param base2 The other base of the trapezoid.
 * @param height The height of the trapezoid.
 * @returns The area of the trapezoid.
 */
export function area(base1: number, base2: number, height: number): number {
  if(typeof base1 !== 'number' || typeof base2 !== 'number' || typeof height !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(base1 < 0 || base2 < 0 || height < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return ((base1 + base2) * height) / 2;
}

/**
 * Finds the final interior angle of the trapezoid given the others.
 * @param angle1 One angle of the trapezoid.
 * @param angle2 Another angle of the trapezoid.
 * @param angle3 The final angle of the trapezoid.
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
 * Finds the final exterior angle of the trapezoid given the others.
 * @param angle1 One angle of the trapezoid.
 * @param angle2 Another angle of the trapezoid.
 * @param angle3 The final angle of the trapezoid.
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
 * TODO: Find perimeter.
 * Hey if you want to open a pull request for this, go ahead.
 */

 /**
 * TODO: Find height.
 * Hey if you want to open a pull request for this, go ahead.
 */

 /**
 * TODO: Find base length.
 * Hey if you want to open a pull request for this, go ahead.
 */

 /**
 * TODO: Find side length.
 * Hey if you want to open a pull request for this, go ahead.
 */
