import { letterCombinations } from './letter_combination.js';

describe('letterCombinations', () => {
  it ('should return the correct combinations for 23', () => {
    const number = '23';
    const expected = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
    const result = letterCombinations(number);
    expect(result).toEqual(expected);
});

  it ('should return the correct combinations for 234', () => {
    const number = '234';
    const expected = ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi", "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi", "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"];
    const result = letterCombinations(number);
    expect(result).toEqual(expected);
  });

  it("should return 27 combinations", () => {
    const number = "234";
    const rta = letterCombinations(number);
    expect(rta.length).toEqual(27);
  });

  it("should return 48 combinations", () => {
    const number = "967";
    const rta = letterCombinations(number);
    expect(rta.length).toEqual(48);
  });
});

//in cmd: npm test letter_combination_tests.js
