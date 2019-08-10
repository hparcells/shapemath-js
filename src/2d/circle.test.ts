import { areaByRadius } from './circle';

describe('areaByRadius(radius)', () => {
  it('Providing a non-number throws error.', () => {
    expect(() => {
      areaByRadius('a' as any);
    }).toThrowError('Provided radius must be typeof number.');
  });
});
