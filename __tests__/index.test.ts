import { getColorCode, getColorName } from '../src/index.ts';

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

describe('color codes for literal english names', () => {
  it('should return #FF0000 for red color', () => {
    expect(getColorCode('red')).toBe('#ff0000');
  });

  it('should return undefined for unknown-color', () => {
    expect(getColorCode('unknown')).toBe(undefined);
  });
});

describe('color codes for literal persian names', () => {
  it('should return #FF0000 for قرمز', () => {
    expect(getColorCode('قرمز', 'fa')).toBe('#ff0000');
  });

  it('should return undefined for رنگی که وجود ندارد', () => {
    expect(getColorCode('رنگی که وجود ندارد', 'fa')).toBe(undefined);
  });
});
