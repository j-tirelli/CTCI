const { expect } = require('chai');
const URLify = require('./URLify.js');

describe('Create Valid URIs: ', function() {
  const expected =   [
    'a%20d%20f',
    'ad%20%20f',
  ];

  [
    ' a d f ',
    'ad  f',
  ].forEach((arg, i) => {

    it(`returns true for unique string: '${arg}'`, function() {
      expect(URLify(arg)).to.equal(expected[i]);
    });

  });
});