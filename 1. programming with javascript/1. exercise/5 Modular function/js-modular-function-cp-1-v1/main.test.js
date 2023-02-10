const { expect, describe, it } = require('@jest/globals');
const { kelvinToCelsius, kelvinToFahrenheit, celsiusToFahrenheit, celsiusToKelvin, fahrenheitToKelvin, fahrenheitToCelsius, convertTemperature } = require('./main');

describe('kelvinToCelsius', () => {
  it('should return 0.00 when given 273.15', () => {
    expect(kelvinToCelsius(273.15)).toBe(0.00);
  });
  it('should return -273.15 when given 0', () => {
    expect(kelvinToCelsius(0)).toBe(-273.15);
  });
  it('should return 100.00 when given 373.15', () => {
    expect(kelvinToCelsius(373.15)).toBe(100.00);
  });
});

describe('kelvinToFahrenheit', () => {
  it('should return 32.00 when given 273.15', () => {
    expect(kelvinToFahrenheit(273.15)).toBe(32.00);
  });
  it('should return -459.67 when given 0', () => {
    expect(kelvinToFahrenheit(0)).toBe(-459.67);
  });
  it('should return 212.00 when given 373.15', () => {
    expect(kelvinToFahrenheit(373.15)).toBe(212.00);
  });
});

describe('celsiusToFahrenheit', () => {
  it('should return 32.00 when given 0', () => {
    expect(celsiusToFahrenheit(0)).toBe(32.00);
  });
  it('should return 14.00 when given -10', () => {
    expect(celsiusToFahrenheit(-10)).toBe(14.00);
  });
  it('should return 212.00 when given 100', () => {
    expect(celsiusToFahrenheit(100)).toBe(212.00);
  });
});

describe('celsiusToKelvin', () => {
  it('should return 273.15 when given 0', () => {
    expect(celsiusToKelvin(0)).toBe(273.15);
  });
  it('should return 0.00 when given -273.15', () => {
    expect(celsiusToKelvin(-273.15)).toBe(0.00);
  });
  it('should return 373.15 when given 100', () => {
    expect(celsiusToKelvin(100)).toBe(373.15);
  });
});

describe('fahrenheitToKelvin', () => {
  it('should return 255.37 when given 0', () => {
    expect(fahrenheitToKelvin(0)).toBe(255.37);
  });
  it('should return 0.00 when given -459.67', () => {
    expect(fahrenheitToKelvin(-459.67)).toBe(0.00);
  });
  it('should return 373.15 when given 212', () => {
    expect(fahrenheitToKelvin(212)).toBe(373.15);
  });
});

describe('fahrenheitToCelsius', () => {
  it('should return -17.78 when given 0', () => {
    expect(fahrenheitToCelsius(0)).toBe(-17.78);
  });
  it('should return -273.15 when given -459.67', () => {
    expect(fahrenheitToCelsius(-459.67)).toBe(-273.15);
  });
  it('should return 100.00 when given 212', () => {
    expect(fahrenheitToCelsius(212)).toBe(100.00);
  });
});

describe('convertTemperature', () => {
  it('should return 273.15 when given 0, C, K', () => {
    expect(convertTemperature(0, 'C', 'K')).toBe(273.15);
  });
  it('should return 32.00 when given 0, C, F', () => {
    expect(convertTemperature(0, 'C', 'F')).toBe(32.00);
  });
  it('should return -17.78 when given 0, F, C', () => {
    expect(convertTemperature(0, 'F', 'C')).toBe(-17.78);
  });
  it('should return 255.37 when given 0, F, K', () => {
    expect(convertTemperature(0, 'F', 'K')).toBe(255.37);
  });
  it('should return -273.15 when given 0, K, C', () => {
    expect(convertTemperature(0, 'K', 'C')).toBe(-273.15);
  });
  it('should return -459.67 when given 0, K, F', () => {
    expect(convertTemperature(0, 'K', 'F')).toBe(-459.67);
  });
});
