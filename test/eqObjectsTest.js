const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3'};

const person1 = { name: 'Berk', age: 24};
const person2 = { name: 'Sarah', age: 24};

const obj1 = { a: { z: 1 }, b: 2 };
const obj2 = { a: { z: 1 }, b: 2 };

const obj3 = { a: { y: 0, z: 1 }, b: 2 };
const obj4 = { a: { z: 1 }, b: 2 };

describe('#eqObjects', () => {
  it("should return true when passed ab, ba", () => {
    assert.isTrue(eqObjects(ab, ba));
  })

  it("should return false when passed ab, abc", () => {
    assert.isFalse(eqObjects(ab, abc));
  })

  it("should return false when passed person1, person2", () => {
    assert.isFalse(eqObjects(person1, person2));
  })

  it("should return true when passed obj1, obj2", () => {
    assert.isTrue(eqObjects(obj1, obj2));
  })

  it("should return false when passed obj3, obj4", () => {
    assert.isFalse(eqObjects(obj3, obj4));
  })

})