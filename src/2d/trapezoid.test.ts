import * as trapezoid from './trapezoid';

describe('area(base1, base2, height)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      trapezoid.area('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.area(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.area(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.area('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.area(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.area('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      trapezoid.area(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.area(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.area(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.area(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.area(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.area(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(trapezoid.area(10, 5, 15)).toBe(112.5);
  });
  it('Returned type is number.', () => {
    expect(typeof trapezoid.area(10, 5, 15)).toBe('number');
  });
});
describe('missingInteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      trapezoid.missingInteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingInteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingInteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingInteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingInteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingInteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      trapezoid.missingInteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingInteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingInteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingInteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingInteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingInteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing interior angle correctly.', () => {
    expect(trapezoid.missingInteriorAngle(100, 40, 110)).toBe(110);
  });
  it('Returned type is number.', () => {
    expect(typeof trapezoid.missingInteriorAngle(10, 5, 15)).toBe('number');
  });
});
describe('missingExteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      trapezoid.missingExteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingExteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingExteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingExteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingExteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      trapezoid.missingExteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      trapezoid.missingExteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingExteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingExteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingExteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingExteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      trapezoid.missingExteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing exterior angle correctly.', () => {
    expect(trapezoid.missingExteriorAngle(51, 51, 129)).toBe(129);
  });
  it('Returned type is number.', () => {
    expect(typeof trapezoid.missingExteriorAngle(10, 5, 15)).toBe('number');
  });
});
