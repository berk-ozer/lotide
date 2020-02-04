// TEST / ASSERTION FUNCTIONS
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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: Arrays are equal.`);

  } else {
    console.log(`❌❌❌ Assertion Failed: Arrays are NOT equal.`);
  }
};

// ACTUAL FUNCTION
const without = function(array, excludedItems) {
  let afterExclusion = [];

  for (let element of array) {
    if (!excludedItems.includes(element)) {
      afterExclusion.push(element);
    }
  }

  return afterExclusion;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
assertArraysEqual(without([1, 3, 5, 7, 9, 11], [5, 3, 11]), [1, 7, 9]);
assertArraysEqual(without([true, 'is it', 42, undefined], [undefined, 'is it']), [true, 42]);

// checking to make sure original array is not modified
const originalArray = [11, 22, 33];
without(originalArray, [11, 22]);
assertArraysEqual(originalArray, [11, 22, 33]);