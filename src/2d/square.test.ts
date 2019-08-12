import * as square from './square';

describe('area(size)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      square.area('a' as any);
    }).toThrowError('Provided value must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      square.area(-1);
    }).toThrowError('Provided value must be greater than zero.');
  });
  it('Finds the area correctly..', () => {
    expect(square.area(2)).toBe(4);
  });
  it('Returned type is number.', () => {
    expect(typeof square.area(1)).toBe('number');
  });
});
describe('perimeterBySize(size)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      square.perimeterBySize('a' as any);
    }).toThrowError('Provided value must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      square.perimeterBySize(-1);
    }).toThrowError('Provided value must be greater than zero.');
  });
  it('Finds the perimeter correctly..', () => {
    expect(square.perimeterBySize(2)).toBe(8);
  });
  it('Returned type is number.', () => {
    expect(typeof square.perimeterBySize(1)).toBe('number');
  });
});
describe('perimeterByArea(size)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      square.perimeterByArea('a' as any);
    }).toThrowError('Provided value must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      square.perimeterByArea(-1);
    }).toThrowError('Provided value must be greater than zero.');
  });
  it('Finds the area correctly..', () => {
    expect(square.perimeterByArea(4)).toBe(2);
  });
  it('Returned type is number.', () => {
    expect(typeof square.perimeterByArea(1)).toBe('number');
  });
});
describe('missingInteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      square.missingInteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingInteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingInteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingInteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingInteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingInteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      square.missingInteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingInteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingInteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingInteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingInteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingInteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing interior angle correctly.', () => {
    expect(square.missingInteriorAngle(100, 40, 110)).toBe(110);
  });
  it('Returned type is number.', () => {
    expect(typeof square.missingInteriorAngle(10, 5, 15)).toBe('number');
  });
});
describe('missingExteriorAngle(angle1, angle2, angle3)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      square.missingExteriorAngle('a' as any, 10, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingExteriorAngle(5, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingExteriorAngle(5, 10, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingExteriorAngle('a' as any, 'a' as any, 15);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingExteriorAngle(5, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      square.missingExteriorAngle('a' as any, 'a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      square.missingExteriorAngle(-5, 10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingExteriorAngle(5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingExteriorAngle(5, 10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingExteriorAngle(-5, -10, 15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingExteriorAngle(5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
    expect(() => {
      square.missingExteriorAngle(-5, -10, -15);
    }).toThrowError('Provided values must be greater than zero.');
  });
  it('Finds the missing exterior angle correctly.', () => {
    expect(square.missingExteriorAngle(51, 51, 129)).toBe(129);
  });
  it('Returned type is number.', () => {
    expect(typeof square.missingExteriorAngle(10, 5, 15)).toBe('number');
  });
});
