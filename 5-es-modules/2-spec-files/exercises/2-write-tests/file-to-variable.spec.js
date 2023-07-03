// #todo
import { fileToVariable } from './file-to-variable.js';

describe('fileToVariable: Converts a kebab-case file name from to camel-case variable name.', () => {
  describe('how the function converts a kebab-case file name from to camel-case', () => {
    it('one world', () => {
      const expected = 'test';
      const returned = fileToVariable('test.js');
      expect(returned).toEqual(expected);
    });
    it("two worls", () => {
      const expected = 'doMagic';
      const returned = fileToVariable('do-magic.js');
      expect(returned).toEqual(expected);
    });
    it('more than two worlds', () => {
      const expected = 'letsGoTestIt';
      const returned = fileToVariable('lets-go-test-it.js');
      expect(returned).toEqual(expected);
    });
    it('one letter worlds', () => {
      const expected = 'aBC';
      const returned = fileToVariable('a-b-c.js');
      expect(returned).toEqual(expected);
    });
  });
  describe('the default parameters', () => {
    it('has an empty string for the default parameter', () => {
      const expected = '';
      const returned = fileToVariable('');
      expect(returned).toEqual(expected);
    });
    
  });
});
