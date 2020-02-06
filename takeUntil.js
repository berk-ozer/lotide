// ASSERT FUNCTIONS
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
const takeUntil = (array, callback) => {
  let output = [];

  for (const element of array) {
    if (callback(element)) {
      break;
    } else {
      output.push(element);
    }
  }

  return output;
};

// TEST CODE
const numbers = [4, 8, 15, 16, 23, 42, 54, 67, 87, 134];
const result1 = takeUntil(numbers, num => num > 42);

assertArraysEqual(result1, [4, 8, 15, 16, 23, 42]);

const sentence = ['Hi', 'there', 'Mr', 'Person', 'you', 'are', 'silly'];
const result2 = takeUntil(sentence, word => word === 'you');

assertArraysEqual(result2, ['Hi', 'there', 'Mr', 'Person']);