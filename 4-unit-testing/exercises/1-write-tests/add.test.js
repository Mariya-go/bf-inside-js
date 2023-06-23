// #todo

'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
const sum = (x = 0, y = 0) => (x + y);

describe('Get a sum of two numbers', () => {
  describe('get a sum of different numbers', () => {
    it('Sum of positive numbers', () => {
      const expected = 15;
      const actual = sum(5, 10);
      expect(actual).toEqual(expected);
    });
    it('Sum of negative numbers', () => {
      const expected = -15;
      const actual = sum(-5, -10);
      expect(actual).toEqual(expected);
    });
    test('Sum of negative and positive numbers', () => {
      const expected = 0;
      const actual = sum(-5, 5);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  describe('Get a sum of default parameters', () => {
    it('Sum of 0 and 0', () => {
      const expected = 0;
      const actual = sum(0, 0);
      expect(actual).toEqual(expected);
    });
    it('Sum of 0 and -0', () => {
      const expected = 0;
      const actual = sum(0, -0);
      expect(actual).toEqual(expected);
    });
    it('Sum of -0 and -0', () => {
      const expected = -0;
      const actual = sum(-0, -0);
      expect(actual).toEqual(expected);
    });
    // ...
  });
  // ...
});
