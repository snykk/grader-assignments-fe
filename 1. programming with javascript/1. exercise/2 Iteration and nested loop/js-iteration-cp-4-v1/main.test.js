const { expect, describe, it } = require('@jest/globals');
const countAndSum = require('./main');

describe('countAndSum', () => {
  it('should return 19 when input 10', () => {
    expect(countAndSum(10)).toBe(19);
  });
  it('should return 199 when input 100', () => {
    expect(countAndSum(100)).toBe(199);
  });

  it('should return 33 when input 17', () => {
    expect(countAndSum(17)).toBe(33);
  });

  it('should return 9 when input 5', () => {
    expect(countAndSum(5)).toBe(9);
  });

  it('should return 0 when input 0', () => {
    expect(countAndSum(0)).toBe(0);
  });

  it('should return 1 when input 1', () => {
    expect(countAndSum(1)).toBe(1);
  });

  it('should return 3 when input 2', () => {
    expect(countAndSum(2)).toBe(3);
  });

  it('should return 37 when input 19', () => {
    expect(countAndSum(19)).toBe(37);
  });
});
