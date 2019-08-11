import * as line from './line';

describe('isParallel(x1, y1, x2, y2, x3, y3, x4, y4)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      line.isParallel('1' as any, 2, 3, 4, 5, 6, 7, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, '2' as any, 3, 4, 5, 6, 7, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, 2, '3' as any, 4, 5, 6, 7, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, 2, 3, '4' as any, 5, 6, 7, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, 2, 3, 4, '5' as any, 6, 7, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, 2, 3, 4, 5, '6' as any, 7, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, 2, 3, 4, 5, 6, '7' as any, 8);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isParallel(1, 2, 3, 4, 5, 6, 7, '8' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Checks if lines are parallel correctly.', () => {
    expect(line.isParallel(0, 1, 2, 2, 0, 2, 2, 3)).toBe(true);
    expect(line.isParallel(0, 5, 2, 2, 0, 2, 2, 3)).toBe(false);
  });
  it('Returned type is boolean.', () => {
    expect(typeof line.isParallel(0, 1, 2, 2, 0, 2, 2, 3)).toBe('boolean');
    expect(typeof line.isParallel(0, 5, 2, 2, 0, 2, 2, 3)).toBe('boolean');
  });
});
describe('isPerpendicular(slope1, slope2)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      line.isPerpendicular('2' as any, -2);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      line.isPerpendicular(2, '-2' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Checks if lines are perpendicular correctly.', () => {
    expect(line.isPerpendicular(0.25, -4)).toBe(true);
  });
  it('Returned type is boolean.', () => {
    expect(typeof line.isPerpendicular(0.25, -4)).toBe('boolean');
    expect(typeof line.isPerpendicular(0.25, 4)).toBe('boolean');
  });
});
