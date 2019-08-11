import * as circle from './circle';

describe('areaByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      circle.areaByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      circle.areaByRadius(-1);
    }).toThrowError('Provided radius must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(circle.areaByRadius(7)).toBe(153.93804002589985);
  });
  it('Returned type is number.', () => {
    expect(typeof circle.areaByRadius(7)).toBe('number');
  });
});
describe('areaByDiameter(diameter)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      circle.areaByDiameter('a' as any);
    }).toThrowError('Provided diameter must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      circle.areaByDiameter(-1);
    }).toThrowError('Provided diameter must be greater than zero.');
  });
  it('Finds the area correctly.', () => {
    expect(circle.areaByDiameter(14)).toBe(153.93804002589985);
  });
  it('Returned type is number.', () => {
    expect(typeof circle.areaByDiameter(7)).toBe('number');
  });
});
describe('circumferenceByDiameter(diameter)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      circle.circumferenceByDiameter('a' as any);
    }).toThrowError('Provided diameter must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      circle.circumferenceByDiameter(-1);
    }).toThrowError('Provided diameter must be greater than zero.');
  });
  it('Finds the circumference correctly.', () => {
    expect(circle.circumferenceByDiameter(14)).toBe(43.982297150257105338477007365913);
  });
  it('Returned type is number.', () => {
    expect(typeof circle.circumferenceByDiameter(7)).toBe('number');
  });
});
describe('circumferenceByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      circle.circumferenceByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      circle.circumferenceByRadius(-1);
    }).toThrowError('Provided radius must be greater than zero.');
  });
  it('Finds the circumference correctly.', () => {
    expect(circle.circumferenceByRadius(7)).toBe(43.982297150257105338477007365913);
  });
  it('Returned type is number.', () => {
    expect(typeof circle.circumferenceByRadius(7)).toBe('number');
  });
});
describe('radiusByArea(area)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      circle.radiusByArea('a' as any);
    }).toThrowError('Provided area must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      circle.radiusByArea(-1);
    }).toThrowError('Provided area must be greater than zero.');
  });
  it('Finds the radius correctly.', () => {
    expect(circle.radiusByArea(69)).toBe(4.686510657907603);
  });
  it('Returned type is number.', () => {
    expect(typeof circle.radiusByArea(7)).toBe('number');
  });
});
describe('diameterByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      circle.diameterByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
  it('Providing negative numbers throws error.', () => {
    expect(() => {
      circle.diameterByRadius(-1);
    }).toThrowError('Provided radius must be greater than zero.');
  });
  it('Finds the diameter correctly.', () => {
    expect(circle.diameterByRadius(420)).toBe(840);
  });
  it('Returned type is number.', () => {
    expect(typeof circle.diameterByRadius(7)).toBe('number');
  });
});
