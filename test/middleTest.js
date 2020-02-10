const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [2] when passed [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return [2, 3] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("should return ['hello'] when passed ['hi', 'hello', 'what']", () => {
    assert.deepEqual(middle(['hi', 'hello', 'what']), ['hello']);
  });

  it('should return [] when passed [true, false]', () => {
    assert.deepEqual(middle([true, false]), []);
  });

  it("should return [false, 'yes'] when passed ['what', 45, false, 'yes', 22, 3]", () => {
    assert.deepEqual(middle(['what', 45, false, 'yes', 22, 3]), [false, 'yes']);
  });

  it("should return [] when passed ['one thing']", () => {
    assert.deepEqual(middle(['one thing']), []);
  });
});