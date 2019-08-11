/**
  * Checks if the lines are parallel and returns the answer accordingly.
  * @param x1 X position of the first point of line 1.
  * @param y1 Y position of the first point of line 1.
  * @param x2 X position of the second point of line 1.
  * @param y2 Y position of the second point of line 1.
  * @param x3 X position of the first point of line 2.
  * @param y3 Y position of the first point of line 2.
  * @param x4 X position of the second point of line 2.
  * @param y4 Y position of the second point of line 2.
  * @return `true` if the lines are parallel, else it returns `false`.
  */
/* tslint:disable-next-line max-line-length */
export function isParallel(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): boolean {
  if(
    typeof x1 !== 'number'
    || typeof y1 !== 'number'
    || typeof x2 !== 'number'
    || typeof y2 !== 'number'
    || typeof x3 !== 'number'
    || typeof y3 !== 'number'
    || typeof x4 !== 'number'
    || typeof y4 !== 'number'
  ) {
    throw new TypeError('Provided values must be typeof number.');
  }

  const slope1 = (y2 - y1) / (x2 - x1);
  const slope2 = (y4 - y3) / (x4 - x3);

  return slope1 === slope2;
}

/**
  * Checks if the lines are perpendicular given both slopes and returns the answer accordingly.
  * @param slope1 The slope of the first line.
  * @param slope2 The slope of the second line.
  * @return `true` if the lines are perpendicular, else it returns `false`.
  */
export function isPerpendicular(slope1: number, slope2: number): boolean {
  if(typeof slope1 !== 'number' || typeof slope2 !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }
  const finalSlope1 = 1 / -slope1;

  return finalSlope1 === slope2;
}

/**
 * TODO: Find slope.
 * Hey if you want to open a pull request for this, go ahead.
 */

 /**
 * TODO: Check symmetry.
 * Hey if you want to open a pull request for this, go ahead.
 */
