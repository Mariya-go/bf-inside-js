// #todo

import { keepLongStrings } from './keep-long-strings.js';

describe('Keep strings with more than given characters', () => {
  describe('get array with long strings from different arrays', () => {
    it('array with short strings', () => {
      const expected = [];
      const actual = keepLongStrings(['aa', 'bbb', 'cccc']);
      expect(actual).toEqual(expected);
    });
    it('array with long strings', () => {
      const expected = ['aaaaaa', 'bbbbbbb', 'cccccccc'];
      const actual = keepLongStrings(['aaaaaa', 'bbbbbbb', 'cccccccc']);
      expect(actual).toEqual(expected);
    });
    it('array with mixed strings', () => {
      const expected = ['bbbbbb', 'ccccccc'];
      const actual = keepLongStrings(['aaa', 'bbbbbb', 'ccccccc']);
      expect(actual).toEqual(expected);
    });
    
  });
  describe('get array from defolt array', () => {
    it('empty array', () => {
      const expected = [];
      const actual = keepLongStrings([]);
      expect(actual).toEqual(expected);
    });
  });
});
