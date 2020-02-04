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
const middle = function(array) {
  const midIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return [];

  } else if (array.length % 2 === 0) {
    return [array[midIndex - 1], array[midIndex]];

  } else {
    return [array[midIndex]];
  }

};

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle(['hi', 'hello', 'what']), ['hello']);
assertArraysEqual(middle([true, false]), []);
assertArraysEqual(middle(['what', 45, false, 'yes', 22, 3]), [false, 'yes']);
assertArraysEqual(middle(['one thing']), []);