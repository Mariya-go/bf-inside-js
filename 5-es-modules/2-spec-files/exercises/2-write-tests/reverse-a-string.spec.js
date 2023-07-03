// #todo

import { reverseAString } from './reverse-a-string.js';

describe('it should reverseAString strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverseAString()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverseAString('')).toEqual('');
    });
    it('"toads" should return "sdaot"', () => {
      expect(reverseAString('toads')).toEqual('sdaot');
    });
    // write at least 5 more tests
     it('palindrom "racecar" should return "racecar"', () => {
      expect(reverseAString('racecar')).toEqual('racecar');
    });
    it('is case sensitive', () => {
      expect(reverseAString('Racecar')).toEqual('racecaR');
    });
    it('with special characters', () => {
      expect(reverseAString(',<.>/?')).toEqual('?/>.<,');
    });
    it('all upper case', () => {
      expect(reverseAString('QWERTY')).toEqual('YTREWQ');
    });
    it('numbers in string', () => {
      expect(reverseAString('12345')).toEqual('54321');
    });
  });
  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverseAString(true)).toEqual("text is not a string");
    });
    // write at least 3 more tests
    it('numbers should return "text is not a string"', () => {
      expect(reverseAString(12345)).toEqual("text is not a string");
    });
    it('null should return "text is not a string"', () => {
      expect(reverseAString(null)).toEqual("text is not a string");
    });
    it('NaN should return "text is not a string"', () => {
      expect(reverseAString(NaN)).toEqual("text is not a string");
    });
  });
});