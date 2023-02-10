const { expect, describe, it } = require('@jest/globals');
const calculate = require('./main');

describe('test function calculate', () => {
  describe('test if number1 is even and number2 is even', () => {
    it('should return 0 when number1 = 2 and number2 = 2', (done) => {
      function callback(data) {
        expect(data).toBe(0);
        done();
      }
      calculate(2, 2, callback);
    });

    it('should return 8 when number1 = 10 and number2 = 2', (done) => {
      function callback(data) {
        expect(data).toBe(8);
        done();
      }
      calculate(10, 2, callback);
    });

    it('should return -6 when number1 = 2 and number2 = 8', (done) => {
      function callback(data) {
        expect(data).toBe(-6);
        done();
      }
      calculate(2, 8, callback);
    });
  });
  describe('test if number1 is odd', () => {
    it('should return 2 when number1 = 1 and number2 = 2', (done) => {
      function callback(data) {
        expect(data).toBe(2);
        done();
      }
      calculate(1, 2, callback);
    });

    it('should return 21 when number1 = 3 and number2 = 6', (done) => {
      function callback(data) {
        expect(data).toBe(18);
        done();
      }
      calculate(3, 6, callback);
    });

    it('should return 14 when number1 = 7 and number2 = 2', (done) => {
      function callback(data) {
        expect(data).toBe(14);
        done();
      }
      calculate(7, 2, callback);
    });
  });
  describe('test if number1 is even', () => {
    it('should return 7 when number1 = 6 and number2 = 1', (done) => {
      function callback(data) {
        expect(data).toBe(7);
        done();
      }
      calculate(6, 1, callback);
    });

    it('should return 15 when number1 = 10 and number2 = 5', (done) => {
      function callback(data) {
        expect(data).toBe(15);
        done();
      }
      calculate(10, 5, callback);
    });

    it('should return 3 when number1 = 2 and number2 = 1', (done) => {
      function callback(data) {
        expect(data).toBe(3);
        done();
      }
      calculate(2, 1, callback);
    });
  });
});
