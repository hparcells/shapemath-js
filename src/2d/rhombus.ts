/**
 * Finds The area if a rhombus given the lengths of the diagonals.
 * @param diag1 The length of one of the diagonals.
 * @param diag2 The length of the other diagonal.
 */
export function area(diag1: number, diag2: number): number {
  if(typeof diag1 !== 'number' || typeof diag2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(diag1 < 0 || diag2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return (diag1 * diag2) / 2;
}

/**
 * Finds the perimeter of the rhombus given the side length.
 * @param side The length of one of the sides.
 * @returns The rhombus's perimeter.
 */
export function perimeter(side: number): number {
  if(typeof side !== 'number') {
    throw new TypeError('Provided value must be typeof number.');
  }
  if(side < 0) {
    throw new TypeError('Provided value must be greater than zero.');
  }

  return side * 4;
}

/**
 * Finds the final interior angle of the rhombus given the others.
 * @param angle1 One angle of the rhombus.
 * @param angle2 Another angle of the rhombus.
 * @param angle3 The final angle of the rhombus.
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
 * Finds the final exterior angle of the rhombus given the others.
 * @param angle1 One angle of the rhombus.
 * @param angle2 Another angle of the rhombus.
 * @param angle3 The final angle of the rhombus.
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
 * TODO: Find diagonals lengths.
 * Hey if you want to open a pull request for this, go ahead.
 * https://www.google.com/search?q=ellipse%20calc%3A%20find%20C
 */

 /**
 * TODO: Find side length.
 * Hey if you want to open a pull request for this, go ahead.
 * https://www.google.com/search?q=ellipse%20calc%3A%20find%20C
 */
