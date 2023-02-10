const { expect, describe, it } = require('@jest/globals');
const generateParenthesesPair = require('./main');

describe('generateParenthesesPair', () => {
  describe('when numberOfPairs is 0', () => {
    it('should return an empty string', () => {
      expect(generateParenthesesPair(0)).toBe('');
    });
  });

  describe('when numberOfPairs is 1', () => {
    it('should return ()', () => {
      expect(generateParenthesesPair(1)).toBe('()');
    });
  });

  describe('when numberOfPairs is 2', () => {
    it('should return (())', () => {
      expect(generateParenthesesPair(2)).toBe('(())');
    });
  });

  describe('when numberOfPairs is 3', () => {
    it('should return ((()))', () => {
      expect(generateParenthesesPair(3)).toBe('((()))');
    });
  });

  describe('when numberOfPairs is 12', () => {
    it('should return (((((((((((())))))))))))', () => {
      expect(generateParenthesesPair(12)).toBe('(((((((((((())))))))))))');
    });
  });

  describe('when numberOfPairs is 99', () => {
    it('shold return 99 pairs of parentheses', () => {
      expect(generateParenthesesPair(99)).toBe('('.repeat(99) + ')'.repeat(99));
    });
  });

  describe('when numberOfPairs is 1000', () => {
    it('shold return 1000 pairs of parentheses', () => {
      expect(generateParenthesesPair(1000)).toBe('('.repeat(1000) + ')'.repeat(1000));
    });
  });
});
