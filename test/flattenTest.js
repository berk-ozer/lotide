const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it('should return [1, 2, 3, 4] when passed [1, 2, [3, 4]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
  })

  it("should return [45, 60, 34, 'hallo'] when passed [45, [60], 34, 'hallo']", () => {
    assert.deepEqual(flatten([45, [60], 34, 'hallo']), [45, 60, 34, 'hallo']);
  })

  it("should return [1, 2, 'yes'] when passed [1, 2, 'yes']", () => {
    assert.deepEqual(flatten([1, 2, 'yes']), [1, 2, 'yes']);
  })

  it("should return [true, false, 34, 'ok', 'maybe', 3, 5] when passed [true, [false, 34], 'ok', ['maybe', 3, 5]]", () => {
    assert.deepEqual(flatten([true, [false, 34], 'ok', ['maybe', 3, 5]]), [true, false, 34, 'ok', 'maybe', 3, 5]);
  })
})