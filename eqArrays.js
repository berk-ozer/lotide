const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
assertEqual(eqArrays(['hello', false, 42], ['hello', false, 42]), true);
assertEqual(eqArrays([false, true], ['', 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);

