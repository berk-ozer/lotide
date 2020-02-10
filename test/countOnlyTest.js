const assert = require('chai').assert;
const countOnly = require('../countOnly');

const input1 = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const expectedResult1 = {
  'Jason': 1,
  'Fang': 2
}

describe('#countOnly', () => {
  it('should return expectedResult1 when passed in input1', () => {
    assert.deepEqual(countOnly(input1, { "Jason": true, "Karima": true, "Fang": true }), expectedResult1);
  })
})
