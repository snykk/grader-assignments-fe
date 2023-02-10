const { expect, describe, it } = require('@jest/globals');
const trasureHunter = require('./main');

describe('trasureHunter function should return amount of treasure', () => {
  it('daily log "$x$#x$" should return 185', () => {
    expect(trasureHunter('$x$#x$')).toBe(185);
  });
  it('daily log "$$#x$$" should return 290', () => {
    expect(trasureHunter('$$#x$$')).toBe(290);
  });
  it('daily log "x$#x$#x$" should return 160', () => {
    expect(trasureHunter('x$#x$#x$')).toBe(160);
  });
  it('daily log "xx$#$#$#$###xx" should return 3.4375', () => {
    expect(trasureHunter('xx$#$#$#$###xx')).toBe(3.4375);
  });

  it('daily log "$#xxxxx" should return 0', () => {
    expect(trasureHunter('$#xxxxx')).toBe(0);
  });

  it('daily log "xxxxxxxx" should return 0', () => {
    expect(trasureHunter('xxxxxxxx')).toBe(0);
  });

  it('daily log "#x#x#x#" should return 0', () => {
    expect(trasureHunter('#x#x#x#')).toBe(0);
  });
});
