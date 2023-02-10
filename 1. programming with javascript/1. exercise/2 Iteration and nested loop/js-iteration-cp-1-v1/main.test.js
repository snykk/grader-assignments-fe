const { expect, describe, it } = require('@jest/globals');
const reverseUnique = require('./main');

describe('reverse unique function can reverse word', () => {
  describe('when input string "greating"', () => {
    it('returns string "gnitaerg"', () => {
      expect(reverseUnique('greating')).toBe('gnitaerg');
    });
  });

  describe('when input string "learning"', () => {
    it('returns string "gninrael"', () => {
      expect(reverseUnique('learning')).toBe('gninrael');
    });
  });

  describe('when input string "history"', () => {
    it('returns string "yrotsih"', () => {
      expect(reverseUnique('history')).toBe('yrotsih');
    });
  });

  describe('when input string "javascript"', () => {
    it('returns string "tpircsavaj"', () => {
      expect(reverseUnique('javascript')).toBe('tpircsavaj');
    });
  });
});

describe('reverse unique function can reverse sentence regardless lowercase or uppercase', () => {
  describe('when input string "RuangGuru"', () => {
    it('returns string "uruGgnauR"', () => {
      expect(reverseUnique('RuangGuru')).toBe('uruGgnauR');
    });
  });

  describe('when input string "I am learning Javascript"', () => {
    it('returns string tpircsavaJ gninrael ma I', () => {
      expect(reverseUnique('I am learning Javascript')).toBe('tpircsavaJ gninrael ma I');
    });
  });
});

describe('reverse unique function can reverse string and remove duplicate consequence string', () => {
  describe('when input string "Book"', () => {
    it('returns string "uruGnauR"', () => {
      expect(reverseUnique('Book')).toBe('koB');
    });
  });

  describe('when input string "Balloon"', () => {
    it('returns string "nolaB"', () => {
      expect(reverseUnique('Balloon')).toBe('nolaB');
    });
  });

  describe('when input string "I am reading a book how to hunt a deer"', () => {
    it('returns string tpircsavaj gninrael ma I', () => {
      expect(reverseUnique('I am reading a book how to hunt a deer')).toBe('red a tnuh ot woh kob a gnidaer ma I');
    });
  });
});
