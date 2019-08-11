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
  it('Returned type is number.', () => {
    expect(typeof kite.areaByDiagonals(10, 5)).toBe('number');
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
  it('Returned type is number.', () => {
    expect(typeof kite.perimeterBySides(10, 5)).toBe('number');
  });
});
describe('congruentAngle(angle1, angle2)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      kite.congruentAngle('5' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.congruentAngle(5, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.congruentAngle('5' as any, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      kite.congruentAngle(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.congruentAngle(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.congruentAngle(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds congruent angles correctly.', () => {
    expect(kite.congruentAngle(100, 40)).toBe(110);
  });
  it('Returned type is number.', () => {
    expect(typeof kite.congruentAngle(10, 5)).toBe('number');
  });
});
describe('missingInteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      kite.missingInteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingInteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingInteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingInteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingInteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingInteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      kite.missingInteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingInteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingInteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingInteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingInteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingInteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing interior angle correctly.', () => {
    expect(kite.missingInteriorAngle(100, 40, 110)).toBe(110);
  });
  it('Returned type is number.', () => {
    expect(typeof kite.missingInteriorAngle(10, 5, 15)).toBe('number');
  });
});
describe('missingExteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      kite.missingExteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingExteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingExteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingExteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingExteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      kite.missingExteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      kite.missingExteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingExteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingExteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingExteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingExteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      kite.missingExteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing exterior angle correctly.', () => {
    expect(kite.missingExteriorAngle(51, 51, 129)).toBe(129);
  });
  it('Returned type is number.', () => {
    expect(typeof kite.missingExteriorAngle(10, 5, 15)).toBe('number');
  });
});
