import { getColorName } from '..';

describe('getColorName function', () => {
  it('should return قرمز for #FF0000', () => {
    expect(getColorName('#FF0000')).toBe('قرمز');
  });
});
