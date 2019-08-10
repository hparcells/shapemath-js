import * as kite from './kite';

describe('areaByDiagonals(diag1, diag2)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      kite.areaByDiagonals('5' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.areaByDiagonals(5, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.areaByDiagonals('5' as any, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      kite.areaByDiagonals(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.areaByDiagonals(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.areaByDiagonals(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(kite.areaByDiagonals(5, 3)).toBe(7.5);
  });
});
describe('perimeterBySides(side1, side2)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      kite.perimeterBySides('5' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.perimeterBySides(5, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.perimeterBySides('5' as any, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      kite.perimeterBySides(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.perimeterBySides(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.perimeterBySides(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the perimeter correctly.', () => {
    expect(kite.perimeterBySides(5, 3)).toBe(16);
  });
});
