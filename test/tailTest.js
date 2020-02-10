const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return [2, 3, 4] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  })

  it("should return [] when passed ['hi']", () => {
    assert.deepEqual(tail(['hi']), []);
  })

  it('should return [] when passed []', () => {
    assert.deepEqual(tail([]), []);
  })
})