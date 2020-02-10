const assert = require('chai').assert;
const head = require('../head');

describe('#head', () => {
  it('should return 5 for [5, 6, 7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });

  it("should return 4 for [4]", () => {
    assert.strictEqual(head([4]), 4);
  });

  it("should return undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
});