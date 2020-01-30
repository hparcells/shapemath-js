import { degreesToRadians, radiansToDegrees } from './trigonometry-conversions';

/**
 * Math.sin() but for degrees.
 * @param degrees The amount of degrees.
 */
export function dSin(degrees) {
  if(typeof degrees !== 'number') {
    throw new Error('Provided degrees must be typeof number.');
  }

  return Math.sin(degreesToRadians(degrees));
}

/**
 * Math.cos() but for degrees.
 * @param degrees The amount of degrees.
 */
export function dCos(degrees: number) {
  if(typeof degrees !== 'number') {
    throw new Error('Provided degrees must be typeof number.');
  }

  return Math.cos(degreesToRadians(degrees));
}

/**
 * Math.atan2() but returns degrees.
 * @param y The y value.
 * @param x The x value.
 */
export function dAtan2(y: number, x: number) {
  if(typeof y !== 'number') {
    throw new TypeError('Provided values must be typeof number.');
  }

  return radiansToDegrees(Math.atan2(y, x));
}
