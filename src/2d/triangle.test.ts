import * as triangle from './triangle';

describe('areaByBaseAndHeight(base, height)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      triangle.areaByBaseAndHeight('a' as any, 5);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaByBaseAndHeight(1, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaByBaseAndHeight('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      triangle.areaByBaseAndHeight(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaByBaseAndHeight(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaByBaseAndHeight(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Returned type is number.', () => {
    expect(typeof triangle.areaByBaseAndHeight(5, 1)).toBe('number');
  });
  it('Finds the area correctly.', () => {
    expect(triangle.areaByBaseAndHeight(10, 7)).toBe(35);
  });
});
describe('areaBySides(base, height)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      triangle.areaBySides('a' as any, 5, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaBySides(1, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaBySides(1, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaBySides('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaBySides(1, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.areaBySides('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      triangle.areaBySides(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaBySides(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaBySides(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaBySides(-5, -10,-15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaBySides(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.areaBySides(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Returned type is number.', () => {
    expect(typeof triangle.areaBySides(5, 1, 15)).toBe('number');
  });
  it('Finds the area correctly.', () => {
    expect(triangle.areaBySides(3, 4, 4)).toBe(5.562148865321747);
  });
});
describe('hypotenuse(sideLength1, sideLength2)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      triangle.hypotenuse('a' as any, 5);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.hypotenuse(1, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.hypotenuse('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      triangle.hypotenuse(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.hypotenuse(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.hypotenuse(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Returned type is number.', () => {
    expect(typeof triangle.hypotenuse(5, 1)).toBe('number');
  });
  it('Finds the hypotenuse correctly.', () => {
    expect(triangle.hypotenuse(3, 4)).toBe(5);
  });
});
describe('missingSide(side, hypotenuse)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      triangle.missingSide('a' as any, 5);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.missingSide(1, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.missingSide('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      triangle.missingSide(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.missingSide(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.missingSide(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Returned type is number.', () => {
    expect(typeof triangle.missingSide(5, 1)).toBe('number');
  });
  it('Finds the missing side correctly.', () => {
    expect(triangle.missingSide(4, 5)).toBe(3);
  });
});
describe('missingInteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      triangle.missingInteriorAngle('a' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.missingInteriorAngle(5, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.missingInteriorAngle('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      triangle.missingInteriorAngle(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.missingInteriorAngle(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.missingInteriorAngle(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing interior angle correctly.', () => {
    expect(triangle.missingInteriorAngle(51, 51)).toBe(78);
  });
  it('Returned type is number.', () => {
    expect(typeof triangle.missingInteriorAngle(10, 5)).toBe('number');
  });
});
describe('missingExteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      triangle.missingExteriorAngle('a' as any, 10);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.missingExteriorAngle(5, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      triangle.missingExteriorAngle('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      triangle.missingExteriorAngle(-5, 10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.missingExteriorAngle(5, -10);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      triangle.missingExteriorAngle(-5, -10);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing exterior angle correctly.', () => {
    expect(triangle.missingExteriorAngle(100, 40)).toBe(220);
  });
  it('Returned type is number.', () => {
    expect(typeof triangle.missingExteriorAngle(10, 5)).toBe('number');
  });
});
