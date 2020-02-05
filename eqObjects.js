// ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const eqObjects = function(object1, object2) {

};

// TEST CASES
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c: '3'};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
