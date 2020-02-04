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
const flatten = function(array) {
  let flatArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        flatArray.push(innerElement);
      }
    } else {
      flatArray.push(element);
    }
  }

  return flatArray;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten([1, 2, 'yes']), [1, 2, 'yes']);
assertArraysEqual(flatten([45, [60], 34, 'hallo']), [45, 60, 34, 'hallo']);
assertArraysEqual(flatten([true, [false, 34], 'ok', ['maybe', 3, 5]]), [true, false, 34, 'ok', 'maybe', 3, 5]);