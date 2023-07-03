// #todo

import { someLong } from './some-long.js';

describe('Find out, if some string in array more or equal than 5 characters', () => {
  describe('how it works with different arrays', () => {
    it('array with short strings', () => {
      const expected = false;
      const actual = someLong(['aa', 'bbb', 'cccc']);
      expect(actual).toEqual(expected);
    });
    it('array with long strings', () => {
      const expected = true;
      const actual = someLong(['aaaaaa', 'bbbbbbb', 'cccccccc']);
      expect(actual).toEqual(expected);
    });
    it('array with mixed strings', () => {
      const expected = true;
      const actual = someLong(['aaa', 'bbbbbb', 'ccccccc']);
      expect(actual).toEqual(expected);
    });
    
  });
  describe('with defolt array', () => {
    it('empty array', () => {
      const expected = false;
      const actual = someLong([]);
      expect(actual).toEqual(expected);
    });
  });
});
