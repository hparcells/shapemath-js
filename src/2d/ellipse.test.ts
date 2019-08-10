import * as ellipse from './ellipse';

describe('area(majorRadius, minorRadius)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      ellipse.area('a' as any, 5);
    }).toThrowError('Provided radiuses must be typeof number.');
    expect(() => {
      ellipse.area(10, 'a' as any);
    }).toThrowError('Provided radiuses must be typeof number.');
    expect(() => {
      ellipse.area('a' as any, 'a' as any);
    }).toThrowError('Provided radiuses must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      ellipse.area(-3, 2);
    }).toThrowError('Provided radiuses must be greater than zero.');
    expect(() => {
      ellipse.area(3, -2);
    }).toThrowError('Provided radiuses must be greater than zero.');
    expect(() => {
      ellipse.area(-3, -2);
    }).toThrowError('Provided radiuses must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(ellipse.area(10, 5)).toBe(157.07963267948966);
  });
});
describe('majorRadius(area, minorRadius)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      ellipse.majorRadius('a' as any, 3);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      ellipse.majorRadius(15, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      ellipse.majorRadius('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      ellipse.majorRadius(-3, 2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      ellipse.majorRadius(3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      ellipse.majorRadius(-3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
  });
  it('Finds the major radius correctly.', () => {
    expect(ellipse.majorRadius(15, 2)).toBe(2.3873241463784303);
  });
});
describe('minorRadius(area, minorRadius)', () => {
  it('Providing non-numbers throws error.', () => {
    expect(() => {
      ellipse.minorRadius('a' as any, 3);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      ellipse.minorRadius(15, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
    expect(() => {
      ellipse.minorRadius('a' as any, 'a' as any);
    }).toThrowError('Provided values must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      ellipse.minorRadius(-3, 2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      ellipse.minorRadius(3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
    expect(() => {
      ellipse.minorRadius(-3, -2);
    }).toThrowError('Provided area and radius must be greater than zero.');
  });
  it('Finds the major radius correctly.', () => {
    expect(ellipse.minorRadius(15, 5)).toBe(0.954929658551372);
  });
});
