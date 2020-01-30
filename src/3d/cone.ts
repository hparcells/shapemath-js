/**
 * Finds the volume of the cone given its radius.
 * @param radius The redius of the cone.
 * @param height The height of the cone.
 */
export function volumeByRadius(radius: number, height: number): number {
  const radSq = Math.pow(radius, 2);
  const thirdHeight = height / 3;
  const  beforePi = radSq * thirdHeight;

  return Math.PI * beforePi;
}
