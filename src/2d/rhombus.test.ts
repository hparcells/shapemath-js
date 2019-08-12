import * as rhombus from './rhombus';

describe('area(diag1, diag2)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rhombus.area('a' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.area(5, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rhombus.area(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.area(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(rhombus.area(5, 8)).toBe(20);
  });
  it('Returned type is number.', () => {
    expect(typeof rhombus.area(5, 8)).toBe('number');
  });
});
describe('perimeter(side)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rhombus.perimeter('a' as any);
    }).toThrowError('Provided value must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rhombus.perimeter(-5);
    }).toThrowError('Provided value must be greater than zero.');
  });
  it('Finds the perimeter correctly.', () => {
    expect(rhombus.perimeter(5)).toBe(20);
  });
  it('Returned type is number.', () => {
    expect(typeof rhombus.perimeter(5)).toBe('number');
  });
});
describe('missingInteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rhombus.missingInteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingInteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingInteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingInteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingInteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingInteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rhombus.missingInteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingInteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingInteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingInteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingInteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingInteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing interior angle correctly.', () => {
    expect(rhombus.missingInteriorAngle(100, 40, 110)).toBe(110);
  });
  it('Returned type is number.', () => {
    expect(typeof rhombus.missingInteriorAngle(10, 5, 15)).toBe('number');
  });
});
describe('missingExteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      rhombus.missingExteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingExteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingExteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingExteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingExteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      rhombus.missingExteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      rhombus.missingExteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingExteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingExteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingExteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingExteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      rhombus.missingExteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing exterior angle correctly.', () => {
    expect(rhombus.missingExteriorAngle(51, 51, 129)).toBe(129);
  });
  it('Returned type is number.', () => {
    expect(typeof rhombus.missingExteriorAngle(10, 5, 15)).toBe('number');
  });
});
