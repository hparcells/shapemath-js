import * as semicircle from './semicircle';

describe('areaByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      semicircle.areaByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      semicircle.areaByRadius(-1);
    }).toThrowError('Provided radius must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(semicircle.areaByRadius(7)).toBe(76.96902001294993);
  });
  it('Returned type is number.', () => {
    expect(typeof semicircle.areaByRadius(7)).toBe('number');
  });
});
describe('areaByDiameter(diameter)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      semicircle.areaByDiameter('a' as any);
    }).toThrowError('Provided diameter must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      semicircle.areaByDiameter(-1);
    }).toThrowError('Provided diameter must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(semicircle.areaByDiameter(14)).toBe(76.96902001294993);
  });
  it('Returned type is number.', () => {
    expect(typeof semicircle.areaByDiameter(7)).toBe('number');
  });
});
describe('circumferenceByDiameter(diameter)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      semicircle.circumferenceByDiameter('a' as any);
    }).toThrowError('Provided diameter must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      semicircle.circumferenceByDiameter(-1);
    }).toThrowError('Provided diameter must be greater than zero.');
  });
  it('Finds the circumference correctly.', () => {
    expect(semicircle.circumferenceByDiameter(14)).toBe(35.99114857512855);
  });
  it('Returned type is number.', () => {
    expect(typeof semicircle.circumferenceByDiameter(7)).toBe('number');
  });
});
describe('circumferenceByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      semicircle.circumferenceByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      semicircle.circumferenceByRadius(-1);
    }).toThrowError('Provided radius must be greater than zero.');
  });
  it('Finds the circumference correctly.', () => {
    expect(semicircle.circumferenceByRadius(7)).toBe(35.99114857512855);
  });
  it('Returned type is number.', () => {
    expect(typeof semicircle.circumferenceByRadius(7)).toBe('number');
  });
});
describe('radiusByArea(area)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      semicircle.radiusByArea('a' as any);
    }).toThrowError('Provided area must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      semicircle.radiusByArea(-1);
    }).toThrowError('Provided area must be greater than zero.');
  });
  it('Finds the radius correctly.', () => {
    expect(semicircle.radiusByArea(34.5)).toBe(4.686510657907603);
    // 6.627726932618989
  });
  it('Returned type is number.', () => {
    expect(typeof semicircle.radiusByArea(7)).toBe('number');
  });
});
describe('diameterByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      semicircle.diameterByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      semicircle.diameterByRadius(-1);
    }).toThrowError('Provided radius must be greater than zero.');
  });
  it('Finds the diameter correctly.', () => {
    expect(semicircle.diameterByRadius(420)).toBe(840);
  });
  it('Returned type is number.', () => {
    expect(typeof semicircle.diameterByRadius(7)).toBe('number');
  });
});
