const { expect } = require('chai');
const allUniqueChars = require('./isUnique.js');

const AdditionalDataStructures = [false, true];
for (let ADS of AdditionalDataStructures) {

  describe('All Unique Characters: AdditionalDataStructures: ' + ADS, function() {

    [
      'abcdefghi',
      'jklpoiuqwerzxcvmnsadf',
      '1234567890',
      'AaBbCcDdeFg1234567890(*&^%$#@!)'
    ].forEach(arg => {

      it(`returns true for unique string: '${arg}'`, function() {
        expect(allUniqueChars(arg.split(''), ADS)).to.be.true;
      });

    });

    [
      'abcadef',
      'aaaaaaaaaa',
      'abcdefghijklmnopqrstuvwxyza',
      '1234567890asdklf1',
      '!@#$%^&*()(*#($&#(*$&#*($&#()))))'
    ].forEach(arg => {

      it(`returns false for string with dupes: '${arg}'`, function() {
        expect(allUniqueChars(arg.split(''), ADS)).to.be.false;
      });

    });

  });
}
