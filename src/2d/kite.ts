/**
 * Finds the area of the kite given the diagonals.
 * @param diag1 One diagonal of the kite.
 * @param diag2 The other diagonal.
 * @returns The area of the kite.
 */
export function areaByDiagonals(diag1: number, diag2: number): number {
  if(typeof diag1 !== 'number' || typeof diag2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(diag1 < 0 || diag2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return (diag1 * diag2) / 2;
}

/**
 * Finds the perimeter of the kite.
 * @param side1 One of the sides of the kite.
 * @param side2 The other side of the kite with differing length than `side1`.
 */
export function perimeterBySides(side1: number, side2: number): number {
  if(typeof side1 !== 'number' || typeof side2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(side1 < 0 || side2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return side1 + side1 + side2 + side2;
}

/**
 * Finds the concruent angles of the kite given the other two angles.
 * @param angle1 One given angle of the kite.
 * @param angle2 The other angle of the kite.
 * @returns The congruent angle.
 */
export function congruentAngle(angle1: number, angle2: number): number {
  if(typeof angle1 !== 'number' || typeof angle2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(angle1 < 0 || angle2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  const remainder: number =  360 - (angle1 + angle2);

  return remainder / 2;
}

/**
 * Finds the final interior angle of the kite given the others.
 * @param angle1 One angle of the kite.
 * @param angle2 Another angle of the kite.
 * @param angle3 The final angle of the kite.
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
 * Finds the final exterior angle of the kite given the others.
 * @param angle1 One angle of the kite.
 * @param angle2 Another angle of the kite.
 * @param angle3 The final angle of the kite.
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
