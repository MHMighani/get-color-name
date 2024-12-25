import { getColorName } from '..';

describe('getColorName function persian colors', () => {
  it('should return قرمز for #FF0000', () => {
    expect(getColorName('#FF0000', 'fa')).toBe('قرمز');
  });

  it('should return بنفش for #841474', () => {
    expect(getColorName('#841474', 'fa')).toBe('بنفش');
  });
});

describe('getColorName function english colors', () => {
  it('should return red for #FF0000', () => {
    expect(getColorName('#FF0000', 'en')).toBe('Red');
  });

  it('should return purple for #841474', () => {
    expect(getColorName('#841474', 'en')).toBe('Purple');
  });
});
