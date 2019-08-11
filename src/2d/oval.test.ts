import * as oval from './oval';

describe('area(majorRadius, minorRadius)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      oval.area('a' as any, 5);
    }).toThrowError('Provided radiuses must be typeof number.');
    expect(() => {
      oval.area(10, 'a' as any);
    }).toThrowError('Provided radiuses must be typeof number.');
    expect(() => {
      oval.area('a' as any, 'a' as any);
    }).toThrowError('Provided radiuses must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      oval.area(-3, 2);
    }).toThrowError('Provided radiuses must be greater than zero.');
    expect(() => {
      oval.area(3, -2);
    }).toThrowError('Provided radiuses must be greater than zero.');
    expect(() => {
      oval.area(-3, -2);
    }).toThrowError('Provided radiuses must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(oval.area(10, 5)).toBe(157.07963267948966);
  });
  it('Returned type is number.', () => {
    expect(typeof oval.area(10, 5)).toBe('number');
  });
});
describe('majorRadius(area, minorRadius)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      oval.majorRadius('a' as any, 3);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      oval.majorRadius(15, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      oval.majorRadius('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      oval.majorRadius(-3, 2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      oval.majorRadius(3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      oval.majorRadius(-3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
  });
  it('Finds the major radius correctly.', () => {
    expect(oval.majorRadius(15, 2)).toBe(2.3873241463784303);
  });
  it('Returned type is number.', () => {
    expect(typeof oval.majorRadius(10, 5)).toBe('number');
  });
});
describe('minorRadius(area, minorRadius)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      oval.minorRadius('a' as any, 3);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      oval.minorRadius(15, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      oval.minorRadius('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      oval.minorRadius(-3, 2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      oval.minorRadius(3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      oval.minorRadius(-3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
  });
  it('Finds the major radius correctly.', () => {
    expect(oval.minorRadius(15, 5)).toBe(0.954929658551372);
  });
  it('Returned type is number.', () => {
    expect(typeof oval.minorRadius(10, 5)).toBe('number');
  });
});
