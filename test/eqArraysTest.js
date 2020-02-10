const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it("should return true when passed [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  })

  it("should return false when passed ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['1', '2', 3]));
  })
  
  it("should return true when passed [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  })

  it("should return false when passed [[2, 3], [4]] and [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  })
})