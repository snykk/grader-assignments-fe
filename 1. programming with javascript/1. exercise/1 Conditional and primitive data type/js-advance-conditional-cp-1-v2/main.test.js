const { expect, describe, it } = require('@jest/globals');
const rockPaperScissor = require('./main.js');

describe('rockPaperScissor', () => {
  describe('Player 1 using rock', () => {
    it('Player 2 using rock', () => {
      expect(rockPaperScissor('rock', 'rock')).toMatch('Draw!');
    });

    it('Player 2 using paper', () => {
      expect(rockPaperScissor('rock', 'paper')).toMatch('Player 2 Won!');
    });

    it('Player 2 using scissor', () => {
      expect(rockPaperScissor('rock', 'scissor')).toMatch('Player 1 Won!');
    });
  });

  describe('Player 1 using paper', () => {
    it('Player 2 using rock', () => {
      expect(rockPaperScissor('paper', 'rock')).toMatch('Player 1 Won!');
    });

    it('Player 2 using paper', () => {
      expect(rockPaperScissor('paper', 'paper')).toMatch('Draw!');
    });

    it('Player 2 using scissor', () => {
      expect(rockPaperScissor('paper', 'scissor')).toMatch('Player 2 Won!');
    });
  });

  describe('Player 1 using scissor', () => {
    it('Player 2 using rock', () => {
      expect(rockPaperScissor('scissor', 'rock')).toMatch('Player 2 Won!');
    });

    it('Player 2 using paper', () => {
      expect(rockPaperScissor('scissor', 'paper')).toMatch('Player 1 Won!');
    });

    it('Player 2 using scissor', () => {
      expect(rockPaperScissor('scissor', 'scissor')).toMatch('Draw!');
    });
  });
});
