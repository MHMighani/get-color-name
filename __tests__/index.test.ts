import { getColorName } from '..';

describe('getColorName function persian colors', () => {
  it('should return قرمز for #FF0000', () => {
    expect(getColorName('#FF0000')).toBe('قرمز');
  });
});

describe('getColorName function english colors', () => {
  it('should return red for #FF0000', () => {
    expect(getColorName('#FF0000', 'en')).toBe('Red');
  });
});
