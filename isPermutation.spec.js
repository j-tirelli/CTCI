const { expect } = require('chai');
const isPermutation = require('./isPermutation.js');

describe('Is Permutation of another string: ', function() {

  [
    ['abcdefghi', 'efgabcdhi'],
    ['jklpoiuqwerzxcvmnsadf', 'poiuqwerzxcvmnsjkladf'],
    ['1234567890', '0123456789'],
    ['AaBbCcDdeFg1234567890(*&^%$#@!)', ')AaBbCcDdeFg1234567890(*&^%$#@!']
  ].forEach(arg => {
    it(`returns true for unique string: '${arg[0]}' '${arg[1]}'`, function() {
      expect(isPermutation(arg[0], arg[1])).to.be.true;
    });

  });

  [
    ['abcdef', 'abcde'],
    ['abcde', 'abcdef'],
    ['abcdef', 'abcdeg'],
  ].forEach(arg => {

    it(`returns false for string with dupes: '${arg[0]}' '${arg[1]}'`, function() {
      expect(isPermutation(arg[0], arg[1])).to.be.false;
    });

  });

});
