const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

const input1 = letterPositions('hello');
const expectedResult1 = {
  'h': [0],
  'e': [1],
  'l': [2, 3],
  'o': [4]
};

const input2 = letterPositions('lighthouse in the house');
const expectedResult2 = {
  'l': [0],
  'i': [1, 11],
  'g': [2],
  'h': [3, 5, 15, 18],
  't': [4, 14],
  'o': [6, 19],
  'u': [7, 20],
  's': [8, 21],
  'e': [9, 16, 22],
  'n': [12]
}

describe('#letterPositions', () => {
  it("should return expectedResult1 when passed input1", () => {
    assert.deepEqual(input1, expectedResult1);
  })

  it("should return expectedResult2 when passed input2", () => {
    assert.deepEqual(input2, expectedResult2);
  })

})