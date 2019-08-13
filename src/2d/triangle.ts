/**
 * Finds the area of the triangle given its base and height.
 * @param base The base length of the triangle.
 * @param height The height of the triangle.
 * @returns The area of the triangle.
 */
export function areaByBaseAndHeight(base: number, height: number): number {
  if(typeof base !== 'number' || typeof height !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(base < 0 || height < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return (base * height) / 2;
}

/**
 * Finds the area of the triangle given all of its side lengths.
 * @param side1 One side length of the triangle.
 * @param side2 The other side length of the triangle.
 * @param side3 The final side length of the triangle.
 * @returns The area of the triangle.
 */
export function areaBySides(side1: number, side2: number, side3: number) {
  if(typeof side1 !== 'number' || typeof side2 !== 'number' || typeof side3 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(side1 < 0 || side2 < 0 || side3 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  const underRoot = (side1 + side2 + side3) / 2;
  return Math.sqrt(underRoot*(underRoot - side1)*(underRoot - side2)*(underRoot - side3));
}

/**
 * Finds the hypotenuse length given the side lengths.
 * @param sideLength1 One side length of the triangle.
 * @param sideLength2 THe other side length of the triangle.
 * @returns The hypotenuse length.
 */
export function hypotenuse(sideLength1: number, sideLength2: number): number {
  if(typeof sideLength1 !== 'number' || typeof sideLength2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(sideLength1 < 0 || sideLength2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  const side1 = Math.pow(sideLength1, 2);
  const side2 = Math.pow(sideLength2, 2);

  return Math.sqrt(side1 + side2);
}

/**
 * Finds the missing side of side1 triangle.
 * @param side The given side length.
 * @param hypotenuse The hypotenuse of the triangle.
 * @returns The missing side length of the triangle.
 */
export function missingSide(side: number, hypotenuse: number): number {
  if(typeof side !== 'number' || typeof hypotenuse !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(side < 0 || hypotenuse < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  const hypotenuseSquared = Math.pow(hypotenuse, 2);
  const sideSquared = Math.pow(side, 2);

  return Math.sqrt(hypotenuseSquared - sideSquared);
}

/**
 * Finds the final interior angle of the triangle given the others.
 * @param angle1 One angle of the triangle.
 * @param angle2 Another angle of the triangle.
 * @returns The final interior angle.
 */
export function missingInteriorAngle(angle1: number, angle2: number): number {
  if(typeof angle1 !== 'number' || typeof angle2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(angle1 < 0 || angle2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return 180 - (angle1 + angle2);
}

/**
 * Finds the final exterior angle of the triangle given the others.
 * @param angle1 One angle of the triangle.
 * @param angle2 Another angle of the triangle.
 * @returns The final exterior angle.
 */
export function missingExteriorAngle(angle1: number, angle2: number): number {
  if(typeof angle1 !== 'number' || typeof angle2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  if(angle1 < 0 || angle2 < 0) {
    throw new TypeError('Provided values must be greater than zero.');
  }

  return 360 - (angle1 + angle2);
}

 /**
 * TODO: Find missing side without hypotenuse.
 * Hey if you want to open side1 pull request for this, go ahead.
 */
