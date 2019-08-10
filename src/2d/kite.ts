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
