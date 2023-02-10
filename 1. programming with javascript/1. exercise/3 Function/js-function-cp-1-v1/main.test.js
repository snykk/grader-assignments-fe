const { expect, describe, it } = require('@jest/globals');
const { checkDatatype } = require('./main');

describe('checkDatatype should return string of data type name', () => {
  describe('should return "string" when passed a string', () => {
    it('should return "string" when passed "hello"', () => {
      expect(checkDatatype('hello')).toBe('string');
    });

    it('should return "string" when passed "123"', () => {
      expect(checkDatatype('123')).toBe('string');
    });

    it('should return "string" when passed ""', () => {
      expect(checkDatatype('')).toBe('string');
    });
  });

  describe('should return "number" when passed a number', () => {
    it('should return "number" when passed 123', () => {
      expect(checkDatatype(123)).toBe('number');
    });

    it('should return "number" when passed 0', () => {
      expect(checkDatatype(0)).toBe('number');
    });

    it('should return "number" when passed -123', () => {
      expect(checkDatatype(-123)).toBe('number');
    });

    it('should return "number" when passed 1.23', () => {
      expect(checkDatatype(1.23)).toBe('number');
    });

    it('should return "number" when passed 0.0', () => {
      expect(checkDatatype(0.0)).toBe('number');
    });
  });

  describe('should return "boolean" when passed a boolean', () => {
    it('should return "boolean" when passed true', () => {
      expect(checkDatatype(true)).toBe('boolean');
    });

    it('should return "boolean" when passed false', () => {
      expect(checkDatatype(false)).toBe('boolean');
    });

    it('should return "boolean" when passed !true', () => {
      expect(checkDatatype(!true)).toBe('boolean');
    });

    it('should return "boolean" when passed !false', () => {
      expect(checkDatatype(!false)).toBe('boolean');
    });

    it('should return "boolean" when passed !!true', () => {
      expect(checkDatatype(!!true)).toBe('boolean');
    });

    it('should return "boolean" when passed !!false', () => {
      expect(checkDatatype(!!false)).toBe('boolean');
    });
  });

  describe('should return "null" when passed null', () => {
    it('should return "null" when passed null', () => {
      expect(checkDatatype(null)).toBe('null');
    });
  });

  describe('should return "array" when passed an array', () => {
    it('should return "array" when passed []', () => {
      expect(checkDatatype([])).toBe('array');
    });

    it('should return "array" when passed [1, 2, 3]', () => {
      expect(checkDatatype([1, 2, 3])).toBe('array');
    });

    it('should return "array" when passed ["a", "b", "c"]', () => {
      expect(checkDatatype(['a', 'b', 'c'])).toBe('array');
    });

    it('should return "array" when passed [true, false, true]', () => {
      expect(checkDatatype([true, false, true])).toBe('array');
    });

    it('should return "array" when passed [null, null, null]', () => {
      expect(checkDatatype([null, null, null])).toBe('array');
    });

    it('should return "array" when passed [undefined, undefined, undefined]', () => {
      expect(checkDatatype([undefined, undefined, undefined])).toBe('array');
    });

    it('should return "array" when passed [1, "a", true, null, undefined]', () => {
      expect(checkDatatype([1, 'a', true, null, undefined])).toBe('array');
    });
  });

  describe('should return "object" when passed an object', () => {
    it('should return "object" when passed {}', () => {
      expect(checkDatatype({})).toBe('object');
    });

    it('should return "object" when passed { a: 1 }', () => {
      expect(checkDatatype({ a: 1 })).toBe('object');
    });

    it('should return "object" when passed { a: "a" }', () => {
      expect(checkDatatype({ a: 'a' })).toBe('object');
    });

    it('should return "object" when passed { a: true }', () => {
      expect(checkDatatype({ a: true })).toBe('object');
    });

    it('should return "object" when passed { a: null }', () => {
      expect(checkDatatype({ a: null })).toBe('object');
    });

    it('should return "object" when passed { a: undefined }', () => {
      expect(checkDatatype({ a: undefined })).toBe('object');
    });

    it('should return "object" when passed { a: 1, b: "a", c: true, d: null, e: undefined }', () => {
      expect(checkDatatype({ a: 1, b: 'a', c: true, d: null, e: undefined })).toBe('object');
    });
  });

  describe('should return "function" when passed a function', () => {
    it('should return "function" when passed function () {}', () => {
      expect(checkDatatype(function () {})).toBe('function');
    });

    it('should return "function" when passed () => {}', () => {
      expect(checkDatatype(() => {})).toBe('function');
    });
  });
});
