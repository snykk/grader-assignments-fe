const { expect, describe, it } = require('@jest/globals');
const hollyKnight = require('./main.js');

describe('hollyKnight', () => {
  describe('Holly Knight should be Win The Battle!', () => {
    it('Holly Knight Lancelot, stamina 30, undead 20 => Win The Battle!', () => {
      expect(hollyKnight('Lancelot', 30, 20)).toMatch('Holly Knight Lancelot memenangkan pertempuran dengan mudah!');
    });

    it('Holly Knight Gareth, stamina 100, undead 10 => Win The Battle!', () => {
      expect(hollyKnight('Gareth', 100, 10)).toMatch('Holly Knight Gareth memenangkan pertempuran dengan mudah!');
    });
  });

  describe('Holly Knight should be Win The Battle Hard!', () => {
    it('Holly Knight Gallahad, stamina 10, undead 10 => Win The Battle Hard!', () => {
      expect(hollyKnight('Gallahad', 10, 10)).toMatch('Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!');
    });

    it('Holly Knight Lancelot, stamina 60, undead 60 => Win The Battle Hard!', () => {
      expect(hollyKnight('Lancelot', 60, 60)).toMatch('Beruntung Holly knight Lancelot berhasil mengalahkan 60 undead!');
    });
  });

  describe('Holly Knight should be defeat!', () => {
    it('Holly Knight Gareth, stamina 30, undead 50 => defeat!', () => {
      expect(hollyKnight('Gareth', 30, 50)).toMatch('Holly knight Gareth mengalahkan 30 undead, namun sayang holly knight Gareth gugur di medan perang!');
    });

    it('Holly Knight Percival, stamina 99, undead 100 => defeat!', () => {
      expect(hollyKnight('Percival', 99, 100)).toMatch('Holly knight Percival mengalahkan 99 undead, namun sayang holly knight Percival gugur di medan perang!');
    });
  });
});
