import * as rectangle from './rectangle';

describe('area(width, height)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rectangle.area('5' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.area(5, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.area('5' as any, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rectangle.area(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.area(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.area(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Returned type is number.', () => {
    expect(rectangle.area(10, 5)).toBe(50);
  });
  it('Returned type is number.', () => {
    expect(typeof rectangle.area(10, 5)).toBe('number');
  });
});
describe('perimeterBySides(width, height)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rectangle.perimeterBySides('5' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.perimeterBySides(5, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.perimeterBySides('5' as any, '10' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rectangle.perimeterBySides(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.perimeterBySides(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.perimeterBySides(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Returned type is number.', () => {
    expect(rectangle.perimeterBySides(10, 5)).toBe(30);
  });
  it('Returned type is number.', () => {
    expect(typeof rectangle.perimeterBySides(10, 5)).toBe('number');
  });
});
describe('missingInteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rectangle.missingInteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingInteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingInteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingInteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingInteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingInteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rectangle.missingInteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingInteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingInteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingInteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingInteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingInteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing interior angle correctly.', () => {
    expect(rectangle.missingInteriorAngle(100, 40, 110)).toBe(110);
  });
  it('Returned type is number.', () => {
    expect(typeof rectangle.missingInteriorAngle(10, 5, 15)).toBe('number');
  });
});
describe('missingExteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rectangle.missingExteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingExteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingExteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingExteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingExteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rectangle.missingExteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rectangle.missingExteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingExteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingExteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingExteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingExteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rectangle.missingExteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing exterior angle correctly.', () => {
    expect(rectangle.missingExteriorAngle(51, 51, 129)).toBe(129);
  });
  it('Returned type is number.', () => {
    expect(typeof rectangle.missingExteriorAngle(10, 5, 15)).toBe('number');
  });
});
